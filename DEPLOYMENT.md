# FTS Sanskar Gurukul - Deployment Guide

This guide covers deploying the FTS Sanskar Gurukul website to production.

## Quick Start (Vercel)

The easiest way to deploy is with Vercel (recommended for Next.js apps).

### Step 1: Prepare Your Project

1. Ensure all changes are committed to git
2. Test locally: `pnpm dev`
3. Build locally: `pnpm build`
4. No build errors should appear

### Step 2: Deploy to Vercel

#### Option A: Using Vercel CLI

```bash
# Install Vercel CLI (if not already installed)
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel deploy
```

#### Option B: Connect GitHub

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Select your GitHub repository
5. Vercel will auto-detect Next.js
6. Click "Deploy"

#### Option C: Drag & Drop

1. Build locally: `pnpm build`
2. Go to [vercel.com/new](https://vercel.com/new)
3. Drag and drop the `.next` folder
4. Vercel will deploy it

## Environment Variables

Create a `.env.local` file for local development (git ignored):

```env
# Email Service (if adding form submission)
SENDGRID_API_KEY=your_key_here
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASSWORD=your_password

# Database (future use)
DATABASE_URL=your_database_url

# Analytics
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

For Vercel deployment, set these in Vercel Dashboard:
1. Go to Project Settings
2. Click "Environment Variables"
3. Add your variables
4. Re-deploy

## Domain Setup

### Connect Custom Domain

1. **Purchase Domain** from registrar (GoDaddy, Namecheap, etc.)
2. **Go to Vercel Dashboard**
3. Select your project
4. Go to Settings → Domains
5. Enter your domain
6. Follow Vercel's DNS instructions
7. Update nameservers or add DNS records at your registrar

### SSL Certificate

Vercel automatically provides free SSL certificates. No action needed!

## Forms & Email Integration

### Setup Email for Form Submissions

Option 1: Use Sendgrid (Recommended)

```bash
# Install dependency
pnpm add @sendgrid/mail
```

Create `/api/send-email.ts`:
```typescript
import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY!)

