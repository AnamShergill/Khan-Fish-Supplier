# Seafood Market Landing Page

A high-converting, responsive landing page for a premium Seafood Market specializing in local distribution and import/export services.

## 🎨 Design Features

- **Color Palette**: Deep Navy (#003366), Sea Blue (#00A8E8), Ice White
- **Typography**: Montserrat (Headlines), Open Sans (Body), Playfair Display (Elegant Headings)
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Animations**: Smooth transitions using Framer Motion
- **Accessibility**: WCAG compliant components

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript

## 📦 Installation

```bash
# Navigate to the project directory
cd seafood-market

# Install dependencies (already done)
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 🏗️ Project Structure

```
seafood-market/
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Sticky navigation with mobile menu
│   ├── HeroCarousel.tsx    # Full-viewport hero carousel
│   ├── DistributorGrid.tsx # 3-column feature section
│   ├── ProductShowcase.tsx # Responsive product grid
│   ├── ContactForm.tsx     # Multi-field contact form
│   └── Footer.tsx          # 4-column footer layout
├── tailwind.config.ts      # Tailwind configuration
└── next.config.ts          # Next.js configuration
```

## 🎯 Key Sections

### 1. Header & Navigation
- Sticky header with transparent-to-solid transition on scroll
- Responsive hamburger menu for mobile
- "Request a Quote" CTA button

### 2. Hero Carousel
- Full-viewport (100vh) carousel with 3 slides
- Framer Motion animations for text overlays
- Auto-play with manual navigation
- Gradient overlay for text contrast (4.5:1 ratio)

### 3. Distributor Grid
- 3-column feature section highlighting:
  - Fresh Catch
  - Global Export
  - Quality Logistics
- Lucide React icons with hover effects

### 4. Product Showcase
- Responsive grid (1/2/3 columns)
- Hover-state overlays with product details
- Aspect-ratio maintained images
- "Request Full Catalog" CTA

### 5. Contact Form
- Client-side validation
- Multi-field form (Name, Email, Inquiry Type, Message)
- Loading state animation
- Success message display

### 6. Footer
- 4-column layout:
  - Company Info with social links
  - Quick Links navigation
  - Services list
  - Contact Details
- Copyright and legal links

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to customize the color palette:

```typescript
colors: {
  'deep-navy': '#003366',
  'sea-blue': '#00A8E8',
  'ice-white': '#FFFFFF',
}
```

### Fonts
Fonts are loaded in `app/layout.tsx` using Next.js Font Optimization:
- Montserrat
- Open Sans
- Playfair Display

### Images
Replace the Unsplash URLs in components with your own images. Images are configured in `next.config.ts`.

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## ♿ Accessibility

- Semantic HTML elements
- ARIA labels for interactive elements
- Keyboard navigation support
- High contrast ratios (4.5:1 minimum)
- Focus states for all interactive elements

## 🔧 Build for Production

```bash
# Create an optimized production build
npm run build

# Start the production server
npm start
```

## 📝 Form Integration

The contact form currently logs to console. To integrate with a backend:

1. Replace the simulated API call in `ContactForm.tsx`
2. Add your API endpoint
3. Handle server-side validation
4. Configure email service (SendGrid, Mailgun, etc.)

Example:

```typescript
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
});
```

## 🌐 SEO Optimization

- Metadata configured in `app/layout.tsx`
- Semantic HTML structure
- Optimized images with Next.js Image component
- Fast page load times

## 📄 License

This project is created for demonstration purposes.

## 🤝 Support

For questions or support, please contact the development team.

---

Built with ❤️ using Next.js and Tailwind CSS
