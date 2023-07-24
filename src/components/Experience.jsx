import React, { useState } from 'react'

import {BsGraphUpArrow} from 'react-icons/bs';
import {TbReportAnalytics} from 'react-icons/tb';
import {GiComputing} from 'react-icons/gi';
import Training from './Training';
import Internship from './Internship';
import Hackathon from './Hackathon';

const Experience = () => {

  const [training,setTraining] = useState(true);
  const [internship,setInternship] = useState(false);

  return (
    <div
    name="experience"
    className="bg-gradient-to-b from-b1 to-b2 w-full"
    >
      <div className="max-w-screen-lg pt-20 mx-auto p-4 flex flex-col justify-center w-full h-full text-cyan">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
        </div>

        <div className='w-3/4 md:w-[60%] mt-10 flex flex-row justify-center ms-[10%] md:ms-0 mb-10'>
            <div className={`flex flex-row justify-center items-center gap-2 w-1/2 md:w-2/3 px-3 py-2 text-xs md:text-base cursor-pointer text-center hover:scale-110 duration-75 ${training?"border-b-2 border-cyan":"border-b-1"}`}
            onClick={()=>
            {
                setTraining(true);
                setInternship(false);
            }}>
                <span><TbReportAnalytics size="20px"/></span>
                <span>Trainings</span>
            </div>
            <div className={`flex flex-row justify-center items-center gap-2 w-1/2 md:w-2/3 px-3 py-2 text-xs md:text-base cursor-pointer text-center hover:scale-110 duration-75 ${internship?"border-b-2 border-cyan":"border-b-1"}`}
             onClick={()=>
                {
                    setTraining(false);
                    setInternship(true);
                }}>
                <span><BsGraphUpArrow/></span>
                Internships
            </div>
            <div className={`flex flex-row justify-center items-center gap-2 w-1/2 md:w-2/3 px-3 py-2 text-xs md:text-base cursor-pointer text-center hover:scale-110 duration-75 ${!training && !internship?"border-b-2 border-cyan":"border-b-1"}`}
             onClick={()=>
                {
                    setTraining(false);
                    setInternship(false);
                }}>
                <span><GiComputing/></span>
                Hackathons
            </div>
        </div>
        {training ? (
            <div>
                <Training/>
            </div>
            ) : (
            internship ? (
            <div>
                <Internship/>
            </div>
            ) : (
            <div>
                <Hackathon/>
            </div>
            )
        )}
        
      </div>
    </div>
  )
}

export default Experience
