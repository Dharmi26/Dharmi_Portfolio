import React,{useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

import {SlLocationPin} from 'react-icons/sl';
import {MdUpdate} from 'react-icons/md';
import {GoOrganization} from 'react-icons/go';
import {PiCertificate} from 'react-icons/pi';

const ExperienceCard = (params) => {

  
  useEffect(() => {
    AOS.init({
      duration:"1000"
    });
  }, [])

  const {logo, title, company, location, duration, description, certificate} = params;
  return (
    <div  data-aos="zoom-in" data-aos-delay="200" className='flex flex-col gap-2 bg-cyan text-blue-950 w-[250px] p-5 rounded-xl shadow-lg hover:scale-105 duration-300'>

        <div className='flex flex-row items-center gap-2'>
          <div>
            <img src={logo} alt="logo" width="60px"/>
          </div>
          <div className='flex flex-col gap-2'>
            <div className='text-sm font-semibold'>{title}</div>
          </div>
        </div>
        
        <div className='border-b border-gray-500'></div>

        <div className='flex flex-row gap-2 items-center text-sm font-semibold'><GoOrganization/>{company}</div>
        <div className='flex flex-row gap-2 items-center text-sm'><SlLocationPin/>{location}</div>
        <div className='flex flex-row gap-2 items-center text-sm'><MdUpdate/>{duration}</div>
        <div className='text-sm'>{description}</div>
        <a href={certificate} target='_blank'><div className='flex flex-row gap-2 items-center bg-gradient-to-br from-g1 to-g2 text-white p-2 rounded cursor-pointer hover:bg-gradient-to-bl duration-300'><PiCertificate size="25px"/>view certificate</div></a>
    </div>

  )
}

export default ExperienceCard
