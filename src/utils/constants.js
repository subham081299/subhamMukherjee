// project images
import Project1 from "../assets/chat-app.png";
import Project2 from "../assets/vidtube.png";

// skills images
import Html from "../assets/html5.svg";
import Css from "../assets/css.svg";
import Js from "../assets/javascript.svg";
import React from "../assets/react.svg";
import Java from "../assets/java-icon.svg";

import Tailwind from "../assets/tailwindcss.svg";


export const projects = [
  {
    id: 1,
    title: "Chat App",
    description:
      "Chat App is a real-time chat application built with React and Firebase. It allows users to create an account, and send messages in real-time. The app features a clean and modern design, making it easy to use and navigate.",
    image: Project1,
    stack: ["React", "Javascript", "CSS" , "Firebase"],
    liveUrl: "https://chat-app-chi-indol.vercel.app/",
    sourceUrl: "https://github.com/subham081299/chat-app",
  },

  {
    id: 2,
    title: "VidTube",
    description:
      "VidTube is a YouTube clone built with React. It allows users to  view video details, and watch videos. The app features a clean and modern design, making it easy to use and navigate.",
    image: Project2,
    stack: ["React", "CSS", "JavaScript"],
    liveUrl: "https://youtube-clone-six-pi.vercel.app/",
    sourceUrl: "https://github.com/subham081299/youtube-clone",
  },
];

export const skills = [
  {
    id: 1,
    name: "HTML",
    icon: Html,
  },

  {
    id: 2,
    name: "CSS",
    icon: Css,
  },

  {
    id: 3,
    name: "JavaScript",
    icon: Js,
  },

  {
    id: 4,
    name: "React",
    icon: React,
  },

  {
    id: 5,
    name: "Java",
    icon: Java,
  },

  {
    id: 6,
    name: "Tailwind",
    icon: Tailwind,
  },
];
