import React from "react";
import Head from "next/head";

interface MetaTagsProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  author?: string;
  noIndex?: boolean;
  noFollow?: boolean;
  canonical?: string;
}

const MetaTags: React.FC<MetaTagsProps> = ({
  title = "ICS - Integrated Construction Solutions | Transform Your Precast Projects",
  description = "Transform your precast concrete projects from Excel chaos to cloud control. ICS is the complete construction management platform built specifically for precast concrete companies.",
  keywords = "construction management, precast concrete, project management, construction software, ICS, integrated construction solutions",
  image = "/logo.png",
  url = "/",
  type = "website",
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  author = "ICS Team",
  noIndex = false,
  noFollow = false,
  canonical,
}) => {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ics-construction.com";
  const fullUrl = `${siteUrl}${url}`;
  const fullImageUrl = image.startsWith("http") ? image : `${siteUrl}${image}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ICS - Integrated Construction Solutions",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    description: "Complete construction management platform for precast concrete companies",
    sameAs: [
      "https://twitter.com/ics_construction",
      "https://linkedin.com/company/ics-construction",
      "https://facebook.com/icsconstruction",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-555-ICS-HELP",
      contactType: "customer service",
      email: "hello@ics-construction.com",
    },
  };

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />

      {/* Canonical URL */}
      <link rel="canonical" href={canonical || fullUrl} />

      {/* Robots */}
      {noIndex && <meta name="robots" content="noindex" />}
      {noFollow && <meta name="robots" content="nofollow" />}
      {!noIndex && !noFollow && <meta name="robots" content="index, follow" />}

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="ICS - Integrated Construction Solutions" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:site" content="@ics_construction" />
      <meta name="twitter:creator" content="@ics_construction" />

      {/* Article Specific Meta Tags */}
      {type === "article" && (
        <>
          {publishedTime && (
            <meta property="article:published_time" content={publishedTime} />
          )}
          {modifiedTime && (
            <meta property="article:modified_time" content={modifiedTime} />
          )}
          {section && <meta property="article:section" content={section} />}
          {tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
          {author && <meta property="article:author" content={author} />}
        </>
      )}

      {/* Viewport */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/logo.png" />

      {/* Theme Color */}
      <meta name="theme-color" content="#235347" />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Additional Meta Tags for Construction Industry */}
      <meta name="industry" content="Construction" />
      <meta name="category" content="Construction Management Software" />
      <meta name="target-audience" content="Precast Concrete Companies" />
      
      {/* Security Headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      
      {/* Performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    </Head>
  );
};

export default MetaTags;
