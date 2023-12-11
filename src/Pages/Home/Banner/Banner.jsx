import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { MdDownload } from "react-icons/md";

const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration in milliseconds
      offset: 200, // Offset (in pixels) from the top of the page to start the animation
    });
  }, []);

  return (
    <div className="container px-6 py-16 mx-auto bg-black text-white">
      <div className="flex flex-col-reverse lg:flex-row items-center">
        <div className="lg:w-1/2 lg:pr-8">
          <div className="lg:max-w-lg pl-8">
            <h1 className="text-3xl lg:text-5xl font-bold k" data-aos="fade-up">
              Istiuqe Ahmed
            </h1>
            <h1
              className="text-3xl lg:text-5xl font-bold k"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <span className="k">I'm a </span>
              <TypeAnimation
                className="lg:text-5xl text-3xl "
                sequence={["MERN Stack Developer", 2500]}
                speed={1}
                repeat={0}
              />
            </h1>

            <p
              className="mt-3 k font-extralight"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              My thirst for knowledge is endless, leading me on an exciting
              journey of continuous growth. I'm a hard worker who takes
              ownership of everything I do, always striving to help my company
              succeed
            </p>

            <div
              className="text-3xl gap-4 flex mt-4 lg:pl-4 pl-12 py-4"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <a
                href="https://www.facebook.com/profile.php?id=100075844680557&mibextid=ZbWKwL"
                className="k"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.instagram.com/istiak_ahmed_14_/?igshid=YzAwZjE1ZTI0Zg%3D%3D"
                className="k"
              >
                <FaInstagram />
              </a>
              <a href="https://github.com/fakeistiak" className="k">
                <FaGithub />
              </a>
            </div>
            <button
              className="h-12 mt-4 w-full lg:w-auto p-3 bg-sky-400 font-bold text-black rounded-2xl flex items-center hover:bg-sky-600"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              Download Resume<MdDownload className="text-xl"></MdDownload>
            </button>
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
