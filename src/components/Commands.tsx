import { Clock, ClipboardList, Save, Trash2, Terminal } from "lucide-react";
import ScrollFadeIn from "./ScrollFadeIn";

const Commands = () => {
  const commands = [
    {
      icon: Clock,
      emoji: "🕒",
      command: "What Was I Doing: Show Last Context",
      description: "View your most recent work context",
      shortcut: null,
    },
    {
      icon: ClipboardList,
      emoji: "📋",
      command: "What Was I Doing: View History",
      description: "Browse all saved work sessions",
      shortcut: null,
    },
    {
      icon: Save,
      emoji: "💾",
      command: "What Was I Doing: Save Current Context",
      description: "Manually save your current position",
      shortcut: null,
    },
    {
      icon: Trash2,
      emoji: "🗑️",
      command: "What Was I Doing: Clear History",
      description: "Reset all saved contexts",
      shortcut: null,
    },
  ];

  return (
    <section id="commands" className="section-padding relative">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 sm:w-96 h-64 sm:h-96 bg-primary/10 rounded-full blur-[80px] sm:blur-[120px] -z-10" />
      
      <div className="container mx-auto px-3 sm:px-4">
        <ScrollFadeIn className="text-center max-w-3xl mx-auto mb-6 xs:mb-8 sm:mb-12 lg:mb-16">
          <span className="text-primary font-semibold text-[10px] xs:text-xs sm:text-sm uppercase tracking-wider">Commands</span>
          <h2 className="section-title mt-2 mb-3 xs:mb-4 sm:mb-6 leading-tight">
            Powerful <span className="gradient-text">Commands</span>
            <br />
            At Your Fingertips
          </h2>
          <p className="section-subtitle mx-auto px-1 text-xs xs:text-sm sm:text-base">
            Access all features through VS Code's command palette. Press <kbd className="px-1 xs:px-1.5 sm:px-2 py-0.5 rounded bg-secondary text-primary font-mono text-[9px] xs:text-[10px] sm:text-sm">Ctrl+Shift+P</kbd>
          </p>
        </ScrollFadeIn>

        <ScrollFadeIn className="max-w-4xl mx-auto">
          {/* Command Palette Mockup */}
          <div className="vscode-window">
            <div className="p-2 sm:p-4 border-b border-border/50">
              <div className="flex items-center gap-2 sm:gap-3 px-2 sm:px-4 py-2 sm:py-3 rounded-lg bg-secondary/50 border border-border/50">
                <Terminal className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground flex-shrink-0" />
                <span className="text-muted-foreground text-xs sm:text-base truncate">{">"} What Was I Doing</span>
              </div>
            </div>

            <div className="p-1 sm:p-2">
              {commands.map((cmd, index) => (
                <div
                  key={index}
                  className="flex items-start sm:items-center gap-2 sm:gap-4 p-2 sm:p-4 rounded-lg hover:bg-secondary/50 transition-colors cursor-pointer group"
                >
                  <span className="text-lg sm:text-xl flex-shrink-0">{cmd.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <p className="font-mono text-xs sm:text-sm text-primary group-hover:text-accent transition-colors break-words">
                      {cmd.command}
                    </p>
                    <p className="text-[10px] sm:text-xs text-muted-foreground mt-0.5 sm:mt-1">{cmd.description}</p>
                  </div>
                  {cmd.shortcut && (
                    <kbd className="px-1.5 sm:px-2 py-0.5 sm:py-1 rounded bg-secondary text-[10px] sm:text-xs font-mono text-muted-foreground flex-shrink-0">
                      {cmd.shortcut}
                    </kbd>
                  )}
                </div>
              ))}
            </div>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
};

export default Commands;
