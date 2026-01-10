import { Coffee, Clock, Brain, ArrowRight, CheckCircle2 } from "lucide-react";

const ProblemSolution = () => {
  const problems = [
    {
      icon: Coffee,
      title: "Just got back from coffee...",
      description: "What was I working on again?",
    },
    {
      icon: Clock,
      title: "Lost 15 minutes",
      description: "Trying to remember my thought process",
    },
    {
      icon: Brain,
      title: "Context switching kills",
      description: "My productivity is suffering",
    },
  ];

  const solutions = [
    "Automatically tracks your coding activity",
    "Saves your exact position, function name, and TODOs",
    "Shows a helpful popup when you return",
    "Jump back to work with a single click",
  ];

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Problem Side */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <span className="text-destructive font-semibold text-xs sm:text-sm uppercase tracking-wider">The Problem</span>
                <h2 className="section-title mt-2">
                  Sound <span className="gradient-text">Familiar?</span>
                </h2>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {problems.map((problem, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 sm:gap-4 p-3 sm:p-5 rounded-xl bg-destructive/5 border border-destructive/20 transition-all duration-300 hover:border-destructive/40"
                  >
                    <div className="p-2 sm:p-3 rounded-lg bg-destructive/10 flex-shrink-0">
                      <problem.icon className="w-5 h-5 sm:w-6 sm:h-6 text-destructive" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold text-base sm:text-lg">{problem.title}</h3>
                      <p className="text-muted-foreground text-sm sm:text-base">{problem.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Arrow */}
            <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="p-4 rounded-full glass border-primary/30 glow-primary">
                <ArrowRight className="w-8 h-8 text-primary" />
              </div>
            </div>

            {/* Solution Side */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <span className="text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider">The Solution</span>
                <h2 className="section-title mt-2">
                  What Was I <span className="gradient-text">Doing?</span>
                </h2>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {solutions.map((solution, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 sm:gap-4 p-3 sm:p-5 rounded-xl feature-card"
                  >
                    <div className="p-1.5 sm:p-2 rounded-lg bg-primary/10 flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                    </div>
                    <span className="font-medium text-sm sm:text-base">{solution}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://marketplace.visualstudio.com/items?itemName=VanshSethi.what-was-i-doing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex mt-2 sm:mt-4 text-sm sm:text-base"
              >
                Try It Free
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
