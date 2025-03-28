import React, { useState } from "react";

const InstagramLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  // State to track hover
  const [isHovered, setIsHovered] = useState(false);

  // Conditional fill color for hover effect
  const hoverFillColor = isHovered ? "#f46036" : "white"; // Change to blue on hover

  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      height="23"
      onMouseEnter={() => setIsHovered(true)} // On hover, set isHovered to true
      onMouseLeave={() => setIsHovered(false)} // On mouse leave, set isHovered to false
    >
      <path
        fill={hoverFillColor}
        style={{ transition: "fill 0.2s ease-in-out" }}
        d="M50,0c7.39,2.85,11.15,6.6,14,14v36c-2.85,7.4-6.61,11.15-14,14H14c-7.4-2.85-11.15-6.61-14-14V14C2.85,6.6,6.61,2.85,14,0h36ZM18.78,6.28c-10.21,1.3-12.05,5.38-12.82,15.18-.63,8.03-1.86,31.07,6.31,34.77,6.11,2.77,34.21,2.78,40.11-.35,1.36-.72,3.22-2.74,3.85-4.15,2.77-6.11,2.78-34.21-.35-40.11-.72-1.36-2.74-3.22-4.15-3.85-5.76-2.61-26.17-2.35-32.95-1.49Z"
      />
      <g>
        <circle
          fill={hoverFillColor}
          style={{ transition: "fill 0.2s ease-in-out" }}
          cx="49"
          cy="15"
          r="4.05"
        />
        <path
          fill={hoverFillColor}
          style={{ transition: "fill 0.2s ease-in-out" }}
          d="M48.73,32c0,9.24-7.49,16.73-16.73,16.73s-16.73-7.49-16.73-16.73,7.49-16.73,16.73-16.73,16.73,7.49,16.73,16.73ZM42.3,32c0-5.69-4.61-10.3-10.3-10.3s-10.3,4.61-10.3,10.3,4.61,10.3,10.3,10.3,10.3-4.61,10.3-10.3Z"
        />
      </g>
    </svg>
  );
};

export default InstagramLogo;
