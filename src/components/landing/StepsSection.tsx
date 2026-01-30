import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "1",
    title: "Begin",
    description: "Choose a time that feels right for you."
  },
  {
    number: "2",
    title: "Receive",
    description: "We start with a short conversation, then move into sound and plant-based support."
  },
  {
    number: "3",
    title: "Integrate",
    description: "You receive gentle guidance for after the session — so your body can keep unfolding in its own rhythm."
  }
];

const StepsSection = () => {
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
            Your Healing Journey in 3 Simple Steps
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                className="text-center relative"
              >
                {/* Connecting line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-gradient-to-r from-sage/50 to-transparent" />
                )}

                <div className="w-16 h-16 rounded-full bg-gradient-earth border-2 border-sage/30 flex items-center justify-center mx-auto mb-6 shadow-soft">
                  <span className="font-display text-2xl text-sage-deep">{step.number}</span>
                </div>
                <h3 className="font-display text-2xl mb-4 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground font-light leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center space-y-2"
          >
            <p className="font-display text-xl text-foreground italic">No pressure. No rush.</p>
            <p className="text-muted-foreground font-light">Only presence and care.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
