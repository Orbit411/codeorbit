import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const SpaceBackground = () => {
  const particlesInit = async (engine) => {
    await loadFull(engine); // تحميل مكتبة tsparticles كاملة
  };

  return (
    <Particles
      id="tsparticles" // تعريف مكون Particles مع معرف فريد
      init={particlesInit} // تهيئة المكتبة
      options={{
        background: {
          color: { value: "#000000" }, // خلفية سوداء لمحاكاة الفضاء
        },
        particles: {
          number: {
            value: 750, // عدد النجوم (الجسيمات)
            density: {
              enable: true, // تفعيل كثافة النجوم
              value_area: 800, // المساحة التي يتم توزيع النجوم عليها
            },
          },
          color: {
            value: ["#ffffff", "#FFD700", "#87CEEB"], // ألوان النجوم
          },
          shape: {
            type: "circle", // شكل النجوم (دوائر)
          },
          opacity: {
            value: 0.8, // شفافية النجوم
            random: true, // جعل الشفافية عشوائية بين النجوم
          },
          size: {
            value: 3, // حجم النجوم
            random: true, // جعل حجم النجوم عشوائيًا
          },
          move: {
            enable: true, // تفعيل حركة النجوم
            speed: .5, // سرعة حركة النجوم
            direction: "none", // جعل الحركة عشوائية
            random: true, // جعل الاتجاهات عشوائية
            straight: false, // تعطيل الحركة المستقيمة
            out_mode: "out", // السماح للنجوم بالخروج من الشاشة عند الحواف
            bounce: false, // إلغاء تأثير الارتداد عند الحواف
          },
          collisions: {
            enable: false, // إلغاء التصادم بين النجوم
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true, // تفعيل تأثير المؤشر
              mode: "repulse", // جعل النجوم تتحرك بعيدًا عن المؤشر
            },
            onClick: {
              enable: true, // تفعيل تأثير عند النقر
              mode: "push", // إضافة جسيمات جديدة عند النقر
            },
          },
          modes: {
            repulse: {
              distance: 50, // المسافة التي تتحرك النجوم فيها بعيدًا عن المؤشر
              duration: 0.7, // مدة التأثير عند تحرك النجوم
            },
            push: {
              particles_nb: 4, // عدد النجوم المضافة عند النقر
            },
          },
        },
        retina_detect: true, // تحسين الجودة للشاشات عالية الدقة
      }}
    />
  );
};

export default SpaceBackground;
