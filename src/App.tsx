import "./App.css";
import Header from "./components/header.tsx";
import NameTitle from "./components/nameTitle.tsx";
import LineBreak from "./components/lineBreak.tsx";
import Bio from "./components/bio.tsx";
import Arrow from "./components/arrow.tsx";
import { motion } from "motion/react";

function App() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { duration: 0.5, delay: 0.2 },
        }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <Header />
      </motion.div>

      <NameTitle />

      <Arrow />

      <Bio />
      {/* </motion.div> */}
      <LineBreak marginTop={3000} width={90} />
    </>
  );
}

export default App;
