import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="relative flex h-screen min-w-[100vw] items-center bg-white px-[10vw] overflow-hidden">
      
      {/* 1. ARCHITECTURAL LABEL (Top Left) */}
      <div className="absolute top-12 left-[10vw] flex items-center gap-4">
        <span className="h-[1px] w-12 bg-black"></span>
        <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-black">
          01 / Philosophy
        </span>
      </div>

      <div className="flex w-full items-center justify-between gap-20">
        
        {/* 2. LEFT SIDE: Text Content */}
        <div className="flex-1 max-w-2xl">
          <h2 className="text-[10vw] font-black leading-[0.8] text-black uppercase font-display tracking-tighter mb-12">
            About
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <p className="text-[11px] leading-loose text-gray-800 font-mono uppercase tracking-widest">
              I specialize in bridging the gap between complex engineering and elegant design. 
              My approach is rooted in the belief that digital spaces should be as 
              meticulously planned as physical architecture.
            </p>
            <p className="text-[11px] leading-loose text-gray-400 font-mono uppercase tracking-widest">
              Currently focused on React ecosystems and high-performance motion design, 
              I help brands build digital flagships that are not just functional, 
              but unforgettable experiences.
            </p>
          </div>
        </div>

        {/* 3. RIGHT SIDE: The Designer Photo */}
        <div className="relative h-[60vh] w-[30vw] overflow-hidden bg-gray-100 group">
          {/* Subtle Border Overlay */}
          <div className="absolute inset-0 z-10 border-[15px] border-white transition-all duration-500 group-hover:border-[10px]" />
          
          {/* Designer Image - Ensure you have designer-about.jpg in /public */}
          <img 
            src="/designer-about.jpg" 
            alt="Alex Thorne at work" 
            className="h-full w-full object-cover grayscale transition-transform duration-700 group-hover:scale-110 group-hover:grayscale-0"
          />
          
          {/* Floating Caption */}
          <div className="absolute bottom-6 left-6 z-20">
            <p className="font-mono text-[9px] uppercase tracking-widest text-white drop-shadow-md">
              Toronto / Studio 2026
            </p>
          </div>
        </div>

      </div>

      {/* Background Accent Text */}
      <div className="absolute bottom-[-5vw] right-[5vw] select-none text-[20vw] font-black text-gray-50 uppercase font-display pointer-events-none">
        Logic
      </div>
      
    </section>
  );
};

export default About;