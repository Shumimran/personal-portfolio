import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import aboutPic from '@/../../public/aboutMe.png'

const About = () => {
  return (
    <div>
      <section id="about" className="text-gray-600 mt-10 body-font">
        <div className="container mx-auto px-5 py-10">
          <div  className="flex flex-col md:flex-row md:items-center">
            {/* Image Section */}
            <div data-aos="fade-up-left" className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
              <Image
                src={aboutPic}
                height={350}
                width={350}
                alt="Profile Picture"
                className="rounded-lg shadow-md"
              />
            </div>

            {/* Text Section */}
            <div data-aos="fade-up-right" className="w-full md:w-1/2 md:pl-10 text-center md:text-left">
              <h1 className="title-font text-center md:text-left sm:text-3xl text-2xl mb-4 font-medium text-blue-500">
                About Me
              </h1>
              <p className="text-justify leading-loose mr-10 mb-5">
                Hi, I am Shumaila Imran, 46 years old, a housewife. As an arts graduate with a passion for learning, I've developed a strong foundation in computer skills and now seek to expand my horizons in emerging technologies. I'm excited to dive into the realms of Artificial Intelligence (AI) and Metaverse, exploring their vast potential to transform industries and revolutionize human experiences. With a keen interest in innovation and creativity, I'm eager to acquire new skills and knowledge in these cutting-edge fields, paving the way for a future where art, technology, and imagination converge.
              </p>
              <div className="flex justify-center md:justify-start">
                <Link href="https://hackathone-milestone-1-2-ebon.vercel.app/">
                  <button className="inline-flex text-white bg-[#133E87] border-0 py-2 px-4 focus:outline-none hover:bg-[#608BC1] rounded font-semibold">
                    View CV
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
