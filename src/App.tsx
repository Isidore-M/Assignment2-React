import Navbar from "./components/Navbar"; // Import the new Nav
import HorizontalWrapper from "./components/HorizontalWrapper";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <main className="bg-[#B04627] font-sans selection:bg-white selection:text-[#B04627]">
      {/* This stays fixed while everything else slides underneath */}
      <Navbar /> 

      <HorizontalWrapper>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </HorizontalWrapper>
    </main>
  );
}

export default App;