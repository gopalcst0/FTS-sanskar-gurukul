# FTS Sanskar Gurukul Class - Website

A modern, responsive website for FTS Sanskar Gurukul Class, dedicated to teaching Hindu Dharma values and संस्कार (character-building principles) to children aged 3-18 years.

## Features

✨ **7 Main Pages**
- Home with hero section and course showcase
- Comprehensive course catalog
- Free demo class booking system
- About us with teacher profiles
- Dharma knowledge & spiritual teachings
- Gallery of class activities
- Contact & support page

🎨 **Design**
- Spiritual color palette (Navy, Gold, Saffron)
- Fully responsive mobile-first design
- Accessible HTML & ARIA labels
- Smooth animations and transitions

📋 **Forms**
- Demo booking form with validation
- Contact form
- Email integration ready

## Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (or npm/yarn)

### Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
pnpm build
pnpm start
```

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: Shadcn/UI
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React
- **Deployment**: Vercel

## Project Structure

```
app/
├── page.tsx              # Home page
├── about/                # About page
├── courses/              # Course listing
├── dharma/               # Dharma knowledge
├── gallery/              # Gallery
├── book/                 # Demo booking
├── contact/              # Contact page
└── layout.tsx            # Root layout

components/
├── navbar.tsx            # Navigation bar
├── footer.tsx            # Footer
├── course-card.tsx       # Course card component
├── deity-card.tsx        # Deity card component
├── testimonial-card.tsx  # Testimonial card
└── demo-booking-form.tsx # Booking form

public/
├── logo.jpg              # FTS Sanskar logo
└── robots.txt            # SEO robots file
```

## Key Pages

### Home (`/`)
Landing page with hero section, featured courses, testimonials, and FAQs.

### Courses (`/courses`)
Complete catalog of 9 courses with descriptions, pricing, and age groups.

### Book Demo (`/book`)
Free demo class booking form with validation and confirmation.

### About Us (`/about`)
Mission/vision, teacher profiles, impact statistics, and core values.

### Dharma Knowledge (`/dharma`)
Educational content about Hindu philosophy, deities, and sacred texts.

### Gallery (`/gallery`)
Photo gallery of class activities and celebrations.

### Contact (`/contact`)
Contact information, contact form, and FAQ section.

## Courses Offered

1. **Introduction to Vedas** - ₹2,999 (6-12 years)
2. **Hindu Mythology & Stories** - ₹2,499 (5-10 years)
3. **Yoga & Meditation for Kids** - ₹3,499 (4-14 years)
4. **Sanskrit Language Basics** - ₹3,999 (8-16 years)
5. **Bhagavad Gita Wisdom** - ₹3,499 (10-18 years)
6. **Hindu Festivals & Celebrations** - ₹1,999 (4-12 years)
7. **Upanishads for Youth** - ₹3,999 (12-18 years)
8. **Hindu Art & Architecture** - ₹2,999 (8-14 years)
9. **Character Building Through Dharma** - ₹2,799 (6-14 years)

## Design System

### Color Palette
- **Primary** (Navy): `#1a3a52`
- **Secondary** (Gold): `#d4a574`
- **Accent** (Saffron): `#ff6b35`
- **Background**: `#faf8f3`

### Typography
- **Headings & Body**: Geist (Google Fonts)
- **Monospace**: Geist Mono

## Form Validation

The demo booking form uses Zod schemas to validate:
- Parent name and contact details
- Child's name and age group
- Optional interests and messages
- Real-time error feedback

## Accessibility

- Semantic HTML elements
- ARIA labels on interactive elements
- Color contrast compliance
- Keyboard navigation support
- Screen reader friendly

## Performance

- Server-side rendering with Next.js
- Image optimization
- Font optimization
- CSS-in-JS with Tailwind
- Fast load times with Turbopack

## Deployment

### Deploy to Vercel

```bash
vercel deploy
```

### Environment Variables

Create a `.env.local` file if needed:
```
# Add any required API keys here
```

## Future Enhancements

- [ ] Email integration for form submissions
- [ ] Student dashboard with course progress
- [ ] Online payment processing (Stripe)
- [ ] Instructor portal
- [ ] Blog/Resources section
- [ ] Instagram feed integration
- [ ] Admin dashboard

## Contact

**FTS Sanskar Gurukul Class**
- Email: contact@ftssanskar.com
- Phone: +1 (234) 567-890
- Website: [Coming Soon]

## License

© 2024 FTS Sanskar Gurukul Class. All rights reserved.

---

For detailed information about the project, see [PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md)
