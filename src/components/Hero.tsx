import React from 'react';

const Hero: React.FC = () => {
  /**
   * Manual Scroll Logic
   * Since our HorizontalWrapper is 400vh tall (4 sections),
   * index 0 = 0vh (Hero)
   * index 1 = 100vh (About)
   * index 2 = 200vh (Projects)
   * index 3 = 300vh (Contact)
   */

  return (
    <section id="hero" className="relative flex h-screen min-w-[100vw] flex-col items-center justify-center bg-[#B04627] overflow-hidden">
      

      {/* 2. BACKGROUND NAME */}
      <h1 className="absolute z-0 select-none text-[32vw] font-black text-[#F5F5F5] opacity-20 whitespace-nowrap uppercase font-display leading-none tracking-tighter">
        Aris Thorne
      </h1>

      {/* 3. HEADSHOT WITH BOTTOM-UP GRADIENT */}
      <div className="absolute bottom-0 left-1/2 z-10 h-[95vh] -translate-x-1/2 pointer-events-none flex items-end justify-center">
        <div className="relative h-full w-auto flex items-end">
          <img 
            src="/headshot.png" 
            alt="Aris Thorne" 
            className="h-full w-auto object-contain"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#B04627] via-[#B04627]/20 to-transparent" />
        </div>
      </div>

      {/* 4. CONTENT OVERLAY */}
      <div className="absolute bottom-12 z-20 flex flex-col items-center text-center text-white">
        
        {/* THE "AVAILABLE FOR PROJECTS" TAG */}
        <div className="mb-8 flex items-center gap-3 rounded-full border border-white/40 bg-white/5 px-4 py-1 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
          </span>
          <span className="font-mono text-[9px] uppercase tracking-[0.3em]">Available for projects</span>
        </div>

        <h2 className="text-3xl md:text-[45px] font-bold tracking-[0.3em] uppercase font-mono mb-6 leading-none">
          Creative Developer & UI Architect
        </h2>
        
        <p className="max-w-xl px-10 text-[10px] md:text-[11px] leading-relaxed uppercase font-mono tracking-[0.2em]">
          Engineering digital flagships through the lens of architectural precision. 
          Crafting high-performance React ecosystems for the modern web.
        </p>
      </div>

      {/* 5. SIDE SCROLL TEXT */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 rotate-90 hidden lg:block">
        <span className="font-mono text-[10px] uppercase tracking-[0.6em] text-white">
          Scroll to explore
        </span>
      </div>

    </section>
  );
};

export default Hero;