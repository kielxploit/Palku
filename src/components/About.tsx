import { Card } from "@/components/ui/card";
import { Bot, User, Activity, Link2, Shield, Terminal, Zap, Cpu, CheckCircle, Sparkles } from "lucide-react";

export const About = () => {
  return (
    <section className="py-20 px-4" id="about">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
          About Palku
        </h2>

        <div className="max-w-5xl mx-auto space-y-6">
          {/* Bot Info Card */}
          <Card className="p-8 bg-card/50 backdrop-blur border-2 border-primary/30">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Bot Name */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/20 border border-primary/30">
                  <Bot className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground mb-1">Bot Name</h3>
                  <p className="text-lg font-bold text-primary">Palku</p>
                </div>
              </div>

              {/* Developer */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/20 border border-primary/30">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground mb-1">Developer</h3>
                  <p className="text-lg font-bold text-primary">k1el.xyz</p>
                </div>
              </div>
            </div>

            {/* Status Badges */}
            <div className="flex flex-wrap gap-3 items-center mb-8 pb-8 border-b border-primary/20">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
                <Activity className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Active</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
                <Link2 className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">Supports 20+ hosts</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">Privacy-first</span>
              </div>
            </div>

            {/* Description Sections */}
            <div className="space-y-6 mb-8 pb-8 border-b border-primary/20">
              {/* Powerful & Effortless */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/20 border border-primary/30 shrink-0">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Powerful & Effortless</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Palku is a powerful Discord bot designed to make link bypassing seamless and effortless. Born from the frustration of dealing with shortened and protected links, Palku offers a clean, privacy-focused solution that works directly within Discord.
                  </p>
                </div>
              </div>

              {/* AI-Powered Technology */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/20 border border-primary/30 shrink-0">
                  <Cpu className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">AI-Powered Technology</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    With support for over 20 different link hosting platforms, Palku uses advanced AI-powered detection to identify and bypass various link protection systems. Whether you're dealing with URL shorteners, ad-filled redirects, or complex link gates, Palku handles it all with speed and reliability.
                  </p>
                </div>
              </div>

              {/* Reliable & Free */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/20 border border-primary/30 shrink-0">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Reliable & Free</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Built by k1el.xyz, Palku maintains a 99.9% uptime and processes thousands of requests daily. The bot is completely free to use, requires no registration, and respects your privacy—we don't track, store, or analyze your data.
                  </p>
                </div>
              </div>

              {/* Auto-Bypass Feature */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/20 border border-primary/30 shrink-0">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Auto-Bypass Feature</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our auto-bypass feature allows server administrators to enable automatic link detection and bypassing in specific channels, making the experience even smoother for your community. Simply set it up once, and Palku handles the rest.
                  </p>
                </div>
              </div>
            </div>

            {/* Commands Section */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-primary/20 border border-primary/30">
                  <Terminal className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Commands</h3>
              </div>

              <div className="space-y-4">
                {/* Bypass Command */}
                <div className="p-4 rounded-lg bg-background/50 border border-primary/20">
                  <code className="text-primary font-mono font-semibold">/bypass [url]</code>
                  <p className="text-muted-foreground mt-2">
                    The primary command. Bypasses the provided URL and returns the result.
                  </p>
                </div>

                {/* Set Auto Bypass */}
                <div className="p-4 rounded-lg bg-background/50 border border-primary/20">
                  <code className="text-primary font-mono font-semibold">/set-auto-bypass</code>
                  <p className="text-muted-foreground mt-2">
                    Admin-only. Enables automatic link bypassing in the channel where the command is used.
                  </p>
                </div>

                {/* Reset Auto Bypass */}
                <div className="p-4 rounded-lg bg-background/50 border border-primary/20">
                  <code className="text-primary font-mono font-semibold">/reset-auto-bypass</code>
                  <p className="text-muted-foreground mt-2">
                    Admin-only. Disables the auto-bypass feature in the current channel.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
