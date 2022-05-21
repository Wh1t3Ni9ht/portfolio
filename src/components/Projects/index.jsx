import React from 'react';

import Flicking from '@egjs/react-flicking';
import '@egjs/react-flicking/dist/flicking.css';
// support IE9
import '@egjs/react-flicking/dist/flicking-inline.css';

// FontAwesome
import { FaCodepen, FaFilm, FaComments } from 'react-icons/fa';

// Assets
import Container from '../Container';
import ProjectItem from './ProjectItem';

function Projects() {
  function animatePanel(e) {
    const currentPanelIndex = e.currentTarget.currentPanel.index;
    const currentPanel = e.currentTarget.currentPanel.element;

    if (e.direction === 'NEXT') {
      const lastPanelIndex = e.currentTarget.panels.length - 1;
      const nextPanelIndex =
        currentPanelIndex === lastPanelIndex ? lastPanelIndex : currentPanelIndex + 1;

      currentPanel.style.opacity = e.currentTarget.currentPanel.visibleRatio;
      currentPanel.style.transform = `scale(${e.currentTarget.currentPanel.visibleRatio})`;

      const nextPanel = e.currentTarget.panels[nextPanelIndex].element;

      nextPanel.style.opacity = e.currentTarget.panels[nextPanelIndex].visibleRatio;
      nextPanel.style.transform = `scale(${e.currentTarget.panels[nextPanelIndex].visibleRatio})`;
    }

    if (e.direction === 'PREV') {
      const prevPanelIndex = currentPanelIndex === 0 ? 0 : currentPanelIndex - 1;

      currentPanel.style.opacity = e.currentTarget.currentPanel.visibleRatio;
      currentPanel.style.transform = `scale(${e.currentTarget.currentPanel.visibleRatio})`;

      const prevPanel = e.currentTarget.panels[prevPanelIndex].element;

      prevPanel.style.opacity = e.currentTarget.panels[prevPanelIndex].visibleRatio;
      prevPanel.style.transform = `scale(${e.currentTarget.panels[prevPanelIndex].visibleRatio})`;
    }
  }

  return (
    <Container>
      <div
        id="projects"
        className="flex flex-col items-center justify-evenly h-[calc(100vh-80px)] lg:h-[calc(100vh-80px)] snap-always snap-start"
      >
        {/* Title */}
        <div className="flex items-center">
          <h1 className="text-center text-2xl md:text-4xl font-bold capitalize">Projects</h1>
          <FaCodepen className="ml-2" size={22} color="#888" />
        </div>

        <Flicking
          className="!h-auto"
          moveType={['strict', { count: 1 }]}
          cameraTag="ul"
          align="prev"
          adaptive
          duration={500}
          onMove={(e) => animatePanel(e)}
          onHoldEnd={(e) => e.currentTarget.animating && e.currentTarget.disableInput()}
          onMoveEnd={(e) => e.currentTarget.enableInput()}
        >
          <ProjectItem
            title="hotflix"
            icon={<FaFilm size={22} />}
            details={[
              'get information about any movie or tv series.',
              'stream any movie or tv series.',
            ]}
          />
          <ProjectItem
            title="snappy"
            icon={<FaComments size={22} />}
            details={[
              'real-time messaging.',
              'add all of your friends.',
              'chat with your friends & family.',
              'share pictures and videos',
              'private & group chats',
            ]}
          />
        </Flicking>
      </div>
    </Container>
  );
}

export default Projects;
