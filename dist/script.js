/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_slider_slider_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/slider/slider-main */ "./src/js/modules/slider/slider-main.js");
/* harmony import */ var _modules_slider_slider_mini__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/slider/slider-mini */ "./src/js/modules/slider/slider-mini.js");
/* harmony import */ var _modules_playVideo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/playVideo */ "./src/js/modules/playVideo.js");
/* harmony import */ var _modules_difference__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/difference */ "./src/js/modules/difference.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/forms */ "./src/js/modules/forms.js");
/* harmony import */ var _modules_showInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/showInfo */ "./src/js/modules/showInfo.js");
/* harmony import */ var _modules_download__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/download */ "./src/js/modules/download.js");







window.addEventListener('DOMContentLoaded', () => {
  const slider = new _modules_slider_slider_main__WEBPACK_IMPORTED_MODULE_0__["default"]({
    container: '.page',
    btns: '.next'
  });
  slider.render();
  const modulesPageSlider = new _modules_slider_slider_main__WEBPACK_IMPORTED_MODULE_0__["default"]({
    container: '.moduleapp',
    btns: '.next'
  });
  modulesPageSlider.render();
  const showUpSlider = new _modules_slider_slider_mini__WEBPACK_IMPORTED_MODULE_1__["default"]({
    container: '.showup__content-slider',
    prev: '.showup__prev',
    next: '.showup__next',
    activeClass: 'card-active',
    animate: true
  });
  showUpSlider.init();
  const modulesSlider = new _modules_slider_slider_mini__WEBPACK_IMPORTED_MODULE_1__["default"]({
    container: '.modules__content-slider',
    next: '.modules__info-btns .slick-next',
    prev: '.modules__info-btns .slick-prev',
    activeClass: 'card-active',
    animate: true,
    autoPlay: true
  });
  modulesSlider.init();
  const feedSlider = new _modules_slider_slider_mini__WEBPACK_IMPORTED_MODULE_1__["default"]({
    container: '.feed__slider',
    next: '.feed__slider .slick-next',
    prev: '.feed__slider .slick-prev',
    activeClass: 'feed__item-active'
  });
  feedSlider.init();
  new _modules_playVideo__WEBPACK_IMPORTED_MODULE_2__["default"]('.showup .play', '.overlay').init();
  new _modules_playVideo__WEBPACK_IMPORTED_MODULE_2__["default"]('.module__video-item .play', '.overlay').init();
  new _modules_difference__WEBPACK_IMPORTED_MODULE_3__["default"]('.officerold', '.officernew', '.officer__card-item').init();
  new _modules_forms__WEBPACK_IMPORTED_MODULE_4__["default"]('form').init();
  new _modules_showInfo__WEBPACK_IMPORTED_MODULE_5__["default"]('.plus__content').init();
  new _modules_download__WEBPACK_IMPORTED_MODULE_6__["default"]('.download').init();
});

/***/ }),

/***/ "./src/js/modules/difference.js":
/*!**************************************!*\
  !*** ./src/js/modules/difference.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Difference; });
class Difference {
  constructor(oldOfficer, newOfficer, items) {
    try {
      this.oldOfficer = document.querySelector(oldOfficer);
      this.newOfficer = document.querySelector(newOfficer);
      this.oldItems = this.oldOfficer.querySelectorAll(items);
      this.newItems = this.newOfficer.querySelectorAll(items);
      this.items = items;
      this.oldCounter = 0;
      this.newCounter = 0;
    } catch (e) {}
  }
  bindTriggers(container, items, counter) {
    container.querySelector('.plus').addEventListener('click', () => {
      if (counter !== items.length - 2) {
        items[counter].style.display = 'flex';
        counter++;
      } else {
        items[counter].style.display = 'flex';
        items[items.length - 1].remove();
      }
    });
  }
  hideItems(arr) {
    arr.forEach(items => {
      items.forEach((item, i, arr) => {
        if (i !== arr.length - 1) {
          item.style.display = 'none';
        }
      });
    });
  }
  init() {
    try {
      this.hideItems([this.oldItems, this.newItems]);
      this.bindTriggers(this.oldOfficer, this.oldItems, this.oldCounter);
      this.bindTriggers(this.newOfficer, this.newItems, this.newCounter);
    } catch (e) {}
  }
}

/***/ }),

