import { useState, useEffect, useRef } from "react";
import { Menu, X, ExternalLink, Heart, ChevronDown, Download } from "lucide-react";
import logo from "@/assets/logo.png";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isInstallOpen, setIsInstallOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsInstallOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { href: "#features", label: "Features" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#commands", label: "Commands" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass py-2 sm:py-3" : "py-3 sm:py-5"
      }`}
    >
      <div className="container mx-auto px-3 sm:px-6 flex items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 sm:gap-3 group flex-shrink-0 mr-auto">
          <img
            src={logo}
            alt="What Was I Doing? Logo"
            className="w-8 h-8 sm:w-10 sm:h-10 transition-transform duration-300 group-hover:scale-110"
          />
          <span className="font-bold text-sm sm:text-lg hidden xs:block">What Was I Doing?</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-10 mr-8 xl:mr-12">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link whitespace-nowrap">
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop Right Actions */}
        <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
          <ThemeToggle />
          <a
            href="https://github.com/sponsors/vansh-121"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-xs lg:text-sm px-4 py-2"
          >
            <Heart className="w-3.5 h-3.5" />
            Sponsor
          </a>
          <a
            href="https://github.com/vansh-121/What-Was-I-Doing-Extension"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-xs lg:text-sm px-4 py-2"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            GitHub
          </a>

          {/* Install Now Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsInstallOpen(!isInstallOpen)}
              className="btn-primary text-xs lg:text-sm px-5 py-2 flex items-center gap-2"
            >
              Install Now
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isInstallOpen ? "rotate-180" : ""}`} />
            </button>
            {isInstallOpen && (
              <div
                className="absolute right-0 top-full mt-3 w-64 rounded-2xl border border-border/50 shadow-2xl overflow-hidden animate-fade-up"
                style={{
                  background: 'hsl(var(--card))',
                  boxShadow: '0 20px 60px hsl(var(--primary) / 0.15), 0 8px 24px rgba(0,0,0,0.2)',
                }}
              >
                <div className="p-1.5">
                  <a
                    href="https://marketplace.visualstudio.com/items?itemName=VanshSethi.what-was-i-doing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm transition-all duration-200 hover:bg-primary/10 group"
                    onClick={() => setIsInstallOpen(false)}
                  >
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200"
                      style={{ background: 'linear-gradient(135deg, hsl(201 96% 40%) 0%, hsl(210 90% 50%) 100%)' }}
                    >
                      <Download className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-sm group-hover:text-primary transition-colors">VS Code Marketplace</div>
                      <div className="text-xs text-muted-foreground mt-0.5">Official VS Code extension</div>
                    </div>
                  </a>

                  <div className="mx-4 border-t border-border/30" />

                  <a
                    href="https://open-vsx.org/extension/VanshSethi/what-was-i-doing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm transition-all duration-200 hover:bg-accent/10 group"
                    onClick={() => setIsInstallOpen(false)}
                  >
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200"
                      style={{ background: 'linear-gradient(135deg, hsl(142 70% 40%) 0%, hsl(160 60% 45%) 100%)' }}
                    >
                      <Download className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-sm group-hover:text-accent transition-colors">Open VSX Registry</div>
                      <div className="text-xs text-muted-foreground mt-0.5">Cursor, Windsurf, VSCodium & more</div>
                    </div>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 glass border-t border-border/50 animate-fade-up">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-3 pt-4 border-t border-border/50">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Theme</span>
                <ThemeToggle />
              </div>
              <a
                href="https://github.com/sponsors/vansh-121"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary justify-center"
              >
                <Heart className="w-4 h-4" />
                Sponsor
              </a>
              <a
                href="https://github.com/vansh-121/What-Was-I-Doing-Extension"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary justify-center"
              >
                <ExternalLink className="w-4 h-4" />
                GitHub
              </a>
              <div className="flex flex-col gap-2 mt-1">
                <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">Install Extension</span>
                <a
                  href="https://marketplace.visualstudio.com/items?itemName=VanshSethi.what-was-i-doing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary justify-center"
                >
                  <Download className="w-4 h-4" />
                  VS Code Marketplace
                </a>
                <a
                  href="https://open-vsx.org/extension/VanshSethi/what-was-i-doing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-accent justify-center"
                >
                  <Download className="w-4 h-4" />
                  Open VSX Registry
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
