
import AboutMe from "@/sections/AboutMe";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import Experience from "@/sections/Experience";
export default function Home() {
  return (
    <>
      <Hero />
      <AboutMe />
      <Projects />
      <Experience />
    </>
  );
}
//npx tailwindcss -i ./src/styles/globals.css -o ./src/styles/output.css --watch
