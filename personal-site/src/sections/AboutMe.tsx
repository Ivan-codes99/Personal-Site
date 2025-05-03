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
                Hello! I&apos;m a Computer Science grad student at FIU building full-stack web and mobile apps. I enjoy developing responsive interfaces and scalable APIs, and I&apos;m passionate about writing clean, reliable code. I&apos;m currently seeking a software engineering internship where I can learn from real world experience and contribute to impactful products.

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
                <a href = "https://maps.app.goo.gl/43xtfk18TwrdGsfr6?g_st=ac" target="_blank" rel="noopener noreferrer">
                <img
                src = "/assets/me.jpg"
                className = "rounded-[100px]"
                alt = "Picture of me in Yellowstone"/>
                
                </a>
            </div>
        </section>
    );
}