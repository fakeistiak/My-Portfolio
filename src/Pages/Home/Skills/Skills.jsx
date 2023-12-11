import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { SiExpress, SiTailwindcss } from "react-icons/si";
import Experience from "../Experience/Experience";

const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

    return (
      <div className="text-white bg-black">
        <h1
          className="lg:text-5xl text-2xl text-center font-semibold font-serif py-6 pb-12"
          data-aos="fade-up"
        >
          My skills
        </h1>
        <div className="lg:flex sm:flex-shrink gap-4 justify-evenly px-4">
          <img
            className="lg:w-28 w-16 h-16 lg:h-28"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            data-aos="fade-up"
          />

          <img
            className="lg:w-28 w-16 h-16 lg:h-28"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
            data-aos="fade-up"
          />

          <h1 className=" font-serif" data-aos="fade-up">
            <SiTailwindcss className="lg:w-28 w-16 h-16 lg:h-28"></SiTailwindcss>
            Tailwindcss
          </h1>

          <img
            className="lg:w-28 w-16 h-16 lg:h-28"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            data-aos="fade-up"
          />

          <img
            className="lg:w-28 w-16 h-16 lg:h-28"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            data-aos="fade-up"
          />

          <img
            className="lg:w-28 w-16 h-16 lg:h-28"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
            data-aos="fade-up"
          />

          <img
            className="lg:w-28 w-16 h-16 lg:h-28"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
            data-aos="fade-up"
          />

          <SiExpress
            className="lg:w-28 w-16 h-16 lg:h-28"
            data-aos="fade-up"
          ></SiExpress>
        </div>
        <Experience></Experience>
      </div>
    );
};

export default Skills;
