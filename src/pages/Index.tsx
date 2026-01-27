import { useState, useEffect, lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LoadingSkeleton from "@/components/LoadingSkeleton";

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
        <title>What Was I Doing? - Never Lose Your Coding Context | VS Code Extension</title>
        <meta
          name="description"
          content="Automatically track your work context and resume exactly where you left off. The ultimate VS Code extension for developers who value productivity. Install now!"
        />
        <meta name="keywords" content="VS Code extension, productivity, context switching, developer tools, resume work, coding, workflow" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="What Was I Doing? - Never Lose Your Coding Context" />
        <meta property="og:description" content="Automatically track your work context and resume exactly where you left off. The ultimate VS Code extension for developers who value productivity." />
        <meta property="og:image" content="https://raw.githubusercontent.com/vansh-121/What-Was-I-Doing-Extension/master/icon.png" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="What Was I Doing? - Never Lose Your Coding Context" />
        <meta name="twitter:description" content="Automatically track your work context and resume exactly where you left off." />
        <meta name="twitter:image" content="https://raw.githubusercontent.com/vansh-121/What-Was-I-Doing-Extension/master/icon.png" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "What Was I Doing?",
            "operatingSystem": "Windows, macOS, Linux",
            "applicationCategory": "DeveloperApplication",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "ratingCount": "10"
            }
          })}
        </script>
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
