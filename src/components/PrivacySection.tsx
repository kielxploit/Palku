import { Database, Settings, Link2, Clock, Lock } from "lucide-react";

export const PrivacySection = () => {
  const privacyItems = [
    {
      icon: Database,
      title: "What We Collect",
      items: [
        { label: "What we collect", points: [
          "Message content containing bypass commands",
          "Discord user IDs for command processing",
          "Basic server/channel identifiers for auto-bypass feature",
          "Temporary URLs for processing (immediately deleted after bypass)"
        ]},
        { label: "What we do NOT collect", points: [
          "Personal information or profiles",
          "Message history beyond active commands",
          "Browsing data or tracking information",
          "Payment or financial information"
        ]}
      ]
    },
    {
      icon: Settings,
      title: "How We Use Information",
      items: [
        { label: "Information is used exclusively for", points: [
          "Processing bypass requests in real-time",
          "Maintaining auto-bypass channel settings",
          "Providing command responses",
          "System optimization and error handling"
        ]},
        { label: "Privacy commitment", points: [
          "All data is processed in-memory and discarded immediately after use",
          "We do not build user profiles or track behavior patterns"
        ]}
      ]
    },
    {
      icon: Link2,
      title: "Third-Party Services",
      items: [
        { label: "Interactions with third-party link hosting services", points: [
          "Temporary and request-specific",
          "Do not share user identities",
          "Subject to each service's own terms",
          "Performed through secure, encrypted connections"
        ]},
        { label: "Note", points: [
          "We are not responsible for third-party service policies or data practices"
        ]}
      ]
    },
    {
      icon: Clock,
      title: "Data Retention",
      items: [
        { label: "Minimal retention policy", points: [
          "Command data: Deleted immediately after processing",
          "Auto-bypass settings: Stored only while enabled, removed upon deactivation",
          "Error logs: Anonymized and retained for 7 days maximum",
          "No long-term user data storage"
        ]},
        { label: "User control", points: [
          "Users can disable auto-bypass at any time to remove stored channel settings"
        ]}
      ]
    },
    {
      icon: Lock,
      title: "Security",
      items: [
        { label: "Industry-standard security measures", points: [
          "End-to-end encrypted connections (TLS 1.3)",
          "Secure processing infrastructure",
          "Regular security audits and updates",
          "No data sold or shared with third parties",
          "Isolated processing environment"
        ]},
        { label: "Disclaimer", points: [
          "While we strive for maximum security, no system is 100% secure",
          "Use Palku Bypasser at your own discretion for non-sensitive links"
        ]}
      ]
    },
  ];

  return (
    <section id="privacy" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-glow">
          Privacy Policy
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {privacyItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.title} 
                className="glass-card rounded-2xl p-6 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center glow-soft">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {item.items.map((section, idx) => (
                    <div key={idx}>
                      <p className="text-sm font-semibold text-primary/80 mb-2">{section.label}</p>
                      <ul className="space-y-1.5">
                        {section.points.map((point, pidx) => (
                          <li key={pidx} className="text-sm text-muted-foreground flex gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span className="flex-1">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="glass-card rounded-2xl p-6 text-center">
          <p className="text-sm text-muted-foreground">
            Questions about our privacy practices? Contact the developer:{" "}
            <a href="mailto:contact@k1el.xyz" className="text-primary hover:text-secondary transition-colors font-semibold">
              k1el.xyz
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
