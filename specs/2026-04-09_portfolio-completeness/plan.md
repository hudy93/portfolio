# Portfolio Completeness Implementation Plan

## Overview

Fix all bugs, typos, and structural issues in the portfolio site. Implement the contact form, projects page, legal pages (Impressum/Datenschutz), SEO metadata, and accessibility improvements. The site is a Next.js 14 / TypeScript / Tailwind CSS portfolio for Marcel Hudy (single-person company, Germany-based).

## Current State Analysis

The portfolio has a solid structural foundation with three routes (`/`, `/projects`, `/contact`), but is significantly incomplete:
- Multiple bugs and typos across components
- Placeholder Lorem Ipsum content throughout
- Empty stub pages for `/contact` and `/projects`
- No SEO metadata (still "Create Next App")
- No legal pages (Impressum/Datenschutz — legally required in Germany)
- No contact form despite dependencies being installed (react-hook-form, zod, shadcn form primitives)
- Accessibility issues (empty alt texts, missing ARIA labels, double `<main>` nesting)
- Missing `--tertiary` CSS variable used by components

### Key Discoveries:
- `template.tsx:11` — variant key `hidde` never matches `initial="hidden"` (line 22), so fade-in animation silently fails
- `template.tsx:20` + `page.tsx:9` — double `<main>` nesting (invalid HTML)
- `work.tsx:78` — `slice(0.4)` is coerced to `slice(0)`, works by accident
- `about.tsx:86` — "eduction" typo, also referenced on lines 216, 220
- `contact.tsx:11` — "Im" missing apostrophe
- `hero.tsx:52`, `about.tsx:121` — `imgSrc=""` passed to DevImg, will break next/image
- `themeToggler.tsx:17` — `darfk:rotate-0` typo
- `hero.tsx:58` — `buttom-44` typo (should be `bottom-44`)
- `hero.tsx:33` — `gab-y-3` typo (should be `gap-y-3`)
- `globals.css` — missing `--tertiary` CSS variable, used by `contact.tsx:7` and `projectCard.tsx:16`
- `badge.tsx` — non-functional stub (renders `<div>Badge</div>`, ignores props), imported in `hero.tsx:12` but the shadcn `ui/badge.tsx` is the working one
- `socials.tsx:12,16` — both social links point to `/`
- Form infrastructure is ready: `react-hook-form`, `zod`, `@hookform/resolvers`, and shadcn `form.tsx`, `input.tsx`, `textarea.tsx`, `label.tsx` are all installed

## Desired End State

A fully functional portfolio site with:
1. All bugs and typos fixed
2. Valid HTML structure (no double `<main>`)
3. Working contact form with client-side validation (server action using Resend or similar for email delivery)
4. Fully implemented projects page with filtering
5. Legal pages (Impressum, Datenschutz) with placeholder text structure
6. Proper SEO metadata, Open Graph tags, sitemap, robots.txt
7. Accessibility improvements (alt texts, ARIA labels)
8. Footer with links to legal pages

### Verification:
- `npm run build` completes without errors
- `npm run lint` passes
- All pages render correctly in dev mode
- Contact form validates and submits
- No invalid HTML nesting

## What We're NOT Doing

- **Real content**: Lorem Ipsum text, bio copy, service descriptions, and project details need to be provided by the user — we'll add TODO comments where real content is needed
- **Real developer images**: `imgSrc` will use a placeholder image path — user provides actual photos
- **Real social URLs**: We'll add TODO comments — user provides LinkedIn/GitHub URLs
- **Email service setup**: The contact form will use a Next.js API route with a configurable email service. We'll implement the route with Resend as the provider, but the API key setup is out of scope
- **Cookie consent banner**: Not needed currently (no analytics, no third-party scripts, fonts are self-hosted)
- **Analytics**: Not adding any tracking
- **PWA manifest**: Out of scope
- **Testimonials section**: Not part of this plan
- **CV PDF file**: User provides the actual file
- **Domain/deployment configuration**: Out of scope
- **Performance optimizations**: (lazy loading, code splitting) — separate concern

