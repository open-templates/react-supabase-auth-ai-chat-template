# Agent & developer instructions — repo-name

**React + Supabase Auth + AI chat** SPA. Pairs with [paired-repo-name](https://github.com/owner-username/paired-repo-name).

## What ships out of the box

| Route | Auth | Description |
|-------|------|-------------|
| `/` | Bearer session | Home — `GET /me` debug + link to chat |
| `/chat` | Bearer session | AI chat UI → `POST /chat` |
| `/login`, `/signup`, … | Guest/auth | Supabase auth flows |

Details: [`specs/FEATURES.md`](specs/FEATURES.md)

## Local development

```bash
bun install
cp .env.example .env.local
bun run dev
```

Start the paired worker before testing chat.
