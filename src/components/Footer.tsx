import { ExternalLink, Github, Heart } from "lucide-react";
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
      <div className="container mx-auto px-4">
        {/* Main Footer */}
        <div className="py-12 grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Logo" className="w-10 h-10 rounded-lg" />
              <span className="font-bold text-lg">What Was I Doing?</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Never lose your train of thought when returning to code. A VS Code extension that automatically tracks your work context.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2"
                  >
                    <ExternalLink className="w-3 h-3" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Creator */}
          <div>
            <h3 className="font-semibold mb-4">Created By</h3>
            <div className="space-y-4">
              <a
                href="https://github.com/vansh-121"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Github className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium group-hover:text-primary transition-colors">Vansh Sethi</p>
                  <p className="text-xs text-muted-foreground">@vansh-121</p>
                </div>
              </a>
              <p className="text-muted-foreground text-sm">
                Built with <Heart className="w-3 h-3 inline text-destructive" /> for the developer community.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Vansh Sethi. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-sm text-muted-foreground">MIT License</span>
            <span className="text-sm text-muted-foreground">v1.0.2</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
