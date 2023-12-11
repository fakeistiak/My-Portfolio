import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import AOS from "aos";
import "aos/dist/aos.css";
const AboutMe = () => {
  const [counterStart, setCounterStart] = useState(false);
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <ScrollTrigger
        onEnter={() => setCounterStart(true)}
        onExit={() => setCounterStart(false)}
      >
        <div className="hero min-h-screen bg-black text-white">
          <div
            className="hero-content flex-col lg:flex-row"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img
              src="https://i.ibb.co/nMFBMJV/384557592-1028820068385630-2311366770841563287-n.jpg"
              className="w-[350px] h-[350px] rounded-full object-cover"
              alt="Profile"
              data-aos="zoom-in"
              data-aos-duration="1500"
            />
            <div
              className="text-white"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <h1 className="text-4xl lg:text-7xl font-bold  font-serif">
                About Me
              </h1>
              <h1 className="lg:text-4xl text-3xl font-bold font-serif  pt-4"> I'm a </h1>
              <p className=" w-1/2 p-2 font-serif">
                science background student finished my SSC from Shaheen Academy
                Feni and Hsc from Feni Govt College .Currently I'm in first year
                of my university at Computer Science and Engineering in Northern
                University Bangladesh
              </p>
            </div>
          </div>
        </div>
      </ScrollTrigger>
    </>
  );
};
export default AboutMe;
