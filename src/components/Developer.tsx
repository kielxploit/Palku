import { Code2, Github, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Developer = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background">
        <div className="absolute inset-0 opacity-10">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-px h-px bg-primary rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${4 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto relative z-10 text-center">
        <div className="inline-block animate-scale-in">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="p-4 rounded-full bg-primary/20 border-2 border-primary/40 animate-glow-pulse">
              <Code2 className="w-12 h-12 text-primary" />
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
              Developed by K1EL
            </span>
          </h2>

          <p className="text-muted-foreground max-w-md mx-auto">
            Passionate about creating fast, reliable tools for the community. 
            Building the future of link bypass technology.
          </p>
        </div>
      </div>
    </section>
  );
};
