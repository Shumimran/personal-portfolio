import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import cd from '@/../../public/count-down.png';
import web from '@/../../public/web-page.png';
import sr from '@/../../public/static resume.png';

const Projects = () => {
  return (
    <div id="Projects">
      <section className="text-gray-600 body-font">
        <div className="container px-10 py-12 lg:py-15 mx-auto">
          {/* Header */}
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-blue-500">
              Projects
            </h1>
          </div>

          {/* Projects Grid */}
          <div data-aos="zoom-in-down" autoSave='' className="flex flex-wrap -m-4 ">
            {/* Project 1 */}
            <div className="p-4 sm:w-1/2 lg:w-1/3 w-full">
              <div className="flex flex-col rounded-lg h-full bg-gray-100 p-6">
                <Link href={"https://countdown-sigma-wheat.vercel.app/"}>
                <h2 className="text-gray-900 text-lg title-font font-medium mb-4">
                  Count Down
                </h2>
                <Image
                  src={cd}
                  alt="Count Down"
                  height={400}
                  width={400}
                  className="object-contain rounded-lg mx-auto"
                />
                <p className="leading-relaxed text-base mt-6">
                  A Next.js and TypeScript powered website with an interactive
                  countdown feature to track time effectively.
                </p>
                <div className="flex flex-wrap gap-2 mt-6">
                  <button className="px-4 py-2 bg-blue-400 text-white rounded text-sm">
                    Next.js
                  </button>
                  <button className="px-4 py-2 bg-purple-400 text-white rounded text-sm">
                    Node
                  </button>
                  <button className="px-4 py-2 bg-green-400 text-white rounded text-sm">
                    CSS
                  </button>
                  <button className="px-4 py-2 bg-orange-400 text-white rounded text-sm">
                    TypeScript
                  </button>
                </div></Link>
              </div>
            </div>

            {/* Project 2 */}
            <div className="p-4 sm:w-1/2 lg:w-1/3 w-full">
              <div className="flex flex-col rounded-lg h-full bg-gray-100 p-6">
               <Link href={"https://hackathone-milestone-1-2-ebon.vercel.app/"}> 
               <h2 className="text-gray-900 text-lg title-font font-medium mb-4">
                  E-Commerce Website
                </h2>
                <Image
                  src={web}
                  alt="E-Commerce Website"
                  height={400}
                  width={400}
                  className="object-contain rounded-lg mx-auto"
                />
                <p className="leading-relaxed text-base mt-10">
                  An E-Commerce Website using a Figma template, built with
                  Next.js, HTML, Tailwind CSS, and React.
                </p>
                <div className="flex flex-wrap gap-2 mt-16">
                  <button className="px-4 py-2 bg-blue-400 text-white rounded text-sm">
                    Next.js
                  </button>
                  <button className="px-4 py-2 bg-purple-400 text-white rounded text-sm">
                    Tailwind
                  </button>
                  <button className="px-4 py-2 bg-green-400 text-white rounded text-sm">
                    HTML
                  </button>
                  <button className="px-4 py-2 bg-orange-400 text-white rounded text-sm">
                    React
                  </button> 
                </div> </Link>
              </div>
            </div>

            {/* Project 3 */}
            <div className="p-4 sm:w-1/2 lg:w-1/3 w-full">
              <div className="flex flex-col rounded-lg h-full bg-gray-100 p-6">
            <Link href={"https://hackathone-milestone-1-2-ebon.vercel.app/"}>
            <h2 className="text-gray-900 text-lg title-font font-medium mb-4">
                  Static Interactive Resume
                </h2>
                <Image
                  src={sr}
                  alt="Static Resume"
                  height={400}
                  width={400}
                  className="object-contain rounded-lg mx-auto"
                />
                <p className="leading-relaxed text-base mt-10">
                  A TypeScript-based interactive resume built with HTML and CSS,
                  showcasing skills dynamically.
                </p>
                <div className="flex flex-wrap gap-2 mt-6">
                  <button className="px-4 py-2 bg-blue-400 text-white rounded text-sm">
                    HTML
                  </button>
                  <button className="px-4 py-2 bg-purple-400 text-white rounded text-sm">
                    Node
                  </button>
                  <button className="px-4 py-2 bg-green-400 text-white rounded text-sm">
                    CSS
                  </button>
                  <button className="px-4 py-2 bg-orange-400 text-white rounded text-sm">
                    TypeScript
                  </button>
                </div> </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
