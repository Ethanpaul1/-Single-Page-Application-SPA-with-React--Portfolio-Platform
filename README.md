# Personal Project Showcase App

A single page React application for showcasing personal or creative projects. The layout is inspired by the provided wireframe: a centered title, an add-project form, a search field, and a simple project list.

## Features

- Landing page with a clean wireframe-inspired project list.
- Reusable component hierarchy for the form, search field, project grid, project cards, and empty state.
- Local React state with `useState` and derived filtering with `useMemo`.
- Add-project form with controlled title and description inputs.
- Dynamic search across project titles, descriptions, and project metadata.
- Responsive CSS that keeps the mock-up layout readable on small screens.
- React Testing Library coverage for rendering, filtering, and form submission.

## Component Tree

```text
App
|-- ProjectForm
|-- SearchBar
`-- ProjectGrid
    |-- ProjectCard
    `-- EmptyState
```

State for `projects` lives in `useProjects`, which is used by `App`. The search term lives in `App` because both `SearchBar` and `ProjectGrid` need the filtered result. `ProjectForm` owns its input state locally and passes a complete project object back to `App` through `onAddProject`.

## Setup

Install dependencies:

```bash
npm install
```

Run the app locally:

```bash
npm run dev
```

Run tests:

```bash
npm test
```

Build for production:

```bash
npm run build
```

## Known Limitations

- Newly added projects are stored in React state only, so they reset when the page reloads.
- The Google Drive mock-up was not directly accessible from this environment, so the app follows the screenshot/wireframe style rather than matching every pixel.
