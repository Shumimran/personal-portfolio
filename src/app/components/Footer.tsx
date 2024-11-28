import Link from 'next/link';
import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";;
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      <span className="ml-3 text-xl text-blue-600">Shumaila Imran</span>
    </a>
    <p className="text-sm text-gray-400 sm:ml-5 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
      © 2024 Made by Shumaila —
     
    </p>
    <span className="inline-flex sm:ml-auto  ml-5 sm:mt-0 mt-4 gap-3 pl-10 justify-center sm:justify-start">
      <Link
      target="_blank" 
      href={"https://www.facebook.com/"}
      className='text-2xl hover:text-blue-500'>
      <FaFacebookSquare />
      </Link>
      <Link 
      target='_blank'
      href={"http://www.instagram.com/?hl=en"}
      className='text-2xl hover:text-blue-500'>
      <FaInstagramSquare />
      </Link>
      <Link
      target='_blank'
      href={"https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit"}
       className='text-2xl hover:text-blue-500'
      >
      <FaLinkedin />
      </Link>
      <Link
      target='_blank'
      href={"https://github.com/Shumimran"}
       className='text-2xl hover:text-blue-500'>
      <FaGithubSquare />
      </Link>
    </span>
  </div>
</footer>

    </div>
  )
}

export default Footer
