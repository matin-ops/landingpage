import { motion } from "framer-motion";
import { useMemo } from "react";

interface CosmicBackgroundProps {
  showFlowerOfLife?: boolean;
  intensity?: "light" | "medium" | "strong";
}

const CosmicBackground = ({ showFlowerOfLife = true, intensity = "medium" }: CosmicBackgroundProps) => {
  const intensityConfig = {
    light: { 
      bgOpacity: "from-[#0a0a20]/30 via-[#1a1a40]/20 to-[#0a0a20]/30",
      flowerOpacity: 0.15,
      starCount: 40
    },
    medium: { 
      bgOpacity: "from-[#0a0a20]/50 via-[#1a1a40]/40 to-[#0a0a20]/50",
      flowerOpacity: 0.2,
      starCount: 60
    },
    strong: { 
      bgOpacity: "from-[#0a0a20]/70 via-[#1a1a40]/60 to-[#0a0a20]/70",
      flowerOpacity: 0.25,
      starCount: 80
    }
  };

  const config = intensityConfig[intensity];
  
  // Generate stable star positions
  const stars = useMemo(() => {
    return [...Array(config.starCount)].map((_, i) => ({
      id: i,
      left: `${(i * 17 + 7) % 100}%`,
      top: `${(i * 23 + 11) % 100}%`,
      size: i % 3 === 0 ? 2 : 1,
      duration: 2 + (i % 4),
      delay: (i % 5) * 0.5
    }));
  }, [config.starCount]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Deep cosmic blue sky gradient */}
      <div className={`absolute inset-0 bg-gradient-to-b ${config.bgOpacity}`} />
      
      {/* Additional cosmic blue overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-cosmic-violet/20 via-cosmic-sky/15 to-cosmic-turquoise/20" />
      
      {/* Nebula clouds */}
      <motion.div
        animate={{ 
          scale: [1, 1.05, 1],
          opacity: [0.4, 0.6, 0.4]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-cosmic-violet/15 blur-[120px]"
      />
      <motion.div
        animate={{ 
          scale: [1, 1.08, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-cosmic-turquoise/12 blur-[100px]"
      />
      <motion.div
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 6 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-cosmic-magenta/10 blur-[150px]"
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
              opacity: [0.4, 1, 0.4],
              scale: [0.8, 1.3, 0.8],
              boxShadow: [
                "0 0 2px 0px rgba(255,255,255,0.5)",
                "0 0 6px 2px rgba(255,255,255,0.8)",
                "0 0 2px 0px rgba(255,255,255,0.5)"
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

      {/* Flower of Life - Sacred Geometry centered */}
      {showFlowerOfLife && (
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.svg
            width="600"
            height="600"
            viewBox="0 0 600 600"
            className="w-[500px] h-[500px] md:w-[600px] md:h-[600px] lg:w-[700px] lg:h-[700px]"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
            style={{ opacity: config.flowerOpacity }}
          >
            {/* Central circle */}
            <circle cx="300" cy="300" r="50" fill="none" stroke="hsl(270, 70%, 70%)" strokeWidth="0.8" />
            
            {/* First ring of 6 circles */}
            {[0, 60, 120, 180, 240, 300].map((angle, i) => {
              const x = 300 + 50 * Math.cos((angle * Math.PI) / 180);
              const y = 300 + 50 * Math.sin((angle * Math.PI) / 180);
              return (
                <circle key={`ring1-${i}`} cx={x} cy={y} r="50" fill="none" stroke="hsl(270, 70%, 70%)" strokeWidth="0.7" />
              );
            })}
            
            {/* Second ring of 12 circles */}
            {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => {
              const x = 300 + 86.6 * Math.cos((angle * Math.PI) / 180);
              const y = 300 + 86.6 * Math.sin((angle * Math.PI) / 180);
              return (
                <circle key={`ring2-${i}`} cx={x} cy={y} r="50" fill="none" stroke="hsl(175, 70%, 55%)" strokeWidth="0.6" />
              );
            })}
            
            {/* Third ring of 18 circles */}
            {[0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300, 320, 340].map((angle, i) => {
              const x = 300 + 130 * Math.cos((angle * Math.PI) / 180);
              const y = 300 + 130 * Math.sin((angle * Math.PI) / 180);
              return (
                <circle key={`ring3-${i}`} cx={x} cy={y} r="50" fill="none" stroke="hsl(320, 75%, 65%)" strokeWidth="0.5" />
              );
            })}
            
            {/* Outer rings */}
            <circle cx="300" cy="300" r="200" fill="none" stroke="hsl(45, 90%, 65%)" strokeWidth="0.4" />
            <circle cx="300" cy="300" r="250" fill="none" stroke="hsl(270, 70%, 70%)" strokeWidth="0.3" />
          </motion.svg>
        </div>
      )}
    </div>
  );
};

export default CosmicBackground;
