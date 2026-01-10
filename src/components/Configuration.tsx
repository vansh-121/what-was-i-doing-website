import { Settings, Clock, Database, Bell, FileX, Tag } from "lucide-react";

const Configuration = () => {
  const settings = [
    {
      icon: Clock,
      name: "Idle Timeout Minutes",
      type: "Number (1-120)",
      default: "10",
      description: "Minutes of inactivity before context is saved",
    },
    {
      icon: Database,
      name: "Max History Size",
      type: "Number (1-50)",
      default: "10",
      description: "Maximum number of work sessions to keep",
    },
    {
      icon: Bell,
      name: "Auto Show Resume Popup",
      type: "Boolean",
      default: "true",
      description: "Automatically show popup when returning",
    },
    {
      icon: FileX,
      name: "Exclude Patterns",
      type: "Array",
      default: '["node_modules", ".git", "dist"]',
      description: "File path patterns to exclude from tracking",
    },
    {
      icon: Tag,
      name: "TODO Keywords",
      type: "Array",
      default: '["TODO", "FIXME", "HACK", "NOTE"]',
      description: "Keywords to search for context hints",
    },
  ];

  return (
    <section className="section-padding relative">
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px] -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Configuration</span>
          <h2 className="section-title mt-2 mb-6">
            <span className="gradient-text">Customize</span> Your
            <br />
            Workflow
          </h2>
          <p className="section-subtitle mx-auto">
            Fine-tune the extension to match your preferences. All settings are accessible through VS Code's settings panel.
          </p>
        </div>

        {/* Settings Panel Mockup */}
        <div className="max-w-4xl mx-auto">
          <div className="vscode-window">
            <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-4 py-2 sm:py-3 border-b border-border/50 overflow-x-auto">
              <Settings className="w-3 h-3 sm:w-4 sm:h-4 text-muted-foreground flex-shrink-0" />
              <span className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">Settings</span>
              <span className="text-xs sm:text-sm text-muted-foreground">/</span>
              <span className="text-xs sm:text-sm text-primary whitespace-nowrap">What Was I Doing</span>
            </div>

            <div className="p-3 sm:p-6 space-y-3 sm:space-y-6">
              {settings.map((setting, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row md:items-center gap-2 sm:gap-4 p-3 sm:p-4 rounded-xl bg-secondary/30 border border-border/50 hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-center gap-2 sm:gap-3 md:w-1/3">
                    <div className="p-1.5 sm:p-2 rounded-lg bg-primary/10 flex-shrink-0">
                      <setting.icon className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                    </div>
                    <span className="font-medium text-sm sm:text-base">{setting.name}</span>
                  </div>
                  
                  <div className="flex-1 space-y-1.5 sm:space-y-2">
                    <p className="text-xs sm:text-sm text-muted-foreground">{setting.description}</p>
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                      <span className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded bg-secondary text-muted-foreground font-mono">
                        {setting.type}
                      </span>
                      <span className="text-[10px] sm:text-xs text-primary font-mono break-all">
                        Default: {setting.default}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Configuration;
