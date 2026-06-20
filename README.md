# Deer Creek Stone — Website

A premium marketing site for Deer Creek Stone, a family-owned natural stone
quarry in Dayton, Tennessee. Built with Next.js 15 (App Router), TypeScript,
Tailwind CSS v4, and Framer Motion.

---

## 1. What's in this project

```
src/
  app/                    Routes (one folder per page)
    page.tsx              Home
    products/              Products listing + /products/[slug] detail pages
    portfolio/              Filterable project grid
    about/                  Family story + quarry process
    contact/                Quote request form + map
    blog/                   Blog listing + /blog/[slug] post pages
    sitemap.ts             Auto-generated sitemap.xml
    robots.ts              Auto-generated robots.txt
    layout.tsx              Root layout — fonts, global <head>, schema.org
    globals.css             Design tokens (colors, fonts, the "strata" motif)
  components/
    ui/                     Base building blocks (Button, Input, etc.)
    site/                   Page sections (Hero, ProductsTeaser, etc.)
  lib/
    site.config.ts          ALL editable business info + product/project data
    blog.ts                 Reads markdown posts from /content/blog
content/
  blog/                     Blog posts as markdown files (.md)
public/
  images/                   Image folders, organized by section
```

## 2. Editing business info (do this first)

Open **`src/lib/site.config.ts`**. This one file controls:

- Phone number, email, hours, service areas
- Social media links
- The full Products list (Flagstone, Slabs, Treads) — specs, descriptions, applications
- The Projects list (portfolio items)
- Testimonials

Nothing else in the codebase needs to change for these basic edits.

**Things flagged `// TODO` in that file and elsewhere** — these need real
information before launch:
- Full street address (currently just "Dayton, TN")
- Confirmed Instagram / Facebook handles
- Real testimonial quotes (currently placeholder text)
- Family founding story details on the About page (`src/app/about/page.tsx`)

## 3. Replacing placeholder photos

Every image on the site is currently a styled `<PlaceholderImage>` block
labeled with what photo should go there (e.g. "Hero — Quarry face or
stacked flagstone, golden hour"). This was intentional — once you have
photos, here's how to swap them in:

1. Drop your photos into the matching folder in `public/images/`
   (`hero/`, `products/`, `projects/`, `quarry/`, `team/`).
2. In the component file, replace:
   ```tsx
   <PlaceholderImage label="..." />
   ```
   with:
   ```tsx
   import Image from "next/image";
   <Image src="/images/hero/quarry-face.jpg" alt="..." fill className="object-cover" />
   ```
3. Always write a real, descriptive `alt` text — it matters for both
   accessibility and SEO.

Recommended photo specs: JPG or WebP, 2000px on the long edge is plenty,
keep individual files under ~500KB (use squoosh.app to compress if
needed). Next.js will automatically optimize and lazy-load them once you
switch to `next/image`.

## 4. The contact form

The form in `src/components/site/contact-form.tsx` currently **simulates**
a submission (so you can see the full loading -> success UX). Before
launch, wire the `handleSubmit` function to a real endpoint. Easiest
options:

- **Formspree** or **Web3Forms** — no backend code needed, just an API key
- **Resend** — if you want a custom Next.js API route that emails you directly
- A Next.js Route Handler at `src/app/api/contact/route.ts` if you want full control

The `TODO` comment in that file marks exactly where to add the real call.

## 5. Instagram feed

The homepage has an Instagram section (`InstagramStrip` in
`src/components/site/cta-band.tsx`) currently showing placeholder tiles.
Connect a live feed with a no-code embed tool like SnapWidget or Elfsight,
or use the official Instagram Graph API if you want it fully native.

## 6. Adding blog posts

Blog posts are plain markdown files in `content/blog/`. To add a new post,
create a new `.md` file there following this format:

```markdown
---
title: "Your Post Title"
excerpt: "One or two sentence summary shown on the blog listing page."
date: "2026-06-01"
author: "Deer Creek Stone"
category: "Buying Guides"
image: "/images/blog/your-image.jpg"
---

Your post content here, in regular markdown — headings, paragraphs,
links, etc.
```

That's it — no code changes needed. The site automatically picks up new
files, generates a page at `/blog/your-filename`, and adds it to the
sitemap.

## 7. SEO included out of the box

- Unique, keyword-targeted title/description on every page
- `LocalBusiness` schema (homepage), `Product` schema (each product page),
  `Article` schema (each blog post) — all in JSON-LD
- Auto-generated `sitemap.xml` and `robots.txt`
- Semantic HTML, proper heading hierarchy, descriptive alt text patterns
- Fast by default: static generation for every page, optimized fonts

**Before launch:** confirm the business address in
`src/lib/site.config.ts` and `src/app/layout.tsx` (the `localBusinessSchema`
object) — accurate `LocalBusiness` schema is one of the biggest local SEO
levers available.

## 8. Local development

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## 9. Deploying (Vercel — recommended)

1. Push this project to a GitHub repository.
2. Go to vercel.com/new and import the repo.
3. Vercel auto-detects Next.js — no configuration needed. Click **Deploy**.
4. Once deployed, add your custom domain under **Project Settings -> Domains**.

Every push to your main branch will auto-deploy. No server to manage.

## 10. Tech stack reference

- **Next.js 15** (App Router) — routing, static generation, image optimization
- **TypeScript** — type safety across the whole app
- **Tailwind CSS v4** — utility-first styling, design tokens in `globals.css`
- **Framer Motion** — scroll reveals, mobile menu animation, form transitions
- **Fraunces + Inter** (Google Fonts) — display serif + body sans
- **gray-matter / remark** — markdown blog content layer

---

Built by GShyamVP Web Design.
