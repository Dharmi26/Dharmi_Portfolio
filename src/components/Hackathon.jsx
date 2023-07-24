import React from 'react'
import ExperienceCard from './ExperienceCard';
import sih from '../assets/experience/sih.png';
import techathon from '../assets/experience/techathon.png';
import codered from '../assets/experience/vgu2.png';

const Hackathon = () => {
  const hackathons = [
    {
      'logo':sih,
      'title':'Winner',
      'company':'Smart India Hackathon',
      'location':'Sage University, Indore',
      'duration':'August 2022',
      'description':'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ',
    },
    {
      'logo':techathon,
      'title':'Runner up',
      'company':'Tech-a-Thon 2.0',
      'location':'JECRC University, Jaipur',
      'duration':'September 2022',
      'description':'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ',
    },
    {
      'logo':codered,
      'title':'Runner up',
      'company':'CodeRed Hackathon 2.0',
      'location':'VGU Jaipur',
      'duration':'October 2022',
      'description':'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ',
    },
  ]
  
    return (
      <div className='flex flex-row flex-wrap justify-center sm:justify-start gap-5 w-full'>
        {hackathons.map((hackathon)=>(
          <ExperienceCard 
            logo={hackathon.logo}
            title={hackathon.title}
            company={hackathon.company}
            location={hackathon.location}
            duration={hackathon.duration}
            description={hackathon.description}/>
        ))}
        
      </div>
    )
}

export default Hackathon
