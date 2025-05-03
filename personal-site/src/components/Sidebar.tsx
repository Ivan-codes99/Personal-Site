"use client";

import { useState, useEffect } from "react";

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 } // Trigger when 60% of the section is visible
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <aside className="bg-slate-800 fixed top-0 left-0 h-full w-36 z-50 font-poppins shadow-lg">
      <nav className="flex flex-col items-start px-6 py-8 text-lg">
        

        {/* Navigation Links */}
        <div className="flex flex-col mt-25 gap-25">
          <a
            href="#about"
            className={`${
              activeSection === "about" ? "text-blue-400 font-bold  text-xl" : "text-gray-300"
            } hover:text-blue-400 transition-colors`}
          >
            About Me
          </a>
          <a
            href="#projects"
            className={`${
              activeSection === "projects" ? "text-blue-400 font-bold text-xl" : "text-gray-300"
            } hover:text-blue-400 transition-colors`}
          >
            Projects
          </a>
          <a
            href="#experience"
            className={`${
              activeSection === "experience" ? "text-blue-400 font-bold  text-xl" : "text-gray-300"
            } hover:text-blue-400 transition-colors`}
          >
            Experience
          </a>
        </div>
      </nav>
    </aside>
  );
}