# Blog Section Design Spec

## Overview

Add a blog section to the portfolio site, featuring preview cards on the home page and full article pages at `/blog/[slug]`. Blog posts are statically defined in a data file, with full article content rendered as styled prose.

## Data Model

```ts
// src/data/blogData.ts

interface BlogPost {
  slug: string;           // URL-friendly ID, e.g. "spec-driven-ai"
  title: string;
  description: string;    // Short excerpt for the home page card
  date: string;           // ISO date, e.g. "2025-05-15"
  image: string;          // Path to cover image, e.g. "/blog/spec-driven.png"
  mediumUrl: string;      // Link to original Medium article
  content: string;        // Full article content as HTML/JSX string
}
```

Blog data is stored in `src/data/blogData.ts` as a static array, keeping article content separate from components.

## First Blog Post

- **Title**: "Architecting Autonomy: Why the Future of Delivery is Spec-Driven and AI-Accelerated"
- **Image**: `/blog/spec-driven.png` (placeholder, user will add later)
- **Medium URL**: `https://medium.com/@hudymarcel/architecting-autonomy-why-the-future-of-delivery-is-spec-driven-and-ai-accelerated-45a5c5a581a0`
- **Content**: Full article text provided by user (covers POD-based delivery, Spec-Driven development, AI-integrated QA)

## Home Page Section

New `Blog` component placed between the existing Work and Contact sections on the home page (`src/app/page.tsx`).

- Section title "Blog" using the existing `section-title` CSS class
- Grid of blog post cards matching the visual style of the Work/projects section
- Each card displays: thumbnail image, title, date, short description, "Read More" link
- "View All Posts" button linking to `/blog`

## Blog Card Component

New `blogCard.tsx` component, styled consistently with the existing `projectCard.tsx`:

- Cover image (Next.js `Image` component)
- Title
- Date
- Short description/excerpt
- "Read More" link to `/blog/[slug]`

## Blog Listing Page (`/blog`)

- Route: `/blog/page.tsx`
- Displays all blog posts as cards (reuses `blogCard.tsx`)
- Responsive grid layout

## Blog Post Page (`/blog/[slug]`)

- Route: `/blog/[slug]/page.tsx`
- Uses `generateStaticParams` to pre-render all post pages from `blogData`
- Layout:
  - Back to blog link
  - Title
  - Date
  - Cover image
  - Prose-styled article content (Tailwind typography classes or custom prose styles)
  - Link to original Medium article at the bottom

## Navigation

Add "Blog" entry to the existing nav links in the header/nav components.

## New Files

| File | Purpose |
|------|---------|
| `src/data/blogData.ts` | Blog post data array with full article content |
| `src/components/blog.tsx` | Home page blog preview section |
| `src/components/blogCard.tsx` | Reusable blog post card |
| `src/app/blog/page.tsx` | Blog listing page |
| `src/app/blog/[slug]/page.tsx` | Individual blog post page |

## Modified Files

| File | Change |
|------|--------|
| `src/app/page.tsx` | Add `<Blog />` between Work and Contact |
| `src/components/nav.tsx` or header | Add "Blog" nav link |

## Design Constraints

- Follow existing component patterns and styling conventions
- Use Next.js `Image` component for optimized images
- Use `generateStaticParams` for static generation of blog post pages
- Placeholder image path `/blog/spec-driven.png` — user will add the actual image
- No external dependencies needed (no markdown parser — content stored as JSX/HTML)
