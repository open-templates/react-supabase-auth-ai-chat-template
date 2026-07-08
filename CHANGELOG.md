# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0] - 2026-07-03

### Added

- **React 19 + Vite + Bun** SPA scaffold with TypeScript and Tailwind CSS.
- **Supabase Auth** on the client: Google OAuth, email/password sign-up, sign-in, password recovery, and reset.
- **Auth routing** with guest-only and authenticated guards (`/login`, `/signup`, `/recover-password`, `/reset-password`, `/`).
- **Session handling** via `AuthContext` with access token mirrored to `localStorage` for API calls.
- **API client** (`src/api/`) with JWT `Authorization` headers and automatic token refresh on `401`.
- **`GET /health` integration** — header polls every 30s for online/offline API status on all pages.
- **`GET /me` integration** — authenticated home page displays server-validated user profile JSON.
- **App shell** — `AppHeader` (health indicator + sign out), `AppLayout`, theme provider.
- **Feature specification** at [`specs/FEATURES.md`](specs/FEATURES.md) for extension guidance.
- **Pairing** with [cf-hono-supabase-api-template](https://github.com/open-templates/cf-hono-supabase-api-template) for the demo backend.
- **Template init wizard** — `./scripts/init-from-template.sh` personalizes repo metadata from `templates/`.
- **Shared repository scaffolding** — Dependabot, CODEOWNERS, issue templates, PR template, and standard markdown docs via `@open-templates/specs`.

---

## Repository documents

[README](README.md) | [INSTRUCTIONS](INSTRUCTIONS.md) | **CHANGELOG** | [CONTRIBUTING](CONTRIBUTING.md) | [SECURITY](SECURITY.md) | [CODE_OF_CONDUCT](CODE_OF_CONDUCT.md)
