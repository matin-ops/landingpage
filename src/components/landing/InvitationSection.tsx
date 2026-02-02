import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

const InvitationSection = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section className="relative py-32 md:py-44 overflow-hidden" ref={containerRef}>
      {/* Cosmic floating orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          style={{ y }}
          animate={{ 
            x: [0, 40, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-[10%] w-48 h-48 rounded-full bg-cosmic-magenta/10 blur-[80px]"
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [-20, 20]) }}
          animate={{ 
            x: [0, -30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute top-1/3 right-[15%] w-56 h-56 rounded-full bg-cosmic-turquoise/10 blur-[100px]"
        />
        <motion.div
          animate={{ 
            y: [0, -30, 0],
            x: [0, 20, 0]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 6 }}
          className="absolute bottom-1/4 left-1/3 w-40 h-40 rounded-full bg-cosmic-gold/10 blur-[60px]"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 40, filter: "blur(10px)" }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-10 font-medium tracking-wide"
          >
            <span className="text-cosmic-violet">Begin Your Journey</span>
            <br />
            <span className="text-foreground">Back to Yourself</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground font-body leading-relaxed mb-8"
          >
            You deserve to feel calm, whole, and alive again — in a way that feels natural to your body.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-display text-xl md:text-2xl text-foreground italic mb-14"
          >
            If this calls to you, you're welcome here.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <Button variant="hero" size="xl">
              Explore Sessions
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InvitationSection;
