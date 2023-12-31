import React,{useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration:"1000"
    });
  }, [])
  return (
    // <div name="about"
    // className="w-full pb-28 bg-gradient-to-b from-b2 to-b1">
    //   <div className="flex flex-col gap-20 justify-center items-center">
    //     <div className='text-cyan text-left'>
    //     <p className="text-4xl text-font-bold border-b-4 border-gray-500 p-2 inline">
    //       About
    //     </p>
    //     </div>
    //     <p className="w-3/4 sm:w-1/2 rounded-2xl bg-cyan text-blue-950 shadow-xl p-2 md:p-5 text-justify md:px-10">
    //         "I am a student, currently pursuing Bachelor of Technology in Computer Science Branch from SKIT Jaipur. I'm a web developer passionate about building innovative and user-friendly websites and applications. I am eager to collaborate with like-minded professionals and take on new challenges in web development to continue growing my skills and expertise."
    //     </p>
    //   </div>
    // </div>

    <div
      name="about"
      className="w-full pt-20 pb-20 px-2 bg-cyan text-blue-950"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p data-aos="zoom-in" data-aos-delay="200" className="text-xl mt-20">
            I am a student, currently pursuing Bachelor of Technology in Computer Science Branch from SKIT Jaipur. I'm a web developer passionate about building innovative and user-friendly websites and applications. I am eager to collaborate with like-minded professionals and take on new challenges in web development to continue growing my skills and expertise.
        </p>
        <p data-aos="zoom-in" data-aos-delay="200" className="text-xl mt-10">
          I am an enthusiastic individual who strongly believes in the value of combining hard work with smart strategies. My passion for my work drives me to approach every task and project with unwavering dedication. I have a keen interest in continuous learning, constantly exploring new ideas, and I thrive on embracing innovation.
        </p>
      </div>
    </div>
  )
}

export default About
