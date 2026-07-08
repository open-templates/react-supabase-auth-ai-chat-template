# react-supabase-auth-ai-chat-template

**React + Vite + Supabase Auth** SPA with an authenticated **AI chat** page from [@open-templates](https://github.com/open-templates). Pairs with [cf-hono-supabase-gemini-api-template](https://github.com/open-templates/cf-hono-supabase-gemini-api-template).

## Quick start

1. **Use this template** on GitHub, then clone your repo.
2. Personalize from `templates/`:

```bash
./scripts/init-from-template.sh
```

3. Install and run:

```bash
bun install
cp .env.example .env.local
bun run dev
```

4. Start the paired API worker ([cf-hono-supabase-gemini-api-template](https://github.com/open-templates/cf-hono-supabase-gemini-api-template)) on port `8787`.

See [`templates/ABOUT_TEMPLATES.md`](templates/ABOUT_TEMPLATES.md) and [`docs/INIT_TEMPLATE.md`](docs/INIT_TEMPLATE.md).

## Out-of-the-box features

| Feature | Description |
|---------|-------------|
| Google OAuth + email auth | Sign in, sign up, password recovery |
| API health indicator | Header polls `GET /health` |
| **Home (`/`)** | `GET /me` JWT verification + session debug |
| **AI chat (`/chat`)** | Chat UI → `POST /chat` with Bearer JWT |
| Session + token refresh | `apiFetch` attaches JWT and retries on `401` |

See [`specs/FEATURES.md`](specs/FEATURES.md).

## Environment

| Variable | Purpose |
|----------|---------|
| `VITE_SUPABASE_URL` | Supabase project URL |
| `VITE_SUPABASE_ANON_KEY` | Supabase anon key |
| `VITE_API_BASE_URL` | Worker URL (default `http://localhost:8787`) |

## License

MIT
