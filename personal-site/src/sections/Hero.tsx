"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section className = "mx-50 my-20">
      <h1 className="text-4xl sm:text-7xl font-bold leading-tight">
        Ivan Figueroa
      </h1>
      <p className="mt-4 text-xl sm:text-4xl max-w-xl">
        Software Developer
      </p>
      {/* Social icons */}
      <div className="mt-6 flex gap-6 text-6xl">
        <a
          href="https://github.com/Ivan-codes99"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition-colors"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/IvanFigueroa1"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition-colors"
        >
          <FaLinkedin />
        </a>
      </div>

    </section>
  );
}
