import React, {useEffect} from "react";
import {AiOutlineDownload} from 'react-icons/ai';
import HeroImage from "../assets/heroimg.jpg";
import { Link } from "react-scroll";
import resume from "../assets/resume.pdf"
import {BiLogoGmail} from 'react-icons/bi';
import {AiFillLinkedin} from 'react-icons/ai';
import {AiFillGithub} from 'react-icons/ai';
import AOS from "aos";
import "aos/dist/aos.css";

const downloadResume = () => {
  window.open(resume, '_blank');
}; 

const Home = () => {

  useEffect(() => {
    AOS.init({
      duration:"1000"
    });
  }, [])

  return (
    <div
      name="home"
      className="w-full pt-40 pb-32 bg-gradient-to-b from-b1 to-b2"
    >
      <div className=" max-w-screen-lg mx-auto flex flex-col-reverse md:flex-row items-center justify-center h-full px-4">
        <div data-aos="fade-right" data-aos-delay="400" className="flex flex-col justify-center items-center sm:items-start h-full pt-6">
          <h2 className="text-4xl sm:text-4xl font-bold text-cyan">
            Hi, I am Dharmi Kapadiya
          </h2>
          <h3 className="py-4 sm:text-xl text-blue-50">
            Programmer | Web Developer
          </h3>
          <div className="flex flex-row gap-3 mb-2 items-center">
            <a href="mailto:dharmipatel567@gmail.com" target="_blank"><BiLogoGmail size="30px" className='shadow-lg rounded p-1 text-red-500 bg-cyan'/></a>
            <a href="https://www.linkedin.com/in/dharmi-kapadiya/" target="_blank"><AiFillLinkedin size="30px" className='shadow-lg rounded p-1 text-blue-700 bg-cyan'/></a>
            <a href="https://github.com/Dharmi26" target="_blank"><AiFillGithub size="30px" className='shadow-lg rounded p-1 text-black bg-cyan'/></a>
          </div>
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
        <div data-aos="fade-left" data-aos-delay="500">
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-full mx-auto w-2/3 md:w-3/4 drop-shadow-2xl border-4 border-cyan z-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;