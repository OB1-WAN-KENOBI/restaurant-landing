/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../image/heroimage.png */ \"./src/image/heroimage.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../image/delicious-1866631_1920 1.png */ \"./src/image/delicious-1866631_1920 1.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../image/bar.png */ \"./src/image/bar.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: var(--font-family);\r\n}\r\n\r\n.header {\r\n  color: var(--color-azure);\r\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  height: 100vh;\r\n  font-size: var(--base-font-size);\r\n  font-weight: var(--font-weight-bold);\r\n}\r\n\r\n.nav {\r\n  display: flex;\r\n  justify-items: center;\r\n  flex-wrap: nowrap;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 70px;\r\n  padding-top: 15px;\r\n  position: sticky;\r\n  top: 0;\r\n  background: var(--color-nav-bg, rgba(0, 0, 0, 0.7));\r\n  z-index: 100;\r\n  backdrop-filter: blur(6px);\r\n}\r\n\r\n.nav-list {\r\n  display: flex;\r\n  gap: 15px;\r\n}\r\n\r\nul {\r\n  list-style-type: none;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: var(--color-azure);\r\n}\r\n\r\n.button {\r\n  background-color: var(--color-accent);\r\n  width: var(--button-width);\r\n  height: var(--button-height);\r\n  border-radius: 0.25rem;\r\n  border: var(--button-border);\r\n  box-shadow: var(--shadow-button);\r\n  transition: background 0.3s, transform 0.2s, box-shadow 0.2s;\r\n  z-index: 1;\r\n}\r\n\r\n.button:active {\r\n  transform: translate(0.125rem, 0.125rem);\r\n  box-shadow: 0.125rem 0.125rem #121212;\r\n}\r\n\r\n.button:hover {\r\n  background: #ff9800;\r\n  transform: scale(1.05);\r\n  box-shadow: 0 4px 16px 0 rgba(255, 116, 0, 0.15);\r\n}\r\n\r\n.ourrest {\r\n  justify-items: center;\r\n  margin-block-start: 170px;\r\n  display: grid;\r\n}\r\n\r\ndiv span:first-child {\r\n  font-size: 40px;\r\n}\r\n\r\ndiv span:nth-child(2) {\r\n  font-size: 50px;\r\n}\r\n\r\n.card-list {\r\n  color: black;\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: nowrap;\r\n  justify-content: center;\r\n  gap: 30px;\r\n  margin-block-start: -150px;\r\n}\r\n\r\n.card {\r\n  color: black;\r\n  width: 349px;\r\n  height: 328px;\r\n  background-color: white;\r\n  display: grid;\r\n  justify-items: center;\r\n  padding: var(--card-padding);\r\n  box-shadow: var(--shadow-card);\r\n  transition: box-shadow 0.3s, transform 0.3s;\r\n  opacity: 0;\r\n  transform: translateY(40px);\r\n  transition: opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1),\r\n    transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);\r\n}\r\n\r\n.card:hover {\r\n  box-shadow: 0 8px 32px 0 rgba(255, 116, 0, 0.25),\r\n    0 1.5px 8px 0 rgba(0, 0, 0, 0.1);\r\n  transform: translateY(-8px) scale(1.03);\r\n}\r\n\r\n.history {\r\n  display: grid;\r\n  grid-template-columns: repeat(2, 1fr);\r\n  grid-template-rows: repeat(1, 1fr);\r\n  margin-block-start: 125px;\r\n  padding-inline: 80px;\r\n  gap: 20px;\r\n  opacity: 0;\r\n  transform: translateY(40px);\r\n  transition: opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1),\r\n    transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);\r\n}\r\n\r\n.history.visible {\r\n  opacity: 1;\r\n  transform: translateY(0);\r\n}\r\n\r\n.collage {\r\n  position: relative;\r\n}\r\n\r\n.collage .item {\r\n  position: absolute;\r\n}\r\n\r\n.item-1 {\r\n  top: 20px;\r\n  left: 0px;\r\n  width: 260px;\r\n  z-index: 2;\r\n  transform: rotate(-5deg);\r\n}\r\n\r\n.item-2 {\r\n  top: 4px;\r\n  left: 285px;\r\n  width: 210px;\r\n  height: 300px;\r\n  z-index: 2;\r\n  transform: rotate(1.5deg);\r\n}\r\n\r\n.item-3 {\r\n  top: -35px;\r\n  left: 100px;\r\n  width: 255px;\r\n  height: 430px;\r\n  z-index: 0;\r\n  transform: rotate(-1deg);\r\n}\r\n\r\n.history h3 {\r\n  font-size: 54px;\r\n}\r\n\r\n.history p {\r\n  font-size: var(--base-font-size);\r\n}\r\n\r\n.history-place {\r\n  padding: 0 70px;\r\n}\r\n\r\n.stat {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.stat__number {\r\n  font-size: 2.5rem;\r\n  font-weight: 500;\r\n  color: var(--color-stat-accent);\r\n  margin-bottom: 8px;\r\n}\r\n\r\n.stat__label {\r\n  font-size: 1rem;\r\n  font-weight: 400;\r\n  color: var(--color-stat-label);\r\n}\r\n\r\n.our-history__stats {\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 40px; /* расстояние между карточками */\r\n}\r\n\r\n.promo-banner {\r\n  position: relative;\r\n  width: 100%;\r\n  height: 250px;\r\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\r\n  background-size: cover;\r\n  background-position: center;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-around;\r\n  margin-block-start: 140px;\r\n  opacity: 0;\r\n  transform: translateY(40px);\r\n  transition: opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1),\r\n    transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);\r\n}\r\n\r\n.promo-banner.visible {\r\n  opacity: 1;\r\n  transform: translateY(0);\r\n}\r\n\r\n.promo-banner__overlay {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background: rgba(0, 0, 0, 0.5); /* полупрозрачный чёрный фон */\r\n}\r\n\r\n.promo-banner__content {\r\n  position: relative; /* чтобы быть над оверлеем */\r\n  max-width: 600px;\r\n  text-align: center;\r\n  color: #fff;\r\n  padding: 0 20px;\r\n}\r\n\r\n.promo-banner__title {\r\n  font-size: 2rem;\r\n  margin-bottom: 12px;\r\n}\r\n\r\n.promo-banner__subtitle {\r\n  font-size: 1rem;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.menu {\r\n  display: flex;\r\n  margin-block-start: 150px;\r\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  height: 100vh;\r\n  justify-content: center;\r\n  opacity: 0;\r\n  transform: translateY(40px);\r\n  transition: opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1),\r\n    transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);\r\n}\r\n\r\n.menu.visible {\r\n  opacity: 1;\r\n  transform: translateY(0);\r\n}\r\n\r\n.carousel {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  position: relative;\r\n  align-items: center;\r\n  max-width: 922px;\r\n  opacity: 0;\r\n  transform: translateY(40px);\r\n  transition: opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1),\r\n    transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);\r\n}\r\n\r\n.carousel.visible {\r\n  opacity: 1;\r\n  transform: translateY(0);\r\n}\r\n\r\n.menu-card {\r\n  width: 275px;\r\n  height: 490px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 10px;\r\n  background-color: white;\r\n  box-shadow: var(--shadow-menu-card);\r\n}\r\n\r\n.carousel__track {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 30px;\r\n}\r\n\r\n.menu-card img {\r\n  width: 225px;\r\n  height: 225px;\r\n  border-radius: 50%;\r\n  box-shadow: var(--shadow-menu-img);\r\n}\r\n\r\n.price-circle {\r\n  position: relative;\r\n  bottom: 65px;\r\n  left: 165px;\r\n  width: 60px;\r\n  height: 60px;\r\n  background: var(--color-stat-accent);\r\n  color: #fff;\r\n  font-size: 1.2rem;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  border-radius: 50%;\r\n  box-shadow: var(--shadow-circle);\r\n  border: 4px solid white;\r\n}\r\n\r\n.modal-overlay {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: rgba(0, 0, 0, 0.5);\r\n  display: none; /* по умолчанию скрыт */\r\n  align-items: center;\r\n  justify-content: center;\r\n  z-index: 1000;\r\n  opacity: 0;\r\n  pointer-events: none;\r\n  transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);\r\n}\r\n.modal-overlay.active {\r\n  display: flex;\r\n  opacity: 1;\r\n  pointer-events: auto;\r\n}\r\n.modal-overlay.closing {\r\n  opacity: 0;\r\n  pointer-events: none;\r\n}\r\n.modal {\r\n  background: #fff;\r\n  padding: 20px;\r\n  border-radius: 8px;\r\n  max-width: 320px;\r\n  width: 90%;\r\n  box-shadow: var(--shadow-card);\r\n  transform: translateY(-40px) scale(0.98);\r\n  opacity: 0;\r\n  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1),\r\n    opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);\r\n}\r\n.modal-overlay.active .modal {\r\n  transform: translateY(0) scale(1);\r\n  opacity: 1;\r\n}\r\n.modal__close {\r\n  background: transparent;\r\n  border: none;\r\n  font-size: 1.5rem;\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 10px;\r\n  cursor: pointer;\r\n}\r\n#booking-form label {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin-bottom: 1rem;\r\n  font-size: var(--base-font-size);\r\n}\r\n#booking-form button[type=\"submit\"] {\r\n  background-color: var(--color-accent);\r\n  border: var(--button-border);\r\n  padding: 0.5rem 1rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.modal__confirmation {\r\n  margin-top: 1rem;\r\n  padding: 0.5rem 1rem;\r\n  background: #e0ffe0;\r\n  border: 1px solid #0a0;\r\n  border-radius: 4px;\r\n  color: #060;\r\n  font-size: var(--base-font-size);\r\n  display: none; /* скрыто по умолчанию */\r\n}\r\n\r\n.carousel__track-container {\r\n  overflow: hidden;\r\n}\r\n.carousel__track {\r\n  padding-inline-start: 15px;\r\n  display: flex;\r\n  transition: transform 0.5s ease-in-out;\r\n}\r\n\r\n.carousel__btn {\r\n  position: absolute;\r\n  top: 50%;\r\n  box-shadow: var(--shadow-button);\r\n  background: var(--color-accent);\r\n  border: var(--button-border);\r\n  width: 5rem;\r\n  height: 5rem;\r\n  border-radius: 50%;\r\n  cursor: pointer;\r\n  font-size: 1.5em;\r\n  color: #fff;\r\n  z-index: 10;\r\n  transition: transform 50ms, box-shadow 50ms;\r\n}\r\n\r\n.carousel__btn--prev {\r\n  right: 940px;\r\n}\r\n.carousel__btn--next {\r\n  left: 940px;\r\n}\r\n\r\n.carousel__track > * {\r\n  flex: 0 0 auto;\r\n}\r\n\r\n.carousel__btn:active {\r\n  transform: translate(0.125rem, 0.125rem);\r\n  box-shadow: 0.125rem 0.125rem #121212;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .nav {\r\n    flex-direction: column;\r\n    gap: 20px;\r\n  }\r\n\r\n  .card-list {\r\n    flex-direction: column;\r\n    align-items: center;\r\n    margin-block-start: 30px;\r\n  }\r\n\r\n  .card {\r\n    width: 90%;\r\n    height: auto;\r\n  }\r\n\r\n  .history {\r\n    grid-template-columns: 1fr;\r\n    padding-inline: 20px;\r\n  }\r\n\r\n  .promo-banner {\r\n    flex-direction: column;\r\n    height: auto;\r\n    text-align: center;\r\n    padding: 20px 10px;\r\n  }\r\n\r\n  .promo-banner__title {\r\n    font-size: 1.5rem;\r\n  }\r\n\r\n  .menu {\r\n    flex-direction: column;\r\n    height: auto;\r\n    margin-block-start: 60px;\r\n  }\r\n\r\n  .carousel__btn {\r\n    width: 3rem;\r\n    height: 3rem;\r\n    font-size: 1rem;\r\n  }\r\n\r\n  .menu-card {\r\n    width: 240px;\r\n    height: auto;\r\n  }\r\n\r\n  .menu-card img {\r\n    width: 180px;\r\n    height: 180px;\r\n  }\r\n\r\n  .carousel__track-container {\r\n    overflow-x: scroll;\r\n  }\r\n\r\n  .carousel__track {\r\n    flex-wrap: nowrap;\r\n    width: max-content;\r\n    gap: 20px;\r\n    padding: 0 10px;\r\n  }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .carousel {\r\n    flex-direction: column;\r\n    align-items: stretch;\r\n    width: 100%;\r\n  }\r\n\r\n  .carousel__track-container {\r\n    overflow-x: auto;\r\n    overflow-y: hidden;\r\n    -webkit-overflow-scrolling: touch;\r\n    width: 100%;\r\n  }\r\n\r\n  .carousel__track {\r\n    display: flex;\r\n    flex-wrap: nowrap;\r\n    width: max-content;\r\n    gap: 15px;\r\n    padding: 10px;\r\n    margin-left: 0;\r\n    transition: none;\r\n    transform: none !important;\r\n  }\r\n\r\n  .carousel__btn {\r\n    display: none;\r\n  }\r\n\r\n  .menu-card {\r\n    flex: 0 0 auto;\r\n    width: 260px;\r\n    min-width: 260px;\r\n    height: auto;\r\n  }\r\n\r\n  .menu-card img {\r\n    width: 180px;\r\n    height: 180px;\r\n  }\r\n  .collage {\r\n    position: relative;\r\n    height: auto;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 20px;\r\n    margin-top: 20px;\r\n  }\r\n\r\n  .collage .item {\r\n    position: static; /* отключаем абсолютное позиционирование */\r\n    transform: none; /* убираем повороты */\r\n    width: 80%;\r\n    max-width: 300px;\r\n    height: auto;\r\n  }\r\n\r\n  .collage .item img {\r\n    width: 100%;\r\n    height: auto;\r\n    border-radius: 10px;\r\n  }\r\n}\r\n\r\n/* --- Анимация появления карточек --- */\r\n.card.visible {\r\n  opacity: 1;\r\n  transform: translateY(0);\r\n}\r\n\r\n/* --- Skeleton для изображений --- */\r\n.skeleton-img {\r\n  background: linear-gradient(90deg, #eee 25%, #f5f5f5 50%, #eee 75%);\r\n  background-size: 200% 100%;\r\n  animation: skeleton-loading 1.2s infinite linear;\r\n}\r\n@keyframes skeleton-loading {\r\n  0% {\r\n    background-position: 200% 0;\r\n  }\r\n  100% {\r\n    background-position: -200% 0;\r\n  }\r\n}\r\n\r\n/* --- Плавный скролл --- */\r\nhtml {\r\n  scroll-behavior: smooth;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://food/./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/variables.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/variables.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\r\n  /* Типографика */\r\n  --font-family: sans-serif;\r\n  --base-font-size: 18px;\r\n  --font-weight-bold: bold;\r\n\r\n  /* Цвета */\r\n  --color-azure: azure;\r\n  --color-accent: #ff7400;\r\n  --color-stat-accent: #d28535;\r\n  --color-stat-label: #222;\r\n\r\n  /* Тени */\r\n  --shadow-button: 0.25rem 0.25rem #121212;\r\n  --shadow-card: 10px 10px 20px 0px rgba(0, 0, 0, 0.2);\r\n  --shadow-menu-card: 0 2px 6px rgba(0, 0, 0, 0.8);\r\n  --shadow-menu-img: 0 2px 6px rgba(0, 0, 0, 0.5);\r\n  --shadow-circle: 0 2px 6px rgba(0, 0, 0, 0.3);\r\n\r\n  /* Кнопки */\r\n  --button-width: 140px;\r\n  --button-height: 40px;\r\n  --button-border: 0.125rem solid #121212;\r\n\r\n  /* Размеры */\r\n  --card-padding: 40px;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://food/./src/css/variables.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://food/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://food/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://food/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://food/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://food/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://food/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://food/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://food/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://food/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://food/./src/css/style.css?");

