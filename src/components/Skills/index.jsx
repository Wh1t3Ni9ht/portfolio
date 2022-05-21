import React from 'react';

// FontAwesome
import {
  FaTerminal,
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaCheck,
} from 'react-icons/fa';

// Assets
import Container from '../Container';

function Skills() {
  return (
    <Container>
      <div
        id="skills"
        className="flex flex-col items-center justify-evenly h-[calc(100vh-80px)] lg:h-[calc(100vh-80px)] snap-always snap-start"
      >
        {/* Title */}
        <div className="flex items-center">
          <h1 className="text-center text-2xl md:text-4xl font-bold capitalize">skills</h1>
          <FaTerminal className="ml-2" size={22} color="#888" />
        </div>

        {/* Sub-title */}
        {/* <h2 className="text-center md:text-2xl font-bold font-code my-5 uppercase">
          <span>&lt;</span>
          <span className="mx-0.5">Full-Stack Developer</span>
          <span>&gt;</span>
        </h2> */}

        <ul className="grid grid-cols-2 gap-3 w-full">
          <li className="text-center flex flex-col items-center text-gray-400 bg-navbar font-semibold rounded-md p-2 md:text-xl">
            <span className="mb-2 text-gray-400">
              <FaHtml5 size={23} />
            </span>
            <span>HTML 5</span>
          </li>
          <li className="text-center flex flex-col items-center text-gray-400 bg-navbar font-semibold rounded-md p-2 md:text-xl">
            <span className="mb-2 text-blue-300">
              <FaCss3 size={23} />
            </span>
            <span>CSS 3</span>
          </li>
          <li className="text-center flex flex-col items-center text-gray-400 bg-navbar font-semibold rounded-md p-2 md:text-xl">
            <span className="mb-2 text-green-300">
              <FaJs size={23} />
            </span>
            <span>JavaScript</span>
          </li>
          <li className="text-center flex flex-col items-center text-gray-400 bg-navbar font-semibold rounded-md p-2 md:text-xl">
            <span className="mb-2 text-pink-300">
              <FaReact size={23} />
            </span>
            <span>ReactJS</span>
          </li>
          <li className="text-center flex flex-col items-center text-gray-400 bg-navbar font-semibold rounded-md p-2 md:text-xl">
            <span className="mb-2 text-blue-300">
              <FaNodeJs size={23} />
            </span>
            <span>NodeJS</span>
          </li>
          <li className="text-center text-sm flex flex-col items-center text-gray-400 bg-navbar font-semibold rounded-md p-2 md:text-xl">
            <span className="mb-2 text-green-300">
              <FaDatabase size={23} />
            </span>
            <span>MongoDB & SQL</span>
          </li>
        </ul>

        {/* Contact button */}
        <ul className="flex flex-col">
          <li className="mb-3 font-bold text-sm flex items-center">
            <span className="mr-2">
              <FaCheck />
            </span>
            <span className="text-gray-400">Develop responsive web application</span>
          </li>
          <li className="mb-3 font-bold text-sm flex items-center">
            <span className="mr-2">
              <FaCheck />
            </span>
            <span className="text-gray-400">Proficient in version control (Git)</span>
          </li>
          <li className="mb-3 font-bold text-sm flex items-center">
            <span className="mr-2">
              <FaCheck />
            </span>
            <span className="text-gray-400">Interested in designing web using Redux</span>
          </li>
          <li className="mb-3 font-bold text-sm flex items-center">
            <span className="mr-2">
              <FaCheck />
            </span>
            <span className="text-gray-400">
              Spending constant efforts in Computer Science fundamentals (DS, Algorithms)
            </span>
          </li>
        </ul>
      </div>
    </Container>
  );
}

export default Skills;
