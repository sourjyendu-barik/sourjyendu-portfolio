import React from "react";

const Intro = () => {
  return (
    <>
      <h1 className="display-2 fw-medium">Sourjyendu Kumar Barik</h1>
      <h2 className="text-secondary display-5">Full Stack Dev</h2>
      <p className="fs-3">
        Full stack developer (MERN stack) with hands‑on experience building 2
        major projects and multiple small applications using React, Node.js,
        Express, and MongoDB.
      </p>
      <p className="fs-3">
        Eager to contribute frontend and backend skills in a real‑world
        environment, with a strong foundation in REST APIs, responsive UIs, and
        full‑cycle development.
      </p>

      <div className="d-flex gap-4">
        <button className="btn btn-primary btn-lg"> Contact Me</button>
        <button className="btn btn-primary btn-lg">Resume</button>
      </div>
    </>
  );
};

export default Intro;
