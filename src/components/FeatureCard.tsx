import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export const FeatureCard = ({ icon: Icon, title, description, delay = 0 }: FeatureCardProps) => {
  return (
    <div
      className="glass-card rounded-2xl p-6 hover:scale-105 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] transition-all duration-300 animate-fade-up group"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-lg font-bold mb-2 text-foreground">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </div>
  );
};
