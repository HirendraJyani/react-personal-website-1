import React, {useEffect} from 'react';
import "./Project.css";
import AOS from 'aos';
import "aos/dist/aos.css";

function Project({isLarge}) {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return (
        <div id="myproject" className="project" >
            <h1>Projects</h1><br/>
            <p>Here are some applications that I have developed</p>
            <div className="project_imgs" data-aos={"zoom-in"}>
                <div className={`cards ${isLarge && "cards_large"}`} >
                    <img className="project_img" src="./images/w2.jpg" alt="ProjectImage"/>
                    <div className="card">
                        <a className="myproject_links"  href="https://netflix-hirendra.web.app/" rel="noreferrer" target="_blank"><h2 className="myproject_links" >Netflix</h2></a>
                        <p>A web application where people can watch movies trailers. </p>
                    </div>
                </div>
                <div className={`cards ${isLarge && "cards_large"}`} >
                    <img className="project_img" src="./images/w3.jpg" alt="ProjectImage"/>
                    <div className="card">
                    <a className="myproject_links" href="https://covid-19-tracker-hirendra.web.app/" rel="noreferrer" target="_blank"><h2 className="myproject_links">CORONA</h2></a>
                        <p>A web application where people can know COVID cases, recoveries and deaths</p>
                    </div>
                </div>
                <div className={`cards ${isLarge && "cards_large"}`} >
                    <img className="project_img" src="./images/w1.jpg" alt="ProjectImage"/>
                    <div className="card">
                    <a className="myproject_links" href="https://e-clone-e1087.web.app/" rel="noreferrer" target="_blank"><h2 className="myproject_links">Amazon</h2></a>
                        <p>A Full Stack web application where people can order items.</p>
                    </div>
                </div>
            </div>
            <hr/>
        </div>
    );
}

export default Project;
