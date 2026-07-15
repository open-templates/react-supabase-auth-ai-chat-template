---
type: Feature
title: Markdown replies
description: GFM rendering for assistant bubbles via react-markdown.
tags: [ui, markdown]
timestamp: 2026-07-15T00:00:00Z
resource: src/components/chat-markdown.tsx
---

# Rendering

* Assistant messages: `ChatMarkdown` (`react-markdown` + `remark-gfm`)
* Supports headings, lists, links, fenced code, tables
* User messages: plain text (`whitespace-pre-wrap`)

See [.agents/skills/modules/chat-markdown.md](../../.agents/skills/modules/chat-markdown.md).
