import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa';

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

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-gradient-to-b from-b2 to-b1 fixed">
        <div>
            <img src={require("../assets/logo.png")} width="75"/>
        </div>      
        <ul className='hidden md:flex'>
            {links.map((link)=>(
                <li
                 key={link.id} 
                 className='px-4 cursor-pointer text-cyan capitalize'
                >
                    {link.link}
                </li>
            ))}
        </ul>

        <div onClick={()=> setNav(!nav)} className='cursor-pointer pr-4 z-10 text-cyan md:hidden'>
            {nav? <FaTimes size={30}/>: <FaBars size={30}/>}
        </div>

        {nav && (
            <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-b1 to-b2 text-cyan'>
            {links.map((link)=>(
                    <li
                    key={link.id} 
                    className='px-4 cursor-pointer py-6 capitalize text-xl'
                    >
                        {link.link}
                    </li>
                ))}
            </ul>
        )}
        
    </div>
  )
}

export default Navbar