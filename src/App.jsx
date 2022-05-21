import { useRef } from 'react';
import { Navbar, Overview, Projects, ScrollDotIndicator, Skills } from './components';

function App() {
  const appRef = useRef();

  return (
    <div
      ref={appRef}
      className="snap-y snap-mandatory scroll-smooth overflow-scroll h-[calc(100vh-88px)] lg:h-auto lg:snap-none lg:overflow-visible"
    >
      <ScrollDotIndicator ref={appRef} />
      <Navbar />
      <Overview />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
