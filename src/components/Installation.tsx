import { useState } from "react";
import { Copy, Check, Monitor, Terminal, ExternalLink, Download } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import ScrollFadeIn from "./ScrollFadeIn";

const Installation = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    toast({
      title: "Copied to clipboard!",
      description: "You can now paste the command in your terminal.",
    });
    setTimeout(() => setCopied(null), 2000);
  };

  const methods = [
    {
      id: "ui",
      icon: Monitor,
      title: "VS Code UI",
      recommended: true,
      steps: [
        "Open VS Code",
        <>Press <kbd className="px-2 py-1 rounded bg-background text-primary font-mono text-xs">Ctrl+Shift+X</kbd> (Windows/Linux) or <kbd className="px-2 py-1 rounded bg-background text-primary font-mono text-xs">Cmd+Shift+X</kbd> (Mac)</>,
        'Search for "What Was I Doing"',
        "Click Install",
      ],
    },
    {
      id: "cli",
      icon: Terminal,
      title: "Command Line",
      recommended: false,
      command: "code --install-extension VanshSethi.what-was-i-doing",
    },
    {
      id: "link",
      icon: ExternalLink,
      title: "Direct Link",
      recommended: false,
      link: "https://marketplace.visualstudio.com/items?itemName=VanshSethi.what-was-i-doing",
    },
  ];

  return (
    <section className="section-padding relative">
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[300px] sm:w-[450px] lg:w-[600px] h-[150px] sm:h-[225px] lg:h-[300px] bg-accent/10 rounded-full blur-[80px] sm:blur-[100px] lg:blur-[120px] -z-10" />
      
      <div className="container mx-auto px-3 sm:px-4">
        <ScrollFadeIn className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-16">
          <span className="text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider">Installation</span>
          <h2 className="section-title mt-2 mb-4 sm:mb-6">
            Get Started in
            <br />
            <span className="gradient-text">Seconds</span>
          </h2>
          <p className="section-subtitle mx-auto px-2 sm:px-0">
            Choose your preferred installation method. Zero configuration required.
          </p>
        </ScrollFadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 max-w-5xl mx-auto">
          {methods.map((method, index) => (
            <ScrollFadeIn key={method.id} delay={index * 0.1}>
              <div
                className={`feature-card h-full ${method.recommended ? "border-primary/30 relative overflow-hidden" : ""}`}
              >
                {method.recommended && (
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                    <span className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full bg-primary/20 text-primary font-semibold">
                      Recommended
                    </span>
                  </div>
                )}

                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <div className="p-2 sm:p-3 rounded-xl bg-primary/10">
                    <method.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold">{method.title}</h3>
                </div>

                {method.steps && (
                  <ol className="space-y-2 sm:space-y-3">
                    {method.steps.map((step, idx) => (
                      <li key={idx} className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm">
                        <span className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary/10 flex items-center justify-center text-[10px] sm:text-xs font-semibold text-primary">
                          {idx + 1}
                        </span>
                        <span className="text-muted-foreground pt-0.5">{step}</span>
                      </li>
                    ))}
                  </ol>
                )}

                {method.command && (
                  <div className="space-y-3 sm:space-y-4">
                    <p className="text-xs sm:text-sm text-muted-foreground">Run this command in your terminal:</p>
                    <div className="relative">
                      <div className="code-block pr-10 sm:pr-12">
                        <code className="text-[10px] sm:text-xs break-all">{method.command}</code>
                      </div>
                      <button
                        onClick={() => copyToClipboard(method.command!, method.id)}
                        className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 p-1.5 sm:p-2 rounded-md hover:bg-secondary transition-colors"
                      >
                        {copied === method.id ? (
                          <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" />
                        ) : (
                          <Copy className="w-3 h-3 sm:w-4 sm:h-4 text-muted-foreground" />
                        )}
                      </button>
                    </div>
                  </div>
                )}

                {method.link && (
                  <div className="space-y-3 sm:space-y-4">
                    <p className="text-xs sm:text-sm text-muted-foreground">Visit the VS Code Marketplace directly:</p>
                    <a
                      href={method.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-accent w-full justify-center text-xs sm:text-sm py-2 sm:py-3"
                    >
                      <Download className="w-3 h-3 sm:w-4 sm:h-4" />
                      Open Marketplace
                    </a>
                  </div>
                )}
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Installation;
