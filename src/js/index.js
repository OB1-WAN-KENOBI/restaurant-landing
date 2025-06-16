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
  // --- SKELETON для изображений ---
  function setSkeleton(img) {
    img.classList.add("skeleton-img");
    img.onload = () => {
      img.classList.remove("skeleton-img");
    };
  }

  // динамически вставляем картинки
  const item1 = document.querySelector(".item-1 img");
  if (item1) {
    setSkeleton(item1);
    item1.src = img1;
  }
  const item2 = document.querySelector(".item-2 img");
  if (item2) {
    setSkeleton(item2);
    item2.src = img2;
  }
  const item3 = document.querySelector(".item-3 img");
  if (item3) {
    setSkeleton(item3);
    item3.src = img3;
  }
  document.querySelectorAll(".card img").forEach((img) => {
    setSkeleton(img);
    img.src = MaskGroup;
  });
  document.querySelectorAll(".carousel__track img").forEach((img) => {
    setSkeleton(img);
    img.src = hamburger;
  });

  // --- Intersection Observer для .card с stagger-эффектом ---
  const cards = document.querySelectorAll(".card");
  const observer = new window.IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("visible");
          }, entry.target.dataset.index * 120 || 0);
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );
  cards.forEach((card, i) => {
    card.dataset.index = i;
    observer.observe(card);
  });
});
