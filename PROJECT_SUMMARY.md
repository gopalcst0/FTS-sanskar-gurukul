# FTS Sanskar Gurukul Class - Project Summary

## Overview
A comprehensive, multi-page website for **FTS Sanskar Gurukul Class**, a spiritual educational platform teaching Hindu Dharma values and संस्कार (character-building principles) to children aged 3-18 years.

---

## Project Structure

### Pages Built (7 Main Pages)

1. **Home Page** (`/app/page.tsx`)
   - Hero section with CTAs
   - Features section highlighting unique aspects
   - Popular courses showcase (3 featured courses)
   - Testimonials section with 3 parent reviews
   - FAQ accordion (5 common questions)
   - Call-to-action section

2. **Courses Page** (`/app/courses/page.tsx`)
   - Complete course catalog (9 courses)
   - Course cards with details (age group, duration, price, highlights)
   - Teaching approach explanation
   - Flexible learning options

3. **Book Demo Class Page** (`/app/book/page.tsx`)
   - Demo booking form with validation (React Hook Form + Zod)
   - Parent and child information sections
   - Success message confirmation
   - Sidebar with expectations and FAQs

4. **About Us Page** (`/app/about/page.tsx`)
   - Mission and vision statements
   - What makes the program different
   - Teacher profiles (6 expert educators)
   - Impact statistics
   - Core values section

5. **Dharma Knowledge Page** (`/app/dharma/page.tsx`)
   - Explanation of Dharma concept
   - Four pillars of life (Dharma, Artha, Kama, Moksha)
   - Major deities (6 cards: Brahma, Vishnu, Shiva, Saraswati, Lakshmi, Durga)
   - Sacred texts overview (Vedas, Upanishads, Bhagavad Gita, Epics, Puranas)
   - Important spiritual concepts

6. **Gallery Page** (`/app/gallery/page.tsx`)
   - Photo gallery grid with categories
   - Instagram integration placeholder
   - Community engagement section
   - Gallery categories explained

7. **Contact Page** (`/app/contact/page.tsx`)
   - Contact information (email, phone, location, hours)
   - Contact form with validation
   - Quick FAQ section
   - Multiple contact methods

---

## Components Built (Reusable)

1. **Navbar** (`/components/navbar.tsx`)
   - Sticky navigation with logo
   - Responsive mobile menu
   - Links to all main pages
   - Book Demo CTA button

2. **Footer** (`/components/footer.tsx`)
   - About section
   - Quick links
   - Contact information
   - Social media links

3. **CourseCard** (`/components/course-card.tsx`)
   - Displays course information
   - Highlights and pricing
   - Enroll button

4. **DeityCard** (`/components/deity-card.tsx`)
   - Deity information display
   - Sanskrit names
   - Significance description

5. **TestimonialCard** (`/components/testimonial-card.tsx`)
   - Star ratings
   - Parent testimonials
   - Name and role display

6. **DemoBookingForm** (`/components/demo-booking-form.tsx`)
   - Form validation with Zod schema
   - Parent and child information sections
   - Age group selection
   - Success/error message handling

---

## Design System

### Color Palette
- **Primary**: `#1a3a52` (Navy - traditional, trustworthy)
- **Secondary**: `#d4a574` (Gold/Tan - spiritual, warm)
- **Accent**: `#ff6b35` (Saffron Orange - cultural significance)
- **Background**: `#faf8f3` (Light cream - calming)
- **Dark BG**: `#0f1419` (Deep navy for dark mode)

### Typography
- **Heading Font**: Geist (default Next.js font)
- **Body Font**: Geist Sans (default Next.js font)
- **Mono Font**: Geist Mono (for code)

### Key Design Features
- Mobile-first responsive design
- Semantic HTML structure
- ARIA labels and accessibility features
- Tailwind CSS utility classes
- Design tokens for consistency
- Smooth transitions and hover effects

---

## Technologies & Libraries

### Core
- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS**
- **Shadcn/UI Components**

### Form Handling
- `react-hook-form` - Form state management
- `zod` - Schema validation
- `@hookform/resolvers` - Integration layer

### Icons
- `lucide-react` - Icon library

### Other
- `next/image` - Image optimization
- `next/font` - Font optimization
- `@vercel/analytics` - Analytics integration

---

## Key Features

### 1. Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Hamburger menu for mobile navigation

### 2. Form Validation
- React Hook Form for efficient form handling
- Zod schemas for data validation
- Error messages display
- Success confirmation with CheckCircle icon

### 3. SEO Optimization
- Metadata on each page
- Semantic HTML
- Image alt text
- robots.txt file
- Structured page hierarchy

### 4. Accessibility
- Semantic HTML elements
- ARIA labels on buttons
- Color contrast compliance
- Keyboard navigation support

