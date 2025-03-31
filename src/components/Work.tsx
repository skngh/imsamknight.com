import React, { useEffect, useState, useRef } from "react";
import "../styles/work.css";
import Tilt from "react-parallax-tilt";
import { motion } from "motion/react";
import { AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Thumbtack from "../assets/images/thumbtack.png";
import BackArrow from "../assets/images/arrow.svg";

import SoundDesignReelImg from "../assets/images/work/SoundDesignReel.jpg";
import TechSoundDesignReelImg from "../assets/images/work/techSoundDesignReel.jpg";
import PlaytestImg from "../assets/images/work/Playtest.jpg";
import SketchavenImg from "../assets/images/work/Sketchaven.jpg";
import SynthuxImg from "../assets/images/work/Synthux.jpg";
import SampleInstrumentImg from "../assets/images/work/SampleInstruments.jpg";
import SondImg from "../assets/images/work/Sond.jpg";

const workItems = [
  {
    title: "Sound Design Reel",
    image: SoundDesignReelImg,
    video: "https://www.youtube.com/embed/EEg5ZbuqvK0?si=qqgmgHbiW-DZMsF3",
    description: "sound design reel yayayayay.",
    caption: "This is an image",
  },
  {
    title: "Technical Sound Design Reel",
    image: TechSoundDesignReelImg,
    video: "https://www.youtube.com/embed/TjgbCqKEVuo?si=NTHVAjj5eyh6diuV",
    description: "Technical sound design reel woo",
    caption: "This is an image",
  },
  {
    title: (
      <>
        'Playtest'<br></br> Game Jam Submission<br></br> Finalist
      </>
    ),
    image: PlaytestImg,
    video: "https://www.youtube.com/embed/JYDAor1Wx60?si=IL9GkICX1BMrCP4U",
    description: "got 9th balhasdlfhasdf",
    caption: "This is an image",
  },
  {
    title: (
      <>
        Sketchaven Capstone: <br></br> Procedural Audio in Pure Data
      </>
    ),
    image: SketchavenImg,
    video: "https://www.youtube.com/embed/JYDAor1Wx60?si=IL9GkICX1BMrCP4U",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    caption: "This is an image",
  },
  {
    title: "Synthux Content Finalist",
    image: SynthuxImg,
    video: "https://www.youtube.com/embed/vAcQFwvVuao?si=MGfHNIUVdtel1iGX",
    description:
      "did good heres github lkj hasdfl kjhasd fkljh asdlfk jha sdklfj",
    caption: "This is an image",
  },
  {
    title: "Sample Instruments",
    image: SampleInstrumentImg,
    video: "https://www.pianobook.co.uk/profile/skngh/",
    description: "got 9th balhasdlfhasdf",
    caption: "This is an image",
  },

  {
    title: "Past Company Work Showcase",
    image: SondImg,
    video: "https://www.youtube.com/embed/JYDAor1Wx60?si=IL9GkICX1BMrCP4U",
    description: "did this that this that glove vcooll",
    caption: "This is an image",
  },
];

const Work: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const { ref, inView } = useInView();
  const gridRef = useRef<HTMLDivElement | null>(null);

  const scrollToElement = () => {
    gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    if (!inView) {
      setSelectedIndex(null);
    }
  }, [inView]);

  return (
    <>
      <div className="grid-container">
        <h1 ref={gridRef} className="work-title">
          work
        </h1>
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
                  onClick={() => {
                    setSelectedIndex(index);
                    scrollToElement();
                  }}
                >
                  <Tilt
                    tiltMaxAngleX={5}
                    tiltMaxAngleY={5}
                    tiltReverse={true}
                    key={index}
                    scale={1.08}
                    className={`grid-item ${(index + 1).toString()}`}
                    style={{ backgroundImage: `url(${item.image})` }}
                  >
                    <p>{item.title}</p>
                  </Tilt>
                </motion.div>
              ))}
          </AnimatePresence>
        </div>
        {/* Expanded view! */}
        {selectedIndex !== null && (
          <Tilt tiltMaxAngleX={1} tiltMaxAngleY={1} tiltReverse={true}>
            <motion.div
              className="expanded-content-container"
              initial={{ opacity: 0, scale: 0.2 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
              ref={ref} // Attach the ref to the expanded view div
            >
              <div className="expanded-top-section">
                <img
                  onClick={() => setSelectedIndex(null)}
                  src={BackArrow}
                  className="close"
                ></img>
                <h2 className="expanded-title">
                  {workItems[selectedIndex].title}
                </h2>
                <img src={Thumbtack} alt="thumbtack" className="thumbtack" />
              </div>
              <div className="expanded-vid-desc-container">
                <div className="expanded-vid-container">
                  <iframe
                    className="expanded-video"
                    src={workItems[selectedIndex].video}
                    title="YouTube video player"
                    allowFullScreen
                  ></iframe>
                  <p className="expanded-caption">
                    {workItems[selectedIndex].caption}
                  </p>
                </div>
                <div className="expanded-description-container">
                  <p className="expanded-description">
                    {workItems[selectedIndex].description}
                  </p>
                </div>
              </div>
            </motion.div>
          </Tilt>
        )}
      </div>
    </>
  );
};

export default Work;
