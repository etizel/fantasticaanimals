/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/accordion.js":
/*!*********************************!*\
  !*** ./js/modules/accordion.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Accordion)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\nvar Accordion = /*#__PURE__*/function () {\n  function Accordion(accordionList, activeClass) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Accordion);\n    this.accordionList = document.querySelectorAll(accordionList);\n    this.activeClass = activeClass;\n  }\n\n  // add class active in accordion\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Accordion, [{\n    key: \"toggleAccordion\",\n    value: function toggleAccordion(item) {\n      item.classList.toggle(this.activeClass);\n      item.nextElementSibling.classList.toggle(this.activeClass);\n    }\n\n    // add event in accordion\n  }, {\n    key: \"activeAccordionEvent\",\n    value: function activeAccordionEvent() {\n      var _this = this;\n      this.accordionList.forEach(function (item) {\n        item.addEventListener('click', function () {\n          return _this.toggleAccordion(item);\n        });\n      });\n    }\n\n    // start function\n  }, {\n    key: \"init\",\n    value: function init() {\n      // active first itemn\n      if (this.accordionList.length) {\n        this.toggleAccordion(this.accordionList[0]);\n        this.activeAccordionEvent();\n      }\n      return this;\n    }\n  }]);\n  return Accordion;\n}();\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/accordion.js?");

/***/ }),

/***/ "./js/modules/dropdown-menu.js":
/*!*************************************!*\
  !*** ./js/modules/dropdown-menu.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initDropdownMenu)\n/* harmony export */ });\n/* harmony import */ var _outsideclick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideclick.js */ \"./js/modules/outsideclick.js\");\n\nfunction initDropdownMenu() {\n  var dropdownMenus = document.querySelectorAll('[data-dropdown]');\n  function handleClick(event) {\n    var _this = this;\n    event.preventDefault();\n    this.classList.add('active');\n    (0,_outsideclick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ['touchstart', 'click'], function () {\n      _this.classList.remove('active');\n    });\n  }\n  dropdownMenus.forEach(function (menu) {\n    ['touchstart', 'click'].forEach(function (userEvent) {\n      menu.addEventListener(userEvent, handleClick);\n    });\n  });\n}\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/dropdown-menu.js?");

/***/ }),

/***/ "./js/modules/fetch-bitcoin.js":
/*!*************************************!*\
  !*** ./js/modules/fetch-bitcoin.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchBitcoin)\n/* harmony export */ });\nfunction initFetchBitcoin() {\n  fetch('https://blockchain.info/ticker').then(function (response) {\n    return response.json();\n  }).then(function (bitcoin) {\n    var btcPreco = document.querySelector('.btc-preco');\n    btcPreco.innerText = (1000 / bitcoin.BRL.sell).toFixed(4);\n  })[\"catch\"](function (erro) {\n    return console.log(Error(erro));\n  });\n}\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/fetch-bitcoin.js?");

/***/ }),

/***/ "./js/modules/funcionamento.js":
/*!*************************************!*\
  !*** ./js/modules/funcionamento.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFuncionamento)\n/* harmony export */ });\nfunction initFuncionamento() {\n  var funcionamento = document.querySelector('[data-semana]');\n  var diasSemana = funcionamento.dataset.semana.split(',').map(Number);\n  var horarioSemana = funcionamento.dataset.horario.split(',').map(Number);\n  var dataAgora = new Date();\n  var diaAgora = dataAgora.getDay();\n  var horarioAgora = dataAgora.getHours();\n  var semanaAberto = diasSemana.indexOf(diaAgora) !== -1;\n  var horarioAberto = horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1];\n  if (semanaAberto && horarioAberto) {\n    funcionamento.classList.add('aberto');\n  }\n}\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/funcionamento.js?");

/***/ }),

