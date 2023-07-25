import React from 'react'
import ExperienceCard from './ExperienceCard';
import devtown from '../assets/experience/devtown.jpg';
import internshala from '../assets/experience/internshala.png';

const Training = () => {

const train = [
  {
    'logo':devtown,
    'title':'Full Stack Development Training',
    'company':'Devtown',
    'location':'Remote',
    'duration':'June 2021 - Aug 2021',
    'description':'Learnt Frontend and Backend web development technologies.',
    'certificate':'https://drive.google.com/file/d/1vAcQlyY7D1BHcj2pvnvGDq6p2aIXK1Cg/view'
  },
  {
    'logo':internshala,
    'title':'Basics of Data Science',
    'company':'Internshala',
    'location':'Remote',
    'duration':'June 2022 - Aug 2022',
    'description':'Learnt Basics of Data Science, Machine Learning and Python.',
    'certificate':'https://drive.google.com/file/d/1m4nvDd9d3sNDKFoyJE2x6X1Z8DlFsh-l/view?usp=sharing'
  },
]

  return (
    <div className='flex flex-row flex-wrap justify-center sm:justify-start gap-5 w-full'>
      {train.map((train)=>(
        <ExperienceCard 
          logo={train.logo}
          title={train.title}
          company={train.company}
          location={train.location}
          duration={train.duration}
          description={train.description}
          certificate={train.certificate}/>
      ))}
      
    </div>
  )
}

export default Training
