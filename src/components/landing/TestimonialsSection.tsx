import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    quote: "After my first session, I felt lighter than I had in years. My sleep improved, and I felt truly at peace.",
    name: "Anna"
  },
  {
    quote: "A deeply healing experience. I finally feel connected to myself again.",
    name: "Maria"
  },
  {
    quote: "Her work changed my life. Gentle, powerful, and full of love.",
    name: "Sophia"
  }
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="font-display text-3xl md:text-4xl lg:text-5xl text-center mb-16 font-light"
          >
            Words from the Heart
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                className="glass-panel p-8 relative"
              >
                {/* Quote mark */}
                <span className="absolute -top-3 left-6 text-5xl text-sage/30 font-display">"</span>
                
                <p className="text-foreground font-light leading-relaxed mb-6 mt-2 italic">
                  {testimonial.quote}
                </p>
                
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-sage-deep" />
                  <span className="font-display text-muted-foreground">{testimonial.name}</span>
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
