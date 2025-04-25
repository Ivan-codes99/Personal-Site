
import AboutMe from "@/sections/AboutMe";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
export default function Home() {
  return (
    <>
      <Hero />
      <AboutMe />
      <Projects />
    </>
  );
}
//npx tailwindcss -i ./src/styles/globals.css -o ./src/styles/output.css --watch
