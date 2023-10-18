import React from 'react'
import ExperienceCard from './ExperienceCard';
import IBM from '../assets/experience/IBM.png';

const Internship = () => {
  const intern = [
    {
      'logo':IBM,
      'title':'Frontend Development Internship',
      'company':'IBM SkillsBuild',
      'location':'Remote',
      'duration':'June 2023 - July 2023',
      'description':'Worked on Weather Prediction website using HTML, CSS and Javascript.',
      'certificate':'https://drive.google.com/file/d/1kObx7mq4QSxwgWOxYM80lXemqWeLaVR_/view?usp=sharing'
    },
  ]
  
    return (
      <div  data-aos="zoom-in" data-aos-delay="200" className='flex flex-row flex-wrap justify-center sm:justify-start gap-5 w-full'>
        {intern.map((intern)=>(
          <ExperienceCard 
            logo={intern.logo}
            title={intern.title}
            company={intern.company}
            location={intern.location}
            duration={intern.duration}
            description={intern.description}
            certificate={intern.certificate}/>
        ))}
        
      </div>
    )
}

export default Internship
