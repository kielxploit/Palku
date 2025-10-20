import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

// REPLACE WITH YOUR ACTUAL LINKS
const INVITE_LINK = "https://discord.com/oauth2/authorize?client_id=YOUR_CLIENT_ID";
const SUPPORT_SERVER_LINK = "https://discord.gg/YOUR_SERVER";

export const Hero = () => {
  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-secondary/50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,123,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 opacity-20">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Logo */}
        <div className="mb-8 flex justify-center animate-scale-in">
          <img 
            src={logo} 
            alt="Palku Logo" 
            className="w-48 h-48 object-contain drop-shadow-[0_0_30px_rgba(0,123,255,0.5)] animate-float-slow"
          />
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up bg-gradient-to-r from-foreground via-primary to-primary-glow bg-clip-text text-transparent px-4">
          Palku Bot
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-12 animate-slide-up px-4 max-w-3xl mx-auto" style={{ animationDelay: "0.2s" }}>
          Fast, reliable link bypassing directly inside Discord
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: "0.4s" }}>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow hover:shadow-[0_0_50px_hsl(211_100%_50%/0.5)] transition-all duration-300 text-lg px-8 py-6"
            asChild
          >
            <a href={INVITE_LINK} target="_blank" rel="noopener noreferrer">
              Invite Bot
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-primary/50 text-primary hover:bg-primary/10 hover:border-primary transition-all duration-300 text-lg px-8 py-6"
            asChild
          >
            <a href={SUPPORT_SERVER_LINK} target="_blank" rel="noopener noreferrer">
              Join Support Server
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
