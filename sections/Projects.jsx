import React from "react";
import Title from "../src/components/Title";

import { Eye, Github } from "lucide-react";
import { projects } from "../src/utils/constants";



const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-[900px] mx-auto text-center">
        <Title
          title="My"
          highlight="Projects"
          subtitle="Explore some of the projects I've built, showcasing my expertise in frontend development."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 place-items-center">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-900 rounded-2xl overflow-hidden shadow-xl p-6">
              {/* Project Image */}
              <img
                className="w-full h-auto max-h-64 object-cover rounded-t-2xl"
                src={project.image}
                alt={project.title}
              />

              {/* Project Details */}
              <div className="mt-4">
                <h3 className="text-xl font-bold mb-3 text-white">{project.title}</h3>
                <p className="text-gray-300 line-clamp-3 mb-4">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((item) => (
                    <span key={item} className="px-3 py-1 bg-gray-800 text-white rounded-full text-sm">
                      {item}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-5 rounded-lg text-lg font-semibold capitalize hover:scale-105 transition-transform duration-300"
                  >
                    <Eye size={20} />
                    <span>Live</span>
                  </a>

                  <a
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white py-3 px-5 rounded-lg text-lg font-semibold capitalize hover:scale-105 transition-transform duration-300"
                  >
                    <Github size={20} />
                    <span>Source</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

