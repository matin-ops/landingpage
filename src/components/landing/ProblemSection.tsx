import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const problems = [
  "Constant stress or emotional exhaustion",
  "A \"monkey mind\" that won't switch off",
  "Difficulty sleeping or relaxing",
  "Feeling disconnected from your body",
  "Anxiety, overthinking, or inner restlessness",
  "A quiet sense that something is missing"
];

const ProblemSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="font-display text-3xl md:text-4xl lg:text-5xl text-center mb-16 font-light"
          >
            Are You Experiencing Any of These?
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-16">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="glass-panel p-5 md:p-6"
              >
                <p className="text-foreground font-light flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-lavender-deep/60 mt-2 shrink-0" />
                  {problem}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center space-y-4"
          >
            <p className="font-display text-2xl md:text-3xl text-foreground">
              You are not broken.
            </p>
            <p className="text-lg text-muted-foreground font-light">
              Your body is wise — and it may be asking for deeper, safer reconnection.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
