import React from "react";
import "./about.css";
import coding from "../../anm/coding.json";
import creativity from "../../anm/creatvity.json";
import techno from "../../anm/techno.json";
import quality from "../../anm/quality.json";
import money from "../../anm/money (2).json";
import Lottie from "lottie-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const About = () => {
  // useGSAP(() => {
  //   gsap.from(".advant",{
  //     opacity:0,
  //     duration:.8,
  //     delay:1,
  //     y:-50,
  //     stagger:.5,
  //     scrollTrigger: {
  //       trigger: `.about`,
        
  //       start:"top 30%"
        
        
  //     } 
  //   })
    
      
  //     });
  return (
    <>
      <div id="about" className="project-title">ABOUT</div>
      <div  className="about">
        <p className="about-p">
          At CodeRbit, we craft tailored, innovative, and performance-driven
          websites. Using modern technologies, we deliver user-friendly and
          visually stunning solutions to bring your vision to life.
        </p>
        <h2 className="project-title">CODEORBIT ADVATAGES</h2>
        <div className="advantages">
          <div className="advant">
            <div className="advant-box">
              <h2>1-Creativity</h2>
              <p>
              We focus on delivering innovative and personalized web solutions. Our team blends cutting-edge technology with creative designs to build websites that are visually appealing, highly functional, and user-friendly. Each project is tailored to meet client goals, ensuring a unique digital experience that reflects their brand identity.
              </p>
            </div>
            <div className="main-design"><Lottie className="design"  animationData={creativity} /></div>
          </div>
          <div className="advant">
            <div className="advant-box">
              <h2>2-Using the Latest Technologies</h2>
              <p>
              We use the latest technologies to create high-performing, secure, and scalable websites. Our team stays updated with the newest tools and frameworks to ensure our solutions are efficient, reliable, and future-proof..
              </p>
            </div>
            <div className="main-design"><Lottie className="design"  animationData={techno} /></div>
          </div>
          <div className="advant">
            <div className="advant-box">
              <h2>3-Quality</h2>
              <p>
            
We ensure the highest quality in every website we build. Our team pays attention to every detail, following industry best practices to deliver stunning, functional, and fast websites. We continuously test and refine our work to meet the highest standards of excellence.
              </p>
            </div>
            <div className="main-design"><Lottie className="design"  animationData={quality} /></div>
          </div>
          <div className="advant">
            <div className="advant-box">
              <h2>4-Competitive Pricing</h2>
              <p>
            

              We offer competitive pricing without compromising quality. Our transparent and flexible pricing models cater to a wide range of budgets, making premium web solutions accessible to businesses of all sizes.              </p>
            </div>
            <div className="main-design"><Lottie className="design"  animationData={money} /></div>
          </div>
          
        </div>
      </div>
      <div className="break"></div>
    </>
  );
};

export default About;
