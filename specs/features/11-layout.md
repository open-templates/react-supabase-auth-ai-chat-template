---
type: Feature
title: Layout
description: App shell with sidebar chat layout on ChatPage.
tags: [ui, architecture]
timestamp: 2026-07-15T00:00:00Z
---

# Hierarchy

```text
App
└── ThemeProvider
    └── Router
        └── AuthProvider
            └── AppLayout
                ├── AppHeader
                └── Outlet → HomePage (/) | ChatPage (/chat) | auth pages
```

`ChatPage` uses full-bleed layout with `ChatSidebar` + message column.
