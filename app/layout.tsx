import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";
import { Navigation, Footer } from "@/components/ui";

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
  keywords: ["media audit", "media agency pitch", "contract negotiation", "performance review", "media investment", "advertising audit"],
  openGraph: {
    title: "Fuel Media & Marketing - Expert Media Audit Specialists",
    description: "Transform your media investment with expert auditing services. £710M+ saved for advertisers through strategic audits, negotiations, and performance optimization.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${bebas.variable} antialiased`}
      >
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
