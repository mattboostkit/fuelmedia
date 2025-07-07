# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **Next.js 15.3.5** marketing agency website for Fuel Media & Marketing, using TypeScript, Tailwind CSS, and Sanity CMS. The project emphasizes a bold "flame" brand identity with fire-inspired animations and colors.

## Development Commands

```bash
npm run dev         # Start dev server with Turbopack (faster, experimental)
npm run dev:simple  # Start dev server without Turbopack
npm run build       # Production build
npm run start       # Production server
npm run lint        # Run ESLint
```

## Architecture & Key Patterns

### Next.js App Router Structure
- Uses App Router (not Pages Router) - all routes in `app/` directory
- Server Components by default - use `'use client'` directive only when needed
- Route group `(site)` contains all main pages without affecting URLs

### Component Organization
- `components/ui/` - Reusable UI components (Button, Card, Navigation, etc.)
- `components/sections/` - Page-specific sections (HeroSection, ServicesSection, etc.)
- Components use barrel exports via `index.ts` files
- All components are TypeScript with proper type definitions

### Styling Architecture
- **Tailwind CSS** with extensive custom configuration
- **Flame theme** throughout - use flame colors (orange, yellow, red) for brand consistency
- **Glass morphism effects** via `glass-effect` utility class
- Custom animations: `gradient`, `flame`, `fadeIn`, `slideUp`, `typewriter`
- Responsive design with mobile-first approach

### Sanity CMS Integration
- Project ID: `jegkcud6`, Dataset: `production`
- Schemas in `sanity/schemas/`: blogPost, author, category, caseStudy, gallery, teamMember
- GROQ queries in `sanity/lib/queries.ts`
- Use Sanity's image builder for optimized images
- Portable Text for rich content rendering

### Key Design Tokens
```css
/* Primary Colors */
--primary: #662481 (purple)
--secondary-blue: #029fe0
--secondary-pink: #e6067c

/* Flame Colors */
--flame-orange: #ff6b35
--flame-yellow: #ffd93d
--flame-red: #e63946

/* Fonts */
--font-bebas: Bebas Neue (headings)
--font-inter: Inter (body)
```

### Environment Variables
Required in `.env.local`:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=jegkcud6
NEXT_PUBLIC_SANITY_DATASET=production
```

## Important Conventions

1. **Server Components First**: Only use client components when interactivity is needed
2. **Type Safety**: All components and functions must have proper TypeScript types
3. **Flame Theme**: Maintain fire/flame metaphor in new features (colors, animations, copy)
4. **Performance**: Use Sanity's image optimization, keep bundle size minimal
5. **Animations**: Use Framer Motion for complex animations, CSS for simple ones
6. **Mobile-First**: Design for mobile, enhance for desktop

## Common Tasks

### Adding a New Page
1. Create folder in `app/(site)/your-page/`
2. Add `page.tsx` with metadata export
3. Create sections in `components/sections/`
4. Update Navigation component with new link

### Creating a New UI Component
1. Add to `components/ui/` with TypeScript interface
2. Use CVA for variant styling if needed
3. Export from `components/ui/index.ts`
4. Follow existing component patterns

### Working with Sanity Content
1. Define/update schema in `sanity/schemas/`
2. Add GROQ query to `sanity/lib/queries.ts`
3. Fetch data in page components using async/await
4. Use Portable Text components for rich text rendering