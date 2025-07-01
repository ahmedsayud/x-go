import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white p-5  shadow-sm flex items-center justify-center z-50">
      {/* Logo */}
      <div className="flex items-center justify-between w-[80%]">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-20" />
        </div>
        {/* Links */}
        <ul className="flex items-center space-x-8 font-medium text-base">
          <li>
            <Link
              to="/home"
              className="text-gray-700 hover:text-orange-500 transition"
            >
              Home Page
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="text-gray-700 hover:text-orange-500 transition"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="text-gray-700 hover:text-orange-500 transition"
            >
              How it works
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="text-gray-700 hover:text-orange-500 transition"
            >
              Charging
            </Link>
          </li>
          {/* Dropdown */}
          <li className="relative group">
            <button className="flex items-center text-gray-700 hover:text-orange-500 transition">
              Vehicles
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {/* Dropdown menu (hidden by default) */}
            <ul className="absolute left-0 mt-2 w-32 bg-white rounded shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity z-10">
              <li>
                <Link
                  to="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-orange-100"
                >
                  Car 1
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-orange-100"
                >
                  Car 2
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link
              to="#"
              className="text-gray-700 hover:text-orange-500 transition"
            >
              Language
            </Link>
          </li>
        </ul>
        {/* Get the app Button */}
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full px-8 py-2 ml-8 transition">
          Get the app
        </button>
      </div>
    </header>
  );
};

export default Header;
