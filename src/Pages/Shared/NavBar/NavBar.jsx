import {  NavLink } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";

const Navbar = () => {

  const navLinks = (
    <>
      <li className="font-bold">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="font-bold">
        <NavLink to="/projects">Projects</NavLink>
      </li>
      <li className="font-bold">
        <NavLink to="/contact">Contact Me</NavLink>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar  text-white bg-black max-w-screen ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <CiMenuBurger className="text-xl " />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <div className="normal-case font-bold text-center">
            <h1 className="lg:text-3xl text-xl pl-4 sm:text-sm font-extrabold">
              Portfolio
            </h1>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
