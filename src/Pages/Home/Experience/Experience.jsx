import { FaUserCheck } from "react-icons/fa";
import CountUp from "react-countup";
import { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import { GoProject } from "react-icons/go";
const Experience = () => {
  const [counterStart, setCounterStart] = useState(false);

  return (
    <>
      <ScrollTrigger
        onEnter={() => setCounterStart(true)}
        onExit={() => setCounterStart(false)}
      >
        <div className="flex justify-center items-center text-center px-20 pt-16">
          <div className="shadow-2xl rounded-xl h-[200px] w-[200px] flex flex-col justify-center items-center pb-8 gap-4">
            <GoProject className="text-4xl mt-2 text-white-500"></GoProject>
            <h1 className="text-4xl font-bold text-white-500">
              {counterStart && <CountUp delay={0.2} end={20} duration={1.5} />}
              +
            </h1>
            <h3 className="text-2xl font-serif font-bold text-white-500">
              Total Projects
            </h3>
          </div>
          <div className="shadow-2xl rounded-xl h-[200px] w-[200px] flex flex-col justify-center items-center pb-8 gap-4">
            <FaUserCheck className="text-4xl mt-2 text-white-500"></FaUserCheck>
            <h1 className="text-4xl font-bold text-white-500">
              {counterStart && <CountUp delay={0.2} end={6} duration={1.5} />}
              +
            </h1>
            <h3 className="text-xl font-serif font-bold text-white-500">
              Months Experience
            </h3>
          </div>

          <div className="flex-1">
            <h1 className="text-2xl font-bold">Right Section Heading</h1>
            <p className="text-gray-600">Right Section Content</p>
          </div>
        </div>
      </ScrollTrigger>
    </>
  );
};

export default Experience;
