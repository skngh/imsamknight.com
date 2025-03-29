import React, { useEffect, useRef, useState } from "react";
import "../styles/work.css";
import Tilt from "react-parallax-tilt";
import { motion } from "motion/react";
import { AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Thumbtack from "../assets/images/thumbtack.png";
import BackArrow from "../assets/images/arrow.svg";

const workItems = [
  {
    title: "Sound Design Reel",
    image: "../assets/work/sond.png",
    video: "https://www.youtube.com/embed/EEg5ZbuqvK0?si=qqgmgHbiW-DZMsF3",
    description: "sound design reel yayayayay.",
    caption: "This is an image",
  },
  {
    title: "Technical Sound Design Reel",
    image: "../assets/work/sond.png",
    video: "https://www.youtube.com/embed/TjgbCqKEVuo?si=NTHVAjj5eyh6diuV",
    description: "Technical sound design reel woo",
    caption: "This is an image",
  },
  {
    title: "Synthux Content Finalist",
    image: "../assets/work/sond.png",
    video: "https://www.youtube.com/embed/vAcQFwvVuao?si=MGfHNIUVdtel1iGX",
    description: "did good heres github lkjhasdflkjhasdfkljhasdlfkjhasdklfj",
    caption: "This is an image",
  },
  {
    title: (
      <>
        Sketchaven Capstone: <br></br> Procedural Audio in Pure Data w Unity
      </>
    ),
    image: "../assets/work/sond.png",
    video: "https://www.youtube.com/embed/JYDAor1Wx60?si=IL9GkICX1BMrCP4U",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    caption: "This is an image",
  },
  {
    title: (
      <>
        'Playtest'<br></br> Game Jam Submission<br></br> Finalist
      </>
    ),
    image: "../assets/work/sond.png",
    video: "https://www.youtube.com/embed/JYDAor1Wx60?si=IL9GkICX1BMrCP4U",
    description: "got 9th balhasdlfhasdf",
    caption: "This is an image",
  },
  {
    title: "Sample Instruments",
    image: "../assets/work/sond.png",
    video: "https://www.pianobook.co.uk/profile/skngh/",
    description: "got 9th balhasdlfhasdf",
    caption: "This is an image",
  },

  {
    title: "Daisy Seed Instruments",
    image: "../assets/work/sond.png",
    video: "https://www.youtube.com/embed/JYDAor1Wx60?si=IL9GkICX1BMrCP4U",
    description: "did this that this that glove vcooll",
    caption: "This is an image",
  },
];

const Work: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (!inView) {
      setSelectedIndex(null);
    }
  }, [inView]);

  return (
    <>
      <div className="grid-container">
        <h1>work</h1>
        <div className={`${selectedIndex !== null ? "grid-hidden" : "grid"}`}>
          <AnimatePresence>
            {selectedIndex === null &&
              workItems.map((item, index) => (
                <motion.div
                  key={index}
                  className={`${(index + 1).toString()}`}
                  initial={{ x: 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                  exit={{ x: -100, opacity: 0 }}
                  onClick={() => setSelectedIndex(index)}
                >
                  <Tilt
                    tiltMaxAngleX={5}
                    tiltMaxAngleY={5}
                    tiltReverse={true}
                    key={index}
                    className={`grid-item ${(index + 1).toString()}`}
                  >
                    <p>{item.title}</p>
                    {/* <img src={item.image} alt={item.title} /> */}
                  </Tilt>
                </motion.div>
              ))}
          </AnimatePresence>
        </div>
        {/* Expanded view! */}
        <AnimatePresence>
          {selectedIndex !== null && (
            <motion.div
              className="expanded-view"
              initial={{ opacity: 0, scale: 0.2 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              ref={ref} // Attach the ref to the expanded view div
            >
              <Tilt tiltMaxAngleX={1} tiltMaxAngleY={1} tiltReverse={true}>
                <div className="expanded-content expanded-grid-item">
                  <img src={Thumbtack} alt="thumbtack" className="thumbtack" />
                  <h2 className="expanded-title expanded-grid-item">
                    {workItems[selectedIndex].title}
                  </h2>
                  <div className="expanded-description expanded-grid-item">
                    <p>{workItems[selectedIndex].description}</p>
                  </div>

                  <img
                    onClick={() => setSelectedIndex(null)}
                    src={BackArrow}
                    className="close"
                  ></img>
                  <iframe
                    className="expanded-video expanded-grid-item"
                    width="560"
                    height="315"
                    src={workItems[selectedIndex].video}
                    title="YouTube video player"
                    allowFullScreen
                  ></iframe>
                  <p className="expanded-caption expanded-grid-item">
                    {workItems[selectedIndex].caption}
                  </p>
                </div>
              </Tilt>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Work;
