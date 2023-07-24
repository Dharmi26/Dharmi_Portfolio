import React from 'react'
import {CiLocationOn} from 'react-icons/ci';
import {MdUpdate} from 'react-icons/md';
import {GoOrganization} from 'react-icons/go';

const ExperienceCard = (params) => {
  const {logo, title, company, location, duration, description} = params;
  return (
    <div className='flex flex-col gap-2 bg-blue-100 text-blue-950 w-[250px] p-5 rounded-xl shadow-lg cursor-pointer hover:scale-105 duration-300'>

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
        <div className='flex flex-row gap-2 items-center text-sm'><CiLocationOn/>{location}</div>
        <div className='flex flex-row gap-2 items-center text-sm'><MdUpdate/>{duration}</div>
        <div className='text-sm'>{description}</div>
    </div>

  )
}

export default ExperienceCard
