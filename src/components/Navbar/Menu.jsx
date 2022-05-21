import React from 'react';

// FontAwesome
import { FaCodepen, FaTerminal, FaPaperPlane } from 'react-icons/fa';

function Menu({ setShowMobileMenu }) {
  return (
    <>
      <li className="w-full lg:w-auto mb-6 lg:mb-0 lg:mr-6 capitalize font-bold text-xl lg:py-3.5 lg:border-b lg:border-transparent lg:hover:border-[#d1d5db] lg:transition-colors lg:duration-300">
        <a
          onClick={() => setShowMobileMenu(false)}
          className="flex flex-col lg:flex-row items-center"
          href="#skills"
        >
          <span className="mb-2 lg:mb-0 lg:mr-2">
            <FaTerminal color="#888" />
          </span>
          <span>skills</span>
        </a>
      </li>
      <li className="w-full lg:w-auto mb-6 lg:mb-0 lg:mr-6 capitalize font-bold text-xl lg:py-3.5 lg:border-b lg:border-transparent lg:hover:border-[#d1d5db] lg:transition-colors lg:duration-300">
        <a
          onClick={() => setShowMobileMenu(false)}
          className="flex flex-col lg:flex-row items-center"
          href="#projects"
        >
          <span className="mb-2 lg:mb-0 lg:mr-2">
            <FaCodepen color="#888" />
          </span>
          <span>projects</span>
        </a>
      </li>
      <li className="w-full lg:w-auto mb-6 lg:mb-0 lg:mr-6 capitalize font-bold text-xl lg:py-3.5 lg:border-b lg:border-transparent lg:hover:border-[#d1d5db] lg:transition-colors lg:duration-300">
        <a
          onClick={() => setShowMobileMenu(false)}
          className="flex flex-col lg:flex-row items-center"
          href="#contact-me"
        >
          <span className="mb-2 lg:mb-0 lg:mr-2">
            <FaPaperPlane color="#888" />
          </span>
          <span>contact</span>
        </a>
      </li>
    </>
  );
}

export default Menu;
