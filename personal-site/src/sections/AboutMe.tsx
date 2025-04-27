"use client";

export default function AboutMe() {
    return (
        <section className = "mx-50 my-10 flex gap-50">
            <div className = "justify-start flex flex-col flex-1">
                <h1 className = "text-3xl sm:text-5xl font-medium">
                    <p>About me</p>
                </h1>
                <p className = "pt-5 tracking-widest">
                I&apos;m a full-stack software developer with a passion for building clean, scalable solutions across the entire tech stack. I love designing intuitive user experiences on the front end and architecting robust, efficient systems on the back end. Whether I’m crafting responsive interfaces or developing server-side logic, I’m driven by a love for problem-solving and creating meaningful digital experiences.

                </p>
            </div>
            <div className = "flex-shrink-0">
                <p className = "text-center">click me!</p>
                <a href = "https://maps.app.goo.gl/43xtfk18TwrdGsfr6?g_st=ac" target="_blank" rel="noopener noreferrer">
                <img
                src = "/assets/me.jpg"
                className = "w-100 h-auto rounded-[100px]"/>
                </a>
            </div>
        </section>
    );
}