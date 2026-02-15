# Contributing to AI Decoded

Thank you for your interest in contributing to AI Decoded! We believe that open education is the best way to advance the field of AI/ML.

## Logic & Architecture

Before contributing, it's helpful to understand a few key architectural decisions:

- **Single Source of Truth**: All module and lesson metadata lives in `src/content/modules.ts`.
- **Pure Astro Content**: Lesson content is written in `.astro` files (in `src/lessons/`) rather than Markdown/MDX to allow full control over layout and component usage.
- **Client-Side Interactivity**: We use vanilla TypeScript in `src/scripts/` for light interactivity (quizzes, progress) to keep the site fast and lightweight. React is used primarily for dynamic icons.
- **Styling**: We use Tailwind CSS v4 with CSS variables for theming (dark/light mode).

## How to Contribute

### Reporting Bugs

If you find a bug (broken link, incorrect math, Typos), please open an issue describing:

1. The URL where the error occurs.
2. A description of the error.
3. The expected behavior/content.

### Adding or Editing Content

#### 1. Editing an Existing Lesson

1.  Locate the lesson file in `src/lessons/module-{N}/{slug}.astro`.
2.  Make your changes.
3.  Ensure you use the provided components (`<MathBlock>`, `<Quiz>`, `<PaperReference>`, etc.) for consistency.

#### 2. Adding a New Lesson

1.  **Update Metadata**: Add the lesson entry to `src/content/modules.ts`.
2.  **Create File**: Create a new file `src/lessons/module-{N}/{new-slug}.astro`. Use an existing lesson as a template.
3.  **Register Lesson**: Import and register the new lesson in `src/pages/[module]/[lesson].astro` in the `lessonComponents` map.
4.  **Verify**: Run `npm run build` to ensure the routing works correctly.

## Code Style

- **TypeScript**: We use strict mode. Please ensure no `any` types unless absolutely necessary.
- **Tailwind**: Use utility classes. For complex repeated styles, rely on the design tokens in `global.css`.
- **Math**: Use `<MathBlock />` for all mathematical expressions. Do not write raw LaTeX delimiters.

## Pull Request Process

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/amazing-feature`).
3.  Commit your changes (`git commit -m 'Add some amazing feature'`).
4.  Push to the branch (`git push origin feature/amazing-feature`).
5.  Open a Pull Request.

## License

By contributing, you agree that your contributions will be licensed under the MIT License used by this project.
