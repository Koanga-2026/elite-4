@promptkit/

# AGENTS.md

## Project Overview

boilerplate-phase1-routing is a frontend-only starter template: React + TypeScript + Vite with React Router and TanStack Query pre-configured. Use this when a project needs client-side routing and data fetching but no backend.

**Key Technologies:**
- **Frontend**: React, TypeScript, Vite, React Router, TanStack Query (React Query)
- **Testing**: Vitest
- **Linting/Formatting**: ESLint, Prettier

**Architecture:**
- `client/`: All source code
  - `client/router.tsx` — route definitions using `createBrowserRouter` / `createRoutesFromElements`
  - `client/components/App.tsx` — root layout with `<Outlet />` for nested routes
  - `client/components/Home.tsx` — index route component
  - `client/apis/` — API client functions
  - `client/index.tsx` — entry point; wraps app in `QueryClientProvider` + `RouterProvider`
- `models/` — TypeScript interfaces for shared data types

## Building and Running

| Command | Purpose |
|---------|---------|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `http://localhost:5173` |
| `npm run build` | Production build |
| `npm test -- --run` | Run all tests once |
| `npm run lint` | Check code with ESLint |
| `npm run format` | Format code with Prettier |

**Important:** Always use `npm run dev`. Opening `index.html` directly won't load TypeScript.

## Development Conventions

- **Routing**: React Router v7. Routes defined in `client/router.tsx` using `createRoutesFromElements` with nested `<Route>` elements.
- **Data fetching**: TanStack Query. `QueryClientProvider` wraps the app in `client/index.tsx`.
- **Testing**: Vitest. Test files live alongside the files they test.

## Architecture Decisions

- **`router.tsx` for route definitions**: The root route renders `<App />` (which has `<Outlet />`); child routes render inside that outlet. Add new pages as additional `<Route>` children.
- **`App.tsx` as layout component**: Uses `<Outlet />` from `react-router` — shared nav, headers, and footers go in `App.tsx`; page-specific content goes in route components.
- **`QueryClientProvider` + `RouterProvider` both in `index.tsx`**: Both providers wrap the app at the root — no need to touch `index.tsx` when adding new routes or queries.
- **No backend included**: API calls go to external services or a separately run server. Add `superagent` or `fetch` functions in `client/apis/`.

## Key Conventions

- Add new routes in `client/router.tsx` as `<Route>` children of the root route.
- New page components go in `client/components/` and are imported into `router.tsx`.
- Use `useQuery` and `useMutation` from `@tanstack/react-query` in components.
- TypeScript interfaces go in `models/` — import them where needed.
- **Note:** This template uses strict ESLint and Prettier rules. Follow them exactly when extending the boilerplate.

## Potential Pitfalls

- **`<Outlet />` in `App.tsx`**: Removing `<Outlet />` from `App.tsx` will break all child route rendering — child route components render into the `<Outlet />` placeholder.
- **No server**: If a backend API is needed, run one separately or use `boilerplate-fullstack-routing` instead.
- **TanStack Query cache invalidation**: After mutations, call `queryClient.invalidateQueries` to refresh fetched data.
- **`react-router` not `react-router-dom`**: All imports (`Route`, `Link`, `useParams`, `Outlet`, etc.) come from `react-router` in v7 — not `react-router-dom`.

## Related Documentation

- [AGENTS.md](AGENTS.md): Shared AI context file — source of truth for all agent briefings.
- [CLAUDE.md](CLAUDE.md): Claude Code context (imports AGENTS.md; may include tutoring guidelines if used in educational settings).
- [GEMINI.md](GEMINI.md): Gemini AI context (self-contained copy of this file's content).

## PromptKit Quick Reference
- Review the available artefacts when the student requests them:
  - Protocol: `promptkit/protocols/setup.md` — instructions for updating these CLI briefings.
  - Workflow: `promptkit/workflows/tutor.md` — guide for tutoring/explanation sessions.
  - Workflow: `promptkit/workflows/reflect.md` — guide for documenting outcomes and next steps.
- Student notes live in `promptkit/notes/`; The table in `progress-journal.md` is main place to update with reflections. Instructor Activities are in `promptkit/activities/` (read-only).
- When new workflows arrive, expect additional files under `promptkit/workflows/`.
