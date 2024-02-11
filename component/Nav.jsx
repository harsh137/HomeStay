'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

export default function Nav() {
  const [menuIcon, setMenuIcon] = useState(false)

  const handleSamllScreenNavi = () => {
    setMenuIcon(!menuIcon);
  }
  return (
    <header className=' mt-5 bg-[#F9F9F9] w-[100%] ease-in duration-500  top-0 left-0 z-10  nav'>
      <nav className=" flex flex-row justify-around max-w-7xl mx-auto    items-center p-4" >
        <div>
          <p className='font-bold text-3xl'>LOGO</p>
        </div>

        <div className='hidden md:flex font-bold lg:text-[15px]'>
          <ul className=" flex flex-row  font-light  leading-6">
            <li className=''>Home</li>
            <li className='pl-6'>About</li>
            <li className='pl-6'>Services</li>
            <li className='pl-6'>Blog</li>
            <li className='pl-6'>Contact</li>
          </ul>
        </div>
        <div className='hidden md:flex flex-row justify-between'>
          <button className='bg-[#24AB70] h-auto w-auto px-4 rounded-full' >Login</button>
          <button className='bg-[#24AB70] rounded-full w-auto px-4 ml-3' >SingUp</button>
        </div>





        <div onClick={handleSamllScreenNavi} className="flex md:hidden">
          {
            menuIcon ?
              <RxCross1 size={25} className='text-[24AB70]' />
              :
              <GiHamburgerMenu size={25} className='text-[24AB70]' />
          }
        </div>
        <div className={menuIcon ?
          'md:hidden absolute top-[100px] right-0 bottom-0 left-0 flex justify-center items-center w-[100%] h-screen bg-opacity-80 bg-[#F9F9F9] text-black text-center ease-in duration-300'
          :
          'md:hidden absolute top-[98px] right-0 left-[-100%] flex justify-center items-center w-[100%] h-screen bg-inherit  text-black text-center ease-in duration-300'
        }>

          <div children='w-full bg-[#24AB70] '>

            <ul className="uppercase font-bold text-[#24AB70]">
            <li className='cursor-pointer py-5'>Home</li>
            <li className='cursor-pointer py-5'>About</li>
            <li className='cursor-pointer py-5'>Services</li>
            <li className='cursor-pointer py-5'>Blog</li>
            <li className='cursor-pointer py-5'>Contact</li>
            </ul>
            <div className='flex flex-row justify-between'>
          <button className= 'bg-[#24AB70] h-auto w-auto px-4 rounded-full ' >Login</button>
          <button className='bg-[#24AB70] rounded-full w-auto px-4 ml-3' >SingUp</button>
        </div>
            
          </div>
          

        </div>







      </nav>
    </header>


  )
}
