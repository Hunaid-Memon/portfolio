import Link from "next/link";
import React from "react";

interface Project {
  title: string;
  description: string;
  link: string;
}

const ProjectSection: React.FC = () => {
  const projects: Project[] = [
    {
      title: "E-Store",
      description: "Full Stack E-Commerce App using NextJS 13 with Sanity CMS",
      link: "https://e-store-hunaid-memon.vercel.app/",
    },
    {
      title: "Github Finder",
      description: "Github Finder app in React using github api",
      link: "https://githubfinderhm.netlify.app/",
    },
    {
      title: "Online Delivery",
      description: "Online Delivery Page HTML CSS AND Javascript",
      link: "https://karachionlinemeal.web.app/",
    },
  ];

  return (
    <section
      className="min-h-screen bg-gradient-to-r from-purple-600 to-indigo-900 text-white py-12 px-4"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <Link target="_black" href={project.link}>
                <h2 className="text-xl text-gray-500 font-semibold mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-600">{project.description}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
