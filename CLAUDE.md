# hardware-probe

Sonde matérielle locale exposée via un serveur MCP (Model Context Protocol). Elle lit les specs matérielles locales via `systeminformation` et relaie les demandes de recommandation vers le `remote-affiliate-api`.

## Stack

- **Runtime** : Node.js >= 18
- **Langage** : TypeScript (ESM)
- **Dépendance principale** : `@modelcontextprotocol/sdk`, `systeminformation`
- **Transport** : stdio (protocole MCP)

## Commandes

```bash
npm install       # Installer les dépendances
npm run build     # Compiler TypeScript → dist/
npm run dev       # Lancer sans compilation (tsx)
npm start         # Lancer depuis dist/ (après build)
```

## Variables d'environnement

| Variable         | Défaut                                  | Description                          |
|------------------|-----------------------------------------|--------------------------------------|
| `REMOTE_API_URL` | `http://localhost:3000/api/recommend`   | URL de l'API distante de recommandation |

## Outils MCP exposés

| Outil                        | Description                                                                 |
|------------------------------|-----------------------------------------------------------------------------|
| `analyze_local_system`       | Retourne CPU, RAM, carte mère et OS en JSON structuré. Aucun argument.     |
| `get_hardware_recommendation`| Collecte les specs locales et appelle `REMOTE_API_URL` avec query + budget. |
| `analyze_ram_pressure`       | Mémoire + swap + top 10 processus par RSS. Faits bruts uniquement.         |
| `check_storage_health`       | Par disque : type, taille, température, statut SMART, firmware. Faits bruts. |
| `thermal_profile`            | Températures CPU/GPU, fréquences courantes, utilisation/VRAM GPU. Faits bruts. |
| `diagnose_antivirus_impact`  | AV/EDR détectés + règles d'exclusion existantes (Windows/macOS/Linux/WSL2) + couverture des chemins dev chauds (`node_modules`, `.git`, …). Faits bruts. |

## Architecture

- `src/index.ts` — Point d'entrée unique : définition du serveur MCP, handlers `ListTools` et `CallTool`, helpers (`getLocalSpecs`, `getRamPressure`, `getStorageHealth`, `getThermalProfile`, `getAntivirusImpact`).
- **stdout réservé** au protocole MCP : ne jamais écrire sur stdout, utiliser stderr pour les logs.
- La sonde ne contient aucune logique métier : elle lit le matériel et relaie vers l'API distante.
- Les skills de diagnostic (`analyze_ram_pressure`, `check_storage_health`, `thermal_profile`, `diagnose_antivirus_impact`) renvoient uniquement des **faits bruts** (bytes, °C, GHz, statuts SMART, listes d'exclusions lues). Aucun seuil, aucune recommandation : l'interprétation est déléguée au LLM ou à l'API distante.
- `diagnose_antivirus_impact` est strictement read-only : `execFile` avec timeout 3 s, jamais de sudo, jamais d'écriture. Les vendors non-lisibles sont marqués `vendor_opaque` / `requires_elevation` / `not_installed` — pas de faux négatifs silencieux.

## Matrice de détection AV/EDR cross-OS

La skill `diagnose_antivirus_impact` lit les exclusions quand c'est possible sans privilège. Les vendors non lisibles sont marqués explicitement.

| OS | Lecture directe (status `read`) | Marqués `vendor_opaque` / `requires_elevation` |
|---|---|---|
| **Windows** | Windows Defender via `Get-MpPreference \| ConvertTo-Json` | CrowdStrike Falcon, Sophos, Symantec/Norton, McAfee, ESET, Kaspersky, MDE (tamper-protected ou cloud) |
| **macOS**   | MDE (`mdatp exclusion list --output json`), ClamAV (`/opt/homebrew/etc/clamav/clamd.conf`, `/usr/local/etc/clamav/clamd.conf`) | XProtect, CrowdStrike Falcon, Sophos, SentinelOne |
| **Linux**   | ClamAV (`/etc/clamav/clamd.conf` — directives `ExcludePath`, `OnAccessExcludePath`, `ExcludePUA`), MDE (`mdatp`) | CrowdStrike Falcon (`falconctl -g` requiert sudo), SentinelOne, ESET File Security |
| **WSL2**    | Fusion Defender via `powershell.exe` (détecté par `/proc/version` contenant `microsoft`) | — |

En complément, le skill observe 10 chemins dev chauds sous `cwd` (`node_modules`, `.git`, `dist`, `build`, `target`, `__pycache__`, `.venv`, `venv`, `.next`, `.turbo`) et indique pour chacun `existsOnDisk` et `coveredByAnyExclusion` (match par préfixe, insensible à la casse sur win32).

## Points importants

- Le build produit `dist/index.js` (ESM), référencé dans la config Claude Desktop.
- Timeout réseau de 15 s sur l'appel à `REMOTE_API_URL`.
- En cas d'erreur, le handler retourne `isError: true` avec un message descriptif (jamais de crash).
