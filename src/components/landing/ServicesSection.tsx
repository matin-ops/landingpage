import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  { icon: "✨", title: "Individual Sound Healing" },
  { icon: "✨", title: "Plant Medicine Guidance" },
  { icon: "✨", title: "Energy Balancing" },
  { icon: "✨", title: "Emotional Release Support" },
  { icon: "✨", title: "Spiritual Reconnection" }
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 bg-gradient-earth relative overflow-hidden" ref={ref}>
      {/* Decorative aurora band */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-aurora opacity-40" />

      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="font-display text-3xl md:text-4xl lg:text-5xl text-center mb-16 font-light"
          >
            Healing Sessions Available
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="glass-panel p-6 text-center group hover:shadow-aurora transition-all duration-500"
              >
                <motion.span 
                  className="text-2xl block mb-3"
                  whileHover={{ scale: 1.3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {service.icon}
                </motion.span>
                <h3 className="font-display text-lg text-foreground">{service.title}</h3>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center space-y-3"
          >
            <p className="text-muted-foreground font-light">
              Sessions available in-person and online.
            </p>
            <p className="text-foreground font-display text-lg italic">
              Each session is tailored to your needs.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Decorative aurora band */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-aurora opacity-40" />
    </section>
  );
};

export default ServicesSection;
