import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "ICS - Integrated Construction Solutions",
  description:
    "Transform your precast concrete projects from Excel chaos to cloud control. Complete construction management platform for precast concrete companies.",
  keywords:
    "construction management, precast concrete, project management, cloud solution, ICS",
  authors: [{ name: "ICS Team" }],
  creator: "ICS Integrated Construction Solutions",
  publisher: "ICS Integrated Construction Solutions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://ics-construction.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ICS - Integrated Construction Solutions",
    description:
      "Transform your precast concrete projects from Excel chaos to cloud control.",
    url: "https://ics-construction.com",
    siteName: "ICS Integrated Construction Solutions",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "ICS Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ICS - Integrated Construction Solutions",
    description:
      "Transform your precast concrete projects from Excel chaos to cloud control.",
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
  icons: {
    icon: "/favicon.ico",
    apple: "/logo.png",
  },
  themeColor: "#235347",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body
        className={`${GeistSans.className} antialiased bg-white text-forest-900`}
      >
        {children}
      </body>
    </html>
  );
}
