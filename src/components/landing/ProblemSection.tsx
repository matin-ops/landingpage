import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const problems = [
  { text: "Constant stress or emotional exhaustion", symbol: "◇" },
  { text: "A \"monkey mind\" that won't switch off", symbol: "◈" },
  { text: "Difficulty sleeping or relaxing", symbol: "✧" },
  { text: "Feeling disconnected from your body", symbol: "◇" },
  { text: "Anxiety, overthinking, or inner restlessness", symbol: "◈" },
  { text: "A quiet sense that something is missing", symbol: "✧" }
];

const ProblemSection = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <section className="relative py-32 md:py-44" ref={containerRef}>
      {/* Floating cosmic orb */}
      <motion.div 
        style={{ rotate }}
        className="absolute top-20 right-[10%] w-64 h-64 opacity-20"
      >
        <div className="absolute inset-0 rounded-full border border-cosmic-violet/30" />
        <div className="absolute inset-4 rounded-full border border-cosmic-magenta/20" />
        <div className="absolute inset-8 rounded-full border border-cosmic-turquoise/30" />
      </motion.div>

      <div className="container mx-auto px-6" ref={ref}>
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 30, filter: "blur(10px)" }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center mb-20 font-medium tracking-wide"
          >
            <span className="text-gradient">Are You Experiencing</span>
            <br />
            <span className="text-foreground">Any of These?</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-20">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, filter: "blur(8px)" }}
                animate={isInView ? { opacity: 1, x: 0, filter: "blur(0px)" } : { opacity: 0, x: index % 2 === 0 ? -50 : 50, filter: "blur(8px)" }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.3 + index * 0.12,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="glass-panel p-6 md:p-8 group cursor-default"
              >
                <p className="text-foreground font-body text-lg flex items-start gap-4">
                  <motion.span 
                    className="text-cosmic-violet text-2xl mt-0.5"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                  >
                    {problem.symbol}
                  </motion.span>
                  {problem.text}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-center space-y-6"
          >
            <p className="font-display text-3xl md:text-4xl text-gradient font-medium">
              You are not broken.
            </p>
            <p className="text-xl text-muted-foreground font-body italic">
              Your body is wise — and it may be asking for deeper, safer reconnection.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
