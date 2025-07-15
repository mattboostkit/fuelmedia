import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";
import { Navigation, Footer, GoogleAnalytics } from "@/components/ui";
import { DarkModeToggle } from "@/components/ui/DarkModeToggle";
import { StructuredData, organizationSchema, serviceSchema, localBusinessSchema } from "@/components/StructuredData";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fuel Media & Marketing - Expert Media Audit Specialists",
  description: "Transform your media investment with expert auditing services. £710M+ saved for advertisers through strategic audits, negotiations, and performance optimization.",
  keywords: ["media audit", "media agency pitch", "contract negotiation", "performance review", "media investment", "advertising audit", "digital marketing", "media buying", "advertising optimization"],
  authors: [{ name: "Fuel Media & Marketing" }],
  creator: "Fuel Media & Marketing",
  publisher: "Fuel Media & Marketing",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://fuelmedia.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Fuel Media & Marketing - Expert Media Audit Specialists",
    description: "Transform your media investment with expert auditing services. £710M+ saved for advertisers through strategic audits, negotiations, and performance optimization.",
    url: 'https://fuelmedia.com',
    siteName: 'Fuel Media & Marketing',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Fuel Media & Marketing - Expert Media Audit Specialists',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fuel Media & Marketing - Expert Media Audit Specialists',
    description: 'Transform your media investment with expert auditing services. £710M+ saved for advertisers through strategic audits, negotiations, and performance optimization.',
    images: ['/og-image.jpg'],
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
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <meta name="theme-color" content="#000000" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://ik.imagekit.io" />
        <link rel="preconnect" href="https://cdn.sanity.io" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://ik.imagekit.io" />
        
        {/* Google Analytics */}
        <GoogleAnalytics />
        
        {/* Structured Data */}
        <StructuredData data={organizationSchema} />
        <StructuredData data={serviceSchema} />
        <StructuredData data={localBusinessSchema} />
      </head>
      <body
        className={`${inter.variable} ${bebas.variable} antialiased`}
      >
        <Navigation />
        <main>{children}</main>
        <Footer />
        <DarkModeToggle />
      </body>
    </html>
  );
}
