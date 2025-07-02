import React, { useState } from "react";
import LeftSidebar from "./components/LeftSideBar";
import HeroSection from "./components/Hero";
import SkillsSection from "./components/Skills";
import ProjectsSection from "./components/Projects";
import ContactSection from "./components/Contact";
import AboutSection from "./components/About";
import ShootingStars from "./components/ShootingStars";
import { Toaster } from "react-hot-toast";

const App = () => {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="relative bg-[#111111] text-gray-200 font-sans flex min-h-screen overflow-hidden">
      {/* Shooting stars background behind everything */}

      {/* Main layout */}
      <div className="relative z-10 flex w-full h-full">
        <ShootingStars />
        <Toaster
          toastOptions={{
            className: "",
            style: {
              background: "#0cafebfe",
              color: "white",
            },
          }}
        />
        <LeftSidebar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
        <main className="flex-1 p-4 sm:p-8 md:p-12 lg:ml-24 overflow-y-auto">
          <div className="max-w-4xl mx-auto space-y-24 md:space-y-32">
            <HeroSection
              className="z-100"
              id="home"
              setActiveSection={setActiveSection}
            />
            <SkillsSection id="skills" />
            <ProjectsSection
              id="projects"
              setActiveSection={setActiveSection}
            />
            <AboutSection id="about" setActiveSection={setActiveSection} />
            <ContactSection id="contact" setActiveSection={setActiveSection} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
