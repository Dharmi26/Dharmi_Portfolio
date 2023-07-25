import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa';
import { useScrollPosition } from './useScrollPosition';
import logo from '../assets/logo.png';
import logo2 from '../assets/logo2.png';
import { Link } from 'react-scroll';

const Navbar = () => {

    const links = [
    {
        id:1,
        link:"about",
    },
    {
        id:2,
        link:"skills",
    },
    {
        id:3,
        link:"project",
    },
    {
        id:4,
        link:"experience",
    },
    {
        id:5,
        link:"contact",
    }
   ];

   const [nav,setNav] = useState(false);

   const scrollPosition = useScrollPosition();

  return (
    <div className={scrollPosition>0 ?
     "flex justify-between items-center w-full h-20 px-4 text-b2 bg-cyan fixed z-10" 
     :
     "flex justify-between items-center w-full h-20 px-4 text-white bg-gradient-to-b from-b2 to-b1 duration-300 fixed z-10"}>
        <div>
            {scrollPosition>0 ? <img src={logo2} width="75"/> : <img src={logo} width="75"/>}
        </div>      
        <ul className='hidden md:flex'>
            {links.map((link)=>(
                <li
                 key={link.id} 
                 className='px-4 cursor-pointer capitalize'
                >
                 <Link to={link.link} smooth duration={500}>{link.link}</Link>
                </li>
            ))}
        </ul>

        <div onClick={()=> setNav(!nav)} className= {scrollPosition>0? 'cursor-pointer pr-4 z-10 md:hidden' : 'cursor-pointer pr-4 z-10 text-cyan md:hidden'}>
            {nav? <FaTimes size={30} color='#334F72'/>: <FaBars size={30}/>}
        </div>

        {nav && (
            <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-cyan text-blue-950'>
            {links.map((link)=>(
                    <li
                    key={link.id} 
                    className='px-4 cursor-pointer py-6 capitalize text-xl'
                    >
                      <Link to={link.link} smooth duration={500} onClick={()=>setNav(false)}>{link.link}</Link>
                    </li>
                ))}
            </ul>
        )}
        
    </div>
  )
}

export default Navbar