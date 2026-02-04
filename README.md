# wkmini-vue3

Demo frontend for the wkmini product. This project uses static data and Pinia stores to simulate a real app without mock.js or backend services.

## Tech Stack

- Vue 3 + Vite
- Pinia (state management)
- Vue Router
- Tailwind CSS
- tweakcn-style UI components (in `src/components/ui`)

## Data Architecture

- Static data source: `src/data/courses.js`
- Pinia stores:
  - `src/stores/courseStore.js` (courses + favorites)
  - `src/stores/calendarStore.js` (calendar memos)
  - `src/stores/progressStore.js` (learning progress)

### Local Storage Keys

- `wkmini-calendar-memo`
- `wkmini-calendar-plan`
- `wkmini-lesson-completed`
- `wkmini-lesson-current`
- `wkmini-course-favorites`

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Compile and Minify for Production

```sh
pnpm build
```
