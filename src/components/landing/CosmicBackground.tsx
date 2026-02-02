import { motion } from "framer-motion";
import { useMemo } from "react";

interface CosmicBackgroundProps {
  showFlowerOfLife?: boolean;
  intensity?: "light" | "medium" | "strong";
}

const CosmicBackground = ({ showFlowerOfLife = true, intensity = "medium" }: CosmicBackgroundProps) => {
  const intensityConfig = {
    light: { 
      flowerOpacity: 0.25,
      starCount: 80
    },
    medium: { 
      flowerOpacity: 0.35,
      starCount: 120
    },
    strong: { 
      flowerOpacity: 0.45,
      starCount: 150
    }
  };

  const config = intensityConfig[intensity];
  
  // Generate stable star positions
  const stars = useMemo(() => {
    return [...Array(config.starCount)].map((_, i) => ({
      id: i,
      left: `${(i * 17 + 7) % 100}%`,
      top: `${(i * 23 + 11) % 100}%`,
      size: i % 5 === 0 ? 3 : i % 3 === 0 ? 2 : 1.5,
      duration: 2 + (i % 4),
      delay: (i % 5) * 0.5
    }));
  }, [config.starCount]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Soft violet/purple cosmic gradient - matching the hero reference */}
      <div 
        className="absolute inset-0" 
        style={{ 
          background: "linear-gradient(180deg, #2a1f3d 0%, #3d2a4f 25%, #4a3260 50%, #3d2a4f 75%, #2a1f3d 100%)"
        }}
      />
      
      {/* Soft purple/pink aurora glow - top right */}
      <div 
        className="absolute -top-20 -right-20 w-[600px] h-[600px] rounded-full blur-[150px]"
        style={{ 
          background: "radial-gradient(circle, rgba(200, 150, 200, 0.4) 0%, rgba(180, 130, 180, 0.2) 50%, transparent 70%)"
        }}
      />
      
      {/* Soft turquoise/teal glow - top left */}
      <div 
        className="absolute -top-10 -left-20 w-[500px] h-[500px] rounded-full blur-[120px]"
        style={{ 
          background: "radial-gradient(circle, rgba(100, 180, 180, 0.3) 0%, rgba(80, 150, 160, 0.15) 50%, transparent 70%)"
        }}
      />
      
      {/* Golden/warm glow at bottom */}
      <motion.div
        animate={{ 
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-1/4 w-[800px] h-[300px] blur-[100px]"
        style={{ 
          background: "radial-gradient(ellipse, rgba(180, 150, 120, 0.4) 0%, rgba(160, 130, 100, 0.2) 50%, transparent 70%)"
        }}
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

      {/* Flower of Life - Sacred Geometry - Soft and ethereal like in reference */}
      {showFlowerOfLife && (
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.svg
            width="800"
            height="800"
            viewBox="0 0 600 600"
            className="w-[100vw] h-[100vw] max-w-[1000px] max-h-[1000px] md:w-[90vw] md:h-[90vw] lg:w-[80vw] lg:h-[80vw]"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 300, repeat: Infinity, ease: "linear" }}
            style={{ opacity: config.flowerOpacity }}
          >
            {/* Central circle */}
            <circle cx="300" cy="300" r="50" fill="none" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="0.8" />
            
            {/* First ring of 6 circles */}
            {[0, 60, 120, 180, 240, 300].map((angle, i) => {
              const x = 300 + 50 * Math.cos((angle * Math.PI) / 180);
              const y = 300 + 50 * Math.sin((angle * Math.PI) / 180);
              return (
                <circle key={`ring1-${i}`} cx={x} cy={y} r="50" fill="none" stroke="rgba(255, 255, 255, 0.55)" strokeWidth="0.7" />
              );
            })}
            
            {/* Second ring of 12 circles */}
            {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => {
              const x = 300 + 86.6 * Math.cos((angle * Math.PI) / 180);
              const y = 300 + 86.6 * Math.sin((angle * Math.PI) / 180);
              return (
                <circle key={`ring2-${i}`} cx={x} cy={y} r="50" fill="none" stroke="rgba(255, 255, 255, 0.5)" strokeWidth="0.6" />
              );
            })}
            
            {/* Third ring of 18 circles */}
            {[0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300, 320, 340].map((angle, i) => {
              const x = 300 + 130 * Math.cos((angle * Math.PI) / 180);
              const y = 300 + 130 * Math.sin((angle * Math.PI) / 180);
              return (
                <circle key={`ring3-${i}`} cx={x} cy={y} r="50" fill="none" stroke="rgba(255, 255, 255, 0.45)" strokeWidth="0.5" />
              );
            })}
            
            {/* Fourth ring of 24 circles */}
            {[0, 15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180, 195, 210, 225, 240, 255, 270, 285, 300, 315, 330, 345].map((angle, i) => {
              const x = 300 + 175 * Math.cos((angle * Math.PI) / 180);
              const y = 300 + 175 * Math.sin((angle * Math.PI) / 180);
              return (
                <circle key={`ring4-${i}`} cx={x} cy={y} r="50" fill="none" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="0.4" />
              );
            })}
            
            {/* Outer decorative rings */}
            <circle cx="300" cy="300" r="225" fill="none" stroke="rgba(255, 255, 255, 0.35)" strokeWidth="0.4" />
            <circle cx="300" cy="300" r="275" fill="none" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="0.3" />
          </motion.svg>
        </div>
      )}
    </div>
  );
};

export default CosmicBackground;