/***/ "./src/js/modules/download.js":
/*!************************************!*\
  !*** ./src/js/modules/download.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Download; });
class Download {
  constructor(triggers) {
    this.btns = document.querySelectorAll(triggers);
    this.path = 'assets/img/mainbg.jpg';
  }
  downloadItem(path) {
    const element = document.createElement('a');
    element.setAttribute('href', path);
    element.setAttribute('download', 'nice_picture');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }
  init() {
    this.btns.forEach(btn => {
      btn.addEventListener('click', e => {
        this.downloadItem(this.path, e);
      });
    });
  }
}

/***/ }),

/***/ "./src/js/modules/forms.js":
/*!*********************************!*\
  !*** ./src/js/modules/forms.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Form; });
class Form {
  constructor(forms) {
    this.forms = document.querySelectorAll(forms);
    this.inputs = document.querySelectorAll('input');
    this.message = {
      loading: 'Загрузка...',
      success: 'Спасибо!',
      failure: 'Что-то пошло не так...'
    };
    this.path = 'assets/question.php';
  }
  async postData(url, data) {
    let res = await fetch(url, {
      method: "POST",
      body: data
    });
    return await res.text();
  }
  clearInputs() {
    this.inputs.forEach(item => {
      item.value = '';
    });
  }
  checkMailInputs() {
    document.querySelectorAll('[type="email"]').forEach(input => {
      input.addEventListener('keypress', function (e) {
        if (e.key.match(/[^a-z 0-9 @ \.]/ig)) {
          e.preventDefault();
        }
      });
    });
  }
  initMask() {
    let setCursorPosition = (pos, elem) => {
      elem.focus();
      if (elem.setSelectionRange) {
        elem.setSelectionRange(pos, pos);
      } else if (elem.createTextRange) {
        let range = elem.createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
      }
    };
    function createMask(event) {
      let matrix = '+1 (___) ___-____',
        i = 0,
        def = matrix.replace(/\D/g, ''),
        val = this.value.replace(/\D/g, '');
      if (def.length >= val.length) {
        val = def;
      }
      this.value = matrix.replace(/./g, function (a) {
        return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
      });
      if (event.type === 'blur') {
        if (this.value.length == 2) {
          this.value = '';
        }
      } else {
        setCursorPosition(this.value.length, this);
      }
    }
    let inputs = document.querySelectorAll('[name="phone"]');
    inputs.forEach(input => {
      input.addEventListener('input', createMask);
      input.addEventListener('focus', createMask);
      input.addEventListener('blur', createMask);
    });
  }
  init() {
    this.checkMailInputs();
    this.initMask();
    this.forms.forEach(item => {
      item.addEventListener('submit', e => {
        e.preventDefault();
        let statusMessage = document.createElement('div');
        statusMessage.style.cssText = `
                    margin-top: 15px;
                    font-size: 18px;
                    color: gray;
                `;
        item.parentNode.appendChild(statusMessage);
        statusMessage.textContent = this.message.loading;
        const formData = new FormData(item);
        this.postData(this.path, formData).then(res => {
          console.log(res);
          statusMessage.textContent = this.message.success;
        }).catch(() => {
          statusMessage.textContent = this.message.failure;
        }).finally(() => {
          this.clearInputs();
          setTimeout(() => {
            statusMessage.remove();
          }, 5000);
        });
      });
    });
  }
}

/***/ }),

