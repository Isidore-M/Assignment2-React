import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import HorizontalWrapper from "./components/HorizontalWrapper";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ProjectModal from "./components/ProjectModal";

// Define the Project type here or import it
interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tech: string[];
}

function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <main className="bg-[#B04627] font-sans selection:bg-white selection:text-[#B04627]">
      <Navbar /> 

      <HorizontalWrapper>
        <Hero />
        <About />
        {/* Pass the setter function to Projects */}
        <Projects onOpenProject={(proj) => setSelectedProject(proj)} />
        <Contact />
      </HorizontalWrapper>

      {/* MOVE THE MODAL HERE: Outside the wrapper */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </main>
  );
}

export default App;