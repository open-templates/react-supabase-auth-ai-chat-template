---
type: Playbook
title: Extension guidelines
description: Add API modules, routes, specs, and skills when extending the template.
tags: [extension]
timestamp: 2026-07-15T00:00:00Z
---

1. Add API modules under `src/api/` using `apiFetch`.
2. Register routes in `src/App.tsx` with `AuthGuard`.
3. Add numbered `specs/features/` concepts and link from [index.md](../../index.md).
4. Document reusable patterns in `.agents/skills/modules/`.
5. Never put provider API keys in `VITE_*` variables.
