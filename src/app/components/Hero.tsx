import React from 'react'
import Image from 'next/image'
import ppic from '@/../../public/pp-2.jpg'
import Link from 'next/link'

const Hero = () => {
  return (


<section id='home' className="text-gray-600 mt-20 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div data-aos="zoom-in" className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image
        className="object-cover mx-auto object-center rounded"
        alt = "hero"
        src = {ppic}
        width = {350}
        height = {350}
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 data-aos="zoom-in-out" className="title-font sm:text-3xl text-2xl mb-4 font-semibold text-blue-500">
        I am a
        <br data-aos="zoom-in-left" className="hidden lg:inline-block text-blue-500" />
        Web developer, UI/UX Designer.
      </h1>
      <p data-aos="zoom-in" className="mb-10 text-lg text-justify leading-relaxed content-normal normal ">
      As a web and UI/UX designer, I bring a blend of creativity and analytical thinking to design seamless, engaging digital experiences. With a strong focus on user-centered design, I craft interfaces that not only look visually appealing but also enhance usability and accessibility. Constantly exploring new design trends and tools, I’m dedicated to creating impactful, responsive designs that meet both client goals and user needs.

      </p>
      <div className="flex justify-center">
        <Link href={"#Contact"}>
        <button data-aos="zoom-in-down" className="inline-flex text-white font-medium bg-[#133E87]  border-0 py-2 px-4 focus:outline-none hover:bg-[#608BC1] rounded ">
        Contact
        </button>
        </Link>
      
      </div>
    </div>
  </div>
</section>

  )
}

export default Hero
