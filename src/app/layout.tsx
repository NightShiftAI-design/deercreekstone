import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#2c3e50",
};
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site.config";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} (formerly ${site.formerName}) | Tennessee Flagstone, Slabs, Treads & Wall Stone — ${site.address.city}, TN`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Tennessee flagstone",
    `${site.address.city} TN stone quarry`,
    "stone quarry near Dayton TN",
    "natural stone supplier Tennessee",
    "flagstone Chattanooga",
    "stone treads Tennessee",
    "stone slabs Tennessee",
    "patio stone Dayton TN",
    "Galvez Stone",
    "Galvez Stone Dayton TN",
    "Galvez Stone Graysville TN",
    `formerly ${site.formerName}`,
    "wall stone Tennessee",
    "pool coping Tennessee",
    "nationwide stone shipping",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: `${site.name} | Tennessee Flagstone, Slabs & Treads`,
    description: site.description,
    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: `${site.name} — quarried Tennessee stone`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Tennessee Flagstone, Slabs & Treads`,
    description: site.description,
    images: ["/images/og-default.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  alternates: {
    canonical: site.url,
  },
};

// LocalBusiness schema — geo coordinates (lat/long) still TODO if precise map pin matters.
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${site.url}/#business`,
  name: site.legalName,
  alternateName: [site.name, site.formerName, `${site.formerName} (formerly)`],
  description: site.description,
  url: site.url,
  telephone: site.phone,
  email: site.email,
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: site.phone,
      contactType: "customer service",
    },
    {
      "@type": "ContactPoint",
      telephone: site.phone2,
      contactType: "customer service",
      description: "Alternate line",
    },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    postalCode: site.address.zip,
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "Country", name: "United States" },
    ...site.serviceAreas.map((a) => ({ "@type": "City", name: a })),
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
  ],
  sameAs: [site.social.instagram, site.social.facebook],
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-cream text-ink">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
