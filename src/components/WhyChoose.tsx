import { Zap, Link2, Shield, CheckCircle, Gift, Lock, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Zap,
    title: "Fast Bypass",
    description: "Get results in seconds with our optimized processing.",
  },
  {
    icon: Link2,
    title: "Multi-Link Support",
    description: "Works on 50+ different link hosting platforms.",
  },
  {
    icon: CheckCircle,
    title: "Reliable",
    description: "99.9% uptime with automatic retry system.",
  },
  {
    icon: Shield,
    title: "Safe",
    description: "No tracking, no malware, your privacy protected.",
  },
  {
    icon: Lock,
    title: "Secure",
    description: "Encrypted connections for maximum security.",
  },
  {
    icon: Sparkles,
    title: "Smart Bypass",
    description: "AI-powered detection and bypass technology.",
  },
  {
    icon: Gift,
    title: "Free to Use",
    description: "No payment or login required, completely free.",
  },
];


export const WhyChoose = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background" />
      
      <div className="container mx-auto relative z-10 px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
          Why Choose Palku?
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 bg-card/50 backdrop-blur border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-glow-sm group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/20 border border-primary/30 group-hover:border-primary/60 transition-all duration-300">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
