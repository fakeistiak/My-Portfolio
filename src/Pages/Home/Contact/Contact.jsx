import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState, memo } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdCall, MdEmail } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

if (typeof window !== "undefined") {
  AOS.init({ duration: 2000, offset: 200 });
}

const InputField = memo(({ label, type, name, value, onChange, placeholder }) => (
  <div className="flex-1 px-2">
    <label className="block mb-2 text-sm">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="block w-full px-5 py-3 mt-2 border border-gray-200 rounded-md placeholder-gray-300 bg-black focus:border-blue-400 focus:ring focus:ring-opacity-40"
    />
  </div>
));

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(formData).some((field) => !field)) {
      toast.error("Please fill in all fields.");
      return;
    }
    toast.success("Message sent successfully!");
    setFormData({ fullName: "", email: "", message: "" });
  };

  return (
    <section className="min-h-screen text-white pt-20 mx-auto max-w-7xl">
      <div className="grid place-content-center px-4 py-4 text-yellow-50">
        <h1 className="max-w-2xl text-center text-5xl leading-snug">
          <span className="relative">
            <TypeAnimation sequence={["Contact Me", 2500]} speed={1} repeat={0} />
            <svg viewBox="0 0 286 73" fill="none" className="absolute -left-2 -right-2 -top-2 bottom-0 translate-y-1 scale-125">
              <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.25, ease: "easeInOut" }}
                d="M142.293 1C106.854 16.8908 6.08202 7.17705 1.23654 43.3756C-2.10604 68.3466 29.5633 73.2652 122.688 71.7518C215.814 70.2384 316.298 70.689 275.761 38.0785C230.14 1.37835 97.0503 24.4575 52.9384 1"
                stroke="#00FFFF"
                strokeWidth="5"
              />
            </svg>
          </span>
        </h1>
      </div>

      <div className="container px-6 py-10 mx-auto">
        <div className="lg:flex lg:items-center lg:-mx-6">
          <div className="lg:w-1/2 lg:mx-10">
            <h1 className="text-2xl font-semibold capitalize dark:text-white lg:text-3xl">Let’s talk</h1>
            <p className="mt-4">Ask us anything, and I would love to hear from you.</p>
            <form className="mt-12" onSubmit={handleSubmit}>
              <div className="-mx-2 md:items-center md:flex">
                <InputField label="Full Name" type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Name here..." />
                <InputField label="Email address" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email address..." />
              </div>
              <div className="w-full mt-4">
                <label className="block mb-2 text-sm">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="block w-full h-32 px-5 py-3 mt-2 border border-gray-200 rounded-md placeholder-gray-300 bg-black focus:border-blue-400 focus:ring focus:ring-opacity-40"
                  placeholder="Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 mt-4 text-sm font-semibold tracking-wide text-white capitalize transition-colors duration-300 transform bg-sky-400 rounded-md hover:bg-sky-600 focus:outline-none focus:ring focus:ring-opacity-50"
              >
                Send
              </button>
            </form>
          </div>
          <div className="mt-12 lg:flex lg:mt-0 lg:flex-col lg:items-center lg:w-1/2 lg:mx-10">
            <img
              loading="lazy"
              className="hidden border-4 border-white shadow-2xl shadow-cyan-500 object-cover mx-auto rounded-full lg:block w-96 h-96"
              src="https://i.ibb.co.com/RTQVR5YK/image1.jpg"
              alt="Profile"
            />
            <div className="mt-6 space-y-8 md:mt-8">
              <p className="flex items-start -mx-2">
                <FaLocationDot className="text-2xl text-white" />
                <span className="mx-2 truncate w-72">Uttara Sector-6, Dhaka</span>
              </p>
              <p className="flex items-start -mx-2">
                <MdCall className="text-2xl text-white" />
                <span className="mx-2 truncate w-72">01628303627</span>
              </p>
              <p className="flex items-start -mx-2">
                <MdEmail className="text-2xl text-white" />
                <span className="mx-2 truncate w-72">istiakahmedb100@gmail.com</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} closeOnClick pauseOnFocusLoss draggable pauseOnHover />
    </section>
  );
};

export default Contact;
