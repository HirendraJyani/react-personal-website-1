import React from "react";
import "./Middle.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Middle() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="middle_screen" data-aos={"zoom-in"}>
      <div id="about" className="middle">
        <div className="my_profile">
          <img className="my_pic" src="./images/profile-pic.png" alt="MyPic" />
        </div>
        <div className="about_me">
          <h1>
            Hi! I'm Hirendra Jat, <br /> A Full Stack Developer <br /> From
            Rajasthan, India.
          </h1>{" "}
          <br />
          <p>
            Graduate of computer science with 2.5 years of experience working
            across Frontend and Backend web development. I love spending time on
            fixing little details and optimizing web apps. Also I like working
            in a team. I’m looking for a role where I can grow and learn from
            other experienced team members.
          </p>
          <br />
          <h3>Let's build something cool</h3>
          <br />
          <p>
            <span className="profile_links">Mail:</span>{" "}
            <a className="project_links" href="mailto:itshirendra@gmail.com">
              {" "}
              itshirendra@gmail.com{" "}
            </a>
          </p>
          <br />
          <p>
            <span className="profile_links">LinkedIn:</span>{" "}
            <a
              className="project_links"
              href="https://www.linkedin.com/in/hirendra-jat-277b041a7/"
              rel="noreferrer"
              target="_blank"
            >
              {" "}
              https://www.linkedin.com/in/hirendra-jat-277b041a7/{" "}
            </a>
          </p>
          <br />
          <p>
            <span className="profile_links">Github:</span>{" "}
            <a
              className="project_links"
              href="https://github.com/HirendraJyani"
              rel="noreferrer"
              target="_blank"
            >
              {" "}
              https://github.com/HirendraJyani{" "}
            </a>
          </p>
          <br />
          <a
            href="./resume/Hirendra_Resume.pdf"
            rel="noreferrer"
            target="_blank"
          >
            <button className="profile__button">RESUME</button>
          </a>
        </div>
      </div>
      <hr />
      {/* <script>
      AOS.init();
    </script> */}
    </div>
  );
}

export default Middle;
