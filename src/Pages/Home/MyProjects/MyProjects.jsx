import { FaGithub, FaInstagram } from "react-icons/fa";
import { CiLink } from "react-icons/ci";
const MyProjects = () => {
  return (
    <div className="text-white bg-black lg:py-28">
      <h1 className="text-5xl font-bold font-serif text-center py-8">
        My Latest Projects
      </h1>
      <div className="flex justify-evenly">
        <div className="relative w-[350px] h-[300px] overflow-hidden border border-gray-300 rounded-md transition-transform transform hover:scale-105">
          <img
            className="w-full h-full object-cover transition-transform transform hover:scale-125"
            src="https://i.ibb.co/4M6Yjgj/377149425-896894145363927-5352944729973752699-n-1.jpg"
          />
          <div className="absolute top-24 left-0 w-full h-full flex flex-col justify-center items-center text-center text-white opacity-0 transition-opacity hover:opacity-100">
            <h1 className="text-2xl text-white font-semibold">LuxoStay</h1>
            <div className="text-3xl gap-4 flex mt-4 lg:pl-4 pl-12 py-4">
              <a href="https://godly-queen.surge.sh/">
                <CiLink />
              </a>
              <a href="https://www.instagram.com/istiak_ahmed_14_/?igshid=YzAwZjE1ZTI0Zg%3D%3D">
                <FaInstagram />
              </a>
              <a href="https://github.com/fakeistiak/LuxoStay-Client">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
        <div className="relative w-[350px] h-[300px] overflow-hidden border border-gray-300 rounded-md transition-transform transform hover:scale-105">
          <img
            className="w-full h-full object-cover transition-transform transform hover:scale-125"
            src="https://i.ibb.co/4M6Yjgj/377149425-896894145363927-5352944729973752699-n-1.jpg"
          />
          <div className="absolute top-24 left-0 w-full h-full flex flex-col justify-center items-center text-center text-white opacity-0 transition-opacity hover:opacity-100">
            <h1 className="text-2xl text-white font-semibold">CarHub</h1>
            <div className="text-3xl gap-4 flex mt-4 lg:pl-4 pl-12 py-4">
              <a href="https://assignment-10-90674.web.app/">
                <CiLink />
              </a>
              <a href="https://www.instagram.com/istiak_ahmed_14_/?igshid=YzAwZjE1ZTI0Zg%3D%3D">
                <FaInstagram />
              </a>
              <a href="https://github.com/fakeistiak/CarHub-Client">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
        <div className="relative w-[350px] h-[300px] overflow-hidden border border-gray-300 rounded-md transition-transform transform hover:scale-105">
          <img
            className="w-full h-full object-cover transition-transform transform hover:scale-125"
            src="https://i.ibb.co/4M6Yjgj/377149425-896894145363927-5352944729973752699-n-1.jpg"
          />
          <div className="absolute top-24 left-0 w-full h-full flex flex-col justify-center items-center text-center text-white opacity-0 transition-opacity hover:opacity-100">
            <h1 className="text-2xl text-white font-semibold">IAB Planner</h1>
            <div className="text-3xl gap-4 flex mt-4 lg:pl-4 pl-12 py-4">
              <a href="https://assignment-9-7feb1.web.app/">
                <CiLink />
              </a>
              <a href="https://www.instagram.com/istiak_ahmed_14_/?igshid=YzAwZjE1ZTI0Zg%3D%3D">
                <FaInstagram />
              </a>
              <a href="https://github.com/fakeistiak/IAB-Planner-Client">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
