# Yamaru Hardware Probe (MCP)

## Guidelines
1. **Language**: All documentation (README) and code comments MUST be in English for public distribution.
2. **Distribution**: Published on GitHub Packages and npmjs as `@yamaru-eu/hardware-probe`.
3. **Synchronization**: Automated "Squash & Sync" workflow to `yamaru-eu/hardware-probe`. 
   - NEVER commit sensitive data here as it will be mirrored publicly with a clean history.
4. **Security**: 
   - `launch-mcp.sh` is ignored by git as it may contain production URLs or secrets.
   - Use `.env` (not tracked) for local configuration. See `.env.example`.
   - All unique hardware identifiers (Serial, UUID, Hostname) are anonymized before transmission.

## Lifecycle & Follow-up
- **Versioning**: Strictly follow [Semantic Versioning 2.0.0](https://semver.org/).
- **Release Notes**: Maintain a `CHANGELOG.md` following [Keep a Changelog](https://keepachangelog.com/en/1.1.0/). Update it before every version bump.
- **Branching Model**: 
  - `main`: Reflects the production-ready state (stable).
  - `feat/fix/*`: Feature or fix branches merged into main via PR.
- **Bundle Size**: 
  - Target `dist/` size under 50KB (unpacked).
  - Use `npm list --prod` to audit dependencies. Avoid adding heavy libraries unless essential.
- **Quality Assurance**:
  - `npm test`: Must pass before any merge.
  - `npm run lint`: Zero warnings allowed in CI.
  - **Prisma Integration**: Ensure hardware labels match the API's diagnostic engine expectations.

## Commands
```bash
npm install        # Install dependencies
npm run build      # Compile TypeScript → dist/
npm run dev        # Run without compilation (tsx)
npm run test       # Execute Vitest suite
npm run inspector  # Test tools in the browser
npm run lint       # Type checking via tsc
```

## Architecture Technique
- **Hardware Probe**: Uses `systeminformation` for CPU, RAM, GPU, Storage, and Screens.
- **Anonymization**: Removes unique identifiers (Serial, UUID, Hostname) before transmission.
- **License**: Apache 2.0 (Yamaru Project Contributors).
- **Entry point**: `src/index.ts` with Shebang `#!/usr/bin/env node`.
