import React from 'react';
import { motion } from 'framer-motion';

// Icons
import { FaCheck } from 'react-icons/fa';

const ProjectItem = React.forwardRef(({ title, icon, details }, ref) => (
  <motion.li
    ref={ref}
    className="py-4 text-center flex flex-col flex-none w-full items-center justify-center bg-navbar rounded-md"
  >
    <span className="mb-4 text-white">{icon}</span>
    <span className="mb-4 text-2xl uppercase font-semibold text-blue-400">{title}</span>
    {details.map((detail) => (
      <p key={detail} className="flex">
        <span className="mt-2 text-green-400">
          <FaCheck />
        </span>
        <span className="mb-4 w-52 capitalize text-gray-400">{detail}</span>
      </p>
    ))}
  </motion.li>
));

export default ProjectItem;
