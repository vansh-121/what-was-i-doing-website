import { RefreshCw, Target, ClipboardList, Settings2 } from "lucide-react";
import ScrollFadeIn from "./ScrollFadeIn";

const Features = () => {
  const features = [
    {
      icon: RefreshCw,
      emoji: "🔄",
      title: "Automatic Context Tracking",
      description: "Seamlessly monitors coding activity without manual intervention",
      details: [
        "Tracks file edits & cursor movements",
        "Smart idle detection",
        "Context preservation",
        "Smart deduplication",
      ],
      color: "primary",
    },
    {
      icon: Target,
      emoji: "🎯",
      title: "Instant Resume",
      description: "Get back to work instantly with helpful context",
      details: [
        "Jump to exact file location",
        "See function/class name",
        "View relevant TODOs",
        "Time-away tracking",
      ],
      color: "accent",
    },
    {
      icon: ClipboardList,
      emoji: "📋",
      title: "Work Session History",
      description: "Never lose track of recent work sessions",
      details: [
        "Browse session timeline",
        "Quick navigation",
        "Configurable history size",
        "Per-workspace separation",
      ],
      color: "primary",
    },
    {
      icon: Settings2,
      emoji: "⚙️",
      title: "Highly Configurable",
      description: "Customize to fit your workflow perfectly",
      details: [
        "Idle timeout: 1-120 minutes",
        "File exclusion patterns",
        "Custom TODO keywords",
        "Toggle auto-popup",
      ],
      color: "accent",
    },
  ];

  return (
    <section id="features" className="section-padding relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] sm:w-[600px] lg:w-[800px] h-[200px] sm:h-[300px] lg:h-[400px] bg-primary/10 rounded-full blur-[80px] sm:blur-[100px] lg:blur-[120px] -z-10" />
      
      <div className="container mx-auto px-3 sm:px-4">
        <ScrollFadeIn className="text-center max-w-3xl mx-auto mb-6 xs:mb-8 sm:mb-12 lg:mb-16">
          <span className="text-primary font-semibold text-[10px] xs:text-xs sm:text-sm uppercase tracking-wider">Features</span>
          <h2 className="section-title mt-2 mb-3 xs:mb-4 sm:mb-6 leading-tight">
            Everything You Need to
            <br />
            <span className="gradient-text">Stay Productive</span>
          </h2>
          <p className="section-subtitle mx-auto px-1 text-xs xs:text-sm sm:text-base">
            Powerful features designed to help developers maintain focus and context throughout their workday.
          </p>
        </ScrollFadeIn>

        <div className="grid grid-cols-1 gap-2 xs:gap-3 sm:gap-4 lg:gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <ScrollFadeIn
              key={index}
              delay={index * 0.1}
              direction={index % 2 === 0 ? "left" : "right"}
            >
              <div className="feature-card group p-3 xs:p-4 sm:p-6 h-full">
                <div className="flex items-start gap-2 xs:gap-2.5 sm:gap-4 mb-2 xs:mb-3 sm:mb-4">
                  <div className={`p-1.5 xs:p-2 sm:p-3 rounded-lg sm:rounded-xl bg-${feature.color}/10 border border-${feature.color}/20 group-hover:border-${feature.color}/40 transition-colors flex-shrink-0`}>
                    <span className="text-base xs:text-lg sm:text-2xl">{feature.emoji}</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm xs:text-base sm:text-lg lg:text-xl font-semibold mb-0.5 sm:mb-1 leading-tight">{feature.title}</h3>
                    <p className="text-[10px] xs:text-xs sm:text-sm lg:text-base text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
                
                <ul className="space-y-1 xs:space-y-1.5 sm:space-y-2 ml-8 xs:ml-10 sm:ml-16">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center gap-1.5 xs:gap-2 text-[10px] xs:text-[11px] sm:text-xs lg:text-sm text-muted-foreground">
                      <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
