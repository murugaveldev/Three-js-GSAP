// Import required modules
import React from 'react';
import { getProject } from '@theatre/core';
import studio from '@theatre/studio';

// Initialize Theatre.js studio in development mode
if (process.env.NODE_ENV === 'development') {
  studio.initialize();
}

// Create the project and sheet for Theatre.js
const proj = getProject('my first project');
const sheet = proj.sheet('A sheet');
const dummy = sheet.object('Some object', {
  n: 10,
});

// Define the App component
const App = () => {
  // You can manipulate the dummy object here or create animations
  return (
    <div>
      <h1>Theatre.js Animation Project</h1>
      <p>Value of n: {dummy.value.n}</p>
    </div>
  );
};

// Export the App component as default
export default App;
 