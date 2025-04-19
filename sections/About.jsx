import React from "react";
import Title from "../src/components/Title";
import dp from "../src/assets/dp.png";


const About = () => {
  return (
    <section id="about" className="pt-32 h-screen">
      <div className="container ">
        <div className=" md:grid md:grid-cols-2 md:gap-8 items-center">
          <div className="mb-8 md:mb-0">
            <img className="object-cover rounded-2xl" src={dp} alt="" />
          </div>
          <div>
            <Title title='about'  highlight='me' isCenter={false} subtitle='Get to know me better'/>
            <p className="leading-7">
              Hello! I'm a passionate frontend developer with a knack for creating
              beautiful and functional web applications. I love turning ideas into
              reality and constantly strive to improve my skills.
              </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
