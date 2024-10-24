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
      <h1 className="lg:text-4xl text-2xl font-bold font-serif text-center pt-6 lg:pb-4 pb-2">
        Projects
      </h1>
      <div className="mx-auto lg:w-20 w-12 h-1 bg-cyan-500 mb-12"></div>

      <div className="grid lg:grid-cols-3 grid-cols-1 justify-center gap-8 lg:px-1 px-4 lg:pl-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="w-full max-w-lg hover:border-sky-500 transition border-4 overflow-hidden rounded-3xl shadow-lg bg-black mb-16 transform hover:scale-105 duration-1500 relative"
            data-aos="fade-up"
            onClick={() => openModal(project)}
          >
            <div className="relative overflow-hidden">
              <img
                className="object-cover w-full h-80 rounded-t-lg"
                src={project.image}
                alt={`${project.title} Preview`}
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end justify-center transition-opacity duration-300 cursor-pointer pb-4">
                <div className="text-center bg-gray-800 bg-opacity-40 rounded-full py-2 px-6">
                  <p className=" text-gray-200">{project.hoverText}</p>
                  <p className="text-2xl font-bold text-white">
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
          <div className="bg-black text-white w-5/6 lg:w-4/5 max-h-[90vh] overflow-y-auto rounded-xl relative z-10 p-8">
            <button
              className="absolute text-red-500 top-6 right-6 text-4xl font-bold"
              onClick={closeModal}
            >
              &times;
            </button>
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              <div className="lg:w-1/2">
                <h3 className="text-xl lg:text-2xl text-center text-gray-400 mb-4">
                  {selectedProject.hoverText}
                </h3>
                <h2 className="text-3xl lg:text-4xl font-bold text-center mb-6">
                  {selectedProject.title}
                </h2>
                <p className="text-base lg:text-lg mb-6 leading-relaxed">
                  {selectedProject.description}
                </p>
                <div className="lg:text-3xl text-xl gap-6 flex justify-center text-center pt-4 pb-8 text-white font-bold">
                  {selectedProject.demoLink && (
                    <a
                      href={selectedProject.demoLink}
                      className="hover:text-blue-300 flex gap-4 bg-slate-500 py-3 px-4 rounded-2xl"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="text-xl lg:text-2xl">Live Site</span>{" "}
                      <CiLink />
                    </a>
                  )}
                  {selectedProject.githubLink && (
                    <a
                      href={selectedProject.githubLink}
                      className="hover:text-blue-300 flex gap-4 bg-slate-500 py-3 px-4 rounded-2xl"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="lg:text-2xl text-xl">GitHub</span>{" "}
                      <FaGithub />
                    </a>
                  )}
                </div>
                <div className="flex gap-6 text-green-400 justify-center mb-4">
                  {selectedProject.technologies.map((tech, i) => {
                    const TechIcon = tech.component;
                    return (
                      <TechIcon
                        key={i}
                        className={`lg:text-3xl text-xl ${tech.color}`}
                      />
                    );
                  })}
                </div>
              </div>
              <div className="lg:w-1/2 flex justify-center items-center">
                <img
                  className="object-cover w-full rounded-lg"
                  src={selectedProject.image}
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
