import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import { SiExpress, SiTailwindcss } from "react-icons/si"
import Experience from "../Experience/Experience"
import Skill from "./Skill"

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
]

const Skills=()=> {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    })
  }, [])

  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-white mb-12">My Skills</h2>
        <div className="grid gap-12 md:gap-16">
          {skills.map((category, index) => (
            <div key={index}>
              <h3 className="text-2xl sm:text-3xl font-semibold text-center text-white mb-6">{category.category}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
                {category.items.map((skill, i) => (
                  <Skill key={i} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Experience />
    </section>
  )
}

export default Skills

