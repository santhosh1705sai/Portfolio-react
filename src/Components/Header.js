 import{Bars3Icon} from '@heroicons/react/24/solid'
 import mee from '../asects/me.png.png'
import { useState } from 'react';
 function Header(){
    const[toggleMenu,usetoggleMenu]=useState(false);

    return   <header className="flex  px-5 py-2 bg-secondary justify-between ">
        <a href="#" className="font-bold text-black flex ">PORTFOLIO</a>
        <div className='flex-1 px-2'>
        <img  className='w-12 h-12 rounded-full object-cover 'src={mee}></img>
        </div>
       <nav className="hidden md:block ">
        <ul className="flex text-white ">
            <li><a href="/">HOME</a></li>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#project">PROJECT</a></li>
            <li><a href="#resume">RESUME</a></li>
            <li><a href="#contact">CONTACT</a></li>
            </ul>
            </nav> 
  { toggleMenu && <nav className="block md:hidden  ">
        <ul onClick={()=>usetoggleMenu(!toggleMenu)} className="flex flex-col text-white mobile-nav">
            <li><a href="#about">HOME</a></li>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#project">PROJECT</a></li>
            <li><a href="#resume">RESUME</a></li>

            <li><a href="#contact">CONTACT</a></li>
            </ul>
            </nav> }
            <button onClick={()=>usetoggleMenu(!toggleMenu)} className='block md:hidden' ><Bars3Icon className="text-white h-5" ></Bars3Icon></button>
      </header>
 }
export default Header;


