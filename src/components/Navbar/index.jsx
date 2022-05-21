import { useState } from 'react';

import { motion } from 'framer-motion';

// Components
import Container from '../Container';

// Internal components
import Menu from './Menu';

function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <header className="bg-navbar fixed top-0 right-0 left-0 z-50">
      <Container>
        <div className="h-20 flex items-center justify-between">
          {/* LOGO */}
          <motion.div
            className="text-3xl"
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <span className="text-[#888]">&#60;</span>
            <span className="font-code mr-2">Muhammad</span>
            <span className="text-[#888]">&#47;&#62;</span>
          </motion.div>

          {/* Desktop menu */}
          <motion.ul
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className={`
                hidden
                absolute
                top-full
                left-0
                right-0
                bg-navbar
                flex-col
                items-center
                pt-3
                
                lg:flex
                lg:flex-row
                lg:relative
                lg:top-0
                lg:pt-0
              `}
          >
            <Menu />
          </motion.ul>

          {/* Mobile menu */}
          <motion.ul
            initial={{ y: 'calc(-100% - 80px)' }}
            animate={{ y: showMobileMenu ? 0 : 'calc(-100% - 80px)' }}
            transition={{ duration: 0.5 }}
            className={`
                absolute
                top-full
                left-0
                right-0
                bg-navbar
                flex-col
                items-center
                pt-3
              `}
          >
            <Menu setShowMobileMenu={setShowMobileMenu} />
          </motion.ul>

          {/* Mobile toggle */}
          <motion.div
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="lg:hidden"
          >
            <button
              type="button"
              className="w-5 h-10 relative"
              onClick={() => setShowMobileMenu((prev) => !prev)}
            >
              <span
                className={`absolute right-0 left-0 border block transition-all duration-500 ${
                  showMobileMenu ? 'top-1/2 rotate-45 border-gray-400' : 'top-3 border-gray-300'
                }`}
              />
              <span
                className={`absolute top-5 right-0 left-0 border block transition-all duration-500 ${
                  showMobileMenu && 'opacity-0'
                }`}
              />
              <span
                className={`absolute right-0 left-0 border block transition-all duration-500 ${
                  showMobileMenu ? 'top-1/2 -rotate-45 border-gray-400' : 'top-7 border-gray-300'
                }`}
              />
            </button>
          </motion.div>
        </div>
      </Container>
    </header>
  );
}

export default Navbar;
