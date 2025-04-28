"use client";
import TechBox from "@/components/TechBox";
export default function AboutMe() {
    return (
        <section className = "mx-50 my-10 flex gap-50">
            <div className = "justify-start flex flex-col flex-1">
                <h1 className = "text-3xl sm:text-5xl font-medium">
                    <p>About me</p>
                </h1>
                <p className = "mt-5 tracking-widest text-xl text-gray-300">
                I&apos;m a Full-Stack Software Developer with experience designing intuitive front-end interfaces and architecting robust, scalable back-end systems. Skilled in developing responsive web and mobile applications, crafting efficient APIs, and ensuring smooth user experiences. Passionate about building clean, reliable solutions and continuously growing technical skills while pursuing a Master&apos;s in Computer Science at Florida International University.


                </p>

                <p className = "mt-5 tracking-widest text-xl text-gray-300">
                    Techs I&apos;ve been using recently:
                </p>

                <div className = "flex flex-wrap gap-3 mt-5 max-w-xl">
                    <TechBox label="JavaScript"></TechBox>
                    <TechBox label="TypeScript"></TechBox>
                    <TechBox label="Python"></TechBox>
                    <TechBox label="Java"></TechBox>
                    <TechBox label="Node.js"></TechBox>
                    <TechBox label="Next.js"></TechBox>
                    <TechBox label="React & Native"></TechBox>
                    <TechBox label="Tailwind CSS"></TechBox>
                    <TechBox label="Express"></TechBox>
                    <TechBox label="SQL"></TechBox>
                    <TechBox label="MongoDB"></TechBox>
                    <TechBox label="Firebase"></TechBox>
                    
                </div>
                
                
            </div>
            <div>
                <p className = "text-center">click me!</p>
                <a href = "https://maps.app.goo.gl/43xtfk18TwrdGsfr6?g_st=ac" target="_blank" rel="noopener noreferrer">
                <img
                src = "/assets/me.jpg"
                className = "w-125 h-auto rounded-[100px]"
                alt = "Picture of me in Yellowstone"/>
                
                </a>
            </div>
        </section>
    );
}