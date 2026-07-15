---
type: Playbook
title: Chat markdown
description: Render assistant replies with react-markdown and remark-gfm.
tags: [markdown, ui]
timestamp: 2026-07-15T00:00:00Z
resource: src/components/chat-markdown.tsx
---

# Usage

```tsx
{msg.role === "assistant" ? (
  <ChatMarkdown content={msg.content} />
) : (
  msg.content
)}
```

Tailwind-styled element overrides for `p`, `ul`, `ol`, `code`, `pre`, `table`, etc.

See [specs/features/09-markdown-replies.md](../../specs/features/09-markdown-replies.md).
