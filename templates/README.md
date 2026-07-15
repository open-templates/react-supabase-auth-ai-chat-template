# repo-name

**React + Supabase Auth** SPA with an AI chat page. Pairs with [paired-repo-name](https://github.com/owner-username/paired-repo-name).

## Out-of-the-box features

| Feature | Description |
|---------|-------------|
| Auth | Google OAuth, email/password |
| `/` (authenticated) | Home — `GET /me` JWT debug |
| `/chat` (authenticated) | AI chat → `POST /chat` with Bearer JWT |
| Header | API health poll (`GET /health`) |

See [`index.md`](index.md).

## Quick start

```bash
bun install
cp .env.example .env.local
bun run dev
```

Set `VITE_API_BASE_URL` to your worker (default `http://localhost:8787`).

Maintained by [author-display-name](https://github.com/author-github-login).

## License

MIT
