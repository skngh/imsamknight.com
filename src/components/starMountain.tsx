import React, { useEffect, useRef, useState } from "react";
import "../styles/starMountain.css";
import blue_player from "../assets/images/Blue_Player_1.png";
import red_player from "../assets/images/Red_Player_1.png";
import star from "../assets/images/Star.png";
import star_logo from "../assets/images/starMountainLogo.png";
import platform from "../assets/images/platform.png";
import steam from "../assets/images/steam.png";

import { motion, useScroll, useTransform } from "motion/react";

const StarMountain: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    if (window.innerWidth < 767) {
      setIsMobile(true);
    }
  });

  const targetRef = useRef(null);
  const { scrollYProgress: scrollYProgress_x } = useScroll({
    target: targetRef,
    offset: ["start end", isMobile ? "end center" : "end start"],
  });

  const { scrollYProgress: scrollYProgress_y } = useScroll({
    target: targetRef,
    offset: ["start center", "end .3"],
  });

  const redPlayerY = useTransform(scrollYProgress_y, [0, 1], [0, -200]);
  const bluePlayerY = useTransform(scrollYProgress_y, [0, 1], [0, -200]);

  const redPlayerX = useTransform(
    scrollYProgress_x,
    [0, 1],
    [0, isMobile ? 80 : 300]
  );
  const bluePlayerX = useTransform(
    scrollYProgress_x,
    [0, 1],
    [0, isMobile ? -80 : -300]
  );

  return (
    <div>
      <div className="logo-container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ root: targetRef }}
        >
          <img className="logo" src={star_logo}></img>
          <p>
            An online/local multiplayer PvP platforming game. <br />
            Made in Unity, released on Steam.
          </p>
        </motion.div>
      </div>
      <div className="game-container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ amount: 0.5 }}
        >
          <img className="star" src={star}></img>
        </motion.div>
        <div className="player-container">
          <motion.div
            ref={targetRef}
            style={{ x: redPlayerX, y: isMobile ? 0 : redPlayerY }}
          >
            <img className="red_player player" src={red_player}></img>
          </motion.div>
          <motion.div style={{ x: bluePlayerX, y: isMobile ? 0 : bluePlayerY }}>
            <img className="blue_player player" src={blue_player}></img>
          </motion.div>
        </div>
        <div className="steam-container">
          <a
            className="steam"
            href="https://store.steampowered.com/app/2938920/Star_Mountain/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="steam" src={steam} />
          </a>
          <p>wishlist now</p>
        </div>
      </div>
      <div className="platform-container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <img className="platform" src={platform}></img>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <img className="platform" src={platform} />
        </motion.div>
      </div>
    </div>
  );
};

export default StarMountain;
