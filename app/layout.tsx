import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://sanchez.ph"),
  title: {
    default: "Alfredo Sanchez Jr. | Head of IT & Data Protection Officer",
    template: "%s | Alfredo Sanchez Jr.",
  },
  description:
    "Head of IT, Data Protection Officer (DPO), and Systems Architect building mission-critical enterprise solutions for land and sea. Bridging enterprise software with shipboard IoT and privacy governance.",
  keywords: [
    "Alfredo Sanchez Jr",
    "Head of IT",
    "IT Director",
    "Data Protection Officer",
    "DPO",
    "Maritime IoT",
    "Avega Bros Integrated Shipping",
    "Enterprise Systems Architecture",
    "Next.js",
    "Flutter",
    "Tauri",
    "sanchez.ph",
  ],
  authors: [{ name: "Alfredo Sanchez Jr.", url: "https://sanchez.ph" }],
  creator: "Alfredo Sanchez Jr.",
  publisher: "Alfredo Sanchez Jr.",
  alternates: {
    canonical: "https://sanchez.ph",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sanchez.ph",
    siteName: "Alfredo Sanchez Jr. | Executive Hub",
    title: "Alfredo Sanchez Jr. | Head of IT & Data Protection Officer",
    description:
      "Head of IT, Data Protection Officer, and Systems Architect building mission-critical enterprise systems for land and sea.",
    images: [
      {
        url: "https://sanchez.ph/og.png",
        width: 1200,
        height: 630,
        alt: "Alfredo Sanchez Jr. - Head of IT & Data Protection Officer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alfredo Sanchez Jr. | Head of IT & Data Protection Officer",
    description:
      "Head of IT, Data Protection Officer, and Systems Architect building mission-critical enterprise systems for land and sea.",
    images: ["https://sanchez.ph/og.png"],
    creator: "@tildemark",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Data (JSON-LD) for Search Engines
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Alfredo Sanchez Jr.",
    url: "https://sanchez.ph",
    image: "https://github.com/tildemark.png",
    jobTitle: "Head of IT & Data Protection Officer",
    worksFor: {
      "@type": "Organization",
      name: "Avega Bros Integrated Shipping Corp.",
    },
    sameAs: [
      "https://github.com/tildemark",
      "https://linkedin.com/in/tildemark",
      "https://facebook.com/tildemark",
      "https://resume.sanchez.ph",
      "https://solutions.sanchez.ph",
      "https://blog.sanchez.ph",
    ],
    knowsAbout: [
      "Information Technology Leadership",
      "Data Protection & Privacy Compliance (DPA 2012)",
      "Enterprise Resource Planning (ERP)",
      "Maritime IoT & Fleet Systems",
      "Software Architecture",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors duration-200 font-sans antialiased selection:bg-sky-500 selection:text-white">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
