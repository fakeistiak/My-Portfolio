import React, { useEffect, useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const AboutMe = () => {
  const [counterStart, setCounterStart] = useState(false);
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <ScrollTrigger
      onEnter={() => setCounterStart(true)}
      onExit={() => setCounterStart(false)}
    >
      <div className="min-h-screen  text-white px-6 lg:px-24 pt-40">
        <div
          className="max-w-screen-lg mx-auto flex flex-col items-center text-center lg:text-left"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight pb-4">
            About Me
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-4xl font-semibold mt-4">
            I'm a{" "}
            <span className="text-sky-400">
              Computer Science & Engineering Student
            </span>
          </h2>
          <p className="mt-6 text-base sm:text-lg lg:text-xl max-w-2xl font-light lg:font-normal leading-relaxed">
            at Northern University Bangladesh. Alongside my studies, I have
            developed a strong foundation in basic Data Structures and
            Algorithms and have successfully solved a range of problems using C
            and C++. My journey has been focused on continuous learning and
            exploring opportunities in the tech industry, and I am excited to
            keep enhancing my skills.
          </p>
          <Link
            to="contact"
            className="mt-8 px-6 py-3 bg-sky-400 text-black font-semibold rounded-xl hover:bg-sky-600 transition-colors duration-300 ease-in-out"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default AboutMe;
