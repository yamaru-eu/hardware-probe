---
name: database-expert
description: Deep expertise in PostgreSQL, Prisma ORM, SQL optimization, and safe production migrations.
---

# Database Expert (PostgreSQL & Prisma)

This skill provides the high-level expertise required to manage, optimize, and evolve the Tech Hardware Advisor database layer.

## 1. Prisma Best Practices
- **Migrations vs. Push**: 
  - Use `npx prisma migrate dev` for local development to maintain history.
  - Use `npx prisma db push` for ephemeral environments or rapid prototyping where migration history is not critical.
  - Use `npx prisma migrate deploy` for formal production releases.
- **Client Generation**: Always ensure `npx prisma generate` is run after schema changes to maintain type safety.
- **Service Isolation**: In tests, always mock the Prisma service to avoid side effects on the local database.

## 2. PostgreSQL Optimization
- **Indexing Strategy**: 
  - Ensure all foreign keys have indexes (Prisma does this by default for relations).
  - Use `UNIQUE` constraints for natural identifiers (e.g., `huggingfaceId`, `ean`, `asin`).
  - Consider `GIN` indexes for JSONB fields if complex querying is required.
- **Query Performance**:
  - Use `explain analyze` to debug slow queries.
  - Avoid `n+1` queries by using Prisma's `include` or `select` appropriately.
  - Monitor connection pool size, especially in serverless-like environments (Railway).

## 3. Data Integrity & Constraints
- **Enforcement**: Use database-level constraints (`@unique`, `@check`) rather than just application-level checks.
- **Cascades**: Explicitly define `onDelete: Cascade` for child records (e.g., `Offer` belonging to a `Product`).
- **Timestamps**: Every model must have `createdAt` and `updatedAt` for auditability and sync tracking.

## 4. Production "Live Patching" Workflow
When modifying the production database via the public proxy:
1. **Backup/Safety**: Verify the `DATABASE_PUBLIC_URL` is correct.
2. **Dry Run**: Run `npx prisma migrate status` to check the current state.
3. **Apply**: Use `DATABASE_URL="..." npx prisma db push` for non-destructive schema synchronization.
4. **Verify**: Run `npx tsx src/scripts/check-db.ts` to confirm connectivity and record counts.

## 5. DB Review Checklist
Before approving a schema change, verify:
- [ ] No breaking changes to existing fields without a migration plan.
- [ ] Proper use of Scalar types (e.g., `Float` for prices, `Int` for counts).
- [ ] Presence of necessary unique constraints to prevent duplicates during syncs.
- [ ] Naming consistency (camelCase for fields, PascalCase for Models).
- [ ] Documentation of complex fields via triple-slash comments (`///`) or end-of-line comments.

## 6. Backup & Recovery Strategy

### Automated Backups (Railway)
- Railway performs daily snapshots of the Postgres volume.
- Use the Railway Dashboard to restore to a specific point-in-time if necessary.

### Manual Backups (Snapshotting)
Before a major migration or risky DB push, perform a manual dump:
```bash
# Using pg_dump with the public proxy URL
pg_dump "postgresql://postgres:password@host:port/railway" > backup_$(date +%Y%m%d_%H%M%S).sql
```

### Recovery Protocol
1. **Validation**: Check the integrity of the `.sql` file.
2. **Pre-requisite**: Ensure no active connections to the target DB.
3. **Restore**:
```bash
psql "postgresql://postgres:password@host:port/railway" < backup_file.sql
```
4. **Sync Verification**: After restore, run `npx tsx src/scripts/check-db.ts` to ensure the state is consistent.

