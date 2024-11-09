// src/components/theatreConfig.js
import { Project, Sheet } from '@theatre/core';

// Create a new Theatre.js project
const project = new Project('Demo Project');

// Create a new sheet
const sheet = project.sheet('Demo Sheet');

// Define any initial animation states or objects here
sheet.object({
  box: {
    position: { x: 1, y: 2, z: 3 },
    rotation: { x: 0, y: 1, z: 0 },
    scale: { x: 1, y: 1, z: 1 }
  }
});

// Export the project and sheet state
export { project, sheet };
