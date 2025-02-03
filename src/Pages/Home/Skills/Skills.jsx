import { useState } from "react";
import { motion } from "framer-motion";
import { SiExpress, SiTailwindcss } from "react-icons/si";
import Skill from "./Skill";

const skills = [
  {
    category: "Front-End",
    items: [
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
    ],
  },
  {
    category: "Back-End",
    items: [
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        name: "MongoDB",
      },
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        name: "Node.js",
      },
      {
        component: <SiExpress className="w-full h-full" />,
        name: "Express",
      },
      {
        component: <SiTailwindcss className="w-full h-full" />,
        name: "Tailwind CSS",
      },
    ],
  },
];

const Skills = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.div
      className="container mx-auto pb-20"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      onAnimationComplete={() => setLoaded(true)}
    >
      <h4 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-white mb-6">
        My Skills
      </h4>
      <div className="mx-auto w-20 lg:w-20 h-1 bg-cyan-500 mb-6 lg:mb-12"></div>
      <div className="grid gap-12 md:gap-16">
        {skills.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 * index }}
          >
            <h3 className="text-2xl sm:text-3xl font-semibold text-center text-white mb-6">
              {category.category}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-7xl mx-auto px-6">
              {category.items.map((skill, i) => (
                <motion.div key={i} layoutId={`skill-${skill.name}`}>
                  <Skill skill={skill} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
