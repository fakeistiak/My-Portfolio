import  { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AboutMe = () => {
  const [counterStart, setCounterStart] = useState(false);

  return (
    <ScrollTrigger
      onEnter={() => setCounterStart(true)}
      onExit={() => setCounterStart(false)}
    >
      <div className="px-6 min-h-screen mx-auto max-w-7xl text-white pt-20 flex flex-col items-start">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={counterStart ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight pb-4">
            About Me
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mt-4">
            I'm a{" "}
            <span className="text-sky-400">
              Computer Science & Engineering Student
            </span>
          </h2>
          <p className="mt-6 text-base sm:text-lg lg:text-xl font-light  lg:leading-loose leading-loose">
            at Northern University Bangladesh. Alongside my studies, I have
            developed a strong foundation in basic Data Structures and
            Algorithms and have successfully solved a range of problems using C
            and C++. My journey has been focused on continuous learning and
            exploring opportunities in the tech industry, and I am excited to
            keep enhancing my skills.
          </p>
            <Link
              to="/contact"
              className="mt-6 px-4 py-2 bg-sky-400 text-white font-semibold rounded-xl hover:bg-sky-600 transition duration-300 ease-in-out w-fit block"
            >
              Hire Me
            </Link>
        </motion.div>
      </div>
    </ScrollTrigger>
  );
};

export default AboutMe;
