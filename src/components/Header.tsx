import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const navLinks = [
  { name: "Home Page", to: "/home" },
  { name: "About", to: "#" },
  { name: "How it works", to: "#" },
  { name: "Charging", to: "#" },
];

const vehicles = [
  { name: "Car 1", to: "#" },
  { name: "Car 2", to: "#" },
];

const languages = [
  { code: "ar", label: "العربية" },
  { code: "en", label: "English" },
  { code: "ru", label: "Русский" },
];

const Header: React.FC = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(languages[1]); // Default: English

  return (
    <header className="fixed top-0 left-0 w-full bg-white p-3 shadow-sm z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto w-full px-2 md:px-8">
        {/* Logo */}
        <Link to="/home" className="flex items-center">
          <img src={logo} alt="Logo" className="w-24 h-auto" />
        </Link>
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center flex-1 justify-center">
          <ul className="flex items-center space-x-6 font-medium text-base">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.to}
                  className="text-gray-700 hover:text-[#E6911E] transition"
                >
                  {link.name}
                </Link>
              </li>
            ))}
            {/* Vehicles Dropdown */}
            <li className="relative group">
              <button className="flex items-center text-gray-700 hover:text-[#E6911E] transition">
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
              <ul className="absolute left-0 mt-2 w-32 bg-white rounded shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity z-10">
                {vehicles.map((v) => (
                  <li key={v.name}>
                    <Link
                      to={v.to}
                      className="block px-4 py-2 text-gray-700 hover:bg-[#cc7f15]"
                    >
                      {v.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            {/* Language Dropdown */}
            <li className="relative">
              <button
                className="flex items-center text-gray-700 hover:text-[#E6911E] transition"
                onClick={() => setLangOpen((v) => !v)}
                onBlur={() => setTimeout(() => setLangOpen(false), 150)}
              >
                {selectedLang.label}
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
              {langOpen && (
                <ul className="absolute left-0 mt-2 w-32 bg-white rounded shadow-lg z-20">
                  {languages.map((lang) => (
                    <li key={lang.code}>
                      <button
                        className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-[#cc7f15]"
                        onClick={() => {
                          setSelectedLang(lang);
                          setLangOpen(false);
                        }}
                      >
                        {lang.label}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
        </nav>
        {/* Get the app Button */}
        <button className="hidden md:block bg-[#E6911E] text-white font-bold rounded-full px-8 py-2 ml-8 transition">
          Get the app
        </button>
        {/* Mobile menu button */}
        <button
          className="md:hidden flex items-center px-2 py-1 border rounded text-gray-700 border-gray-300"
          onClick={() => setMobileMenu((v) => !v)}
          aria-label="Open menu"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {/* Mobile Nav */}
      {mobileMenu && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-40 z-50" onClick={() => setMobileMenu(false)}>
          <div
            className="absolute top-0 right-0 w-64 h-full bg-white shadow-lg p-6 flex flex-col gap-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="self-end mb-4 text-gray-700"
              onClick={() => setMobileMenu(false)}
              aria-label="Close menu"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <ul className="flex flex-col gap-4 font-medium text-base">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    className="text-gray-700 hover:text-[#E6911E] transition"
                    onClick={() => setMobileMenu(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              {/* Vehicles Dropdown (as flat links for mobile) */}
              <li className="font-semibold text-gray-700 mt-2">Vehicles</li>
              {vehicles.map((v) => (
                <li key={v.name} className="pl-4">
                  <Link
                    to={v.to}
                    className="text-gray-700 hover:text-[#cc7f15] transition"
                    onClick={() => setMobileMenu(false)}
                  >
                    {v.name}
                  </Link>
                </li>
              ))}
              {/* Language Dropdown */}
              <li className="font-semibold text-gray-700 mt-2">Language</li>
              {languages.map((lang) => (
                <li key={lang.code}>
                  <button
                    className={`w-full text-left px-2 py-1 rounded ${selectedLang.code === lang.code ? 'bg-[#E6911E] text-white' : 'text-gray-700 hover:bg-[#cc7f15]'}`}
                    onClick={() => {
                      setSelectedLang(lang);
                      setMobileMenu(false);
                    }}
                  >
                    {lang.label}
                  </button>
                </li>
              ))}
            </ul>
            <button className="bg-[#E6911E] text-white font-bold rounded-full px-8 py-2 mt-6 transition">
              Get the app
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