## Implementation Approach

Work in 6 phases, ordered by dependency and risk:
1. **Bug fixes & typos** — foundational, no new features depend on these being wrong
2. **CSS & structural fixes** — fix double `<main>`, add missing CSS variable, delete dead code
3. **SEO & metadata** — layout-level changes, affects all pages
4. **Contact form** — new feature, uses existing dependencies
5. **Projects page** — new feature, reuses existing ProjectCard component
6. **Legal pages & footer** — new pages + footer links update

---

## Phase 1: Bug Fixes & Typos

### Overview
Fix all identified typos and bugs across the codebase. These are safe, isolated changes.

### Changes Required:

#### 1. Fix Framer Motion variant typo
**File**: `src/app/template.tsx`
**Line 11**: Change `hidde` to `hidden`
```tsx
// Before
const variants = {
  hidde: { opacity: 0 },
  enter: { opacity: 1 },
};

// After
const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
};
```

#### 2. Fix `slice(0.4)` bug
**File**: `src/components/work.tsx`
**Line 78**: Change `0.4` to `0, 4`
```tsx
// Before
{projectData.slice(0.4).map((project, index) => {

// After
{projectData.slice(0, 4).map((project, index) => {
```

#### 3. Fix "eduction" typo
**File**: `src/components/about.tsx`
**Line 86**: Change `"eduction"` to `"education"`
Also update references on lines 216 and 220 that use `getData(qualificationData, "eduction")`.
```tsx
// Line 86: data key
title: "education",

// Line 216: getData call
{getData(qualificationData, "education")?.title}

// Line 220: getData call
{getData(qualificationData, "education")?.data.map(
```

#### 4. Fix missing apostrophe
**File**: `src/components/contact.tsx`
**Line 11**: Change `Im` to `I&apos;m`
```tsx
Prepared to turn your ideas into reality? I&apos;m here to help!
```

#### 5. Fix ThemeToggler typo
**File**: `src/components/themeToggler.tsx`
**Line 17**: Change `darfk:rotate-0` to `dark:rotate-0`
```tsx
<MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
```

#### 6. Fix Hero typos
**File**: `src/components/hero.tsx`
**Line 58**: Change `buttom-44` to `bottom-44`
**Line 33**: Change `gab-y-3` to `gap-y-3`
```tsx
// Line 33
<div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">

// Line 58
<div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
```
Note: Also fix `animate bounce` → `animate-bounce` on line 58 (missing hyphen).

### Success Criteria:

#### Automated Verification:
- [x] `npm run build` completes without errors
- [x] `npm run lint` passes
- [x] No TypeScript errors

#### Manual Verification:
- [ ] Framer Motion fade-in animation now works on page transitions
- [ ] Theme toggle moon icon rotates correctly in dark mode
- [ ] Scroll-down arrow bounces and is positioned correctly on hero

---

## Phase 2: CSS & Structural Fixes

### Overview
Fix the double `<main>` nesting, add the missing `--tertiary` CSS variable, and remove the dead `badge.tsx` stub.

### Changes Required:

#### 1. Fix double `<main>` nesting
**File**: `src/app/page.tsx`
**Line 9**: Change `<main>` to `<section>` (since `template.tsx` already wraps in `<motion.main>`)
```tsx
export default function Home() {
  return (
    <section>
      <Hero />
      <About />
      <Services />
      <Work />
      <Contact />
    </section>
  );
}
```

#### 2. Add missing `--tertiary` CSS variable
**File**: `src/app/globals.css`
Add `--tertiary` to both `:root` and `.dark` sections. Use a warm beige for light mode (matches the `bg-[#fef9f5]` used in the header for the homepage) and a muted dark variant for dark mode.
```css
/* In :root (after --secondary-foreground) */
--tertiary: 24 60% 97%;

/* In .dark (after --secondary-foreground) */
--tertiary: 217.2 32.6% 12%;
```

