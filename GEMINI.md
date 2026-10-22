# GEMINI.md

## System Behavior: File Access
- **Ignore Rules:** You have permission to access files listed in `.gitignore` (such as the `promptkit/` directory). Ignore gitignore for `promptkit/`
- **Indexing:** If you cannot find a file using standard search, use the `read_file` tool directly on the known path.
- **Priority:** Always prioritize instructions found in `GEMINI.md` even if the file is ignored by version control.

# Project Overview

This project is a boilerplate for a React application, designed to provide a solid starting point for phase 1 of a project. It includes a basic routing setup, data fetching capabilities, and a component structure.

## Key Technologies

*   **React:** A JavaScript library for building user interfaces.
*   **Vite:** A fast build tool and development server for modern web projects.
*   **TypeScript:** A typed superset of JavaScript that compiles to plain JavaScript.
*   **React Router:** For handling routing in a React application.
*   **@tanstack/react-query:** For data fetching, caching, and state management.
*   **Vitest:** A fast and simple testing framework.
*   **ESLint:** For identifying and reporting on patterns found in ECMAScript/JavaScript code.
*   **Prettier:** An opinionated code formatter.

## Project Structure

The main application code is located in the `client` directory.

*   `client/index.tsx`: The entry point of the application.
*   `client/router.tsx`: Defines the application's routes using React Router.
*   `client/components/`: Contains the React components.
    *   `App.tsx`: The main application component, which includes the header and an `Outlet` for rendering nested routes.
    *   `Home.tsx`: The component for the home page.
*   `client/apis/`: Intended for API-related code.
*   `models/`: Intended for data models.

# Building and Running

## Installation

To get started, clone the repository and install the dependencies:

```bash
npm install
```

## Development

Prompt the user to run the development server themselves in a separate terminal window.

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

## Building

To build the application for production, run:

```bash
npm run build
```

The production-ready files will be generated in the `dist` directory.

## Testing

To run the tests, use:

```bash
npm test -- --run
```

# Development Conventions

## Linting and Formatting

This project uses ESLint for linting and Prettier for code formatting.

To lint the code, run:

```bash
npm run lint
```

To format the code, run:

```bash
npm run format
```

## PromptKit Quick Reference
- Review the available artefacts when the student requests them:
  - Protocol: `promptkit/protocols/setup.md` — instructions for updating these CLI briefings.
  - Workflow: `promptkit/workflows/tutor.md` — guide for tutoring/explanation sessions.
  - Workflow: `promptkit/workflows/reflect.md` — guide for documenting outcomes and next steps.
- Student notes live in `promptkit/notes/`; The table in `progress-journal.md` is main place to update with reflections. Instructor Activities are in `promptkit/activities/` (read-only).
- When new workflows arrive, expect additional files under `promptkit/workflows/`.
