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
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const MyProjects = () => {
    useEffect(() => {
      AOS.init({
        duration: 2500,
        easing: "ease-in-out", 
        once: true, 
      });
    }, []);
  return (
    <div className="text-white bg-black lg:py-212">
      <h1 className="lg:text-4xl text-2xl font-bold font-serif lg:text-center py-6 lg:py-12">
        My Latest Projects
      </h1>
      <div className="grid lg:grid-cols-3 grid-cols-1 justify-evenly lg:pl-1 pl-8">
        <div
          className="w-full max-w-md overflow-hidden rounded-lg shadow-lg bg-gradient-to-r from-sky-500 to-teal-500 transform hover:scale-105 transition-transform duration-300 lg:pb-1 mb-12"
          data-aos="fade-up"
          data-aos-anchor="body"
        >
          <div className="relative overflow-hidden">
            <img
              className="object-cover w-full h-56 rounded-t-lg transition-transform duration-300 transform hover:translate-y-2"
              src="https://i.ibb.co/gwCJr1G/11.png"
              alt="LuxoStay Preview"
            />
          </div>
          <div className="py-5 text-center text-white">
            <h1 className="block lg:text-3xl text-2xl font-bold mb-2 animate__animated animate__fadeInDown">
              LuxoStay
            </h1>
            <p className="text-sm animate__animated animate__fadeIn px-4">
              Our hotel room booking service ensures exclusive room
              reservations, preventing simultaneous bookings for the same room.
              Enjoy a seamless experience, guaranteeing privacy and comfort for
              each guests.
            </p>
            <div className="text-3xl gap-4 flex justify-center text-center py-2 text-white font-bold animate__animated animate__fadeIn">
              <a
                href="https://godly-queen.surge.sh/"
                className="hover:text-blue-300"
              >
                <CiLink />
              </a>
              <a
                href="https://github.com/fakeistiak/LuxoStay-Client"
                className="hover:text-gray-300"
              >
                <FaGithub />
              </a>
            </div>
            <div className="flex gap-6 text-green-400 justify-center animate__animated animate__fadeIn">
              <SiReact className="text-3xl text-sky-400"></SiReact>
              <DiMongodb className="text-3xl"></DiMongodb>
              <SiNextdotjs className="text-3xl text-white"></SiNextdotjs>
              <SiJavascript className="text-3xl text-yellow-400"></SiJavascript>
            </div>
          </div>
        </div>

        <div
          className="w-full max-w-md overflow-hidden rounded-lg shadow-lg bg-gradient-to-r from-sky-500 to-teal-500 mb-12 transform hover:scale-105 transition-transform duration-300"
          data-aos="fade-up"
          data-aos-anchor="body"
        >
          <img
            className="object-cover w-full h-56 rounded-t-lg"
            src="https://i.ibb.co/SQqBcT7/10.png"
            alt="CarHub Preview"
          />
          <div className="py-5 text-center text-white">
            <h1 className="block lg:text-3xl text-2xl font-bold mb-2 animate__animated animate__fadeInDown">
              CarHub
            </h1>
            <p className="text-sm animate__animated animate__fadeIn px-4">
              Welcome to our car fair! Find your dream car or customize your
              request, and we'll bring it to you. Explore a wide range of
              options for a personalized and convenient car-buying experience.
            </p>
            <div className="text-3xl gap-4 flex justify-center py-2 pb-4 text-white font-bold animate__animated animate__fadeIn">
              <a
                href="https://assignment-10-90674.web.app/"
                className="hover:text-indigo-300"
              >
                <CiLink />
              </a>
              <a
                href="https://github.com/fakeistiak/CarHub-Client"
                className="hover:text-blue-300"
              >
                <FaGithub />
              </a>
            </div>
            <div className="flex gap-6 text-green-400 justify-center animate__animated animate__fadeIn">
              <DiMongodb className="text-3xl"></DiMongodb>
              <SiExpress className="text-3xl text-green-400"></SiExpress>
              <SiNextdotjs className="text-3xl text-white"></SiNextdotjs>
              <SiJavascript className="text-3xl text-yellow-400"></SiJavascript>
            </div>
          </div>
        </div>

        <div
          className="w-full max-w-md overflow-hidden rounded-lg shadow-lg bg-gradient-to-r from-sky-500 to-teal-500 mb-12 transform hover:scale-105 transition-transform duration-300"
          data-aos="fade-up"
          data-aos-anchor="body"
        >
          <img
            className="object-cover w-full h-56 rounded-t-lg"
            src="https://i.ibb.co/mqx5Zj3/screencapture-assignment-9-7feb1-web-app-2023-12-12-12-112-33-1.png"
            alt="IAB Planner Preview"
          />
          <div className="py-5 text-center text-white">
            <h1 className="block lg:text-3xl text-2xl font-bold mb-2 animate__animated animate__fadeInDown">
              IAB Planner
            </h1>
            <p className="text-sm animate__animated animate__fadeIn px-4">
              Elevate your special day with IAB Planner! Hire us to customize
              and decorate your event according to your preferences. Let us turn
              your vision into a beautifully adorned reality for a memorable
              celebration.
            </p>
            <div className="text-3xl gap-4 flex justify-center py-2 pb-4 text-white font-bold animate__animated animate__fadeIn">
              <a
                href="https://assignment-9-7feb1.web.app/"
                className="hover:text-gray-300"
              >
                <CiLink />
              </a>
              <a
                href="https://github.com/fakeistiak/IAB-Planner-Client"
                className="hover:text-white"
              >
                <FaGithub />
              </a>
            </div>
            <div className="flex gap-6 text-green-400 justify-center animate__animated animate__fadeIn">
              <SiHtml5 className="text-3xl"></SiHtml5>
              <SiTailwindcss className="text-3xl text-black"></SiTailwindcss>
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
