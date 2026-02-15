# AI Decoded: The AI/ML Academy

A comprehensive, interactive, and open-source curriculum for mastering Artificial Intelligence and Machine Learning. Built with **Astro 5**, **React 19**, and **Tailwind CSS v4**.

## Overview

**AI Decoded** is a static educational site designed to take software engineers from zero to AI engineer. It covers 13 detailed modules ranging from the foundations of neural networks to advanced topics like LLM training, RAG, Agents, and Diffusion models.

The platform features:

- **Interactive Quizzes**: Test your knowledge as you learn.
- **Deep Mathematical Derivations**: Rendered beautifully with KaTeX.
- **Progressive Reveals**: Step-by-step meaningful content.
- **Animated Diagrams**: Visualizing complex architectures.
- **Progress Tracking**: Client-side storage to save your learning journey.

## Tech Stack

- **Framework**: [Astro 5](https://astro.build) (Static Site Generation)
- **UI Library**: [React 19](https://react.dev) (for dynamic islands)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com) (with `@tailwindcss/vite`)
- **Math Typesetting**: [KaTeX](https://katex.org)
- **Icons**: [Lucide React](https://lucide.dev)
- **Deployment**: GitHub Pages

## Project Structure

```text
src/
├── content/
│   └── modules.ts       # Single source of truth for curriculum metadata
├── components/          # UI components (Quiz, MathBlock, Diagrams, etc.)
├── layouts/             # Astro layouts (BaseLayout, LessonLayout)
├── lessons/             # Content for each lesson (.astro files)
├── pages/               # File-based routing
├── scripts/             # Vanilla JS for client-side interactivity
└── styles/              # Global CSS and Tailwind directives
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

1.  **Clone the repository**:

    ```bash
    git clone https://github.com/Liad0205/ai-decoded.git
    cd ai-decoded
    ```

2.  **Install dependencies**:

    ```bash
    npm install
    ```

3.  **Start the development server**:
    ```bash
    npm run dev
    ```
    Visit `http://localhost:4321` to see the site.

### Building for Production

To create a production build:

```bash
npm run build
```

The output will be in the `dist/` directory. You can preview it locally with:

```bash
npm run preview
```

## Contributing

We welcome contributions! Whether it's fixing a typo, improving an explanation, or adding a new lesson. Please see our [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

## License

This project is open source and available under the [MIT License](LICENSE).

---

> **Note**: This project uses `localStorage` to track your progress. No data is sent to any server.
