import { Skeleton } from "@/components/ui/skeleton";

const LoadingSkeleton = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navbar Skeleton */}
      <div className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Skeleton className="w-10 h-10 rounded-xl" />
            <Skeleton className="w-32 h-5 hidden sm:block" />
          </div>
          <div className="hidden md:flex items-center gap-6">
            <Skeleton className="w-16 h-4" />
            <Skeleton className="w-20 h-4" />
            <Skeleton className="w-16 h-4" />
            <Skeleton className="w-14 h-4" />
          </div>
          <div className="flex items-center gap-3">
            <Skeleton className="w-9 h-9 rounded-lg" />
            <Skeleton className="w-28 h-10 rounded-lg hidden sm:block" />
          </div>
        </div>
      </div>

      {/* Hero Skeleton */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge */}
            <div className="flex justify-center mb-8">
              <Skeleton className="w-64 h-10 rounded-full" />
            </div>
            
            {/* Logo */}
            <div className="flex justify-center mb-8">
              <Skeleton className="w-24 h-24 rounded-2xl" />
            </div>
            
            {/* Headline */}
            <div className="space-y-4 mb-6">
              <Skeleton className="w-3/4 h-12 mx-auto" />
              <Skeleton className="w-1/2 h-12 mx-auto" />
            </div>
            
            {/* Subheadline */}
            <div className="space-y-3 mb-10">
              <Skeleton className="w-full max-w-2xl h-6 mx-auto" />
              <Skeleton className="w-4/5 max-w-xl h-6 mx-auto" />
            </div>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Skeleton className="w-48 h-14 rounded-xl" />
              <Skeleton className="w-40 h-14 rounded-xl" />
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {[...Array(4)].map((_, i) => (
                <Skeleton key={i} className="h-14 rounded-xl" />
              ))}
            </div>
            
            {/* Mockup */}
            <div className="mt-20">
              <Skeleton className="w-full max-w-4xl h-80 mx-auto rounded-2xl" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoadingSkeleton;
