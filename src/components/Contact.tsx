import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="relative flex h-screen min-w-[100vw] bg-white overflow-hidden">
      
      {/* 1. Left Side: Minimalist Form */}
      <div className="flex w-1/2 flex-col justify-center px-[8vw]">
        {/* Section Label */}
        <div className="mb-8 flex items-center gap-4">
          <span className="h-[1px] w-12 bg-black"></span>
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-black">
            03 / Connection
          </span>
        </div>

        <h2 className="text-[12vw] font-black uppercase font-display leading-[0.8] mb-12 tracking-tighter">
          Contact
        </h2>
        
        <form className="space-y-8 max-w-md">
          <div className="group relative">
            <label className="block font-mono text-[10px] text-gray-400 mb-1 group-focus-within:text-brandOrange transition-colors">NAME</label>
            <input 
              type="text" 
              className="w-full border-b border-gray-200 py-2 font-mono text-sm focus:outline-none focus:border-brandOrange transition-all bg-transparent"
              placeholder="ENTER YOUR NAME"
            />
          </div>

          <div className="group relative">
            <label className="block font-mono text-[10px] text-gray-400 mb-1 group-focus-within:text-brandOrange transition-colors">EMAIL</label>
            <input 
              type="email" 
              className="w-full border-b border-gray-200 py-2 font-mono text-sm focus:outline-none focus:border-brandOrange transition-all bg-transparent"
              placeholder="EMAIL@EXAMPLE.COM"
            />
          </div>

          <div className="group relative">
            <label className="block font-mono text-[10px] text-gray-400 mb-1 group-focus-within:text-brandOrange transition-colors">MESSAGE</label>
            <textarea 
              rows={3}
              className="w-full border-b border-gray-200 py-2 font-mono text-sm focus:outline-none focus:border-brandOrange transition-all bg-transparent resize-none"
              placeholder="TELL ME ABOUT YOUR PROJECT"
            />
          </div>

          <button className="relative mt-4 overflow-hidden group bg-black px-12 py-4 text-white font-mono text-[10px] uppercase tracking-[0.3em] transition-all hover:bg-brandOrange">
            <span className="relative z-10">Send Message —</span>
          </button>
        </form>
      </div>

      {/* 2. Right Side: Blueprint & Visuals */}
      <div className="relative w-1/2 overflow-hidden bg-gray-100">
        <img 
          src="/blueprint.jpg" 
          alt="Architectural drawing" 
          className="h-full w-full object-cover grayscale opacity-40 transition-transform duration-700 hover:scale-105"
        />
        
        {/* Color Overlay to match your brandOrange */}
        <div className="absolute inset-0 bg-brandOrange/5 mix-blend-multiply" />

        {/* Floating Location Tag (Bottom Right) */}
        <div className="absolute bottom-12 right-12 text-right">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-black/40 mb-2">Available for worldwide collaboration</p>
          <div className="flex items-center justify-end gap-3">
             <span className="font-mono text-sm font-bold uppercase tracking-widest text-black">Toronto, CAN</span>
             <div className="h-2 w-2 rounded-full bg-brandOrange animate-pulse" />
          </div>
        </div>
      </div>

    </section>
  );
};

export default Contact;