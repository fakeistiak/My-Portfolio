import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration in milliseconds
      offset: 200, // Offset (in pixels) from the top of the page to start the animation
    });
  }, []);

  return (
    <div className="container px-6 py-16 mx-auto">
      <div className="flex flex-col-reverse lg:flex-row items-center">
        <div className="lg:w-1/2 lg:pr-8">
          <div className="lg:max-w-lg">
            <h1
              className="text-3xl lg:text-5xl font-bold text-black"
              data-aos="fade-up"
            >
              Istiuqe Ahmed
            </h1>
            <h1
              className="text-3xl lg:text-5xl font-bold text-black"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <span className="text-black">I'm a </span>
              <TypeAnimation
                className="lg:text-5xl text-3xl "
                sequence={["MERN Stack Developer", 2500]}
                speed={1}
                repeat={0}
              />
            </h1>

            <p
              className="mt-3 text-black font-extralight"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              My thirst for knowledge is endless, leading me on an exciting
              journey of continuous growth. I'm a hard worker who takes
              ownership of everything I do, always striving to help my company
              succeed
            </p>

            <button
              className="h-12 mt-4 w-full lg:w-28 bg-black text-white rounded-2xl hover:bg-gray-800"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              Contact Me
            </button>

            <div
              className="text-3xl gap-4 flex mt-4"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <a href="#" className="text-black">
                <FaFacebook />
              </a>
              <a href="#" className="text-black">
                <FaInstagram />
              </a>
              <a href="#" className="text-black">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        <div
          className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <img
            className="w-full max-w-md lg:w-[450px] lg:h-[450px] rounded-full object-cover shadow-xl"
            src="https://i.ibb.co/4M6Yjgj/377149425-896894145363927-5352944729973752699-n-1.jpg"
            alt="Profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
