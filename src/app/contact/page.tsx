import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const ContactPage = () => {
  return (
    <section className="bg-gradient-to-r from-purple-600 to-indigo-900 text-white py-20 px-6">
      <div className="container mx-auto text-center">
        <div className="max-w-lg mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-9">
            {`Get in Touch`}
          </h1>
          <p className="text-lg mb-8 text-justify">
            {`Have a project in mind or just want to say hi? Feel free to reach out to me. I'm always excited to collaborate on new and interesting web projects.`}
          </p>
          <p className="text-lg mb-8 text-justify">
            {`You can reach me at:`}
            <br />
            {`Email: `}
            <a href="mailto:your.email@example.com" className="text-blue-400">
              hunaid.hanif@gmail.com
            </a>
            <br />
            {`LinkedIn: `}
            <a
              href="https://www.linkedin.com/in/hunaid-m-hanif-056496137/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400"
            >
              Hunaid M Hanif
            </a>
            <br />
            {`GitHub: `}
            <a
              href="https://github.com/hunaid-memon"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400"
            >
              @hunaid-memon
            </a>
          </p>
          <div className="flex justify-center space-x-8">
            <a
              href="mailto:hunaid.hanif@gmail.com"
              className="btn btn-primary flex items-center"
            >
              <FaEnvelope className="mr-2" />
              Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary flex items-center"
            >
              <FaLinkedin className="mr-2" />
              LinkedIn
            </a>
            <a
              href="https://github.com/hunaid-memon"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary flex items-center"
            >
              <FaGithub className="mr-2" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
