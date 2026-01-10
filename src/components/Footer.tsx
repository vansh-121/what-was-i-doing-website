import { ExternalLink, Github, Heart } from "lucide-react";
import ScrollFadeIn from "./ScrollFadeIn";
import logo from "@/assets/logo.png";

const Footer = () => {
  const quickLinks = [
    { label: "VS Code Marketplace", href: "https://marketplace.visualstudio.com/items?itemName=VanshSethi.what-was-i-doing" },
    { label: "GitHub Repository", href: "https://github.com/vansh-121/What-Was-I-Doing-Extension" },
    { label: "Report an Issue", href: "https://github.com/vansh-121/What-Was-I-Doing-Extension/issues" },
    { label: "Request a Feature", href: "https://github.com/vansh-121/What-Was-I-Doing-Extension/issues/new" },
  ];

  return (
    <footer className="border-t border-border/50 bg-card/50">
      <div className="container mx-auto px-3 sm:px-4">
        {/* Main Footer */}
        <ScrollFadeIn>
          <div className="py-6 sm:py-8 lg:py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {/* Brand */}
            <div className="space-y-3 sm:space-y-4 sm:col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 sm:gap-3">
                <img src={logo} alt="Logo" className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg" />
                <span className="font-bold text-base sm:text-lg">What Was I Doing?</span>
              </div>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                Never lose your train of thought when returning to code. A VS Code extension that automatically tracks your work context.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Quick Links</h3>
              <ul className="space-y-2 sm:space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2"
                    >
                      <ExternalLink className="w-2.5 h-2.5 sm:w-3 sm:h-3 flex-shrink-0" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Creator */}
            <div>
              <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Created By</h3>
              <div className="space-y-3 sm:space-y-4">
                <a
                  href="https://github.com/vansh-121"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 sm:gap-3 group"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Github className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-sm sm:text-base group-hover:text-primary transition-colors">Vansh Sethi</p>
                    <p className="text-[10px] sm:text-xs text-muted-foreground">@vansh-121</p>
                  </div>
                </a>
                <p className="text-muted-foreground text-xs sm:text-sm">
                  Built with <Heart className="w-2.5 h-2.5 sm:w-3 sm:h-3 inline text-destructive" /> for the developer community.
                </p>
              </div>
            </div>
          </div>
        </ScrollFadeIn>

        {/* Bottom Bar */}
        <div className="py-4 sm:py-6 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
            © {new Date().getFullYear()} Vansh Sethi. All rights reserved.
          </p>
          <div className="flex items-center gap-4 sm:gap-6">
            <span className="text-xs sm:text-sm text-muted-foreground">MIT License</span>
            <span className="text-xs sm:text-sm text-muted-foreground">v1.0.2</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
