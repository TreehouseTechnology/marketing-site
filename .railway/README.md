# Railway IaC (proposed, not applied)

This is the **Railway-only preparation** for [hosting migration #13](https://github.com/TreehouseTechnology/marketing-site/issues/13). It does not migrate production or decommission Amplify. `amplify.yml` remains the active AWS Hosting configuration until the verified cutover.

## What this declares

- One Next.js service (`marketing-site`) sourced from `TreehouseTechnology/marketing-site`, branch `main`.
- Railpack's normal Node/pnpm detection, with explicit `pnpm build` and `pnpm start` commands. The repository already pins Node in `.nvmrc` and Node/pnpm in `package.json`.
- A deployment readiness check at `GET /api/health` (HTTP 200, no external dependencies) with a 120-second timeout.
- The existing `NODEMAILER_EMAIL` and `NODEMAILER_PASSWORD` variable names. `preserve()` **does not create or populate secrets**; it keeps any values already configured in Railway. Values must be supplied through Railway's variable controls, never in this repository.

The IaC authoring SDK lives in this separate, private tooling package so the deployed Next.js application and its pnpm lockfile do not gain a runtime dependency on the Railway SDK. No Dockerfile, database, or other service is required.

## Review when Railway is available

1. Install the Railway CLI, authenticate, and link to the **intended** Railway project and environment using `railway login` and `railway link`.
2. Install the pinned IaC SDK locally: `npm install --prefix .railway --no-package-lock` (one-time tooling setup; do not deploy the `.railway` directory as its own service).
3. Check the linked project/environment and existing service names. The IaC declares `marketing-site`; if an existing Railway project or service has a different name, **reconcile the file against `railway config pull` and review the plan before applying**. A whole-project IaC plan can delete resources omitted from the file.
4. Configure `NODEMAILER_EMAIL` and `NODEMAILER_PASSWORD` in the intended Railway environment, if not already present. Keep the password sealed. Do not copy it from AWS SSM into Git, CLI output, or logs.
5. Run `railway config plan` from the repository root and examine all adds, changes, and deletes. **Do not apply** until Railway is healthy and the plan is intentionally approved. `railway config apply` is a separate, later migration step.
6. After applying in a future step, verify the assigned Railway domain, `/api/health`, site routes, MDX, and contact-form delivery before moving DNS.

No production domain is declared yet: `treehousetechnology.io` must stay on Amplify during parallel validation. GitHub Actions IaC auto-apply, DNS changes, secret migration, and AWS cleanup are intentionally deferred. The remaining issue #13 acceptance criteria are not completed by this preparation.

References: [Railway IaC](https://docs.railway.com/infrastructure-as-code), [IaC reference](https://docs.railway.com/infrastructure-as-code/reference), and [deployment healthchecks](https://docs.railway.com/deployments/healthchecks).
