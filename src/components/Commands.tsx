import { Clock, ClipboardList, Save, Trash2, Terminal } from "lucide-react";

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
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Commands</span>
          <h2 className="section-title mt-2 mb-6">
            Powerful <span className="gradient-text">Commands</span>
            <br />
            At Your Fingertips
          </h2>
          <p className="section-subtitle mx-auto">
            Access all features through VS Code's command palette. Press <kbd className="px-2 py-1 rounded bg-secondary text-primary font-mono text-sm">Ctrl+Shift+P</kbd> to get started.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Command Palette Mockup */}
          <div className="vscode-window">
            <div className="p-4 border-b border-border/50">
              <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-secondary/50 border border-border/50">
                <Terminal className="w-5 h-5 text-muted-foreground" />
                <span className="text-muted-foreground">{">"} What Was I Doing</span>
              </div>
            </div>

            <div className="p-2">
              {commands.map((cmd, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-secondary/50 transition-colors cursor-pointer group"
                >
                  <span className="text-xl">{cmd.emoji}</span>
                  <div className="flex-1">
                    <p className="font-mono text-sm text-primary group-hover:text-accent transition-colors">
                      {cmd.command}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">{cmd.description}</p>
                  </div>
                  {cmd.shortcut && (
                    <kbd className="px-2 py-1 rounded bg-secondary text-xs font-mono text-muted-foreground">
                      {cmd.shortcut}
                    </kbd>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Commands;
