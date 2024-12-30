import { useState, useEffect, useRef } from "react";
import "../styles/bio.css";
import LineBreak from "./lineBreak";
import { motion } from "framer-motion";

const title = "About Me!";

const Bio: React.FC = () => {
  const [pathLengths, setPathLengths] = useState<number[]>([]);
  const pathRefs = useRef<(SVGPathElement | null)[]>([]);
  const svgContainerRef = useRef<HTMLDivElement | null>(null);

  const [marginTop, setMarginTop] = useState(0);

  useEffect(() => {
    // Calculate the total length of each path on mount
    const lengths = pathRefs.current.map((path) =>
      path ? path.getTotalLength() : 0
    );
    setPathLengths(lengths);

    // Set initial strokeDasharray and strokeDashoffset
    pathRefs.current.forEach((path, index) => {
      if (path) {
        const length = lengths[index];
        path.style.strokeDasharray = `${length}`;
        path.style.strokeDashoffset = `${length}`; // Start fully undrawn
      }
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!svgContainerRef.current) return;

      const svgBounds = svgContainerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate if SVG is in the viewport
      const isInViewport = svgBounds.bottom > 0 && svgBounds.top < windowHeight;

      // If SVG is not in the viewport, reset the dashoffset
      if (!isInViewport) {
        pathRefs.current.forEach((path) => {
          if (path) {
            const length = path.getTotalLength();
            path.style.strokeDashoffset = `${length}`; // Fully undrawn
          }
        });
        return; // Stop execution if not in view
      }

      // If SVG is in the viewport, animate it based on scroll position
      const visibleTop = Math.max(0, svgBounds.top);
      const visibleBottom = Math.min(windowHeight, svgBounds.bottom);
      const visibleHeight = visibleBottom - visibleTop;
      const scrollRatio = visibleHeight / svgBounds.height;

      pathRefs.current.forEach((path, index) => {
        if (path) {
          const length = pathLengths[index];
          const offset = Math.max(0, length * (1 - scrollRatio));
          path.style.strokeDashoffset = `${offset}`;
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathLengths]);

  // Function to update the margin
  const updateMargin = () => {
    const viewportHeight = window.innerHeight;
    setMarginTop(viewportHeight + 50); // Add 50px extra margin for good measure
  };

  useEffect(() => {
    // Update margin initially
    updateMargin();

    // Add event listener for window resize
    window.addEventListener("resize", updateMargin);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("resize", updateMargin);
    };
  }, []);

  return (
    <>
      <div className="me">
        {title.split("").map((letter, index) => {
          const rotateDirection = Math.random() > 0.5 ? 10 : -10;
          return (
            <motion.h1
              key={index}
              style={{ marginTop: `${marginTop}px`, display: "inline-block" }}
              whileHover={{
                y: -10,
                rotate: rotateDirection,
              }}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.h1>
          );
        })}
      </div>
      <LineBreak marginTop={0} width={65} />
      <div className="bio-container" ref={svgContainerRef}>
        <div className="bio-svg-container">
          <svg id="Layer_2" viewBox="0 0 1800.7 1067.1" className="bio-svg">
            <defs>
              <style>
                {`.svg-path {
                fill: none; 
                stroke: #000;
                stroke-miterlimit: 10;
                stroke-width: 4px;
                transition: stroke-dashoffset 0.8s linear; /* Animation */
              }`}
              </style>
            </defs>
            <g
              id="Layer_1-2"
              data-name="Layer_1"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                ref={(el) => (pathRefs.current[0] = el)}
                className="svg-path"
                d="M978.24,5.44c-6.15,29.61-10.1,67.89,22.5,83.43,14.17,6.75,30.42,7.67,45.87,7.94,21.71.37,43.43.46,65.14.68,88.61.92,177.22,1.81,265.83,2.75,82.69.88,168.08,2.8,245.19,36.22,34.42,14.92,66.12,36.04,91.39,63.92,24.82,27.39,43.16,60.25,55.95,94.81,29.09,78.63,28.8,163.83,25.78,246.48-3.19,87.26-8.88,174.72-24.46,260.76-6.88,38.01-14.1,78.16-34.54,111.6s-55.34,54.47-91.35,68.6c-73.6,28.87-154.53,28.82-232.28,24.06-86.54-5.3-172.98-13.16-259.42-19.89-22.08-1.72-44.16-3.44-66.24-5.16-20.23-1.58-40.64-3.94-60.96-2.99-16.92.79-34.86,4.16-49.09,13.87-11.3,7.7-20.15,19.3-24.37,32.34-4.03,12.45-3.2,25.9,4.05,36.99,1.05,1.61,3.65.11,2.59-1.51-8.82-13.48-7.21-30.11.2-43.86,8.29-15.4,22.28-25.49,38.88-30.43,18.67-5.55,38.51-5.05,57.75-3.76,21.55,1.44,43.07,3.31,64.6,4.99,87.4,6.81,174.78,13.92,262.2,20.39,76.72,5.68,155.88,9.44,230.8-11.43,35.06-9.77,70.77-24.7,98.43-48.87,27.86-24.34,42.18-58.43,51.08-93.59,10.12-40.01,16.32-81.21,21.38-122.13,5.3-42.93,8.69-86.08,11.04-129.26,4.59-84.17,9.98-171.03-7.67-254.09-14.73-69.31-47.82-136.48-105.1-180.15-61.8-47.12-140.58-63.2-216.53-68.19-43.3-2.85-86.76-2.66-130.14-3.11-44.16-.46-88.31-.91-132.47-1.37s-88.31-.91-132.47-1.37c-32.33-.33-82.12,4.25-92.98-35.79-4.6-16.96-1.18-35.22,2.32-52.05.39-1.88-2.5-2.69-2.89-.8h0Z"
              />
              <path
                ref={(el) => (pathRefs.current[1] = el)}
                className="svg-path"
                d="M869.26,1.45c-1.09,22.65-5.26,45.05-12.66,66.49-3.35,9.71-7.21,20.27-15.68,26.71-9.06,6.89-21.64,7.87-32.6,8.61-23.44,1.57-46.86-1.38-70.03-4.67-22.2-3.16-44.4-6.16-66.7-8.51-91.44-9.64-183.5-11.39-275.37-12.63-82.41-1.11-168.62-.38-244.34,36.45-31.75,15.44-61.09,36.87-83.13,64.66-24.14,30.43-36.91,67.08-44,104.9-7.94,42.34-11.24,85.77-14.94,128.64-3.97,46.02-6.87,92.14-8.46,138.3-2.97,86.35-3.56,175.72,24.89,258.42,12.05,35.04,29.2,68.49,52.34,97.52,23.16,29.06,52.37,52.4,85.25,69.61,66.58,34.85,142.87,45.29,216.58,53.66,84.55,9.6,171.51,16.32,255.34-2.35,20.93-4.66,41.23-11.18,61.25-18.8,19.89-7.58,39.78-15.65,60.77-19.69,33.11-6.37,81.42-.4,93.27,37.17,4.33,13.72,2.74,30.48-10.76,38.35-1.67.97-.16,3.57,1.51,2.59,25.25-14.72,13.78-51.65-4.98-66.47-29.58-23.36-70.59-18.93-104.15-8.18-20.36,6.52-39.93,15.23-60.24,21.89-20.29,6.64-41.13,11.57-62.19,15.02-43.22,7.08-87.25,7.99-130.93,5.97-42.42-1.96-84.75-6.5-126.87-11.83-38.41-4.85-76.79-11.05-114.1-21.58s-71.94-24.92-103.21-46.54c-31.88-22.04-57.89-51.28-77.48-84.64C14.1,796.36,3.72,709.13,3.13,624.6c-.65-92.19,6.08-184.62,15.86-276.24,4.47-41.91,9.27-84.85,26-123.96,14.95-34.97,40.06-64.08,71.02-85.92,68.56-48.37,154.01-57.67,235.68-58.26,45.77-.33,91.6.77,137.35,1.97,46.34,1.22,92.67,3.19,138.88,6.87,22.91,1.82,45.8,4.07,68.61,6.86,22.79,2.79,45.46,6.68,68.3,9.05,21.19,2.19,44.86,4.02,65.62-1.99,18.57-5.37,25.22-22.09,30.64-39.01,6.49-20.25,10.16-41.29,11.18-62.52.09-1.93-2.91-1.93-3,0h0Z"
              />
            </g>
          </svg>
        </div>

        <p className="bio">
          Hello! My name is Sam Knight, I’m a 23 year old game developer and
          sound designer from Brooklyn, NY. I recently graduated from Berklee
          College of Music with a degree in Electronic Production & Design, with
          a minor in Creative Coding. Most of my focus at Berklee had been on
          game development and audio programming, where my main interests lie. I
          love creating things for others to use and enjoy, such as video games
          or software instruments. I have participated in multiple game jams,
          both in a team as the sound designer/implementer, or as a solo
          developer. In my free time, I’m either making music of my own, or
          building devices that help me get weirder sounds. You can check out my
          demo reel above if you’re interested in seeing more.
        </p>
      </div>
    </>
  );
};

export default Bio;
