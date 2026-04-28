import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // If we've scrolled more than 50px, we consider the user "off" the Hero
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (index: number) => {
    window.scrollTo({
      top: window.innerHeight * index,
      behavior: "smooth",
    });
  };

  return (
    <nav className={`fixed top-10 left-10 right-10 z-[100] flex items-center justify-between transition-colors duration-500 ${
      isScrolled ? "text-black mix-blend-difference" : "text-white"
    }`}>
      
      {/* HOME / LOGO */}
      <div 
        className="flex items-center gap-2 cursor-pointer group"
        onClick={() => scrollToSection(0)}
      >
        <span className="font-display text-2xl italic tracking-tighter transition-transform group-hover:scale-110">XT</span>
        <span className="font-mono text-[11px] uppercase tracking-widest">Alex Thorne</span>
      </div>

      {/* LINKS */}
      <div className="flex items-center gap-8 font-mono text-[11px] uppercase tracking-widest">
        <button onClick={() => scrollToSection(1)} className="hover:opacity-60 transition-opacity">About</button>
        <button onClick={() => scrollToSection(2)} className="hover:opacity-60 transition-opacity">Projects</button>
        <button 
          onClick={() => scrollToSection(3)}
          className={`group flex items-center gap-2 rounded-full border px-4 py-1 transition-all ${
            isScrolled ? "border-black hover:bg-black hover:text-white" : "border-white hover:bg-white hover:text-[#B04627]"
          }`}
        >
           <span>Contact</span>
           <div className={`h-2 w-2 rounded-full transition-colors ${
             isScrolled ? "bg-black group-hover:bg-white" : "bg-white group-hover:bg-[#B04627]"
           }`} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;