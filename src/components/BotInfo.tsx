import { Card } from "@/components/ui/card";
import { Bot, Terminal, Shield, Zap } from "lucide-react";

const infoCards = [
  {
    icon: Bot,
    title: "Bot Name",
    value: "Palku Bypasser",
    color: "text-primary",
  },
  {
    icon: Terminal,
    title: "Commands",
    description: "/bypass [url] - The primary command. Bypasses the provided URL and returns the result.",
    color: "text-primary-glow",
  },
  {
    icon: Shield,
    title: "Admin Commands",
    description: "/set-auto-bypass - Admin-only. Enables automatic link bypassing in the channel. /reset-auto-bypass - Admin-only. Disables the auto-bypass feature in the current channel.",
    color: "text-primary",
  },
  {
    icon: Zap,
    title: "Shortcuts",
    description: "Fast access to bypass features with simple commands and quick replies.",
    color: "text-primary-glow",
  },
];

export const BotInfo = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
          Bot Information
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {infoCards.map((card, index) => (
            <Card
              key={index}
              className="p-6 md:p-8 bg-card/50 backdrop-blur border-2 border-primary/30 hover:border-primary/60 transition-all duration-300 group animate-glow-pulse animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row items-start gap-4">
                <div className="p-4 rounded-full bg-primary/20 border-2 border-primary/40 group-hover:border-primary/80 transition-all duration-300 shrink-0">
                  <card.icon className={`w-8 h-8 ${card.color}`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {card.title}
                  </h3>
                  {card.value && (
                    <p className="text-lg font-semibold text-primary mb-2">
                      {card.value}
                    </p>
                  )}
                  {card.description && (
                    <p className="text-muted-foreground leading-relaxed">
                      {card.description}
                    </p>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
