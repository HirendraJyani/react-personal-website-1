import React, { useEffect } from "react";
import "./Project.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Project({ isLarge }) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div id="myproject" className="project">
      <h1>Projects</h1>
      <br />
      <p>Here are some applications that I have developed</p>
      <div className="project_imgs" data-aos={"zoom-in"}>
        <div className={`cards ${isLarge && "cards_large"}`}>
          <img
            className="project_img"
            src="./images/w7.png"
            alt="ProjectImage"
          />
          <div className="card">
            <a
              className="myproject_links"
              href="https://bookmy-hotel.netlify.app/"
              rel="noreferrer"
              target="_blank"
            >
              <h2 className="myproject_links">Hotel Booking</h2>
            </a>
            <p>A Full Stack web application where people can book hotels. </p>
          </div>
        </div>
        <div className={`cards ${isLarge && "cards_large"}`}>
          <img
            className="project_img"
            src="./images/w8.png"
            alt="ProjectImage"
          />
          <div className="card">
            <a
              className="myproject_links"
              href="https://teamtask-planner.netlify.app/"
              rel="noreferrer"
              target="_blank"
            >
              <h2 className="myproject_links">Task Planner</h2>
            </a>
            <p>A Full Stack web application where teams can plan tasks.</p>
          </div>
        </div>
        <div className={`cards ${isLarge && "cards_large"}`}>
          <img
            className="project_img"
            src="./images/w9.png"
            alt="ProjectImage"
          />
          <div className="card">
            <a
              className="myproject_links"
              href="https://news-website-cl.netlify.app/"
              rel="noreferrer"
              target="_blank"
            >
              <h2 className="myproject_links">Newsify</h2>
            </a>
            <p>A fully responsive static website.</p>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Project;
