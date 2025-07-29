import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import { performanceMonitor } from "@/lib/performance";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "ICS - Integrated Construction Solutions | Construction Management Platform",
  description:
    "Transform your precast concrete projects from Excel chaos to cloud control. The complete construction management platform built specifically for precast concrete companies.",
  keywords: [
    "construction management",
    "precast concrete",
    "project management",
    "cloud platform",
    "construction software",
    "building management",
    "construction technology",
    "project tracking",
    "construction automation",
    "building industry software",
  ],
  authors: [{ name: "ICS Team" }],
  creator: "ICS - Integrated Construction Solutions",
  publisher: "ICS - Integrated Construction Solutions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://ics-construction.com"),
  openGraph: {
    title: "ICS - Integrated Construction Solutions",
    description:
      "Stop managing Excel sheets. Start managing projects. Transform your construction management with our cloud-based platform.",
    url: "https://ics-construction.com",
    siteName: "ICS - Integrated Construction Solutions",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "ICS - Integrated Construction Solutions Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ICS - Integrated Construction Solutions",
    description:
      "Stop managing Excel sheets. Start managing projects. Transform your construction management with our cloud-based platform.",
    images: ["/logo.png"],
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
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Initialize performance monitoring
  if (typeof window !== "undefined") {
    performanceMonitor.measurePageLoad();
    performanceMonitor.measureCoreWebVitals();
  }

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Poppins:wght@100;200;300;400;500;600;700;800;900&family=Manrope:wght@200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <meta name="theme-color" content="#235347" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ fontSize: "var(--scale-factor)" }}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
