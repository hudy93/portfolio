# Blog Section Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a blog section with preview cards on the home page and full article pages at `/blog/[slug]`.

**Architecture:** Static blog data in `src/data/blogData.ts` following the same pattern as `src/lib/project-data.ts`. A `BlogCard` component styled like `ProjectCard`. A home page `Blog` section between Work and Contact. Dedicated `/blog` listing and `/blog/[slug]` article pages.

**Tech Stack:** Next.js, TypeScript, Tailwind CSS, next/image, existing Card UI components

---

## File Structure

| File | Responsibility |
|------|---------------|
| `src/data/blogData.ts` | Blog post interface + static data array with full article content |
| `src/components/blogCard.tsx` | Reusable card for blog post previews (image, title, date, excerpt) |
| `src/components/blog.tsx` | Home page blog section (title, subtitle, card grid, "View all" button) |
| `src/app/blog/page.tsx` | Blog listing page showing all posts |
| `src/app/blog/[slug]/page.tsx` | Individual blog post page with full article |
| `src/app/page.tsx` | Modified: add `<Blog />` between `<Work />` and `<Contact />` |
| `src/components/nav.tsx` | Modified: add blog link to nav |

---

### Task 1: Create Blog Data

**Files:**
- Create: `src/data/blogData.ts`

- [ ] **Step 1: Create the blog data file with interface and first post**

