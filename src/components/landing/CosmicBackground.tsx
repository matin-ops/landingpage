import { motion } from "framer-motion";
import { useMemo } from "react";

interface CosmicBackgroundProps {
  showFlowerOfLife?: boolean;
  intensity?: "light" | "medium" | "strong";
}

const CosmicBackground = ({ showFlowerOfLife = true, intensity = "medium" }: CosmicBackgroundProps) => {
  const intensityConfig = {
    light: { 
      flowerOpacity: 0.08,
      starCount: 120
    },
    medium: { 
      flowerOpacity: 0.12,
      starCount: 150
    },
    strong: { 
      flowerOpacity: 0.15,
      starCount: 180
    }
  };

  const config = intensityConfig[intensity];
  
  // Generate stable star positions - matching screenshot style (small white dots)
  const stars = useMemo(() => {
    return [...Array(config.starCount)].map((_, i) => ({
      id: i,
      left: `${(i * 17.3 + 7.1) % 100}%`,
      top: `${(i * 23.7 + 11.3) % 100}%`,
      size: i % 8 === 0 ? 2.5 : i % 3 === 0 ? 1.5 : 1,
      opacity: i % 5 === 0 ? 0.9 : 0.6,
      duration: 3 + (i % 5),
      delay: (i % 8) * 0.3
    }));
  }, [config.starCount]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Base gradient - soft pastel lilac to lavender blue */}
      <div 
        className="absolute inset-0"
        style={{
          background: `linear-gradient(
            180deg,
            hsl(270, 40%, 92%) 0%,
            hsl(265, 45%, 90%) 20%,
            hsl(255, 50%, 88%) 40%,
            hsl(245, 55%, 86%) 60%,
            hsl(240, 50%, 88%) 80%,
            hsl(250, 45%, 90%) 100%
          )`
        }}
      />
      
      {/* Soft aurora glow - pastel pink */}
      <div 
        className="absolute top-0 left-0 right-0 h-[60%]"
        style={{
          background: 'radial-gradient(ellipse 100% 60% at 50% 0%, hsla(300, 50%, 85%, 0.4) 0%, transparent 70%)',
        }}
      />
      
      {/* Secondary aurora - soft lavender */}
      <motion.div
        animate={{ 
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-[80%] h-[60%]"
        style={{
          background: 'radial-gradient(ellipse at 70% 20%, hsla(280, 60%, 88%, 0.5) 0%, transparent 60%)',
        }}
      />
      
      {/* Gentle blue accent glow */}
      <motion.div
        animate={{ 
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute bottom-0 left-0 w-[70%] h-[50%]"
        style={{
          background: 'radial-gradient(ellipse at 30% 80%, hsla(220, 60%, 85%, 0.4) 0%, transparent 60%)',
        }}
      />

      {/* Subtle floating light particles instead of stars */}
      <div className="absolute inset-0">
        {stars.slice(0, 40).map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full"
            style={{
              left: star.left,
              top: star.top,
              width: star.size * 1.5,
              height: star.size * 1.5,
              backgroundColor: `hsla(280, 40%, 75%, ${star.opacity * 0.4})`,
              boxShadow: `0 0 ${star.size * 3}px ${star.size}px hsla(280, 50%, 80%, 0.3)`,
            }}
            animate={{
              opacity: [star.opacity * 0.3, star.opacity * 0.6, star.opacity * 0.3],
            }}
            transition={{
              duration: star.duration + 2,
              repeat: Infinity,
              delay: star.delay,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Flower of Life - Sacred Geometry - centered and clearly visible */}
      {showFlowerOfLife && (
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.svg
            width="900"
            height="900"
            viewBox="0 0 900 900"
            className="w-[85vw] h-[85vw] max-w-[750px] max-h-[750px] md:max-w-[900px] md:max-h-[900px]"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 400, repeat: Infinity, ease: "linear" }}
            style={{ opacity: config.flowerOpacity }}
          >
            {/* Central circle */}
            <circle cx="450" cy="450" r="70" fill="none" stroke="hsla(280, 40%, 65%, 0.35)" strokeWidth="1" />
            
            {/* First ring of 6 circles */}
            {[0, 60, 120, 180, 240, 300].map((angle, i) => {
              const x = 450 + 70 * Math.cos((angle * Math.PI) / 180);
              const y = 450 + 70 * Math.sin((angle * Math.PI) / 180);
              return (
                <circle key={`ring1-${i}`} cx={x} cy={y} r="70" fill="none" stroke="hsla(280, 40%, 65%, 0.3)" strokeWidth="0.9" />
              );
            })}
            
            {/* Second ring of 12 circles */}
            {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => {
              const x = 450 + 121 * Math.cos((angle * Math.PI) / 180);
              const y = 450 + 121 * Math.sin((angle * Math.PI) / 180);
              return (
                <circle key={`ring2-${i}`} cx={x} cy={y} r="70" fill="none" stroke="hsla(280, 40%, 65%, 0.25)" strokeWidth="0.8" />
              );
            })}
            
            {/* Third ring of 18 circles */}
            {[0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300, 320, 340].map((angle, i) => {
              const x = 450 + 180 * Math.cos((angle * Math.PI) / 180);
              const y = 450 + 180 * Math.sin((angle * Math.PI) / 180);
              return (
                <circle key={`ring3-${i}`} cx={x} cy={y} r="70" fill="none" stroke="hsla(280, 40%, 65%, 0.2)" strokeWidth="0.7" />
              );
            })}
            
            {/* Fourth ring of 24 circles */}
            {Array.from({ length: 24 }, (_, i) => i * 15).map((angle, i) => {
              const x = 450 + 250 * Math.cos((angle * Math.PI) / 180);
              const y = 450 + 250 * Math.sin((angle * Math.PI) / 180);
              return (
                <circle key={`ring4-${i}`} cx={x} cy={y} r="70" fill="none" stroke="hsla(280, 40%, 65%, 0.15)" strokeWidth="0.6" />
              );
            })}
            
            {/* Fifth ring of 30 circles */}
            {Array.from({ length: 30 }, (_, i) => i * 12).map((angle, i) => {
              const x = 450 + 320 * Math.cos((angle * Math.PI) / 180);
              const y = 450 + 320 * Math.sin((angle * Math.PI) / 180);
              return (
                <circle key={`ring5-${i}`} cx={x} cy={y} r="70" fill="none" stroke="hsla(280, 40%, 65%, 0.12)" strokeWidth="0.5" />
              );
            })}
            
            {/* Outer boundary circles */}
            <circle cx="450" cy="450" r="320" fill="none" stroke="hsla(280, 40%, 65%, 0.1)" strokeWidth="0.5" />
            <circle cx="450" cy="450" r="390" fill="none" stroke="hsla(280, 40%, 65%, 0.08)" strokeWidth="0.4" />
          </motion.svg>
        </div>
      )}
    </div>
  );
};

export default CosmicBackground;
