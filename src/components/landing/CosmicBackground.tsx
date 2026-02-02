import { motion } from "framer-motion";
import { useMemo } from "react";

interface CosmicBackgroundProps {
  showFlowerOfLife?: boolean;
  intensity?: "light" | "medium" | "strong";
}

const CosmicBackground = ({ showFlowerOfLife = true, intensity = "medium" }: CosmicBackgroundProps) => {
  const intensityConfig = {
    light: { 
      bgOpacity: 0.6,
      flowerOpacity: 0.12,
      starCount: 50
    },
    medium: { 
      bgOpacity: 0.75,
      flowerOpacity: 0.15,
      starCount: 70
    },
    strong: { 
      bgOpacity: 0.85,
      flowerOpacity: 0.18,
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
      size: i % 4 === 0 ? 2 : 1,
      duration: 2 + (i % 4),
      delay: (i % 6) * 0.4
    }));
  }, [config.starCount]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Soft violet-purple gradient matching hero banner */}
      <div 
        className="absolute inset-0"
        style={{
          background: `linear-gradient(
            180deg,
            hsla(270, 30%, 25%, ${config.bgOpacity}) 0%,
            hsla(280, 35%, 35%, ${config.bgOpacity * 0.9}) 25%,
            hsla(260, 40%, 40%, ${config.bgOpacity * 0.8}) 50%,
            hsla(275, 35%, 30%, ${config.bgOpacity * 0.85}) 75%,
            hsla(270, 30%, 22%, ${config.bgOpacity}) 100%
          )`
        }}
      />
      
      {/* Aurora/Northern lights effect - soft pink and teal */}
      <motion.div
        animate={{ 
          opacity: [0.15, 0.25, 0.15],
          x: [-20, 20, -20]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-[60%] h-[70%]"
        style={{
          background: 'radial-gradient(ellipse at 70% 20%, hsla(320, 60%, 70%, 0.2) 0%, transparent 50%)',
        }}
      />
      <motion.div
        animate={{ 
          opacity: [0.1, 0.2, 0.1],
          x: [10, -10, 10]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        className="absolute top-0 left-1/4 w-[50%] h-[60%]"
        style={{
          background: 'radial-gradient(ellipse at 30% 30%, hsla(175, 50%, 60%, 0.15) 0%, transparent 50%)',
        }}
      />

      {/* Soft cloud/mist layer at bottom */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-1/3"
        style={{
          background: 'linear-gradient(to top, hsla(30, 30%, 80%, 0.08) 0%, transparent 100%)',
        }}
      />

      {/* Twinkling stars */}
      <div className="absolute inset-0">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full"
            style={{
              left: star.left,
              top: star.top,
              width: star.size,
              height: star.size,
              backgroundColor: 'hsla(0, 0%, 100%, 0.9)',
            }}
            animate={{
              opacity: [0.3, 0.9, 0.3],
              scale: [0.8, 1.2, 0.8],
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

      {/* Flower of Life - Sacred Geometry - centered and subtle */}
      {showFlowerOfLife && (
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.svg
            width="800"
            height="800"
            viewBox="0 0 800 800"
            className="w-[90vw] h-[90vw] max-w-[700px] max-h-[700px] md:max-w-[800px] md:max-h-[800px]"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 300, repeat: Infinity, ease: "linear" }}
            style={{ opacity: config.flowerOpacity }}
          >
            {/* Central circle */}
            <circle cx="400" cy="400" r="60" fill="none" stroke="hsla(45, 40%, 85%, 0.6)" strokeWidth="0.8" />
            
            {/* First ring of 6 circles */}
            {[0, 60, 120, 180, 240, 300].map((angle, i) => {
              const x = 400 + 60 * Math.cos((angle * Math.PI) / 180);
              const y = 400 + 60 * Math.sin((angle * Math.PI) / 180);
              return (
                <circle key={`ring1-${i}`} cx={x} cy={y} r="60" fill="none" stroke="hsla(45, 40%, 85%, 0.5)" strokeWidth="0.7" />
              );
            })}
            
            {/* Second ring of 12 circles */}
            {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => {
              const x = 400 + 104 * Math.cos((angle * Math.PI) / 180);
              const y = 400 + 104 * Math.sin((angle * Math.PI) / 180);
              return (
                <circle key={`ring2-${i}`} cx={x} cy={y} r="60" fill="none" stroke="hsla(45, 40%, 85%, 0.4)" strokeWidth="0.6" />
              );
            })}
            
            {/* Third ring of 18 circles */}
            {[0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300, 320, 340].map((angle, i) => {
              const x = 400 + 160 * Math.cos((angle * Math.PI) / 180);
              const y = 400 + 160 * Math.sin((angle * Math.PI) / 180);
              return (
                <circle key={`ring3-${i}`} cx={x} cy={y} r="60" fill="none" stroke="hsla(45, 40%, 85%, 0.3)" strokeWidth="0.5" />
              );
            })}
            
            {/* Fourth ring of 24 circles */}
            {Array.from({ length: 24 }, (_, i) => i * 15).map((angle, i) => {
              const x = 400 + 220 * Math.cos((angle * Math.PI) / 180);
              const y = 400 + 220 * Math.sin((angle * Math.PI) / 180);
              return (
                <circle key={`ring4-${i}`} cx={x} cy={y} r="60" fill="none" stroke="hsla(45, 40%, 85%, 0.25)" strokeWidth="0.4" />
              );
            })}
            
            {/* Outer boundary circles */}
            <circle cx="400" cy="400" r="280" fill="none" stroke="hsla(45, 40%, 85%, 0.2)" strokeWidth="0.4" />
            <circle cx="400" cy="400" r="340" fill="none" stroke="hsla(45, 40%, 85%, 0.15)" strokeWidth="0.3" />
          </motion.svg>
        </div>
      )}
    </div>
  );
};

export default CosmicBackground;
