import React from "react";

import { Play, Github } from "lucide-react";
const Projects = () => {
  const projects = [
    {
      name: "Avanya",
      image: "",
      text: `A intutive CRM system designed for lead management with
       pipeline visualizaion,automated follow-ups, and detailed analytics`,
      demolInk: "",
      codeLInk: "",
      techs: ["React.Js", "Node.js", "Express.Js", "MongoDB"],
    },
    {
      name: "Books.com",
      image: "",
      text: `An e-commerce platform with product listing,detail page,
       cart management, wistlist management, order mangement.`,
      demolInk: "",
      codeLInk: "",
      techs: ["React.Js", "Node.js", "Express.Js", "MongoDB"],
    },
  ];
  return (
    <>
      <h2 className="mt-3 display-3 fw-medium">Projects</h2>
      <p className="fs-3">Building solution that solve real world problems.</p>
      <div className="row">
        {projects.map((p) => {
          const { name, image, text, demolInk, codeLInk, techs } = p;
          return (
            <div className="col-md-6 col-lg-4 col-12 mb-3">
              <div className="card h-100 card-hover">
                <div className="card-body d-flex flex-column justify-content-between">
                  <h3>{name}</h3>
                  <p className="fs-5">{text}</p>
                  <div className="d-flex flex-wrap gap-2">
                    {techs.map((t) => (
                      <div
                        key={`${name}-${t}`}
                        className="btn btn-secondary btn-sm"
                      >
                        {t}
                      </div>
                    ))}
                  </div>
                  <div className="d-flex gap-4 mt-2">
                    <p className="d-flex align-items-center gap-1">
                      <Play size={18} /> Demo
                    </p>
                    <p className="d-flex align-items-center gap-1">
                      <Github size={18} /> Code
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Projects;
