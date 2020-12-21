import React from "react";
import "./EndSection.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const EndSection = () => {
  return (
    <div className="section contact-section">
      <div className="contact-ellipse">
        <h1>Contact Us</h1>
      </div>
      <div className="contact-details">
        <div className="contact-data">
          <div className="icons">
            <a
              href="https://www.instagram.com/randeep_rana_official/"
              target="_blank"
            >
              <InstagramIcon className="insta-icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/randeep-rana-40905b1a7/"
              target="_blank"
            >
              {" "}
              <FacebookIcon className="fb-icon" />
            </a>
            <a href="https://github.com/Randeep-Rana-au8" target="_blank">
              <GitHubIcon className="github-icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/randeep-rana-40905b1a7/"
              target="_blank"
            >
              <LinkedInIcon className="linkedin-icon" />
            </a>
          </div>
          <ul>
            <li>12 xxxx street, Delhi, India</li>
          </ul>
          <p> Email - Randeepsinghchauhan23@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default EndSection;
