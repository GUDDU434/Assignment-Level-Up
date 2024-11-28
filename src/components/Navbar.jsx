import React, { useState } from "react";
import { Link } from "react-router-dom";
import data from "../ui_component.json";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#1F2A37] text-white ">
      <div className="container mx-auto flex justify-between items-center px-4 py-5  lg:w-9/12		 ">
        {/* Logo Section */}
        <img src={data?.header?.logo} alt="Logo" className="h-15 w-auto" />

        {/* Links for larger screens */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link
            to="/interviews"
            className="text-gray-300 text-lg hover:text-white hover:bg-gray-500 py-2 px-4 rounded-xl"
          >
            Interviews
          </Link>
          <Link
            to="/experts"
            className="text-gray-300 text-lg hover:text-white hover:bg-gray-500 py-2 px-4 rounded-xl"
          >
            Our Experts
          </Link>
          <Link
            to="/refer"
            className="flex items-center border border-yellow-500 text-lg text-gray-300 py-0.5 px-3 rounded-full"
          >
            Refer & Earn
          </Link>
          <Link
            to="/register"
            className="bg-gray-900 border-2 border-blue-500 text-blue-500 font-semibold py-2 px-4 rounded-md hover:bg-blue-500 hover:text-white"
          >
            Register
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="block md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6 text-gray-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800">
          <Link
            to="/interviews"
            className="block py-2 px-4 text-gray-300 hover:text-white hover:bg-gray-700"
            onClick={() => setIsOpen(false)}
          >
            Interviews
          </Link>
          <Link
            to="/experts"
            className="block py-2 px-4 text-gray-300 hover:text-white hover:bg-gray-700"
            onClick={() => setIsOpen(false)}
          >
            Our Experts
          </Link>
          <Link
            to="/refer"
            className="block w-full py-2 px-4 text-left text-gray-900 bg-yellow-500 hover:bg-yellow-400 font-semibold"
            onClick={() => setIsOpen(false)}
          >
            Refer & Earn
          </Link>
          <Link
            to="/register"
            className="block w-full py-2 px-4 text-left text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white font-semibold"
            onClick={() => setIsOpen(false)}
          >
            Register
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
