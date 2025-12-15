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

      {/* Large screen buttons */}
      <div className="d-none d-md-inline-flex gap-2">
        <a
          href="https://drive.google.com/file/d/15F5LMfmA1WfMmiTrvOSv7m697YDNgyxN/view"
          className="btn btn-danger btn-lg"
        >
          Resume
        </a>

        <a href="#contact" className="btn btn-danger btn-lg">
          Contact Me
        </a>
        <a href="#projects" className="btn btn-danger btn-lg">
          Project
        </a>
      </div>

      {/* Small screen buttons */}
      <div className="d-inline-flex d-md-none gap-2">
        <a
          href="https://drive.google.com/file/d/15F5LMfmA1WfMmiTrvOSv7m697YDNgyxN/view"
          className="btn btn-danger btn-lg"
        >
          Resume
        </a>

        <a href="#contact" className="btn btn-danger btn-sm">
          Contact
        </a>
        <a href="#projects" className="btn btn-danger btn-sm">
          Project
        </a>
      </div>
    </>
  );
};

export default Intro;
