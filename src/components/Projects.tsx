import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projectData = [
  {
    id: "01",
    title: "The Glass House",
    category: "Residential Architecture",
    description: "A study in transparency and light. This project explores the boundary between interior comfort and the raw beauty of nature.",
    image: "/project1.jpg",
    tech: ["React", "Three.js", "GSAP"]
  },
  {
    id: "02",
    title: "Urban Monolith",
    category: "Commercial Concept",
    description: "Redefining the workspace. A brutalist-inspired digital hub designed for maximum productivity and structural elegance.",
    image: "/project2.jpg",
    tech: ["TypeScript", "Tailwind", "Framer"]
  },
  {
    id: "03",
    title: "Echo Pavilion",
    category: "Public Space",
    description: "An interactive installation that uses motion sensors to translate human movement into generative soundscapes.",
    image: "/project3.jpg",
    tech: ["Web Audio API", "React", "SVG"]
  }
];

const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState(0);

  return (
    <section id="projects" className="relative flex h-screen min-w-[100vw] bg-white overflow-hidden">
      
      {/* 1. LEFT SIDE: Project Navigation & Info */}
      <div className="flex w-1/2 flex-col justify-between p-[6vw]">
        
        {/* Section Label */}
        <div className="flex items-center gap-4">
          <span className="h-[1px] w-12 bg-black"></span>
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-black">
            02 / Selected Works
          </span>
        </div>

        {/* Project Selector Menu */}
        <div className="space-y-4">
          <h2 className="text-[8vw] font-black uppercase font-display leading-[0.8] mb-12 tracking-tighter">
            Projects
          </h2>
          
          <div className="flex flex-col gap-2">
            {projectData.map((project, index) => (
              <button
                key={project.id}
                onClick={() => setActiveProject(index)}
                className={`group flex items-center justify-between rounded-full border px-8 py-5 transition-all duration-500 ${
                  activeProject === index 
                  ? "bg-black text-white" 
                  : "bg-transparent text-gray-400 border-gray-100 hover:border-black hover:text-black"
                }`}
              >
                <div className="flex items-center gap-6">
                  <span className="font-mono text-[10px] opacity-40">{project.id}</span>
                  <span className="font-mono text-sm uppercase tracking-[0.2em] font-bold">
                    {project.title}
                  </span>
                </div>
                
                {/* --- UPDATED INDICATOR DOT --- */}
                <div className="relative flex items-center justify-center">
                  {activeProject === index && (
                    <span className="absolute h-4 w-4 animate-ping rounded-full bg-[#B04627]/30" />
                  )}
                  <div className={`h-2.5 w-2.5 rounded-full transition-all duration-500 ${
                    activeProject === index ? "bg-[#B04627] scale-110" : "bg-gray-200"
                  }`} />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Description Area */}
        <div className="max-w-md">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {/* Category also updated to Terracotta hex */}
              <p className="font-mono text-[10px] text-[#B04627] uppercase tracking-widest mb-2 font-bold">
                {projectData[activeProject].category}
              </p>
              <p className="font-mono text-xs leading-relaxed text-gray-500 uppercase tracking-tight">
                {projectData[activeProject].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

   {/* 2. RIGHT SIDE: Full-Bleed Image Gallery */}
<div className="relative w-1/2 bg-[#f0f0f0] overflow-hidden">
  <AnimatePresence mode="wait" initial={false}>
    <motion.div
      key={activeProject}
      className="absolute inset-0"
      initial={{ x: "100%" }} // Starts off-screen to the right
      animate={{ x: 0 }}      // Slides in
      exit={{ x: "-100%" }}   // Slides out to the left
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }} // "Quartic" ease for luxury feel
    >
      {/* Dark tint overlay that fades out */}
      <motion.div 
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute inset-0 z-10 bg-black/20 pointer-events-none"
      />

      <motion.img
        src={projectData[activeProject].image}
        alt={projectData[activeProject].title}
        // Subtle scale-up animation while the slide happens
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="h-full w-full object-cover"
      />
    </motion.div>
  </AnimatePresence>

  {/* Floating Controls (Over the image) */}
  <div className="absolute bottom-12 right-12 z-20 flex gap-4">
    <button className="group relative flex items-center gap-4 overflow-hidden rounded-full bg-white/10 px-8 py-4 text-white backdrop-blur-xl border border-white/20 transition-all hover:bg-white hover:text-black">
      <span className="font-mono text-[10px] uppercase tracking-[0.3em]">View Case Study —</span>
    </button>
    
    {/* Navigation Arrows */}
    <div className="flex gap-2">
       <button 
         onClick={() => setActiveProject(prev => (prev > 0 ? prev - 1 : projectData.length - 1))}
         className="h-12 w-12 rounded-full border border-white/20 bg-white/5 text-white flex items-center justify-center backdrop-blur-sm hover:bg-white hover:text-black transition-all"
       >
          <span className="mb-0.5">←</span>
       </button>
       <button 
         onClick={() => setActiveProject(prev => (prev < projectData.length - 1 ? prev + 1 : 0))}
         className="h-12 w-12 rounded-full border border-white/20 bg-white/5 text-white flex items-center justify-center backdrop-blur-sm hover:bg-white hover:text-black transition-all"
       >
          <span className="mb-0.5">→</span>
       </button>
    </div>
  </div>
</div>

    </section>
  );
};

export default Projects;