import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Project, Sheet, editable } from '@theatre/core';
import { useTheatre } from '@theatre/core';

// Create and configure the Theatre.js project and sheet
const project = new Project('Demo Project');
const sheet = project.sheet('Demo Sheet');

// Example setup for animation
sheet.object({
  box: {
    position: { x: 1, y: 2, z: 3 },
    rotation: { x: 0, y: 1, z: 0 },
    scale: { x: 1, y: 1, z: 1 }
  }
});

// Define a simple React component
const AnimatedMesh = () => {
  const meshRef = useRef(null);
  const { currentSheet } = useTheatre();

  useEffect(() => {
    if (meshRef.current && currentSheet) {
      // Animate the mesh
      const theatreObject = editable(meshRef.current);

      theatreObject.animate({
        position: { x: 5, y: 5, z: 5 },
        rotation: { x: Math.PI, y: Math.PI, z: Math.PI },
        scale: { x: 2, y: 2, z: 2 }
      });

      return () => {
        theatreObject.stop();
      };
    }
  }, [currentSheet]);

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
};

// Main App component
const App = () => {
  return (
    <Canvas
      camera={{
        position: [5, 5, -5],
        fov: 75,
      }}
    >
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <AnimatedMesh />
    </Canvas>
  );
};

export default App 