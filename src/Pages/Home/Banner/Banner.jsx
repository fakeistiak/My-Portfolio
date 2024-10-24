import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { MdDownload } from "react-icons/md";
import image2 from "../../../assets/image2.jpg";

const Banner = () => {
  useEffect(() => {
    AOS.init({ duration: 2000, offset: 200 });
  }, []);

  const handleDownloadResume = async () => {
    const googleDocsLink =
      "https://drive.google.com/file/d/1yJEavnLvLZ3vqtK_Sa8z5_jqloVyinhp/view";

    try {
      const response = await fetch(googleDocsLink);
      const blob = await response.blob();
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = "Istiuqe_Ahmed_Resume.pdf";
      link.target = "_blank";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading the file:", error);
    }
  };

  return (
    <div className="px-6 py-16 mx-auto min-h-screen text-white max-w-7xl">
      <div className="flex flex-col-reverse lg:flex-row items-center">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold"
            data-aos="fade-up"
          >
            Istiuqe Ahmed
          </h1>
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            I'm a{" "}
            <TypeAnimation
              sequence={["Front-End Developer", 2500]}
              speed={1}
              repeat={0}
            />
          </h1>
          <p
            className="mt-3 text-sm sm:text-base lg:text-lg font-extralight"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            My thirst for knowledge is endless, leading me on an exciting
            journey of continuous growth. I'm a hard worker who takes ownership
            of everything I do, always striving to help my company succeed.
          </p>
          <div
            className="text-2xl sm:text-3xl flex justify-center lg:justify-start gap-4 mt-4 py-4"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <FaFacebook />
            <FaInstagram />
            <FaGithub />
          </div>
          <button
            className="h-12 mt-4 w-full lg:w-auto p-3 bg-sky-400 font-bold text-black rounded-2xl flex items-center justify-center hover:bg-sky-600"
            data-aos="fade-up"
            data-aos-delay="600"
            onClick={handleDownloadResume}
          >
            Download Resume <MdDownload className="text-xl ml-2" />
          </button>
        </div>
        <div
          className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <img
            className="w-80 sm:w-96 lg:w-[450px] h-80 sm:h-96 lg:h-[450px] rounded-full object-cover shadow-xl"
            src={image2}
            alt="Profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
