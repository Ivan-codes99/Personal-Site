"use client";

import projects from "../lib/project_data";
import ProjectSlide from "@/components/ProjectSlide";
import { RxDoubleArrowLeft, RxDoubleArrowRight } from "react-icons/rx";

export default function ProjectsSection() {
    return (
      <section className="mt-25">
        {projects.map((proj, i) => (
          <ProjectSlide key={i} {...proj} />
        ))}
      </section>
    );
  }