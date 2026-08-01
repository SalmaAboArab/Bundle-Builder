# Frontend Bundle Builder

A responsive React + TypeScript implementation of the provided Bundle Builder design.

## Tech Stack

* React
* TypeScript
* Material UI (MUI)
* Vite
* React Context API

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build the project:

```bash
npm run build
```

## Notes

* The application is fully data-driven using local JSON files.
* Product variants (colors) maintain independent quantities.
* The Review Panel stays synchronized with the Bundle Builder.
* Totals and savings are recalculated automatically.
* The "Save my system for later" feature uses Local Storage to persist the selected configuration.
* Product data is stored locally (no backend/API was implemented).
