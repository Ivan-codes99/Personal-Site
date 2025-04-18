"use client";

export default function AboutMe() {
    return (
        <section className = "mt-20 pl-50 display: flex">
            <div className = "mr-150 flex flex-col">
                <h1 className = "text-3xl sm:text-5xl font-medium">
                    <p>About me</p>
                </h1>
                <p>
                    Hey! I’m a full-stack developer who enjoys building apps that are both useful and easy to use.
                    I’ve worked on everything from a smart recipe app called <em>CookEasy</em> to a speech-based sentiment model —
                    always with a focus on thoughtful design and real-world impact.
                </p>
                <p>
                Right now, I’m working toward my Master’s in Computer Science at FIU.
                Outside of coding, you’ll usually find me running, lifting, experimenting in the kitchen,
                or trying to perfect my homemade ice cream game.
                </p>

            </div>
        </section>
    );
}