import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Commands from "@/components/Commands";
import Configuration from "@/components/Configuration";
import Testimonials from "@/components/Testimonials";
import Installation from "@/components/Installation";
import FAQ from "@/components/FAQ";
import OpenSource from "@/components/OpenSource";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>What Was I Doing? - Never Lose Your Train of Thought | VS Code Extension</title>
        <meta
          name="description"
          content="Automatically track your work context and resume exactly where you left off. The ultimate VS Code extension for developers who value productivity. Install now!"
        />
        <meta name="keywords" content="VS Code extension, productivity, context switching, developer tools, resume work, coding, workflow" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="What Was I Doing? - Never Lose Your Train of Thought" />
        <meta property="og:description" content="Automatically track your work context and resume exactly where you left off. The ultimate VS Code extension for developers who value productivity." />
        <meta property="og:image" content="https://raw.githubusercontent.com/vansh-121/What-Was-I-Doing-Extension/master/icon.png" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="What Was I Doing? - Never Lose Your Train of Thought" />
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

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <ProblemSolution />
          <Features />
          <HowItWorks />
          <Commands />
          <Configuration />
          <Testimonials />
          <Installation />
          <FAQ />
          <OpenSource />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
