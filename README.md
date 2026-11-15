# Marrow Studio

A minimalist marketing website for Marrow Studio, an independent branding and web design studio based in India.

## Design Philosophy

**Warm Mineral Color Palette:**
- Bone White: `#F4F1EA`
- Charcoal Slate: `#181716`
- Terracotta Vermilion (Accent): `#C84B31`

**Typography:**
- Display: Instrument Serif (high-contrast editorial serif)
- Body: DM Sans (clean geometric sans-serif)
- Meta: JetBrains Mono (precise monospace for indices and labels)

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Tailwind Typography** (for prose styles)

## Project Structure

```
app/
├── layout.tsx           # Root layout with fonts and global styles
├── globals.css          # Tailwind base styles
├── page.tsx             # Home page
├── about/
│   └── page.tsx         # About / Studio page
├── work/
│   └── page.tsx         # Work / Case studies listing
├── projects/
│   └── [slug]/
│       └── page.tsx     # Dynamic project detail pages
├── contact/
│   ├── layout.tsx       # Contact page metadata
│   └── page.tsx         # Contact form with validation
├── api/
│   ├── contact/route.ts # Contact form submission handler
│   └── images/route.ts  # Image proxy (placeholder)
├── icon.svg             # Site favicon
├── robots.ts            # Robots.txt
└── sitemap.ts           # Sitemap.xml
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run linter

## Key Features

- **SEO Optimized**: Full metadata with Open Graph tags and JSON-LD structured data
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Optimized Images**: Using `next/image` with automatic optimization
- **Contact Form**: Client-side validation with API route integration
- **Case Studies**: 4 detailed project pages with gallery view

## Deploying to Vercel

```bash
npm run build
# Or connect the repo directly to Vercel
```

## Lighthouse Targets

- Performance: 90+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 90+

## Color Usage Guidelines

- The vermilion accent (`#C84B31`) should appear on less than 10% of visual weight
- Bone white backgrounds provide high contrast with charcoal text
- Sand tones used sparingly for subtle borders and secondary text