#### 3. Delete non-functional badge stub
**File**: `src/components/badge.tsx`
Delete this file entirely. It renders `<div>Badge</div>` ignoring all props. The actual Badge is `src/components/ui/badge.tsx` (shadcn).

#### 4. Remove badge stub import from hero
**File**: `src/components/hero.tsx`
**Line 12**: Remove `import Badge from "./badge";` — it's imported but the `Badge` component is never actually used in the JSX (hero uses `RiBriefcase4Fill`, `RiTeamFill`, `RiTodoFill` icons for stat badges, but doesn't render the `Badge` component).

#### 5. Fix DevImg to handle empty imgSrc gracefully
**File**: `src/components/devImg.tsx`
Don't render the Image if `imgSrc` is empty:
```tsx
const DevImg: React.FC<DevImgProps> = ({ containerStyles, imgSrc }) => {
  return (
    <div className={containerStyles}>
      {imgSrc && <Image src={imgSrc} fill priority alt="" />}
    </div>
  );
};
```

### Success Criteria:

#### Automated Verification:
- [x] `npm run build` completes without errors
- [x] `npm run lint` passes
- [x] No TypeScript errors

#### Manual Verification:
- [ ] Home page has only one `<main>` element (check in browser DevTools)
- [ ] Contact CTA section (`bg-tertiary`) renders with a visible warm background in light mode
- [ ] ProjectCard image area has visible background color in light mode
- [ ] Hero and About sections render without errors even with empty `imgSrc`

---

## Phase 3: SEO & Metadata

### Overview
Replace placeholder metadata with real SEO-relevant content. Add per-page metadata, Open Graph tags, sitemap, and robots.txt.

### Changes Required:

#### 1. Update root layout metadata
**File**: `src/app/layout.tsx`
Replace the placeholder metadata with proper values:
```tsx
import type { Metadata } from "next";

const siteUrl = "https://marcelhudy.com"; // TODO: update with real domain

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Marcel Hudy | Full Stack Engineer",
    template: "%s | Marcel Hudy",
  },
  description:
    "Full Stack Engineer specializing in web development, testing, and app development. Based in Munich, Germany.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Marcel Hudy",
    title: "Marcel Hudy | Full Stack Engineer",
    description:
      "Full Stack Engineer specializing in web development, testing, and app development. Based in Munich, Germany.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marcel Hudy | Full Stack Engineer",
    description:
      "Full Stack Engineer specializing in web development, testing, and app development.",
  },
  robots: {
    index: true,
    follow: true,
  },
};
```

#### 2. Add contact page metadata
**File**: `src/app/contact/page.tsx`
```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Marcel Hudy for your next project.",
};
```

#### 3. Add projects page metadata
**File**: `src/app/projects/page.tsx`
```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore projects by Marcel Hudy — web development, testing, and app development.",
};
```

