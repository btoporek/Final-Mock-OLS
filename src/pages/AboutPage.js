import React from "react";
import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineMail,
} from "react-icons/ai";
import "../App.css";
import "../styles/About.css";
import pictureofme from "../images/pictureofme.jpg";

function AboutPage() {
  return (
    <div className="about">
      <h1 className="about-h1">About this Site</h1>
      <h5 className="about-h5">Created by: Brittni Toporek</h5>
      <h4 className="about-h4">Front End Developer</h4>
      <a
        href="https://www.linkedin.com/in/brittni-toporek"
        target="_blank"
        rel="noreferrer"
      >
        <AiOutlineLinkedin id="linkedin" />
      </a>{" "}
      <a href="https://github.com/btoporek" target="_blank" rel="noreferrer">
        <AiOutlineGithub id="github" />
      </a>{" "}
      <button
        className="contact-button"
        onClick={(e) =>
          window.open(
            "https://form.jotform.com/230507098084154",
            "_blank",
            "width=700,height=800",
            "popup=true"
          )
        }
      >
        <AiOutlineMail id="email" />{" "}
      </button>
      {/* </a> */}
      <br></br>
      <img className="about-image" src={pictureofme} alt="creator" />
      <div className="about-info">
        <p className="about-p">This site was created using the following:</p>
        <img
          className="icons"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          alt="javascript"
        />
        <img
          className="icons"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
          alt="react"
        />
        <img
          className="icons"
          src="
          https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg
        "
          alt="html5"
        />{" "}
        <img
          className="icons"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
          alt="css3"
        />
        <img
          className="icons"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg"
          alt="bootstrap"
        />
      </div>
    </div>
  );
}

export default AboutPage;