/***/ }),

/***/ "./src/css/variables.css":
/*!*******************************!*\
  !*** ./src/css/variables.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_variables_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./variables.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/variables.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_variables_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_variables_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_variables_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_variables_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://food/./src/css/variables.css?");

/***/ }),

/***/ "./src/image/233.png":
/*!***************************!*\
  !*** ./src/image/233.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/ffb5913aed70f1556c38.png\";\n\n//# sourceURL=webpack://food/./src/image/233.png?");

/***/ }),

/***/ "./src/image/255.png":
/*!***************************!*\
  !*** ./src/image/255.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/661dcbb5a8c11f9408eb.png\";\n\n//# sourceURL=webpack://food/./src/image/255.png?");

/***/ }),

/***/ "./src/image/430.png":
/*!***************************!*\
  !*** ./src/image/430.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/cfc48e361787a47d49c5.png\";\n\n//# sourceURL=webpack://food/./src/image/430.png?");

/***/ }),

/***/ "./src/image/MaskGroup.png":
/*!*********************************!*\
  !*** ./src/image/MaskGroup.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/a4cf548245954c5c44ea.png\";\n\n//# sourceURL=webpack://food/./src/image/MaskGroup.png?");

/***/ }),

/***/ "./src/image/bar.png":
/*!***************************!*\
  !*** ./src/image/bar.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/83a52f86bd6e8e3c2695.png\";\n\n//# sourceURL=webpack://food/./src/image/bar.png?");

/***/ }),

