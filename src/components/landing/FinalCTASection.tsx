import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

const FinalCTASection = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.5, 1, 1, 0.8]);

  return (
    <section className="relative py-32 md:py-44 overflow-hidden" ref={containerRef}>
      {/* Cosmic gradient background */}
      <motion.div 
        style={{ scale, opacity }}
        className="absolute inset-0 bg-gradient-to-br from-cosmic-violet/10 via-cosmic-magenta/5 to-cosmic-turquoise/10"
      />

      {/* Animated cosmic ring */}
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-20"
      >
        <div className="absolute inset-0 rounded-full border border-cosmic-violet/30" />
        <div className="absolute inset-12 rounded-full border border-cosmic-magenta/20" />
        <div className="absolute inset-24 rounded-full border border-cosmic-turquoise/30" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 40, filter: "blur(10px)" }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="space-y-6 mb-16"
          >
            <p className="font-display text-3xl md:text-4xl lg:text-5xl text-cosmic-violet font-medium tracking-wide">
              Your body knows the way.
            </p>
            <p className="font-display text-xl md:text-2xl lg:text-3xl text-muted-foreground italic">
              Let me help you listen.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <p className="font-display text-2xl text-foreground tracking-wide">
              Reconnect. Heal. Remember who you are.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button variant="hero" size="xl">
              Enter the Journey
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
