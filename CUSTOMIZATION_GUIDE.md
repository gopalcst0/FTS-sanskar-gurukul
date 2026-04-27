# FTS Sanskar Gurukul - Customization Guide

This guide helps you customize and maintain the FTS Sanskar Gurukul website.

## Quick Updates

### Change Contact Information

**File**: `/app/contact/page.tsx`, `/components/footer.tsx`

Update these values:
```tsx
const contactEmail = "contact@ftssanskar.com"
const contactPhone = "+1 (234) 567-890"
const businessHours = "Monday - Friday, 9 AM - 6 PM"
```

### Update Course List

**File**: `/app/courses/page.tsx`

Modify the `courses` array:
```tsx
const courses = [
  {
    title: 'Your Course Name',
    description: 'Your course description',
    ageGroup: 'X-Y Years',
    duration: 'X Weeks',
    price: '₹X,XXX',
    highlights: ['feature 1', 'feature 2', ...],
  },
  // ... more courses
]
```

### Update Teacher Profiles

**File**: `/app/about/page.tsx`

Find and update the teacher grid:
```tsx
{
  name: 'Teacher Name',
  expertise: 'Area of expertise',
  experience: 'X+ years',
  description: 'Brief bio',
}
```

### Change Colors

**File**: `/app/globals.css`

Update CSS variables:
```css
:root {
  --primary: #1a3a52;        /* Navy */
  --secondary: #d4a574;      /* Gold */
  --accent: #ff6b35;         /* Saffron */
  --background: #faf8f3;     /* Light cream */
  /* ... more variables */
}
```

### Update Logo

1. Replace `/public/logo.jpg` with your new logo
2. Update the logo size in `/components/navbar.tsx` if needed:
   ```tsx
   <Image 
     src="/logo.jpg" 
     alt="FTS Sanskar Logo" 
     width={40}    // Change this
     height={40}   // Change this
   />
   ```

### Update Social Media Links

**Files**: `/components/footer.tsx`, `/app/gallery/page.tsx`

Find and update:
```tsx
<a href="https://facebook.com" target="_blank">...</a>
<a href="https://instagram.com" target="_blank">...</a>
```

Replace with actual URLs:
```tsx
<a href="https://facebook.com/ftssanskargurukul" target="_blank">...</a>
<a href="https://instagram.com/ftssanskargurukul" target="_blank">...</a>
```

## Page-Specific Customization

### Home Page (`/app/page.tsx`)

**Hero Section Stats**: Update the statistics shown
```tsx
<div>
  <p className="font-bold text-primary text-lg">500+</p>
  <p className="text-muted-foreground">Students Enrolled</p>
</div>
```

**Features Section**: Edit the 4 main feature cards

**Popular Courses**: Change which 3 courses are featured

**Testimonials**: Update parent testimonials with real reviews

**FAQ**: Modify common questions in the Accordion

### Courses Page (`/app/courses/page.tsx`)

- Update course list
- Modify teaching approach section
- Change benefits listed

### Dharma Page (`/app/dharma/page.tsx`)

- Update deity descriptions
- Modify sacred text information
- Change spiritual concept explanations

### About Page (`/app/about/page.tsx`)

- Update mission and vision statements
- Modify teacher bios
- Change impact statistics
- Update core values

### Gallery Page (`/app/gallery/page.tsx`)

- Add real images (replace emoji placeholders)
- Update category descriptions
- Modify gallery items

### Contact Page (`/app/contact/page.tsx`)

- Update contact form fields as needed
- Modify FAQ items
- Change business hours

## Adding New Features

### Add a New Page

1. Create folder: `/app/newpage/`
2. Create file: `/app/newpage/page.tsx`
3. Add metadata
4. Import Navbar and Footer
5. Add content
6. Update Navbar links in `/components/navbar.tsx`

Example:
```tsx
import { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'New Page | FTS Sanskar',
  description: 'Page description',
}

export default function NewPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      {/* Your content */}
      <Footer />
    </main>
  )
}
```

### Add a New Component

1. Create file: `/components/my-component.tsx`
2. Use existing Shadcn/UI components
3. Import in relevant pages
4. Use consistent styling with Tailwind

Example:
```tsx
import { Card, CardContent } from '@/components/ui/card'

export function MyComponent() {
  return (
    <Card>
      <CardContent className="pt-6">
        {/* Your content */}
      </CardContent>
    </Card>
  )
}
```

