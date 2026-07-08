# Initialize from template

After **Use this template**, personalize the repository by copying files from `templates/` to the repo root.

## Run

Requires **Node.js 18+** only — no extra install for the wizard.

```bash
chmod +x scripts/init-from-template.sh   # once
./scripts/init-from-template.sh
```

Or:

```bash
bun run init
node scripts/init-from-template.mjs
```

**Step 1 — Maintainer:** Git identity from `git config` and `gh` CLI (accept or manual).  
**Step 2 — Repository:** owner, repo, and Dependabot bundler (Bun for this template).

```bash
./scripts/init-from-template.sh --yes
./scripts/init-from-template.sh --no-cleanup   # keep scripts for debugging
```

After init, the `scripts/` folder is removed. Pair with [cf-hono-supabase-api-template](https://github.com/open-templates/cf-hono-supabase-api-template) or [react-supabase-auth-template](https://github.com/open-templates/react-supabase-auth-template) using the same GitHub owner.

See [`templates/ABOUT_TEMPLATES.md`](../templates/ABOUT_TEMPLATES.md).
