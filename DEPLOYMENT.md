# 🚀 Deployment Guide

## Deploy to Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications.

### Option 1: Deploy via Vercel Dashboard

1. Push your code to GitHub, GitLab, or Bitbucket
2. Visit [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

That's it! Vercel will automatically:
- Detect Next.js configuration
- Install dependencies
- Build the project
- Deploy to a production URL

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

---

## Deploy to Netlify

### Via Netlify Dashboard

1. Push your code to a Git repository
2. Visit [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect your repository
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
6. Click "Deploy site"

### Via Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

---

## Deploy to Your Own Server

### Build the Application

```bash
npm run build
```

### Start the Production Server

```bash
npm start
```

The application will run on port 3000 by default.

### Using PM2 (Process Manager)

```bash
# Install PM2
npm install -g pm2

# Start the application
pm2 start npm --name "seafood-market" -- start

# Save PM2 configuration
pm2 save

# Setup PM2 to start on system boot
pm2 startup
```

### Using Docker

Create a `Dockerfile`:

```dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

Build and run:

```bash
docker build -t seafood-market .
docker run -p 3000:3000 seafood-market
```

---

## Environment Variables

If you need environment variables (API keys, etc.), create a `.env.local` file:

```env
NEXT_PUBLIC_API_URL=https://api.example.com
CONTACT_FORM_API_KEY=your_api_key_here
```

**Important**: Never commit `.env.local` to version control!

For deployment platforms:
- **Vercel**: Add environment variables in Project Settings → Environment Variables
- **Netlify**: Add in Site Settings → Environment Variables
- **Custom Server**: Use `.env.production` or system environment variables

---

## Custom Domain Setup

### Vercel
1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

### Netlify
1. Go to Site Settings → Domain Management
2. Add custom domain
3. Configure DNS settings

---

## Performance Optimization Checklist

Before deploying to production:

- ✅ Images are optimized (using Next.js Image component)
- ✅ Fonts are loaded via Next.js Font Optimization
- ✅ Build completes without errors (`npm run build`)
- ✅ No console errors in production mode
- ✅ Environment variables are configured
- ✅ Analytics are set up (optional)
- ✅ SEO metadata is complete

---

## Post-Deployment

### Test Your Deployment

1. Visit your deployed URL
2. Test all navigation links
3. Submit the contact form
4. Test on mobile devices
5. Check page load speed with [PageSpeed Insights](https://pagespeed.web.dev/)

### Monitor Performance

- Set up [Vercel Analytics](https://vercel.com/analytics) (if using Vercel)
- Use [Google Analytics](https://analytics.google.com)
- Monitor with [Sentry](https://sentry.io) for error tracking

---

## Troubleshooting

### Build Fails

```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Images Not Loading

- Check `next.config.ts` has correct image domains
- Verify image URLs are accessible
- Check browser console for errors

### Form Not Working

- Implement backend API endpoint
- Configure CORS if using external API
- Check environment variables are set

---

## Need Help?

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Support](https://vercel.com/support)
- [Netlify Documentation](https://docs.netlify.com)

---

**🎉 Congratulations on deploying your Seafood Market landing page!**
