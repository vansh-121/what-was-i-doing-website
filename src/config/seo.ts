/**
 * Centralized SEO Configuration
 * Single source of truth for all SEO-related metadata
 */

export const SEO_CONFIG = {
  // Site Information
  siteName: "What Was I Doing?",
  siteUrl: "https://www.whatwasidoing.dev/",
  
  // Page Title & Description
  title: "What Was I Doing? - Never Lose Your Coding Context | Free VS Code Extension",
  titleShort: "What Was I Doing? - Free VS Code Extension",
  description: "Free VS Code extension that tracks your coding context. Resume exactly where you left off with one click. Boost productivity by 40%. Install now!",
  descriptionShort: "Free VS Code extension that automatically tracks your coding context. Boost productivity by 40%!",
  
  // Social Media Descriptions
  ogDescription: "Free VS Code extension that automatically tracks your coding context. Resume exactly where you left off with one click. Boost your productivity by 40%. Open source & free to use!",
  twitterDescription: "Never lose your coding context! Automatically track and resume your work with one click. Free & open source VS Code extension. Boost productivity by 40%. Install now!",
  
  // Keywords
  keywords: [
    "VS Code extension",
    "vscode extension",
    "visual studio code extension",
    "productivity extension",
    "context switching",
    "developer tools",
    "developer productivity",
    "resume work context",
    "coding context",
    "workflow automation",
    "programming tools",
    "IDE extension",
    "open source vscode",
    "free vscode extension",
    "work tracker",
    "code session tracker",
    "project context",
    "task resume",
    "developer workflow",
    "coding productivity",
    "context recovery",
    "VS Code marketplace",
    "vscode productivity",
    "break management",
    "coding session",
    "work continuity",
    "development tools",
    "programmer productivity"
  ].join(", "),
  
  // Images
  ogImage: "https://raw.githubusercontent.com/vansh-121/What-Was-I-Doing-Extension/master/icon.png",
  ogImageAlt: "What Was I Doing VS Code Extension Logo",
  
  // Author Information
  author: {
    name: "Vansh Sethi",
    website: "https://vanshsethi.in/",
    twitter: "@vansh_121",
    linkedin: "https://www.linkedin.com/in/vansh-sethi-vs/",
    github: "https://github.com/vansh-121"
  },
  
  // External Links
  links: {
    marketplace: "https://marketplace.visualstudio.com/items?itemName=VanshSethi.what-was-i-doing",
    github: "https://github.com/vansh-121/What-Was-I-Doing-Extension",
    sponsor: "https://github.com/sponsors/vansh-121",
    issues: "https://github.com/vansh-121/What-Was-I-Doing-Extension/issues"
  },
  
  // Social Share Messages
  shareMessages: {
    twitter: (url: string) => `Check out this amazing VS Code extension that helps you never lose your coding context! 🚀\n\n${url}`,
    whatsapp: (url: string) => `What Was I Doing? - Never Lose Your Coding Context\n\nFree VS Code extension that boosts developer productivity by 40%! Check it out:\n${url}`,
    default: (url: string) => `What Was I Doing? - Never Lose Your Coding Context | Free VS Code Extension\n${url}`
  }
} as const;

// Type-safe exports
export type SEOConfig = typeof SEO_CONFIG;