/***/ "./src/image/delicious-1866631_1920 1.png":
/*!************************************************!*\
  !*** ./src/image/delicious-1866631_1920 1.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/007ef440a060b927c0eb.png\";\n\n//# sourceURL=webpack://food/./src/image/delicious-1866631_1920_1.png?");

/***/ }),

/***/ "./src/image/hamburger.png":
/*!*********************************!*\
  !*** ./src/image/hamburger.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/3c26a086eb8861e3fa04.png\";\n\n//# sourceURL=webpack://food/./src/image/hamburger.png?");

/***/ }),

/***/ "./src/image/heroimage.png":
/*!*********************************!*\
  !*** ./src/image/heroimage.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/10172348dee5b6a281ac.png\";\n\n//# sourceURL=webpack://food/./src/image/heroimage.png?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _css_variables_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/variables.css */ \"./src/css/variables.css\");\n/* harmony import */ var _js_script_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/script.js */ \"./src/js/script.js\");\n/* harmony import */ var _js_script_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_script_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _js_carousel_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/carousel.js */ \"./src/js/carousel.js\");\n/* harmony import */ var _js_carousel_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_carousel_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _image_233_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./image/233.png */ \"./src/image/233.png\");\n/* harmony import */ var _image_255_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./image/255.png */ \"./src/image/255.png\");\n/* harmony import */ var _image_430_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./image/430.png */ \"./src/image/430.png\");\n/* harmony import */ var _image_MaskGroup_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./image/MaskGroup.png */ \"./src/image/MaskGroup.png\");\n/* harmony import */ var _image_hamburger_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./image/hamburger.png */ \"./src/image/hamburger.png\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n  // динамически вставляем картинки\r\n  const item1 = document.querySelector(\".item-1 img\");\r\n  if (item1) item1.src = _image_233_png__WEBPACK_IMPORTED_MODULE_4__;\r\n  const item2 = document.querySelector(\".item-2 img\");\r\n  if (item2) item2.src = _image_255_png__WEBPACK_IMPORTED_MODULE_5__;\r\n  const item3 = document.querySelector(\".item-3 img\");\r\n  if (item3) item3.src = _image_430_png__WEBPACK_IMPORTED_MODULE_6__;\r\n\r\n  document.querySelectorAll(\".card img\").forEach((img) => {\r\n    img.src = _image_MaskGroup_png__WEBPACK_IMPORTED_MODULE_7__;\r\n  });\r\n  document.querySelectorAll(\".carousel__track img\").forEach((img) => {\r\n    img.src = _image_hamburger_png__WEBPACK_IMPORTED_MODULE_8__;\r\n  });\r\n\r\n  // Intersection Observer для .card\r\n  const cards = document.querySelectorAll(\".card\");\r\n  const observer = new window.IntersectionObserver(\r\n    (entries, obs) => {\r\n      entries.forEach((entry) => {\r\n        if (entry.isIntersecting) {\r\n          entry.target.classList.add(\"visible\");\r\n          obs.unobserve(entry.target);\r\n        }\r\n      });\r\n    },\r\n    { threshold: 0.2 }\r\n  );\r\n  cards.forEach((card) => observer.observe(card));\r\n\r\n  // Intersection Observer для секций\r\n  [\".history\", \".promo-banner\", \".carousel\", \".menu\"].forEach((selector) => {\r\n    const section = document.querySelector(selector);\r\n    if (section) {\r\n      section.classList.remove(\"visible\");\r\n      const secObs = new window.IntersectionObserver(\r\n        (entries, obs) => {\r\n          entries.forEach((entry) => {\r\n            if (entry.isIntersecting) {\r\n              entry.target.classList.add(\"visible\");\r\n              obs.unobserve(entry.target);\r\n            }\r\n          });\r\n        },\r\n        { threshold: 0.15 }\r\n      );\r\n      secObs.observe(section);\r\n    }\r\n  });\r\n\r\n  // Плавный скролл по якорям\r\n  document.querySelectorAll('.nav-list a[href^=\"#\"]').forEach((link) => {\r\n    link.addEventListener(\"click\", function (e) {\r\n      const targetId = this.getAttribute(\"href\").replace(\"#\", \"\");\r\n      const target =\r\n        document.getElementById(targetId) ||\r\n        document.querySelector(`[name='${targetId}']`);\r\n      if (target) {\r\n        e.preventDefault();\r\n        target.scrollIntoView({ behavior: \"smooth\", block: \"start\" });\r\n      }\r\n    });\r\n  });\r\n});\r\n\n\n//# sourceURL=webpack://food/./src/index.js?");

