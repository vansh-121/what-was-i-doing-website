import { ArrowRight, Download, Github, Heart, Star, Clock, Zap, MousePointerClick } from "lucide-react";
import { motion } from "framer-motion";
import logo from "@/assets/logo.png";
import { useMarketplaceStats } from "@/hooks/useMarketplaceStats";

const Hero = () => {
  const { rating, ratingCount, installs } = useMarketplaceStats();
  
  const stats = [
    { icon: Zap, label: "Setup", value: "Instant" },
    { 
      icon: Star, 
      label: "Rating", 
      value: rating > 0 ? `${rating}/5` : "5.0",
      subtitle: ratingCount > 0 ? `(${ratingCount} reviews)` : undefined
    },
    { icon: MousePointerClick, label: "Resume", value: "One Click" },
    { icon: Clock, label: "Version", value: "1.0.4" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="absolute top-1/4 -left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-primary/20 rounded-full blur-[100px] sm:blur-[128px] animate-glow-pulse" />
      <div className="absolute bottom-1/4 -right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-accent/20 rounded-full blur-[100px] sm:blur-[128px] animate-glow-pulse" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-3 sm:px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full glass border-primary/20 mb-4 sm:mb-8"
          >
            <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-accent"></span>
            </span>
            <span className="text-[10px] sm:text-sm text-muted-foreground">Now available on VS Code Marketplace</span>
          </motion.div>

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mb-4 sm:mb-8"
          >
            <img
              src={logo}
              alt="What Was I Doing?"
              width={96}
              height={96}
              fetchPriority="high"
              decoding="async"
              className="w-16 h-16 sm:w-24 sm:h-24 mx-auto animate-float glow-primary rounded-xl sm:rounded-2xl"
            />
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 tracking-tight"
          >
            Never Lose Your
            <br />
            <span className="gradient-text">Coding Context</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-sm sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-6 sm:mb-10 leading-relaxed px-2 sm:px-0"
          >
            Automatically track your work context and resume exactly where you left off after breaks. The ultimate VS Code extension for developers who value productivity.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-16 px-2 sm:px-0"
          >
            <a
              href="https://marketplace.visualstudio.com/items?itemName=VanshSethi.what-was-i-doing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent text-sm sm:text-base px-5 sm:px-8 py-3 sm:py-4 group w-full sm:w-auto justify-center"
            >
              <Download className="w-4 h-4 sm:w-5 sm:h-5" />
              Install for VS Code
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="https://github.com/vansh-121/What-Was-I-Doing-Extension"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-sm sm:text-base px-5 sm:px-8 py-3 sm:py-4 w-full sm:w-auto justify-center"
            >
              <Github className="w-4 h-4 sm:w-5 sm:h-5" />
              View on GitHub
            </a>
            <a
              href="https://github.com/sponsors/vansh-121"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-sponsor text-sm sm:text-base px-5 sm:px-8 py-3 sm:py-4 w-full sm:w-auto justify-center"
            >
              <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
              Sponsor
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="grid grid-cols-2 gap-2 sm:gap-4 max-w-3xl mx-auto"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="stat-badge justify-center py-2 sm:py-3 flex-wrap"
              >
                <stat.icon className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                <span className="font-semibold text-xs sm:text-sm">{stat.value}</span>
                <span className="text-muted-foreground text-xs sm:text-sm">{stat.label}</span>
                {stat.subtitle && (
                  <span className="text-muted-foreground text-[10px] sm:text-xs w-full text-center mt-0.5">
                    {stat.subtitle}
                  </span>
                )}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Mockup Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-10 sm:mt-20 max-w-4xl mx-auto"
        >
          <div className="vscode-window glow-primary overflow-visible mx-1 sm:mx-0">
            {/* Window Header */}
            <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-4 py-2 sm:py-3 bg-card border-b border-border/50">
              <div className="flex gap-1.5 sm:gap-2">
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-destructive/80" />
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500/80" />
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex-1 text-center">
                <span className="text-[10px] sm:text-sm text-muted-foreground font-mono truncate">index.tsx — myproject</span>
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
                  <img src={logo} alt="Logo" width={32} height={32} loading="lazy" decoding="async" className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg" />
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
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
