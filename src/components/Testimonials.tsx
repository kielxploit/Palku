import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "UserA",
    message: "Fastest bot I've used. Results in seconds every time!",
    rating: 5,
  },
  {
    name: "UserB",
    message: "Bypassed my link in seconds. Absolutely reliable.",
    rating: 5,
  },
  {
    name: "UserC",
    message: "Free and works perfectly. No more waiting for bypasses!",
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
          What Users Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 bg-card/50 backdrop-blur border-primary/20 hover:border-primary/40 transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground mb-4 italic">
                "{testimonial.message}"
              </p>
              <div className="text-sm text-muted-foreground">
                — {testimonial.name}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
