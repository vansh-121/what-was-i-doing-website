import { useState, useEffect } from "react";
import { Menu, X, ExternalLink, Heart } from "lucide-react";
import logo from "@/assets/logo.png";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
      <div className="container mx-auto px-3 sm:px-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 sm:gap-3 group">
          <img
            src={logo}
            alt="What Was I Doing? Logo"
            className="w-8 h-8 sm:w-10 sm:h-10 transition-transform duration-300 group-hover:scale-110"
          />
          <span className="font-bold text-sm sm:text-lg hidden xs:block">What Was I Doing?</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-2 lg:gap-3">
          <ThemeToggle />
          <a
            href="https://github.com/sponsors/vansh-121"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-xs lg:text-sm px-3 lg:px-4 py-2"
          >
            <Heart className="w-3 h-3 lg:w-4 lg:h-4" />
            Sponsor
          </a>
          <a
            href="https://github.com/vansh-121/What-Was-I-Doing-Extension"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-xs lg:text-sm px-3 lg:px-4 py-2"
          >
            <ExternalLink className="w-3 h-3 lg:w-4 lg:h-4" />
            GitHub
          </a>
          <a
            href="https://marketplace.visualstudio.com/items?itemName=VanshSethi.what-was-i-doing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xs lg:text-sm px-3 lg:px-4 py-2"
          >
            Install Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass border-t border-border/50 animate-fade-up">
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
              <a
                href="https://marketplace.visualstudio.com/items?itemName=VanshSethi.what-was-i-doing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary justify-center"
              >
                Install Now
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
