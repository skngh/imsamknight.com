import React from "react";
import { motion } from "motion/react";
import "../styles/header.css";

const BoldText = ["Sound designer, Audio programmer, Game developer"];
const NormalText = [
  "Musician, Unity, Wwise, Pure data, MaxMSP, Ableton, DaisySP, Web Developer, Drummer, Composer, Synth Lover, Youtuber",
];

const Header: React.FC = () => {
  return (
    <>
      <div className="header">
        {NormalText[0].split(", ").map((word, index) => {
          const isLeftToRight = Math.random() > 0.5;
          return (
            <motion.div
              key={index}
              className="header-text"
              style={{ y: Math.random() * 150, width: "100%" }}
              initial={{
                x: isLeftToRight
                  ? `${Math.random() * -90 - 10}%`
                  : `${(Math.random() + 1) * 100}%`,
              }}
              animate={{
                x: isLeftToRight ? "100%" : "-50%",
              }}
              transition={{ duration: 13, repeat: Infinity, ease: "linear" }}
            >
              {word}
            </motion.div>
          );
        })}
        {BoldText[0].split(", ").map((word, index) => {
          const isLeftToRight = Math.random() > 0.5;
          return (
            <motion.div
              key={index}
              className="header-text header-text-bold"
              style={{ y: (index + 0.3) * 70, width: "100%" }}
              initial={{
                x: isLeftToRight
                  ? `${Math.random() * -50 - 10}%`
                  : `${Math.random() * 50 + 100}%`,
              }}
              animate={{
                x: isLeftToRight ? "100%" : "-100%",
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              {word}
            </motion.div>
          );
        })}
      </div>
    </>
  );
};

export default Header;
