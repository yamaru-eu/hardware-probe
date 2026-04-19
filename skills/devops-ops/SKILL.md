---
name: devops-ops
description: Expert skill for managing the Tech Hardware Advisor DevOps stack (GitHub Actions, Railway, Prisma production ops, and repository syncing).
---

# DevOps & Infrastructure Operations

This skill provides the domain expertise for managing the hybrid infrastructure of the Tech Hardware Advisor project.

## 1. Multi-Repo Synchronization (Mirroring)
The project maintains a private source of truth (`claw`) and a public mirror for the hardware probe (`yamaru-eu/hardware-probe`).

- **Trigger**: Any push to `main` affecting `hardware-probe/**`.
- **Workflow (`sync-mcp.yml`)**: Automatically clones the public repo, cleans it, and syncs the content of `hardware-probe/`.
- **Naming**: Ensure all public-facing documentation uses the `@yamaru-eu/hardware-probe` rebranding.

## 2. Package Distribution
The hardware probe is distributed via GitHub Packages and npmjs.

- **Trigger**: New tags starting with `v*`.
- **Workflow (`publish-mcp.yml`)**: Builds the TypeScript project and publishes to both registries.
- **Verification**: Ensure `secrets.NPM_TOKEN` and `secrets.SYNC_PAT` are valid in GitHub Settings.

## 3. Railway Service Management
The project uses Railway for the backend API and the landing page.

### Service Identification
- `claw`: The `remote-affiliate-api` service.
- `claw-landingpage`: The React/Vite landing page.
- `Postgres`: The production database.

### Common CLI Operations
- **Logs**: `railway logs --service claw --lines 200`
- **Variables**: `railway variables --service claw`
- **Deployment**: `railway up` (from the root of the sub-project).
- **Environment**: Always use the `production` environment.

## 4. Production Database Operations (Prisma)
The production database is restricted to the internal network. Local maintenance must use the public proxy.

### Data Integrity Protocol
- **Schema Update**: `DATABASE_URL="<PUBLIC_URL>" npx prisma db push`
- **Seeding**: `DATABASE_URL="<PUBLIC_URL>" npm run seed:real`
- **Diagnostics**: `DATABASE_URL="<PUBLIC_URL>" npx tsx src/scripts/check-db.ts`

### Secrets & Variables
- `DATABASE_PUBLIC_URL`: Required for local-to-production maintenance.
- `ADMIN_KEY`: Required for triggering manual syncs via API (`X-Admin-Key`).

## 5. Security Mandates
- **Redaction**: Never commit production `DATABASE_URL` or `ADMIN_KEY` to any file. Use environment variables.
- **Identity**: Always use `erz <erz@users.noreply.github.com>` for commits to ensure anonymity.
- **Filtering**: Before syncing to the public mirror, verify that no sensitive configuration (e.g. `.env`) is copied.
