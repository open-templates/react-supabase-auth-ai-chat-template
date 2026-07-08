# Frontend features specification

This document describes the intentional surface of **react-supabase-auth-ai-chat-template**.

## Purpose

A Supabase-authenticated SPA with a built-in **AI chat** UI. The browser holds the Supabase session; the Cloudflare Worker validates JWTs and runs chat completions server-side.

## Authentication

### Providers

- **Google OAuth**
- **Email/password** — sign up, sign in, recover password, reset password

### Session storage

- Supabase session via `onAuthStateChange`
- Access token in `localStorage['x-auth-token']` for `Authorization: Bearer` on API calls
- On `401`, `apiFetch` refreshes the session and retries once

### Auth routes

| Route | Guard | Component |
|-------|-------|-----------|
| `/login` | Guest | `LogInPage` |
| `/signup` | Guest | `SignUpPage` |
| `/recover-password` | Guest | `RecoverPasswordPage` |
| `/reset-password` | Auth | `ResetPasswordPage` |
| `/` | Auth | `HomePage` — `GET /me` JWT debug |
| `/chat` | Auth | `ChatPage` — `POST /chat` |

Guests hitting `/` or `/chat` are redirected to `/login`.

## API integration

| Module | Endpoint | Auth | Used by |
|--------|----------|------|---------|
| `health.ts` | `GET /health` | No | `useApiHealth` → `AppHeader` |
| `me.ts` | `GET /me` | Bearer JWT | `HomePage` |
| `chat.ts` | `POST /chat` | Bearer JWT | `ChatPage` |

Base URL: `import.meta.env.VITE_API_BASE_URL` (default `http://localhost:8787`).

### Home (`HomePage`)

- Default landing page after login (`/`)
- Shows Supabase session (client) and `GET /me` response (server-validated JWT)
- Link to `/chat` for AI completions

### AI chat (`ChatPage`)

- Available at `/chat`
- User messages are appended to local chat state
- Each send calls `sendChatMessage()` → `POST /chat` with body `{ "message": "..." }`
- Assistant reply is rendered from `data.reply`
- Enter sends; Shift+Enter inserts a newline

### Health indicator (`AppHeader`)

- Polls every **30 seconds**
- Visible on all pages including login

## Layout

```
App
└── ThemeProvider
    └── Router
        └── AuthProvider
            └── AppLayout
                ├── AppHeader
                └── Outlet → HomePage (/) or ChatPage (/chat) or auth pages
```

## Key files

| Path | Role |
|------|------|
| `src/pages/HomePage.tsx` | Authenticated home + `/me` debug |
| `src/pages/ChatPage.tsx` | Chat UI and message flow |
| `src/api/me.ts` | `GET /me` client |
| `src/api/chat.ts` | `POST /chat` client |
| `src/api/api.ts` | `apiFetch` with JWT + refresh |
| `src/auth/AuthContext.tsx` | Supabase auth state |
| `src/auth/AuthGuard.tsx` | Route protection |

## Backend pairing

Pairs with **cf-hono-supabase-gemini-api-template** (or any worker implementing the same `/health` and `/chat` contracts). See that repo's `specs/FEATURES.md` for response shapes.

## Extension guidelines

1. Add API modules under `src/api/` using `apiFetch`.
2. Register routes in `src/App.tsx` inside `AppLayout` with `AuthGuard`.
3. Update this file when adding user-visible behavior.
4. Never put provider API keys or secrets in `VITE_*` variables.
