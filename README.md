# Multiple Page Portfolio

A modern, responsive portfolio website built with Astro, featuring multiple pages including a blog system, projects showcase, and about page.

## Quick Deploy

[![Deploy to Tencent Cloud](https://cdnstatic.tencentcs.com/edgeone/pages/deploy.svg)](https://edgeone.ai/pages/new?template=https://github.com/tomcomtang/astro-multiplepage-portfolio&output-directory=./dist&build-command=npm%20run%20build&install-command=npm%20install&entry_from=childtom)

## Preview

You can preview the project online at:

<https://astro-multiplepage-portfolio.edgeone.app/>

## Features

- 🎨 Modern and clean design with dark/light mode support
- 📱 Fully responsive layout
- 📝 Blog system with Markdown support
- 🚀 Project showcase
- 🔍 Pagination for blog posts
- 🎯 SEO optimized
- 🌙 Dark/Light theme toggle
- 📦 Static site generation

## Tech Stack

- **Framework**: Astro 5.x
- **Styling**: Tailwind CSS
- **Content**: Markdown with Astro Content Collections
- **Syntax Highlighting**: Tailwind Typography plugin
- **Language**: TypeScript
- **Build Tool**: Vite

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/tomcomtang/astro-multiplepage-portfolio.git
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Build for production:

```bash
npm run build
```

## Project Structure

```
├── src/
│   ├── components/         # Reusable components
│   ├── config/            # Configuration files
│   ├── content/           # Markdown blog posts
│   └── pages/             # Astro pages
└── public/                # Static assets
```

## Content Management

### Blog Posts

1. Create your markdown files in `src/content/posts/` directory
2. Each markdown file should follow this format:

```markdown
---
title: Your Post Title
description: A brief description of your post
date: 2024-03-21
readTime: 5 min
---

Your post content here...
```

### Page Content

You can customize the content of different pages by modifying `src/config/content.ts`:

- Site metadata and social links
- Home page content
- About page content
- Projects showcase

## Blog System

The blog system supports:

- Markdown content
- Code syntax highlighting
- Reading time estimation
- Pagination

## Customization

1. Add new blog posts by creating Markdown files in the `src/content/posts` directory
2. Update project information in `src/config/content.ts`
3. Modify site configuration in `src/config/content.ts`

## License

MIT

## Author

tomcomtang

## About

A personal blog theme template that includes automatic recognition of Markdown content and generates configuration accordingly.
