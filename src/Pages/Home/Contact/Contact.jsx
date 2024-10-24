import AOS from "aos";
import { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdCall, MdEmail } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      offset: 200,
    });
  }, []);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const [successToast, setSuccessToast] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.message) {
      toast.error("Please fill in all fields.");
      return;
    }
    toast.success("Message sent successfully!");
    setFormData({
      fullName: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="min-h-screen  text-white pt-20 mx-auto max-w-7xl">
      <h1 className="lg:text-5xl text-3xl text-center font-bold font-serif text-white lg:pb-4 pb-2">
        Contact Me
      </h1>
      <div className="mx-auto w-28 h-1 bg-cyan-500"></div>

      <div className="container px-6 py-10 mx-auto">
        <div className="lg:flex lg:items-center lg:-mx-6">
          <div className="lg:w-1/2 lg:mx-10">
            <h1 className="text-2xl font-semibold  capitalize dark:text-white lg:text-3xl">
              Let’s talk
            </h1>
            <p className="mt-4">
              Ask us everything and I would love to hear from you
            </p>
            <form className="mt-12" onSubmit={handleSubmit}>
              <div className="-mx-2 md:items-center md:flex">
                <div className="flex-1 px-2">
                  <label className="block mb-2 text-sm ">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Name here..."
                    className="block w-full px-5 py-3 mt-2  border border-gray-200 rounded-md placeholder-gray-300 bg-gray-600 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <div className="flex-1 px-2 mt-4 md:mt-0">
                  <label className="block mb-2 text-sm ">Email address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email address..."
                    className="block w-full px-5 py-3 mt-2   border border-gray-200 rounded-md placeholder-gray-300 bg-gray-600 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
              </div>
              <div className="w-full mt-4">
                <label className="block mb-2 text-sm ">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="block w-full h-32 px-5 py-3 mt-2   border border-gray-200 rounded-md md:h-56 placeholder-gray-300 bg-gray-600 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 mt-4 text-sm font-bold tracking-wide text-black capitalize transition-colors duration-300 transform bg-sky-400 rounded-md hover:bg-sky-600 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
              >
                Send
              </button>
            </form>
          </div>
          <div className="mt-12 lg:flex lg:mt-0 lg:flex-col lg:items-center lg:w-1/2 lg:mx-10">
            <img
              className="hidden object-cover mx-auto rounded-full lg:block shrink-0 w-96 h-96"
              src="https://i.ibb.co/C1PydKw/400731331-343062448342896-2665823676800078365-n.jpg"
              alt="Profile"
            />
            <div className="mt-6 space-y-8 md:mt-8">
              <p className="flex items-start -mx-2">
                <FaLocationDot className="text-2xl text-white"></FaLocationDot>
                <span className="mx-2  truncate w-72">Uttara Sector-6, Dhaka</span>
              </p>
              <p className="flex items-start -mx-2">
                <MdCall className="text-2xl text-white"></MdCall>
                <span className="mx-2  truncate w-72">01628303627</span>
              </p>
              <p className="flex items-start -mx-2">
                <MdEmail className="text-2xl text-white"></MdEmail>
                <span className="mx-2  truncate w-72">
                  istiakahmedb100@gmail.com
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </section>
  );
};

export default Contact;
