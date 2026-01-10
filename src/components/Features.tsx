import { RefreshCw, Target, ClipboardList, Settings2 } from "lucide-react";

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
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-16">
          <span className="text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider">Features</span>
          <h2 className="section-title mt-2 mb-4 sm:mb-6">
            Everything You Need to
            <br />
            <span className="gradient-text">Stay Productive</span>
          </h2>
          <p className="section-subtitle mx-auto px-2 sm:px-0">
            Powerful features designed to help developers maintain focus and context throughout their workday.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 lg:gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card group p-4 sm:p-6"
            >
              <div className="flex items-start gap-2.5 sm:gap-4 mb-2 sm:mb-4">
                <div className={`p-2 sm:p-3 rounded-lg sm:rounded-xl bg-${feature.color}/10 border border-${feature.color}/20 group-hover:border-${feature.color}/40 transition-colors flex-shrink-0`}>
                  <span className="text-lg sm:text-2xl">{feature.emoji}</span>
                </div>
                <div className="min-w-0">
                  <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-0.5 sm:mb-1">{feature.title}</h3>
                  <p className="text-xs sm:text-sm lg:text-base text-muted-foreground">{feature.description}</p>
                </div>
              </div>
              
              <ul className="space-y-1.5 sm:space-y-2 ml-9 sm:ml-16">
                {feature.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-center gap-2 text-[11px] sm:text-xs lg:text-sm text-muted-foreground">
                    <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
