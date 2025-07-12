import React, { useEffect } from "react";
import "./Contact.css";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import InstagramIcon from "@material-ui/icons/Instagram";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div id="mycontacts" className="contact">
      <div className="contact_message" data-aos={"zoom-in"}>
        <h1>I Can Help</h1>
        {/* <h3>I’m currently available for freelance work.</h3> */}
        <a className="project_links" href="mailto:itshirendra@gmail.com">
          <button className="contact__button">Message Me</button>
        </a>
      </div>
      <div className="contact_info" data-aos={"zoom-in"}>
        <h1>Contact Info</h1>
        <p>
          If you have a project that you want to get started, think you need my
          help with something or just fancy saying hey, then get in touch.
        </p>
        <br />
        <div className="contact_details">
          <LocationOnOutlinedIcon fontSize="large" className="contact_icons" />
          <div className="contact_details_info">
            <h3>Location</h3>
            <p className="project_links">Ajmer, Rajasthan, India.</p>
          </div>
        </div>
        <br />
        <div className="contact_details">
          <EmailOutlinedIcon fontSize="large" className="contact_icons" />
          <div className="contact_details_info">
            <h3>Email</h3>
            <p>
              <a className="project_links" href="mailto:itshirendra@gmail.com">
                {" "}
                itshirendra@gmail.com{" "}
              </a>
            </p>
          </div>
        </div>
        <br />
        <div className="contact_details">
          <InstagramIcon fontSize="large" className="contact_icons" />
          <div className="contact_details_info">
            <h3>Instagram</h3>
            <p>
              <a
                className="project_links"
                href="https://www.instagram.com/its_hirendra/"
                rel="noreferrer"
                target="_blank"
              >
                {" "}
                its_hirendra{" "}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
