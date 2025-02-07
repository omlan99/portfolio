import React, { useEffect, useState } from "react"; 
import axios from "axios";
import Project from "./Project";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null); 

  useEffect(() => {
    axios
      .get("https://portfolio-server-smoky-eight.vercel.app/projects")
      .then((res) => {
        setProjects(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
        setLoading(false);
      });
  }, []);

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
            <span className="loading loading-dots loading-lg"></span>
          </div>
        ) : projects.length > 0 ? (
          projects.map((project, index) => (
            <Project key={project.id || index} project={project} onClick={handleProjectClick} />
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-3">No projects found.</p>
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
                <span className="font-bold text-lg" >Project Description: </span> {selectedProject.project_description}
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
                {selectedProject.features.map((feature, index) =><li className="list-disc" key={index}>{feature}</li>)}
              </ul>
              </div>

            </>
          )}
        </div>
      </dialog>
    </div>
  );
};

export default Projects;
