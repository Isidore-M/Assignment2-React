import React from 'react';
import { motion } from 'framer-motion';

// 1. Defining the Project Interface for TypeScript safety
interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tech: string[];
}

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  return (
    <motion.div 
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "100%" }}
      transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
      /* FIX: z-[9999] is mandatory here. Since this component now lives 
         in App.tsx, this ensures it slides OVER the Navbar and everything else.
      */
      className="fixed inset-0 z-[9999] bg-white overflow-y-auto"
    >
      {/* 2. Close Button - Floating & Fixed to the window */}
      <button 
        onClick={onClose}
        className="fixed top-10 right-10 z-[10000] bg-black text-white h-14 w-14 rounded-full flex items-center justify-center font-mono text-[10px] uppercase tracking-widest transition-transform hover:scale-110 active:scale-95 shadow-xl"
      >
        Close
      </button>

      {/* 3. Main Content Wrapper */}
      <div className="relative w-full px-[8vw] py-[12vh]">
        
        {/* Header Section */}
        <header className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <span className="font-mono text-xs text-[#B04627] uppercase tracking-[0.4em] font-bold">
              {project.id} / Case Study
            </span>
          </div>
          
          <h2 className="text-[8vw] font-black uppercase font-display leading-[0.9] tracking-tighter mb-16 text-black">
            {project.title}
          </h2>

          {/* Cinematic Image Container */}
          <div className="aspect-video w-full overflow-hidden bg-gray-100 shadow-2xl rounded-sm">
             <img 
               src={project.image} 
               alt={project.title} 
               className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105" 
             />
          </div>
        </header>

        {/* 4. Project Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 mb-32">
          <div className="col-span-1">
            <h3 className="font-mono text-[10px] uppercase tracking-widest text-gray-400 mb-8 border-b border-gray-100 pb-4">
              Technologies
            </h3>
            <ul className="space-y-3">
              {project.tech.map((t) => (
                <li key={t} className="font-mono text-sm uppercase tracking-wider text-black flex items-center gap-2">
                  <span className="h-1 w-1 bg-[#B04627] rounded-full" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="col-span-2">
            <h3 className="font-mono text-[10px] uppercase tracking-widest text-gray-400 mb-8 border-b border-gray-100 pb-4">
              Project Objective
            </h3>
            <p className="text-3xl font-light leading-snug text-black uppercase font-mono tracking-tighter max-w-3xl">
              {project.description} This exploration focuses on the harmony between user interface aesthetics and structural reliability. 
              We leveraged {project.tech[0]} and {project.tech[1]} to create a high-performance experience.
            </p>
          </div>
        </div>

        {/* 5. The "Blueprint" Divider Line */}
        <div className="w-full h-[1px] bg-gray-200 relative mb-20">
           <div className="absolute left-0 top-[-3.5px] h-2 w-2 rounded-full bg-[#B04627]" />
           <div className="absolute right-0 top-[-3.5px] h-2 w-2 rounded-full bg-[#B04627]" />
        </div>

        {/* 6. Footer Information */}
        <footer className="pb-10 flex justify-between items-center opacity-40">
          <p className="font-mono text-[9px] uppercase tracking-widest text-black">
            © 2026 Alex Thorne / Architecting the Web
          </p>
          <p className="font-mono text-[9px] uppercase tracking-widest text-black">
            Toronto / Ontario
          </p>
        </footer>
      </div>
    </motion.div>
  );
};

export default ProjectModal;