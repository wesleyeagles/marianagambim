import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../images/logoMariana.png'
import { BsTwitter } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from 'react';

const menuMobile = document.getElementById('menu-mobile')

function openMenu() {
    menuMobile.classList.toggle('h-full')
}
 
const Navbar = () => {
  return (
    <nav className='bg-black relative'>
        <div className='flex items-center justify-between md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto'>
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

        <ul id='menu-mobile' className='flex flex-col items-center w-full transition-all -z-10 top-32 h-0 overflow-hidden absolute lg:hidden'>
           <Link to='/'><li className='text-pink-600 font-medium uppercase hover:text-pink-300 transition-all'>Sobre</li></Link>
           <Link to='/'><li className='text-pink-600 font-medium uppercase hover:text-pink-300 transition-all'>Portfólio</li></Link>
           <Link to='/'><li className='text-pink-600 font-medium uppercase hover:text-pink-300 transition-all'>Blog</li></Link>
           <Link to='/'><li className='text-pink-600 font-medium uppercase hover:text-pink-300 transition-all'>Contato</li></Link> 
        </ul>

        <div> <GiHamburgerMenu onClick={() => openMenu()} size={30} className='fill-pink-600 h-12 cursor-pointer hover:fill-pink-300 transition-all lg:hidden mr-8 sm:mr-0' />  </div>
        </div>
    </nav>
  )
}

export default Navbar