'use client'
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-gray-900 text-white p-5">
      <div className="flex justify-between items-center">
        <div className="text-xl font-semibold">Hunaid</div>
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z" />
            </svg>
          </button>
        </div>
        <div className="hidden lg:block">
          <ul className="flex space-x-6">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li
              className={`relative group ${
                isDropdownOpen ? "text-gray-300" : ""
              }`}
            >
              <button
                onClick={toggleDropdown}
                className="group-hover:text-gray-300 focus:outline-none"
              >
                Projects
              </button>
              {isDropdownOpen && (
                <div className="absolute left-0 mt-2">
                  <div className="bg-gray-800 text-white w-40 rounded-lg overflow-hidden shadow-md">
                    <ul className="space-y-2 p-4">
                      <li>
                        <Link
                          target="_blank"
                          href="https://e-store-hunaid-memon.vercel.app/"
                        >
                          E-Store
                        </Link>
                      </li>
                      <li>
                        <Link
                          target="_blank"
                          href="https://githubfinderhm.netlify.app/"
                        >
                          Github Finder
                        </Link>
                      </li>
                      <li>
                        <Link
                          target="_blank"
                          href="https://karachionlinemeal.web.app/"
                        >
                           Food Delivery Design
                        </Link>
                      </li>
                      {/* Add more project links as needed */}
                    </ul>
                  </div>
                </div>
              )}
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden mt-4">
          <ul className="flex flex-col space-y-4">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li
              className={`relative group ${
                isDropdownOpen ? "text-gray-300" : ""
              }`}
            >
              <button
                onClick={toggleDropdown}
                className="flex items-center justify-between w-full text-left"
              >
                Projects
                <svg
                  className={`h-4 w-4 transition-transform ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 15.415l5.293-5.293 1.414 1.414-6 6a.999.999 0 01-1.414 0l-6-6 1.414-1.414L12 15.415z" />
                </svg>
              </button>
              {isDropdownOpen && (
                <ul className="pl-4 mt-2 space-y-2">
                  <li>
                    <Link href="/projects/project1">Project 1</Link>
                  </li>
                  <li>
                    <Link href="/projects/project2">Project 2</Link>
                  </li>
                  <li>
                    <Link href="/projects/project3">Project 3</Link>
                  </li>
                  {/* Add more project links as needed */}
                </ul>
              )}
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
