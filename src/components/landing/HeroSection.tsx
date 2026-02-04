import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-cosmic-rainbow.jpg";

const FloatingParticle = ({ delay, className, size = "small" }: { delay: number; className?: string; size?: "small" | "medium" | "large" }) => {
  const sizeClasses = {
    small: "w-2 h-2",
    medium: "w-3 h-3",
    large: "w-4 h-4"
  };

  return (
    <motion.div
      className={`absolute rounded-full ${sizeClasses[size]} ${className}`}
      initial={{ opacity: 0, y: 0 }}
      animate={{ 
        opacity: [0, 0.8, 0.4, 0.8, 0],
        y: [-20, -100, -180],
        x: [0, 20, -15, 25, 0],
        scale: [0.5, 1, 0.8, 1, 0.5]
      }}
      transition={{
        duration: 10,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );
};

const HeroSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with parallax */}
      <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Cosmic rainbow healing landscape" 
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay - smooth transition to next section's pastel lavender */}
        <div className="absolute inset-0 bg-gradient-hero-overlay" />
        
        {/* Additional smooth blend to pastel lilac of IntroSection */}
        <div 
          className="absolute inset-0"
          style={{
            background: `linear-gradient(
              180deg,
              transparent 0%,
              transparent 40%,
              hsla(270, 40%, 92%, 0.3) 60%,
              hsla(270, 40%, 92%, 0.6) 75%,
              hsla(270, 40%, 92%, 0.9) 90%,
              hsl(270, 40%, 92%) 100%
            )`
          }}
        />
      </motion.div>

      {/* Floating cosmic particles */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        <FloatingParticle delay={0} className="left-[8%] bottom-[25%] bg-cosmic-magenta/60" size="medium" />
        <FloatingParticle delay={1.5} className="left-[22%] bottom-[35%] bg-cosmic-violet/50" size="small" />
        <FloatingParticle delay={3} className="left-[55%] bottom-[20%] bg-cosmic-gold/60" size="large" />
        <FloatingParticle delay={4.5} className="left-[78%] bottom-[40%] bg-cosmic-turquoise/50" size="medium" />
        <FloatingParticle delay={2} className="left-[42%] bottom-[15%] bg-cosmic-coral/50" size="small" />
        <FloatingParticle delay={0.5} className="left-[68%] bottom-[22%] bg-cosmic-rose/60" size="medium" />
        <FloatingParticle delay={2.5} className="left-[32%] bottom-[45%] bg-cosmic-lavender/50" size="large" />
        <FloatingParticle delay={5} className="left-[85%] bottom-[30%] bg-cosmic-sky/50" size="small" />
        <FloatingParticle delay={3.5} className="left-[12%] bottom-[50%] bg-cosmic-gold/40" size="medium" />
      </div>

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-20 container mx-auto px-6 text-center pt-32 md:pt-40 lg:pt-48">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1 
            className="font-display text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-normal leading-relaxed mb-10 tracking-widest text-foreground"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            Sound & Plant Medicine Healing
          </motion.h1>

          <motion.p 
            className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-14 font-body leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            A gentle, earth-to-cosmos healing journey to quiet the mind, soften the nervous system, 
            and guide you back into your body.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <Button variant="hero" size="xl" className="aurora-glow" asChild>
              <a href="#journey">Enter the Journey</a>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-8 h-14 rounded-full border-2 border-cosmic-violet/40 flex items-start justify-center p-2"
        >
          <motion.div 
            className="w-2 h-2 rounded-full bg-cosmic-violet/60"
            animate={{ y: [0, 20, 0], opacity: [1, 0.5, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
