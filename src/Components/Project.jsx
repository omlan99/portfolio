import React from "react";

const Project = ({ project, onClick }) => {
  const { project_name, image } = project;

  return (
    <div>
      <div className="card bg-base-100 border border-gray-400 h-full">
        <figure className="px-10 pt-10 h-[500px] object-cover">
          <img src={image} alt={project_name} className="rounded-xl overflow-hidden" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{project_name}</h2>
          <div className="card-actions">
            <button className="btn btn-neutral" onClick={() => onClick(project)}>
              Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