```ts
// src/data/blogData.ts

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  image: string;
  mediumUrl: string;
  content: string;
}

export const blogData: BlogPost[] = [
  {
    slug: "architecting-autonomy",
    title:
      "Architecting Autonomy: Why the Future of Delivery is Spec-Driven and AI-Accelerated",
    description:
      "A blueprint for POD-based delivery, Spec-Driven development, and AI-integrated quality assurance designed to replace traditional, bulky development cycles with a high-velocity model.",
    date: "2025-05-15",
    image: "/blog/spec-driven.png",
    mediumUrl:
      "https://medium.com/@hudymarcel/architecting-autonomy-why-the-future-of-delivery-is-spec-driven-and-ai-accelerated-45a5c5a581a0",
    content: `
      <h2>Introduction: The Death of the Bloated Ticket</h2>
      <p>The hallmark of a struggling development cycle is the 14-day mark: the moment a team realizes a feature is too large to test and too complex to review. This results in &quot;Large Artifacts&quot; — feature branches that remain open for weeks, accumulating technical debt and architectural drift.</p>
      <p>This system replaces that chaos with a structured framework for clarity. It treats the sprint not as a moving deadline, but as a fixed execution window. The core transformation lies in &quot;Shifting Left&quot; — moving the heavy lifting of design and validation to the beginning of the process to ensure that once work starts, the path to &quot;Merged&quot; is clear.</p>

      <h2>From Coder to &quot;Spec-Architect&quot;</h2>
      <p>In this system, the roles of Developers and QA evolve during the Shaping phase. They are no longer just implementers; they act as Spec-Architects. While the Product Owner (PO) provides the roadmap and initiative-level outcomes, the team is responsible for the technical design before a single line of code is written.</p>
      <p>During Shaping, Spec-Architects are responsible for:</p>
      <ul>
        <li><strong>Splitting Initiatives into &quot;Missions&quot;:</strong> Breaking down large roadmap items into executable tasks.</li>
        <li><strong>Defining Mission-Level AC:</strong> Creating granular, executable slices of functionality.</li>
        <li><strong>Establishing the Technical Contract:</strong> Writing the first draft of test cases before implementation begins.</li>
      </ul>
      <p>By shifting these responsibilities left, the team creates a &quot;Source of Truth&quot; that guarantees the implementation is not just feasible, but inherently testable.</p>
      <blockquote>&quot;The PO owns the &apos;Why&apos; and &apos;What.&apos; The Team owns the &apos;How we slice.&apos;&quot;</blockquote>

      <h2>The Magic of the 1–2 Day &quot;Mission&quot;</h2>
      <p>The atomic unit of work in this system is the Mission. To ensure success, we must distinguish between two vital constraints:</p>
      <ul>
        <li><strong>The Design Constraint (1–2 Days):</strong> Every mission is intentionally sliced into a cohesive, spec-complete unit intended to be completed in 1 to 2 days.</li>
        <li><strong>The Execution Constraint (2 Weeks):</strong> This is the fixed window where all planned missions must be implemented, tested, and merged.</li>
      </ul>
      <p>By shrinking the unit of work to 1–2 days, the team guarantees the success of the 2-week merge window. Small missions are easier to review and test, preventing the &quot;Large Artifact&quot; problem where feature branches become too bloated to manage.</p>
      <p>Before any Mission enters the execution cycle, it must pass a <strong>Mission Ready Check</strong>:</p>
      <ul>
        <li><strong>PO Alignment:</strong> Does this slice fulfill the roadmap intent?</li>
        <li><strong>DEV Implementability:</strong> Is the technical path clear?</li>
        <li><strong>QA Testability:</strong> Are the acceptance criteria and test cases defined?</li>
      </ul>

      <h2>Phase 1: Preparation and Shaping</h2>
      <p>Before any implementation begins, work passes through the Preparation and Shaping phase.</p>
      <ul>
        <li><strong>Roadmap Definition:</strong> The Product Owner (PO) defines high-level initiatives, including the high-level Acceptance Criteria (AC) that serve as the &quot;source of truth&quot;.</li>
        <li><strong>The Spec-Architect Mindset:</strong> During the Shaping stage, Developers and QA engineers act as &quot;Spec-Architects&quot;. Their responsibility is to read the initiative AC, identify mission slices, and define the mission-level AC and technical contracts.</li>
        <li><strong>Mission Ready Check:</strong> To ensure a smooth transition to execution, missions undergo a lightweight alignment check where the PO, Dev, and QA sign off on the mission&apos;s implementability and testability.</li>
      </ul>

      <h2>Phase 2: The 2-Week Execution Cycle</h2>
      <p>Approved missions enter a fixed 2-week execution window. All missions planned within this cycle must be implemented, tested, and merged within this timeframe.</p>
      <ul>
        <li><strong>Mission Queue Alignment:</strong> At the start of the cycle, Dev and QA plan the next two weeks, ensuring the increments are guaranteed to merge.</li>
        <li><strong>Implementation and AI Collaboration:</strong> Developers and AI tools (such as Claude) collaborate during implementation. This process, known as Spec-Driven AI Test Generation, involves using AI to generate the baseline for E2E tests, including PageObjects, PageFunctions, and Spec Files directly from component source code.</li>
        <li><strong>QA Handover and Validation:</strong> The philosophy is that AI generates the baseline, while QA engineers review, validate, and extend these tests to cover complex edge cases.</li>
      </ul>

      <h2>AI as the New Baseline for Quality Assurance</h2>
      <p>Quality assurance is no longer a final hurdle; it is a continuous, AI-assisted process. Using a Spec-Driven AI Test Generation workflow, we leverage LLMs like Claude to automate the repetitive aspects of test creation.</p>
      <p>The technical bridge is the <code>data-qa</code> attributes. When a developer implements a component, they add these specific attributes to the source. Claude then uses the component source and implementation details to generate the necessary infrastructure:</p>
      <ul>
        <li><strong>PageObjects:</strong> Structured representations of the UI.</li>
        <li><strong>PageFunctions:</strong> Reusable logic for component interaction.</li>
        <li><strong>Spec Files:</strong> The test definitions for end-to-end (e2e) validation.</li>
      </ul>
      <p>This creates a &quot;QA Handover&quot; where AI provides the baseline of quality. This allows our human QA experts to move beyond manual regression and focus on high-value tasks: reviewing existing e2e tests, validating the baseline, and creating additional tests for complex edge cases.</p>

      <h2>Ownership Matrix: Clarity at Every Level</h2>
      <p>Autonomy is achieved through a clear Support Topology. Specialized roles exist to handle the planning overhead. This allows the PODs to focus exclusively on Mission execution.</p>
      <p>A system built for speed requires clear autonomy and ownership:</p>
      <ul>
        <li><strong>Initiative Level:</strong> The PO defines the outcomes (the &quot;Why&quot; and &quot;What&quot;).</li>
        <li><strong>Mission Level:</strong> Dev and QA collaboratively define the AC (the &quot;How we slice&quot;).</li>
        <li><strong>Test Validation:</strong> QA formalizes the testing process.</li>
        <li><strong>Implementation:</strong> Handled by a partnership between Dev and AI.</li>
      </ul>
      <p>By adopting the Spec-Architect mindset and leveraging AI for test automation, teams can ensure that high-quality software is delivered in predictable, rapid increments.</p>

      <h2>Conclusion: The Blueprint for Autonomy</h2>
      <p>The transition to PODs, Specs, and AI-driven testing creates a high-confidence delivery environment. The mystery of whether a feature will make it into a release is eliminated by a rigorous Status Progression lifecycle. To maintain transparency and a &quot;production-ready&quot; state, every mission follows a standardized status lifecycle: <strong>Workable → Working → Review → Test → Merged</strong>. A mission is only considered complete once auto-tests pass and the mission successfully meets the 2-week execution constraint.</p>
      <p>By moving work through this cycle in small 1–2 day bursts, teams maintain a constant &quot;Ready to Merge&quot; state. This system requires a fundamental mindset shift: treating the preparation and shaping phase as the most critical part of the build.</p>
      <p><em>As you evaluate your current workflow, ask yourself: Is your two-week sprint a true execution window for planned work, or is it just a rolling deadline for unplanned debt?</em></p>
    `,
  },
];
```

