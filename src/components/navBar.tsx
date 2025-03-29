import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { useScroll, motion, useTransform } from "framer-motion";
import "../styles/navBar.css";
import InstagramLogo from "../svgComponents/InstagramLogo";

const NavBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  const [offsets, setOffsets] = useState({
    me: -200,
    game: -200,
    work: -100,
    contact: 0,
  });

  useEffect(() => {
    const updateOffsets = () => {
      if (window.innerWidth < 767) {
        setOffsets({ me: -50, game: -100, work: -100, contact: 0 });
      } else {
        setOffsets({ me: -200, game: 0, work: -100, contact: 0 });
      }
    };

    updateOffsets(); // Set initial values
    window.addEventListener("resize", updateOffsets);
    return () => window.removeEventListener("resize", updateOffsets);
  }, []);

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
              <Link to="me" smooth={true} duration={500} offset={offsets.me}>
                ME
              </Link>
            </li>
            <li>
              <Link
                to="game"
                smooth={true}
                duration={500}
                offset={offsets.game}
              >
                GAME
              </Link>
            </li>
            <li>
              <Link
                to="work"
                smooth={true}
                duration={500}
                offset={offsets.work}
              >
                WORK
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
