import React, { useEffect, useState } from 'react';
import "./Nav.css";

import AOS from 'aos';
import "aos/dist/aos.css";

function Nav() {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };

    }, []);

    const List = () => {
        return(
            
            <div className="list_components" data-aos="fade-down-left">
                <a className={`list_link ${show && "list_link_black"}`} href="#home">HOME</a>
                <a className={`list_link ${show && "list_link_black"}`} href="#about">ABOUT</a>
                <a className={`list_link ${show && "list_link_black"}`} href="#myproject">PROJECTS</a>
                <a className={`list_link ${show && "list_link_black"}`} href="#myskills">SKILLS</a>
                <a className={`list_link ${show && "list_link_black"}`} href="#mytools">TOOLS</a>
                <a className={`list_link ${show && "list_link_black"}`} href="#mycontacts">CONTACT</a>
            </div>
            
        );
    }

    const MobileList = () => {
        const [active, setActive] = useState(false);
        return(
            <>
             {active && <List />}
            <button 
            onClick={() => {
                setActive(!active);
            }}
            className={`hamburger ${show && "hamburger_black"}`} id="hamburger">
                <i className="fas fa-bars"></i>
            </button>
           
            </>
        );
    }

    return (

    
        <nav className={`navbr ${show && "nav__black"}`}>
            
            <a className={`nav__logo ${show && "nav__logoBlack"}`} href="#home">
                <i className="fas fa-laptop-code fa-lg"></i>
            </a>
            {/* <button className={`hamburger ${show && "hamburger_black"}`} id="hamburger">
                <i className="fas fa-bars"></i>
            </button> */}
            <MobileList />
            <div className="nav__components" id="nav__components">
                <a className={`nav_link ${show && "nav_link_black"}`} href="#home">HOME</a>
                <a className={`nav_link ${show && "nav_link_black"}`} href="#about">ABOUT</a>
                <a className={`nav_link ${show && "nav_link_black"}`} href="#myproject">PROJECTS</a>
                <a className={`nav_link ${show && "nav_link_black"}`} href="#myskills">SKILLS</a>
                <a className={`nav_link ${show && "nav_link_black"}`} href="#mytools">TOOLS</a>
                <a className={`nav_link ${show && "nav_link_black"}`} href="#mycontacts">CONTACT</a>
            </div>
        </nav>
    );
}

export default Nav;
