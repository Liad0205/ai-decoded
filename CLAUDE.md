# AI/ML Academy - Project Guide

## Overview

A static educational site built with **Astro 5 + React + Tailwind CSS v4 + KaTeX**. It teaches AI/ML concepts across 13 modules (~40 lessons) with interactive quizzes, step-by-step reveals, animated diagrams, and math rendering. Fully static (SSG) with client-side progress tracking via localStorage.

## Quick Reference

```bash
npm run dev       # Dev server at localhost:4321
npm run build     # Production build to ./dist/
npm run preview   # Preview production build
```

## Architecture

### Tech Stack
- **Astro 5** (SSG, `.astro` components)
- **React 19** (only for dynamic `Icon` component via `client:load`)
- **Tailwind CSS v4** with `@tailwindcss/vite` plugin (NOT PostCSS)
- **KaTeX** for server-side math rendering
- **lucide-react** (client-side icons) + **lucide-static** (server-side icons via `LucideIcon.astro`)
- **TypeScript** (strict mode via `astro/tsconfigs/strict`)

### Project Structure

```
src/
  content/modules.ts     # Single source of truth for all module/lesson metadata
  pages/
    index.astro          # Homepage with curriculum timeline
    [module]/index.astro  # Module landing pages (generated from modules.ts)
    [module]/[lesson].astro  # Lesson pages (generated from modules.ts)
  layouts/
    BaseLayout.astro     # HTML shell, global scripts, dark mode FOUC prevention
    LessonLayout.astro   # Lesson chrome: sidebar, breadcrumbs, nav, completion
  components/
    ui/Button.astro      # ShadCN-style button (variants: primary/secondary/outline/ghost)
    ui/Card.astro        # ShadCN-style card (variants: default/elevated/outline)
    Quiz.astro           # Interactive multiple-choice quiz
    RevealSection.astro  # Progressive step-by-step reveal
    Diagram.astro        # Animated diagram wrapper with play/reset controls
    MathBlock.astro      # KaTeX math rendering (inline or display mode)
    KeyTakeaway.astro    # Green callout box for key points
    PaperReference.astro # Citation card with link to paper/blog/docs
    Sidebar.astro        # Collapsible sidebar with module nav + progress
    Navigation.astro     # Top nav bar (homepage only)
    ThemeToggle.astro    # Dark/light mode toggle with localStorage
    Icon.tsx             # React dynamic Lucide icon (requires client:load)
    LucideIcon.astro     # Server-side Lucide icon (better perf, no JS)
    ModuleCard.astro     # Module card with progress bar
    ProgressTracker.astro # Progress bar component
  lessons/
    module-{N}/          # Lesson content files (pure Astro components)
  scripts/
    quiz.ts              # Quiz interaction logic (DOM-based)
    reveal.ts            # Progressive reveal logic
    diagrams.ts          # Diagram animation + IntersectionObserver autoplay
    progress.ts          # localStorage progress tracking + custom events
  styles/
    global.css           # Design system tokens, lesson typography, dark mode
  lib/
    utils.ts             # cn() helper (clsx + tailwind-merge)
```

### Key Patterns

#### Content Management
- **All module/lesson metadata** lives in `src/content/modules.ts` (the single source of truth)
- Lesson files are `.astro` components in `src/lessons/module-{N}/`
- Lessons are manually imported and mapped in `src/pages/[module]/[lesson].astro` via a `lessonComponents` record
- **When adding a new lesson**: (1) add metadata to `modules.ts`, (2) create the `.astro` file, (3) add the import + mapping in `[lesson].astro`

#### Routing
- Dynamic routes use `getStaticPaths()` driven by `modules.ts`
- URL structure: `/{module-slug}/{lesson-slug}` (e.g., `/transformers/attention-mechanism`)
- Module slugs and lesson slugs are defined in `modules.ts`

#### Icon Strategy (Two Approaches)
- **`LucideIcon.astro`** (server-side, `lucide-static`): Use in `.astro` templates where no hydration is needed. Better performance, zero JS
- **`Icon.tsx`** (client-side, `lucide-react`): Use only when the icon must be inside a React island or needs `client:load`. Always pass `client:load`

#### Interactivity (Vanilla JS, NOT React)
- Interactive features (quiz, reveal, diagrams, progress) use vanilla TypeScript in `src/scripts/`
- Components expose `data-*` attributes for JS hooks (e.g., `data-quiz`, `data-reveal`, `data-diagram`)
- Scripts are initialized in `BaseLayout.astro` via `DOMContentLoaded`
- Progress syncs across components via `window.dispatchEvent(new CustomEvent('progressUpdated'))`

#### Dark Mode
- Class-based: `.dark` class on `<html>` element
- FOUC prevention: inline script in `<head>` reads localStorage before paint
- Tailwind v4 custom variant: `@custom-variant dark (&:where(.dark, .dark *))`
- Theme preference persisted in `localStorage.setItem('theme', ...)`

