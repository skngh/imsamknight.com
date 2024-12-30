import React from "react";
import { motion } from "framer-motion";
import "../styles/nameTitle.css";

const name = "Sam Knight";

const NameTitle: React.FC = () => {
  return (
    <div className="name-title">
      {name.split("").map((letter, index) => {
        const rotateDirection = Math.random() > 0.5 ? 10 : -10;
        return (
          <motion.span
            key={index}
            style={{ display: "inline-block" }}
            initial={{ opacity: 0, y: -50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: index * 0.1 },
            }}
            whileHover={{
              y: -10,
              rotate: rotateDirection,
              transition: { duration: 0.1, delay: 0 },
            }}
            viewport={{ once: false, amount: 0.5 }}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        );
      })}
    </div>
  );
};

export default NameTitle;
