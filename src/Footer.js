import React, { useEffect } from "react";
import "./Footer.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Footer() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="footer">
      <div className="footer_icons">
        <a
          className="footer_icon"
          rel="noreferrer"
          href="https://www.linkedin.com/in/hirendra-jat-277b041a7/"
          target="_blank"
        >
          {" "}
          <i className="fab fa-linkedin fa-lg "></i>{" "}
        </a>
        <a
          className="footer_icon"
          rel="noreferrer"
          href="https://github.com/HirendraJyani"
          target="_blank"
        >
          {" "}
          <i className="fab fa-github fa-lg "></i>{" "}
        </a>
        <a href="./resume/Hirendra_Resume.pdf" rel="noreferrer" target="_blank">
          <i className="far fa-file fa-lg footer_icon"></i>
        </a>
      </div>
      <br />
      <div className="footer_message">
        <p>
          Copyright - {new Date().getFullYear()} Hirendra Jat, All Right
          Reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