## Design System

### CSS Custom Properties (HSL values without `hsl()` wrapper)
All colors use HSL custom properties: `hsl(var(--primary))`, `hsl(var(--foreground))`, etc.

Key tokens: `--primary`, `--foreground`, `--background`, `--card`, `--muted`, `--muted-foreground`, `--border`, `--success`, `--destructive`, `--accent`

Both light and dark values are defined in `src/styles/global.css`.

### Styling Conventions
- **Always use design tokens** (`hsl(var(--foreground))`) instead of hardcoded colors like `text-slate-900`. Some older components still use hardcoded Tailwind colors (e.g., `text-slate-900`, `bg-indigo-100`) -- when touching these, migrate to design tokens
- Use `transition-smooth` utility for consistent 200ms transitions
- Use `cn()` from `src/lib/utils.ts` when merging conditional classes
- Lesson content typography is handled by `.lesson-content` in `global.css` -- write semantic HTML in lessons and the styles cascade automatically
- Responsive breakpoints: mobile-first, `sm:`, `md:`, `lg:` (sidebar collapses below `lg`)

## Writing Lessons

### Lesson File Template
```astro
---
// Module N, Lesson N.X: Title
import KeyTakeaway from '../../components/KeyTakeaway.astro';
import PaperReference from '../../components/PaperReference.astro';
import MathBlock from '../../components/MathBlock.astro';
import Diagram from '../../components/Diagram.astro';
import Quiz from '../../components/Quiz.astro';
---

<h2>Learning Objectives</h2>
<ul>
  <li>Objective 1</li>
  <li>Objective 2</li>
</ul>

<h2>Section Title</h2>
<p>Content paragraph. Use <MathBlock formula={"x^2"} /> for inline math.</p>

<MathBlock formula={"E = mc^2"} display={true} />

<KeyTakeaway>
  <ul>
    <li>Key point 1</li>
    <li>Key point 2</li>
  </ul>
</KeyTakeaway>

<PaperReference
  title="Attention Is All You Need"
  authors="Vaswani et al."
  year="2017"
  url="https://arxiv.org/abs/1706.03762"
/>

<Quiz
  quizId="unique-id"
  question="Question text?"
  options={[
    { id: 'a', text: 'Option A', correct: false, explanation: 'Why wrong' },
    { id: 'b', text: 'Option B', correct: true, explanation: 'Why right' },
  ]}
/>
```

### Lesson Content Rules
- Start with `<h2>Learning Objectives</h2>` followed by a `<ul>`
- Use `<h2>` for major sections (they get top borders automatically via `.lesson-content h2`)
- Use `<h3>` and `<h4>` for subsections
- Keep paragraphs under 75ch (enforced by `.lesson-content p { max-width: 75ch }`)
- Use `<MathBlock formula={...} />` for math -- pass `display={true}` for block display
- Use `.equation-with-label` and `.equation-sequence` CSS classes for structured math
- Always cite sources with `<PaperReference />`
- Include at least one `<Quiz />` per lesson for active learning
- Use `<KeyTakeaway>` for section summaries
- Content must be technically accurate with full mathematical derivations where relevant

### Adding a New Module or Lesson

1. **Add metadata** to `src/content/modules.ts` (id, title, slug, description, lessons array)
2. **Create lesson file** at `src/lessons/module-{N}/{slug}.astro`
3. **Register the lesson** in `src/pages/[module]/[lesson].astro`:
   - Add an import: `import LessonN_X from '../../lessons/module-{N}/{slug}.astro';`
   - Add to `lessonComponents` map: `'{module-slug}-{lesson-slug}': LessonN_X,`
4. **Verify** with `npm run build` that the page generates correctly

## Testing & Validation

- Run `npm run build` before committing to catch type errors and broken pages
- Check both light and dark mode for any new UI work
- Test responsive layout at mobile (`< 640px`), tablet, and desktop (`>= 1024px`)
- Verify math renders correctly (KaTeX errors fail silently with `throwOnError: false`)
- Test interactive elements (quizzes, reveals) work after page load

## Known Patterns & Gotchas

- **No test framework** is configured -- validation is via `astro build` + manual review
- **Lesson imports are manual** -- the `lessonComponents` map in `[lesson].astro` must be updated by hand when adding lessons
- **`Record<string, any>`** is used for `lessonComponents` -- this is the one intentional `any` in the codebase
- Some components mix old hardcoded Tailwind colors (`text-slate-900`, `bg-indigo-100`) with design token colors. When editing these, prefer migrating to tokens
- `lucide-static` icons use string replacement on the SVG -- fragile but functional
- Progress data is stored in localStorage under key `ai-ml-academy-progress`
- The `Icon.tsx` React component ships the entire `lucide-react` icon set to the client. Use `LucideIcon.astro` (server-side) wherever possible to avoid this
