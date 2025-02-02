import { useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { MdDownload } from "react-icons/md";

const Banner = () => {
  const [loaded, setLoaded] = useState(false);

  const handleDownloadResume = async () => {
    const googleDocsLink = "https://drive.google.com/file/d/1yJEavnLvLZ3vqtK_Sa8z5_jqloVyinhp/view";
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
    <motion.div
      className="px-6 pt-24 pb-4 mx-auto min-h-screen text-white max-w-7xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-12">
        <motion.div
          className="w-full lg:w-1/2 lg:items-start"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4">
            Istiuqe Ahmed
          </h1>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
            I'm a <TypeAnimation sequence={["Front-End Developer", 2500]} speed={1} repeat={0} className="text-sky-400" />
          </h2>
          <p className="mb-6 text-sm sm:text-base lg:text-lg font-light">
            My thirst for knowledge is endless, leading me on an exciting journey of continuous growth. I'm a hard
            worker who takes ownership of everything I do, always striving to help my company succeed.
          </p>
          <motion.button
            className="sm:w-auto w-auto text-sm p-3 bg-sky-400 font-bold text-black rounded-xl flex items-center justify-center hover:bg-sky-600 transition duration-300 ease-in-out"
            onClick={handleDownloadResume}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            Download Resume <MdDownload className="text-xl ml-2" />
          </motion.button>
        </motion.div>
        <motion.div
          className="w-full lg:w-1/2 flex items-center justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden shadow-xl">
            <img src="https://i.ibb.co.com/gbV9nv1L/image2.jpg" alt="Profile" className="w-full h-full object-cover" />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Banner;
