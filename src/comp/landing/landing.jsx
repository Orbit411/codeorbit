import React from "react";
import "./landing.css";
import Lottie from "lottie-react";
import planet from "../../anm/planetlogo.json";
import coding from "../../anm/coding.json";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FaFacebook, FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
const Landing = () => {


  return (
    <>
      <div className="landing">
        <div className="left-side">
          <p className="welcome">welcome to our world :</p>
          <div
            className="d-flex"
            style={{  alignItems: "center" }}
          >
            <h1 className="logo">CodeOrbit </h1>
            <Lottie
              className="planet"
              style={{ height: 80, width: 80 }}
              animationData={planet}
            />
          </div>
          <div className="summeryabout" style={{ marginTop: "25px" }}>
            <h3 style={{ marginBottom: "25px" }}>who we are .. ?</h3>
            <p>
              {" "}
              At CodeOrbit, we specialize in creating innovative and responsive
              websites that deliver seamless user experiences. Our team combines
              cutting-edge technology with creative design to help businesses
              build their digital presence and achieve long-term success.
              Whether you're a startup or an established enterprise, we provide
              tailored solutions that meet your unique needs.
            </p>
          </div>
          <div className="contact-icons">
        <a
        target="_blank"
          href="https://api.whatsapp.com/send?phone=+201066442142&text=Hello,%20more%20information"
      
          rel="noopener noreferrer"
          className="icon what"
        >
          <FaWhatsapp />
        </a>
        <a
          href="https://facebook.com/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="icon face"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.instagram.com/urfav_zezo0?igsh=dnBxbjIwMjRoYXFx"
          target="_blank"
          rel="noopener noreferrer"
          className="icon face"
        >
        <FaInstagram />
        </a>
      </div>
        </div>
        <div className="right-side">
          <Lottie className="coding" animationData={coding} />
        </div>
      </div>
      <div className="break"></div>
    </>
  );
};

export default Landing;
