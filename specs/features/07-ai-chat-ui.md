---
type: Feature
title: AI chat UI
description: ChatPage message flow, send handler, and keyboard shortcuts.
tags: [ai, chat, ui]
timestamp: 2026-07-15T00:00:00Z
resource: src/pages/ChatPage.tsx
---

# Chat page (`/chat`)

* User messages appended to active thread
* Each send: `sendChatMessage(message, history)` → `POST /chat`
* Prior turns included in `history` for follow-up context
* Assistant reply from `data.reply`
* **Enter** sends; **Shift+Enter** newline

See [.agents/skills/modules/chat-page.md](../../.agents/skills/modules/chat-page.md).
