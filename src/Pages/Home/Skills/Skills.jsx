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

  const skills = [
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      name: "HTML5",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      name: "CSS3",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      name: "JavaScript",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      name: "React",
    },
    {
      component: <SiTailwindcss className="lg:w-36 w-24 h-24" />,
      name: "Tailwind CSS",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      name: "MongoDB",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      name: "Node.js",
    },
    {
      component: <SiExpress className="lg:w-36 w-24 h-24" />,
      name: "Express",
    },
  ];

  return (
    <div className="text-white mx-auto max-w-7xl pb-40">
      <h1 className="lg:text-5xl text-2xl text-center font-semibold font-serif pt-6 lg:pb-4 pb-2">
        My Skills
      </h1>
      
      {['Front-End', 'Back-End'].map((category, index) => (
        <div key={index} className="mb-12">
          <h1 className="lg:text-4xl text-3xl font-serif pt-4 text-center pb-2">
            {category}
          </h1>
          <div className="mx-auto w-24 h-1 bg-cyan-500 mb-4"></div>

          <div className="lg:flex sm:flex-shrink gap-4 justify-evenly px-4">
            {skills.slice(index * 4, (index + 1) * 4).map((skill, i) => (
              <div
                key={i}
                className="flex justify-center group relative w-24 h-24"
              >
                <div className="transition-transform transform group-hover:scale-105 p-4 rounded-lg flex items-center justify-center">
                  {skill.component ? (
                    skill.component
                  ) : (
                    <img
                      className="lg:w-36 w-24 h-24"
                      src={skill.src}
                      alt={skill.name}
                      data-aos="fade-up"
                    />
                  )}
                </div>
                <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-white text-xs rounded-md p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}

      <Experience />
    </div>
  );
};

export default Skills;