/***/ }),

/***/ "./src/js/carousel.js":
/*!****************************!*\
  !*** ./src/js/carousel.js ***!
  \****************************/
/***/ (() => {

eval("document.addEventListener(\"DOMContentLoaded\", () => {\r\n  const track = document.querySelector(\".carousel__track\");\r\n  const trackContainer = document.querySelector(\".carousel__track-container\");\r\n  const prevButton = document.querySelector(\".carousel__btn--prev\");\r\n  const nextButton = document.querySelector(\".carousel__btn--next\");\r\n  const carousel = document.querySelector(\".carousel\");\r\n\r\n  if (!track || !trackContainer || !prevButton || !nextButton || !carousel) {\r\n    console.error(\"Carousel elements not found\");\r\n    return;\r\n  }\r\n\r\n  // Плавное появление карусели\r\n  setTimeout(() => {\r\n    carousel.classList.add(\"visible\");\r\n  }, 100);\r\n\r\n  const card = document.querySelector(\".menu-card\");\r\n  const scrollStep = card ? card.offsetWidth + 30 : 305;\r\n  let currentX = 0;\r\n  let isAnimating = false;\r\n\r\n  nextButton.addEventListener(\"click\", () => {\r\n    if (isAnimating) return;\r\n    isAnimating = true;\r\n    const maxScroll = track.scrollWidth - trackContainer.clientWidth;\r\n    currentX = Math.min(currentX + scrollStep, maxScroll);\r\n    track.style.transform = `translateX(-${currentX}px)`;\r\n    setTimeout(() => (isAnimating = false), 500);\r\n  });\r\n\r\n  prevButton.addEventListener(\"click\", () => {\r\n    if (isAnimating) return;\r\n    isAnimating = true;\r\n    currentX = Math.max(currentX - scrollStep, 0);\r\n    track.style.transform = `translateX(-${currentX}px)`;\r\n    setTimeout(() => (isAnimating = false), 500);\r\n  });\r\n\r\n  window.addEventListener(\"resize\", () => {\r\n    const maxScroll = track.scrollWidth - trackContainer.clientWidth;\r\n    if (currentX > maxScroll) {\r\n      currentX = maxScroll;\r\n      track.style.transform = `translateX(-${currentX}px)`;\r\n    }\r\n  });\r\n});\r\n\n\n//# sourceURL=webpack://food/./src/js/carousel.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ (() => {

eval("document.addEventListener(\"DOMContentLoaded\", () => {\r\n  const modalOverlay = document.getElementById(\"booking-modal\");\r\n  const closeBtn = modalOverlay.querySelector(\".modal__close\");\r\n  const form = document.getElementById(\"booking-form\");\r\n  const confirmation = document.getElementById(\"booking-confirmation\");\r\n  const orderButtons = Array.from(\r\n    document.querySelectorAll(\r\n      \".menu-card .button, .header .button, .promo-banner .button\"\r\n    )\r\n  ).filter((btn) => btn.id !== \"theme-toggle\");\r\n  const firstInput = form.querySelector(\"input, select, textarea\");\r\n\r\n  function openModal() {\r\n    modalOverlay.classList.add(\"active\");\r\n    setTimeout(() => {\r\n      if (firstInput) firstInput.focus();\r\n    }, 200);\r\n    document.addEventListener(\"keydown\", handleEscClose);\r\n  }\r\n\r\n  function closeModal() {\r\n    modalOverlay.classList.add(\"closing\");\r\n    setTimeout(() => {\r\n      modalOverlay.classList.remove(\"active\", \"closing\");\r\n    }, 400); // время совпадает с transition в CSS\r\n    document.removeEventListener(\"keydown\", handleEscClose);\r\n  }\r\n\r\n  function handleEscClose(e) {\r\n    if (e.key === \"Escape\") closeModal();\r\n  }\r\n\r\n  orderButtons.forEach((btn) => btn.addEventListener(\"click\", openModal));\r\n\r\n  closeBtn.addEventListener(\"click\", closeModal);\r\n  modalOverlay.addEventListener(\"click\", (e) => {\r\n    if (e.target === modalOverlay) closeModal();\r\n  });\r\n\r\n  form.addEventListener(\"submit\", (e) => {\r\n    e.preventDefault();\r\n    const datetime = form.elements[\"datetime\"].value;\r\n    if (!datetime) return;\r\n\r\n    // показываем сообщение\r\n    confirmation.textContent = `Вы забронировали столик на ${new Date(\r\n      datetime\r\n    ).toLocaleString()}`;\r\n    confirmation.style.display = \"block\";\r\n\r\n    // сбрасываем форму и через 3 секунды закрываем модалку и скрываем сообщение\r\n    form.reset();\r\n    setTimeout(() => {\r\n      confirmation.style.display = \"none\";\r\n      closeModal();\r\n    }, 3000);\r\n  });\r\n});\r\n\n\n//# sourceURL=webpack://food/./src/js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;