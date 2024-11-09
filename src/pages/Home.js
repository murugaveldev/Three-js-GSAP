import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  useEffect(() => {
    // Get all sections
    const sections = gsap.utils.toArray('.section');

    // Create a timeline with ScrollTrigger
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '.section',
        start: 'top top',
        end: '+=1000', // Adjust based on the length of your sections
        scrub: true,
        pin: true,
        markers: false, // Disable markers in production
      }
    });

    // Add zoom-in effect for the first section
    timeline
      .fromTo(sections[0],
        {
          scale: 1, // Initial scale
          opacity: 1, // Initial opacity
          y: 0, // Initial position
        },
        {
          scale: 9.2, // Zoom in effect
          opacity: 1, // Maintain opacity
          y: -50, // Move up slightly
          duration: 1, // Animation duration
          ease: 'power3.out', // Smooth easing
        }
      );

    // Add static styling for the second section
    gsap.set(sections[1], {
      opacity: 1, // Ensure it’s visible
      scale: 1, // Ensure it’s at default scale
    });
    
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 overflow-hidden flex flex-col items-center">
      <section className="section h-screen flex items-center justify-center bg-blue-600 w-full rounded-md p-12">
        <div className="text-center max-w-3xl">
          <h2 className="text-5xl font-extrabold text-white mb-6">Zoom Effect Section 1</h2>
          <p className="text-xl text-white">This section zooms in while the second section remains static.</p>
        </div>
      </section>

      <section className="section h-screen flex items-center justify-center bg-green-600 w-full rounded-md p-12">
        <div className="text-center max-w-3xl">
          <h2 className="text-5xl font-extrabold text-white mb-6">Static Section</h2>
          <p className="text-xl text-white">This section remains static and does not animate.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
