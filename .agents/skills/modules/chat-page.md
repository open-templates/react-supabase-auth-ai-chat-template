---
type: Playbook
title: ChatPage
description: Recreate the chat send handler and message list UI.
tags: [chat, ui]
timestamp: 2026-07-15T00:00:00Z
resource: src/pages/ChatPage.tsx
---

# Flow

1. Append user message to active thread in state + `sessionStorage`
2. Build `history` from prior messages `{ role, content }`
3. `sendChatMessage(trimmed, history)` → `POST /chat`
4. Append assistant message from `data.reply`
5. `syncThread` persists via `upsertThread`

Keyboard: Enter send, Shift+Enter newline.

See [specs/features/07-ai-chat-ui.md](../../specs/features/07-ai-chat-ui.md).
