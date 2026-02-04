import { useState, useEffect, lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LoadingSkeleton from "@/components/LoadingSkeleton";
import { useMarketplaceStats } from "@/hooks/useMarketplaceStats";

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
        <title>What Was I Doing? - Never Lose Your Coding Context | Free VS Code Extension</title>
        <meta name="title" content="What Was I Doing? - Never Lose Your Coding Context | Free VS Code Extension" />
        <meta
          name="description"
          content="Free VS Code extension that automatically tracks your coding context. Resume exactly where you left off after breaks with one click. Boost productivity by 40%. Open source developer tool for Visual Studio Code. Install now!"
        />
        <meta name="author" content="Vansh Sethi" />
        <meta name="keywords" content="VS Code extension, vscode extension, visual studio code extension, productivity extension, context switching, developer tools, developer productivity, resume work context, coding context, workflow automation, programming tools, IDE extension, open source vscode, free vscode extension, work tracker, code session tracker, project context, task resume, developer workflow, coding productivity, context recovery, VS Code marketplace, vscode productivity, break management, coding session, work continuity, development tools, programmer productivity" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta name="applicable-device" content="pc,mobile" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="general" />
        <link rel="canonical" href="https://www.whatwasidoing.dev/" />
        
        {/* Author Information */}
        <link rel="author" href="https://vanshsethi.in/" />
        <link rel="me" href="https://www.linkedin.com/in/vansh-sethi-vs/" />
        <link rel="me" href="https://github.com/vansh-121" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.whatwasidoing.dev/" />
        <meta property="og:title" content="What Was I Doing? - Never Lose Your Coding Context | Free VS Code Extension" />
        <meta property="og:description" content="Free VS Code extension that automatically tracks your coding context. Resume exactly where you left off with one click. Boost your productivity by 40%. Open source & free to use!" />
        <meta property="og:image" content="https://raw.githubusercontent.com/vansh-121/What-Was-I-Doing-Extension/master/icon.png" />
        <meta property="og:image:secure_url" content="https://raw.githubusercontent.com/vansh-121/What-Was-I-Doing-Extension/master/icon.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="What Was I Doing VS Code Extension Logo" />
        <meta property="og:site_name" content="What Was I Doing?" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter / Social Media */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@vansh_121" />
        <meta name="twitter:creator" content="@vansh_121" />
        <meta name="twitter:url" content="https://www.whatwasidoing.dev/" />
        <meta name="twitter:title" content="What Was I Doing? - Free VS Code Extension for Developer Productivity" />
        <meta name="twitter:description" content="Never lose your coding context! Automatically track and resume your work with one click. Free & open source VS Code extension. Boost productivity by 40%. Install now!" />
        <meta name="twitter:image" content="https://raw.githubusercontent.com/vansh-121/What-Was-I-Doing-Extension/master/icon.png" />
        <meta name="twitter:image:alt" content="What Was I Doing VS Code Extension Logo" />
        
        {/* Structured Data - SoftwareApplication */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "What Was I Doing?",
            "description": "Automatically track your work context and resume exactly where you left off. The ultimate VS Code extension for developers who value productivity.",
            "url": "https://www.whatwasidoing.dev/",
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
              "name": "Vansh Sethi",
              "url": "https://vanshsethi.in/",
              "sameAs": [
                "https://www.linkedin.com/in/vansh-sethi-vs/",
                "https://github.com/vansh-121"
              ]
            },
            "publisher": {
              "@type": "Organization",
              "name": "What Was I Doing",
              "url": "https://www.whatwasidoing.dev/"
            },
            "downloadUrl": "https://marketplace.visualstudio.com/items?itemName=VanshSethi.what-was-i-doing",
            "screenshot": "https://raw.githubusercontent.com/vansh-121/What-Was-I-Doing-Extension/master/icon.png",
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
            "name": "What Was I Doing?",
            "url": "https://www.whatwasidoing.dev/",
            "description": "Official website for What Was I Doing? VS Code Extension",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://www.whatwasidoing.dev/?q={search_term_string}",
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
                "item": "https://www.whatwasidoing.dev/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Features",
                "item": "https://www.whatwasidoing.dev/#features"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Installation",
                "item": "https://www.whatwasidoing.dev/#installation"
              }
            ]
          })}
        </script>

        {/* Structured Data - Organization */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "What Was I Doing",
            "url": "https://www.whatwasidoing.dev/",
            "logo": "https://raw.githubusercontent.com/vansh-121/What-Was-I-Doing-Extension/master/icon.png",
            "founder": {
              "@type": "Person",
              "name": "Vansh Sethi",
              "url": "https://vanshsethi.in/"
            },
            "sameAs": [
              "https://github.com/vansh-121",
              "https://www.linkedin.com/in/vansh-sethi-vs/",
              "https://marketplace.visualstudio.com/publishers/VanshSethi"
            ]
          })}
        </script>

        {/* Preload Critical Resources */}
        <link rel="preload" as="image" href="https://raw.githubusercontent.com/vansh-121/What-Was-I-Doing-Extension/master/icon.png" />
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
