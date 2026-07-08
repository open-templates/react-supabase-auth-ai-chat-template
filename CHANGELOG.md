# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0] - 2026-07-08

### Added

- **React 19 + Vite + Bun** SPA with Supabase Auth (Google OAuth, email/password).
- **AI chat page** (`/`) — authenticated chat UI calling `POST /chat` with Bearer JWT.
- **`src/api/chat.ts`** — chat completion client via shared `apiFetch`.
- **API health indicator** in header (`GET /health`).
- **Feature specification** at [`specs/FEATURES.md`](specs/FEATURES.md).
- **Pairing** with [cf-hono-supabase-gemini-api-template](https://github.com/open-templates/cf-hono-supabase-gemini-api-template).
- **Template init wizard** and shared `@open-templates/specs` scaffolding.

---

## Repository documents

[README](README.md) | [INSTRUCTIONS](INSTRUCTIONS.md) | **CHANGELOG** | [CONTRIBUTING](CONTRIBUTING.md) | [SECURITY](SECURITY.md) | [CODE_OF_CONDUCT](CODE_OF_CONDUCT.md)
