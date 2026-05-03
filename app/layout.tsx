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
  title: "Khan Fish Supplier | Premium Seafood Export & Distribution in Karachi, Pakistan",
  description: "Leading seafood supplier in Pakistan. Export premium quality Ribbon Fish, Stingray, Sharks, Eels, Indian Mackerel, Pomfret & more to Thailand, Malaysia, Middle East. Local distribution to restaurants & hotels in Karachi.",
  keywords: [
    "Khan Fish Supplier",
    "seafood export Pakistan",
    "fish supplier Karachi",
    "wholesale seafood Pakistan",
    "Ribbon Fish export",
    "Stingray export Thailand",
    "Indian Mackerel supplier",
    "Pomfret fish Pakistan",
    "seafood distributor Karachi",
    "fresh fish supplier",
    "frozen seafood export",
    "Pangasius fillets Vietnam",
    "West Wharf Karachi",
    "seafood cold chain",
    "halal seafood export",
    "restaurant fish supplier",
    "hotel seafood distributor"
  ].join(", "),
  authors: [{ name: "Khan Fish Supplier" }],
  creator: "Khan Fish Supplier",
  publisher: "Khan Fish Supplier",
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
    title: "Khan Fish Supplier | Premium Seafood Export & Distribution",
    description: "Leading seafood supplier in Pakistan. Export premium quality seafood to international markets. Local distribution in Karachi.",
    url: 'https://khanfishsupplier.com',
    siteName: 'Khan Fish Supplier',
    images: [
      {
        url: '/images/logo2.png',
        width: 1200,
        height: 630,
        alt: 'Khan Fish Supplier Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Khan Fish Supplier | Premium Seafood Export & Distribution',
    description: 'Leading seafood supplier in Pakistan. Export premium quality seafood to international markets.',
    images: ['/images/logo2.png'],
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
