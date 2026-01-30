import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const IntroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const paragraphs = [
    "You feel it.",
    "The tiredness.",
    "The emotional weight.",
    "The sense of living slightly outside yourself.",
    "Modern life can pull us away from our natural rhythm — away from the body, away from nature, away from inner knowing.",
    "You don't need to push harder.",
    "You need a different space. A softer world.",
    "A place where your system can exhale.",
    "I'm here to guide you back — gently, intuitively, in your own time."
  ];

  return (
    <section 
      id="journey" 
      className="relative py-24 md:py-32 bg-gradient-sky"
      ref={ref}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          {paragraphs.map((text, index) => {
            const isShort = text.length < 30;
            const isLast = index === paragraphs.length - 1;
            const isEmphasis = index === 4 || isLast;

            return (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.15,
                  ease: "easeOut"
                }}
                className={`
                  font-display leading-relaxed
                  ${isShort ? 'text-2xl md:text-3xl font-light mb-4' : 'text-lg md:text-xl text-muted-foreground mb-6'}
                  ${isEmphasis ? 'text-foreground' : ''}
                  ${isLast ? 'text-xl md:text-2xl italic text-sage-deep mt-8' : ''}
                `}
              >
                {text}
              </motion.p>
            );
          })}
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default IntroSection;
