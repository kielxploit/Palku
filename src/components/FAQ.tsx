import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is Palku Bypasser safe to use?",
    answer: "Yes, absolutely! We don't store any user data or tokens. Your privacy is completely protected, and we don't track your activity.",
  },
  {
    question: "Do I need to pay or create an account?",
    answer: "No! Palku Bypasser is completely free to use. No payment required, no account creation needed. Just invite the bot and start bypassing.",
  },
  {
    question: "Which link hosts are supported?",
    answer: "We support 50+ popular link hosting platforms including Linkvertise, AdFly, ShorteStST, and many more. Our list is constantly growing!",
  },
  {
    question: "How fast is the bypass?",
    answer: "Our average bypass speed is 0.5 seconds. Most links are processed within 1-2 seconds, making it one of the fastest bypass bots available.",
  },
  {
    question: "What if the bot is down?",
    answer: "We maintain 99.9% uptime with automatic retry systems. If you encounter any issues, join our support server for immediate assistance.",
  },
];

export const FAQ = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background" />
      
      <div className="container mx-auto max-w-3xl relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
          Frequently Asked Questions
        </h2>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-2 border-primary/20 rounded-lg px-6 bg-card/30 backdrop-blur hover:border-primary/40 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
