import { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { CiLink } from "react-icons/ci";
import AOS from "aos";
import "aos/dist/aos.css";
import projects from "../../../components/projects.js";

const MyProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 200,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="text-white mx-auto max-w-7xl">
      <h1 className="text-2xl lg:text-4xl font-bold font-serif text-center pt-4 lg:pt-6 pb-2 lg:pb-4">
        Projects
      </h1>
      <div className="mx-auto w-12 lg:w-20 h-1 bg-cyan-500 mb-6 lg:mb-12"></div>

      <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 px-4 lg:px-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="w-full max-w-sm mx-auto hover:border-sky-500 transition border-2 lg:border-4 overflow-hidden rounded-xl lg:rounded-3xl shadow-lg bg-black mb-6 lg:mb-16 transform hover:scale-105 duration-1500 relative"
            data-aos="fade-up"
            onClick={() => openModal(project)}
          >
            <div className="relative overflow-hidden">
              <img
                className="object-cover w-full h-48 sm:h-56 lg:h-80 rounded-t-lg"
                src={project.image || "/placeholder.svg"}
                alt={`${project.title} Preview`}
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end justify-center transition-opacity duration-300  pb-2 lg:pb-4">
                <div className="text-center bg-gray-800 bg-opacity-70 rounded-full py-1 lg:py-2 px-3 lg:px-6">
                  <p className="text-lg sm:text-xl lg:text-3xl font-bold text-cyan-500">
                    {project.hoverText}
                  </p>
                  <p className="text-base sm:text-lg lg:text-2xl font-bold text-white">
                    {project.hoverText2}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-gray-800 to-black opacity-90"></div>
          <div className="bg-black text-white w-11/12 lg:w-4/5 max-h-[90vh] overflow-y-auto rounded-xl relative z-10 p-4 lg:p-8">
            <button
              className="absolute text-red-500 top-2 right-2 lg:top-6 lg:right-6 text-3xl lg:text-4xl font-bold"
              onClick={closeModal}
            >
              &times;
            </button>
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-12">
              <div className="lg:w-1/2">
                <h3 className="text-lg lg:text-2xl text-center text-gray-400 mb-2 lg:mb-4">
                  {selectedProject.hoverText}
                </h3>
                <h2 className="text-2xl lg:text-4xl font-bold text-center mb-3 lg:mb-6">
                  {selectedProject.title}
                </h2>
                <p className="text-sm lg:text-lg mb-4 lg:mb-6 leading-relaxed">
                  {selectedProject.description}
                </p>
                <div className="text-lg lg:text-3xl gap-3 lg:gap-6 flex justify-center text-center pt-2 lg:pt-4 pb-4 lg:pb-8 text-white font-bold">
                  {selectedProject.demoLink && (
                    <a
                      href={selectedProject.demoLink}
                      className="hover:text-blue-300 flex gap-2 lg:gap-4 bg-slate-500 py-2 lg:py-3 px-3 lg:px-4 rounded-xl lg:rounded-2xl"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="text-base lg:text-2xl">Live Site</span>{" "}
                      <CiLink />
                    </a>
                  )}
                  {selectedProject.githubLink && (
                    <a
                      href={selectedProject.githubLink}
                      className="hover:text-blue-300 flex gap-2 lg:gap-4 bg-slate-500 py-2 lg:py-3 px-3 lg:px-4 rounded-xl lg:rounded-2xl"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="text-base lg:text-2xl">GitHub</span>{" "}
                      <FaGithub />
                    </a>
                  )}
                </div>
                <div className="flex gap-3 lg:gap-6 text-green-400 justify-center mb-4">
                  {selectedProject.technologies.map((tech, i) => {
                    const TechIcon = tech.component;
                    return (
                      <TechIcon
                        key={i}
                        className={`text-xl lg:text-3xl ${tech.color}`}
                      />
                    );
                  })}
                </div>
              </div>
              <div className="lg:w-1/2 flex justify-center items-center">
                <img
                  className="object-cover w-full rounded-lg"
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={`${selectedProject.title} Image`}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyProjects;
