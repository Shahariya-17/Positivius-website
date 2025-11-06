import React from "react";
import Logo from "../AppLogo/Logo";
import { NavLink } from "react-router";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `px-4 py-2 rounded-lg transition-all duration-200 ${
              isActive
                ? "bg-[#B9FF66] text-black font-semibold shadow-sm"
                : "text-gray-700 hover:bg-[#B9FF66]/80 hover:text-black"
            }`
          }
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            `px-4 py-2 rounded-lg transition-all duration-200 ${
              isActive
                ? "bg-[#B9FF66] text-black font-semibold shadow-sm"
                : "text-gray-700 hover:bg-[#B9FF66]/80 hover:text-black"
            }`
          }
        >
          Services
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/use-case"
          className={({ isActive }) =>
            `px-4 py-2 rounded-lg transition-all duration-200 ${
              isActive
                ? "bg-[#B9FF66] text-black font-semibold shadow-sm"
                : "text-gray-700 hover:bg-[#B9FF66]/80 hover:text-black"
            }`
          }
        >
          Use Cases
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/pricing"
          className={({ isActive }) =>
            `px-4 py-2 rounded-lg transition-all duration-200 ${
              isActive
                ? "bg-[#B9FF66] text-black font-semibold shadow-sm"
                : "text-gray-700 hover:bg-[#B9FF66]/80 hover:text-black"
            }`
          }
        >
          Pricing
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            `px-4 py-2 rounded-lg transition-all duration-200 ${
              isActive
                ? "bg-[#B9FF66] text-black font-semibold shadow-sm"
                : "text-gray-700 hover:bg-[#B9FF66]/80 hover:text-black"
            }`
          }
        >
          Blog
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="bg-base-100   py-3">
      <div className="flex justify-between items-center">
        <div>
          <Logo />
        </div>

        <div className="flex items-center">
          <div className="dropdown lg:hidden">
            <button tabIndex={0} className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow bg-base-100 rounded-box w-52 right-0"
            >
              {navLinks}
              <li className="mt-2">
                <button className="btn btn-outline btn-sm w-full">
                  Request a Quote
                </button>
              </li>
            </ul>
          </div>

          <ul className="hidden lg:flex items-center space-x-6">
            {navLinks}
            <button className="btn btn-outline ml-4 hover:bg-[#B9FF66] hover:text-black duration-200">
              Request a Quote
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
