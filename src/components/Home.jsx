import React from "react";
import {AiOutlineDownload} from 'react-icons/ai';
import HeroImage from "../assets/heroimg.jpg";
import { Link } from "react-scroll";
import resume from "../assets/resume.pdf"

const downloadResume = () => {
  window.open(resume, '_blank');
}; 

const Home = () => {
  return (
    <div
      name="home"
      className="w-full pt-28 md:pt-0 h-screen bg-gradient-to-b from-b1 to-b2"
    >
      <div className=" max-w-screen-lg mx-auto flex flex-col-reverse md:flex-row items-center justify-center h-full px-4">
        <div className="flex flex-col justify-center h-full pt-6">
          <h2 className="text-4xl sm:text-4xl font-bold text-cyan">
            Hi, I am Dharmi Kapadiya
          </h2>
          <h3 className="py-4 sm:text-xl text-blue-50">
            Programmer | Developer
          </h3>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="sm:text-xl text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-b from-g1 to-g2 cursor-pointer"
              onClick={downloadResume}
            >
              Resume
              <span>
                <AiOutlineDownload className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-full mx-auto w-2/3 md:w-3/4 shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;