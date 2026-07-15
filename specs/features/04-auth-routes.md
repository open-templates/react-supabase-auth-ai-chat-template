---
type: Feature
title: Auth routes
description: Guest and authenticated routes including /chat.
tags: [auth, routing]
timestamp: 2026-07-15T00:00:00Z
---

# Routes

| Route | Guard | Component |
|-------|-------|-----------|
| `/login` | Guest | `LogInPage` |
| `/signup` | Guest | `SignUpPage` |
| `/recover-password` | Guest | `RecoverPasswordPage` |
| `/reset-password` | Auth | `ResetPasswordPage` |
| `/` | Auth | `HomePage` — `GET /me` debug |
| `/chat` | Auth | `ChatPage` — `POST /chat` |

Guests hitting `/` or `/chat` redirect to `/login`.
