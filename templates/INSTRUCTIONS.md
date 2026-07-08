# Agent & developer instructions — repo-name

Use this file when turning this template into a **production SPA** with Supabase Auth and a Cloudflare Worker backend. Pairs with [paired-repo-name](https://github.com/owner-username/paired-repo-name) as the demo backend.

## What ships out of the box

| Feature | Description |
|---------|-------------|
| Google OAuth | Sign in / sign up via Supabase |
| Email auth | Login, signup, password recovery & reset |
| API health indicator | Header polls `GET /health` |
| Protected home | Calls `GET /me` with JWT |

Details: [`specs/FEATURES.md`](specs/FEATURES.md)

## Prerequisites

1. Supabase project — see [`docs/SUPABASE_SETUP.md`](docs/SUPABASE_SETUP.md)
2. Cloudflare Worker API — deploy or run [paired-repo-name](https://github.com/owner-username/paired-repo-name) locally on port `8787`
3. Copy `.env.example` → `.env.local` and set `VITE_*` variables

## Local development

```bash
bun install
cp .env.example .env.local
bun run dev
```

## Extension guidance

- Add routes under `src/pages/` and register in `src/main.tsx`
- API client: `src/api/`
- Auth flows: `src/auth/`
