import { NavLink } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { useState } from "react";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const navLinks = (
    <>
      <li className="font-semibold px-2 py-1 hover:text-cyan-500">
        <NavLink to="/" onClick={() => setIsDropdownOpen(false)}>
          Home
        </NavLink>
      </li>
      <li className="font-semibold px-2 py-1 hover:text-cyan-500">
        <NavLink to="/contact" onClick={() => setIsDropdownOpen(false)}>
          Contact Me
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="text-white bg-transparent fixed top-0 left-0 right-0 z-10 mx-auto max-w-7xl px-4 lg:px-8">
      <div className="flex justify-between items-center py-4">
        {/* Logo Section */}
        <div className="flex items-center">
          <h1 className="lg:text-3xl text-xl font-extrabold">Portfolio</h1>
        </div>

        {/* Hamburger Menu for Small Screens */}
        <div className="lg:hidden">
          <button
            onClick={handleDropdownToggle}
            className="text-xl focus:outline-none"
          >
            <CiMenuBurger />
          </button>
        </div>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <ul className="absolute top-16 left-4 right-4 bg-black rounded-md shadow-lg p-4 lg:hidden">
            {navLinks}
          </ul>
        )}

        {/* Navigation Links for Large Screens */}
        <div className="hidden lg:flex">
          <ul className="flex space-x-4">{navLinks}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
