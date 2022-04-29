import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";


const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>aruns7010@gmail.com</span>
        <div className="f-icons">
          <a href="https://www.instagram.com/singh_programmer/" target="_blank"><Insta color="white" size={"3rem"} /></a>
          <a href="https://www.linkedin.com/in/arun-singh-a94220159/" target="_blank"><LinkedIn color="white" size={"3rem"} /></a>
          <a href="https://github.com/arunsingh12" target="_blank"><Gitub color="white" size={"3rem"} /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