- [ ] **Step 2: Commit**

```bash
git add src/data/blogData.ts
git commit -m "feat: add blog data with first article"
```

---

### Task 2: Create BlogCard Component

**Files:**
- Create: `src/components/blogCard.tsx`

- [ ] **Step 1: Create the BlogCard component**

This mirrors the style of `src/components/projectCard.tsx` but adapted for blog posts — shows image, title, date, description, and a "Read More" link.

```tsx
// src/components/blogCard.tsx
import Link from "next/link";
import Image from "next/image";
import { Calendar } from "lucide-react";
import { Card, CardHeader } from "./ui/card";
import { BlogPost } from "@/data/blogData";

const BlogCard = ({ slug, title, description, date, image }: BlogPost) => {
  return (
    <Card className="group overflow-hidden relative">
      <CardHeader className="p-0">
        <div className="relative w-full h-[300px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 overflow-hidden">
          <Image
            className="object-cover"
            src={image}
            alt={title}
            fill
            priority
          />
        </div>
      </CardHeader>
      <div className="h-full px-8 py-6">
        <div className="flex items-center gap-x-2 text-sm text-primary mb-2">
          <Calendar size={14} />
          <span>
            {new Date(date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </div>
        <Link href={`/blog/${slug}`}>
          <h4 className="h4 mb-2 hover:text-primary transition-all duration-300">
            {title}
          </h4>
        </Link>
        <p className="text-muted-foreground text-lg line-clamp-3">
          {description}
        </p>
      </div>
    </Card>
  );
};

export default BlogCard;
```

- [ ] **Step 2: Commit**

```bash
git add src/components/blogCard.tsx
git commit -m "feat: add BlogCard component"
```

---

### Task 3: Create Home Page Blog Section

**Files:**
- Create: `src/components/blog.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Create the Blog section component**

Follows the same layout pattern as `src/components/work.tsx` — title, subtitle, button, and card grid.

```tsx
// src/components/blog.tsx
import Link from "next/link";
import { Button } from "./ui/button";
import BlogCard from "@/components/blogCard";
import { blogData } from "@/data/blogData";

