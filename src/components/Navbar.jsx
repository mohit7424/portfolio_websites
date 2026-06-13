import React from 'react';
import { FaBars, FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  return (
    <nav className="fixed w-full z-50 bg-dark-200 backdrop-blur-sm py-4 px-4 shadow-lg">
<div className="container mx-auto flex justify-between items-center">

  <div>
    <a href="#" className="text-3xl font-bold text-white">
      My 
      <span className='text-purple'> Portfolio</span>
      <div className=' w-4 h-4 bg-purple rounded-full'></div>
      </a>
  </div> 
  <div className="hidden md:flex space-x-10">
    <a href="#home" className="relative text-white/80
     hover:text-purple  transition duration-300 inline-block group">
      <span>Home</span>
      <span className='absolute left-0 -bottom-1 
      block w-0 h-0.5 bg-purple transition-all 
      duration-300 group-hover:w-full'>
      </span>
    </a>
    <a href="#about" className="relative text-white/80
     hover:text-purple  transition duration-300 inline-block group">
      <span>About</span>
      <span className='absolute left-0 -bottom-1 
      block w-0 h-0.5 bg-purple transition-all 
      duration-300 group-hover:w-full'>
      </span>
    </a>
    <a href="#skills" className="relative text-white/80
     hover:text-purple  transition duration-300 inline-block group">
      <span>Skill</span>
      <span className='absolute left-0 -bottom-1 
      block w-0 h-0.5 bg-purple transition-all 
      duration-300 group-hover:w-full'>
      </span>
    </a>
    <a href="#projects" className="relative text-white/80
     hover:text-purple  transition duration-300 inline-block group">
      <span>Projects</span>
      <span className='absolute left-0 -bottom-2 
      block w-0 h-0.5 bg-purple transition-all 
      duration-300 group-hover:w-full '>
      </span>
    </a>
    <a href="#work" className="relative text-white/80
     hover:text-purple  transition duration-300 inline-block group">
      <span>Experience</span>
      <span className='absolute left-0 -bottom-2 
      block w-0 h-0.5 bg-purple transition-all 
      duration-300 group-hover:w-full '>
      </span>
    </a>
    <a href="#contact" className="relative text-white/80
     hover:text-purple  transition duration-300 inline-block group">
      <span>contact</span>
      <span className='absolute left-0 -bottom-2 
      block w-0 h-0.5 bg-purple transition-all 
      duration-300 group-hover:w-full '>
      </span>
    </a>
   </div>
       {/* // Mobile Menu Icon */}
   <div className='md:hidden'>
    {
      showMenu ?
      <FaXmark onClick={()=>setShowMenu(!showMenu)}
        className='text-2xl cursor-pointer' />:
        <FaBars  onClick={()=>setShowMenu(!showMenu)}
         className='text-2xl cursor-pointer'/>
        
    }
    </div>
 </div>
     {/* mobile menu */}
     {
      showMenu && (
          <div className='md:hidden absolute left-0 top-full w-full bg-dark-300 rounded-b-lg p-4 flex-col space-y-4 text-center items-center flex max-h-[calc(100vh-4rem)] overflow-y-auto shadow-lg'>
            <a onClick={()=>setShowMenu(!showMenu)} href="#home" className="relative text-white/80
     hover:text-purple  transition duration-300 inline-block group">
      <span>Home</span>
      <span className='absolute left-0 -bottom-1 
      block w-0 h-0.5 bg-purple transition-all 
      duration-300 group-hover:w-full'>
      </span>
    </a>
    <a onClick={()=>setShowMenu(!showMenu)} href="#about" className="relative text-white/80
     hover:text-purple  transition duration-300 inline-block group">
      <span>About</span>
      <span className='absolute left-0 -bottom-1 
      block w-0 h-0.5 bg-purple transition-all 
      duration-300 group-hover:w-full'>
      </span>
    </a>
    <a onClick={()=>setShowMenu(!showMenu)} href="#skills" className="relative text-white/80
     hover:text-purple  transition duration-300 inline-block group">
      <span>Skill</span>
      <span className='absolute left-0 -bottom-1 
      block w-0 h-0.5 bg-purple transition-all 
      duration-300 group-hover:w-full'>
      </span>
    </a>
    <a onClick={()=>setShowMenu(!showMenu)} href="#projects" className="relative text-white/80
     hover:text-purple  transition duration-300 inline-block group">
      <span>Projects</span>
      <span className='absolute left-0 -bottom-2 
      block w-0 h-0.5 bg-purple transition-all 
      duration-300 group-hover:w-full '>
      </span>
    </a>
    <a onClick={()=>setShowMenu(!showMenu)} href="#work" className="relative text-white/80
     hover:text-purple  transition duration-300 inline-block group">
      <span>Experience</span>
      <span className='absolute left-0 -bottom-2 
      block w-0 h-0.5 bg-purple transition-all 
      duration-300 group-hover:w-full '>
      </span>
    </a>
    <a onClick={()=>setShowMenu(!showMenu)} href="#contact" className="relative text-white/80
     hover:text-purple  transition duration-300 inline-block group">
      <span>contact</span>
      <span className='absolute left-0 -bottom-2 
      block w-0 h-0.5 bg-purple transition-all 
      duration-300 group-hover:w-full '>
      </span>
    </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;