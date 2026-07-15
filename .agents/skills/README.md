# react-supabase-auth-ai-chat-template — Agent Skills Index

Skills in `.agents/skills/` teach agents how this repository works and how to extend it safely.

## Project status (current template)

**React + Supabase Auth** SPA with **AI chat UI**, paired with **cf-hono-supabase-gemini-api-template**:

- **Auth:** Google OAuth + email/password (`src/auth/`)
- **API calls:** `GET /health` (header), `GET /me` (home), `POST /chat` (chat) via `apiFetch`
- **Routes:** `/`, `/chat`, `/login`, `/signup`, `/recover-password`, `/reset-password`
- **Chat:** multi-turn threads in `sessionStorage`; assistant replies rendered with GFM markdown

Canonical OKF specs: [`index.md`](../../index.md) · OKF modules: [`.agents/skills/index.md`](index.md)

## Cursor SKILL.md packs

| Skill | Use when |
|-------|----------|
| [api-architecture](api-architecture/SKILL.md) | Adding or changing worker API client modules (`src/api/`) |
| [auth-routing](auth-routing/SKILL.md) | Auth flows, guards, OAuth, protected routes |
| [page-architecture](page-architecture/SKILL.md) | New pages, layout, header, home/chat page patterns |
| [supabase](supabase/SKILL.md) | Supabase Auth, dashboard config, MCP, CLI |
| [supabase-postgres-best-practices](supabase-postgres-best-practices/SKILL.md) | Schema design, RLS, query performance (when adding DB features) |

## OKF modules (local)

| Module | Use when |
|--------|----------|
| [api-fetch](modules/api-fetch.md) | `apiFetch` with Bearer token and 401 retry |
| [chat-page](modules/chat-page.md) | `ChatPage` send flow and UI state |
| [chat-threads](modules/chat-threads.md) | `sessionStorage` thread list and cleanup on sign-out |
| [chat-markdown](modules/chat-markdown.md) | `react-markdown` + `remark-gfm` for assistant bubbles |

Shared concepts (synced): [shared/auth/](shared/auth/) · [shared/supabase/](shared/supabase/)

## Project layout

```
src/
├── api/           # health.ts, me.ts, chat.ts, api.ts (apiFetch)
├── auth/          # AuthContext, AuthGuard, forms, auth pages
├── layout/        # AppLayout, AppHeader (health indicator)
├── pages/         # HomePage, ChatPage
├── components/    # chat-sidebar, chat-markdown, ui primitives
├── lib/           # supabase.ts, chat-threads.ts, i18n, utils
index.md           # OKF bundle root (repo root)
specs/features/    # numbered features + log
.agents/skills/    # OKF modules + Cursor SKILL.md packs
```

## Extension order

1. **Backend first** — add route in `cf-hono-supabase-gemini-api-template`, document in both `index.md` files
2. **Frontend API module** — `src/api/<feature>.ts` using `apiFetch`
3. **Page or component** — register route in `App.tsx` with `AuthGuard`
4. **Update** `specs/features/`, `.agents/skills/modules/`, and this file when patterns change
