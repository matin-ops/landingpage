import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "I",
    title: "Begin",
    description: "Choose a time that feels right for you.",
    symbol: "☽"
  },
  {
    number: "II",
    title: "Receive",
    description: "We start with a short conversation, then move into sound and plant-based support.",
    symbol: "✧"
  },
  {
    number: "III",
    title: "Integrate",
    description: "You receive gentle guidance for after the session — so your body can keep unfolding in its own rhythm.",
    symbol: "☆"
  }
];

const StepsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 md:py-44" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1 }}
            className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center mb-24 font-medium tracking-wide"
          >
            <span className="text-cosmic-violet">Your Healing Journey</span>
            <br />
            <span className="text-foreground text-2xl md:text-3xl lg:text-4xl">in 3 Simple Steps</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-12 mb-20">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.3 + index * 0.2,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                className="text-center relative"
              >
                {/* Connecting cosmic line */}
                {index < steps.length - 1 && (
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ duration: 1, delay: 0.8 + index * 0.3 }}
                    className="hidden md:block absolute top-12 left-[60%] w-[80%] h-px bg-gradient-to-r from-cosmic-violet/50 via-cosmic-magenta/30 to-transparent origin-left"
                  />
                )}

                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-24 h-24 rounded-full glass-panel flex items-center justify-center mx-auto mb-8 relative"
                >
                  <span className="font-display text-3xl text-cosmic-violet font-medium">{step.number}</span>
                  <motion.span 
                    className="absolute -top-2 -right-2 text-2xl text-cosmic-gold"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    {step.symbol}
                  </motion.span>
                </motion.div>
                
                <h3 className="font-display text-2xl md:text-3xl mb-5 text-foreground tracking-wide">{step.title}</h3>
                <p className="text-muted-foreground font-body leading-relaxed text-lg">{step.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="text-center space-y-3"
          >
            <p className="font-display text-2xl text-cosmic-violet italic">No pressure. No rush.</p>
            <p className="text-muted-foreground font-body text-lg">Only presence and care.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
