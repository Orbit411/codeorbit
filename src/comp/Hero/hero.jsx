import React, { useRef } from "react";
import "../Hero/hero.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import planet from "../../anm/planetlogo.json";
import Lottie from "lottie-react";

const Hero = () => {
  const hero = useRef(null); // مرجع لعناصر الـ DOM لاستخدامها داخل الأنيميشن

  useGSAP(() => {
    gsap.fromTo(hero.current, {
      x: "15%", // يبدأ من خارج الشاشة
      textShadow: `
        2px 2px 8px rgba(0, 0, 0, 0.2),
        0 0 15px rgba(122, 28, 172, 0.5),
        0 0 25px rgba(122, 28, 172, 0.8),
        0 0 50px rgba(122, 28, 172, 1)
      `, // التأثير الأولي للوميض
    }, {
      x: "-10%", // ينتقل إلى خارج الشاشة من الجهة الأخرى
      textShadow: `
        2px 2px 8px rgba(0, 0, 0, 0.2), 
        0 0 25px rgba(122, 28, 172, 0.8),
        0 0 50px rgba(122, 28, 172, 1)
      `, // تأثير وميض أقوى عند الوصول
      duration: 1.5, // مدة الحركة (10 ثوانٍ)
      ease: "power1.inOut", // تسهيل الحركة
      repeat: -1, // تكرار إلى ما لا نهاية
      yoyo:true
    });

    // تأثير الوميض السريع
    gsap.to(hero.current, {
      textShadow: `
        2px 2px 8px rgba(0, 0, 0, 0.2),
        0 0 15px rgba(122, 28, 172, 0.5),
        0 0 25px rgba(122, 28, 172, 0.8),
        0 0 50px rgba(122, 28, 172, 1)
      `, // تأثير وميض
      duration:1.5, // مدة الوميض السريع
      repeat: -1, // تكرار إلى ما لا نهاية
      yoyo: true, // تأثير وميض ذهابًا وإيابًا
      ease: "power1.inOut", // تسهيل الحركة
    });
  
  });

  return (
    <>
      <div className="herosection">
        {/* النص والشعار المتحرك */}
        <div ref={hero} className="hero">
          Codeorbit
          <Lottie className="planet-hero" animationData={planet} />
        </div>
      </div>
      <div className="break"></div> {/* إضافة مسافة لتمييز القسم */}
    </>
  );
};

export default Hero;
