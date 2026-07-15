---
type: Feature
title: API integration
description: health, me, and chat API modules.
tags: [api, chat]
timestamp: 2026-07-15T00:00:00Z
---

# Modules

| Module | Endpoint | Auth | Used by |
|--------|----------|------|---------|
| `health.ts` | `GET /health` | No | `useApiHealth` → `AppHeader` |
| `me.ts` | `GET /me` | Bearer JWT | `HomePage` |
| `chat.ts` | `POST /chat` | Bearer JWT | `ChatPage` |

Base URL: `import.meta.env.VITE_API_BASE_URL` (default `http://localhost:8787`).

`POST /chat` body: `{ "message": "...", "history": [{ "role": "user"|"assistant", "content": "..." }] }`.
