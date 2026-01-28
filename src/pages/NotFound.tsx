import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Home, Search } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | What Was I Doing?</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to What Was I Doing? homepage." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      
      <div className="flex min-h-screen items-center justify-center bg-background p-4">
        <div className="text-center max-w-md">
          <h1 className="mb-2 text-6xl sm:text-8xl font-bold text-primary">404</h1>
          <h2 className="mb-4 text-2xl sm:text-3xl font-semibold">Page Not Found</h2>
          <p className="mb-8 text-base sm:text-lg text-muted-foreground">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/" 
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              <Home className="w-4 h-4" />
              Return to Home
            </a>
            <a 
              href="/#faq" 
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border rounded-lg hover:bg-accent transition-colors"
            >
              <Search className="w-4 h-4" />
              View FAQ
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
