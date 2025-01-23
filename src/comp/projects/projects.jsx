import React, { useEffect, useState } from 'react';
import p2 from "../pic/p1.gif";
import p3 from "../pic/p2.gif";
import p4 from "../pic/p3.gif";
import p5 from "../pic/p4.gif";
import p6 from "../pic/p5.jpg";
import p7 from "../pic/p6.jpg";
import p8 from "../pic/Screenshot 2024-12-09 172454.jpg";
import p9 from "../pic/p9.jpg";
import pm1 from "../pic/pm1.jpg";
import pm2 from "../pic/pm2.jpg";
import pm3 from "../pic/pm3.jpg";
import pm4 from "../pic/pm4.jpg";
import pm5 from "../pic/pm5.jpg";
import { motion, AnimatePresence } from "framer-motion";
import "../projects/projects.css";
import { FaGlobe } from "react-icons/fa";

const myprojects = [
  {
    projectitle: "Films Website",
    details: "this website show many Films and Series with fake api from internet",
    category: ["react", "bootsrtap", "html"],
    imgpath: p2,
    linkgit: "https://github.com/zezo1895/news",
    linkrev: "https://zezo1895.github.io/news/",
    key: 1,
    rate: 6,
  },
  {
    projectitle: "landing1",
    details: "This landing page with css from Elzero chanel",
    category: ["css", "html", "bootsrtap"],
    imgpath: p3,
    linkgit: "https://github.com/zezo1895/hos",
    linkrev: "https://zezo1895.github.io/hos/",
    key: 2,
    rate: 5,
  },
  {
    projectitle: "Template1",
    details: "This Template with css to show very good design",
    category: ["css", "html"],
    imgpath: p4,
    linkgit: "https://github.com/zezo1895/T1",
    linkrev: "https://zezo1895.github.io/T1/",
    key: 3,
    rate: 5,
  },
  {
    projectitle: "Template2",
    details: "This Template with css to show very good design",
    category: ["css", "html"],
    imgpath: p5,
    linkgit: "https://github.com/zezo1895/T2",
    linkrev: "https://zezo1895.github.io/T2/",
    key: 4,
    rate: 5,
  },
  {
    projectitle: "To-Do-list",
    details: "to-do-list website with firebase auth multi language",
    category: ["css", "html", "react"],
    imgpath: p6,
    linkgit: "https://github.com/zezo1895/to-do-list/tree/main",
    linkrev: "https://react-level2-5eb47.web.app/",
    key: 5,
    rate: 7,
  },
  {
    projectitle: "Mini Store",
    details: "Mini Store for development",
    category: ["css", "html", "react"],
    imgpath: p7,
    linkgit: "https://github.com/zezo1895/revision2",
    linkrev: "https://e-kit-793a2.web.app/",
    key: 6,
    rate: 8,
  },
  {
    projectitle: "X-system 👋",
    details: "Full stack project with node to insert data of user with auth",
    category: ["css", "html", "react", "node", "bootsrtap"],
    imgpath: p8,
    linkgit: "https://github.com/zezo1895/X-Sysytem",
    linkrev: "https://x-sysytem-api.vercel.app",
    key: 7,
    rate: 9,
  },
  {
    projectitle: "King2game",
    details: "Telegram mini app to buy coins to games",
    category: ["css", "html", "react", "bootsrtap"],
    imgpath: p9,
    linkgit: "https://github.com/zezo1895/King2game",
    linkrev: "https://t.me/King2game_shop2_bot",
    key: 8,
    rate: 10,
  },
  {
    projectitle: "Dashbord",
    details: "Dashborad Page  is wonderfull page to your site",
    category: ["css", "html"],
    imgpath: pm1,
    linkgit: "https://github.com/zezo1895/King2game",
    linkrev: "https://mohame130.github.io/Dashbord-Mohamed/",
    key: 9,
    rate: 6,
  },
  {
    projectitle: "EShop",
    details: "E-commerce Website for many products",
    category: ["css", "html","react", "bootsrtap"],
    imgpath: pm2,
    linkgit: "https://github.com/zezo1895/King2game",
    linkrev: "https://eshop-mohamed-sharf.netlify.app/",
    key: 10,
    rate: 7,
  },
  {
    projectitle: "Landing Page",
    details: "Beautiful design page ",
    category: ["css", "html"],
    imgpath: pm3,
    linkgit: "https://github.com/zezo1895/King2game",
    linkrev: "https://mohame130.github.io/Design3/",
    key: 11,
    rate: 6,
  },
  {
    projectitle: "E-commerce ",
    details: "E-commerce Website with API ",
    category: ["css", "html","react"],
    imgpath: pm4,
    linkgit: "https://github.com/zezo1895/King2game",
    linkrev: "https://e-commerce-f94b9.web.app/",
    key: 12,
    rate: 7,
  },
  {
    projectitle: "Real state ",
    details: " Real state  E-commerce Website with API ",
    category: ["css", "html","react"],
    imgpath: pm5,
    linkgit: "https://github.com/zezo1895/King2game",
    linkrev: "https://real-estate-proj1.netlify.app/",
    key: 13,
    rate: 8,
  },
];

