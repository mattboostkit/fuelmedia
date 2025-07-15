# Fuel Media & Marketing Website

A modern, high-performance website for Fuel Media & Marketing built with Next.js 14+, TypeScript, Tailwind CSS, and Sanity CMS.

**Build Status**: Fixed all TypeScript errors - 2025-01-15

## 🔥 Features

- **Modern Stack**: Next.js 14 App Router, TypeScript, Tailwind CSS
- **CMS Integration**: Sanity.io for blog and content management
- **Animations**: Framer Motion for smooth, engaging animations
- **Responsive Design**: Mobile-first approach with fluid layouts
- **Performance**: Optimized for Core Web Vitals and SEO
- **Flame Theme**: Bold, disruptive design with fire-inspired animations

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Sanity account with project ID

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/fuel-media-website.git
cd fuel-media-website
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file with:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-07-07
NEXT_PUBLIC_GA_ID=G-E0X4PL8B1Q
```

**Note**: You'll need to replace `your_project_id` with your actual Sanity project ID. If you don't have one, you can create a free account at [sanity.io](https://sanity.io).

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📁 Project Structure

```
fuel-media-website/
├── app/
│   ├── (site)/
│   │   ├── about/
│   │   ├── partnerships/
│   │   ├── blog/
│   │   └── contact/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── ui/              # Reusable UI components
│   ├── sections/        # Page sections
│   └── animations/      # Animation components
├── sanity/
│   ├── schemas/         # Content schemas
│   └── lib/            # Sanity client & queries
└── public/             # Static assets
```

## 🎨 Design System

### Colors
- **Primary**: Purple (#662481)
- **Secondary Blue**: #029fe0
- **Secondary Pink**: #e6067c
- **Flame Colors**: Orange (#ff6b35), Yellow (#ffd93d), Red (#e63946)

### Typography
- **Headings**: Bebas Neue
- **Body**: Inter

## 📝 Content Management

The site uses Sanity CMS for content management. Available schemas:

- **Blog Posts**: Articles with rich text, images, and categories
- **Authors**: Blog post authors with bio and social links
- **Categories**: Blog post categories
- **Gallery**: Image galleries for various pages
- **Team Members**: Team profiles with roles and social links
- **Case Studies**: Client success stories

## 🛠️ Development

### Commands

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Run ESLint
```

### Adding New Pages

1. Create a new folder in `app/(site)/`
2. Add a `page.tsx` file
3. Create corresponding sections in `components/sections/`
4. Update navigation in `components/ui/Navigation.tsx`

## 🚀 Deployment

The site is optimized for deployment on Vercel:

1. Push to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

## 📄 License

This project is licensed under the MIT License.