---
type: Playbook
title: Chat threads
description: sessionStorage thread CRUD and sign-out cleanup.
tags: [chat, storage]
timestamp: 2026-07-15T00:00:00Z
resource: src/lib/chat-threads.ts
---

# Keys

* `chat-threads` — JSON array of `ChatThread`
* `chat-active-thread-id` — active thread uuid

# API

| Function | Action |
|----------|--------|
| `loadChatState()` | Read threads + active id |
| `createThread()` | New empty thread, prepend list |
| `upsertThread()` | Save messages, bump `updatedAt` |
| `deleteThread()` | Remove thread, fix active id |
| `clearAllChatState()` | Wipe both keys (on `signOut`) |

See [specs/features/08-chat-threads.md](../../specs/features/08-chat-threads.md).
