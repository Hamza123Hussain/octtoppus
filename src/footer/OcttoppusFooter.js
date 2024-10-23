import React from "react";
import './css/OcttoppusFooter.css';
import OcttoppusLogo from "../components/OcttoppusLogo";
import packageJson from '../../package.json';
import { useNavigate } from "react-router-dom";
import { backendUrl, facebook, instagram, linkedin, menuItemsWithLinks } from "../Datasets/data";
import LazyLoad from "react-lazyload";

const OcttoppusFooter = () => {
    const Navigate = useNavigate();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="Main-footer" style={{backgroundColor: 'var(--secondary-dark-bg)'}}>
                    <LazyLoad offset={400} height={400}>
                        <video autoPlay loop muted playsInline>
                        <source src={backendUrl + "videos/footer-wave.mp4"} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </LazyLoad>

            <div className="footer-content">
                <div className="footer-left">
                    <div className="footer-logo-container">
                        <OcttoppusLogo
                            navigate={Navigate}
                            isScrolledUp='true'
                        />
                    </div>
                    <div className="footer-menu">
                    {menuItemsWithLinks.map((menuItem, index) => (
                        <a key={index} href={menuItem.mainMenuLink} className="footer-menu-item">
                            {menuItem.mainMenuItem}
                        </a>
                
                    ))}
                    </div>
                
                </div>
                <div className="footer-right">
                    <div className="footer-social-container">
                        <a href={linkedin} target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                        <a href={facebook} target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-facebook"></i>
                        </a>
                        <a href={instagram} target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                    </div>
                    {/* <div className="conclude-text">
                        <p>Make a difference!</p>
                    </div> */}
                    <div className="footer-copyright">
                        <p>© copyright {currentYear} Octtoppus. All rights reserved. v {packageJson.version} </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default OcttoppusFooter;
