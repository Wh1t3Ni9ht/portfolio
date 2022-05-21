import { useRef } from 'react';
import { Navbar, Overview, Projects, ScrollDotIndicator, Skills } from './components';

function App() {
  const appRef = useRef();

  return (
    <div ref={appRef} className="lg:h-auto lg:overflow-visible">
      <Navbar />
      <ScrollDotIndicator ref={appRef} />
      <Overview />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
