import React from "react";
import Image from "next/image";
import { FaCode, FaDesktop } from "react-icons/fa";

const AboutPage = () => {
  return (
    <section className="bg-gradient-to-r from-purple-600 to-indigo-900 text-white py-20 px-6">
      <div className="container mx-auto text-center">
        <div className="max-w-lg mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-9">{`About Me`}</h1>
          <p className="text-lg mb-8 text-justify">
            {`I'm Hunaid, a passionate web developer with a focus on creating user-friendly and visually appealing websites. With a strong foundation in HTML, CSS, JavaScript, and React, I have the skills to turn your ideas into stunning digital experiences. My goal is to make the web a more interactive and engaging place.`}
          </p>
          <p className="text-lg mb-8 text-justify">
            {`I have a knack for crafting clean and efficient code that translates seamlessly into beautiful designs. Whether it's a personal blog, a business website, or an e-commerce platform, I'm dedicated to bringing your vision to life.`}
          </p>
          <div className="flex justify-center space-x-8">
            <a href="/projects" className="btn btn-primary flex items-center">
              <FaCode className="mr-2" />
              View Projects
            </a>
            <a href="/contact" className="btn btn-secondary flex items-center">
              <FaDesktop className="mr-2" />
              Hire Me
            </a>
          </div>
        </div>
        <div className="mt-10">
          <Image
            src="/hunaid.jpg"
            alt="Profile Image"
            width={300}
            height={300}
            className="rounded-full mx-auto border-4 border-white"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
