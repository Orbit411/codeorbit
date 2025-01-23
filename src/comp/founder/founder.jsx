import React from "react";
import "./founder.css";
import img1 from "../pic/founderimg/photo_2025-01-20_22-17-12-Photoroom.png";
import img2 from "../pic/founderimg/photo_2025-01-20_22-10-11-Photoroom.png";
import { FaBootstrap, FaCss3Alt, FaGithub, FaHtml5, FaJs, FaNode, FaReact, FaWhatsapp } from "react-icons/fa"; // استيراد أيقونة واتساب من react-icons
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const Founder = () => {
  // useGSAP(() => {
  //   gsap.from(".founder",{
  //     opacity:0,
  //     scale:2,
  //     duration:.5,
      
      
  //     // stagger:1,
  //     scrollTrigger: {
  //       trigger: `.founders`,
        
  //       start:"top 90%"
        
        
  //     } 
  //   })
    
      
  //     });
  return (
  
    <>
      <div id="founder" className="project-title">FOUNDER</div>
      <div className="founders">
        <a target="_blank" href="https://api.whatsapp.com/send?phone=+201205988417&text=Hello,%20more%20information" className="founder">
          <div className="image">
            <img src={img1} alt="" />
          </div>
          <div className="founder-details">
            <h3>Ziad Adel</h3>
            <span>Fullstack Developer</span>
          </div>
          <div className="whatsapp-overlay">
            <div className="whatsapp-text"> WhatsApp</div>
            <div className="whatsapp-icon">
              <FaWhatsapp />
            </div>
          </div>
        </a>
        <a target="_blank" href="https://api.whatsapp.com/send?phone=+201013065795&text=Hello,%20more%20information" className="founder">
          <div className="image">
            <img className="img2" src={img2} alt="" />
          </div>
          <div className="founder-details">
            <h3>Mohamed Sharf Eldeen</h3>
            <span>Fullstack Developer</span>
          </div>
          <div className="whatsapp-overlay">
            <div className="whatsapp-text">WhatsApp</div>
            <div className="whatsapp-icon">
              <FaWhatsapp />
            </div>
          </div>
        
        </a>
      </div>
      <div className="icons">
            <div className="icon html"><FaHtml5 /></div>
            <div className="icon css"><FaCss3Alt /></div>
            <div className="icon boot"><FaBootstrap /></div>
            <div className="icon js"><FaJs/></div>
            <div className="icon react"><FaReact /></div>
            <div className="icon node"><FaNode /></div>
            <div className="icon git"><FaGithub /></div>
          </div>
          <div className="break"></div>
    </>
  );
};

export default Founder;
