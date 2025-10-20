import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { WhyChoose } from "@/components/WhyChoose";
import { About } from "@/components/About";
import { Privacy } from "@/components/Privacy";
import { Developer } from "@/components/Developer";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-['Inter',sans-serif]">
      <Header />
      <main>
        <Hero />
        <WhyChoose />
        <About />
        <Privacy />
        <Developer />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
