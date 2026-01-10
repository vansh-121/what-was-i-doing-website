import { Download, Code2, Coffee, Zap } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: Download,
      title: "Install the Extension",
      description: "One-click install from VS Code Marketplace. Zero configuration needed. Works immediately after installation.",
    },
    {
      number: "02",
      icon: Code2,
      title: "Keep Coding as Usual",
      description: "Extension runs silently in background. Tracks your activity automatically. No performance impact.",
    },
    {
      number: "03",
      icon: Coffee,
      title: "Take a Break",
      description: "Step away for coffee, meetings, or lunch. Extension detects inactivity. Saves your complete work context.",
    },
    {
      number: "04",
      icon: Zap,
      title: "Resume Instantly",
      description: "Return to your desk. Helpful popup shows where you left off. Click to jump back to exact location.",
    },
  ];

  return (
    <section id="how-it-works" className="section-padding relative overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 sm:w-96 h-64 sm:h-96 bg-accent/10 rounded-full blur-[80px] sm:blur-[120px] -z-10" />
      
      <div className="container mx-auto px-3 sm:px-4">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-16">
          <span className="text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider">How It Works</span>
          <h2 className="section-title mt-2 mb-4 sm:mb-6">
            Get Started in
            <br />
            <span className="gradient-text">4 Simple Steps</span>
          </h2>
          <p className="section-subtitle mx-auto px-2 sm:px-0">
            From installation to productivity boost in minutes. No complex setup required.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 sm:left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary" />

            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative flex items-start gap-4 sm:gap-8 mb-8 sm:mb-12 last:mb-0 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-4 sm:left-8 md:left-1/2 -translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-primary border-2 sm:border-4 border-background glow-primary z-10" />

                {/* Content */}
                <div className={`flex-1 ml-10 sm:ml-16 md:ml-0 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className={`feature-card inline-block w-full md:w-auto ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className={`flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      <span className="text-[10px] sm:text-xs font-mono text-primary">{step.number}</span>
                      <div className="p-1.5 sm:p-2 rounded-lg bg-primary/10">
                        <step.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-xs sm:text-sm">{step.description}</p>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
