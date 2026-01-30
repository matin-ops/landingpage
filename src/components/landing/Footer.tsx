import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative py-16 overflow-hidden">
      {/* Cosmic gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cosmic-violet/40 to-transparent" />
      
      {/* Subtle nebula background */}
      <div className="absolute inset-0 bg-gradient-to-t from-cosmic-violet/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div 
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
          >
            <motion.span 
              className="text-3xl"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
            >
              ✧
            </motion.span>
            <span className="font-display text-xl text-foreground tracking-wide">Sacred Healing</span>
          </motion.div>

          <p className="text-muted-foreground font-body text-center italic">
            Honoring the wisdom of earth and cosmos
          </p>

          <p className="text-muted-foreground font-accent text-sm tracking-wider">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
