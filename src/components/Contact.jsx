import React,{useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

import connect from '../assets/lets-connect.webp';

const Contact = () => {
    
  useEffect(() => {
    AOS.init({
      duration:"1000"
    });
  }, [])

  return (
    <div
      name="contact"
      className="w-full pt-40 bg-gradient-to-br from-orange-400 to-pink-400 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          {/* <p className="py-6 flex flex-row justify-center items-center gap-2 text-2xl"><MdOutlineContactMail/>Let's Get Connected !</p> */}
        </div>
        <div className="flex flex-col justify-center items-center gap-4">

          <div data-aos="zoom-in-up" data-aos-delay="200" className="w-[60%] md:w-[40%]"><img src={connect}/></div>

          <div data-aos="zoom-in-up" data-aos-delay="500" className="w-full flex justify-center items-center">
          <form
            action="https://getform.io/f/4682ebcf-5ccf-4f89-8d9c-5eb230f79e03"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-cyan border-2 rounded-md text-blue-950 focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-cyan border-2 rounded-md text-blue-950 focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-cyan border-2 rounded-md text-blue-950 focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-br from-b1 to-b2 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's Talk
            </button>
          </form>
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default Contact;
