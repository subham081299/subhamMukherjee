import React from 'react'
import Title from '../src/components/Title'
import { skills } from '../src/utils/constants'

const Skills = () => {
  return (
    <section id="skills" className="py-20 h-screen">
      <div className="max-w-[900px] mx-auto text-center">
        <Title title="My" highlight="Skills" subtitle="Here are some of the technologies I've worked with recently." />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:grid-cols-6">
          {skills.map((skill) => (
            <div key={skill.id} className="flex flex-col items-center gap-3">
              <img
                src={skill.icon}
                alt={skill.name}
                className="size-14 hover:-translate-y-3 transition-transform duration-300 ease-out md:size-16"
              />
              <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills
