'use client';
import React, { useEffect, useState } from 'react';

const Use100vhScroll: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [sectionsScrolled, setSectionsScrolled] = useState(0);

  useEffect(() => {
    const handleScroll = (): void => {
      // Calculate the scroll threshold
      const scrollThreshold: number = window.innerHeight;

      // Check if enough scrolling has occurred to trigger the video play
      if (window.scrollY >= sectionsScrolled * scrollThreshold) {
        // Update the sections scrolled counter
        setSectionsScrolled((prev: number) => prev + 1);
      }
    };

    // Attach scroll event listener
    window.addEventListener('scroll', handleScroll);

    return () => {
      // Cleanup scroll event listener
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionsScrolled]); // Re-run effect when sectionsScrolled changes

  useEffect(() => {
    const vid = document.getElementById('video') as HTMLVideoElement;

    if (!vid) {
      console.error('Video element not found');
      return;
    }

    // Pause video on load
    vid.pause();

    // Pause video on document scroll (stops autoplay once scroll started)
    const handleScroll = (): void => {
      playVideoForTwoSeconds();
    };

    // Function to play video for 2 seconds
    const playVideoForTwoSeconds = (): void => {
      void vid.play();
      setTimeout(() => {
        vid.pause();
      }, 2000); // 2000 milliseconds = 2 seconds
    };

    // Attach scroll event listener
    window.addEventListener('scroll', handleScroll);

    return () => {
      // Cleanup scroll event listener when component unmounts
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <div>{children}</div>;
};

export default Use100vhScroll;
