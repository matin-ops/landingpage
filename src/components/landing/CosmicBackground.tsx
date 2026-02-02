import { motion } from "framer-motion";

interface CosmicBackgroundProps {
  showFlowerOfLife?: boolean;
  intensity?: "light" | "medium" | "strong";
}

const CosmicBackground = ({ showFlowerOfLife = true, intensity = "medium" }: CosmicBackgroundProps) => {
  const opacityMap = {
    light: 0.03,
    medium: 0.06,
    strong: 0.1
  };

  const flowerOpacity = opacityMap[intensity];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Cosmic starfield gradient - blue cosmic sky */}
      <div className="absolute inset-0 bg-gradient-to-b from-cosmic-violet/8 via-cosmic-sky/5 to-cosmic-turquoise/8" />
      
      {/* Nebula clouds */}
      <motion.div
        animate={{ 
          scale: [1, 1.05, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-cosmic-violet/10 blur-[120px]"
      />
      <motion.div
        animate={{ 
          scale: [1, 1.08, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-cosmic-turquoise/8 blur-[100px]"
      />
      <motion.div
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.15, 0.3, 0.15]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 6 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-cosmic-magenta/5 blur-[150px]"
      />

      {/* Star particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white/60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      {/* Flower of Life - Sacred Geometry centered */}
      {showFlowerOfLife && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <motion.svg
            width="600"
            height="600"
            viewBox="0 0 600 600"
            className="w-[400px] h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px]"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            style={{ opacity: flowerOpacity }}
          >
            {/* Central circle */}
            <circle cx="300" cy="300" r="50" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-cosmic-violet" />
            
            {/* First ring of 6 circles */}
            {[0, 60, 120, 180, 240, 300].map((angle, i) => {
              const x = 300 + 50 * Math.cos((angle * Math.PI) / 180);
              const y = 300 + 50 * Math.sin((angle * Math.PI) / 180);
              return (
                <circle key={`ring1-${i}`} cx={x} cy={y} r="50" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-cosmic-violet" />
              );
            })}
            
            {/* Second ring of 12 circles */}
            {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => {
              const x = 300 + 86.6 * Math.cos((angle * Math.PI) / 180);
              const y = 300 + 86.6 * Math.sin((angle * Math.PI) / 180);
              return (
                <circle key={`ring2-${i}`} cx={x} cy={y} r="50" fill="none" stroke="currentColor" strokeWidth="0.4" className="text-cosmic-turquoise" />
              );
            })}
            
            {/* Third ring of 18 circles */}
            {[0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300, 320, 340].map((angle, i) => {
              const x = 300 + 130 * Math.cos((angle * Math.PI) / 180);
              const y = 300 + 130 * Math.sin((angle * Math.PI) / 180);
              return (
                <circle key={`ring3-${i}`} cx={x} cy={y} r="50" fill="none" stroke="currentColor" strokeWidth="0.3" className="text-cosmic-magenta" />
              );
            })}
            
            {/* Outer ring */}
            <circle cx="300" cy="300" r="200" fill="none" stroke="currentColor" strokeWidth="0.3" className="text-cosmic-gold" />
            <circle cx="300" cy="300" r="250" fill="none" stroke="currentColor" strokeWidth="0.2" className="text-cosmic-violet" />
          </motion.svg>
        </motion.div>
      )}
    </div>
  );
};

export default CosmicBackground;
