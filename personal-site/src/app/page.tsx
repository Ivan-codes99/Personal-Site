
import AboutMe from "@/sections/AboutMe";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import Experience from "@/sections/Experience";
//TODO fix image sizing in projects section
//TODO stylize more the techBox/tags. Rename to skills. Stylize based on skill type
//TODO modify text content
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
