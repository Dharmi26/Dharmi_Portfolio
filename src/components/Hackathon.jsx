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
      'description':'Developed a solution for Self Help Groups to sell niche products and for  transparent buyer seller interactions.',
      'certificate':'https://drive.google.com/file/d/18LHEKD5xUndDb2DzfbkUh-KVlxBQWUNA/view'
    },
    {
      'logo':techathon,
      'title':'Runner up',
      'company':'Tech-a-Thon 2.0',
      'location':'JECRC University, Jaipur',
      'duration':'September 2022',
      'description':'Created a Notes Sharing Application where students can share the notes private to their univerity or publicly.',
      'certificate':'https://drive.google.com/file/d/1jnSXbA7WY9KG7nMUnHR7fTkWM99rz-tk/view'
    },
    {
      'logo':codered,
      'title':'Runner up',
      'company':'CodeRed Hackathon 2.0',
      'location':'VGU Jaipur',
      'duration':'October 2022',
      'description':'Developed a model for Farming communities and companies to buy the crops for production.',
      'certificate':'https://drive.google.com/file/d/1jktM4tPiltZZkDY1XGjHnFFfYmOih9mN/view'
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
            description={hackathon.description}
            certificate={hackathon.certificate}/>
        ))}
        
      </div>
    )
}

export default Hackathon