const Projects = () => {
  const [active, setactive] = useState("html");
  const [arr, setnewarr] = useState([]);  // القيمة الأولية تصبح مصفوفة فارغة

  useEffect(() => {
    const handel = (type) => {
      const newarr = myprojects
        .filter((item) => {
          const zz = item.category.find((myitem) => myitem === type);
          return zz === type;
        })
        .sort((a, b) => b.rate - a.rate); // ترتيب العناصر حسب rate تنازلياً
      setnewarr(newarr);
    };
    handel("html"); // يمكن تخصيص الفئة التي يتم تحميلها أولاً
  }, []); // يتم استدعاء useEffect مرة واحدة عند تحميل الصفحة

  const handel = (type) => {
    const newarr = myprojects
      .filter((item) => {
        const zz = item.category.find((myitem) => myitem === type);
        return zz === type;
      })
      .sort((a, b) => b.rate - a.rate); // ترتيب العناصر حسب rate تنازلياً
    setnewarr(newarr);
  };

  return (
    <>
      <h1 id="Projects" className="project-title">
        PROJECTS
      </h1>
      <section className="main-projects d-flex">
        <div className="buttons d-flex">
          <button
            onClick={() => {
              setactive("html");
              handel("html");
            }}
            className={active === "html" ? "active" : null}
          >
            all projects
          </button>
          <button
            onClick={() => {
              setactive("css");
              handel("css");
            }}
            className={active === "css" ? "active" : null}
          >
            html & css
          </button>
          <button
            onClick={() => {
              setactive("bootsrtap");
              handel("bootsrtap");
            }}
            className={active === "bootsrtap" ? "active" : null}
          >
            Bootsrtap
          </button>
          <button
            onClick={() => {
              setactive("react");
              handel("react");
            }}
            className={active === "react" ? "active" : null}
          >
            React
          </button>
          <button
            onClick={() => {
              setactive("node");
              handel("node");
            }}
            className={active === "node" ? "active" : null}
          >
            Node JS
          </button>
        </div>
        <div className="projects d-flex">
          <AnimatePresence>
            {arr.map((item) => {
              return (
                <a href={item.linkrev}  rel="noreferrer" key={item.key}>
                  <motion.article
                    className="article"
                    layoutId={item.key}
                    initial={{ opacity: 0 }}  // عند الدخول تكون الشفافية 0
                    animate={{ opacity: 1 }}  // عند التفعيل تصبح الشفافية 1
                    exit={{ opacity: 0 }}  // عند الخروج تكون الشفافية 0
                    transition={{
                      type: "spring",
                      damping: 25,
                      stiffness: 150,
                      duration: 0.5  // تقليل مدة التحويل
                    }}
                  >
                    <div className="coverpro-div d-flex">
                      <img className="coverpro" src={item.imgpath} alt="weza" />
                    </div>
                    <div className="box d-flex">
                      <div style={{ display: 'flex', justifyContent: "space-between", alignItems: "center" }}>
                        <h2 className="title">{item.projectitle}</h2>
                        <div>
                          <a className="icon-link" href={item.linkrev}>
                            <FaGlobe />
                          </a>
                        </div>
                      </div>
                      <div className="subtitle">{item.details}</div>
                    
                    </div>
                  </motion.article>
                </a>
              );
            })}
          </AnimatePresence>
        </div>
      </section>
      <div className="break"></div>
    </>
  );
};

export default Projects;
