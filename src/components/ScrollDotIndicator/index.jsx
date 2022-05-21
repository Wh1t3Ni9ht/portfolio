import React, { useState } from 'react';

const ScrollDotIndicator = React.forwardRef((props, ref) => {
  const [selectedPage, setSelectedPage] = useState(0);

  function scrollPage(page) {
    setSelectedPage(page);

    window.scroll({
      top: (window.innerHeight - 80) * page,
      behavior: 'smooth',
    });
  }

  return (
    <div className="w-10 fixed right-0 top-20 bottom-0 flex-col items-center justify-center hidden lg:flex">
      <button
        onClick={() => scrollPage(0)}
        type="button"
        className={`border border-gray-500 p-2 mb-2 ${selectedPage === 0 && 'bg-gray-500'}`}
      >
        1
      </button>
      <button
        onClick={() => scrollPage(1)}
        type="button"
        className={`border border-gray-500 p-2 mb-2 ${selectedPage === 1 && 'bg-gray-500'}`}
      >
        2
      </button>
      <button
        onClick={() => scrollPage(2)}
        type="button"
        className={`border border-gray-500 p-2 mb-2 ${selectedPage === 2 && 'bg-gray-500'}`}
      >
        3
      </button>
      <button
        onClick={() => scrollPage(3)}
        type="button"
        className={`border border-gray-500 p-2 mb-2 ${selectedPage === 3 && 'bg-gray-500'}`}
      >
        4
      </button>
    </div>
  );
});

export default ScrollDotIndicator;
