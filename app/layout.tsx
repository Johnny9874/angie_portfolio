import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { SiteShell } from "@/app/components/site-shell";

// Shared fonts for the entire site: body text uses Manrope and headings use Cormorant Garamond.
const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// Global SEO metadata for the brand and all nested pages.
export const metadata: Metadata = {
  title: {
    default: "Angie Atelier | Designer d'intérieur",
    template: "%s | Angie Atelier",
  },
  description:
    "Studio d'intérieur éditorial et intemporel pour des espaces résidentiels élégants, fonctionnels et durables.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Angie Atelier | Designer d'intérieur",
    description:
      "Studio d'intérieur éditorial et intemporel pour des espaces résidentiels élégants, fonctionnels et durables.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${manrope.variable} ${cormorant.variable} h-full data-scroll-behavior="smooth" antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        {/* Shared shell handles navigation, footer, and the editorial background. */}
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
