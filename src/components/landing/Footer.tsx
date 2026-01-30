import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-12 bg-pearl border-t border-sage/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🌿</span>
            <span className="font-display text-lg text-foreground">Sacred Healing</span>
          </div>

          <p className="text-muted-foreground font-light text-sm text-center">
            Honoring the wisdom of earth and cosmos
          </p>

          <p className="text-muted-foreground font-light text-sm">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
