import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import Logo from '../images/logoMariana.png'
import { BsTwitter } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'



 
function Navbar(props) {

    const [isActive, setActive] = useState(0);


    const ToggleClass = () => {
      setActive(!isActive); 
     };

  return (
    <nav className='bg-black relative'>
        <div className='flex items-center justify-between container mx-auto'>
        <Link to='/' > <img className='w-48' src={Logo}/> </Link>

        <ul className='hidden gap-8 w-3/4 justify-end mx-9 lg:flex'>
           <Link to='/'><li className='text-pink-600 font-medium uppercase hover:text-pink-300 transition-all'>Sobre</li></Link>
           <Link to='/'><li className='text-pink-600 font-medium uppercase hover:text-pink-300 transition-all'>Portfólio</li></Link>
           <Link to='/'><li className='text-pink-600 font-medium uppercase hover:text-pink-300 transition-all'>Blog</li></Link>
           <Link to='/'><li className='text-pink-600 font-medium uppercase hover:text-pink-300 transition-all'>Contato</li></Link>
        </ul>

        <ul className='hidden gap-2 lg:flex'>
            <Link to='/'> <BsTwitter size={30} className='fill-pink-600 h-12 hover:fill-pink-300 transition-all'/>  </Link>
            <Link to='/'> <BsFacebook size={30} className='fill-pink-600 h-12 hover:fill-pink-300 transition-all'/>  </Link>
            <Link to='/'> <BsInstagram size={30} className='fill-pink-600 h-12 hover:fill-pink-300 transition-all'/>  </Link>
            <Link to='/'> <BsLinkedin size={30} className='fill-pink-600 h-12 hover:fill-pink-300 transition-all'/>  </Link>
        </ul>

        <ul id='menu-mobile' className={`flex flex-col gap-2 items-center w-full transition-all -z-10 top-24 h-0 overflow-hidden absolute lg:hidden bg-black ${isActive ? "h-60 pt-10" : null}`}>
           <Link to='/'><li className='text-pink-600 font-medium uppercase hover:text-pink-300 transition-all'>Sobre</li></Link>
           <Link to='/'><li className='text-pink-600 font-medium uppercase hover:text-pink-300 transition-all'>Portfólio</li></Link>
           <Link to='/'><li className='text-pink-600 font-medium uppercase hover:text-pink-300 transition-all'>Blog</li></Link>
           <Link to='/'><li className='text-pink-600 font-medium uppercase hover:text-pink-300 transition-all'>Contato</li></Link>
           <div className='flex gap-2'>
           <Link to='/'> <BsTwitter size={30} className='fill-pink-600 h-12 hover:fill-pink-300 transition-all'/>  </Link>
            <Link to='/'> <BsFacebook size={30} className='fill-pink-600 h-12 hover:fill-pink-300 transition-all'/>  </Link>
            <Link to='/'> <BsInstagram size={30} className='fill-pink-600 h-12 hover:fill-pink-300 transition-all'/>  </Link>
            <Link to='/'> <BsLinkedin size={30} className='fill-pink-600 h-12 hover:fill-pink-300 transition-all'/>  </Link>
           </div>
        </ul>

        <div> <GiHamburgerMenu onClick={ToggleClass} size={30} className='fill-pink-600 h-12 cursor-pointer hover:fill-pink-300 transition-all lg:hidden mr-8 sm:mr-0' />  </div>
        </div>
    </nav>
  )
}

export default Navbar