/***/ "./src/js/modules/playVideo.js":
/*!*************************************!*\
  !*** ./src/js/modules/playVideo.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VideoPlayer; });
class VideoPlayer {
  constructor(triggers, overlay) {
    this.btns = document.querySelectorAll(triggers);
    this.overlay = document.querySelector(overlay);
    this.close = this.overlay.querySelector('.close');
    this.onPlayerStateChange = this.onPlayerStateChange.bind(this);
  }
  bindTriggers() {
    this.btns.forEach((btn, i) => {
      try {
        const blockedElem = btn.closest('.module__video-item').nextElementSibling;
        if (i % 2 == 0) {
          blockedElem.setAttribute('data-disabled', 'true');
        }
      } catch (e) {}
      btn.addEventListener('click', () => {
        if (!btn.closest('.module__video-item') || btn.closest('.module__video-item').getAttribute('data-disabled') !== 'true') {
          this.activeBtn = btn;
          if (document.querySelector('iframe#frame')) {
            this.overlay.style.display = 'flex';
            if (this.path !== btn.getAttribute('data-url')) {
              this.path = btn.getAttribute('data-url');
              this.player.loadVideoById({
                videoId: this.path
              });
            }
          } else {
            this.path = btn.getAttribute('data-url');
            this.createPlayer(this.path);
          }
        }
      });
    });
  }
  bindCloseBtn() {
    this.close.addEventListener('click', () => {
      this.overlay.style.display = 'none';
      this.player.stopVideo();
    });
  }
  createPlayer(url) {
    this.player = new YT.Player('frame', {
      height: '100%',
      width: '100%',
      videoId: `${url}`,
      events: {
        'onStateChange': this.onPlayerStateChange
      }
    });
    this.overlay.style.display = 'flex';
  }
  onPlayerStateChange(state) {
    try {
      const blockedElem = this.activeBtn.closest('.module__video-item').nextElementSibling;
      const playBtn = this.activeBtn.querySelector('svg').cloneNode(true);
      if (state.data === 0) {
        if (blockedElem.querySelector('.play__circle').classList.contains('closed')) {
          blockedElem.querySelector('.play__circle').classList.remove('closed');
          blockedElem.querySelector('svg').remove();
          blockedElem.querySelector('.play__circle').appendChild(playBtn);
          blockedElem.querySelector('.play__text').textContent = 'play video';
          blockedElem.querySelector('.play__text').classList.remove('attention');
          blockedElem.style.opacity = 1;
          blockedElem.style.filter = 'none';
          blockedElem.setAttribute('data-disabled', 'false');
        }
      }
    } catch (e) {}
  }
  init() {
    if (this.btns.length > 0) {
      const tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      this.bindTriggers();
      this.bindCloseBtn();
    }
  }
}

/***/ }),

/***/ "./src/js/modules/showInfo.js":
/*!************************************!*\
  !*** ./src/js/modules/showInfo.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ShowInfo; });
class ShowInfo {
  constructor(triggers) {
    this.btns = document.querySelectorAll(triggers);
  }
  init() {
    this.btns.forEach(btn => {
      btn.addEventListener('click', () => {
        const sibling = btn.closest('.module__info-show').nextElementSibling;
        sibling.classList.toggle('msg');
        sibling.style.marginTop = '20px';
      });
    });
  }
}

/***/ }),

/***/ "./src/js/modules/slider/slider-main.js":
/*!**********************************************!*\
  !*** ./src/js/modules/slider/slider-main.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainSlider; });
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ "./src/js/modules/slider/slider.js");

class MainSlider extends _slider__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(btns) {
    super(btns);
  }
  showSlides(n) {
    if (n > this.slides.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = this.slides.length;
    }
    try {
      this.hanson.style.opacity = '0';
      if (n === 3) {
        this.hanson.classList.add('animated');
        setTimeout(() => {
          this.hanson.style.opacity = '1';
          this.hanson.classList.add('slideInUp');
        }, 3000);
      } else {
        this.hanson.classList.remove('slideInUp');
      }
    } catch (e) {}
    this.slides.forEach(slide => {
      slide.style.display = 'none';
    });
    this.slides[this.slideIndex - 1].style.display = 'block';
  }
  plusSlides(n) {
    this.showSlides(this.slideIndex += n);
  }
  bindTriggers() {
    this.btns.forEach(btn => {
      btn.addEventListener('click', () => {
        this.plusSlides(1);
      });
      btn.parentNode.previousElementSibling.addEventListener('click', e => {
        e.preventDefault();
        this.slideIndex = 1;
        this.showSlides(this.slideIndex);
      });
    });
    document.querySelectorAll('.prevmodule').forEach(item => {
      item.addEventListener('click', e => {
        e.stopPropagation();
        e.preventDefault();
        this.plusSlides(-1);
      });
    });
    document.querySelectorAll('.nextmodule').forEach(item => {
      item.addEventListener('click', e => {
        e.stopPropagation();
        e.preventDefault();
        this.plusSlides(1);
      });
    });
  }
  render() {
    if (this.container) {
      try {
        this.hanson = document.querySelector('.hanson');
      } catch (e) {}
      this.showSlides(this.slideIndex);
      this.bindTriggers();
    }
  }
}

/***/ }),

