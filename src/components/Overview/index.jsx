import React from 'react';

import { motion } from 'framer-motion';

// Icons
import { FaMicrochip, FaLaptopCode, FaRobot, FaBrain } from 'react-icons/fa';

// Assets
import WAVE from '../../assets/wave.png';
import Container from '../Container';

function Overview() {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center">
        {/* Title */}
        <div className="flex mb-6">
          <h1 className="text-center text-2xl md:text-4xl font-bold capitalize">
            Hello I&#39;m Muhammad
          </h1>
          <motion.div
            className="mt-2 w-6 h-6 md:w-10 md:h-10 origin-bottom-right"
            initial={{ translateY: -15, translateX: 15 }}
            animate={{
              rotate: [-30, -20, -30, -20, -30, -20, -30],
            }}
            transition={{ duration: 1, repeat: 'Infinity', repeatDelay: 2 }}
          >
            <img src={WAVE} alt="hand waving" className="w-full h-full" />
          </motion.div>
        </div>

        {/* Sub-title */}
        <h2 className="text-center md:text-2xl font-bold font-code my-5 uppercase">
          <span>&lt;</span>
          <span className="mx-0.5">Full-Stack Developer</span>
          <span>&gt;</span>
        </h2>

        <ul className="grid sm:grid-cols-2 gap-2 mt-2">
          <li className="text-center flex flex-col items-center text-gray-400 font-semibold border-b border-gray-600 rounded-lg p-2 md:text-xl">
            <span className="mb-2 text-gray-400">
              <FaMicrochip />
            </span>
            <span>computer engineering major</span>
          </li>
          <li className="text-center flex flex-col items-center text-gray-400 font-semibold border-b border-gray-600 rounded-lg p-2 md:text-xl">
            <span className="mb-2 text-blue-300">
              <FaLaptopCode />
            </span>
            <span>coding enthusiast</span>
          </li>
          <li className="text-center flex flex-col items-center text-gray-400 font-semibold border-b border-gray-600 rounded-lg p-2 md:text-xl">
            <span className="mb-2 text-green-300">
              <FaRobot />
            </span>
            <span>Future machine learning developer</span>
          </li>
          <li className="text-center flex flex-col items-center text-gray-400 font-semibold border-b border-gray-600 rounded-lg p-2 md:text-xl">
            <span className="mb-2 text-pink-300">
              <FaBrain />
            </span>
            <span>computer nerd</span>
          </li>
        </ul>

        {/* Contact button */}
        <button type="button" className="w-full border rounded-md mt-5">
          Contact
        </button>
      </div>
    </Container>
  );
}

export default Overview;
