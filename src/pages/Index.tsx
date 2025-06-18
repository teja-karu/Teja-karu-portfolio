
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import DataEngineeringShowcase from "@/components/DataEngineeringShowcase";
import DimensionalModeling from "@/components/DimensionalModeling";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="data-engineering">
        <DataEngineeringShowcase />
      </div>
      <div id="dimensional-modeling">
        <DimensionalModeling />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Index;
