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
  title: "Khan Fish Supplier - Distributors & Global Export",
  description: "Your trusted partner in seafood distribution. From ocean to table in 24 hours. Local distribution and international import/export services.",
  keywords: "seafood, fresh fish, seafood distribution, seafood export, wholesale seafood, premium seafood",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${montserrat.variable} ${openSans.variable} ${playfair.variable} font-open-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
