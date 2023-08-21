import React from "react";
import { FaLinkedin, FaGithub, FaMailBulk } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          {" "}
          Portfolio Hunaid &copy; {new Date().getFullYear()}. All rights
          reserved.
        </p>
        <div className="mt-4 flex justify-center space-x-4">
          <a
            href="https://www.linkedin.com/in/hunaid-m-hanif-056496137/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/hunaid-memon"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:hunaid.hanif@gmail.com"
            className="text-gray-400 hover:text-white"
          >
            <FaMailBulk />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
