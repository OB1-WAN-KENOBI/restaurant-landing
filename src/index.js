import "./css/style.css";
import "./css/variables.css";
import "./js/script.js";
import "./js/carousel.js";
import img1 from "./image/233.png";
import img2 from "./image/255.png";
import img3 from "./image/430.png";
import MaskGroup from "./image/MaskGroup.png";
import hamburger from "./image/hamburger.png";

// динамически вставляем картинки
document.querySelector(".item-1 img").src = img1;
document.querySelector(".item-2 img").src = img2;
document.querySelector(".item-3 img").src = img3;
document.querySelectorAll(".card img").forEach((img) => {
  img.src = MaskGroup;
});
document.querySelectorAll(".carousel__track img").forEach((img) => {
  img.src = hamburger;
});
