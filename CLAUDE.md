# mcp-local-client

Serveur MCP (Model Context Protocol) qui lit les specs matérielles locales via `systeminformation` et relaie les demandes de recommandation vers le `remote-affiliate-api`.

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

## Architecture

- `src/index.ts` — Point d'entrée unique : définition du serveur MCP, handlers `ListTools` et `CallTool`, helper `getLocalSpecs()`.
- **stdout réservé** au protocole MCP : ne jamais écrire sur stdout, utiliser stderr pour les logs.
- Le client ne contient aucune logique métier : il sonde le matériel et relaie vers l'API distante.

## Points importants

- Le build produit `dist/index.js` (ESM), référencé dans la config Claude Desktop.
- Timeout réseau de 15 s sur l'appel à `REMOTE_API_URL`.
- En cas d'erreur, le handler retourne `isError: true` avec un message descriptif (jamais de crash).
