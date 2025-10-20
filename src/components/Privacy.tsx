import { Card } from "@/components/ui/card";
import { Shield, Database, Lock, FileText, RefreshCw, Mail } from "lucide-react";

const privacySections = [
  {
    icon: Database,
    title: "What we collect",
    content: [
      "We collect only the minimum information required for the bot to work properly:",
      "• Discord user IDs — used to apply limits (cooldowns), manage user-level settings, and enforce blacklists.",
      "• Discord server (guild) IDs — used to store server-specific settings and preferences.",
      "",
      "We do not collect or store message content, plaintext tokens, payment information, email addresses, or other personally identifiable information."
    ]
  },
  {
    icon: Shield,
    title: "How we use information",
    content: [
      "Collected IDs are used strictly to enable core bot features:",
      "• Enforce cooldowns and rate limits per user.",
      "• Apply and manage blacklist/whitelist rules.",
      "• Save and recall server-level configuration (prefixes, role settings, etc.).",
      "",
      "We will never use this information for marketing, profiling, or selling to third parties."
    ]
  },
  {
    icon: Lock,
    title: "Third-party services",
    content: [
      "Palku integrates with external bypassing APIs to process links. When we forward a link to a third-party service, that provider's privacy practices apply to any data they receive.",
      "",
      "Palku only sends the link data necessary to perform the bypass — not your Discord messages or extra profile details."
    ]
  },
  {
    icon: FileText,
    title: "Data retention",
    content: [
      "We retain only what's necessary:",
      "• Configuration and ID data are kept while you use the bot or until you ask an admin to remove them.",
      "• If a server or user is removed, associated configuration and IDs will be deleted in a timely manner."
    ]
  },
  {
    icon: RefreshCw,
    title: "Security",
    content: [
      "We take reasonable technical and organizational steps to protect stored data from unauthorized access, alteration, or disclosure.",
      "",
      "While we strive to safeguard information, no system is 100% secure — if a breach occurs we will respond promptly and notify affected server owners where required."
    ]
  },
  {
    icon: Mail,
    title: "Contact",
    content: [
      "If you have questions, concerns, or requests (including deletion of data tied to your user ID or server ID), contact the Palku admin or the bot support server.",
      "",
      "Provide the user ID or server ID you want removed so we can locate it quickly."
    ]
  }
];

export const Privacy = () => {
  return (
    <section className="py-20 px-4" id="privacy">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 md:mb-8 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
          Privacy Policy
        </h2>
        <p className="text-center text-muted-foreground mb-12 md:mb-16 max-w-3xl mx-auto text-lg">
          Your privacy matters. This Privacy Policy explains what information Palku collects when you use the bot, how we use it, and the steps we take to keep it safe.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {privacySections.map((section, index) => (
            <Card
              key={index}
              className="p-6 md:p-8 bg-card/50 backdrop-blur border-2 border-primary/30 hover:border-primary/60 transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-full bg-primary/20 border-2 border-primary/40">
                  <section.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mt-2">
                  {section.title}
                </h3>
              </div>
              <div className="space-y-2 text-muted-foreground">
                {section.content.map((paragraph, idx) => (
                  <p key={idx} className={paragraph === "" ? "h-2" : ""}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
