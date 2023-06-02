/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/data/data-menu.js":
/*!*******************************!*\
  !*** ./src/data/data-menu.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menu": () => (/* binding */ menu)
/* harmony export */ });
var menu = {
  mains: [{
    name: 'Fettuccine Alfredo',
    price: '$12',
    details: 'creamy parmesean sauce, pasta'
  }, {
    name: 'Spinach Stuffed Shells',
    price: '$10',
    details: 'cream sauce, spinach, ricotta, asiago, mozzarella cheese, oven baked'
  }, {
    name: 'Pasta Alla Norma',
    price: '$14',
    details: 'saute shrimp, garlic butter, fresh tomato, sweet basil, white wine, over pasta'
  }],
  pizza: [{
    name: 'Margherita',
    price: '$16',
    details: 'tomato sauce, fresh mozzarella, olive oil, basil'
  }, {
    name: 'Meat Amore',
    price: '$19',
    details: 'pepperoni, Italian sausage, canadian bacon, beef'
  }, {
    name: 'Tomato Basil',
    price: '$15',
    details: 'fresh tomatoes, mozzarella, garlic, olive oil, basil (no sauce)'
  }],
  salads: [{
    name: 'Caeser Salad',
    price: '$8',
    details: 'romaine, parmigiano, asiago, croutons,classic Caeser dressing'
  }, {
    name: 'Caprese',
    price: '$7',
    details: 'resh mozzarella, ripe tomato, arugula, basil, olive oil, balcamic reduction'
  }, {
    name: 'Arugula & Pear',
    price: '$9',
    details: 'arugula, salami, prosciutto, roasted red peppers, ren onion, Romano, garlic lemon dressing'
  }]
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;1,200;1,300;1,400;1,600;1,700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\nli {\n  list-style-type: none;\n}\n\nimg {\n  width: 100%;\n}\n\nbutton {\n  cursor: pointer;\n}\n\n.container {\n  max-width: 1280px;\n  width: 80%;\n  margin: 0 auto;\n}\n\n@keyframes slideInFromLeft {\n  0% {\n    transform: translateX(-100%);\n    opacity: 0.5;\n  }\n  100% {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n.header {\n  background-color: rgb(54, 54, 54);\n  position: relative;\n  z-index: 999;\n  box-shadow: 0 4px 2px -2px rgb(151, 151, 151);\n  color: white;\n}\n\n.nav__ul {\n  font-size: 1.4rem;\n  padding: 1rem 1rem 1rem 0;\n  display: flex;\n  justify-content: flex-end;\n  gap: 10%;\n  cursor: pointer;\n}\n\n.nav-item:hover {\n  color: rgb(255, 127, 22);\n}\n\n.nav-item {\n  padding: 0.7rem 1.5rem;\n  border-radius: 5px;\n}\n\n.nav-selected {\n  color: rgb(255, 115, 0);\n  font-weight: 600;\n}\n\n@media (max-width: 650px) {\n  .nav__ul {\n    justify-content: center;\n    padding: 1rem 0;\n    gap: 0;\n  }\n}\n.home {\n  background-color: white;\n  display: flex;\n  justify-content: space-between;\n  animation: 0.3s ease-out 0s 1 slideInFromLeft;\n}\n\n.home-left {\n  max-width: 55%;\n  padding-top: 6rem;\n  padding-bottom: 3rem;\n}\n\n.home-right {\n  max-width: 45%;\n}\n.home-right img {\n  width: 100%;\n  height: 100%;\n}\n\n.heading-s {\n  font-size: 1.4rem;\n  color: grey;\n  font-weight: 300;\n  letter-spacing: 0.2rem;\n}\n\n.heading-b {\n  font-family: \"Libre Baskerville\", serif;\n  padding: 1.8rem 0 3rem 0;\n  font-size: 2.6rem;\n  line-height: 3.5rem;\n  letter-spacing: 0.1rem;\n}\n\n.btn {\n  border: none;\n  padding: 1rem 2rem;\n  font-size: 1rem;\n  border-radius: 3px;\n  box-shadow: 0 0.2rem 0.6rem rgba(0, 0, 0, 0.5);\n}\n\n.btn-orange {\n  background: linear-gradient(to top right, rgba(253, 151, 56, 0.9), rgba(255, 115, 0, 0.9));\n  letter-spacing: 0.1rem;\n}\n\n.btn-orange:hover {\n  background: rgb(255, 166, 0);\n}\n\n.home__socials {\n  padding-top: 6rem;\n}\n\n.socials__heading {\n  font-size: 1rem;\n  padding-bottom: 1rem;\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n}\n\n.socials {\n  font-size: 1rem;\n}\n\n.social + .social {\n  padding-top: 0.5rem;\n}\n\n.line {\n  height: 1.5px;\n  width: 3.5rem;\n  background-color: rgb(48, 48, 48);\n}\n\n.menu {\n  padding: 2rem 0;\n  animation: 0.25s ease-out 0s 1 slideInFromLeft;\n}\n\n.menu__content {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(min(200px, 100%), 1fr));\n  grid-template-rows: 1fr 1fr;\n  gap: 3rem;\n}\n\n.course-name {\n  color: rgba(255, 115, 0, 0.9);\n  letter-spacing: 0.1rem;\n  font-size: 2.2rem;\n  padding-bottom: 0.57rem;\n  font-weight: 600;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.menu__hs {\n  color: rgba(255, 115, 0, 0.9);\n  font-size: 1.5rem;\n  padding-bottom: 0.6rem;\n  font-weight: 400;\n}\n\n.menu__hb {\n  letter-spacing: 0.2rem;\n  font-family: \"Libre Baskerville\", serif;\n  font-weight: 700;\n  padding-bottom: 2rem;\n}\n\n.menu-item {\n  display: flex;\n  justify-content: space-between;\n  gap: 0.4rem;\n  margin-bottom: 0.3rem;\n  font-size: 1.1rem;\n  white-space: nowrap;\n}\n\n.underline {\n  width: 100%;\n  height: 1px;\n  margin-top: 1rem;\n  background-color: rgba(61, 61, 60, 0.2);\n}\n\n.details {\n  font-size: 0.9rem;\n  font-weight: 300;\n  margin-bottom: 1.1rem;\n}\n\n@media (max-width: 650px) {\n  .menu__content {\n    display: block;\n  }\n  .course + .course {\n    margin-top: 2rem;\n  }\n}\n.contact img {\n  max-width: 3rem;\n}\n\n.contact-us {\n  text-align: center;\n  padding-top: 7rem;\n  animation: 0.35s ease-out 0s slideInFromLeft;\n}\n\n.contact-hb {\n  font-size: 3.2rem;\n  font-family: \"Libre Baskerville\", serif;\n  margin-bottom: 0.6rem;\n}\n\n.contact-hs {\n  font-size: 1.1rem;\n  font-weight: 400;\n}\n\n.contacts {\n  display: flex;\n  justify-content: center;\n  margin-top: 5rem;\n}\n\n.contact + .contact {\n  margin-left: 5rem;\n}\n\n.contact-upper {\n  text-transform: uppercase;\n  font-weight: 700;\n  color: rgb(78, 78, 78);\n  margin: 0.8rem 0 1.7rem 0;\n  font-size: 0.8rem;\n  font-family: \"Libre Baskerville\", serif;\n}\n\n.contact-details {\n  letter-spacing: 0.1rem;\n  font-weight: 600;\n}\n\n@media (max-width: 650px) {\n  .contacts {\n    flex-direction: column;\n    margin-bottom: 4rem;\n  }\n  .contact + .contact {\n    margin-left: 0;\n    margin-top: 3rem;\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles/_general.scss","webpack://./src/styles/index.scss","webpack://./src/styles/_header.scss","webpack://./src/styles/_home.scss","webpack://./src/styles/_menu.scss","webpack://./src/styles/_contact.scss"],"names":[],"mappings":"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","sourcesContent":["@forward 'fonts';\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody {\r\n  font-family: 'Source Sans Pro', sans-serif;\r\n}\r\n\r\nli {\r\n  list-style-type: none;\r\n}\r\n\r\nimg {\r\n  width: 100%;\r\n}\r\n\r\nbutton {\r\n  cursor: pointer;\r\n}\r\n\r\n.container {\r\n  max-width: 1280px;\r\n  width: 80%;\r\n  margin: 0 auto;\r\n}\r\n\r\n@keyframes slideInFromLeft {\r\n  0% {\r\n    transform: translateX(-100%);\r\n    opacity: 0.5;\r\n  }\r\n  100% {\r\n    transform: translateX(0);\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n","@import url(\"https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;1,200;1,300;1,400;1,600;1,700&display=swap\");\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\nli {\n  list-style-type: none;\n}\n\nimg {\n  width: 100%;\n}\n\nbutton {\n  cursor: pointer;\n}\n\n.container {\n  max-width: 1280px;\n  width: 80%;\n  margin: 0 auto;\n}\n\n@keyframes slideInFromLeft {\n  0% {\n    transform: translateX(-100%);\n    opacity: 0.5;\n  }\n  100% {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n.header {\n  background-color: rgb(54, 54, 54);\n  position: relative;\n  z-index: 999;\n  box-shadow: 0 4px 2px -2px rgb(151, 151, 151);\n  color: white;\n}\n\n.nav__ul {\n  font-size: 1.4rem;\n  padding: 1rem 1rem 1rem 0;\n  display: flex;\n  justify-content: flex-end;\n  gap: 10%;\n  cursor: pointer;\n}\n\n.nav-item:hover {\n  color: rgb(255, 127, 22);\n}\n\n.nav-item {\n  padding: 0.7rem 1.5rem;\n  border-radius: 5px;\n}\n\n.nav-selected {\n  color: rgb(255, 115, 0);\n  font-weight: 600;\n}\n\n@media (max-width: 650px) {\n  .nav__ul {\n    justify-content: center;\n    padding: 1rem 0;\n    gap: 0;\n  }\n}\n.home {\n  background-color: white;\n  display: flex;\n  justify-content: space-between;\n  animation: 0.3s ease-out 0s 1 slideInFromLeft;\n}\n\n.home-left {\n  max-width: 55%;\n  padding-top: 6rem;\n  padding-bottom: 3rem;\n}\n\n.home-right {\n  max-width: 45%;\n}\n.home-right img {\n  width: 100%;\n  height: 100%;\n}\n\n.heading-s {\n  font-size: 1.4rem;\n  color: grey;\n  font-weight: 300;\n  letter-spacing: 0.2rem;\n}\n\n.heading-b {\n  font-family: \"Libre Baskerville\", serif;\n  padding: 1.8rem 0 3rem 0;\n  font-size: 2.6rem;\n  line-height: 3.5rem;\n  letter-spacing: 0.1rem;\n}\n\n.btn {\n  border: none;\n  padding: 1rem 2rem;\n  font-size: 1rem;\n  border-radius: 3px;\n  box-shadow: 0 0.2rem 0.6rem rgba(0, 0, 0, 0.5);\n}\n\n.btn-orange {\n  background: linear-gradient(to top right, rgba(253, 151, 56, 0.9), rgba(255, 115, 0, 0.9));\n  letter-spacing: 0.1rem;\n}\n\n.btn-orange:hover {\n  background: rgb(255, 166, 0);\n}\n\n.home__socials {\n  padding-top: 6rem;\n}\n\n.socials__heading {\n  font-size: 1rem;\n  padding-bottom: 1rem;\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n}\n\n.socials {\n  font-size: 1rem;\n}\n\n.social + .social {\n  padding-top: 0.5rem;\n}\n\n.line {\n  height: 1.5px;\n  width: 3.5rem;\n  background-color: rgb(48, 48, 48);\n}\n\n.menu {\n  padding: 2rem 0;\n  animation: 0.25s ease-out 0s 1 slideInFromLeft;\n}\n\n.menu__content {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(min(200px, 100%), 1fr));\n  grid-template-rows: 1fr 1fr;\n  gap: 3rem;\n}\n\n.course-name {\n  color: rgba(255, 115, 0, 0.9);\n  letter-spacing: 0.1rem;\n  font-size: 2.2rem;\n  padding-bottom: 0.57rem;\n  font-weight: 600;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.menu__hs {\n  color: rgba(255, 115, 0, 0.9);\n  font-size: 1.5rem;\n  padding-bottom: 0.6rem;\n  font-weight: 400;\n}\n\n.menu__hb {\n  letter-spacing: 0.2rem;\n  font-family: \"Libre Baskerville\", serif;\n  font-weight: 700;\n  padding-bottom: 2rem;\n}\n\n.menu-item {\n  display: flex;\n  justify-content: space-between;\n  gap: 0.4rem;\n  margin-bottom: 0.3rem;\n  font-size: 1.1rem;\n  white-space: nowrap;\n}\n\n.underline {\n  width: 100%;\n  height: 1px;\n  margin-top: 1rem;\n  background-color: rgba(61, 61, 60, 0.2);\n}\n\n.details {\n  font-size: 0.9rem;\n  font-weight: 300;\n  margin-bottom: 1.1rem;\n}\n\n@media (max-width: 650px) {\n  .menu__content {\n    display: block;\n  }\n  .course + .course {\n    margin-top: 2rem;\n  }\n}\n.contact img {\n  max-width: 3rem;\n}\n\n.contact-us {\n  text-align: center;\n  padding-top: 7rem;\n  animation: 0.35s ease-out 0s slideInFromLeft;\n}\n\n.contact-hb {\n  font-size: 3.2rem;\n  font-family: \"Libre Baskerville\", serif;\n  margin-bottom: 0.6rem;\n}\n\n.contact-hs {\n  font-size: 1.1rem;\n  font-weight: 400;\n}\n\n.contacts {\n  display: flex;\n  justify-content: center;\n  margin-top: 5rem;\n}\n\n.contact + .contact {\n  margin-left: 5rem;\n}\n\n.contact-upper {\n  text-transform: uppercase;\n  font-weight: 700;\n  color: rgb(78, 78, 78);\n  margin: 0.8rem 0 1.7rem 0;\n  font-size: 0.8rem;\n  font-family: \"Libre Baskerville\", serif;\n}\n\n.contact-details {\n  letter-spacing: 0.1rem;\n  font-weight: 600;\n}\n\n@media (max-width: 650px) {\n  .contacts {\n    flex-direction: column;\n    margin-bottom: 4rem;\n  }\n  .contact + .contact {\n    margin-left: 0;\n    margin-top: 3rem;\n  }\n}","@forward '/src/styles/fonts';\r\n\r\n.header {\r\n  background-color: rgb(54, 54, 54);\r\n  position: relative;\r\n  z-index: 999;\r\n  box-shadow: 0 4px 2px -2px rgb(151, 151, 151);\r\n  color: white;\r\n}\r\n\r\n.nav__ul {\r\n  font-size: 1.4rem;\r\n  padding: 1rem 1rem 1rem 0;\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  gap: 10%;\r\n  cursor: pointer;\r\n}\r\n\r\n.nav-item:hover {\r\n  color: rgb(255, 127, 22);\r\n}\r\n\r\n.nav-item {\r\n  padding: 0.7rem 1.5rem;\r\n  border-radius: 5px;\r\n}\r\n\r\n.nav-selected {\r\n  color: rgb(255, 115, 0);\r\n  font-weight: 600;\r\n}\r\n\r\n\r\n@media (max-width: 650px) {\r\n  .nav__ul {\r\n    justify-content: center;\r\n    padding: 1rem 0;\r\n    gap: 0\r\n  }\r\n}\r\n","@forward 'fonts';\r\n\r\n\r\n.home {\r\n  background-color: white;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  animation: 0.3s ease-out 0s 1 slideInFromLeft;\r\n}\r\n\r\n.home-left {\r\n  max-width: 55%;\r\n  padding-top: 6rem;\r\n  padding-bottom: 3rem;\r\n}\r\n\r\n.home-right {\r\n  max-width: 45%;\r\n  img {\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n}\r\n\r\n.heading-s {\r\n  font-size: 1.4rem;\r\n  color: grey;\r\n  font-weight: 300;\r\n  letter-spacing: 0.2rem;\r\n}\r\n\r\n.heading-b {\r\n  font-family: 'Libre Baskerville', serif;\r\n  padding: 1.8rem 0 3rem 0;\r\n  font-size: 2.6rem;\r\n  line-height: 3.5rem;\r\n  letter-spacing: 0.1rem;\r\n}\r\n\r\n.btn {\r\n  border: none;\r\n  padding: 1rem 2rem;\r\n  font-size: 1rem;\r\n  border-radius: 3px;\r\n  box-shadow: 0 0.2rem 0.6rem rgb(0 0 0 / 50%);\r\n}\r\n\r\n.btn-orange {\r\n  background: linear-gradient(to top right, rgba(253, 151, 56, 0.9), rgba(255, 115, 0, 0.9));\r\n  letter-spacing: 0.1rem;\r\n}\r\n\r\n.btn-orange:hover {\r\n  background: rgb(255, 166, 0);\r\n}\r\n\r\n// Contact item\r\n\r\n.home__socials {\r\n  padding-top: 6rem;\r\n}\r\n\r\n.socials__heading {\r\n  font-size: 1rem;\r\n  padding-bottom: 1rem;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 0.4rem\r\n}\r\n\r\n.socials {\r\n  font-size: 1rem;\r\n}\r\n\r\n.social + .social {\r\n  padding-top: 0.5rem;\r\n}\r\n\r\n.line {\r\n  height: 1.5px;\r\n  width: 3.5rem;\r\n  background-color: rgb(48, 48, 48);\r\n}\r\n","@forward 'fonts';\r\n\r\n.menu {\r\n  padding: 2rem 0;\r\n  animation: 0.25s ease-out 0s 1 slideInFromLeft;\r\n}\r\n\r\n.menu__content {\r\n  display: grid;\r\n  grid-template-columns: repeat(2, minmax(min(200px,100%), 1fr));\r\n  grid-template-rows: 1fr 1fr;\r\n  gap: 3rem;\r\n}\r\n\r\n.course-name {\r\n  color: rgba(255, 115, 0, 0.9);\r\n  letter-spacing: .1rem;\r\n  font-size: 2.2rem;\r\n  padding-bottom: .57rem;\r\n  font-weight: 600;\r\n}\r\n\r\n.text-center {\r\n  text-align: center;\r\n}\r\n\r\n.menu__hs {\r\n  color: rgba(255, 115, 0, 0.9);\r\n  font-size: 1.5rem;\r\n  padding-bottom: .6rem;\r\n  font-weight: 400;\r\n}\r\n\r\n.menu__hb {\r\n  letter-spacing: .2rem;\r\n  font-family: 'Libre Baskerville', serif;\r\n  font-weight: 700;\r\n  padding-bottom: 2rem;\r\n}\r\n\r\n.menu-item {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  gap: .4rem;\r\n  margin-bottom: 0.3rem;\r\n  font-size: 1.1rem;\r\n  white-space: nowrap;\r\n}\r\n\r\n.underline {\r\n  width: 100%;\r\n  height: 1px;\r\n  margin-top: 1rem;\r\n  background-color: rgba(61,61,60,0.2);\r\n}\r\n\r\n.details {\r\n  font-size: .9rem;\r\n  font-weight: 300;\r\n  margin-bottom: 1.1rem;\r\n}\r\n\r\n@media (max-width: 650px) {\r\n  .menu__content {\r\n    display: block;\r\n  }\r\n\r\n  .course + .course{\r\n    margin-top: 2rem;\r\n  }\r\n}","@forward 'fonts';\r\n\r\n.contact img {\r\n  max-width: 3rem;\r\n}\r\n\r\n.contact-us {\r\n  text-align: center;\r\n  padding-top: 7rem;\r\n  animation: 0.35s ease-out 0s slideInFromLeft;\r\n}\r\n\r\n.contact-hb {\r\nfont-size: 3.2rem;\r\nfont-family: 'Libre Baskerville', serif;\r\nmargin-bottom: .6rem;\r\n}\r\n\r\n.contact-hs {\r\n  font-size: 1.1rem;\r\n  font-weight: 400;\r\n}\r\n\r\n.contacts {\r\n  display: flex;\r\n  justify-content: center;\r\n  margin-top: 5rem;\r\n}\r\n\r\n.contact + .contact {\r\n  margin-left: 5rem;\r\n}\r\n\r\n.contact-upper {\r\n  text-transform: uppercase;\r\n  font-weight: 700;\r\n  color: rgb(78, 78, 78);\r\n  margin: .8rem 0 1.7rem 0;\r\n  font-size: .8rem;\r\n  font-family: 'Libre Baskerville', serif;\r\n}\r\n\r\n.contact-details {\r\n  letter-spacing: .1rem;\r\n  font-weight: 600;\r\n}\r\n\r\n@media (max-width: 650px) {\r\n  .contacts {\r\n    flex-direction: column;\r\n    margin-bottom: 4rem;\r\n  }\r\n\r\n  .contact + .contact {\r\n    margin-left: 0;\r\n    margin-top: 3rem;\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/email.png":
/*!******************************!*\
  !*** ./src/assets/email.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "email.png";

/***/ }),

/***/ "./src/assets/location.png":
/*!*********************************!*\
  !*** ./src/assets/location.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "location.png";

/***/ }),

