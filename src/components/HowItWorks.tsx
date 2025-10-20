import { Card } from "@/components/ui/card";
import { Clipboard, Cpu, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Clipboard,
    number: "1",
    title: "Paste your link",
    description: "Simply paste your protected link into the bot command.",
  },
  {
    icon: Cpu,
    number: "2",
    title: "Bot processes",
    description: "Our bot processes through multiple APIs for best results.",
  },
  {
    icon: CheckCircle,
    number: "3",
    title: "Receive bypass",
    description: "Get your bypassed link instantly, ready to use.",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="container mx-auto relative z-10 px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
          How It Works
        </h2>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative animate-slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <Card className="p-8 bg-card/50 backdrop-blur border-2 border-primary/30 hover:border-primary/60 transition-all duration-300 group text-center h-full">
                <div className="flex flex-col items-center gap-4">
                  {/* Step Number */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-primary border-4 border-background flex items-center justify-center">
                    <span className="text-xl font-bold text-primary-foreground">
                      {step.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="p-4 rounded-full bg-primary/20 border-2 border-primary/40 group-hover:border-primary/80 transition-all duration-300 group-hover:scale-110">
                    <step.icon className="w-10 h-10 text-primary" />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Card>

              {/* Arrow */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 translate-x-full">
                  <div className="text-primary text-3xl">→</div>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
