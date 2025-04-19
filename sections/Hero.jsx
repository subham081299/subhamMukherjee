import React from "react";
import HeroImg from "../src/assets/subham.png";

const Hero = () => {
  return (
    <section id="home" className="h-screen flex items-center justify-center text-center">
      <div className="z-40 max-w-[800px] mx-auto space-y-6">
        {/* Profile Image */}
        <div>
          <img
            className="size-[140px] rounded-full mx-auto bg-gradient-to-r from-blue-600 to-purple-600 object-cover shadow-lg"
            src={HeroImg}
            alt="Subham Mukherjee"
          />
        </div>

        {/* Content */}
        <div>
          <h1 className="mb-4 text-4xl font-extrabold capitalize leading-[1.3] md:text-5xl">
            Building{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Seamless
            </span>{" "}
            Digital Experiences
          </h1>

          <p className="mb-6 text-gray-300 md:text-lg">
            As a passionate frontend developer, I design modern, interactive web applications that blend aesthetics with functionality. 
            My goal is to create intuitive, user-focused experiences that engage and inspire. Let's collaborate and bring great ideas to life!
          </p>

          <a
            href="#projects"
            className="bg-gradient-to-r from-blue-500 to-purple-600 inline-block text-white py-4 px-8 rounded-md text-lg font-semibold capitalize hover:scale-105 transition-transform duration-300">
            View My Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
