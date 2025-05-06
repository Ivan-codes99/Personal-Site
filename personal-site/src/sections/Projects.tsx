"use client";

import projects from "../lib/project_data";
import ProjectSlide from "@/components/Project/ProjectSlide";

export default function ProjectsSection() {
    return (
      <section id = "projects" className="mt-10 flex-col">
        <h1 className = "text-center text-3xl py-10 sm:text-5xl font-medium">
          <p>Projects</p>
        </h1>
        {projects.map((proj, i) => (
          <ProjectSlide key={i} {...proj} />
        ))}
      </section>
    );
  }