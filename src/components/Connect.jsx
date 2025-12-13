import React from "react";
import { Github, Mail, Linkedin, Twitter } from "lucide-react";
const Connect = () => {
  const connects = [
    {
      name: "Email",
      text: "sourjyendubarik7798@gmail.com",
      logo: Mail,
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=sourjyendubarik7798@gmail.com",
    },
    {
      name: "GitHub",
      text: "Follow on GitHub",
      logo: Github,
      link: "https://github.com/sourjyendu-barik",
    },
    {
      name: "LinkediIn",
      text: "Connect on LinkedIn",
      logo: Linkedin,
      link: "https://www.linkedin.com/in/sourjyendu-barik-57880b21a/",
    },
    // {
    //   name: "Twitter",
    //   text: "Follow on twitter",
    //   logo: Twitter,
    //   link: "",
    // },
  ];
  return (
    <div id="contact">
      <h2 className="mt-3 display-3 fw-medium">Connect</h2>
      <p className="fs-3">Lets connect with something amazing together.</p>
      <div className="row">
        {connects.map((c, index) => {
          const { name, text, logo: Icon, link } = c;
          return (
            <div className="col-lg-6 mb-3" key={`c${index}`}>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                <div className="card text-secondary bg-dark">
                  <div className="card-body">
                    <h4 className="mb-3 fw-semibold d-flex align-items-center gap-2">
                      <Icon size={30} color="blue" />
                      {name}
                    </h4>
                    <p className="fs-4">{text}</p>
                  </div>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Connect;
