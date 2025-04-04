import React, { useState, useEffect } from "react";
import "./index.css";
import HomePage from "./Components/HomePage";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Education from "./Components/Education";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id); // Update active section on click
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [" ","about", "skills", "education", "project", "contact"];
      const scrollPosition = window.scrollY;

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (
          section.offsetTop <= scrollPosition + 100 &&
          section.offsetTop + section.offsetHeight > scrollPosition
        ) {
          setActiveSection(id); // Dynamically update the active section
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup on unmount
    };
  }, []);

  return (
    <div >
      <header className="shadow sticky top-0 z-50">
        <nav className="bg-white border-gray-500 px-4 lg:px-6 py-2.5">
          <div className="flex items-center justify-around">
            <div className="flex items-center pr-96">
              <img
                className="h-14 w-12"
                src="https://thumbs.dreamstime.com/b/initial-letter-logo-line-unique-modern-da-to-dz-153779134.jpg"
                alt="Logo"
              />
              <p className="text-neutral-900 font-serif font-bold">
                <span className="text-orange-600">D</span>ipak
              </p>
            </div>
            <div className="flex justify-between">
              {[" ","about", "skills", "education", "project", "contact"].map((section) => (
                <a
                  key={section}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault(); // Prevent default anchor behavior
                    scrollToSection(section);
                  }}
                  className={`${
                    activeSection === section ? "text-orange-700" : "text-gray-800"
                  } hover:text-orange-700 mr-6 font-medium`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </header>

      {/* Sections */}
      <section id=" " className="section items-center pt-20">
        <HomePage/>
      </section>
      <section id="about" className="section items-center pt-36">
        <About/>
      </section>
      <section id="skills" className="section items-center pt-32">
        <Skills/>
      </section>
      <section id="education" className="section items-center pt-36 mb-12">
        <Education/>
      </section>
      <section id="project" className="section items-center pt-36">
        <Projects/>
      </section>
      <section id="contact" className="section  items-center pt-36">
        <Contact/>
      </section>
      <section className="mt-36">
        <p className=" mb-0 pb-0 text-neutral-600">Copyright © 2024 Dipak Ghuge. All Rights Reserved.</p>
      </section>
    </div>
  );
}
