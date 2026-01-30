import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const benefits = [
  { icon: "☽", text: "A calmer mind and quieter inner noise" },
  { icon: "✧", text: "Deeper rest and easier sleep" },
  { icon: "◇", text: "Grounding, presence, and body connection" },
  { icon: "❋", text: "Emotional spaciousness and clarity" },
  { icon: "✦", text: "A sense of being supported by something larger" },
  { icon: "☆", text: "Inspiration — a subtle remembering of who you are" }
];

const BenefitsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 md:py-44" ref={ref}>
      {/* Subtle cosmic particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              y: [0, -100, 0],
              x: [0, Math.sin(i) * 50, 0],
              opacity: [0, 0.6, 0]
            }}
            transition={{ 
              duration: 8 + i * 2, 
              repeat: Infinity, 
              delay: i * 1.5,
              ease: "easeInOut"
            }}
            className="absolute w-2 h-2 rounded-full bg-cosmic-gold/40"
            style={{ left: `${15 + i * 15}%`, bottom: "10%" }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1 }}
            className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center mb-20 font-medium tracking-wide text-gradient"
          >
            What You May Experience
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.2 + index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                whileHover={{ y: -10, scale: 1.03 }}
                className="glass-panel p-8 text-center group"
              >
                <motion.span 
                  className="text-4xl block mb-6 text-gradient"
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    delay: index * 0.3 
                  }}
                >
                  {benefit.icon}
                </motion.span>
                <p className="text-foreground font-body leading-relaxed text-lg">
                  {benefit.text}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-center space-y-4"
          >
            <p className="font-display text-2xl md:text-3xl text-foreground">
              Healing is not something I "do" to you.
            </p>
            <p className="text-xl text-muted-foreground font-body italic">
              It is something I help you remember within yourself.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
