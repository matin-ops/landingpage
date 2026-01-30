import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-rainbow-mountains.jpg";

const FloatingParticle = ({ delay, className, color }: { delay: number; className?: string; color?: string }) => (
  <motion.div
    className={`absolute w-3 h-3 rounded-full ${color || 'bg-cosmic-gold/60'} ${className}`}
    initial={{ opacity: 0, y: 0 }}
    animate={{ 
      opacity: [0, 0.8, 0],
      y: [-20, -80, -140],
      x: [0, 15, -10, 20]
    }}
    transition={{
      duration: 6,
      delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
);

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Sacred forest clearing at dawn" 
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-hero-overlay" />
      </div>

      {/* Floating rainbow particles */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        <FloatingParticle delay={0} className="left-[10%] bottom-[20%]" color="bg-cosmic-magenta/50" />
        <FloatingParticle delay={1.5} className="left-[25%] bottom-[30%]" color="bg-cosmic-violet/50" />
        <FloatingParticle delay={3} className="left-[60%] bottom-[25%]" color="bg-cosmic-gold/50" />
        <FloatingParticle delay={4.5} className="left-[80%] bottom-[35%]" color="bg-cosmic-turquoise/50" />
        <FloatingParticle delay={2} className="left-[45%] bottom-[15%]" color="bg-cosmic-coral/50" />
        <FloatingParticle delay={0.5} className="left-[75%] bottom-[18%]" color="bg-cosmic-rose/50" />
        <FloatingParticle delay={2.5} className="left-[35%] bottom-[40%]" color="bg-cosmic-lavender/50" />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1 
            className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-tight mb-8 text-foreground"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Reconnect With Your{" "}
            <span className="text-gradient italic">Inner Balance</span>{" "}
            Through Sound & Plant Medicine
          </motion.h1>

          <motion.p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            A gentle, earth-to-cosmos healing journey to quiet the mind, soften the nervous system, 
            and guide you back into your body.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <Button variant="hero" size="xl" asChild>
              <a href="#journey">Enter the Journey</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-sage-deep/30 flex items-start justify-center p-2"
        >
          <motion.div 
            className="w-1.5 h-1.5 rounded-full bg-sage-deep/50"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
