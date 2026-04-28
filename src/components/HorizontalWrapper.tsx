import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

const HorizontalWrapper: React.FC<Props> = ({ children }) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  // 1. Capture the raw scroll progress
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // 2. Add Spring Physics for that "Expensive" smooth feel
  // stiffness: 100 (tension), damping: 30 (friction), restDelta: 0.001 (precision)
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // 3. Map the smooth progress to the horizontal X-axis
  // -75% is perfect for your 4 sections (Hero, About, Projects, Contact)
  const x = useTransform(smoothProgress, [0, 1], ["0%", "-75%"]);

  return (
    /* The "Track": h-[400vh] provides the scrolling depth. 
       We use bg-white here so that as you move from the orange Hero 
       to the white About section, there's no orange "leak" at the edges.
    */
    <section ref={targetRef} className="relative h-[400vh] bg-white">
      
      {/* The "Window": sticky top-0 ensures the portfolio stays 
         in the user's face while they scroll through the 400vh track.
      */}
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        {/* The "Tray": This carries your sections. 
           'will-change-transform' is a CSS hint to the browser to 
           use the GPU for smoother movement.
        */}
        <motion.div 
          style={{ x }} 
          className="flex will-change-transform"
        >
          {children}
        </motion.div>
        
      </div>
    </section>
  );
};

export default HorizontalWrapper;