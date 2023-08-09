import React,{useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

import weather from "../assets/Weather.jpeg";
import kisan from "../assets/Kisan.jpeg";
import shg from "../assets/SHG.jpeg";
import remine from "../assets/Remine.jpeg";
import zomato from "../assets/Zomato.jpeg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      src: weather,
      demolink: "https://weather-prediction-platform.vercel.app/",
      codelink: "https://github.com/Dharmi26/Weather-Prediction-platform",
    },
    {
      id: 2,
      src: kisan,
      demolink:"https://frontend-nine-ochre.vercel.app/",
      codelink:"https://github.com/guptaashwin9414/frontend",
    },
    {
      id: 3,
      src: shg,
      demolink:"https://drive.google.com/file/d/1EN15y4NxcDG8Ni_kAQL9SxopR5_UFP85/view?usp=sharing",
      codelink:"",
    },
    {
      id: 4,
      src: remine,
      demolink:"https://remine-india-git-master-dharmi26.vercel.app/",
      codelink:"https://github.com/Dharmi26/Remine-India"
    },
    {
      id: 5,
      src: zomato,
      demolink:"https://zomato-landing-page-seven.vercel.app/",
      codelink:"https://github.com/Dharmi26/Zomato-landing-page"
    },
  ];


  useEffect(() => {
    AOS.init({
      duration:"1000"
    });
  }, [])

  return (
    <div
      name="projects"
      className="bg-cyan w-full text-white"
    >
      <div className="max-w-screen-lg p-4 pt-20 pb-20 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 text-blue-950">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p data-aos="fade-right" data-aos-delay="200" className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, src, demolink, codelink }) => (
            <div 
             data-aos="zoom-in"
             data-aos-delay="500"
             key={id}
             className=" shadow-md shadow-gray-500 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 w-[100%] h-[200px]"
              />
              <div className="flex items-center justify-center bg-gradient-to-b from-b2 to-b1">
                <button className=" w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={demolink} target="_blank">Demo</a>
                </button>
                <button className="px-6 py-3 w-1/2 m-4 duration-200 hover:scale-105">
                <a href={codelink} target="_blank">Code</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;