/***/ "./src/assets/pasta.jpg":
/*!******************************!*\
  !*** ./src/assets/pasta.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "pasta.jpg";

/***/ }),

/***/ "./src/assets/phone.png":
/*!******************************!*\
  !*** ./src/assets/phone.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "phone.png";

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
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _data_data_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/data-menu.js */ "./src/data/data-menu.js");
/* harmony import */ var _assets_pasta_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/pasta.jpg */ "./src/assets/pasta.jpg");
/* harmony import */ var _assets_location_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/location.png */ "./src/assets/location.png");
/* harmony import */ var _assets_phone_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/phone.png */ "./src/assets/phone.png");
/* harmony import */ var _assets_email_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/email.png */ "./src/assets/email.png");


// Imports







// Load the home tab as a default
window.onload = function () {
  displayHome();
};

// Event listeners
var navHome = document.querySelector('.nav-home');
var navMenu = document.querySelector('.nav-menu');
var navContact = document.querySelector('.nav-contact');
navHome.addEventListener('click', function () {
  clearMain();
  displayHome();
  checkActiveNav();
  navHome.classList.add('nav-selected');
});
navMenu.addEventListener('click', function () {
  clearMain();
  displayMenu();
  fillInMenu('Mains', 'Pizza', 'Salads');
  checkActiveNav();
  navMenu.classList.add('nav-selected');
});
navContact.addEventListener('click', function () {
  clearMain();
  displayContacts('contact');
  checkActiveNav();
  navContact.classList.add('nav-selected');
});
function checkActiveNav() {
  var nav = document.querySelectorAll('.nav-item');
  nav.forEach(function (el) {
    if (el.classList.contains('nav-selected')) {
      el.classList.remove('nav-selected');
    }
  });
}

