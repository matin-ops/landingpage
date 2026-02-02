import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const practices = [
  { text: "Sacred sound frequencies", symbol: "◇" },
  { text: "Herbal and plant medicine", symbol: "✧" },
  { text: "Energy balancing practices", symbol: "❋" },
  { text: "Intuitive guidance", symbol: "☆" }
];

const AboutSection = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 180]);

  return (
    <section className="relative py-32 md:py-44" ref={containerRef}>
      <div className="container mx-auto px-6" ref={ref}>
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-16 items-center">
            {/* Cosmic mandala placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="lg:col-span-2 flex justify-center"
            >
              <div className="relative w-72 h-72 md:w-96 md:h-96">
                {/* Outer rotating ring */}
                <motion.div 
                  style={{ rotate }}
                  className="absolute inset-0 rounded-full border-2 border-cosmic-violet/30"
                />
                <motion.div 
                  style={{ rotate: useTransform(scrollYProgress, [0, 1], [0, -90]) }}
                  className="absolute inset-6 rounded-full border border-cosmic-magenta/20"
                />
                <motion.div 
                  style={{ rotate: useTransform(scrollYProgress, [0, 1], [0, 120]) }}
                  className="absolute inset-12 rounded-full border border-cosmic-turquoise/25"
                />
                
                {/* Inner glow */}
                <div className="absolute inset-16 rounded-full bg-gradient-to-br from-cosmic-violet/10 via-cosmic-magenta/5 to-cosmic-turquoise/10 backdrop-blur-sm flex items-center justify-center">
                  <motion.span 
                    className="text-6xl md:text-7xl"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  >
                    ✧
                  </motion.span>
                </div>

                {/* Floating particles around the mandala */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ 
                      rotate: [0, 360],
                    }}
                    transition={{ 
                      duration: 20 + i * 5, 
                      repeat: Infinity, 
                      ease: "linear",
                      delay: i * 2
                    }}
                    className="absolute inset-0"
                    style={{ transformOrigin: "center center" }}
                  >
                    <div 
                      className="absolute w-2 h-2 rounded-full bg-cosmic-gold/50"
                      style={{ 
                        top: `${10 + i * 5}%`, 
                        left: "50%",
                        transform: "translateX(-50%)"
                      }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Text content */}
            <div className="lg:col-span-3">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 1 }}
                className="font-display text-3xl md:text-4xl lg:text-5xl mb-10 font-medium tracking-wide text-cosmic-violet"
              >
                Meet Your Healer
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg md:text-xl text-muted-foreground mb-10 font-body leading-relaxed"
              >
                I am a traditional medicine woman devoted to the wisdom of sound, plants, 
                and natural healing traditions.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-foreground mb-8 font-body text-lg"
              >
                For years, I have worked with:
              </motion.p>

              <div className="space-y-4 mb-10">
                {practices.map((practice, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.12 }}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 group"
                  >
                    <motion.span 
                      className="text-cosmic-violet text-xl"
                      whileHover={{ rotate: 180, scale: 1.2 }}
                    >
                      {practice.symbol}
                    </motion.span>
                    <span className="text-muted-foreground font-body text-lg group-hover:text-foreground transition-colors">
                      {practice.text}
                    </span>
                  </motion.div>
                ))}
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="text-muted-foreground font-body leading-relaxed text-lg"
              >
                My work is guided by respect, compassion, and deep listening — to you and to nature.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="text-foreground font-display text-xl italic mt-8"
              >
                Every session is held in a safe, sacred, and supportive space.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
