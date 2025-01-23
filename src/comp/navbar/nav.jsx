import React, { useState } from "react";
import "../navbar/nav.css";
import Lottie from "lottie-react";
import planet from "../../anm/planetlogo.json";
import { IoMenu } from "react-icons/io5";
import { FaRegSun } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const Nav = () => {
  const [Show, setShow] = useState(false);
  const close = (params) => {
    setShow(false)
  }

  return (
    <div className="navbarr">
      <button
        className="icon-menu menu"
        onClick={(params) => {
          setShow(true);
        }}
      >
        <IoMenu />
      </button>
      <div className="place" />
      <div className="main-logo">
        CodeOrbit{" "}
        <span>
          <Lottie style={{ height: 60, width: 60 }} animationData={planet} />
        </span>
      </div>

      <div className="main-nav">
        <ul className="main-ul">
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
          <li className="main">
            CodeOrbit
            <Lottie
              style={{ height: 40, width: 40 }}
              animationData={planet}
            />{" "}
          </li>
          <li><a href="#Projects">Projects</a></li>
          <li><a href="#founder">founder</a></li>
        </ul>
      </div>

      <button  className="sun">
        <FaRegSun />
      </button>
      {Show && (
        <div className="menulist">
          <ul className="model">
            <li>
              <button
                className="icon-close"
                onClick={() => {
                  setShow(false);
                }}
              >
                {" "}
                <IoMdClose />
              </button>
            </li>
            <li >
            <a onClick={close} href="#about">About</a>
            </li>
            <li>
            <a onClick={close} href="#founder">founder</a>
            </li>
            <li>
            <a onClick={close} href="#contact">Contact</a>
            </li>
            <li>
            <a onClick={close} href="#Projects">Projects</a>
            </li>
          
          </ul>
        </div>
      )}
    </div>
  );
};

export default Nav;
