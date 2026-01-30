import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

const FinalCTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 bg-gradient-earth relative overflow-hidden" ref={ref}>
      {/* Decorative top aurora */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-aurora opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 mb-12"
          >
            <p className="font-display text-2xl md:text-3xl text-foreground font-light">
              Your body knows the way.
            </p>
            <p className="font-display text-xl md:text-2xl text-muted-foreground italic">
              Let me help you listen.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <p className="font-display text-xl text-foreground">
              Reconnect. Heal. Remember who you are.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
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
