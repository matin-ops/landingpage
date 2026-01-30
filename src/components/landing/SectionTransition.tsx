import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface SectionTransitionProps {
  variant?: "aurora" | "nebula" | "cosmic" | "stardust";
}

const SectionTransition = ({ variant = "aurora" }: SectionTransitionProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  const gradients = {
    aurora: "from-cosmic-magenta/20 via-cosmic-violet/30 to-cosmic-turquoise/20",
    nebula: "from-cosmic-rose/15 via-cosmic-gold/20 to-cosmic-violet/15",
    cosmic: "from-cosmic-turquoise/20 via-cosmic-sky/25 to-cosmic-magenta/20",
    stardust: "from-cosmic-gold/15 via-cosmic-coral/20 to-cosmic-rose/15"
  };

  return (
    <div ref={ref} className="relative h-32 md:h-48 overflow-hidden">
      {/* Main gradient wave */}
      <motion.div 
        style={{ opacity, scale }}
        className={`absolute inset-0 bg-gradient-to-r ${gradients[variant]}`}
      />
      
      {/* Floating particles */}
      <motion.div
        animate={{ 
          x: [0, 30, 0],
          y: [0, -15, 0],
          opacity: [0.3, 0.7, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-[15%] w-24 h-24 rounded-full bg-cosmic-violet/20 blur-3xl"
      />
      <motion.div
        animate={{ 
          x: [0, -20, 0],
          y: [0, 10, 0],
          opacity: [0.2, 0.6, 0.2]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-1/3 right-[20%] w-32 h-32 rounded-full bg-cosmic-turquoise/15 blur-3xl"
      />
      <motion.div
        animate={{ 
          x: [0, 15, 0],
          y: [0, -20, 0],
          opacity: [0.25, 0.5, 0.25]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        className="absolute bottom-1/4 left-1/2 w-28 h-28 rounded-full bg-cosmic-gold/15 blur-3xl"
      />

      {/* Subtle line across */}
      <motion.div 
        style={{ opacity }}
        className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cosmic-violet/30 to-transparent"
      />
    </div>
  );
};

export default SectionTransition;
