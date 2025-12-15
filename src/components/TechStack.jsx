import React from "react";
import {} from "lucide-react";
const TechStack = () => {
  const techs = [
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Postman",
    "Bootstrap",
    "Git",
    "GitHub",
    "Visual Studio Code",
    "Chrome DevTools",
    "CodeSandbox",
    "Lucide Icons",
  ];

  return (
    <>
      <h2 className="mt-3 display-3 fw-medium">Tech Stack</h2>
      <p className="fs-3">Technologies and tools i work with</p>
      <div className="row">
        {techs.map((t, index) => {
          return (
            <div className="col-6 col-md-3" key={`tech${index}`}>
              <div className="card mb-2 card-hover">
                <div className="card-body">
                  <span className="fs-3">{t}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TechStack;
