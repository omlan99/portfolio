import React, { useEffect, useState } from "react";
import axios from "axios";
import Project from "./Project";

const Projects = () => {
  // const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const projects = [
    {
      id: "1",
      project_name: "Lingo Bingo",
      project_description:
        "Lingo Bingo is a fun and interactive language learning application designed to help users expand their vocabulary and improve their communication skills in multiple languages. ",
      image:
        "https://i.ibb.co.com/pvccbqbq/Fire-Shot-Capture-042-Lingo-Bingo-lingo-bingo-auth-web-app.png",
      techstack: ["React", "Axios", "Firebase", "Tailwind CSS"],
      features: [
        "Interactive Lessons",
        "Responsive Design",
        "Audio Pronunciation",
        "Tutorial Videos",
      ],
      link: "https://lingo-bingo-auth.web.app/",
      repo: "https://github.com/omlan99/Lingo-Bingo",
    },
    {
      id: "2",
      project_name: "Visa Navigator",
      project_description:
        "Visa Navigator is a user-friendly portal that simplifies the process of checking visa requirements, applying for visas online, and tracking visa applications.",
      image:
        "https://i.ibb.co.com/3yRckZ3M/Fire-Shot-Capture-039-Vite-React-visa-navigator-d47f9-web-app.png",
      techstack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      features: [
        "Visa Requirement Lookup",
        "Visa Application Management",
        "Apply for visa",
        "Responsive and mobile-friendly UI",
      ],
      link: "https://visa-navigator-d47f9.web.app/",
      repo: "https://github.com/omlan99/Visa_Navigator_Client",
    },
    {
      id: "3",
      project_name: "Gadget Heaven",
      project_description:
        "GadgetHeaven is a responsive e-commerce platform for gadget enthusiasts. Built using React, the platform provides a seamless user experience for browsing, filtering, and purchasing gadgets. ",
      image:
        "https://i.ibb.co.com/4Z5DGbtf/Fire-Shot-Capture-040-Home-teal-cocada-23a7aa-netlify-app.png",
      techstack: ["React", "Tailwind CSS"],
      features: [
        "User can add product to wishlist",
        "User can add product to cart",
        "User can see list of cart products",
        "User can see list of wishlited products",
      ],
      link: "https://teal-cocada-23a7aa.netlify.app/",
      repo: "https://github.com/omlan99/Gadget-store",
    },
  ];

 

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    document.getElementById("my_modal_3").showModal();
  };

  return (
    <div id="projects">
      <h2 className="text-center text-6xl font-medium pb-20 pt-[100px]">
        Projects
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 p-5">
        {loading ? (
          <div className="w-full flex justify-center">
            {/* <span className="loading loading-dots loading-lg"></span> */}
            {console.log(projects)}
          </div>
        ) : projects.length > 0 ? (
            projects.map((project, index) => (
              
            <Project
              key={project.id || index}
              project={project}
              onClick={handleProjectClick}
              />
            ))
            
        ) : (
          <p className="text-center text-gray-500 col-span-3">
            No projects found.
          </p>
        )}
      </div>

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          {selectedProject && (
            <>
              <p className="py-4">
                <span className="font-bold text-lg">Project Description: </span>{" "}
                {selectedProject.project_description}
              </p>
              <p className="font-bold text-lg">Tech Stack:</p>
              <div className="flex flex-wrap gap-2">
                {selectedProject.techstack.map((tech, index) => (
                  <span key={index} className="badge bg-gray-400 text-white">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="py-4 pl-4">
                <p className="font-bold text-lg ">Features</p>
                <ul>
                  {selectedProject.features.map((feature, index) => (
                    <li className="list-disc" key={index}>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex gap-3">
                <a
                  href={selectedProject.link}
                  target="_blank"
                  className="btn btn-neutral"
                >
                  Live Link
                </a>
                <a
                  href={selectedProject.repo}
                  target="_blank"
                  className="btn btn-neutral"
                >
                  Repo Link
                </a>
              </div>
              <div className="py-4">
                <p className="font-bold text-lg">Challenges </p>
                <li>Learning CRUD oprerations</li>
                <li>Finishing the project on time</li>
              </div>
              <div className="py-4">
                <p className="font-bold text-lg">Future Plan </p>
                <li>To improve the ux</li>
                <li>To add more features</li>
              </div>
            </>
          )}
        </div>
      </dialog>
    </div>
  );
};

export default Projects;
