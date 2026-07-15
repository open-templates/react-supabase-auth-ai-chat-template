---
type: Feature
title: Chat threads
description: sessionStorage thread list, sidebar, and sign-out cleanup.
tags: [chat, storage]
timestamp: 2026-07-15T00:00:00Z
resource: src/lib/chat-threads.ts
---

# Threads

* **Sidebar** — new chat, switch thread, delete (`src/components/chat-sidebar.tsx`)
* Persisted in `sessionStorage` (`chat-threads`, `chat-active-thread-id`)
* Cleared on intentional sign out via `clearAllChatState()`
* Cleared when browser session ends (sessionStorage semantics)

See [.agents/skills/modules/chat-threads.md](../../.agents/skills/modules/chat-threads.md).