#### 4. Add sitemap
**File**: `src/app/sitemap.ts` (new file)
```tsx
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://marcelhudy.com"; // TODO: update with real domain
  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/projects`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.5 },
    { url: `${baseUrl}/impressum`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/datenschutz`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];
}
```

#### 5. Add robots.txt
**File**: `src/app/robots.ts` (new file)
```tsx
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://marcelhudy.com"; // TODO: update with real domain
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
```

### Success Criteria:

#### Automated Verification:
- [x] `npm run build` completes without errors
- [x] `npm run lint` passes

#### Manual Verification:
- [ ] Browser tab shows "Marcel Hudy | Full Stack Engineer" on home page
- [ ] Contact page tab shows "Contact | Marcel Hudy"
- [ ] Projects page tab shows "Projects | Marcel Hudy"
- [ ] `/sitemap.xml` returns valid XML in dev mode
- [ ] `/robots.txt` returns valid content in dev mode
- [ ] View page source shows Open Graph meta tags

---

## Phase 4: Contact Form

### Overview
Implement a full contact form on the `/contact` page using the already-installed react-hook-form + zod + shadcn form primitives. Add a Next.js API route for form submission.

### Changes Required:

#### 1. Create contact form schema
**File**: `src/lib/contact-schema.ts` (new file)
```tsx
import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
```

#### 2. Create contact form component
**File**: `src/components/contactForm.tsx` (new file)

A `"use client"` component that:
- Uses `useForm` from react-hook-form with `zodResolver` for validation
- Renders name, email, subject (Input) and message (Textarea) fields using shadcn Form components
- Shows validation errors inline via `FormMessage`
- Submits via `fetch("/api/contact", { method: "POST", body: JSON.stringify(data) })`
- Shows success/error toast-like feedback using a simple state message (no need for a toast library)
- Has a loading state on the submit button
- Includes a privacy notice: "By submitting this form, you agree to the processing of your data as described in our privacy policy."

```tsx
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { contactFormSchema, ContactFormValues } from "@/lib/contact-schema";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Send, ArrowLeftIcon, MailIcon, MessageSquare, User } from "lucide-react";
import Link from "next/link";

const ContactForm = () => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setStatus("loading");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Failed to send message");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="py-12 xl:py-24">
      <div className="container mx-auto">
        <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              Say Hello
            </div>
            <h1 className="h1 max-w-md mb-8">Let&apos;s Work Together.</h1>
            <p className="subtitle max-w-[400px]">
              {/* TODO: Replace with real description */}
              Have a project in mind or just want to say hello? Fill out the form
              and I&apos;ll get back to you as soon as possible.
            </p>
          </div>
          <div className="hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat"></div>
        </div>
        <div className="max-w-[600px] mx-auto xl:mx-0">
          {status === "success" ? (
            <div className="text-center py-12">
              <MailIcon className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="h3 mb-4">Message Sent!</h3>
              <p className="subtitle">Thank you for reaching out. I&apos;ll get back to you soon.</p>
              <Link href="/">
                <Button variant="secondary" className="gap-x-2">
                  <ArrowLeftIcon size={18} /> Back to Home
                </Button>
              </Link>
            </div>
          ) : (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-y-4">
                <div className="flex gap-4 flex-col md:flex-row">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="your@email.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input placeholder="What is this about?" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Your message..."
                          className="min-h-[150px] resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <p className="text-sm text-muted-foreground">
                  By submitting this form, you agree to the processing of your data as described in our{" "}
                  <Link href="/datenschutz" className="underline hover:text-primary">
                    privacy policy
                  </Link>.
                </p>
                {status === "error" && (
                  <p className="text-destructive text-sm">
                    Something went wrong. Please try again or email me directly.
                  </p>
                )}
                <Button type="submit" className="gap-x-2 max-w-[166px]" disabled={status === "loading"}>
                  {status === "loading" ? "Sending..." : "Send Message"}
                  <Send size={18} />
                </Button>
              </form>
            </Form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
```

#### 3. Create API route for contact form
**File**: `src/app/api/contact/route.ts` (new file)

A minimal API route that validates the request body and logs it. Email delivery is stubbed — add a real email service (Resend, SendGrid, etc.) when ready.

```tsx
import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/contact-schema";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = contactFormSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid form data", details: result.error.flatten() },
        { status: 400 },
      );
    }

    // TODO: Send email using Resend, SendGrid, or similar service
    // Example with Resend:
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: "contact@marcelhudy.com",
    //   to: "hudymarcel@gmail.com",
    //   subject: `[Portfolio] ${result.data.subject}`,
    //   text: `Name: ${result.data.name}\nEmail: ${result.data.email}\n\n${result.data.message}`,
    // });

    console.log("Contact form submission:", result.data);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
```

#### 4. Update contact page
**File**: `src/app/contact/page.tsx`
```tsx
import type { Metadata } from "next";
import ContactForm from "@/components/contactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Marcel Hudy for your next project.",
};

const Contact = () => {
  return <ContactForm />;
};

export default Contact;
```

### Success Criteria:

#### Automated Verification:
- [x] `npm run build` completes without errors
- [x] `npm run lint` passes

#### Manual Verification:
- [ ] `/contact` renders the form with name, email, subject, message fields
- [ ] Form shows validation errors when submitting empty/invalid fields
- [ ] Submitting valid data shows "Message Sent!" success state
- [ ] Privacy policy link in the form navigates to `/datenschutz`
- [ ] Form is responsive (fields stack on mobile, side-by-side on desktop)

---

## Phase 5: Projects Page

### Overview
Implement the `/projects` page with a filterable grid of project cards, reusing the existing `ProjectCard` component and `projectData` from `work.tsx`.

### Changes Required:

#### 1. Extract project data to a shared file
**File**: `src/lib/project-data.ts` (new file)

Move the `ProjectData` interface and `projectData` array out of `work.tsx` so both the home page Work section and the Projects page can use the same data.

```tsx
export interface ProjectData {
  image: string;
  category: string;
  name: string;
  desc: string;
  link: string;
  github: string;
}

// TODO: Replace with real project data
export const projectData: ProjectData[] = [
  {
    image: "/work/1.png",
    category: "react js",
    name: "React Development",
    desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "angular",
    name: "Angular Development",
    desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
    link: "/",
    github: "/",
  },
  {
    image: "/work/3.png",
    category: "c#",
    name: "C# App Development",
    desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
    link: "/",
    github: "/",
  },
];
```

#### 2. Update work.tsx to use shared data
**File**: `src/components/work.tsx`
Remove the inline `ProjectData` interface and `projectData` array. Import from `@/lib/project-data`.

```tsx
import { projectData, type ProjectData } from "@/lib/project-data";
```

Remove lines 16-49 (the old interface and data definitions). Keep the rest of the component intact. Also update `projectCard.tsx` import to use the new location.

#### 3. Update projectCard.tsx import
**File**: `src/components/projectCard.tsx`
**Line 2**: Change import source:
```tsx
import { ProjectData } from "@/lib/project-data";
```

#### 4. Implement projects page
**File**: `src/app/projects/page.tsx`

A page with category filter tabs and a grid of project cards:

```tsx
"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/projectCard";
import { projectData } from "@/lib/project-data";

const categories = ["all", ...new Set(projectData.map((p) => p.category))];

const Projects = () => {
  const [category, setCategory] = useState("all");
  const filtered =
    category === "all"
      ? projectData
      : projectData.filter((p) => p.category === category);

  return (
    <section className="min-h-screen py-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>
        <Tabs defaultValue="all" className="mb-12 xl:mb-16">
          <TabsList className="w-full h-full md:flex md:flex-wrap md:justify-center gap-2 md:border dark:border-none">
            {categories.map((cat) => (
              <TabsTrigger
                key={cat}
                value={cat}
                className="capitalize"
                onClick={() => setCategory(cat)}
              >
                {cat}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filtered.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
```

Note: Since this is now a client component (for `useState`), the metadata export must be moved. We'll handle this by creating a separate layout or by adding metadata via `generateMetadata` in a parent — but actually the simplest approach is to keep the metadata in a separate `layout.tsx` for the projects route, or accept that the client component can't export metadata and use the route segment config instead.

**File**: `src/app/projects/layout.tsx` (new file)
```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore projects by Marcel Hudy — web development, testing, and app development.",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
```

### Success Criteria:

#### Automated Verification:
- [x] `npm run build` completes without errors
- [x] `npm run lint` passes
- [x] No TypeScript errors (ProjectData import updated everywhere)

#### Manual Verification:
- [ ] `/projects` renders a grid of project cards
- [ ] Category filter tabs work (clicking a category filters the grid)
- [ ] "All" tab shows all projects
- [ ] Project cards look identical to the homepage carousel cards
- [ ] Page is responsive (1 column mobile, 2 tablet, 3 desktop)

---

## Phase 6: Legal Pages, Accessibility & Footer

### Overview
Add Impressum and Datenschutz pages with structural templates (content to be provided by user/lawyer). Fix accessibility issues. Update footer with legal page links.

### Changes Required:

#### 1. Create Impressum page
**File**: `src/app/impressum/page.tsx` (new file)

```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum — Legal notice for Marcel Hudy's website.",
};

const Impressum = () => {
  return (
    <section className="min-h-screen py-12 xl:py-24">
      <div className="container mx-auto max-w-[800px]">
        <h1 className="h1 mb-12">Impressum</h1>

        <h2 className="h2 mb-4">Angaben gemäß § 5 TMG</h2>
        <p className="mb-8">
          Marcel Hudy
          <br />
          {/* TODO: Add business name if applicable */}
          Görresstr. 48
          <br />
          80797 München
        </p>

        <h2 className="h2 mb-4">Kontakt</h2>
        <p className="mb-8">
          Telefon: 017661314578
          <br />
          E-Mail: hudymarcel@gmail.com
        </p>

        {/* TODO: Add the following sections with proper legal text:
          - Umsatzsteuer-ID (if applicable)
          - Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
          - Haftungsausschluss (Disclaimer)
          - Haftung für Inhalte
          - Haftung für Links
          - Urheberrecht
        */}
      </div>
    </section>
  );
};

export default Impressum;
```

#### 2. Create Datenschutz page
**File**: `src/app/datenschutz/page.tsx` (new file)

```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung — Privacy policy for Marcel Hudy's website.",
};

const Datenschutz = () => {
  return (
    <section className="min-h-screen py-12 xl:py-24">
      <div className="container mx-auto max-w-[800px]">
        <h1 className="h1 mb-12">Datenschutzerklärung</h1>

        <h2 className="h2 mb-4">1. Datenschutz auf einen Blick</h2>
        <h3 className="text-xl font-semibold mb-2">Allgemeine Hinweise</h3>
        <p className="mb-8 text-muted-foreground">
          Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit
          Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
        </p>

        <h2 className="h2 mb-4">2. Hosting</h2>
        <p className="mb-8 text-muted-foreground">
          {/* TODO: Add hosting provider information (e.g., Vercel) */}
          Diese Website wird bei [Hosting-Anbieter] gehostet.
        </p>

        <h2 className="h2 mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>
        <h3 className="text-xl font-semibold mb-2">Datenschutz</h3>
        <p className="mb-4 text-muted-foreground">
          Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten
          sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und
          entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser
          Datenschutzerklärung.
        </p>
        <h3 className="text-xl font-semibold mb-2">Verantwortliche Stelle</h3>
        <p className="mb-8 text-muted-foreground">
          Marcel Hudy
          <br />
          Görresstr. 48
          <br />
          80797 München
          <br />
          E-Mail: hudymarcel@gmail.com
        </p>

        <h2 className="h2 mb-4">4. Datenerfassung auf dieser Website</h2>
        <h3 className="text-xl font-semibold mb-2">Kontaktformular</h3>
        <p className="mb-4 text-muted-foreground">
          Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre
          Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen
          Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von
          Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne
          Ihre Einwilligung weiter.
        </p>
        <h3 className="text-xl font-semibold mb-2">Speicherdauer</h3>
        <p className="mb-8 text-muted-foreground">
          Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns,
          bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung
          widerrufen oder der Zweck für die Datenspeicherung entfällt. Zwingende
          gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben
          unberührt.
        </p>

        {/* TODO: Add remaining sections with legal review:
          - Server-Log-Dateien
          - Cookies (currently: no cookies used, only localStorage for theme preference)
          - SSL/TLS encryption
          - Right of access, correction, deletion
          - Right to data portability
          - Right to object
          - Complaint to supervisory authority
        */}
      </div>
    </section>
  );
};

export default Datenschutz;
```

#### 3. Add accessibility improvements

**File**: `src/components/devImg.tsx`
Add meaningful alt text prop:
```tsx
interface DevImgProps {
  containerStyles: string;
  imgSrc: string;
  alt?: string;
}
const DevImg: React.FC<DevImgProps> = ({ containerStyles, imgSrc, alt = "" }) => {
  return (
    <div className={containerStyles}>
      {imgSrc && <Image src={imgSrc} fill priority alt={alt} />}
    </div>
  );
};
```

**File**: `src/components/hero.tsx`
Update DevImg usage to include alt text:
```tsx
<DevImg
  containerStyles="bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom"
  imgSrc=""
  alt="Marcel Hudy - Full Stack Engineer"
/>
```

**File**: `src/components/about.tsx`
Update DevImg usage:
```tsx
<DevImg
  containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
  imgSrc=""
  alt="Marcel Hudy"
/>
```

**File**: `src/components/socials.tsx`
Add `aria-label` to social links and accessible icon names:
```tsx
const icons: Icon[] = [
  {
    path: "http://www.linkedin.com/in/marcelhudy", // TODO: Replace with real LinkedIn URL
    name: <RiLinkedinFill />,
    label: "LinkedIn",
  },
  {
    path: "https://github.com/hudy93", // TODO: Replace with real GitHub URL
    name: <RiGithubFill />,
    label: "GitHub",
  },
];
```
Update the Icon interface to include `label: string` and render `aria-label` on the link:
```tsx
<Link href={icon.path} key={index} aria-label={icon.label}>
```

**File**: `src/components/mobileNav.tsx`
Add `aria-label` to the hamburger menu trigger button. The Sheet trigger needs an accessible label.

**File**: `src/components/logo.tsx`
Add alt text to the logo image:
```tsx
<Image src="/logo.png" width={54} height={54} priority alt="Marcel Hudy logo" />
```

#### 4. Update footer with legal links
**File**: `src/components/footer.tsx`
Add links to Impressum and Datenschutz:
```tsx
import Socials from "./socials";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between">
          <Socials
            containerStyles="flex gap-x-6 mx-auto xl:mx-0 mb-4"
            iconsStyles="text-primary text-[20px] dark:text-white/70 hover:text-white dark:hover:text-primary"
          />
          <div className="flex gap-x-4 mb-4 text-sm">
            <Link href="/impressum" className="text-muted-foreground hover:text-primary transition-all">
              Impressum
            </Link>
            <Link href="/datenschutz" className="text-muted-foreground hover:text-primary transition-all">
              Datenschutz
            </Link>
          </div>
          <div className="text-muted-foreground">
            Copyright &copy; Marcel Hudy. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
```

#### 5. Update nav links to include legal pages in sitemap (no nav changes needed — legal pages are footer-only)

### Success Criteria:

#### Automated Verification:
- [x] `npm run build` completes without errors
- [x] `npm run lint` passes

#### Manual Verification:
- [ ] `/impressum` renders the legal notice page
- [ ] `/datenschutz` renders the privacy policy page
- [ ] Footer shows Impressum and Datenschutz links
- [ ] Social links have `aria-label` attributes (check in DevTools)
- [ ] Mobile hamburger menu has accessible label
- [ ] Logo image has alt text
- [ ] Both legal pages are styled consistently with the rest of the site

---

## Testing Strategy

### Automated:
- `npm run build` — verifies no build errors, TypeScript compilation, metadata generation
- `npm run lint` — ESLint checks

### Manual Testing Steps:
1. Navigate through all pages: `/`, `/projects`, `/contact`, `/impressum`, `/datenschutz`
2. Verify page transition animation (Framer Motion fade-in) works
3. Test dark/light mode toggle on all pages
4. Test contact form validation (empty fields, invalid email, short message)
5. Submit the contact form and verify success state
6. Test project filtering on `/projects` page
7. Test mobile responsive layout on all pages
8. Verify footer legal links work
9. Check browser tab titles on each page
10. View source to confirm Open Graph meta tags
11. Access `/sitemap.xml` and `/robots.txt`

## Performance Considerations

- No new heavy dependencies added
- Contact form is client-side only (no SSR concerns for the form state)
- Projects page uses client-side filtering (no API calls)
- Legal pages are static server components (fast rendering)

## References

- Research: [`./research.md`](./research.md)
