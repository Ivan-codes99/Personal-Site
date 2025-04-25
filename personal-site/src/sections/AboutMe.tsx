"use client";

export default function AboutMe() {
    return (
        <section className = "mt-20 px-50 flex gap-50">
            <div className = "justify-start flex flex-col flex-1">
                <h1 className = "text-3xl sm:text-5xl font-medium">
                    <p>About me</p>
                </h1>
                <p className = "pt-5 tracking-widest">
                I love building responsive, user-friendly interfaces with HTML, CSS, JavaScript, and TypeScript. I mostly work with React, React Native, Next.js, and Tailwind CSS to create clean layouts that work well on both web and mobile. I’m always learning new design patterns and leveling up my frontend skills through hands-on projects.

                </p>
                <p className = "tracking-widest">
                    <br/>
                    On the backend, I use Node.js and Express with JavaScript and MongoDB to build APIs and handle data. I’ve worked on things like user authentication, database integration, and making sure everything runs securely and smoothly. Postman is my go-to tool for testing endpoints and making sure the frontend and backend stay in sync.

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