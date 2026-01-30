import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  { icon: "◇", title: "Individual Sound Healing", color: "cosmic-violet" },
  { icon: "✧", title: "Plant Medicine Guidance", color: "cosmic-turquoise" },
  { icon: "☽", title: "Energy Balancing", color: "cosmic-magenta" },
  { icon: "❋", title: "Emotional Release Support", color: "cosmic-rose" },
  { icon: "☆", title: "Spiritual Reconnection", color: "cosmic-gold" }
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 md:py-44 overflow-hidden" ref={ref}>
      {/* Cosmic gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cosmic-violet/5 via-transparent to-cosmic-magenta/5" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1 }}
            className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center mb-20 font-medium tracking-wide text-gradient"
          >
            Healing Sessions Available
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, rotateX: 15 }}
                animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 40, rotateX: 15 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.2 + index * 0.12,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                whileHover={{ y: -12, scale: 1.03 }}
                className="glass-panel p-8 text-center group"
              >
                <motion.span 
                  className="text-4xl block mb-5"
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.15, 1]
                  }}
                  transition={{ 
                    duration: 5, 
                    repeat: Infinity, 
                    delay: index * 0.5 
                  }}
                >
                  {service.icon}
                </motion.span>
                <h3 className="font-display text-xl text-foreground tracking-wide">{service.title}</h3>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-center space-y-4"
          >
            <p className="text-muted-foreground font-body text-lg">
              Sessions available in-person and online.
            </p>
            <p className="text-foreground font-display text-xl italic">
              Each session is tailored to your needs.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
