import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const boxRef1 = useRef(null);
  const boxRef2 = useRef(null);

  useEffect(() => {
    // Animation for the first box
    gsap.to(boxRef1.current, {
      scale: 10,                    // Scale to 15
      opacity: 1,                   // This will be controlled by scroll trigger (start, center, end)
      duration: 5,                  // Animation duration
      ease: 'power2.out',           // Ease type
      scrollTrigger: {
        trigger: boxRef1.current,   // Trigger animation on the first box
        start: 'top 90%',            // Start when top of .box reaches 90% of the viewport    
        end: 'top 40%',              // End when top of .box reaches 10% of the viewport
        scrub: 1,                    // Smooth scroll effect
        markers: true,               // Display markers for this box
        toggleActions: 'play none pasue none',  // Only play once per scroll

      }
    });

    // Animation for the second box
    gsap.to(boxRef2.current, {
      scale: 10,                    // Scale to 15
      opacity: 1,                   // This will be controlled by scroll trigger (start, center, end)
      duration: 8,                  // Animation duration
      ease: 'power2.out',           // Ease type
      scrollTrigger: {
        trigger: boxRef2.current,   // Trigger animation on the second box
        start: 'top 90%',            // Start when top of .box reaches 90% of the viewport    
        end: 'top 40%',              // End when top of .box reaches 10% of the viewport
        scrub: 1,                    // Smooth scroll effect
        markers: true,               // Display markers for this box
        toggleActions: 'play none pasue none',  // Only play once per scroll


      }
    });
  }, []);

  return (
    <>
      <div className="overflow-hidden">
        <div className="h-screen"></div>
        <div className="h-screen"></div>

        <div className="flex justify-center items-center h-screen gap-0">
          <div
            ref={boxRef1}  // Attach first ref
            className="w-60 h-28 bg-gray-900 rounded-xl box"
          ></div>
        </div>

        <div className="h-screen"></div>

        <div className="flex justify-center items-center h-screen gap-0">
          <div
            ref={boxRef2}  // Attach second ref
            className="w-60 h-28 bg-gray-900 rounded-xl box"
          ></div>
        </div>

        <div className="h-screen"></div>
        <div className="h-screen"></div>
      </div>
    </>
  );
};

export default App;
