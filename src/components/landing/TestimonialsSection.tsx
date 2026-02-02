import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import CosmicBackground from "./CosmicBackground";

const testimonials = [
  {
    quote: "After my first session, I felt lighter than I had in years. My sleep improved, and I felt truly at peace.",
    name: "Anna",
    symbol: "✧"
  },
  {
    quote: "A deeply healing experience. I finally feel connected to myself again.",
    name: "Maria",
    symbol: "☽"
  },
  {
    quote: "Her work changed my life. Gentle, powerful, and full of love.",
    name: "Sophia",
    symbol: "☆"
  }
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 md:py-44" ref={ref}>
      <CosmicBackground intensity="medium" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1 }}
            className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center mb-20 font-medium tracking-wide text-cosmic-violet"
          >
            Words from the Heart
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-10">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.95 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.3 + index * 0.15,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                whileHover={{ y: -8 }}
                className="glass-panel p-10 relative"
              >
                {/* Cosmic quote mark */}
                <motion.span 
                  className="absolute -top-4 left-8 text-5xl text-cosmic-violet font-display"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 6, repeat: Infinity }}
                >
                  "
                </motion.span>
                
                <p className="text-foreground font-body leading-relaxed mb-8 mt-4 italic text-lg">
                  {testimonial.quote}
                </p>
                
                <div className="flex items-center gap-4">
                  <motion.span 
                    className="text-2xl text-cosmic-violet"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    {testimonial.symbol}
                  </motion.span>
                  <span className="font-display text-muted-foreground text-lg tracking-wide">{testimonial.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
