# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0] - 2026-07-08

### Added

- **React 19 + Vite + Bun** SPA with TypeScript, Tailwind CSS, and shadcn/ui components.
- **Supabase Auth** — Google OAuth, email/password sign-up, sign-in, password recovery, and reset.
- **Auth routing** with guest-only and authenticated guards (`/login`, `/signup`, `/recover-password`, `/reset-password`).
- **Session handling** — `AuthContext`, `localStorage['x-auth-token']`, automatic token refresh on `401` via `apiFetch`.
- **Home (`/`)** — post-login landing with Supabase session display and `GET /me` JWT verification (debug/security check).
- **AI chat (`/chat`)** — authenticated chat UI calling `POST /chat` with Bearer JWT.
- **Multi-turn conversations** — each send includes prior thread messages in `history` for follow-up context.
- **Chat sidebar** — `sessionStorage` thread list (new chat, switch, delete) for the current browser session.
- **Header** — API health poll (`GET /health` every 30s), Home/Chat nav, theme toggle, sign out.
- **API modules** — `src/api/health.ts`, `src/api/me.ts`, `src/api/chat.ts` on top of shared `apiFetch`.
- **Feature specification** at [`specs/FEATURES.md`](specs/FEATURES.md).
- **Pairing** with [cf-hono-supabase-gemini-api-template](https://github.com/open-templates/cf-hono-supabase-gemini-api-template).
- **Template init wizard** and shared `@open-templates/specs` scaffolding.

---

## Repository documents

[README](README.md) | [INSTRUCTIONS](INSTRUCTIONS.md) | **CHANGELOG** | [CONTRIBUTING](CONTRIBUTING.md) | [SECURITY](SECURITY.md) | [CODE_OF_CONDUCT](CODE_OF_CONDUCT.md)
