
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import AmbitionSection from "@/components/AmbitionSection";
import GoalsSection from "@/components/GoalsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <AboutSection />
      <ServicesSection />
      <AmbitionSection />
      <GoalsSection />
      <Footer />
    </div>
  );
};

export default Index;