const Blog = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12">
          <h2 className="section-title mb-4">Blog</h2>
          <p className="subtitle mb-8">
            Thoughts on engineering leadership, AI-driven development, and
            building high-performance teams.
          </p>
          <Link href="/blog">
            <Button>All posts</Button>
          </Link>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {blogData.slice(0, 3).map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
```

- [ ] **Step 2: Add Blog to home page**

In `src/app/page.tsx`, add `Blog` between `Work` and `Contact`:

```tsx
import About from "@/components/about";
import Blog from "@/components/blog";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Work from "@/components/work";

export default function Home() {
  return (
    <section>
      <Hero />
      <About />
      <Services />
      <Work />
      <Blog />
      <Contact />
    </section>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add src/components/blog.tsx src/app/page.tsx
git commit -m "feat: add blog section to home page"
```

---

### Task 4: Create Blog Listing Page

**Files:**
- Create: `src/app/blog/page.tsx`

- [ ] **Step 1: Create the blog listing page**

Follows the layout pattern of `src/app/projects/page.tsx` — a grid of cards.

```tsx
// src/app/blog/page.tsx
import BlogCard from "@/components/blogCard";
import { blogData } from "@/data/blogData";

const BlogPage = () => {
  return (
    <section className="min-h-screen py-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          Blog
        </h2>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {blogData.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
```

- [ ] **Step 2: Commit**

```bash
git add src/app/blog/page.tsx
git commit -m "feat: add blog listing page"
```

---

### Task 5: Create Blog Post Page

**Files:**
- Create: `src/app/blog/[slug]/page.tsx`

- [ ] **Step 1: Create the individual blog post page**

Uses `generateStaticParams` for static generation. Renders the full article content with prose styling.

```tsx
// src/app/blog/[slug]/page.tsx
import { blogData } from "@/data/blogData";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowLeft, ExternalLink } from "lucide-react";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return blogData.map((post) => ({
    slug: post.slug,
  }));
}

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

const BlogPostPage = async ({ params }: BlogPostPageProps) => {
  const { slug } = await params;
  const post = blogData.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <section className="min-h-screen py-12 xl:py-24">
      <div className="container mx-auto max-w-4xl">
        <Link
          href="/blog"
          className="flex items-center gap-x-2 text-primary mb-8 hover:underline"
        >
          <ArrowLeft size={16} />
          Back to blog
        </Link>
        <h1 className="h2 mb-4">{post.title}</h1>
        <div className="flex items-center gap-x-2 text-muted-foreground mb-8">
          <Calendar size={16} />
          <span>
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </div>
        <div className="relative w-full h-[400px] mb-12 rounded-[30px] overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div
          className="prose prose-lg dark:prose-invert max-w-none
            prose-headings:font-semibold prose-headings:mt-10 prose-headings:mb-4
            prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-4
            prose-li:text-muted-foreground
            prose-blockquote:border-l-primary prose-blockquote:text-muted-foreground prose-blockquote:italic
            prose-strong:text-foreground
            prose-code:bg-secondary prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        <div className="mt-12 pt-8 border-t border-border">
          <Link
            href={post.mediumUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-x-2 text-primary hover:underline"
          >
            Read on Medium
            <ExternalLink size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPostPage;
```

- [ ] **Step 2: Commit**

```bash
git add src/app/blog/[slug]/page.tsx
git commit -m "feat: add individual blog post page"
```

---

### Task 6: Add Blog to Navigation

**Files:**
- Modify: `src/components/nav.tsx`

- [ ] **Step 1: Add blog link to nav**

In `src/components/nav.tsx`, add the blog entry to the `links` array:

```ts
const links = [
  { path: "/", name: "home" },
  { path: "/projects", name: "projects" },
  { path: "/blog", name: "blog" },
  { path: "/contact", name: "contact" },
];
```

- [ ] **Step 2: Commit**

```bash
git add src/components/nav.tsx
git commit -m "feat: add blog link to navigation"
```

---

### Task 7: Install Tailwind Typography Plugin

**Files:**
- Modify: `tailwind.config.ts` (or equivalent)

The blog post page uses `prose` classes from `@tailwindcss/typography` for styled article content.

- [ ] **Step 1: Check if typography plugin is already installed**

```bash
grep -q "typography" package.json && echo "installed" || echo "not installed"
```

- [ ] **Step 2: Install if needed**

```bash
npm install -D @tailwindcss/typography
```

- [ ] **Step 3: Add plugin to Tailwind config**

Add `require('@tailwindcss/typography')` to the plugins array in the Tailwind config file.

- [ ] **Step 4: Commit**

```bash
git add package.json package-lock.json tailwind.config.ts
git commit -m "feat: add tailwind typography plugin for blog prose"
```

---

### Task 8: Verify and Test

- [ ] **Step 1: Run the dev server**

```bash
npm run dev
```

- [ ] **Step 2: Verify all pages**

1. Home page: Blog section appears between Work and Contact with the article card
2. `/blog`: Blog listing page shows the card
3. `/blog/architecting-autonomy`: Full article renders with styled prose
4. Navigation: "blog" link appears and works

- [ ] **Step 3: Fix any issues found during verification**

- [ ] **Step 4: Final commit if any fixes were needed**