// DOM

// Create container
var main = document.querySelector('.main');
var container = document.createElement('div');
container.classList.add('container', 'container-main');
main.append(container);

// Functions to display different tabs

function displayHome() {
  var home = document.createElement('div');
  home.classList.add('home');
  container.append(home);
  var homeLeft = document.createElement('div');
  homeLeft.classList.add('home-left');
  home.append(homeLeft);
  var headingS = document.createElement('h4');
  headingS.classList.add('heading-s');
  headingS.textContent = 'Discover you taste';
  var headingB = document.createElement('h1');
  headingB.classList.add('heading-b');
  headingB.innerHTML = "Authentic & Modern <br> <span>Italian Cuisine</span>";
  var btnHome = document.createElement('button');
  btnHome.classList.add('btn', 'btn-orange');
  btnHome.textContent = 'Discover Menu';
  homeLeft.append(headingS, headingB, btnHome);
  var homeRight = document.createElement('div');
  homeRight.classList.add('home-right');
  homeRight.innerHTML = "<div class=\"home-right_img\">\n  <img src=\"./pasta.jpg\" alt=\"\" class=\"home_img\">\n  </div>";
  home.append(homeRight);
}
function displayMenu() {
  var menu = document.createElement('div');
  menu.classList.add('menu');
  container.append(menu);
  // menu.style.transform = 'translateY(0);'

  var menuHS = document.createElement('h3');
  menuHS.classList.add('menu__hs', 'text-center');
  menuHS.textContent = 'Discover';
  var menuHB = document.createElement('h1');
  menuHB.classList.add('menu__hb', 'text-center');
  menuHB.textContent = 'Our Food Menu';
  menu.append(menuHS, menuHB);
  var menuContent = document.createElement('div');
  menuContent.classList.add('menu__content');
  menu.append(menuContent);
}
function fillInMenu() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  args.forEach(function (arg) {
    var menuContent = document.querySelector('.menu__content');
    var course = document.createElement('div');
    course.classList.add('course');
    menuContent.append(course);
    var courseName = document.createElement('h2');
    courseName.classList.add('course-name');
    courseName.textContent = "".concat(arg);
    course.append(courseName);
    for (var i = 0; i < args.length; i++) {
      var itemWrapper = document.createElement('div');
      itemWrapper.classList.add('mi-wrapper');
      course.append(itemWrapper);
      var argCourse = arg.toLowerCase();
      var menuItem = document.createElement('div');
      menuItem.classList.add('menu-item');
      var itemName = document.createElement('span');
      itemName.classList.add('name');
      itemName.textContent = _data_data_menu_js__WEBPACK_IMPORTED_MODULE_1__.menu[argCourse][i].name;
      var underline = document.createElement('span');
      underline.classList.add('underline');
      var itemPrice = document.createElement('span');
      itemPrice.classList.add('price');
      itemPrice.textContent = _data_data_menu_js__WEBPACK_IMPORTED_MODULE_1__.menu[argCourse][i].price;
      menuItem.append(itemName, underline, itemPrice);
      var details = document.createElement('p');
      details.classList.add('details');
      details.textContent = _data_data_menu_js__WEBPACK_IMPORTED_MODULE_1__.menu[argCourse][i].details;
      itemWrapper.append(menuItem, details);
    }
  });
}
function displayContacts(className) {
  var contactUs = document.createElement('div');
  contactUs.classList.add('contact-us');
  container.append(contactUs);
  var contactHeadingB = document.createElement('h1');
  contactHeadingB.classList.add('contact-hb');
  contactHeadingB.textContent = 'Contact Us';
  var contactHeadingS = document.createElement('h6');
  contactHeadingS.classList.add('contact-hs');
  contactHeadingS.textContent = 'Delivery, catering, events. Just give us a call';
  var contacts = document.createElement('div');
  contacts.classList.add('contacts');
  contactUs.append(contactHeadingB, contactHeadingS, contacts);
  var address = document.createElement('div');
  address.classList.add(className);
  var addressImg = document.createElement('img');
  addressImg.src = './location.png';
  var addressHeading = document.createElement('p');
  addressHeading.classList.add('contact-upper');
  addressHeading.textContent = 'Address';
  var addressDetails = document.createElement('p');
  addressDetails.classList.add('contact-details');
  addressDetails.textContent = '47 Lowe Street';
  address.append(addressImg, addressHeading, addressDetails);
  var phone = document.createElement('div');
  phone.classList.add(className);
  var phoneImg = document.createElement('img');
  phoneImg.src = './phone.png';
  var phoneHeading = document.createElement('p');
  phoneHeading.classList.add('contact-upper');
  phoneHeading.textContent = 'Phone';
  var phoneDetails = document.createElement('p');
  phoneDetails.classList.add('contact-details');
  phoneDetails.textContent = '111 776 89 90';
  phone.append(phoneImg, phoneHeading, phoneDetails);
  var email = document.createElement('div');
  email.classList.add(className);
  var emailImg = document.createElement('img');
  emailImg.src = './email.png';
  var emailHeading = document.createElement('p');
  emailHeading.classList.add('contact-upper');
  emailHeading.textContent = 'Email';
  var emailDetails = document.createElement('p');
  emailDetails.classList.add('contact-details');
  emailDetails.textContent = 'italian@mocho.com';
  email.append(emailImg, emailHeading, emailDetails);
  contacts.append(address, phone, email);
}
function clearMain() {
  var container = document.querySelector('.container-main');
  container.innerHTML = '';
}
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map