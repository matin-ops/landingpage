import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import CosmicBackground from "./CosmicBackground";

const solutions = [
  { text: "Releasing stored tension (gently, not forcefully)", color: "cosmic-rose" },
  { text: "Balancing the nervous system", color: "cosmic-turquoise" },
  { text: "Returning from the mind into the body", color: "cosmic-violet" },
  { text: "Reconnecting with nature and inner guidance", color: "cosmic-gold" },
  { text: "Restoring your natural energy flow", color: "cosmic-magenta" }
];

const SolutionSection = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return (
    <section className="relative py-32 md:py-44 overflow-hidden" ref={containerRef}>
      <CosmicBackground intensity="medium" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-6 font-medium tracking-wide">
              <span className="text-cosmic-violet">A Holistic Healing</span>
              <br />
              <span className="text-foreground">Experience</span>
            </h2>
            <p className="font-display text-xl md:text-2xl text-muted-foreground italic">
              Rooted in Earth & Cosmos
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center text-lg md:text-xl text-muted-foreground mb-16 font-body"
          >
            I combine sound healing and plant medicine traditions to support you in:
          </motion.p>

          <div className="space-y-5 mb-20">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -60, filter: "blur(8px)" }}
                animate={isInView ? { opacity: 1, x: 0, filter: "blur(0px)" } : { opacity: 0, x: -60, filter: "blur(8px)" }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.4 + index * 0.12,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                whileHover={{ x: 10, scale: 1.01 }}
                className="glass-panel p-6 flex items-center gap-5 group"
              >
                <motion.div 
                  className={`w-12 h-12 rounded-full bg-${solution.color}/20 flex items-center justify-center shrink-0 border border-${solution.color}/30`}
                  whileHover={{ scale: 1.2, rotate: 180 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="text-foreground text-lg">✦</span>
                </motion.div>
                <p className="text-foreground font-body text-lg">{solution.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-center text-muted-foreground font-body italic text-lg"
          >
            Each session is personalized, slow, and held with deep respect for your boundaries and your pace.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
