import React, { useEffect, useRef, useState } from "react";
import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import done from "../../anm/done.json";
import rocket from "../../anm/rocket.json";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const [state, handleSubmit] = useForm("xkggdzzp");
  const [isMessageSent, setIsMessageSent] = useState(false); // حالة تتبع نجاح الإرسال
  const [move, setMove] = useState(false); // حالة تتبع الحركة
  const devee = useRef(null);

  // تفعيل GSAP عند تغيير حالة `move`
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (move) {
      const tl = gsap.timeline();

      // الحركة مع yoyo
      tl.to(devee.current, {
        rotate: 75, // التدوير
        x: 550, // التحرك في المحور X
        y: -200, // التحرك في المحور Y
        duration: 2.5,
        ease: "power2.inOut",
        yoyo: true, // العودة إلى الموضع الأصلي
        repeat: 1, // تكرار الحركة مرة واحدة (ذهاب وإياب)
      });
    }
  }, [move]);

  // التعامل مع نجاح الإرسال
  useEffect(() => {
    if (state.succeeded) {
      setIsMessageSent(true);
      setMove(true); // تفعيل الحركة
      setTimeout(() => {
        setIsMessageSent(false);
        setMove(false); // إعادة تعيين الحركة
      }, 5000);
    }
  }, [state.succeeded]);

  return (
    <>
      <div id="contact" className="project-title">Contact us</div>
      <div className="contact d-flex">
        <div className="left">
          <div className="title">
            <h1 className="h1 d-flex">
              {" "}
              <span className="icon-mail-envelope-closed"></span>Contact us
            </h1>
            <p>
              Contact us for more information and Get notified when I publish
              something new
            </p>
          </div>
          <div className="contactgem">
            <form
              onSubmit={(eo) => {
                eo.preventDefault(); // منع السلوك الافتراضي
                handleSubmit(eo); // إرسال النموذج
              }}
              className="d-flex"
              action=""
            >
              <div className="d-flex">
                <label htmlFor="name">Your Name</label>
                <input
                  autoComplete="off"
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  id="name"
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />
              </div>
              <div className="d-flex">
                <label htmlFor="email">Your Email</label>
                <input
                  autoComplete="off"
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  id="email"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
              <div className="d-flex">
                <label htmlFor="phone">Your Phone</label>
                <input
                  autoComplete="off"
                  type="tel"
                  name="phone"
                  placeholder="Enter Your Phone Number"
                  id="phone"
                />
                <ValidationError
                  prefix="Phone"
                  field="phone"
                  errors={state.errors}
                />
              </div>
              <div className="d-flex">
                <label htmlFor="message">Your Message</label>
                <textarea
                  autoComplete="off"
                  placeholder="Enter Your Message"
                  name="message"
                  id="message"
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>
              <button type="submit" disabled={state.submitting}>
                {state.submitting ? "Submitting..." : "Submit"}
              </button>
              {isMessageSent && (
                <p className="d-flex mesu" style={{ marginTop: "1.7rem" }}>
                  <Lottie
                    loop={false}
                    style={{ height: 55 }}
                    animationData={done}
                  />
                  Your message has been sent successfully
                </p>
              )}
            </form>
          </div>
        </div>
        <div ref={devee} className="right">
          <Lottie className="deve" animationData={rocket} />
        </div>
      </div>
    
      <div className="break"></div>
    </>
  );
};

export default Contact;