/***/ "./js/modules/menu-mobile.js":
/*!***********************************!*\
  !*** ./js/modules/menu-mobile.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initMenuMobile)\n/* harmony export */ });\n/* harmony import */ var _outsideclick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideclick.js */ \"./js/modules/outsideclick.js\");\n\nfunction initMenuMobile() {\n  var menuButton = document.querySelector('[data-menu=\"button\"]');\n  var menuList = document.querySelector('[data-menu=\"list\"]');\n  var eventos = ['click', 'touchstart'];\n  function openMenu() {\n    menuList.classList.add('active');\n    menuButton.classList.add('active');\n    (0,_outsideclick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(menuList, eventos, function () {\n      menuList.classList.remove('active');\n      menuButton.classList.remove('active');\n    });\n  }\n  if (menuButton) {\n    eventos.forEach(function (evento) {\n      return menuButton.addEventListener(evento, openMenu);\n    });\n  }\n}\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/menu-mobile.js?");

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Modal)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\nvar Modal = /*#__PURE__*/function () {\n  function Modal(botaoAbrir, botaoFechar, containerModal) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Modal);\n    this.botaoAbrir = document.querySelector(botaoAbrir);\n    this.botaoFechar = document.querySelector(botaoFechar);\n    this.containerModal = document.querySelector(containerModal);\n\n    // bind this referente ao objeto da classe\n    this.eventModal = this.eventModal.bind(this);\n    this.cliqueForaModal = this.cliqueForaModal.bind(this);\n  }\n\n  // abre ou fecha o modal\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Modal, [{\n    key: \"toggleModal\",\n    value: function toggleModal() {\n      this.containerModal.classList.toggle('ativo');\n    }\n\n    // adiciona o evento de toggle ao modal\n  }, {\n    key: \"eventModal\",\n    value: function eventModal(event) {\n      event.preventDefault();\n      this.toggleModal();\n    }\n\n    // fecha o modal ao clicar do lado de fora\n  }, {\n    key: \"cliqueForaModal\",\n    value: function cliqueForaModal(event) {\n      if (event.target === this.containerModal) {\n        this.toggleModal(event);\n      }\n    }\n\n    // adiciona os eventos ao modal\n  }, {\n    key: \"addEventModal\",\n    value: function addEventModal() {\n      this.botaoAbrir.addEventListener('click', this.eventModal);\n      this.botaoFechar.addEventListener('click', this.eventModal);\n      this.containerModal.addEventListener('click', this.cliqueForaModal);\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (this.botaoAbrir && this.botaoFechar && this.containerModal) {\n        this.addEventModal();\n      }\n      return this;\n    }\n  }]);\n  return Modal;\n}();\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/modal.js?");

/***/ }),

/***/ "./js/modules/outsideclick.js":
/*!************************************!*\
  !*** ./js/modules/outsideclick.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ outsideClick)\n/* harmony export */ });\nfunction outsideClick(element, events, callback) {\n  var html = document.documentElement;\n  var outside = 'data-outside';\n  function handleOutsideClick(event) {\n    if (!element.contains(event.target)) {\n      element.removeAttribute(outside);\n      events.forEach(function (userEvent) {\n        html.removeEventListener(userEvent, handleOutsideClick);\n      });\n      callback();\n    }\n  }\n  if (!element.hasAttribute(outside)) {\n    events.forEach(function (userEvent) {\n      setTimeout(function () {\n        return html.addEventListener(userEvent, handleOutsideClick);\n      });\n    });\n    element.setAttribute(outside, '');\n  }\n}\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/outsideclick.js?");

/***/ }),

/***/ "./js/modules/scroll-animacao.js":
/*!***************************************!*\
  !*** ./js/modules/scroll-animacao.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimacaoScroll)\n/* harmony export */ });\nfunction initAnimacaoScroll() {\n  var sections = document.querySelectorAll('[data-anime=\"scroll\"]');\n  var windowMetade = window.innerHeight * 0.6;\n  function animaScroll() {\n    sections.forEach(function (section) {\n      var sectionTop = section.getBoundingClientRect().top;\n      var isSectionVisible = sectionTop - windowMetade < 0;\n      if (isSectionVisible) {\n        section.classList.add('ativo');\n      } else if (section.classList.contains('ativo')) {\n        section.classList.remove('ativo');\n      }\n    });\n  }\n  if (sections.length) {\n    animaScroll();\n    window.addEventListener('scroll', animaScroll);\n  }\n}\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/scroll-animacao.js?");

/***/ }),

/***/ "./js/modules/scroll-suave.js":
/*!************************************!*\
  !*** ./js/modules/scroll-suave.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ScrollSuave)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\nvar ScrollSuave = /*#__PURE__*/function () {\n  function ScrollSuave(links, options) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ScrollSuave);\n    this.linksInternos = document.querySelectorAll(links);\n    if (options === undefined) {\n      this.options = {\n        behavior: 'smooth',\n        block: 'start'\n      };\n    } else {\n      this.options = options;\n    }\n    this.scrollToSection = this.scrollToSection.bind(this);\n  }\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(ScrollSuave, [{\n    key: \"scrollToSection\",\n    value: function scrollToSection(event) {\n      event.preventDefault();\n      var href = event.currentTarget.getAttribute('href');\n      var section = document.querySelector(href);\n      section.scrollIntoView(this.options);\n    }\n  }, {\n    key: \"addEventLink\",\n    value: function addEventLink() {\n      var _this = this;\n      this.linksInternos.forEach(function (link) {\n        link.addEventListener('click', _this.scrollToSection);\n      });\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (this.linksInternos.length) {\n        this.addEventLink();\n      }\n      return this;\n    }\n  }]);\n  return ScrollSuave;\n}();\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/scroll-suave.js?");

/***/ }),

