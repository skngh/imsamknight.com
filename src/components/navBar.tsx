import React from "react";
import { Link } from "react-scroll";
import { useScroll, motion, useTransform } from "framer-motion";
import "../styles/navBar.css";
import InstagramLogo from "../svgComponents/InstagramLogo";

const NavBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  return (
    <>
      <motion.div className="black-background" style={{ scaleX }} />
      <header className="navbar-container">
        <nav className="nav">
          <a href="https://www.instagram.com/imsamknight/" target="_blank">
            <InstagramLogo className="instagram-logo" />
          </a>
          <ul className="navbar">
            <li>
              <Link to="home" smooth={true} duration={500}>
                HOME
              </Link>
            </li>
            <li>
              <Link to="me" smooth={true} duration={500} offset={-200}>
                ME
              </Link>
            </li>
            <li>
              <Link to="game" smooth={true} duration={500} offset={-200}>
                GAME
              </Link>
            </li>
            <li>
              <Link to="reels" smooth={true} duration={500}>
                REELS
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500}>
                CONTACT
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
