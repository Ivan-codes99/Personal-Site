"use client";
import experience from "../lib/experience_data";
import ExperienceCard from "@/components/ExperienceCard";


export default function ExperienceSection() {
    return (
      <section className="mt-25 flex-col mx-25">
        <h1 className = "text-center text-3xl py-10 sm:text-5xl font-medium">
          <p>Experience and Involvement</p>
        </h1>
        {experience.map((exp, i) => (
          <ExperienceCard key={i} {...exp} />
        ))}
      </section>
    );
  }