### Add Form Validation

1. Define Zod schema
2. Use React Hook Form with resolver
3. Display error messages

Example:
```tsx
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

const schema = z.object({
  email: z.string().email(),
  name: z.string().min(2),
})

type FormData = z.infer<typeof schema>

export function MyForm() {
  const { register, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  })
  // ...
}
```

## SEO Optimization

### Update Page Metadata

Each page has metadata at the top:
```tsx
export const metadata: Metadata = {
  title: 'Page Title | FTS Sanskar',
  description: 'Meta description for search results',
}
```

### Add Meta Tags to Layout

**File**: `/app/layout.tsx`

```tsx
export const metadata: Metadata = {
  title: 'FTS Sanskar Gurukul',
  description: 'Your site description',
  keywords: 'hindu, dharma, education, kids',
  // ... more metadata
}
```

### Update robots.txt

**File**: `/public/robots.txt`

```
User-agent: *
Allow: /
Disallow: /.next/

Sitemap: https://yourdomain.com/sitemap.xml
```

## Styling Changes

### Global Styles

**File**: `/app/globals.css`

- Define design tokens (colors, spacing)
- Add custom CSS utilities
- Import fonts

### Component Styling

Use Tailwind CSS classes:
```tsx
<div className="space-y-4 p-6 bg-card rounded-lg hover:shadow-lg transition-shadow">
  {/* Content */}
</div>
```

### Create Custom Classes

Add to `/app/globals.css`:
```css
@layer components {
  .btn-primary {
    @apply px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors;
  }
}
```

Then use:
```tsx
<button className="btn-primary">Click me</button>
```

## Content Updates

### Update Testimonials

**File**: `/app/page.tsx`

Replace or add testimonial cards:
```tsx
<TestimonialCard
  name="Parent Name"
  role="Parent of X-year-old"
  content="Their quote about the experience"
  rating={5}
/>
```

### Update Course Highlights

**File**: `/app/courses/page.tsx`

In the `courses` array, update highlights for each course:
```tsx
highlights: [
  'Feature 1',
  'Feature 2',
  'Feature 3',
  'Feature 4',
]
```

### Update FAQ Questions

**File**: `/app/page.tsx`

Modify the Accordion items:
```tsx
<AccordionItem value="item-1">
  <AccordionTrigger>Your Question?</AccordionTrigger>
  <AccordionContent>Your Answer</AccordionContent>
</AccordionItem>
```

## Performance Tips

1. **Optimize Images**: Use Next.js Image component
   ```tsx
   import Image from 'next/image'
   <Image src="/logo.jpg" alt="Logo" width={100} height={100} />
   ```

2. **Lazy Load Components**: Use dynamic imports
   ```tsx
   import dynamic from 'next/dynamic'
   const HeavyComponent = dynamic(() => import('@/components/heavy'))
   ```

3. **Cache Static Content**: Use Next.js caching
   ```tsx
   // In route handlers or server components
   revalidateTag('courses', 'max')
   ```

## Deployment Checklist

- [ ] Update contact information
- [ ] Replace logo with final version
- [ ] Update teacher photos/names
- [ ] Add real testimonials
- [ ] Update course pricing
- [ ] Verify all links work
- [ ] Test forms
- [ ] Check mobile responsiveness
- [ ] Update meta tags for SEO
- [ ] Set up email service for forms
- [ ] Configure analytics
- [ ] Set up custom domain
- [ ] Enable HTTPS

## Troubleshooting

### Form Not Submitting

Check in `/components/demo-booking-form.tsx`:
- Verify Zod schema
- Check form field names
- Ensure error messages display
- Test in browser console

### Styling Issues

1. Clear `.next` folder: `rm -rf .next`
2. Rebuild: `pnpm build`
3. Check Tailwind config
4. Verify CSS imports

### Build Errors

1. Check TypeScript: `pnpm tsc`
2. Fix any type errors
3. Rebuild: `pnpm build`

## Getting Help

- Check Next.js docs: https://nextjs.org
- Tailwind CSS: https://tailwindcss.com
- Shadcn/UI: https://ui.shadcn.com
- React Hook Form: https://react-hook-form.com

---

Last Updated: April 27, 2026
