import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Text = () => {
  const textRef = useRef(null);
  const [scrambledText, setScrambledText] = useState('Text Scramble Animation');
  const originalText = 'Text Scramble Animation';

  useEffect(() => {
    const textElement = textRef.current;

    const scrambleText = (text) => {
      const chars = '!<>-_\\/[]{}—=+*^?#________';
      let scramble = '';
      for (let i = 0; i < text.length; i++) {
        scramble += chars[Math.floor(Math.random() * chars.length)];
      }
      return scramble;
    };

    const animateScramble = () => {
      let iterations = 0;
      const interval = setInterval(() => {
        setScrambledText(scrambleText(originalText));
        iterations += 1;
        if (iterations > 10) { // Number of scramble iterations
          clearInterval(interval);
          setScrambledText(originalText); // Set the original text at the end
        }
      }, 50); // Speed of scrambling
    };

    // GSAP animation for text reveal
    gsap.fromTo(textElement,
      {
        y: '100%', // Start with the text positioned off-screen (hidden below)
        opacity: 0, // Start with zero opacity
      },
      {
        y: '0%', // Animate to its normal position (revealed)
        opacity: 1, // Fade in to full opacity
        duration: 1.5, // Duration of the animation
        ease: 'power3.out', // Smooth easing
        scrollTrigger: {
          trigger: textElement, // Trigger the animation when this element enters the viewport
          start: 'top 80%', // Start the animation when the element's top is 80% from the top of the viewport
          end: 'bottom 60%', // End the animation when the element's bottom is 60% from the top of the viewport
          scrub: true, // Smooth scrolling
          onEnter: animateScramble, // Trigger scramble on enter
        },
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 overflow-hidden flex flex-col items-center">
      <section className="h-screen flex items-center justify-center bg-blue-600 w-full rounded-md p-12">
        <div className="text-center max-w-3xl">
          <h2 ref={textRef} className="text-5xl font-extrabold text-white mb-6">{scrambledText}</h2>
          <p className="text-xl text-white">This text reveals and scrambles as you scroll down the page.</p>
        </div>
      </section>
    </div>
  );
};

export default Text;
