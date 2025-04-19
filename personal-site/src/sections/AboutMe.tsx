"use client";

export default function AboutMe() {
    return (
        <section className = "mt-20 px-50 flex gap-50">
            <div className = "justify-start flex flex-col flex-1">
                <h1 className = "text-3xl sm:text-5xl font-medium">
                    <p>About me</p>
                </h1>
                <p className = "pt-5 tracking-widest">
                    Hey! I’m a full-stack developer who enjoys building apps that are both useful and easy to use.
                    I’ve worked on everything from a smart recipe app called <em>CookEasy</em> to a speech-based sentiment model —
                    always with a focus on thoughtful design and real-world impact.
                </p>
                <p className = "tracking-widest">
                    <br/>
                Right now, I’m working toward my Master’s in Computer Science at FIU.
                Outside of coding, you’ll usually find me improving my 5k run time, lifting, experimenting in the kitchen,
                or trying to perfect my homemade ice cream game.
                </p>

            </div>
            <div className = "flex-shrink-0">
                <p className = "text-center">click me!</p>
                <a href = "https://maps.app.goo.gl/43xtfk18TwrdGsfr6?g_st=ac" target="_blank" rel="noopener noreferrer">
                <img
                src = "/assets/me.jpg"
                className = "w-150 h-auto rounded-[100px]"/>
                </a>
            </div>
        </section>
    );
}