import React,{useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

import html from "../assets/skills/html.png";
import css from "../assets/skills/css.png";
import javascript from "../assets/skills/javascript.png";
import reactImage from "../assets/skills/react.png";
import cplus from "../assets/skills/C++.png"
import github from "../assets/skills/github.png";
import tailwind from "../assets/skills/tailwind.png";

const Skills = () => {
  const techs = [
    {
        id: 1,
        src: cplus,
        title: "C++",
        style: "shadow-blue-500",
    },
    {
      id: 2,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 3,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 4,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 5,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 6,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 7,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration:"1000"
    });
  }, [])

  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-b1 to-b2 w-full"
    >
      <div className="max-w-screen-lg p-4 pt-20 pb-20 mx-auto flex flex-col justify-center w-full h-full text-cyan">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 inline">
            Skills
          </p>
          <p data-aos="fade-right" data-aos-delay="200" className="py-6 text-white">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8  px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              data-aos="zoom-in"
              data-aos-delay="500"
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;