/***/ "./js/modules/tabnav.js":
/*!******************************!*\
  !*** ./js/modules/tabnav.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TabNav)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\nvar TabNav = /*#__PURE__*/function () {\n  function TabNav(tabMenu, tabContent) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, TabNav);\n    this.tabMenu = document.querySelectorAll(tabMenu);\n    this.tabContent = document.querySelectorAll(tabContent);\n    this.activeClass = 'ativo';\n  }\n\n  // active tab in the index\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(TabNav, [{\n    key: \"activeTab\",\n    value: function activeTab(index) {\n      var _this = this;\n      this.tabContent.forEach(function (section) {\n        section.classList.remove(_this.activeClass);\n      });\n      var direcao = this.tabContent[index].dataset.anime;\n      this.tabContent[index].classList.add(this.activeClass, direcao);\n    }\n\n    // Add events in tabs\n  }, {\n    key: \"addTabEvent\",\n    value: function addTabEvent() {\n      var _this2 = this;\n      this.tabMenu.forEach(function (itemMenu, index) {\n        itemMenu.addEventListener('click', function () {\n          _this2.activeTab(index);\n        });\n      });\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (this.tabMenu.length && this.tabContent.length) {\n        // active first itemn\n        this.activeTab(0);\n        this.addTabEvent();\n      }\n      return this;\n    }\n  }]);\n  return TabNav;\n}();\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/tabnav.js?");

/***/ }),

