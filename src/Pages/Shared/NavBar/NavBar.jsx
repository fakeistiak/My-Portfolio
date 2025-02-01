import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleRouteClick = () => {
    setOpen(false);
  };

  const navLinks = (
    <>
      <li className="text-2xl font-semibold px-2 py-1 text-white hover:text-cyan-500">
        <a href="" onClick={handleRouteClick}>
          <FaLinkedin />
        </a>
      </li>
      <li className="text-2xl font-semibold px-2 py-1 text-white hover:text-cyan-500">
        <a href="https://github.com/fakeistiak"  onClick={handleRouteClick}>
          <FaGithub />
        </a>
      </li>
      <li className="text-2xl font-semibold px-2 py-1 text-white hover:text-cyan-500">
        <a href="" onClick={handleRouteClick}>
          <FaFacebook />
        </a>
      </li>
    </>
  );

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2 backdrop-blur-md bg-transparent" : "py-4 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
        <Link 
          to="/" 
          className="text-2xl font-bold text-white tracking-wider hover:scale-105 transition-all duration-300 relative after:absolute after:w-full after:h-0.5 after:bg-white after:bottom-0 after:left-0 after:origin-right after:scale-x-0 hover:after:scale-x-100 hover:after:origin-left after:transition-transform after:duration-300"
        >
          Portfolio
        </Link>

        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="text-white hover:text-gray-300 transition-colors p-2 hover:bg-white/10 rounded-full"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <ul
          className={`absolute md:static left-0 right-0 md:flex md:space-x-8 ${
            open ? "top-full" : "-top-[400px]"
          } transition-all duration-500 ease-in-out md:opacity-100 md:translate-y-0 p-6 md:p-0 space-y-6 md:space-y-0 ${
            scrolled ? "bg-black/30 backdrop-blur-md" : "bg-black"
          } md:bg-transparent border-t border-white/10 md:border-t-0`}
        >
          {navLinks}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
