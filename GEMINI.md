# Yamaru Hardware Probe (MCP)

## Guidelines
1. **Language**: All documentation (README) and code comments MUST be in English for public distribution.
2. **Distribution**: Published on GitHub Packages as `@yamaru-eu/hardware-probe`. Use `npx` for testing/install.
3. **Synchronization**: Automated "Squash & Sync" workflow to `yamaru-eu/hardware-probe`. 
   - NEVER commit sensitive data here as it will be mirrored publicly with a clean history.

## Commandes
```bash
npm install        # Installer les dépendances
npm run build      # Compiler TypeScript → dist/
npm run dev        # Lancer sans compilation (tsx)
npm run inspector  # Tester les outils dans le navigateur (node dist/index.js)
npm run lint       # Vérification des types via tsc
```

## Architecture Technique
- **Sonde Matérielle (si)** : Utilise `systeminformation` pour CPU, RAM, GPU, Stockage et Écrans.
- **Anonymisation** : Supprime les identifiants uniques (Serial, UUID, Hostname) avant l'envoi.
- **License**: Apache 2.0 (Yamaru Project Contributors).
- **Entry point**: `src/index.ts` with Shebang `#!/usr/bin/env node`.
