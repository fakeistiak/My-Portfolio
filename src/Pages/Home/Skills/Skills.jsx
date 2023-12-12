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
        My Skills
      </h1>

      {/* Frontend Section */}
      <h1 className="text-4xl font-serif py-4 text-center underline">
        Frontend
      </h1>
      <div className="lg:flex sm:flex-shrink gap-4 justify-evenly px-4 mb-8">
        <div className="border-white border-2 flex justify-center">
          <img
            className="lg:w-36 w-24 h-24 lg:h-36 py-4"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            data-aos="fade-up"
          />
        </div>

        <div className="border-white border-2 flex justify-center">
          <img
            className="lg:w-36 w-24 h-24 lg:h-36 py-4"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
            data-aos="fade-up"
          />
        </div>
        <div className="border-white border-2 flex justify-center">
          <h1 className="font-serif" data-aos="fade-up">
            <SiTailwindcss className="lg:w-36 w-24 h-24 lg:h-36 py-4"></SiTailwindcss>
          </h1>
        </div>
        <div className="border-white border-2 flex justify-center">
          <img
            className="lg:w-36 w-24 h-24 lg:h-36 py-4"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            data-aos="fade-up"
          />
        </div>
        <div className="border-white border-2 flex justify-center">
          <img
            className="lg:w-36 w-24 h-24 lg:h-36 py-4"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            data-aos="fade-up"
          />
        </div>
      </div>

      {/* Backend Section */}
      <h1 className="text-4xl font-serif py-4 text-center underline">
        Backend
      </h1>
      <div className="lg:flex sm:flex-shrink gap-4 justify-evenly px-4">
        <div className="border-white border-2 flex justify-center">
          <img
            className="lg:w-36 w-24 h-24 lg:h-36 py-4"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
            data-aos="fade-up"
          />
        </div>
        <div className="border-white border-2 flex justify-center">
          <img
            className="lg:w-36 w-24 h-24 lg:h-36 py-4"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
            data-aos="fade-up"
          />
        </div>
        <div className="border-white border-2 flex justify-center">
          <SiExpress
            className="lg:w-36 w-24 h-24 lg:h-36 py-4"
            data-aos="fade-up"
          ></SiExpress>
        </div>
      </div>

      <Experience></Experience>
    </div>
  );
};

export default Skills;
