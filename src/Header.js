import React from 'react'
import './Header.css';

function Header() {
    return (
        <div className="header" style={{backgroundImage:"url(./images/back_img.jpg)"}}>
          
          <div id="home" className="header__contents">
          <h1 className="header__title">HIRENDRA <br /> JAT</h1>
         
              <div className="slider">
                <p className="slider_text1">CODER</p>
                <p className="slider_text2">FULL Stack Developer</p>
                <p className="slider_text3">Software Engineer</p>
             
            {/* <p className="header__para">FULL STACK DEVELOPER</p> */}
              </div>
          <a href="./resume/Hirendra_Resume.pdf" rel="noreferrer" target="_blank">
          <button className="header__button">RESUME</button>
          </a>
          </div>
          <div className="header__fade"></div>
        </div>
    );
}

export default Header;
