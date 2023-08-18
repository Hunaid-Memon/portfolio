'use client'
import React from "react";
import Image from "next/image";
import { FaCode, FaDesktop } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="hero bg-gradient-to-r from-purple-600 to-indigo-900 text-white py-20 px-4">
      <div className="container mx-auto text-center">
        <div className="max-w-lg mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-9">
            {`Hi, I'm Hunaid`}
          </h1>
          <p className="text-lg mb-8 text-justify">
            {`Welcome to my web developer portfolio! I'm Hunaid, a skilled web developer with expertise in crafting engaging and responsive websites. Proficient in HTML, CSS, JavaScript, & React, I transform ideas into user-friendly digital experiences. Take a look at my portfolio to witness the results and let's work together to make your web projects a reality."`}
          </p>
          <div className="flex justify-center space-x-8">
            <a href="#projects" className="btn btn-primary flex items-center">
              <FaCode className="mr-2" />
              View Projects
            </a>
            <a href="#contact" className="btn btn-secondary flex items-center">
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

export default HeroSection;
