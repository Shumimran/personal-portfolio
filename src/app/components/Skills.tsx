import React from 'react';
import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import { TbBrandJavascript, TbBrandTypescript, TbBrandNextjs, TbBrandTailwind } from "react-icons/tb";
import { FaMicrosoft } from "react-icons/fa";
const Skills = () => {
  return (
    <div id="skills" className="py-16 ">
      {/* Section Heading */}
      <h1 className="text-2xl md:text-3xl font-medium text-blue-500 text-center mb-12">
        Skills
      </h1>

      {/* Skills Grid */}
      <div data-aos="fade-up-left" autoSave='' className="grid grid-cols-2 sm:grid-cols-3 gap-20  text-[#fff] max-w-2xl mx-auto">
        {/* Skill Item */}
        <div className="flex flex-col items-center hover:scale-105 transform transition duration-300">
          <FaHtml5 className="text-5xl text-orange-600 mb-4" />
          <h2 className="text-2xl font-medium">HTML</h2>
        </div>

        <div className="flex flex-col items-center hover:scale-105 transform transition duration-300">
          <FaCss3Alt className="text-5xl text-blue-500 mb-4" />
          <h2 className="text-2xl font-medium">CSS</h2>
        </div>

        <div className="flex flex-col items-center hover:scale-105 transform transition duration-300">
          <TbBrandJavascript className="text-5xl text-yellow-500 mb-4" />
          <h2 className="text-2xl font-medium">JavaScript</h2>
        </div>

        <div className="flex flex-col items-center hover:scale-105 transform transition duration-300">
          <TbBrandTypescript className="text-5xl text-blue-700 mb-4" />
          <h2 className="text-2xl font-medium">TypeScript</h2>
        </div>

        <div className="flex flex-col items-center hover:scale-105 transform transition duration-300">
          <TbBrandNextjs className="text-5xl text-gray-500 mb-4" />
          <h2 className="text-2xl font-medium">Next.js</h2>
        </div>

        <div className="flex flex-col items-center hover:scale-105 transform transition duration-300">
          <TbBrandTailwind className="text-5xl text-teal-500 mb-4" />
          <h2 className="text-2xl font-medium">Tailwind</h2>
        </div>

      
      <div className="flex flex-col items-center hover:scale-105 transform transition duration-300">
          <FaMicrosoft  className="text-5xl mt-14 text-pink-600 mb-4" />
          <h2 className="text-2xl font-medium">MS Office</h2>
        </div>
    </div>
    </div>
  );
};

export default Skills;