/***/ "./src/js/modules/slider/slider-mini.js":
/*!**********************************************!*\
  !*** ./src/js/modules/slider/slider-mini.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MiniSlider; });
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ "./src/js/modules/slider/slider.js");

class MiniSlider extends _slider__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(container, next, prev, activeClass, animate, autoPlay) {
    super(container, next, prev, activeClass, animate, autoPlay);
  }
  nextSlide() {
    if (this.slides[1].tagName == "BUTTON" && this.slides[2].tagName == "BUTTON") {
      this.container.appendChild(this.slides[0]);
      this.container.appendChild(this.slides[1]);
      this.container.appendChild(this.slides[2]);
      this.decorizeSlides();
    } else if (this.slides[1].tagName == "BUTTON") {
      this.container.appendChild(this.slides[0]);
      this.container.appendChild(this.slides[1]);
      this.decorizeSlides();
    } else {
      this.container.appendChild(this.slides[0]);
      this.decorizeSlides();
    }
  }
  bindTriggers() {
    this.next.addEventListener('click', () => this.nextSlide());
    this.prev.addEventListener('click', () => {
      for (let i = this.slides.length - 1; i > 0; i--) {
        if (this.slides[i].tagName !== "BUTTON") {
          let active = this.slides[i];
          this.container.insertBefore(active, this.slides[0]);
          this.decorizeSlides();
          break;
        }
      }
    });
  }
  decorizeSlides() {
    this.slides.forEach(slide => {
      slide.classList.remove(this.activeClass);
      if (this.animate) {
        slide.querySelector('.card__title').style.opacity = '0.4';
        slide.querySelector('.card__controls-arrow').style.opacity = '0';
      }
    });
    if (!this.slides[0].closest("button")) {
      this.slides[0].classList.add(this.activeClass);
    }
    if (this.animate) {
      this.slides[0].querySelector('.card__title').style.opacity = '1';
      this.slides[0].querySelector('.card__controls-arrow').style.opacity = '1';
    }
  }
  init() {
    try {
      this.container.style.cssText = `
            display: flex;
            flex-wrap: wrap;
            overflow: hidden;
            align-items: flex-start;
            `;
      this.bindTriggers();
      this.decorizeSlides();
      if (this.autoPlay) {
        setInterval(() => this.nextSlide(), 5000);
      }
    } catch (e) {}
  }
}

/***/ }),

/***/ "./src/js/modules/slider/slider.js":
/*!*****************************************!*\
  !*** ./src/js/modules/slider/slider.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Slider; });
class Slider {
  constructor({
    container = null,
    btns = null,
    next = null,
    prev = null,
    activeClass = '',
    animate,
    autoPlay
  } = {}) {
    this.container = document.querySelector(container);
    try {
      this.slides = this.container.children;
    } catch (e) {}
    this.btns = document.querySelectorAll(btns);
    this.prev = document.querySelector(prev);
    this.next = document.querySelector(next);
    this.activeClass = activeClass;
    this.animate = animate;
    this.autoPlay = autoPlay;
    this.slideIndex = 1;
  }
}

/***/ })

/******/ });
//# sourceMappingURL=script.js.map