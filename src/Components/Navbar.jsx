import React from "react";
import logo from "../assets/Black and White Minimalist Professional Initial Logo.png"
import { Link } from "react-scroll";
const Navbar = () => {
  const links = (
    <>
      <li>
        <Link to="home" smooth={true} duration={500} className="cursor-pointer px-4 py-2 bg-gray-300 text-black rounded">Home</Link> 
      </li>
      <li>
      <Link to="about" smooth={true} duration={500} className="cursor-pointer px-4 py-2 bg-gray-300 text-black  rounded">About</Link> 
      </li>
      <li>
      <Link to="skills" smooth={true} duration={500} className="cursor-pointer px-4 py-2 bg-gray-300 text-black  rounded">Skills</Link> 
      </li>
      <li>
      <Link to="projects" smooth={true} duration={500} className="cursor-pointer px-4 py-2 bg-gray-300  text-black rounded">Projets</Link> 
      </li>
      <li>
      <Link to="contact" smooth={true} duration={500} className="cursor-pointer px-4 py-2 bg-gray-300  text-black rounded">Contact</Link> 
      </li>
    </>
  );
  return (
    <div className="fixed top-0 left-0 w-full bg-gray-500 text-white shadow-md z-50">
      <div className="navbar container mx-auto   ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl"><span ><img className=" h-[50px]" src={logo} alt="" /></span></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-3">{links}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-neutral">Resume</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
