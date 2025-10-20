import { Card } from "@/components/ui/card";
import { Sparkles, TrendingUp, Package } from "lucide-react";

const updates = [
  {
    icon: Package,
    version: "v2.5.0",
    title: "Latest Version",
    description: "Improved bypass success rate and faster processing.",
    date: "Jan 2025",
  },
  {
    icon: TrendingUp,
    title: "Performance Boost",
    description: "30% faster bypass speeds with new API integrations.",
    date: "Dec 2024",
  },
  {
    icon: Sparkles,
    title: "New Features",
    description: "Added /search and /executor commands for enhanced functionality.",
    date: "Nov 2024",
  },
];

export const Updates = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
          Latest Updates
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {updates.map((update, index) => (
            <Card
              key={index}
              className="p-6 bg-card/50 backdrop-blur border-primary/20 hover:border-primary/40 transition-all duration-300 group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-primary/20 border border-primary/30 group-hover:border-primary/60 transition-all duration-300">
                    <update.icon className="w-6 h-6 text-primary" />
                  </div>
                  {update.version && (
                    <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-semibold">
                      {update.version}
                    </span>
                  )}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">
                    {update.title}
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    {update.description}
                  </p>
                  <p className="text-sm text-primary">
                    {update.date}
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
