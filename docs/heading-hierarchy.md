# Heading Hierarchy Guidelines

## Overview
This document outlines the consistent heading hierarchy used across the Fuel Media & Marketing website.

## Heading Sizes (Responsive)
- **H1**: `text-5xl md:text-7xl lg:text-8xl font-bold`
- **H2**: `text-3xl md:text-5xl lg:text-6xl`
- **H3**: `text-2xl md:text-3xl lg:text-4xl`
- **H4**: `text-xl md:text-2xl`
- **H5**: `text-lg md:text-xl`
- **H6**: `text-base md:text-lg`

## Usage Guidelines

### H1 - Main Page Titles
- Used once per page as the primary title
- Should be the most prominent text on the page
- Can use gradient text for emphasis
- Always use actual `<h1>` tags, not classes

Example:
```jsx
<h1 className="gradient-text mb-6">
  <AnimatedText variant="slideUp">
    Partnership Opportunities
  </AnimatedText>
</h1>
```

### H2 - Section Titles
- Used for main sections within a page
- Should clearly delineate major content areas
- Add `font-bebas` class for consistent styling

Example:
```jsx
<h2 className="gradient-text mb-6 font-bebas">Our Expertise</h2>
```

### H3 - Subsection Titles
- Used for subsections within main sections
- Card titles, service names, feature titles
- Remove inline size classes, rely on global styles

Example:
```jsx
<h3 className="font-bebas mb-4 gradient-text">Financial Auditing</h3>
```

### H4-H6 - Minor Headings
- Used for lists, small sections, metadata
- H4 for important but smaller headings
- H5 for FAQ questions, stat labels
- H6 rarely used, for smallest text hierarchies

## Styling Classes

### Gradient Text
- Primary headings: Use `gradient-text` class
- Creates visual emphasis and brand consistency
- Best for H1 and important H2 headings

### Regular Text
- Secondary headings: Use `text-gray-900 dark:text-white`
- Better for readability in smaller sizes
- Use for H3 and below in most cases

### Font
- All headings should include `font-bebas` for brand consistency
- This is now applied globally but can be added explicitly

## Utility Classes
For consistency, you can use these utility classes:
- `.h1-gradient` - Gradient text with Bebas font
- `.h2-gradient` - Gradient text with Bebas font
- `.h3-gradient` - Gradient text with Bebas font
- `.h1-regular` - Regular color with Bebas font
- `.h2-regular` - Regular color with Bebas font
- `.h3-regular` - Regular color with Bebas font

## Common Patterns

### Page Header
```jsx
<h1 className="gradient-text mb-6">
  <AnimatedText variant="slideUp">
    Page Title
  </AnimatedText>
</h1>
<AnimatedText variant="fadeIn" delay={0.2} className="text-xl text-gray-700 dark:text-white/80">
  Page description or subtitle
</AnimatedText>
```

### Section Header
```jsx
<h2 className="gradient-text mb-6 font-bebas">Section Title</h2>
<p className="text-xl text-gray-700 dark:text-white/80 max-w-3xl mx-auto">
  Section description
</p>
```

### Card Title
```jsx
<h3 className="font-bebas mb-3 text-gray-900 dark:text-white">Card Title</h3>
```

## Testing
View the heading hierarchy at `/heading-test` to see all heading levels in action.