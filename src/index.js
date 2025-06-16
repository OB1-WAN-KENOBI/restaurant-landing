import "./css/style.css";
import "./css/variables.css";
import "./js/script.js";
import "./js/carousel.js";
import img1 from "./image/233.png";
import img2 from "./image/255.png";
import img3 from "./image/430.png";
import MaskGroup from "./image/MaskGroup.png";
import hamburger from "./image/hamburger.png";

document.addEventListener("DOMContentLoaded", () => {
  // динамически вставляем картинки
  const item1 = document.querySelector(".item-1 img");
  if (item1) item1.src = img1;
  const item2 = document.querySelector(".item-2 img");
  if (item2) item2.src = img2;
  const item3 = document.querySelector(".item-3 img");
  if (item3) item3.src = img3;

  document.querySelectorAll(".card img").forEach((img) => {
    img.src = MaskGroup;
  });
  document.querySelectorAll(".carousel__track img").forEach((img) => {
    img.src = hamburger;
  });

  // Intersection Observer для .card
  const cards = document.querySelectorAll(".card");
  const observer = new window.IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );
  cards.forEach((card) => observer.observe(card));

  // Intersection Observer для секций
  [".history", ".promo-banner", ".carousel", ".menu"].forEach((selector) => {
    const section = document.querySelector(selector);
    if (section) {
      section.classList.remove("visible");
      const secObs = new window.IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15 }
      );
      secObs.observe(section);
    }
  });

  // Плавный скролл по якорям
  document.querySelectorAll('.nav-list a[href^="#"]').forEach((link) => {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href").replace("#", "");
      const target =
        document.getElementById(targetId) ||
        document.querySelector(`[name='${targetId}']`);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
});
