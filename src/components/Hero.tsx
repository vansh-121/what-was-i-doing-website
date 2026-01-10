import { ArrowRight, Download, Github, Star, Users, Zap } from "lucide-react";
import logo from "@/assets/logo.png";

const Hero = () => {
  const stats = [
    { icon: Download, label: "Downloads", value: "1K+" },
    { icon: Star, label: "Rating", value: "5.0" },
    { icon: Users, label: "Active Users", value: "500+" },
    { icon: Zap, label: "Version", value: "1.0.2" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-glow-pulse" />
      <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[128px] animate-glow-pulse" style={{ animationDelay: "1s" }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-primary/20 mb-8 animate-fade-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="text-sm text-muted-foreground">Now available on VS Code Marketplace</span>
          </div>

          {/* Logo */}
          <div className="mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <img
              src={logo}
              alt="What Was I Doing?"
              className="w-24 h-24 mx-auto animate-float glow-primary rounded-2xl"
            />
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Never Lose Your
            <br />
            <span className="gradient-text">Train of Thought</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: "0.3s" }}>
            Automatically track your work context and resume exactly where you left off after breaks. The ultimate VS Code extension for developers who value productivity.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <a
              href="https://marketplace.visualstudio.com/items?itemName=VanshSethi.what-was-i-doing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent text-base px-8 py-4 group"
            >
              <Download className="w-5 h-5" />
              Install for VS Code
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="https://github.com/vansh-121/What-Was-I-Doing-Extension"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-base px-8 py-4"
            >
              <Github className="w-5 h-5" />
              View on GitHub
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: "0.5s" }}>
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="stat-badge justify-center py-3"
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
              >
                <stat.icon className="w-4 h-4 text-primary" />
                <span className="font-semibold">{stat.value}</span>
                <span className="text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Mockup Preview */}
        <div className="mt-20 max-w-4xl mx-auto animate-fade-up" style={{ animationDelay: "0.6s" }}>
          <div className="vscode-window glow-primary overflow-visible">
            {/* Window Header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-card border-b border-border/50">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-destructive/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex-1 text-center">
                <span className="text-sm text-muted-foreground font-mono">index.tsx — myproject</span>
              </div>
            </div>
            
            {/* Editor Content */}
            <div className="relative p-3 sm:p-6 font-mono text-xs sm:text-sm pb-4 sm:pb-56">
              <div className="space-y-1 text-muted-foreground text-[10px] sm:text-sm">
                <div><span className="text-primary">const</span> <span className="text-accent">UserProfile</span> = () =&gt; {"{"}</div>
                <div className="pl-2 sm:pl-4"><span className="text-primary">const</span> [user, setUser] = <span className="text-accent">useState</span>(null);</div>
                <div className="pl-2 sm:pl-4 text-green-400">{"// TODO: Add user authentication"}</div>
                <div className="pl-2 sm:pl-4"><span className="text-primary">return</span> (</div>
                <div className="pl-4 sm:pl-8 opacity-50">...</div>
                <div className="pl-2 sm:pl-4">);</div>
                <div>{"}"};</div>
              </div>

              {/* Resume Popup Overlay - Positioned below code on mobile, overlaid on desktop */}
              <div className="relative sm:absolute sm:right-6 sm:top-4 w-full sm:w-80 mt-6 sm:mt-0 glass-card rounded-xl p-4 sm:p-5 border-primary/30 glow-primary animate-bounce-subtle">
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <img src={logo} alt="Logo" className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg" />
                  <div>
                    <h3 className="font-semibold text-xs sm:text-sm">Welcome Back!</h3>
                    <p className="text-[10px] sm:text-xs text-muted-foreground">You've been away for 15 minutes</p>
                  </div>
                </div>
                <div className="space-y-2 text-[10px] sm:text-xs">
                  <div className="flex items-center gap-2 p-1.5 sm:p-2 rounded-lg bg-secondary/50">
                    <span className="text-primary">📄</span>
                    <span className="font-mono">index.tsx</span>
                  </div>
                  <div className="flex items-center gap-2 p-1.5 sm:p-2 rounded-lg bg-secondary/50">
                    <span className="text-primary">📍</span>
                    <span className="font-mono">UserProfile()</span>
                  </div>
                  <div className="flex items-center gap-2 p-1.5 sm:p-2 rounded-lg bg-accent/10 border border-accent/30">
                    <span>📝</span>
                    <span className="text-accent truncate">TODO: Add user authentication</span>
                  </div>
                </div>
                <button className="w-full mt-3 sm:mt-4 py-2 rounded-lg gradient-accent text-[10px] sm:text-xs font-semibold text-primary-foreground">
                  Jump to Location
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
