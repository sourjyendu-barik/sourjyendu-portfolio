import React from "react";
import avanyaImg from "../assets/avanya.png";
import bookcom from "../assets/Bookcom.png";

import { Play, Github } from "lucide-react";
const Projects = () => {
  const projects = [
    {
      name: "Avanya",
      image: avanyaImg,
      text: `A intutive CRM system designed for lead management with
       pipeline visualizaion,automated follow-ups, and detailed analytics`,
      demolInk: "https://avanya-frontend.vercel.app/",
      codeLInk: "https://github.com/sourjyendu-barik/avanya-frontend",
      techs: ["React.Js", "Node.js", "Express.Js", "MongoDB"],
    },
    {
      name: "Books.com",
      image: bookcom,
      text: `An e-commerce platform with product listing,detail page,
       cart management, wistlist management, order mangement.`,
      demolInk: "https://books-com.vercel.app/",
      codeLInk: "https://github.com/sourjyendu-barik/books.com",
      techs: ["React.Js", "Node.js", "Express.Js", "MongoDB"],
    },
  ];
  return (
    <div id="projects">
      <h2 className="mt-3 display-3 fw-medium">Projects</h2>
      <p className="fs-3">Building solution that solve real world problems.</p>
      <div className="row">
        {projects.map((p) => {
          const { name, image, text, demolInk, codeLInk, techs } = p;
          return (
            <div className="col-md-6 col-lg-4 col-12 mb-3">
              <div className="card h-100 card-hover">
                <img
                  src={image}
                  alt={`image of ${name}`}
                  className="img-fluid object-fit-cover"
                />
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
                  <div className="d-flex gap-4 mt-3">
                    <a
                      href={demolInk}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="d-flex align-items-center gap-1 text-decoration-none"
                    >
                      <Play size={18} /> Demo
                    </a>

                    <a
                      href={codeLInk}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="d-flex align-items-center gap-1 text-decoration-none"
                    >
                      <Github size={18} /> Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
