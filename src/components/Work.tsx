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
import PianobookImg from "../assets/images/work/pianobook.jpg";
import PlaytestExpandedImg from "../assets/images/work/playtestExpanded.jpg";

const soundDesignClips = [
  {
    title: "Tunic",
    video: "https://www.youtube.com/watch?v=LqAo_rQd0Cg",
  },
  {
    title: "Apex",
    video: "https://www.youtube.com/watch?v=OOoeZZTVFlw",
  },
  {
    title: "League",
    video: "https://www.youtube.com/watch?v=kUXGrfBIeFc",
  },
  {
    title: "Short Hike",
    video: "https://www.youtube.com/watch?v=lvKFGIun-oY",
  },
];
const technicalSoundDesignClips = [
  {
    title: "Wwise Demo",
    video: "https://www.youtube.com/watch?v=fmQ3c8ieW7Q",
  },
  {
    title: "Procedural Audio Demo",
    video: "https://www.youtube.com/watch?v=tBw2P-vV5Hc",
  },
  {
    title: "Audio Impl. Demo",
    video: "https://www.youtube.com/watch?v=E0mIqBWZsFk",
  },
  {
    title: "Game Jam Demo",
    video: "https://www.youtube.com/watch?v=8S1MJN3MteY",
  },
];

const workItems = [
  {
    title: "Sound Design Reel",
    image: SoundDesignReelImg,
    video: "https://www.youtube.com/embed/vuk9DfjGQR8?si=dYwsWz0HX2K0K99G",
    description: (
      <>
        Featuring sound redesign clips from games including Tunic, Apex Legends,
        A Short Hike, and League of Legends. You can check out full breakdowns
        for each clip here:
        <div className="sound-design-clips-container">
          {soundDesignClips.map((clip, index) => (
            <a
              key={index}
              href={clip.video}
              target="_blank"
              rel="noopener noreferrer"
              className="sound-design-clip"
            >
              {clip.title}
            </a>
          ))}
        </div>
      </>
    ),
    caption: "Watch above!",
  },
  {
    title: "Technical Sound Design Reel",
    image: TechSoundDesignReelImg,
    video: "https://www.youtube.com/embed/FwxL9yEaBcg?si=HxCztNC_rPU0NE1B",
    description: (
      <>
        Featuring audio implementation demos including with Wwise, Unity, and
        procedural audio in Pure Data. All games except the Wwise demo were made
        by me in Unity. Check out full walthroughs here:
        <div className="sound-design-clips-container">
          {technicalSoundDesignClips.map((clip, index) => (
            <a
              key={index}
              href={clip.video}
              target="_blank"
              rel="noopener noreferrer"
              className="sound-design-clip"
            >
              {clip.title}
            </a>
          ))}
        </div>
      </>
    ),
    caption: "Watch above!",
  },
  {
    title: (
      <>
        'Playtest'<br></br> Game Jam Submission<br></br> Finalist
      </>
    ),
    image: PlaytestImg,
    expandedLink: "https://skngh.itch.io/playtest",
    expandedImage: PlaytestExpandedImg,
    description: (
      <>
        'Playtest' was a game made for Brackeys 2022.1 Game Jam. I made it solo
        over the course of 1 week in Unity. It placed 10th out of 1,578 entries,
        and 9th in Audio. You can check out its itch.io page by clicking the
        image, and a playthrough of the game below!
        <div className="sound-design-clips-container">
          <a
            href="https://www.youtube.com/watch?v=8S1MJN3MteY"
            target="_blank"
            rel="noopener noreferrer"
            className="sound-design-clip"
          >
            Playthrough
          </a>
        </div>
      </>
    ),
    caption: "Click above for itch.io",
  },
  {
    title: (
      <>
        Sketchaven Capstone: <br></br> Procedural Audio in Pure Data
      </>
    ),
    image: SketchavenImg,
    video: "https://www.youtube.com/embed/tBw2P-vV5Hc?si=swu7FHsVXIStAjqI",
    description: (
      <>
        'Sketchaven' is a game I made as my capstone for Berklee. My main
        exploration with it was having fully procedural audio using Pure data,
        directly integrated into Unity. It took lots of deeper sound design
        study, mainly using Andy Farnell's book, <em>Designing Sound.</em> You
        can check out a full explanation of it in the adjacent video.
      </>
    ),
    caption: "Watch above!",
  },
  {
    title: "Synthux Content Finalist",
    image: SynthuxImg,
    video: "https://www.youtube.com/embed/vAcQFwvVuao?si=tPzQUw8fCS3XE0tl",
    description: (
      <>
        In 2023 I particpated in Synthux Academy's, 'Synthmas 2023' contest. The
        challenge was to design a touch-controlled synth using the Daisy Seed
        and their 'Simple Touch' prototype board. I decided to make a sort of
        'modular synth' using each touch pad as a different module. My project
        got 2nd in the contest. You can check out a demo of it in the adjacent
        video, and the github repo below.
        <div className="sound-design-clips-container">
          <a
            href="https://github.com/skngh/ModularTouchSynth"
            target="_blank"
            rel="noopener noreferrer"
            className="sound-design-clip"
          >
            Github
          </a>
        </div>
      </>
    ),

    caption: "Watch above!",
  },
  {
    title: "Sample Instruments",
    image: SampleInstrumentImg,
    expandedImage: PianobookImg,
    expandedLink: "https://www.pianobook.co.uk/profile/skngh/",
    description:
      "One of my favorite sound design outlets is creating sample instruments! It was something I used to do much more often while at school, since I had a big range of instruments available to me. I post  my instruments on Pianobook, a site geared towards community made instruments, where they've gotten 10,000+ combined downloads! Check it out by clicking the adjacent photo. ",
    caption: "Click above!",
  },

  {
    title: "Past Company Work Showcase",
    image: SondImg,
    video: "https://www.youtube.com/embed/M5WmvgBfPoA?si=X7D7KO8lSbZnWBLW",
    description:
      "I previously worked for a startup company (that is in stealth so I cannot say the name) that is making an app to help you sleep better with audio. I was a full-time content producer for the company where I made 200+ tracks over the course of 1.5 years. My work included sleep tracks, immersive soundscapes, and sleep stories. I also wrote some procedural audio code and a generative soundscape feature using AI for the company.  Linked is a showreel of some of the tracks I made!",
    caption: "Watch above!",
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
              ref={ref}
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
                  {workItems[selectedIndex].video ? (
                    <iframe
                      className="expanded-video"
                      src={workItems[selectedIndex].video}
                      title="YouTube video player"
                      style={{ width: 250, height: 200 }}
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <a
                      href={workItems[selectedIndex].expandedLink}
                      target="_blank"
                    >
                      <div
                        className="expanded-video expanded-img"
                        style={{
                          width: 200,
                          height: 200,
                          backgroundImage: `url(${
                            workItems[selectedIndex].expandedImage
                              ? workItems[selectedIndex].expandedImage
                              : workItems[selectedIndex].image
                          })`,
                        }}
                      ></div>
                    </a>
                  )}

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
