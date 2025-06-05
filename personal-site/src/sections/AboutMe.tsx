"use client";
import TechBox from "@/components/TechBox";
export default function AboutMe() {
    return (
        <section className = "mx-20 my-10 flex gap-50">
            <div className = "justify-start flex flex-col flex-1">
                <h1 className = "text-3xl sm:text-5xl font-medium">
                    <p>About me</p>
                </h1>
                <p className = "mt-5 tracking-widest text-xl text-gray-300">
                Hello! I&apos;m a <strong>Computer Science</strong> grad student at <strong>FIU</strong> building full-stack web and mobile apps. I&apos;m currently working as a <strong>Full Stack Software Engineer Intern</strong> at <strong>Sports Excitement</strong>, where I contribute to the development of a social sports platform as part of an <strong>Agile Scrum</strong> team. I enjoy developing responsive interfaces and scalable APIs, and I&apos;m passionate about writing clean, reliable code.

                </p>

                <p className = "mt-5 tracking-widest text-xl text-gray-300">
                    Techs I&apos;ve been using recently:
                </p>

                <div className = "flex flex-wrap gap-3 mt-5 max-w-xl">
                    <TechBox label="JavaScript"></TechBox>
                    <TechBox label="TypeScript"></TechBox>
                    <TechBox label="Node.js"></TechBox>
                    <TechBox label="Next.js"></TechBox>
                    <TechBox label="React & Native"></TechBox>
                    <TechBox label="Tailwind CSS"></TechBox>
                    <TechBox label="Express"></TechBox>
                    <TechBox label="MongoDB"></TechBox>
                    <TechBox label="Firebase"></TechBox>
                </div>
                
            </div>
            <div>
  
                <img
                src = "/assets/me.jpg"
                className = "rounded-[100px]"
                alt = "Picture of me in Yellowstone"/>
                
            </div>
        </section>
    );
}