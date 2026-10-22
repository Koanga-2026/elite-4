# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

---

## Using This Boilerplate

This template has React Router and TanStack Query pre-wired. There are no stubs — students build on top of the existing `App.tsx` / `Home.tsx` / `router.tsx` scaffold.

**To add a new page/route:**
1. Create a new component in `client/components/` (e.g. `About.tsx`)
2. Add a `<Route>` in `client/router.tsx`:
   ```tsx
   <Route path="/about" element={<About />} />
   ```
3. Add a `<Link to="/about">About</Link>` in `App.tsx` or a nav component

**To fetch data on a page:**
1. Create an API function in `client/apis/<resource>.ts` using `fetch` or `superagent`
2. Use `useQuery` in the page component:
   ```tsx
   const { data } = useQuery({ queryKey: ['resource'], queryFn: getResource })
   ```

## Tutoring Guidelines

- Follow the `promptkit/workflows/tutor.md` workflow for explanation sessions.
- Ask questions that move students toward the answer rather than stating it.
- When a student is adding a new route, point them to the existing `Home` route in `router.tsx` as the pattern.
- When a student is stuck on `useQuery`, ask: "What data are you fetching, and what function would return it?" — that maps directly to `queryFn`.
- Do not implement components on behalf of the student — guide them to describe the page layout first.