/***/ "./js/modules/tooltip.js":
/*!*******************************!*\
  !*** ./js/modules/tooltip.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Tooltip)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\nvar Tooltip = /*#__PURE__*/function () {\n  function Tooltip(tooltips) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Tooltip);\n    this.tooltips = document.querySelectorAll(tooltips);\n    // bind do objeto da classe aos objetos\n    this.onMouseLeave = this.onMouseLeave.bind(this);\n    this.onMouseMove = this.onMouseMove.bind(this);\n    this.onMouseOver = this.onMouseOver.bind(this);\n  }\n\n  // move a tooltip de acordo com a posição do mouse\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Tooltip, [{\n    key: \"onMouseMove\",\n    value: function onMouseMove(event) {\n      this.tooltipBox.style.top = \"\".concat(event.pageY + 20, \"px\");\n      if (event.pageX + 240 > window.innerWidth) {\n        this.tooltipBox.style.left = \"\".concat(event.pageX - 190, \"px\");\n      } else {\n        this.tooltipBox.style.left = \"\".concat(event.pageX + 20, \"px\");\n      }\n    }\n\n    // Remove a tooltip e os eventos de mousemove e mouseleave\n  }, {\n    key: \"onMouseLeave\",\n    value: function onMouseLeave(_ref) {\n      var currentTarget = _ref.currentTarget;\n      this.tooltipBox.remove();\n      currentTarget.element.removeEventListener('mouseleave', this.onMouseLeave);\n      currentTarget.element.removeEventListener('mousemove', this.onMouseMove);\n    }\n  }, {\n    key: \"criarTooltipBox\",\n    value: function criarTooltipBox(element) {\n      var tooltipBox = document.createElement('div');\n      var text = element.getAttribute('aria-label');\n      tooltipBox.classList.add('tooltip');\n      tooltipBox.innerText = text;\n      document.body.appendChild(tooltipBox);\n      this.tooltipBox = tooltipBox;\n    }\n    // cria a tooltip e adiciona os eventos de mousemove e mouseleave ao target\n  }, {\n    key: \"onMouseOver\",\n    value: function onMouseOver(_ref2) {\n      var currentTarget = _ref2.currentTarget;\n      // cria a tooltipBox e coloca em uma propriedade\n      this.criarTooltipBox(currentTarget);\n      currentTarget.addEventListener('mousemove', this.onMouseMove);\n      currentTarget.addEventListener('mouseleave', this.onMouseLeave);\n    }\n\n    // adiciona os events de mouseover a cada tooltip\n  }, {\n    key: \"addTooltipsEvent\",\n    value: function addTooltipsEvent() {\n      var _this = this;\n      this.tooltips.forEach(function (item) {\n        item.addEventListener('mouseover', _this.onMouseOver);\n      });\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (this.tooltips.length) {\n        this.addTooltipsEvent();\n      }\n      return this;\n    }\n  }]);\n  return Tooltip;\n}();\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/tooltip.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/scroll-suave.js */ \"./js/modules/scroll-suave.js\");\n/* harmony import */ var _modules_scroll_animacao_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/scroll-animacao.js */ \"./js/modules/scroll-animacao.js\");\n/* harmony import */ var _modules_accordion_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/accordion.js */ \"./js/modules/accordion.js\");\n/* harmony import */ var _modules_tabnav_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/tabnav.js */ \"./js/modules/tabnav.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/modal.js */ \"./js/modules/modal.js\");\n/* harmony import */ var _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tooltip.js */ \"./js/modules/tooltip.js\");\n/* harmony import */ var _modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/dropdown-menu.js */ \"./js/modules/dropdown-menu.js\");\n/* harmony import */ var _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/menu-mobile.js */ \"./js/modules/menu-mobile.js\");\n/* harmony import */ var _modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/funcionamento.js */ \"./js/modules/funcionamento.js\");\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './modules/fetch-animais.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/fetch-bitcoin.js */ \"./js/modules/fetch-bitcoin.js\");\n\n\n\n// eslint-disable-next-line import/no-named-as-default, import/no-named-as-default-member\n\n// eslint-disable-next-line import/no-named-as-default\n\n// eslint-disable-next-line import/no-named-as-default\n\n\n\n\n\n\nvar scrollSuave = new _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('[data-menu=\"suave\"] a[href^=\"#\"]');\nscrollSuave.init();\nvar accordion = new _modules_accordion_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('[data-anime=\"accordion\"] dt', 'ativo');\naccordion.init();\nvar tabNav = new _modules_tabnav_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('[data-tab=\"menu\"] li', '[data-tab=\"content\"] section');\ntabNav.init();\nvar modal = new _modules_modal_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]('[data-modal=\"abrir\"]', '[data-modal=\"fechar\"]', '[data-modal=\"container\"]');\nmodal.init();\nvar tooltip = new _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]('[data-tooltip]');\ntooltip.init();\n(0,_modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n(0,_modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n(0,_modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './modules/fetch-animais.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();\n(0,_modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"])();\n(0,_modules_scroll_animacao_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n//# sourceURL=webpack://animais-fantasticos/./js/script.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _classCallCheck)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\n//# sourceURL=webpack://animais-fantasticos/./node_modules/@babel/runtime/helpers/esm/classCallCheck.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _createClass)\n/* harmony export */ });\n/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ \"./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js\");\n\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(descriptor.key), descriptor);\n  }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  Object.defineProperty(Constructor, \"prototype\", {\n    writable: false\n  });\n  return Constructor;\n}\n\n//# sourceURL=webpack://animais-fantasticos/./node_modules/@babel/runtime/helpers/esm/createClass.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPrimitive.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _toPrimitive)\n/* harmony export */ });\n/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ \"./node_modules/@babel/runtime/helpers/esm/typeof.js\");\n\nfunction _toPrimitive(input, hint) {\n  if ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(input) !== \"object\" || input === null) return input;\n  var prim = input[Symbol.toPrimitive];\n  if (prim !== undefined) {\n    var res = prim.call(input, hint || \"default\");\n    if ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(res) !== \"object\") return res;\n    throw new TypeError(\"@@toPrimitive must return a primitive value.\");\n  }\n  return (hint === \"string\" ? String : Number)(input);\n}\n\n//# sourceURL=webpack://animais-fantasticos/./node_modules/@babel/runtime/helpers/esm/toPrimitive.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _toPropertyKey)\n/* harmony export */ });\n/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ \"./node_modules/@babel/runtime/helpers/esm/typeof.js\");\n/* harmony import */ var _toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toPrimitive.js */ \"./node_modules/@babel/runtime/helpers/esm/toPrimitive.js\");\n\n\nfunction _toPropertyKey(arg) {\n  var key = (0,_toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(arg, \"string\");\n  return (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(key) === \"symbol\" ? key : String(key);\n}\n\n//# sourceURL=webpack://animais-fantasticos/./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _typeof)\n/* harmony export */ });\nfunction _typeof(obj) {\n  \"@babel/helpers - typeof\";\n\n  return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) {\n    return typeof obj;\n  } : function (obj) {\n    return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n  }, _typeof(obj);\n}\n\n//# sourceURL=webpack://animais-fantasticos/./node_modules/@babel/runtime/helpers/esm/typeof.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;