### 5. Performance
- Image optimization with Next.js Image component
- Server-side rendering for pages
- CSS-in-JS with Tailwind
- Optimized font loading

---

## Content & Data

### Courses (9 Total)
1. Introduction to Vedas - ₹2,999 (8 weeks, 6-12 years)
2. Hindu Mythology & Stories - ₹2,499 (10 weeks, 5-10 years)
3. Yoga & Meditation for Kids - ₹3,499 (12 weeks, 4-14 years)
4. Sanskrit Language Basics - ₹3,999 (12 weeks, 8-16 years)
5. Bhagavad Gita Wisdom - ₹3,499 (10 weeks, 10-18 years)
6. Hindu Festivals & Celebrations - ₹1,999 (6 weeks, 4-12 years)
7. Upanishads for Youth - ₹3,999 (10 weeks, 12-18 years)
8. Hindu Art & Architecture - ₹2,999 (8 weeks, 8-14 years)
9. Character Building Through Dharma - ₹2,799 (12 weeks, 6-14 years)

### Teachers (6 Featured)
- Swami Ananda - Vedic Studies
- Dr. Priya Sharma - Hindu Mythology
- Yoga Instructor Ravi - Yoga & Wellness
- Sri Rajesh Kumar - Sanskrit
- Prof. Anjali Gupta - Traditional Arts
- Kavya Patel - Children's Spirituality

### Deities Featured
- Brahma (Creator)
- Vishnu (Preserver)
- Shiva (Transformer)
- Saraswati (Wisdom)
- Lakshmi (Prosperity)
- Durga (Divine Feminine)

---

## File Structure

```
/vercel/share/v0-project/
├── app/
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Home page
│   ├── globals.css             # Global styles & design tokens
│   ├── about/
│   │   └── page.tsx            # About page
│   ├── courses/
│   │   └── page.tsx            # Courses listing
│   ├── dharma/
│   │   └── page.tsx            # Dharma knowledge
│   ├── gallery/
│   │   └── page.tsx            # Gallery
│   ├── book/
│   │   └── page.tsx            # Book demo
│   └── contact/
│       └── page.tsx            # Contact page
├── components/
│   ├── navbar.tsx              # Navigation
│   ├── footer.tsx              # Footer
│   ├── course-card.tsx         # Course display
│   ├── deity-card.tsx          # Deity display
│   ├── testimonial-card.tsx    # Testimonial
│   ├── demo-booking-form.tsx   # Demo form
│   └── ui/                     # Shadcn UI components
├── public/
│   ├── logo.jpg                # FTS Sanskar logo
│   └── robots.txt              # SEO robots file
├── lib/
│   └── utils.ts                # Utility functions
├── package.json                # Dependencies
├── tsconfig.json               # TypeScript config
├── tailwind.config.ts          # Tailwind config
└── next.config.mjs             # Next.js config
```

---

## Form Validation Schema (Zod)

The demo booking form validates:
- `name`: string, min 2 chars
- `email`: valid email format
- `phone`: string, min 10 chars
- `childName`: string, min 2 chars
- `ageGroup`: required selection
- `interests`: optional string
- `message`: optional string

---

## Next Steps / Enhancements

1. **Backend Integration**
   - Connect form submission to email service (SendGrid, Nodemailer)
   - Save form submissions to database

2. **Real Gallery Images**
   - Replace emoji placeholders with actual photos
   - Add image galleries per category

3. **Instagram Integration**
   - Embed Instagram feed on gallery page
   - Display latest posts dynamically

4. **Payment Integration**
   - Add Stripe integration for course enrollment
   - Payment processing and receipts

5. **Student Dashboard**
   - Student login area
   - Course progress tracking
   - Access to recorded classes

6. **Teacher Portal**
   - Class management
   - Assignment upload
   - Progress tracking

7. **Blog/Resources**
   - Blog posts on Hindu topics
   - Resource library
   - Free articles and guides

8. **Analytics**
   - Expand Vercel Analytics
   - Track user behavior
   - Monitor conversion rates

9. **Email Templates**
   - Automated confirmation emails
   - Class reminders
   - Newsletter

10. **Admin Dashboard**
    - Course management
    - Student enrollment tracking
    - Reporting and analytics

---

## Deployment

The project is ready to deploy on Vercel:
```bash
vercel deploy
```

Or connect GitHub repository for automatic deployments.

---

## Contact Information (Placeholder)
- **Email**: contact@ftssanskar.com
- **Phone**: +1 (234) 567-890
- **Location**: Online Classes (Worldwide)
- **Hours**: Mon-Fri 9am-6pm, Sat 10am-4pm

---

## Version
- **Version**: 1.0.0
- **Last Updated**: April 27, 2026
- **Status**: Complete & Ready for Deployment
