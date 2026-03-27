# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run lint     # ESLint
```

No test framework is configured yet.

## Architecture

Wake is a Next.js 16.2.0 / React 19 app that lets users upload document PDFs and have AI voice conversations about them. Authentication is handled by Clerk (`@clerk/nextjs` v7).

### Routing

- `app/(root)/` — route group for authenticated pages (e.g. `/documents/new`)
- `app/library/` — user's document library
- `app/page.tsx` — public landing page
- `middleware.ts` — Clerk auth middleware protecting routes

### Key Patterns

- **UI components** use `@base-ui/react` headless primitives wrapped with Tailwind + CVA variants (`components/ui/`). The shadcn CLI is configured with `"style": "base-nova"` (see `components.json`).
- **Forms** use `react-hook-form` + `@hookform/resolvers` + `zod` v4. Schemas live in `lib/zod.ts`. Form types are inferred from schemas in `types.d.ts`.
- **Styling** is Tailwind CSS v4 via `@tailwindcss/postcss`. The design system (colors, shadows, utility classes) is defined in `app/globals.css` using CSS custom properties. Brand accent is `#6B2318` (warm red-brown), warm amber accent `#D4952B`. Fonts: Mona Sans (sans), IBM Plex Serif (serif).
- **Database models** are typed as Mongoose interfaces in `types.d.ts` (`IDocument`, `IDocumentSegment`, `IVoiceSession`) — database connection is not yet wired up.
- **Path alias**: `@/*` maps to project root.

### External Image Domains

`next.config.ts` allows `covers.openlibrary.org` for remote images.
