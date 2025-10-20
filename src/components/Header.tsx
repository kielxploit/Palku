import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.png";

// REPLACE WITH YOUR ACTUAL LINKS
const INVITE_LINK = "https://discord.com/oauth2/authorize?client_id=1290644737501433858&permissions=8&integration_type=0&scope=bot";
const SUPPORT_SERVER_LINK = "https://discord.gg/4u36WkmhAv";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-primary/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="Palku Logo" 
              className="w-10 h-10 object-contain animate-float-slow"
            />
            <span className="text-xl font-bold text-foreground hidden sm:inline">
              Palku
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#about" className="text-foreground hover:text-primary transition-colors duration-200">
              About
            </a>
            <a href="#privacy" className="text-foreground hover:text-primary transition-colors duration-200">
              Privacy
            </a>
            <Button
              variant="outline"
              className="border-primary/50 text-primary hover:bg-primary/10 hover:border-primary transition-all duration-300 hover:shadow-glow-sm"
              asChild
            >
              <a href={INVITE_LINK} target="_blank" rel="noopener noreferrer">
                Invite Bot
              </a>
            </Button>
            <Button
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow-sm hover:shadow-glow transition-all duration-300"
              asChild
            >
              <a href={SUPPORT_SERVER_LINK} target="_blank" rel="noopener noreferrer">
                Support Server
              </a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-3 animate-slide-up">
            <a 
              href="#about" 
              className="text-foreground hover:text-primary transition-colors duration-200 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#privacy" 
              className="text-foreground hover:text-primary transition-colors duration-200 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Privacy
            </a>
            <Button
              variant="outline"
              className="border-primary/50 text-primary hover:bg-primary/10 w-full"
              asChild
            >
              <a href={INVITE_LINK} target="_blank" rel="noopener noreferrer">
                Invite Bot
              </a>
            </Button>
            <Button
              className="bg-primary hover:bg-primary/90 text-primary-foreground w-full"
              asChild
            >
              <a href={SUPPORT_SERVER_LINK} target="_blank" rel="noopener noreferrer">
                Support Server
              </a>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};
