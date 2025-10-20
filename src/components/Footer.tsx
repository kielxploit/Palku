import { Button } from "@/components/ui/button";
import { MessageCircle, Github, Twitter, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

// REPLACE WITH YOUR ACTUAL LINKS
const SUPPORT_SERVER_LINK = "https://discord.gg/YOUR_SERVER";

export const Footer = () => {
  return (
    <footer className="relative border-t border-primary/20 bg-background/50 backdrop-blur">
      {/* Glowing Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={logo} 
                alt="Palku Logo" 
                className="w-10 h-10 object-contain animate-float-slow"
              />
              <span className="text-xl font-bold text-foreground">
                Palku
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Fast, reliable link bypassing directly inside Discord
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">
              Quick Links
            </h3>
            <div className="space-y-2">
              <a
                href="#"
                className="block text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Documentation
              </a>
              <a
                href={SUPPORT_SERVER_LINK}
                className="block text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Support Server
              </a>
              <a
                href="#"
                className="block text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Report Bug
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-primary/10 text-center">
          <p className="text-sm text-muted-foreground">
            Copyright © 2025 Palku. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
