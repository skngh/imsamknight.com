import { useState, useEffect } from "react";

import "../styles/bio.css";
import LineBreak from "./lineBreak";
import { motion, useScroll } from "framer-motion";
import yt_logo from "../assets/images/yt-logo.png";
const title = "About Me!";

const Bio: React.FC = () => {
  const [marginTop, setMarginTop] = useState(0);
  const { scrollYProgress } = useScroll();

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
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
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
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
      >
        <LineBreak marginTop={0} width={65} />
      </motion.div>
      <div className="bio-container">
        <hr className="line-divider" />

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="bio-link-container">
            <div className="yt-container">
              <p>Check out my</p>
              <a href="https://www.youtube.com/@ImSamKnight" target="_blank">
                <img src={yt_logo} className="yt-logo" />
              </a>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.3 }}
        >
          <div className="bio-border">
            <p className="bio">
              Hello! My name is Sam Knight, blah blah blah blah blah blah blah
              blah ablha asd blah blah blah blah blah blah blah blah ablha asd
              blah blah blah blah blah blah blah blah ablha asd blah blah blah
              blah blah blah blah blah ablha asd blah blah blah blah blah blah
              blah blah ablha asd blah blah blah blah blah blah blah blah ablha
              asd blah blah blah blah blah blah blah blah ablha asd blah blah
              blah blah blah blah blah blah ablha asd blah blah blah blah blah
              blah blah blah ablha asd blah blah blah blah blah blah blah blah
              ablha asd blah blah blah blah blah blah blah blah ablha asd blah
              blah blah blah blah blah blah blah ablha asd blah blah blah blah
              blah blah blah blah ablha asd blah blah blah blah blah blah blah
              blah ablha asd blah blah blah blah blah blah bla.
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Bio;
