import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const practices = [
  "Sacred sound frequencies",
  "Herbal and plant medicine",
  "Energy balancing practices",
  "Intuitive guidance"
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 bg-gradient-sky relative" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* Image placeholder - decorative circle */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2 flex justify-center"
            >
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-earth border-4 border-pearl shadow-aurora flex items-center justify-center">
                <div className="w-56 h-56 md:w-72 md:h-72 rounded-full bg-pearl/50 backdrop-blur-sm flex items-center justify-center">
                  <span className="text-6xl md:text-7xl">🌿</span>
                </div>
              </div>
            </motion.div>

            {/* Text content */}
            <div className="lg:col-span-3">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8 }}
                className="font-display text-3xl md:text-4xl lg:text-5xl mb-8 font-light"
              >
                Meet Your Healer
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg text-muted-foreground mb-8 font-light leading-relaxed"
              >
                I am a traditional medicine woman devoted to the wisdom of sound, plants, 
                and natural healing traditions.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-foreground mb-6 font-light"
              >
                For years, I have worked with:
              </motion.p>

              <div className="space-y-3 mb-8">
                {practices.map((practice, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-sage-deep" />
                    <span className="text-muted-foreground font-light">{practice}</span>
                  </motion.div>
                ))}
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-muted-foreground font-light leading-relaxed"
              >
                My work is guided by respect, compassion, and deep listening — to you and to nature.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="text-foreground font-display text-lg italic mt-6"
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
