import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import IntroSection from "@/components/landing/IntroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import SolutionSection from "@/components/landing/SolutionSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import AboutSection from "@/components/landing/AboutSection";
import StepsSection from "@/components/landing/StepsSection";
import ServicesSection from "@/components/landing/ServicesSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import InvitationSection from "@/components/landing/InvitationSection";
import FAQSection from "@/components/landing/FAQSection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <IntroSection />
      <ProblemSection />
      <SolutionSection />
      <BenefitsSection />
      <section id="about">
        <AboutSection />
      </section>
      <StepsSection />
      <section id="services">
        <ServicesSection />
      </section>
      <TestimonialsSection />
      <InvitationSection />
      <section id="faq">
        <FAQSection />
      </section>
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default Index;
