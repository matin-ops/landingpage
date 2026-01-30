import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const solutions = [
  "Releasing stored tension (gently, not forcefully)",
  "Balancing the nervous system",
  "Returning from the mind into the body",
  "Reconnecting with nature and inner guidance",
  "Restoring your natural energy flow"
];

const SolutionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 bg-gradient-earth relative overflow-hidden" ref={ref}>
      {/* Decorative aurora band */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-aurora opacity-30" />

      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-4 font-light">
              A Holistic Healing Experience
            </h2>
            <p className="font-display text-xl md:text-2xl text-muted-foreground italic">
              Rooted in Earth & Cosmos
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center text-lg text-muted-foreground mb-12 font-light"
          >
            I combine sound healing and plant medicine traditions to support you in:
          </motion.p>

          <div className="space-y-4 mb-16">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-pearl/50 backdrop-blur-sm"
              >
                <div className="w-8 h-8 rounded-full bg-sage/50 flex items-center justify-center shrink-0">
                  <span className="text-sage-deep text-lg">✦</span>
                </div>
                <p className="text-foreground font-light">{solution}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-center text-muted-foreground font-light italic"
          >
            Each session is personalized, slow, and held with deep respect for your boundaries and your pace.
          </motion.p>
        </div>
      </div>

      {/* Decorative aurora band */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-aurora opacity-30" />
    </section>
  );
};

export default SolutionSection;
