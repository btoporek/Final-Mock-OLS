import React from "react";
import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineMail,
} from "react-icons/ai";
import { FaReact, FaHtml5 } from "react-icons/fa";
import { SiJavascript, SiCss3, SiBootstrap } from "react-icons/si";
import "../App.css";
import "../styles/About.css";

function AboutPage() {
  return (
    <div className="about">
      <h1>About this Site</h1>
      <h5>Created by: Brittni Toporek</h5>
      <h5 className="job-title">Junior Front End Developer</h5>
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
      <a
        href="mailto:brittni.toporek@gmail.com"
        className="email"
        target="_blank"
        rel="noreferrer"
      >
        <AiOutlineMail id="email" />
      </a>
      <br></br>
      <img
        className="about-image"
        src="https://media.licdn.com/dms/image/C4E03AQG0Tco5DJNqKg/profile-displayphoto-shrink_200_200/0/1658886321663?e=1681948800&v=beta&t=eWGPRlJMBxZlMs4vRMeFcrY4o_E5PPTeWI9_h733lpY"
        alt="Card image cap"
      />
      <div className="about-info">
        <p className="about-text">This site was created using the following:</p>
        <FaReact className="icons" /> <SiJavascript className="icons" />{" "}
        <FaHtml5 className="icons" /> <SiCss3 className="icons" />{" "}
        <SiBootstrap className="icons" />
      </div>
    </div>
  );
}

export default AboutPage;
