import { useState, useEffect, lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LoadingSkeleton from "@/components/LoadingSkeleton";
import { useMarketplaceStats } from "@/hooks/useMarketplaceStats";
import { SEO_CONFIG } from "@/config/seo";

// Lazy load below-the-fold components
const ProblemSolution = lazy(() => import("@/components/ProblemSolution"));
const Features = lazy(() => import("@/components/Features"));
const HowItWorks = lazy(() => import("@/components/HowItWorks"));
const Commands = lazy(() => import("@/components/Commands"));
const Configuration = lazy(() => import("@/components/Configuration"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const Installation = lazy(() => import("@/components/Installation"));
const FAQ = lazy(() => import("@/components/FAQ"));
const OpenSource = lazy(() => import("@/components/OpenSource"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { rating, ratingCount, installs } = useMarketplaceStats();

  useEffect(() => {
    // Simulate initial load time for assets
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSkeleton />;
  }

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>{SEO_CONFIG.title}</title>
        <meta name="title" content={SEO_CONFIG.title} />
        <meta name="description" content={SEO_CONFIG.description} />
        <meta name="author" content={SEO_CONFIG.author.name} />
        <meta name="keywords" content={SEO_CONFIG.keywords} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta name="applicable-device" content="pc,mobile" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="general" />
        <link rel="canonical" href={SEO_CONFIG.siteUrl} />
        
        {/* Author Information */}
        <link rel="author" href={SEO_CONFIG.author.website} />
        <link rel="me" href={SEO_CONFIG.author.linkedin} />
        <link rel="me" href={SEO_CONFIG.author.github} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={SEO_CONFIG.siteUrl} />
        <meta property="og:title" content={SEO_CONFIG.title} />
        <meta property="og:description" content={SEO_CONFIG.ogDescription} />
        <meta property="og:image" content={SEO_CONFIG.ogImage} />
        <meta property="og:image:secure_url" content={SEO_CONFIG.ogImage} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={SEO_CONFIG.ogImageAlt} />
        <meta property="og:site_name" content={SEO_CONFIG.siteName} />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter / Social Media */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={SEO_CONFIG.author.twitter} />
        <meta name="twitter:creator" content={SEO_CONFIG.author.twitter} />
        <meta name="twitter:url" content={SEO_CONFIG.siteUrl} />
        <meta name="twitter:title" content={SEO_CONFIG.titleShort} />
        <meta name="twitter:description" content={SEO_CONFIG.twitterDescription} />
        <meta name="twitter:image" content={SEO_CONFIG.ogImage} />
        <meta name="twitter:image:alt" content={SEO_CONFIG.ogImageAlt} />
        
        {/* Structured Data - SoftwareApplication */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": SEO_CONFIG.siteName,
            "description": SEO_CONFIG.description,
            "url": SEO_CONFIG.siteUrl,
            "applicationCategory": "DeveloperApplication",
            "operatingSystem": "Windows, macOS, Linux",
            "softwareVersion": "1.0.0",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "author": {
              "@type": "Person",
              "name": SEO_CONFIG.author.name,
              "url": SEO_CONFIG.author.website,
              "sameAs": [
                SEO_CONFIG.author.linkedin,
                SEO_CONFIG.author.github
              ]
            },
            "publisher": {
              "@type": "Organization",
              "name": SEO_CONFIG.siteName,
              "url": SEO_CONFIG.siteUrl
            },
            "downloadUrl": SEO_CONFIG.links.marketplace,
            "screenshot": SEO_CONFIG.ogImage,
            // Only include rating if we have actual reviews
            ...(ratingCount > 0 && {
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": rating.toString(),
                "ratingCount": ratingCount.toString(),
                "bestRating": "5",
                "worstRating": "1"
              }
            })
          })}
        </script>
        
        {/* Structured Data - WebSite */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": SEO_CONFIG.siteName,
            "url": SEO_CONFIG.siteUrl,
            "description": `Official website for ${SEO_CONFIG.siteName} VS Code Extension`,
            "potentialAction": {
              "@type": "SearchAction",
              "target": `${SEO_CONFIG.siteUrl}?q={search_term_string}`,
              "query-input": "required name=search_term_string"
            }
          })}
        </script>
        
        {/* Structured Data - FAQPage */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is What Was I Doing extension?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "What Was I Doing? is a free VS Code extension that automatically tracks your work context, helping you resume exactly where you left off when returning to your code."
                }
              },
              {
                "@type": "Question",
                "name": "Is What Was I Doing extension free?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, What Was I Doing? is completely free and open source. You can install it from the VS Code Marketplace at no cost."
                }
              },
              {
                "@type": "Question",
                "name": "How do I install What Was I Doing extension?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You can install it directly from VS Code by searching for 'What Was I Doing' in the Extensions panel, or visit the VS Code Marketplace and click Install."
                }
              }
            ]
          })}
        </script>

        {/* Structured Data - BreadcrumbList */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": SEO_CONFIG.siteUrl
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Features",
                "item": `${SEO_CONFIG.siteUrl}#features`
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Installation",
                "item": `${SEO_CONFIG.siteUrl}#installation`
              }
            ]
          })}
        </script>

        {/* Structured Data - Organization */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": SEO_CONFIG.siteName,
            "url": SEO_CONFIG.siteUrl,
            "logo": SEO_CONFIG.ogImage,
            "founder": {
              "@type": "Person",
              "name": SEO_CONFIG.author.name,
              "url": SEO_CONFIG.author.website
            },
            "sameAs": [
              SEO_CONFIG.author.github,
              SEO_CONFIG.author.linkedin,
              "https://marketplace.visualstudio.com/publishers/VanshSethi"
            ]
          })}
        </script>

        {/* Preload Critical Resources */}
        <link rel="preload" as="image" href={SEO_CONFIG.ogImage} />
        <link rel="dns-prefetch" href="https://marketplace.visualstudio.com" />
        <link rel="dns-prefetch" href="https://github.com" />
      </Helmet>

      <div className="min-h-screen bg-background animate-fade-in">
        <Navbar />
        <main>
          <Hero />
          <Suspense fallback={<div className="min-h-[200px]" />}>
            <ProblemSolution />
            <Features />
            <HowItWorks />
            <Commands />
            <Configuration />
            <Testimonials />
            <Installation />
            <FAQ />
            <OpenSource />
          </Suspense>
        </main>
        <Suspense fallback={<div className="min-h-[100px]" />}>
          <Footer />
        </Suspense>
      </div>
    </>
  );
};

export default Index;
