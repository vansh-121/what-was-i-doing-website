import { Share2, Twitter, Linkedin, Facebook, MessageCircle } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./ui/popover";
import { SEO_CONFIG } from "@/config/seo";

const ShareButtons = () => {
  const [copied, setCopied] = useState(false);

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(SEO_CONFIG.shareMessages.twitter(SEO_CONFIG.siteUrl))}&via=vansh_121`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(SEO_CONFIG.siteUrl)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(SEO_CONFIG.siteUrl)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(SEO_CONFIG.shareMessages.whatsapp(SEO_CONFIG.siteUrl))}`,
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(SEO_CONFIG.siteUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button 
          variant="outline" 
          size="sm"
          className="gap-2 glass"
        >
          <Share2 className="w-4 h-4" />
          Share
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-64 glass">
        <div className="space-y-3">
          <h4 className="font-medium text-sm">Share this extension</h4>
          <div className="flex flex-col gap-2">
            <a
              href={shareLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-accent/10 transition-colors"
            >
              <Twitter className="w-4 h-4 text-[#1DA1F2]" />
              <span className="text-sm">Share on Twitter</span>
            </a>
            <a
              href={shareLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-accent/10 transition-colors"
            >
              <Linkedin className="w-4 h-4 text-[#0A66C2]" />
              <span className="text-sm">Share on LinkedIn</span>
            </a>
            <a
              href={shareLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-accent/10 transition-colors"
            >
              <Facebook className="w-4 h-4 text-[#1877F2]" />
              <span className="text-sm">Share on Facebook</span>
            </a>
            <a
              href={shareLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-accent/10 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span className="text-sm">Share on WhatsApp</span>
            </a>
          </div>
          <div className="pt-2 border-t border-border/50">
            <button
              onClick={copyToClipboard}
              className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg hover:bg-accent/10 transition-colors text-sm"
            >
              {copied ? "✓ Copied!" : "📋 Copy Link"}
            </button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ShareButtons;
