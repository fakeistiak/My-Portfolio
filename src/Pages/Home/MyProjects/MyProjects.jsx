import { FaGithub } from "react-icons/fa";
import { CiLink } from "react-icons/ci";
import {
  SiExpress,
  SiNextdotjs,
  SiJavascript,
  SiHtml5,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";
import { DiMongodb } from "react-icons/di";

const MyProjects = () => {
  return (
    <div className="text-white bg-black lg:py-212">
      <h1 className="lg:text-4xl text-3xl font-bold font-serif text-center py-6 lg:py-12">
        My Latest Projects
      </h1>
      <div className="grid lg:grid-cols-3 grid-cols-1 justify-evenly">
        <div className="w-full max-w-md overflow-hidden rounded-lg shadow-lg bg-gray-600 lg:pb-1 mb-12">
          <img
            className="object-cover w-full h-56"
            src="https://i.ibb.co/gwCJr1G/11.png"
          />
          <div className="py-5 text-center text-white">
            <h1 className="block text-3xl font-bold ">LuxoStay</h1>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium, molestiae delectus expedita mollitia culpa nemo ad ea
              ullam saepe. Praesentium.
            </p>
            <div className="text-3xl gap-4 flex justify-center text-center py-2 text-white font-bold">
              <a href="https://godly-queen.surge.sh/">
                <CiLink />
              </a>
              <a href="https://github.com/fakeistiak/LuxoStay-Client">
                <FaGithub />
              </a>
            </div>
            <div className="flex gap-6 text-green-400 justify-center">
              <SiReact className="text-3xl text-sky-400"></SiReact>
              <DiMongodb className="text-3xl"></DiMongodb>
              <SiNextdotjs className="text-3xl text-white"></SiNextdotjs>
              <SiJavascript className="text-3xl text-yellow-400"></SiJavascript>
            </div>
          </div>
        </div>
        <div className="w-full max-w-md overflow-hidden rounded-lg shadow-lg bg-gray-600 mb-12">
          <img
            className="object-cover w-full h-56"
            src="https://i.ibb.co/SQqBcT7/10.png"
          />

          <div className="py-5 text-center text-white">
            <h1 className="block text-3xl font-bold ">CarHub</h1>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium, molestiae delectus expedita mollitia culpa nemo ad ea
              ullam saepe. Praesentium.
            </p>
            <div className="text-3xl gap-4 flex justify-center py-2 pb-4 text-white font-bold">
              <a href="https://assignment-12-90674.web.app/">
                <CiLink />
              </a>
              <a href="https://github.com/fakeistiak/CarHub-Client">
                <FaGithub />
              </a>
            </div>
            <div className="flex gap-6 text-green-400 justify-center">
              <DiMongodb className="text-3xl"></DiMongodb>
              <SiExpress className="text-3xl text-green-400"></SiExpress>
              <SiNextdotjs className="text-3xl text-white"></SiNextdotjs>
              <SiJavascript className="text-3xl text-yellow-400"></SiJavascript>
            </div>
          </div>
        </div>
        <div className="w-full max-w-md overflow-hidden rounded-lg shadow-lg bg-gray-600 mb-12">
          <img
            className="object-cover w-full h-56"
            src="https://i.ibb.co/mqx5Zj3/screencapture-assignment-9-7feb1-web-app-2023-12-12-12-112-33-1.png"
          />

          <div className="py-5 text-center text-white">
            <h1 className="block text-3xl font-bold ">IAB Planner</h1>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium, molestiae delectus expedita mollitia culpa nemo ad ea
              ullam saepe. Praesentium.
            </p>
            <div className="text-3xl gap-4 flex justify-center py-2 pb-4 text-white font-bold">
              <a href="https://assignment-9-7feb1.web.app/">
                <CiLink />
              </a>
              <a href="https://github.com/fakeistiak/IAB-Planner-Client">
                <FaGithub />
              </a>
            </div>
            <div className="flex gap-6 text-green-400 justify-center">
              <SiHtml5 className="text-3xl"></SiHtml5>
              <SiTailwindcss  className="text-3xl text-black"></SiTailwindcss>
              <SiReact className="text-3xl text-sky-400"></SiReact>
              <SiJavascript className="text-3xl text-yellow-400"></SiJavascript>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
