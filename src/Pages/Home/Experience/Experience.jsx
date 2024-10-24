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
        <div className="flex flex-col lg:flex-row justify-center items-center text-center px-4 lg:px-20 max-w-5xl mx-auto pt-16 gap-8 ">
          <div className="mb-8 lg:mb-0">
            <div className="shadow-2xl rounded-xl h-[200px] lg:w-[200px] flex flex-col justify-center items-center pb-8 gap-4">
              <GoProject className="text-4xl mt-2 text-white-500"></GoProject>
              <h1 className="text-4xl font-bold text-white-500">
                {counterStart && (
                  <CountUp delay={0.2} end={20} duration={1.5} />
                )}
                +
              </h1>
              <h3 className="text-2xl font-serif font-bold text-white-500">
                Total Projects
              </h3>
            </div>
          </div>
          <div className="mb-8 lg:mb-0">
            <div className="shadow-2xl rounded-xl h-[200px] lg:w-[200px] flex flex-col justify-center items-center pb-8 gap-4">
              <FaUserCheck className="text-4xl mt-2 text-white-500"></FaUserCheck>
              <h1 className="text-4xl font-bold text-white-500">
                {counterStart && <CountUp delay={0.2} end={1} duration={2.5} />}
                +
              </h1>
              <h3 className="text-xl font-serif font-bold text-white-500">
                Years Experience
              </h3>
            </div>
          </div>
          <div className="flex-1">
            <ul className="steps steps-vertical">
              <li className="step step-primary">Finished 20+ React Project</li>
              <li className="step step-primary">
                Next js 2 learning
              </li>
              <li className="step step-primary">Exploring Typescript</li>
              <li className="step step-primary">Learnt Basic DSA</li>
            </ul>
          </div>
        </div>
      </ScrollTrigger>
    </>
  );
};

export default Experience;
