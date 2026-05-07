import type { Metadata } from "next";
import { Montserrat, Open_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Best Fish Supplier in Karachi | Wholesale Seafood Distributor Pakistan | Khan Fish Supplier",
  description: "Leading fish supplier in Karachi, Pakistan. Wholesale & retail seafood distributor serving restaurants, hotels & markets. Fresh & frozen fish, shrimp, lobster. Call +92-310-2061037 for quotes.",
  keywords: [
    // Primary Local Keywords
    "fish supplier karachi",
    "seafood supplier karachi",
    "best fish supplier karachi",
    "wholesale fish supplier karachi",
    "frozen fish supplier pakistan",
    "fish distributor karachi",
    "seafood distributor pakistan",
    "seafood wholesaler karachi",
    // Service Keywords
    "restaurant fish supplier karachi",
    "hotel seafood supplier pakistan",
    "retail fish supplier karachi",
    "imported seafood supplier pakistan",
    // Product Keywords
    "shrimp supplier karachi",
    "lobster supplier karachi",
    "prawns supplier pakistan",
    "pomfret fish supplier karachi",
    "red snapper supplier karachi",
    "pangasius fillet supplier pakistan",
    "frozen seafood company karachi",
    // Location Keywords
    "west wharf fish supplier",
    "dock yard road seafood",
    "karachi fish market supplier",
    // Export Keywords
    "seafood exporters pakistan",
    "fish export company karachi",
    // Brand
    "Khan Fish Supplier",
    "khan fish supplier karachi"
  ].join(", "),
  authors: [{ name: "Khan Fish Supplier" }],
  creator: "Khan Fish Supplier",
  publisher: "Khan Fish Supplier",
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/images/fish.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/fish.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/images/fish.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/icon.svg',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://khanfishsupplier.com'), // Replace with your actual domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Best Fish Supplier in Karachi | Wholesale Seafood Distributor | Khan Fish Supplier",
    description: "Leading fish supplier in Karachi. Wholesale & retail seafood distributor serving restaurants, hotels & markets across Pakistan. Fresh & frozen fish delivery.",
    url: 'https://khanfishsupplier.com',
    siteName: 'Khan Fish Supplier',
    images: [
      {
        url: '/images/fish.png',
        width: 1200,
        height: 630,
        alt: 'Khan Fish Supplier - Best Fish Supplier in Karachi Pakistan',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Fish Supplier in Karachi | Khan Fish Supplier',
    description: 'Leading fish supplier in Karachi. Wholesale & retail seafood distributor. Fresh & frozen fish delivery across Pakistan.',
    images: ['/images/fish.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here after claiming your site
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  other: {
    'geo.region': 'PK-SD',
    'geo.placename': 'Karachi',
    'geo.position': '24.844489;66.981810',
    'ICBM': '24.844489, 66.981810',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${montserrat.variable} ${openSans.variable} ${playfair.variable} font-open-sans antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
