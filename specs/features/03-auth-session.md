---
type: Feature
title: Auth session
description: Session mirror, API token, refresh on 401, and chat cleanup on sign out.
tags: [auth, session]
timestamp: 2026-07-15T00:00:00Z
---

# Session

* `onAuthStateChange` + `localStorage['x-auth-token']`
* `apiFetch` refreshes on `401` and retries once
* `signOut()` calls `clearAllChatState()` before Supabase sign-out (wipes `sessionStorage` threads)

See [08 — Chat threads](08-chat-threads.md) and [.agents/skills/shared/auth/supabase-session-flow.md](../../.agents/skills/shared/auth/supabase-session-flow.md).
