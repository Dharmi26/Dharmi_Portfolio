import React from 'react'

const About = () => {
  return (
    <div name="about"
    className="w-full pb-28 bg-gradient-to-b from-b2 to-b1">
      <div className="flex flex-col gap-20 justify-center items-center">
        <h2 className='text-2xl font-semibold underline text-cyan'>About</h2>
        <p className="w-3/4 sm:w-1/2 rounded-2xl bg-cyan text-blue-950 shadow-xl p-2 md:p-5 text-justify md:px-10">
            "I am a student, currently pursuing Bachelor of Technology in Computer Science Branch from SKIT Jaipur. I'm a web developer passionate about building innovative and user-friendly websites and applications. I am eager to collaborate with like-minded professionals and take on new challenges in web development to continue growing my skills and expertise."
        </p>
      </div>
    </div>
  )
}

export default About
