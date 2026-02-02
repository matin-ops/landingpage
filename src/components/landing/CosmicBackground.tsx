import { motion } from "framer-motion";
import { useMemo } from "react";

interface CosmicBackgroundProps {
  showFlowerOfLife?: boolean;
  intensity?: "light" | "medium" | "strong";
}

const CosmicBackground = ({ showFlowerOfLife = true, intensity = "medium" }: CosmicBackgroundProps) => {
  // Single consistent deep blue color for all sections
  const cosmicBlue = "#0a0a1a";
  
  const intensityConfig = {
    light: { 
      flowerOpacity: 0.35,
      starCount: 50
    },
    medium: { 
      flowerOpacity: 0.45,
      starCount: 70
    },
    strong: { 
      flowerOpacity: 0.55,
      starCount: 90
    }
  };

  const config = intensityConfig[intensity];
  
  // Generate stable star positions
  const stars = useMemo(() => {
    return [...Array(config.starCount)].map((_, i) => ({
      id: i,
      left: `${(i * 17 + 7) % 100}%`,
      top: `${(i * 23 + 11) % 100}%`,
      size: i % 3 === 0 ? 2.5 : i % 2 === 0 ? 2 : 1.5,
      duration: 2 + (i % 4),
      delay: (i % 5) * 0.5
    }));
  }, [config.starCount]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Single solid cosmic blue background - consistent across all sections */}
      <div 
        className="absolute inset-0" 
        style={{ backgroundColor: cosmicBlue }}
      />
      
      {/* Subtle cosmic glow overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-cosmic-violet/8 via-transparent to-cosmic-violet/8" />
      
      {/* Soft nebula clouds */}
      <motion.div
        animate={{ 
          scale: [1, 1.05, 1],
          opacity: [0.15, 0.25, 0.15]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-cosmic-violet/20 blur-[150px]"
      />
      <motion.div
        animate={{ 
          scale: [1, 1.08, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-cosmic-turquoise/15 blur-[120px]"
      />

      {/* Twinkling stars */}
      <div className="absolute inset-0">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{
              left: star.left,
              top: star.top,
              width: star.size,
              height: star.size,
            }}
            animate={{
              opacity: [0.5, 1, 0.5],
              scale: [0.8, 1.4, 0.8],
              boxShadow: [
                "0 0 3px 1px rgba(255,255,255,0.6)",
                "0 0 8px 3px rgba(255,255,255,0.9)",
                "0 0 3px 1px rgba(255,255,255,0.6)"
              ]
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              delay: star.delay,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Flower of Life - Sacred Geometry - Large, clear and visible */}
      {showFlowerOfLife && (
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.svg
            width="800"
            height="800"
            viewBox="0 0 600 600"
            className="w-[90vw] h-[90vw] max-w-[900px] max-h-[900px] md:w-[80vw] md:h-[80vw] lg:w-[70vw] lg:h-[70vw]"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
            style={{ opacity: config.flowerOpacity }}
          >
            {/* Central circle */}
            <circle cx="300" cy="300" r="50" fill="none" stroke="hsl(270, 80%, 75%)" strokeWidth="1.2" />
            
            {/* First ring of 6 circles */}
            {[0, 60, 120, 180, 240, 300].map((angle, i) => {
              const x = 300 + 50 * Math.cos((angle * Math.PI) / 180);
              const y = 300 + 50 * Math.sin((angle * Math.PI) / 180);
              return (
                <circle key={`ring1-${i}`} cx={x} cy={y} r="50" fill="none" stroke="hsl(270, 80%, 75%)" strokeWidth="1.1" />
              );
            })}
            
            {/* Second ring of 12 circles */}
            {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => {
              const x = 300 + 86.6 * Math.cos((angle * Math.PI) / 180);
              const y = 300 + 86.6 * Math.sin((angle * Math.PI) / 180);
              return (
                <circle key={`ring2-${i}`} cx={x} cy={y} r="50" fill="none" stroke="hsl(200, 80%, 65%)" strokeWidth="1" />
              );
            })}
            
            {/* Third ring of 18 circles */}
            {[0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300, 320, 340].map((angle, i) => {
              const x = 300 + 130 * Math.cos((angle * Math.PI) / 180);
              const y = 300 + 130 * Math.sin((angle * Math.PI) / 180);
              return (
                <circle key={`ring3-${i}`} cx={x} cy={y} r="50" fill="none" stroke="hsl(320, 75%, 70%)" strokeWidth="0.9" />
              );
            })}
            
            {/* Fourth ring of 24 circles */}
            {[0, 15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180, 195, 210, 225, 240, 255, 270, 285, 300, 315, 330, 345].map((angle, i) => {
              const x = 300 + 175 * Math.cos((angle * Math.PI) / 180);
              const y = 300 + 175 * Math.sin((angle * Math.PI) / 180);
              return (
                <circle key={`ring4-${i}`} cx={x} cy={y} r="50" fill="none" stroke="hsl(45, 90%, 70%)" strokeWidth="0.8" />
              );
            })}
            
            {/* Outer decorative rings */}
            <circle cx="300" cy="300" r="225" fill="none" stroke="hsl(270, 80%, 75%)" strokeWidth="0.7" />
            <circle cx="300" cy="300" r="275" fill="none" stroke="hsl(200, 80%, 65%)" strokeWidth="0.5" />
          </motion.svg>
        </div>
      )}
    </div>
  );
};

export default CosmicBackground;
