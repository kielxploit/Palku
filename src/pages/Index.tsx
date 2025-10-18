import { AnimatedBackground } from "@/components/AnimatedBackground";
import { FeatureCard } from "@/components/FeatureCard";
import { BotCommand } from "@/components/BotCommand";
import { PrivacySection } from "@/components/PrivacySection";
import { Button } from "@/components/ui/button";
import {
  Zap,
  Link2,
  Shield,
  Lock,
  Brain,
  Gift,
  Activity,
  ExternalLink,
} from "lucide-react";
import palkulogo from "@/assets/palku-logo.png";

const Index = () => {
  const features = [
    {
      icon: Zap,
      title: "Fast Bypass",
      description: "Get results in seconds with our optimized processing.",
      delay: 0,
    },
    {
      icon: Link2,
      title: "Multi-Link Support",
      description: "Works on more than 20+ different link hosting platforms.",
      delay: 100,
    },
    {
      icon: Activity,
      title: "Reliable",
      description: "99.9% uptime with automatic retry system.",
      delay: 200,
    },
    {
      icon: Shield,
      title: "Safe",
      description: "No tracking, no malware, your privacy protected.",
      delay: 300,
    },
    {
      icon: Lock,
      title: "Secure",
      description: "Encrypted connections for maximum security.",
      delay: 400,
    },
    {
      icon: Brain,
      title: "Smart Bypass",
      description: "AI-powered detection and bypass technology.",
      delay: 500,
    },
    {
      icon: Gift,
      title: "Free to Use",
      description: "No payment or login required, completely free.",
      delay: 600,
    },
  ];

  const commands = [
    {
      command: "/bypass [url]",
      description: "The primary command. Bypasses the provided URL and returns the result.",
      delay: 0,
    },
    {
      command: "/set-auto-bypass",
      description: "Admin-only. Enables automatic link bypassing in the channel.",
      delay: 100,
    },
    {
      command: "/disabled-auto-bypass",
      description: "Admin-only. Disables the auto-bypass feature in the current channel.",
      delay: 200,
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <AnimatedBackground />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20">
        <div className="container max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-8 animate-scale-in">
            <img
              src={palkulogo}
              alt="Palku logo"
              className="w-40 h-40 md:w-48 md:h-48 mx-auto drop-shadow-[0_0_30px_rgba(59,130,246,0.3)] animate-float"
            />
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-black mb-6 text-glow animate-fade-in">
            Palku Bypasser
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 animate-fade-up max-w-2xl mx-auto">
            Fast, reliable link bypassing directly inside Discord
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up" style={{ animationDelay: "200ms" }}>
            <Button
              variant="hero"
              size="lg"
              asChild
              className="w-full sm:w-auto"
            >
              <a
                href="https://discord.gg/4u36WkmhAv"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                Support Server
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>

            <Button
              variant="hero-solid"
              size="lg"
              asChild
              className="w-full sm:w-auto"
            >
              <a
                href="https://discord.com/oauth2/authorize?client_id=1290644737501433858"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                Add Palku
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Palku Section */}
      <section className="py-20 px-4 relative">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-glow">
            Why Choose Palku
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Bot Info Section */}
      <section className="py-20 px-4 relative">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-glow">
            Bot Info
          </h2>

          <div className="glass-card rounded-2xl p-6 md:p-8 mb-8">
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-between border-b border-border/50 pb-4">
                <span className="text-muted-foreground">Bot Name</span>
                <span className="font-semibold text-primary">Palku Bypasser</span>
              </div>
              <div className="flex items-center justify-between border-b border-border/50 pb-4">
                <span className="text-muted-foreground">Developer</span>
                <span className="font-semibold">k1el.xyz</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-primary font-bold text-xs tracking-wider" style={{ WebkitTextStroke: '1px hsl(var(--primary))', WebkitTextFillColor: 'transparent' }}>PALKU</span>
                  <span className="text-muted-foreground">Active</span>
                </div>
                <span className="text-muted-foreground">•</span>
                <span className="text-muted-foreground">Supports 20+ hosts</span>
                <span className="text-muted-foreground">•</span>
                <span className="text-muted-foreground">Privacy-first</span>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-bold mb-4">Commands</h3>
              {commands.map((cmd, index) => (
                <BotCommand key={index} {...cmd} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 relative">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-glow">
            About Palku
          </h2>

          <div className="glass-card rounded-2xl p-6 md:p-8">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center glow-soft">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Powerful & Effortless</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Palku Bypasser is a powerful Discord bot designed to make link bypassing seamless and effortless. 
                    Born from the frustration of dealing with shortened and protected links, Palku offers a clean, 
                    privacy-focused solution that works directly within Discord.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center glow-soft">
                    <Brain className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">AI-Powered Technology</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    With support for over 20 different link hosting platforms, Palku uses advanced AI-powered detection 
                    to identify and bypass various link protection systems. Whether you're dealing with URL shorteners, 
                    ad-filled redirects, or complex link gates, Palku handles it all with speed and reliability.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center glow-soft">
                    <Activity className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Reliable & Free</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Built by <span className="text-primary font-semibold">k1el.xyz</span>, Palku Bypasser maintains 
                    a 99.9% uptime and processes thousands of requests daily. The bot is completely free to use, requires 
                    no registration, and respects your privacy—we don't track, store, or analyze your data.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center glow-soft">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Auto-Bypass Feature</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our auto-bypass feature allows server administrators to enable automatic link detection and bypassing 
                    in specific channels, making the experience even smoother for your community. Simply set it up once, 
                    and Palku handles the rest.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Section */}
      <PrivacySection />

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border/30">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center space-y-4">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Palku Bypasser • Built by{" "}
              <a
                href="https://k1el.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-secondary transition-colors"
              >
                k1el.xyz
              </a>
            </p>

            <div className="flex justify-center gap-6">
              <a
                href="#privacy"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy
              </a>
              <a
                href="https://discord.gg/4u36WkmhAv"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
              >
                Discord
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
