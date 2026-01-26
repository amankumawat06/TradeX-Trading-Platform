import React from "react";
import "./style.css";

const Team = () => {
  return (
    <div className="container mt-5 mb-5 pt-5">
      <div className="row">
        <div className="col-lg-6 col-12 ownerImage text-center">
          <img
            src="media/Images/amankumawat.jpg"
            alt="Aman Kumawat"
            className="img-fluid"
          />
          <h3 className="mt-3 mb-2">Aman Kumawat</h3>
          <p>Full-Stack Developer</p>
        </div>

        <div
          className="col-lg-6 col-12 mb-5 aboutContent"
          style={{
            fontSize: "18px",
            fontWeight: "500",
            lineHeight: "30px",
            color: "#424242",
          }}
        >
          <h4 className="mb-4">About</h4>

          <p>
            Aman Kumawat is a full-stack developer with a strong interest in
            building real-world, production-level web applications. He created
            TradeX as a hands-on project to explore how modern trading platforms
            are designed, developed, and scaled.
          </p>

          <p>
            With experience in frontend and backend development, Aman focuses on
            clean UI, scalable architecture, and meaningful user experiences.
            TradeX reflects his approach to combining technical depth with
            practical product thinking.
          </p>

          <p>
            Beyond coding, Aman enjoys learning about financial markets,
            improving system design skills, and continuously refining his
            development workflow.
          </p>

          <p className="aboutLinks">
            Connect on{" "}
            <a href="https://x.com/amankumawatt67" target="_blank" rel="noreferrer">
              X
            </a>{" "}
            /{" "}
            <a href="https://www.instagram.com/amankmwt_06/?next=%2F&hl=en" target="_blank" rel="noreferrer">
              Instagram
            </a>{" "}
            /{" "}
            <a href="https://www.linkedin.com/in/aman-kumawat-8b3aaa343/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;
