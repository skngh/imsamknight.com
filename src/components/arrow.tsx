import { useState, useEffect, useRef } from "react";
import "../styles/arrow.css";

const Arrow = () => {
  const [pathLengths, setPathLengths] = useState<number[]>([]);
  const pathRefs = useRef<SVGPathElement[]>([]);
  const [scrolled, setScrolled] = useState(false);

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
        path.style.strokeDashoffset = "0"; // Start fully drawn
      }
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY; // Current scroll position
      const maxScroll = window.innerHeight / 2; // Adjust as needed
      const scrollRatio = Math.min(scrollPosition / maxScroll, 1); // Clamp between 0 and 1

      // Update strokeDashoffset based on scroll position
      pathRefs.current.forEach((path, index) => {
        if (path) {
          const length = pathLengths[index];
          const offset = length * scrollRatio; // Increase offset as you scroll
          path.style.strokeDashoffset = `${offset}`;
        }
      });
      // Update scrolled state for the container class
      setScrolled(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathLengths]);

  return (
    <div className={`arrow-container ${scrolled ? "scrolled" : ""}`}>
      <svg
        id="Layer_2"
        viewBox="0 0 44.75 77.55"
        width="120.375"
        height="280.775"
        className="arrow"
      >
        <defs>
          <style>
            {`.cls-1 {
                fill: none;
                stroke: #000;
                stroke-miterlimit: 10;
                transition: stroke-dashoffset 0.1s ease-out; /* Smooth undrawing */
              }`}
          </style>
        </defs>
        <g
          id="Layer_1-2"
          data-name="Layer_1"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            ref={(el) => (pathRefs.current[0] = el!)}
            className="cls-1"
            d="M23.27.03c-2.94,50.55-1.94,76.22,3,77,3.74.59,9.74-13.07,18-41"
          />
          <path
            ref={(el) => (pathRefs.current[1] = el!)}
            className="cls-1"
            d="M.27,62.03c7.33,4.67,14.67,9.33,22,14"
          />
        </g>
      </svg>
    </div>
  );
};

export default Arrow;
