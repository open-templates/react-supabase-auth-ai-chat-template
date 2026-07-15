---
type: Reference
title: Key files
description: Source map for chat, auth, and API modules.
tags: [reference]
timestamp: 2026-07-15T00:00:00Z
---

| Path | Role |
|------|------|
| `src/pages/HomePage.tsx` | Authenticated home + `/me` debug |
| `src/pages/ChatPage.tsx` | Chat UI, thread state, message flow |
| `src/components/chat-markdown.tsx` | GFM renderer for assistant bubbles |
| `src/components/chat-sidebar.tsx` | Session thread list |
| `src/lib/chat-threads.ts` | `sessionStorage` persistence |
| `src/api/chat.ts` | `POST /chat` client |
| `src/api/api.ts` | `apiFetch` with JWT + refresh |
| `src/auth/AuthContext.tsx` | Supabase auth + `clearAllChatState` on sign out |
