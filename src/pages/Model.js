import React, { useState, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei'; // Drei helpers for GLTF and OrbitControls
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Model = () => {
    const [isLoading, setIsLoading] = useState(true);
    const modelRef = useRef(null); // Reference to the 3D model for animation

    // Hook to load the GLB model
    const { scene } = useGLTF('/model/earth.glb'); // Ensure the model path is correct

    useEffect(() => {
        if (scene) {
            setIsLoading(false); // Set loading state to false once the model is loaded
        }
    }, [scene]);

    // Scroll-triggered zoom-in animation
    useEffect(() => {
        if (modelRef.current) {
            gsap.to(modelRef.current.scale, {
                scrollTrigger: {
                    trigger: modelRef.current,
                    start: "top bottom", // Start animation when the model comes into view
                    end: "bottom top",   // End animation when the model is fully in view
                    scrub: true,         // Smooth scrolling effect
                    markers: false,      // Hide markers for production
                    toggleActions: "play reverse play reverse", // Play/Reverse animation on scroll
                },
                x: 3,                 // Final scale on the x-axis (zoom in effect)
                y: 3,                 // Final scale on the y-axis (zoom in effect)
                z: 3,                 // Final scale on the z-axis (zoom in effect)
                duration: 3,          // Animation duration
                ease: "power2.out",   // Easing for smooth effect
            });
        }
    }, []);

    return (
        <>
            <div className="h-screen"></div> {/* Space before model */}
            <div className="h-screen"></div> {/* Space before model */}
            <div className="h-screen w-full bg-gray-100 flex justify-center items-center">
                {isLoading ? (
                    <div className="text-white text-xl">Loading 3D Model...</div>
                ) : (
                    <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
                        {/* Ambient light for the scene */}
                        <ambientLight intensity={0.5} />
                        {/* Directional light simulating sunlight */}
                        <directionalLight position={[5, 5, 5]} intensity={1} />
                        {/* Display the 3D model */}
                        <primitive
                            ref={modelRef} // Attach the ref to the 3D model
                            object={scene}
                            scale={1}
                            position={[0, 0, 0]}
                        />
                        {/* OrbitControls allows the user to interact with the 3D model */}
                        <OrbitControls />
                    </Canvas>
                )}
            </div>
        </>
    );
};

export default Model;
