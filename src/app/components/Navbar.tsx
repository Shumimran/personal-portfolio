import Link from 'next/link';
import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className='container  pb-5 z-50 sticky top-2'>
        <div>
            <div className=' flex justify-between item center px-10 text-xl  h-12 font-bold'>
                <p className='text-2xl text-blue-600 '>Shumaila Imran</p>

                <ul className='gap-8 lg-gap-10 hidden scroll-mb-20 md:flex justify-between items-center text-lg text-[#fff] '>
                  <li className='menuLink'><Link href={"#home"}>Home</Link></li>
                  <li className='menuLink'><Link href={"#about"}>About</Link></li>
                  <li className='menuLink'><Link href={"#Projects"}>Projects</Link></li>
                  <li className='menuLink'><Link href={"#skills"}>Skills</Link></li>
                  <li className='menuLink'><Link href={"#Contact"}>Contact</Link></li>
                </ul>
                <AiOutlineMenu className='md:hidden' size={30}/>

            </div>
        </div>
      
    </div>
  )
}

export default Navbar
