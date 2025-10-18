import { Terminal } from "lucide-react";

interface BotCommandProps {
  command: string;
  description: string;
  delay?: number;
}

export const BotCommand = ({ command, description, delay = 0 }: BotCommandProps) => {
  return (
    <div
      className="flex items-start gap-3 p-4 glass-card rounded-lg hover:border-primary/30 transition-all duration-300 animate-fade-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex-shrink-0 mt-1">
        <Terminal className="w-5 h-5 text-primary" />
      </div>
      <div className="flex-1 min-w-0">
        <code className="text-secondary font-mono text-sm block mb-1">{command}</code>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </div>
  );
};
