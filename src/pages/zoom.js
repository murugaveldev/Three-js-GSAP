import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Zoom = () => {
  useEffect(() => {
    gsap.utils.toArray('.rotate-section').forEach((section) => {
      gsap.fromTo(section,
        {
          rotation: 360, // Start rotation
          opacity: 0, // Start opacity
          x: -100, // Start from the left
        },
        {
          rotation: -25, // End rotation
          opacity: 1, // End opacity
          x: 0, // End position
          duration: 1.5, // Shorter duration for a quicker effect
          ease: 'power3.out', // Ease function for smoother transitions
          scrollTrigger: {
            trigger: section,
            start: 'top 85%', // Adjust start position for better effect
            end: 'bottom 15%', // Adjust end position
            scrub: 1, // Smooth animation with scrubbing
            markers: false, // Hide markers for production
          },
        }
      );
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 overflow-hidden flex flex-col items-center">
      <section className="rotate-section h-screen flex items-center justify-center bg-blue-600 w-[90%] rounded-md p-12">
        <div className="text-center max-w-3xl">
          <h2 className="text-5xl font-extrabold text-white mb-6">Customized Rotate Effect Section 1</h2>
          <p className="text-xl text-white">Observe the customized rotating and sliding animation as you scroll.</p>
        </div>
      </section>
      <section className="rotate-section h-screen flex items-center justify-center bg-blue-700 w-[90%] rounded-md p-12">
        <div className="text-center max-w-3xl">
          <h2 className="text-5xl font-extrabold text-white mb-6">Customized Rotate Effect Section 2</h2>
          <p className="text-xl text-white">Another section with enhanced rotation and sliding effects.</p>
        </div>
      </section>
      <section className="rotate-section h-screen flex items-center justify-center bg-blue-800 w-[90%] rounded-md p-12">
        <div className="text-center max-w-3xl">
          <h2 className="text-5xl font-extrabold text-white mb-6">Customized Rotate Effect Section 3</h2>
          <p className="text-xl text-white">Experience further customization in this rotating and sliding section.</p>
        </div>
      </section>
      <section className="rotate-section h-screen flex items-center justify-center bg-green-600 w-[90%] rounded-md p-12">
        <div className="text-center max-w-3xl">
          <h2 className="text-5xl font-extrabold text-white mb-6">Customized Rotate Effect Section 4</h2>
          <p className="text-xl text-white">Final section showcasing the ultimate rotation and sliding animation.</p>
        </div>
      </section>
    </div>
  );
};

export default Zoom;
