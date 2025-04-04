import "../styles/bio.css";
import LineBreak from "./lineBreak";
import { motion } from "framer-motion";
import { Element } from "react-scroll";
import YoutubeLogo from "../svgComponents/YoutubeLogo.tsx";
import { useEffect, useState } from "react";

const title = "Who Am I?";

const Bio: React.FC = () => {
  const [marginTop, setMarginTop] = useState(0);

  // Function to update the margin
  const updateMargin = () => {
    const viewportHeight = window.innerHeight;
    setMarginTop(viewportHeight - 150); // Add 50px extra margin for good measure
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
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.2, delay: 0.2 }}
      >
        <Element name="me" />
        <LineBreak marginTop={0} width={90} />
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
                <YoutubeLogo className="yt_logo" />
                {/* <img src={yt_logo} className="yt-logo" /> */}
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
              Hey! I’m Sam Knight a 23 year old sound designer, game developer,
              and creative coder based in Brooklyn, NY. My expertise lies
              between interactive audio, game development, and hardware design,
              creating whatever I can from games to custom-built music tools.
              <br></br>
              <br></br>I studied Electronic Production & Design at Berklee
              College of Music, where I found my love for blending technology
              and creativity. I never stop working on new projects, learning new
              softwares, or improving my current skills. I'm always looking to
              get in touch with those interseted in similar pursuits, so feel
              free to contact me below!
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Bio;
