import React, { useState } from 'react'
import './NavBar.css'

const NavBar = () => {
    const [open,setOpen] = useState(false);

    const menuLinks = [
        { name: "HOME", link: "#home"},
        { name: "ABOUT", link: "#about"},
        { name: "SKILLS", link: "#skills"},
        { name: "PROJECTS", link: "#projects"},
    ]
    
  return (
    <nav className={`flex justify-between fixed w-full px-24 py-4 left-0 top-0 z-[999] text-li-white `}>
      <div className='mx-7'>
        <h4 className='text-4xl uppercase font-bold text-li-white'>
          Ra<span className='text-cyan'>sh</span>id</h4>
      </div>
    
      <div className={` 
          md:block hidden px-7 py-2 font-medium bg-gray-800 text-li-white rounded-xl`}>
        <ul className='flex'>
            {menuLinks?.map((menu, i) => (
                <li key={i} className='mr-4 transition-all ease-in-out hover:scale-110 cursor-pointer text-li-white hover:text-cyan'>
                    <a href={menu?.link}>{menu.name}</a>
                </li>
            ))}
            
        </ul>
      </div>

      <div className='hidden lg:flex bg-li-white text-black flex items-center justify-center hover:scale-110 rounded-lg px-4 cursor-pointer font-medium'>
        <li className='transition-all ease-in-out hover:scale-110 list-none '>
          <a href="#contact" >Contact Me</a>
        </li>
      </div>

      <div onClick={() => setOpen(!open)}
          className={`z-[999] ${open ? "text-black" : "text-li-white"} text-3xl md:hidden m-5`}>
        <ion-icon name='menu'></ion-icon>
      </div>

      <div className={`md:hidden text-black absolute w-2/3 h-screen px-7 
                       py-2 font-medium bg-li-white top-0 right-0 duration-300 ${open ? "right-0" : "right-[-100%]" } `}>
        <ul className='flex flex-col justify-center h-full gap-10 py-2 text-lg'>
            {menuLinks?.map((menu,i) => (
                <li key={i} className='px-6 hover:text-cyan'>
                    <a href={menu.link}>{menu.name}</a>
                </li>
            ))}
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
