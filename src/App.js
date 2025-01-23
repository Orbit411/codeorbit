import logo from "./logo.svg";
import "./App.css";
import "./index.css";
import Nav from "./comp/navbar/nav";
import StarsBackground from "./comp/starsBackground";
import Landing from "./comp/landing/landing";
import Projects from "./comp/projects/projects";
import Hero from "./comp/Hero/hero";
import About from "./comp/about/about";
import Founder from "./comp/founder/founder";
import Contact from "./comp/contact/contact";
import Footer from "./comp/footer/footer";
import image from "../src/comp/pic/logo192.png";
import Lottie from "lottie-react";
import rocket from "./anm/rocket.json";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import planet from "./anm/planetlogo.json";
import totop from "./anm/icons8-rocket-48.png"
import { FaArrowUp } from "react-icons/fa";

function App() {
  const [loading, setLoading] = useState(true);
  const[totop,settotop]=useState(false)
  const devee = useRef(null);
  const hero = useRef(null); 
  useGSAP(() => {


  
    const timeline = gsap.timeline();

    

  


    timeline.to(".deveee",{
  
    rotate:90,
    duration:1
      // scrollTrigger: {
      //   trigger: `.main-projects`,
        
      //   start:"top 50%"
        
        
      // } 
    })
    timeline.to(".deveee",{
  
      x:2500,
    y:900,
    scale:1.2,
    duration:2
      // scrollTrigger: {
      //   trigger: `.main-projects`,
        
      //   start:"top 50%"
        
        
      // } 
    })
    // timeline.to(".deveee",{
  
    // rotate:270,
    // duration:1
    //   // scrollTrigger: {
    //   //   trigger: `.main-projects`,
        
    //   //   start:"top 50%"
        
        
    //   // } 
    // })
    // timeline.to(".deveee",{
  
    //   x:-1500,
    // y:-200,
    // scale:1.1,
    // duration:2
    //   // scrollTrigger: {
    //   //   trigger: `.main-projects`,
        
    //   //   start:"top 50%"
        
        
    //   // } 
    // })

    
      
      });
      useEffect(() => {
        window.addEventListener("scroll",()=>{
          if(window.scrollY>300){
    settotop(true)
          }
          else{
            settotop(false)
          }
        })
        const timer = setTimeout(() => {
          setLoading(false); // بعد 5 ثوانٍ، إخفاء الـ Spinner
        }, 3000); // 5000 ميلي ثانية (5 ثوانٍ)
    
        // تنظيف التايمر إذا تم تدمير الكومبوننت
        return () => clearTimeout(timer);
      }, []);

      const handelclick=()=>{
        window.scrollTo(0,0)
          }
  return (
    <>
      <StarsBackground />
    {loading ?(<div ref={hero}
          className="d-flex loading-spinner"
          style={{  alignItems: "center" }}
        >
                <Lottie style={{ position: "fixed",zIndex:90000000,overflow:'hidden' }}  className="deve deveee" animationData={rocket} />
          <h1 className="logo">CodeOrbit </h1>
          <Lottie
            className="planet"
            
            animationData={planet}
          />
        </div>):
        (<>
  


    <div className="containerr">


      <Nav />
      <Landing />
      <Projects />
      <Hero />
      <About />
      <Founder />
      <Contact />
      <Footer />
    </div>
    <div className="footer-image">
      <img src={image} alt="" />
    </div>
    <button onClick={handelclick} style={{ opacity: totop ? 1 : 0 }} className="totoppp "><FaArrowUp className="up" /></button>
        </>)}
    
    </>
  );
}

export default App;
