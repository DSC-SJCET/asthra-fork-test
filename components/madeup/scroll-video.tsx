'use client';

// import React, { useEffect, useRef } from 'react';

// interface ScrollVideoProps {
//   src: string;
// }

// const ScrollVideo: React.FC<ScrollVideoProps> = ({ src }) => {
//   const vidRef = useRef<HTMLVideoElement>(null);

//   useEffect(() => {
//     const vid = vidRef.current;

//     if (!vid) {
//       console.error('Video element not found');
//       return;
//     }

//     // Pause video on load
//     vid.pause();

//     // Pause video on document scroll (stops autoplay once scroll started)
//     window.addEventListener('scroll', handleScroll);

//     function handleScroll() {
//       if (vid) {
//         vid.pause();
//       }
//     }

//     return () => {
//       // Cleanup scroll event listener when component unmounts
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   useEffect(() => {
//     const vid = vidRef.current;

//     if (!vid) {
//       console.error('Video element not found');
//       return;
//     }

//     const pageHeight = document.body.clientHeight; // Total height of the page
//     const videoDuration = 9; // Duration of the video in seconds
//     const sectionDuration = 2; // Duration of each section in seconds

//     // Refresh video frames on interval for smoother playback
//     const intervalId = setInterval(() => {
//       if (vid) {
//         const scrollPosition = window.pageYOffset;
//         const sectionIndex = Math.floor((scrollPosition / pageHeight) * 4); // Divide the page into 4 sections
//         const sectionStartTime = sectionIndex * sectionDuration; // Calculate the start time of the section
//         vid.currentTime = sectionStartTime + ((scrollPosition % (pageHeight / 4)) / (pageHeight / 4)) * sectionDuration;
//       }
//     }, 500); // Adjust the interval as needed

//     return () => {
//       // Cleanup interval when component unmounts
//       clearInterval(intervalId);
//     };
//   }, [src]);

//   return (
//     <video ref={vidRef} muted loop className="fixed top-0 left-0 w-screen h-screen object-cover z-[-1]">
//       <source src={src} type="video/mp4" />
//     </video>
//   );
// };

// export default ScrollVideo;
import React, { useEffect, useRef } from 'react';

interface ScrollVideoProps {
  src: string;
}

const ScrollVideo: React.FC<ScrollVideoProps> = ({ src }) => {
  const vidRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const vid = vidRef.current;

    if (!vid) {
      console.error('Video element not found');
      return;
    }

    // Pause video on load
    vid.pause();

    // Pause video on document scroll (stops autoplay once scroll started)
    window.addEventListener('scroll', handleScroll);

    async function handleScroll() {
      if (vid) {
        await playVideoForTwoSeconds();
      }
    }

    // Function to play video for 2 seconds
    async function playVideoForTwoSeconds() {
      await vid.play();
      setTimeout(() => {
        vid.pause();
      }, 3000); // 2000 milliseconds = 2 seconds
    }

    return () => {
      // Cleanup scroll event listener when component unmounts
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <video ref={vidRef} muted loop className="fixed top-0 left-0 w-screen h-screen object-cover z-[-1]">
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
};

export default ScrollVideo;
