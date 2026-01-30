import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const benefits = [
  { icon: "🌱", text: "A calmer mind and quieter inner noise" },
  { icon: "🌱", text: "Deeper rest and easier sleep" },
  { icon: "🌱", text: "Grounding, presence, and body connection" },
  { icon: "🌱", text: "Emotional spaciousness and clarity" },
  { icon: "🌱", text: "A sense of being supported by something larger" },
  { icon: "🌱", text: "Inspiration — a subtle remembering of who you are" }
];

const BenefitsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="font-display text-3xl md:text-4xl lg:text-5xl text-center mb-16 font-light"
          >
            What You May Experience
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="glass-panel p-6 text-center group hover:shadow-glow transition-shadow duration-500"
              >
                <motion.span 
                  className="text-3xl block mb-4"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {benefit.icon}
                </motion.span>
                <p className="text-foreground font-light leading-relaxed">
                  {benefit.text}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-center space-y-2"
          >
            <p className="font-display text-xl md:text-2xl text-foreground">
              Healing is not something I "do" to you.
            </p>
            <p className="text-lg text-muted-foreground font-light italic">
              It is something I help you remember within yourself.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
