import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa';
import {RxCross2} from 'react-icons/rx';
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
        link:"projects",
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
    <div className={window.scrollY>=window.innerHeight?
     "flex justify-between items-center w-full h-20 px-4 text-b2 bg-cyan fixed z-10" 
     :
     "flex justify-between items-center w-full h-20 px-4 text-white bg-transparent duration-300 fixed z-10"}>
        <div>
            {window.scrollY>=window.innerHeight>0 ? <img src={logo2} width="75"/> : <img src={logo} width="75"/>}
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
            <FaBars size={30}/>
        </div>

        {nav && (

            <div className="fixed inset-0 z-50 md:hidden" id="headlessui-dialog-:r0:" role="dialog" aria-modal="true" data-headlessui-state="open">
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-gray-900/80" id="headlessui-dialog-overlay-:r1:" aria-hidden="true" data-headlessui-state="open" />
        <div className="fixed w-full max-w-xs p-6 text-base font-semibold text-gray-900 bg-cyan shadow-lg rounded-3xl top-4 right-4 dark:bg-gray-800 dark:text-gray-400 dark:highlight-white/5">
          <button className="absolute flex items-center justify-center w-8 h-8 text-gray-500 top-5 right-5 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300">
            <span className="sr-only">Close navigation</span>
            {/* <svg viewBox="0 0 10 10" className="w-2.5 h-2.5 overflow-visible" aria-hidden="true">
              <path d="M0 0L10 10M10 0L0 10" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
            </svg> */}
            <RxCross2 size={30} color='#334F72' onClick={()=>setNav(false)}/>
          </button>
          {/* <ul className="space-y-6">
            <li><a href="/"><span className="hover:text-teal-400 dark:hover:text-teal-500">Home</span></a></li>
            <li><a href="/about"><span className="hover:text-teal-400 dark:hover:text-teal-500">About</span></a></li>
            <li><a href="/projects"><span className="hover:text-teal-400 dark:hover:text-teal-500">Projects</span></a></li>
            <li><a href="/blog"><span className="hover:text-teal-400 dark:hover:text-teal-500">Blog</span></a></li>
            <li><a href="/community-wall"><span className="hover:text-teal-400 dark:hover:text-teal-500">Community wall</span></a></li>
          </ul> */}
            <ul className='bg-cyan text-blue-950'>
            {links.map((link)=>(
                    <li
                    key={link.id} 
                    className='px-4 cursor-pointer py-4 capitalize text-lg'
                    >
                      <Link to={link.link} smooth duration={500} onClick={()=>setNav(false)}>{link.link}</Link>
                    </li>
                ))}
            </ul>
        </div>
      </div>

        )}
        
    </div>
  )
}

export default Navbar