import { motion } from "framer-motion";
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
import SectionTransition from "@/components/landing/SectionTransition";

const Index = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen bg-background nebula-bg starfield overflow-x-hidden"
    >
      <Navbar />
      <HeroSection />
      <SectionTransition variant="aurora" />
      <IntroSection />
      <SectionTransition variant="nebula" />
      <ProblemSection />
      <SectionTransition variant="cosmic" />
      <SolutionSection />
      <SectionTransition variant="stardust" />
      <BenefitsSection />
      <SectionTransition variant="aurora" />
      <section id="about">
        <AboutSection />
      </section>
      <SectionTransition variant="nebula" />
      <StepsSection />
      <SectionTransition variant="cosmic" />
      <section id="services">
        <ServicesSection />
      </section>
      <SectionTransition variant="stardust" />
      <TestimonialsSection />
      <SectionTransition variant="aurora" />
      <InvitationSection />
      <SectionTransition variant="nebula" />
      <section id="faq">
        <FAQSection />
      </section>
      <SectionTransition variant="cosmic" />
      <FinalCTASection />
      <Footer />
    </motion.div>
  );
};

export default Index;
