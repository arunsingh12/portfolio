import React from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";


import Resume from './Arun_resume.pdf';

const Services = () => {
  // context


  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="Services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span>My Awesome</span>
        <span>services</span>
        <span>
        Frontend Developer with high level of experience in web designing and development
          <br />
          producting the Quality work.
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards" >
        {/* first card */}

        <div style={{left : "14rem"}}>
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figma, Sketch, Photoshop, Adobe Illustrator, Adobe xd"}
          />

          {/* second card */}
        </div>
        <div style={{top:"12rem", left:"-4rem"}}>
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"Html, Css, JavaScript, React, Nodejs, Express"}
          />
        </div>
        {/* 3rd */}
        <div style={{top:"19rem",left:"12rem"}}>
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={
              "Frontend Developer with high level of experience in web designing and development"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