export async function POST(request: Request) {
  try {
    const data = await request.json()
    
    await sgMail.send({
      to: 'contact@ftssanskar.com',
      from: 'noreply@ftssanskar.com',
      subject: `New Demo Booking: ${data.childName}`,
      html: `
        <h2>New Demo Class Booking</h2>
        <p><strong>Parent Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Child Name:</strong> ${data.childName}</p>
        <p><strong>Age Group:</strong> ${data.ageGroup}</p>
        <p><strong>Interests:</strong> ${data.interests}</p>
        <p><strong>Message:</strong> ${data.message}</p>
      `,
    })

    return Response.json({ success: true })
  } catch (error) {
    return Response.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
```

Update form to call the API:
```tsx
const response = await fetch('/api/send-email', {
  method: 'POST',
  body: JSON.stringify(data),
})
```

## Analytics Setup

### Google Analytics

1. Create Google Analytics account: [analytics.google.com](https://analytics.google.com)
2. Get your Measurement ID (G-XXXXXX)
3. Set `NEXT_PUBLIC_GA_ID` environment variable
4. Analytics will automatically track page views

### Vercel Analytics

Already integrated via `@vercel/analytics`. Just deploy!

## Performance Monitoring

### Check Performance

1. Go to Vercel Dashboard
2. Project → Analytics
3. View page load times and core web vitals
4. Optimize if needed

### Common Optimizations

1. **Image Optimization**: Already done with `next/image`
2. **Font Optimization**: Already done with `next/font`
3. **Code Splitting**: Next.js handles automatically
4. **Caching**: Configure in `next.config.mjs`

## Backup & Recovery

### Backup Your Code

```bash
# Create a backup branch
git checkout -b backup-$(date +%Y%m%d)
git push origin backup-$(date +%Y%m%d)

# Keep main updated
git checkout main
git push origin main
```

### Roll Back Deployment

On Vercel Dashboard:
1. Go to Deployments
2. Find the previous version
3. Click the three dots
4. Select "Promote to Production"

## SSL & Security

### Check SSL Status

1. Go to your domain: `https://yourdomain.com`
2. Look for the lock icon in the browser
3. Click it to verify certificate

### Security Headers

Already configured in Vercel:
- HTTPS required
- Security headers enabled
- CORS properly configured

## Database Setup (Future)

When adding a database:

### Option 1: Supabase
```bash
pnpm add @supabase/supabase-js
```

```typescript
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
)
```

### Option 2: MongoDB
```bash
pnpm add mongodb
```

### Option 3: Prisma
```bash
pnpm add @prisma/client
pnpm add -D prisma
npx prisma init
```

## Maintenance

### Regular Tasks

1. **Weekly**: Monitor analytics and errors
2. **Monthly**: Check for dependency updates
3. **Quarterly**: Review and update content

### Update Dependencies

```bash
# Check outdated packages
pnpm outdated

# Update all packages
pnpm update

# Update specific package
pnpm update next

# Update major versions
pnpm up --latest
```

### Monitor for Errors

1. Vercel Dashboard → Functions → Logs
2. Check for runtime errors
3. Review API route logs
4. Monitor email delivery (if using SendGrid)

## Scaling & Performance

### If Traffic Increases

Vercel automatically scales! No action needed.

### Optimize if Needed

1. **Enable ISR** (Incremental Static Regeneration)
   ```tsx
   export const revalidate = 3600 // Revalidate every hour
   ```

2. **Use Static Generation** for static pages
   ```tsx
   // Pages are pre-built at build time
   export default function Page() { ... }
   ```

3. **Add Redis Cache** for database queries
   ```bash
   pnpm add upstash-redis
   ```

## Troubleshooting

### Site Not Loading

1. Check Vercel Dashboard for errors
2. Verify domain DNS settings
3. Clear browser cache (Ctrl+Shift+Del)
4. Try different browser
5. Check network status page

### Build Failures

1. Check build logs in Vercel
2. Run `pnpm build` locally
3. Fix any errors
4. Commit and redeploy

### Form Not Sending Emails

1. Verify Sendgrid API key
2. Check email configuration
3. Review Sendgrid bounce list
4. Check spam folder
5. Verify sender email is authorized

### Slow Performance

1. Check Vercel Analytics
2. Optimize images
3. Reduce JavaScript
4. Enable caching
5. Consider upgrading Vercel plan

## Monitoring & Alerts

### Set Up Alerts

On Vercel Dashboard:
1. Project Settings → Alerts
2. Configure uptime monitoring
3. Set notification email

### Check Uptime

Visit: [vercel-status.com](https://www.vercel-status.com)

## Disaster Recovery

### What to Do If...

**Site is down:**
1. Check Vercel status page
2. Check GitHub repository status
3. Rollback to previous deployment
4. Contact Vercel support

**Database corrupted:**
1. Restore from backup
2. Notify users of data recovery
3. Add monitoring to prevent future issues

**Hacked/Malware:**
1. Roll back to clean version
2. Check git history for changes
3. Rotate API keys
4. Enable 2FA on GitHub and Vercel
5. Contact Vercel security

## Post-Launch Checklist

- [ ] Domain configured
- [ ] SSL certificate active
- [ ] Analytics tracking
- [ ] Email sending working
- [ ] Forms functional
- [ ] Mobile responsive checked
- [ ] All links working
- [ ] SEO meta tags present
- [ ] Robots.txt configured
- [ ] Sitemap.xml created
- [ ] 404 page custom (optional)
- [ ] Legal pages added (privacy, terms)
- [ ] Backup system in place
- [ ] Monitoring alerts set
- [ ] Team has access

## Support

**Vercel Support**: [vercel.com/support](https://vercel.com/support)

**Next.js Documentation**: [nextjs.org](https://nextjs.org)

**Status Page**: [vercel-status.com](https://www.vercel-status.com)

---

Last Updated: April 27, 2026
