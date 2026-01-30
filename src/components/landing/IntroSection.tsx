import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const IntroSection = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

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
      className="relative py-32 md:py-44"
      ref={containerRef}
    >
      {/* Cosmic nebula background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          style={{ y }}
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-cosmic-violet/10 blur-[100px]"
        />
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0, 1], [-30, 30]) }}
          className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-cosmic-turquoise/8 blur-[80px]"
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <div className="max-w-2xl mx-auto text-center">
          {paragraphs.map((text, index) => {
            const isShort = text.length < 30;
            const isLast = index === paragraphs.length - 1;
            const isEmphasis = index === 4 || isLast;

            return (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 40, filter: "blur(10px)" }}
                transition={{ 
                  duration: 1, 
                  delay: index * 0.2,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                className={`
                  leading-relaxed
                  ${isShort ? 'font-display text-2xl md:text-3xl lg:text-4xl font-medium tracking-wide mb-6' : 'font-body text-lg md:text-xl text-muted-foreground mb-8'}
                  ${isEmphasis ? 'text-foreground' : ''}
                  ${isLast ? 'text-xl md:text-2xl italic text-gradient mt-12 font-display' : ''}
                `}
              >
                {text}
              </motion.p>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
