import { FaFacebook, FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";
import "./FooterStyles.css";

import React from "react";

const Footer = () => {
  return <div className="footer">
    <div className="footer-container">
      <div className="left">
        <div className="location">
          <FaHome size={20} style={{color:"#fff",marginRight: "2rem"}} />
          <div>
            <p>Gajuralalaram Kukatpally</p>
            <p>Hyderabad</p>
          </div>
        </div>
        <div className="phone">
          <h4><FaPhone size={20} style={{color:"#fff",marginRight: "2rem"}} />
          91-9265616481</h4>
        
        </div>
        <div className="email">
          <h4>
            <FaMailBulk size={20} style={{color:"#fff",marginRight: "2rem"}} />
            prashanta.kachhia@gmail.com
          </h4>
        
        </div>


      </div>
      
      <div className="right">
        <h4>About the company</h4>
        <p>I am Prashanta Patel.CEO and Founder of Shree HariTec.I enjoy discussing new Projects and design challenges.</p>
        <div className="social">
          <a href="https://www.linkedin.com/in/prashanta-patel-13a14b143" target="_blank">
            <FaLinkedin size={30} style={{color:"#fff",marginRight: "1rem"}} />

          </a>
          <a href="https://github.com/prashanta132?tab=repositories" target="_blank">
            <FaGithub size={30} style={{color:"#fff",marginRight: "1rem"}} />
          </a>
          <a href="https://www.facebook.com/prashanta.kachhia" target="_blank">
            <FaFacebook size={30} style={{color:"#fff",marginRight: "1rem"}} />

          </a>
          <a href="https://twitter.com/PrashantaPate19">
            <FaTwitter size={30} style={{color:"#fff",marginRight: "1rem"}} />

          </a>
          <a href="https://www.instagram.com/prashanta758/">
            <FaInstagram size={30} style={{color:"#fff",marginRight: "1rem"}} />

          </a>
          
        </div>
      </div>
    </div>
  </div>;
};

export default Footer;
