(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Input component default implementation
 * @author Islam Attrash
 */
var InputComponent = /** @class */ (function () {
    function InputComponent() {
    }
    InputComponent.prototype.render = function () {
        return "<input class=\"infinite-autocomplete-default-input\" type=\"text\" />";
    };
    return InputComponent;
}());
exports.InputComponent = InputComponent;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Options component default implementation
 * @author Islam Attrash
 */
var OptionsComponent = /** @class */ (function () {
    function OptionsComponent() {
        this.listElementSelector = "ul";
    }
    OptionsComponent.prototype.render = function () {
        return "<" + this.listElementSelector + " class=\"infinite-autocomplete-default-options\"></" + this.listElementSelector + ">";
    };
    OptionsComponent.prototype.renderOption = function (option) {
        return "<li>\n                " + option.text + "\n            </li>";
    };
    return OptionsComponent;
}());
exports.OptionsComponent = OptionsComponent;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/** Hovered state when navigation through upArrow/downArrow while options is open */
exports.HOVERED = "hovered";
/**
 * Key down states (keyCodes)
 */
exports.KEY_PRESS_STATES = {
    UP: 38,
    DOWN: 40,
    ENTER: 13,
};
exports.MissingInputElementInInputComponentExceptionMsg = new Error("Customized input should contain input element <input />");
exports.optionsWrapperExceptionMsg = new Error("Couldn't get the options base element.");
exports.inputElementExceptionMsg = new Error("Couldn't get the input element.");
exports.dataSourceMissingExceptionMsg = new Error("You must pass data or getDataFromApi function via config");
exports.fetchSizeExceptionMsg = new Error("fetchSize must be overriden with correct numeric value");


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var InputComponent_1 = __webpack_require__(0);
var OptionsComponent_1 = __webpack_require__(1);
var index_1 = __webpack_require__(2);
/**
 * Default Input in infinite-autocomplete component
 */
exports.InputComponent = InputComponent_1.InputComponent;
/**
 * Default Input in infinite-autocomplete component
 */
exports.OptionsComponent = OptionsComponent_1.OptionsComponent;
/**
 * infinite-autocomplete component implementation
 * @author Islam Attrash
 */
var InfiniteAutocomplete = /** @class */ (function () {
    /**
     * constructor for InfiniteAutocomplete class
     * Enabling pluggable system linked with Interfaces only
     * @param element - HTMLElement to append the infinite-autocomplete in it
     * @param config - InfiniteAutocomplete config options
     * @param optionComponent - Option component implementation to be injected (or default)
     * @param inputComponent - Input component implementation to be injected (or default)
     * @param optionsComponent - Options component implementation to be injected (or default)
     */
    function InfiniteAutocomplete(element, config) {
        var _this = this;
        this.page = 1;
        this.searchedText = "";
        this.isDestroyed = false;
        this.preventMoreRequests = false;
        this.localFetchingData = false;
        /**
         * Default configuration object
         */
        this.defaultConfig = {
            fetchSize: 10,
            maxHeight: "160px",
        };
        /**
         * Set the config object with extending
         * @param config - infinite-autocomplete configuration object
         */
        this.setConfig = function (config) {
            _this.destroy();
            _this.config = __assign({}, _this.config, config);
            _this.inputComponent = _this.getCustomizedInput();
            _this.optionsComponent = _this.getCustomizedOptions();
            _this.init();
        };
        /**
         * Destroy the infinite-autocomplete and unbind all events
         */
        this.destroy = function () {
            if (_this.isDestroyed) {
                return;
            }
            if (!_this.isOptionsHidden()) {
                _this.clearOptions();
            }
            var optionsList = _this.getOptionsBaseElement();
            optionsList.removeEventListener("scroll", _this.scrollReachedBottomHandler);
            var inputEle = _this.getInputElement();
            inputEle.removeEventListener("input", _this.onInputChange);
            inputEle.removeEventListener("click", _this.onInputChange);
            inputEle.removeEventListener("keydown", _this.onKeyPressed);
            document.removeEventListener("click", _this.onDocumentClickHandler);
            document.removeEventListener("keydown", _this.onEscapeEventHandler);
            _this.element.innerHTML = "";
            _this.isDestroyed = true;
        };
        this.getCustomizedInput = function () {
            return _this.config.customizedInput ? new _this.config.customizedInput() : new InputComponent_1.InputComponent();
        };
        this.getCustomizedOptions = function () {
            return _this.config.customizedOptions ? new _this.config.customizedOptions() : new OptionsComponent_1.OptionsComponent();
        };
        /**
         * Initialize hook that get executed immediatly after using the infinite-autocomplete component
         */
        this.init = function () {
            _this.applyStylesRules();
            _this.appendInfiniteAutocompleteWrapperClass();
            _this.linkInputComponent();
            _this.linkOptionsComponent();
            _this.bindScrollReachBottomEvent();
            _this.bindEscapeEvent();
            _this.bindOutSideClickEvent();
            _this.isDestroyed = false;
        };
        /**
         * (#1) Binds a click handler to detect where the user clicked
         * If click is out side the main wrapper area then close options
         */
        this.bindOutSideClickEvent = function () {
            document.addEventListener("click", _this.onDocumentClickHandler);
        };
        /**
         * on document click handler
         * @param event - Event
         */
        this.onDocumentClickHandler = function (event) {
            if (!_this.isOptionsHidden()) {
                var clickedOutSide = _this.checkIfClickedOutSideTheAutocompleteComponents(event.target);
                if (clickedOutSide) {
                    _this.clearOptions();
                }
            }
        };
        /**
         * Check if click is outside the plugin
         * @param element - HTMLElement
         */
        this.checkIfClickedOutSideTheAutocompleteComponents = function (element) {
            if (element === null) {
                return true;
            }
            else if (element === _this.element) {
                return false;
            }
            else {
                return _this.checkIfClickedOutSideTheAutocompleteComponents(element.parentElement);
            }
        };
        /**
         * (#11) Binds escape event handler to clear the options when clicking Esc
         */
        this.bindEscapeEvent = function () {
            document.addEventListener("keydown", _this.onEscapeEventHandler);
        };
        /**
         * Escape event handler
         * @param e - KeyboardEvent
         */
        this.onEscapeEventHandler = function (e) {
            if (e.keyCode === 27 && !_this.isOptionsHidden()) {
                _this.clearOptions();
            }
        };
        /**
         * Append infinite autocomplete main wrapper className
         */
        this.appendInfiniteAutocompleteWrapperClass = function () {
            if (!_this.element.className || _this.element.className.indexOf("infinite-autocomplete-wrapper") === -1) {
                _this.element.className = _this.element
                    .className
                    .split(" ")
                    .concat(["infinite-autocomplete-wrapper"])
                    .filter(function (c) { return c; })
                    .join(" ");
            }
        };
        /**
         * Reset current page
         */
        this.resetCurrentPage = function () {
            _this.page = 1;
        };
        /**
         * Link input component into the input wrapper
         */
        this.linkInputComponent = function () {
            var inputWrapperEle = document.createElement("div");
            inputWrapperEle.className = "infinite-autocomplete-input-wrapper";
            inputWrapperEle.innerHTML = _this.inputComponent.render();
            var inputEle = inputWrapperEle.querySelector("input");
            if (!inputEle) {
                throw index_1.MissingInputElementInInputComponentExceptionMsg;
            }
            inputEle
                .addEventListener("input", _this.onInputChange);
            // (#2) Start to show options when focus on the input
            inputEle
                .addEventListener("click", _this.onInputChange);
            inputEle
                .addEventListener("keydown", _this.onKeyPressed);
            if (_this.config.value) {
                inputEle.value = _this.config.value;
            }
            var spinnerEle = document.createElement("div");
            spinnerEle.className = "infinite-autocomplete-spinner";
            inputWrapperEle.appendChild(spinnerEle);
            _this.element.appendChild(inputWrapperEle);
        };
        /**
         * On keydown pressing in input element
         * @param keydownEvent - pressing key event
         */
        this.onKeyPressed = function (keydownEvent) {
            if (!_this.isOptionsHidden()) {
                var currentHovered = _this.getNavigationIndex();
                if (currentHovered === -1) {
                    if (keydownEvent.keyCode === index_1.KEY_PRESS_STATES.DOWN) {
                        _this.toggleHoveredState(0, keydownEvent);
                    }
                }
                else {
                    switch (keydownEvent.keyCode) {
                        case index_1.KEY_PRESS_STATES.DOWN:
                            _this.toggleHoveredState(currentHovered + 1, keydownEvent);
                            break;
                        case index_1.KEY_PRESS_STATES.UP:
                            _this.toggleHoveredState(currentHovered - 1, keydownEvent);
                            break;
                        case index_1.KEY_PRESS_STATES.ENTER:
                            _this.clickOnHovered();
                            break;
                        default:
                            break;
                    }
                }
            }
        };
        /**
         * Click on hovered element
         */
        this.clickOnHovered = function () {
            var optionsList = _this.getOptionsBaseElement();
            var hoveredElement = optionsList.querySelector("." + index_1.HOVERED);
            if (hoveredElement) {
                hoveredElement.click();
            }
        };
        /**
         * Simulate Scrolled to bottom
         */
        this.simulateScrollToBottom = function () {
            var optionsList = _this.getOptionsBaseElement();
            var scrollEvent = new Event("scroll", { bubbles: true });
            optionsList.scrollTop = 10000; // Simulate reached bottom
            optionsList.dispatchEvent(scrollEvent);
        };
        /**
         * Toggle hovered state on specific index in options list
         * @param index - The index to be applied as hovered
         */
        this.toggleHoveredState = function (index, keydownEvent) {
            var optionsList = _this.getOptionsBaseElement();
            if (index === optionsList.children.length) {
                _this.simulateScrollToBottom();
            }
            if (index >= 0 && index < optionsList.children.length) {
                var hoveredElement = optionsList.querySelector("." + index_1.HOVERED);
                if (hoveredElement) {
                    hoveredElement.className = hoveredElement
                        .className
                        .split(" ")
                        .filter(function (e) { return e !== index_1.HOVERED; })
                        .join(" ")
                        .trim();
                }
                var targetElement = optionsList.children[index];
                targetElement.className += " " + index_1.HOVERED;
                // If hovered is not in the scrollable view
                if (targetElement.offsetTop < optionsList.scrollTop || (targetElement.offsetTop - optionsList.scrollTop > optionsList.clientHeight)) {
                    switch (keydownEvent.keyCode) {
                        case index_1.KEY_PRESS_STATES.UP:
                            targetElement.scrollIntoView(true);
                            break;
                        case index_1.KEY_PRESS_STATES.DOWN:
                            targetElement.scrollIntoView(false);
                            break;
                        default:
                            break;
                    }
                }
            }
        };
        /**
         * Get navigation index if options is open
         * @returns Options current index
         */
        this.getNavigationIndex = function () {
            var optionsList = _this.getOptionsBaseElement();
            for (var i = 0; i < optionsList.children.length; i++) {
                var option = optionsList.children[i];
                if (option.className.indexOf(index_1.HOVERED) !== -1) {
                    return i;
                }
            }
            return -1;
        };
        /**
         * Input component `change` event handler
         * @param inputChangeEvent - Input change event handler
         */
        this.onInputChange = function (inputChangeEvent) { return __awaiter(_this, void 0, void 0, function () {
            var target, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        target = inputChangeEvent.currentTarget;
                        // If user pass special behavior for typing via configuration
                        if (this.inputComponent.onInputChange) {
                            this.inputComponent.onInputChange(target, target.value);
                        }
                        if (!(inputChangeEvent.type === "input" ||
                            (inputChangeEvent.type === "click" && this.isOptionsHidden()))) return [3 /*break*/, 4];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.buildOptions(target.value, true)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        console.error(error_1);
                        if (this.config.onError) {
                            this.config.onError(error_1);
                        }
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        /**
         * Link options component into the infinite autocomplete component
         */
        this.linkOptionsComponent = function () {
            var optionsWrapperEle = document.createElement("div");
            optionsWrapperEle.className = "infinite-autocomplete-options-wrapper";
            optionsWrapperEle.innerHTML = _this.optionsComponent.render();
            var optionsEle = optionsWrapperEle.querySelector(_this.optionsComponent.listElementSelector);
            _this.setElementVisiblity(optionsWrapperEle, false);
            optionsEle.style.transform = "translateZ(0)";
            optionsEle.style.webkitTransform = "translateZ(0)";
            optionsEle.style.overflow = "scroll";
            optionsEle.style.overflowX = "hidden";
            optionsEle.style.border = "1px solid #bcbcbc";
            optionsEle.style.paddingBottom = "5px";
            optionsEle.style.maxHeight = _this.config.maxHeight || null;
            _this.element.appendChild(optionsWrapperEle);
        };
        /**
         * Check if options wrapper hidden or not
         * @returns true if hidden, or else false
         */
        this.isOptionsHidden = function () {
            var optionsWrapper = _this.element.querySelector(".infinite-autocomplete-options-wrapper");
            return optionsWrapper.className
                .indexOf("infinite-autocomplete-hidden-element") > -1;
        };
        /**
         * Apply the style rules for the infinite autocomplete plugin and it's components
         */
        this.applyStylesRules = function () {
            // Main wrapper style rules
            var isMainWrapperStyleApplied = document.head.querySelector("#infinite-autocomplete-wrapper-style");
            if (!isMainWrapperStyleApplied) {
                var mainWrapperStyle = document.createElement("style");
                mainWrapperStyle.id = "infinite-autocomplete-wrapper-style";
                mainWrapperStyle.innerHTML = "\n          .infinite-autocomplete-wrapper {\n              position: relative;\n          }\n      ";
                document.head.appendChild(mainWrapperStyle);
            }
            // Hidden element style rules
            var isHiddenStyleApplied = document.head.querySelector("#infinite-autocomplete-hidden-style");
            if (!isHiddenStyleApplied) {
                var hiddenStyle = document.createElement("style");
                hiddenStyle.id = "infinite-autocomplete-hidden-style";
                hiddenStyle.innerHTML = "\n          .infinite-autocomplete-hidden-element {\n              visibility: hidden;\n              z-index: -1;\n          }\n      ";
                document.head.appendChild(hiddenStyle);
            }
            // Defaults style rules
            var isDefaultsStyleApplied = document.head.querySelector("#infinite-autocomplete-defaults-style");
            if (!isDefaultsStyleApplied) {
                var defaultsStyle = document.createElement("style");
                defaultsStyle.id = "infinite-autocomplete-defaults-style";
                defaultsStyle.innerHTML = "\n          .infinite-autocomplete-input-wrapper .infinite-autocomplete-default-input {\n              height: 28px;\n              border-radius: 8px;\n              box-shadow: inset 0px 0px 15px -4px transparent;\n          }\n           .infinite-autocomplete-input-wrapper .infinite-autocomplete-spinner {\n              height: 35px;\n              width: 35px;\n              border-radius: 8px;\n              box-shadow: inset 0px 0px 15px -4px transparent;\n              position: absolute;\n              display: inline-block;\n              top: -3px;\n              right: 0;\n              background-size: 100%;\n              display: none;\n              background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg class='lds-spinner' width='200px' height='200px' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 100 100' preserveAspectRatio='xMidYMid' style='background: none;'%3E%3Cg transform='rotate(0 50 50)'%3E%3Crect x='47' y='24' rx='9.4' ry='4.8' width='6' height='12' fill='%231d1b0a'%3E%3Canimate attributeName='opacity' values='1;0' keyTimes='0;1' dur='1s' begin='-0.9166666666666666s' repeatCount='indefinite'%3E%3C/animate%3E%3C/rect%3E%3C/g%3E%3Cg transform='rotate(30 50 50)'%3E%3Crect x='47' y='24' rx='9.4' ry='4.8' width='6' height='12' fill='%231d1b0a'%3E%3Canimate attributeName='opacity' values='1;0' keyTimes='0;1' dur='1s' begin='-0.8333333333333334s' repeatCount='indefinite'%3E%3C/animate%3E%3C/rect%3E%3C/g%3E%3Cg transform='rotate(60 50 50)'%3E%3Crect x='47' y='24' rx='9.4' ry='4.8' width='6' height='12' fill='%231d1b0a'%3E%3Canimate attributeName='opacity' values='1;0' keyTimes='0;1' dur='1s' begin='-0.75s' repeatCount='indefinite'%3E%3C/animate%3E%3C/rect%3E%3C/g%3E%3Cg transform='rotate(90 50 50)'%3E%3Crect x='47' y='24' rx='9.4' ry='4.8' width='6' height='12' fill='%231d1b0a'%3E%3Canimate attributeName='opacity' values='1;0' keyTimes='0;1' dur='1s' begin='-0.6666666666666666s' repeatCount='indefinite'%3E%3C/animate%3E%3C/rect%3E%3C/g%3E%3Cg transform='rotate(120 50 50)'%3E%3Crect x='47' y='24' rx='9.4' ry='4.8' width='6' height='12' fill='%231d1b0a'%3E%3Canimate attributeName='opacity' values='1;0' keyTimes='0;1' dur='1s' begin='-0.5833333333333334s' repeatCount='indefinite'%3E%3C/animate%3E%3C/rect%3E%3C/g%3E%3Cg transform='rotate(150 50 50)'%3E%3Crect x='47' y='24' rx='9.4' ry='4.8' width='6' height='12' fill='%231d1b0a'%3E%3Canimate attributeName='opacity' values='1;0' keyTimes='0;1' dur='1s' begin='-0.5s' repeatCount='indefinite'%3E%3C/animate%3E%3C/rect%3E%3C/g%3E%3Cg transform='rotate(180 50 50)'%3E%3Crect x='47' y='24' rx='9.4' ry='4.8' width='6' height='12' fill='%231d1b0a'%3E%3Canimate attributeName='opacity' values='1;0' keyTimes='0;1' dur='1s' begin='-0.4166666666666667s' repeatCount='indefinite'%3E%3C/animate%3E%3C/rect%3E%3C/g%3E%3Cg transform='rotate(210 50 50)'%3E%3Crect x='47' y='24' rx='9.4' ry='4.8' width='6' height='12' fill='%231d1b0a'%3E%3Canimate attributeName='opacity' values='1;0' keyTimes='0;1' dur='1s' begin='-0.3333333333333333s' repeatCount='indefinite'%3E%3C/animate%3E%3C/rect%3E%3C/g%3E%3Cg transform='rotate(240 50 50)'%3E%3Crect x='47' y='24' rx='9.4' ry='4.8' width='6' height='12' fill='%231d1b0a'%3E%3Canimate attributeName='opacity' values='1;0' keyTimes='0;1' dur='1s' begin='-0.25s' repeatCount='indefinite'%3E%3C/animate%3E%3C/rect%3E%3C/g%3E%3Cg transform='rotate(270 50 50)'%3E%3Crect x='47' y='24' rx='9.4' ry='4.8' width='6' height='12' fill='%231d1b0a'%3E%3Canimate attributeName='opacity' values='1;0' keyTimes='0;1' dur='1s' begin='-0.16666666666666666s' repeatCount='indefinite'%3E%3C/animate%3E%3C/rect%3E%3C/g%3E%3Cg transform='rotate(300 50 50)'%3E%3Crect x='47' y='24' rx='9.4' ry='4.8' width='6' height='12' fill='%231d1b0a'%3E%3Canimate attributeName='opacity' values='1;0' keyTimes='0;1' dur='1s' begin='-0.08333333333333333s' repeatCount='indefinite'%3E%3C/animate%3E%3C/rect%3E%3C/g%3E%3Cg transform='rotate(330 50 50)'%3E%3Crect x='47' y='24' rx='9.4' ry='4.8' width='6' height='12' fill='%231d1b0a'%3E%3Canimate attributeName='opacity' values='1;0' keyTimes='0;1' dur='1s' begin='0s' repeatCount='indefinite'%3E%3C/animate%3E%3C/rect%3E%3C/g%3E%3C/svg%3E\");\n          }\n          .infinite-autocomplete-input-wrapper .infinite-autocomplete-spinner.loading {\n            display: inline-block;\n          }\n          .infinite-autocomplete-options-wrapper .infinite-autocomplete-default-options {\n              list-style-type: none;\n              margin-top: 0;\n              padding-left: 0;\n              margin-bottom: 0;\n          }\n          .infinite-autocomplete-options-wrapper .infinite-autocomplete-default-options li {\n              padding: 5px 10px 10px 10px;\n          }\n          .infinite-autocomplete-options-wrapper .infinite-autocomplete-default-options li.hovered {\n              background: #d5ebff;\n              color: black;\n              cursor: pointer;\n          }\n      ";
                document.head.appendChild(defaultsStyle);
            }
            // Input style rules
            var isInputStyleApplied = document.head.querySelector("#infinite-autocomplete-input-style");
            if (!isInputStyleApplied) {
                var inputStyle = document.createElement("style");
                inputStyle.id = "infinite-autocomplete-input-style";
                inputStyle.innerHTML = "\n          .infinite-autocomplete-input-wrapper input {\n              width: 100%;\n          }\n      ";
                document.head.appendChild(inputStyle);
            }
            // Options style rules
            var isOptionsStyleApplied = document.head.querySelector("#infinite-autocomplete-options-style");
            if (!isOptionsStyleApplied) {
                var optionsStyle = document.createElement("style");
                optionsStyle.id = "infinite-autocomplete-options-style";
                optionsStyle.innerHTML = "\n          .infinite-autocomplete-options-wrapper {\n              position: absolute;\n              z-index: 10;\n              background: white;\n          }\n      ";
                document.head.appendChild(optionsStyle);
            }
            // Scrollbar style rules
            var isScrollbarStyleApplied = document.head.querySelector("#infinite-autocomplete-scrollbar-style");
            if (!isScrollbarStyleApplied) {
                var specialScroll = document.createElement("style");
                specialScroll.id = "infinite-autocomplete-scrollbar-style";
                specialScroll.innerHTML = "\n          .infinite-autocomplete-wrapper ::-webkit-scrollbar {\n                  width: 4px;\n              }\n\n              .infinite-autocomplete-wrapper ::-webkit-scrollbar-track {\n                  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\n                  -webkit-border-radius: 10px;\n                  border-radius: 10px;\n              }\n\n              .infinite-autocomplete-wrapper ::-webkit-scrollbar-thumb {\n                  -webkit-border-radius: 10px;\n                  border-radius: 10px;\n                  background: rgba(128, 128, 128, 0.8);\n                  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5);\n              }\n              .infinite-autocomplete-wrapper ::-webkit-scrollbar-thumb:window-inactive {\n                  background: rgba(255,0,0,0.4);\n              }\n      ";
                document.head.appendChild(specialScroll);
            }
        };
        /**
         * Binds a scroll event handler on the options
         */
        this.bindScrollReachBottomEvent = function () {
            var optionsEle = _this.getOptionsBaseElement();
            optionsEle.addEventListener("scroll", _this.scrollReachedBottomHandler);
        };
        /**
         * Scroll reached bottom handler
         * @param e - Scroll event object
         */
        this.scrollReachedBottomHandler = function (e) { return __awaiter(_this, void 0, void 0, function () {
            var optionsEle, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        optionsEle = e.currentTarget;
                        if (!(!this.fetchingData && !this.preventMoreRequests && !this.isOptionsHidden())) return [3 /*break*/, 4];
                        if (!(optionsEle.scrollTop + optionsEle.clientHeight >= optionsEle.scrollHeight)) return [3 /*break*/, 4];
                        this.page++;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.buildOptions(this.getInputElement().value, false)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_2 = _a.sent();
                        console.error(error_2);
                        if (this.config.onError) {
                            this.config.onError(error_2);
                        }
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        /**
         * Clears the options list tag with removing the click event handlers
         * unbind the `scroll` event from the options
         * (Garbage collecting)
         */
        this.clearOptions = function () {
            _this.detachOptionEventHandlers(_this.getOptionsBaseElement()
                .querySelectorAll("[infinite-clickable]"));
            _this.resetCurrentPage();
            _this.preventMoreRequests = false;
            var optionListElement = _this.getOptionsBaseElement();
            _this.setElementVisiblity(_this.element.querySelector(".infinite-autocomplete-options-wrapper"), false);
            optionListElement.innerHTML = "";
        };
        /**
         * Option click event handler
         * @param clickEvent
         */
        this.onOptionClickEvent = function (clickEvent) {
            if (_this.config.onSelect) {
                _this.config.onSelect(clickEvent.currentTarget, clickEvent.currentTarget.data);
            }
            _this.clearOptions();
            _this.setInput(clickEvent.currentTarget.data.text);
        };
        /**
         * On hovering on option row
         * @param event - Hover Mouse Event
         */
        this.onOptionHoverEvent = function (event) {
            var optionsList = _this.getOptionsBaseElement();
            var hoveredElement = optionsList.querySelector("." + index_1.HOVERED);
            if (hoveredElement) {
                hoveredElement.className = hoveredElement
                    .className
                    .split(" ")
                    .filter(function (e) { return e !== index_1.HOVERED; })
                    .join(" ")
                    .trim();
            }
            var target = event.currentTarget;
            target.className += " " + index_1.HOVERED;
        };
        this.element = element;
        this.config = __assign({}, this.defaultConfig, config);
        this.inputComponent = this.getCustomizedInput();
        this.optionsComponent = this.getCustomizedOptions();
        this.init();
    }
    /**
     * Sets the element visiblity
     * @param element - HTMLElement
     * @param visible - visibility status
     */
    InfiniteAutocomplete.prototype.setElementVisiblity = function (element, visible) {
        if (visible) {
            element.className = element.className
                .split(" ")
                .filter(function (e) { return e !== "infinite-autocomplete-hidden-element"; })
                .join(" ");
        }
        else {
            if (element.className.indexOf("infinite-autocomplete-hidden-element") === -1) {
                element.className += " infinite-autocomplete-hidden-element";
            }
        }
    };
    /**
     * Get options base HTMLElement
     * @returns HTMLElement
     */
    InfiniteAutocomplete.prototype.getOptionsBaseElement = function () {
        if (this.element) {
            var optionsWrapper = this.element
                .querySelector(".infinite-autocomplete-options-wrapper");
            if (optionsWrapper) {
                return optionsWrapper
                    .querySelector(this.optionsComponent.listElementSelector);
            }
            else {
                throw index_1.optionsWrapperExceptionMsg;
            }
        }
        else {
            throw index_1.optionsWrapperExceptionMsg;
        }
    };
    /**
     * Detaching the event handlers over the option elements
     */
    InfiniteAutocomplete.prototype.detachOptionEventHandlers = function (elements) {
        for (var i = 0; i < elements.length; i++) {
            elements[i].removeEventListener("click", this.onOptionClickEvent);
            elements[i].removeEventListener("mouseover", this.onOptionHoverEvent);
        }
    };
    /**
     * Get input HTML element below infinite-autocomplete-input-wrapper
     * @returns HTMLInputElement
     */
    InfiniteAutocomplete.prototype.getInputElement = function () {
        if (this.element) {
            var inputWrapper = this.element
                .querySelector(".infinite-autocomplete-input-wrapper");
            if (inputWrapper) {
                return inputWrapper
                    .querySelector("input");
            }
            else {
                throw index_1.inputElementExceptionMsg;
            }
        }
        else {
            throw index_1.inputElementExceptionMsg;
        }
    };
    /**
     * Set input shown text
     * @param text
     */
    InfiniteAutocomplete.prototype.setInput = function (text) {
        this.getInputElement()
            .value = text;
    };
    Object.defineProperty(InfiniteAutocomplete.prototype, "fetchingData", {
        get: function () {
            return this.localFetchingData;
        },
        set: function (loadingState) {
            if (this.config.onLoadingStateChange) {
                this.config.onLoadingStateChange(loadingState);
            }
            this.localFetchingData = loadingState;
            this.toggleLoadingState(loadingState);
        },
        enumerable: true,
        configurable: true
    });
    InfiniteAutocomplete.prototype.toggleLoadingState = function (loadingState) {
        var element = this.element.querySelector(".infinite-autocomplete-spinner");
        (loadingState) ?
            element.classList.add("loading") : element.classList.remove("loading");
    };
    /**
     * Get data based on text, page and fetchSize
     * @param text
     * @param page
     * @param fetchSize
     */
    InfiniteAutocomplete.prototype.getData = function (text, page, fetchSize) {
        return __awaiter(this, void 0, void 0, function () {
            var from, to, staticData, apiData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.searchedText = text;
                        if (!this.config.data) return [3 /*break*/, 1];
                        this.fetchingData = true;
                        from = (page - 1) * fetchSize;
                        to = (fetchSize * (page - 1)) + fetchSize;
                        staticData = this.config.data
                            .filter(function (option) { return option.text.toLowerCase().indexOf(text.toLowerCase()) !== -1; })
                            .slice(from, to);
                        this.fetchingData = false;
                        return [2 /*return*/, staticData];
                    case 1:
                        if (!this.config.getDataFromApi) return [3 /*break*/, 3];
                        this.fetchingData = true;
                        return [4 /*yield*/, this.config.getDataFromApi(text, page, fetchSize)];
                    case 2:
                        apiData = _a.sent();
                        this.fetchingData = false;
                        if (this.searchedText === text &&
                            this.page === page &&
                            this.config.fetchSize === fetchSize) {
                            return [2 /*return*/, apiData];
                        }
                        else {
                            return [2 /*return*/, null];
                        }
                        return [3 /*break*/, 4];
                    case 3: throw index_1.dataSourceMissingExceptionMsg;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Build the options inner tags in options list tag based on the text passed and the data in config
     * @param text - Text to search on in the autocomplete
     * @param clearPreviousData - Flag to clear previous options and override with the new one
     */
    InfiniteAutocomplete.prototype.buildOptions = function (text, clearPreviousData) {
        if (clearPreviousData === void 0) { clearPreviousData = true; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var optionListElement, filteredOptions, chunkClientHeight, maxHeightNumber, optionsWrapperEle, optionsEle;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        optionListElement = this.getOptionsBaseElement();
                        if (clearPreviousData) {
                            this.clearOptions();
                        }
                        if (!(this.config.fetchSize && !isNaN(this.config.fetchSize))) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.getData(text, this.page, this.config.fetchSize)];
                    case 1:
                        filteredOptions = _a.sent();
                        if (filteredOptions !== null) {
                            if (filteredOptions.length < this.config.fetchSize) {
                                // Stop fetching more chunks whenever you get less than the chunk fetch size
                                this.preventMoreRequests = true;
                            }
                            filteredOptions
                                .forEach(function (option) {
                                var optionElementTemplate = _this.optionsComponent.renderOption(option);
                                var tempElement = document.createElement("div");
                                tempElement.innerHTML = optionElementTemplate;
                                var optionElement = tempElement.childNodes[0];
                                optionElement.data = { text: option.text, value: option.value };
                                optionElement.setAttribute("infinite-clickable", "");
                                optionElement.addEventListener("click", _this.onOptionClickEvent);
                                optionElement.addEventListener("mouseover", _this.onOptionHoverEvent);
                                optionListElement.appendChild(optionElement);
                            });
                            if (filteredOptions.length > 0) {
                                chunkClientHeight = optionListElement.children[0].clientHeight;
                                // Check if maxHeight is fits the chunk size list
                                if (this.config.maxHeight) {
                                    maxHeightNumber = parseInt(this.config.maxHeight, 10);
                                    if (maxHeightNumber >= chunkClientHeight * this.config.fetchSize) {
                                        this.config.maxHeight = (chunkClientHeight * this.config.fetchSize - 5) + "px";
                                        optionsWrapperEle = this.element.querySelector(".infinite-autocomplete-options-wrapper");
                                        optionsEle = optionsWrapperEle.querySelector(this.optionsComponent.listElementSelector);
                                        optionsEle.style.maxHeight = this.config.maxHeight;
                                    }
                                }
                            }
                        }
                        if (optionListElement.innerHTML !== "") {
                            this.setElementVisiblity(this.element.querySelector(".infinite-autocomplete-options-wrapper"), true);
                        }
                        else {
                            this.setElementVisiblity(this.element.querySelector(".infinite-autocomplete-options-wrapper"), false);
                        }
                        return [3 /*break*/, 3];
                    case 2: throw index_1.fetchSizeExceptionMsg;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return InfiniteAutocomplete;
}());
exports.InfiniteAutocomplete = InfiniteAutocomplete;


/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBhMGQxODZjZjRiNDc4YTVjYjUxZiIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9JbnB1dENvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9PcHRpb25zQ29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9Db25zdGFudHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvSW5maW5pdGVBdXRvY29tcGxldGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQzlEQTs7O0dBR0c7QUFDSDtJQUFBO0lBSUEsQ0FBQztJQUhRLCtCQUFNLEdBQWI7UUFDSSxNQUFNLENBQUMsdUVBQW1FLENBQUM7SUFDL0UsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQztBQUpZLHdDQUFjOzs7Ozs7Ozs7O0FDSDNCOzs7R0FHRztBQUNIO0lBQUE7UUFDUyx3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QUMsU0FBUyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7NEJBQ3ZDLElBQUksQ0FBQyxtQkFBbUIsQ0FDdEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsd0NBQXdDLENBQWdCLEVBQ25GLElBQUksQ0FDTCxDQUFDO3dCQUNKLENBQUM7d0JBQUMsSUFBSSxDQUFDLENBQUM7NEJBQ04sSUFBSSxDQUFDLG1CQUFtQixDQUN0QixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyx3Q0FBd0MsQ0FBZ0IsRUFDbkYsS0FBSyxDQUNOLENBQUM7d0JBQ0osQ0FBQzs7NEJBR0QsTUFBTSw2QkFBcUIsQ0FBQzs7Ozs7S0FFL0I7SUFFSCwyQkFBQztBQUFELENBQUM7QUF2d0JZLG9EQUFvQiIsImZpbGUiOiJpbmRleC5kZWJ1Zy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSBmYWN0b3J5KCk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBhMGQxODZjZjRiNDc4YTVjYjUxZiIsImltcG9ydCB7IElJbnB1dENvbXBvbmVudCB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lJbnB1dENvbXBvbmVudFwiO1xuXG4vKipcbiAqIElucHV0IGNvbXBvbmVudCBkZWZhdWx0IGltcGxlbWVudGF0aW9uXG4gKiBAYXV0aG9yIElzbGFtIEF0dHJhc2hcbiAqL1xuZXhwb3J0IGNsYXNzIElucHV0Q29tcG9uZW50IGltcGxlbWVudHMgSUlucHV0Q29tcG9uZW50IHtcbiAgcHVibGljIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiBgPGlucHV0IGNsYXNzPVwiaW5maW5pdGUtYXV0b2NvbXBsZXRlLWRlZmF1bHQtaW5wdXRcIiB0eXBlPVwidGV4dFwiIC8+YDtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0NvbXBvbmVudHMvSW5wdXRDb21wb25lbnQudHMiLCJpbXBvcnQgeyBJT3B0aW9uc0NvbXBvbmVudCB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lPcHRpb25zQ29tcG9uZW50XCI7XG5pbXBvcnQgeyBJT3B0aW9uIH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSU9wdGlvblwiO1xuXG4vKipcbiAqIE9wdGlvbnMgY29tcG9uZW50IGRlZmF1bHQgaW1wbGVtZW50YXRpb25cbiAqIEBhdXRob3IgSXNsYW0gQXR0cmFzaFxuICovXG5leHBvcnQgY2xhc3MgT3B0aW9uc0NvbXBvbmVudCBpbXBsZW1lbnRzIElPcHRpb25zQ29tcG9uZW50IHtcbiAgcHVibGljIGxpc3RFbGVtZW50U2VsZWN0b3I6IHN0cmluZyA9IGB1bGA7XG5cbiAgcHVibGljIHJlbmRlcigpIHtcbiAgICByZXR1cm4gYDwke3RoaXMubGlzdEVsZW1lbnRTZWxlY3Rvcn0gY2xhc3M9XCJpbmZpbml0ZS1hdXRvY29tcGxldGUtZGVmYXVsdC1vcHRpb25zXCI+PC8ke3RoaXMubGlzdEVsZW1lbnRTZWxlY3Rvcn0+YDtcbiAgfVxuXG4gIHB1YmxpYyByZW5kZXJPcHRpb24ob3B0aW9uOiBJT3B0aW9uKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYDxsaT5cbiAgICAgICAgICAgICAgICAke29wdGlvbi50ZXh0fVxuICAgICAgICAgICAgPC9saT5gO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Db21wb25lbnRzL09wdGlvbnNDb21wb25lbnQudHMiLCJcbi8qKiBIb3ZlcmVkIHN0YXRlIHdoZW4gbmF2aWdhdGlvbiB0aHJvdWdoIHVwQXJyb3cvZG93bkFycm93IHdoaWxlIG9wdGlvbnMgaXMgb3BlbiAqL1xuZXhwb3J0IGNvbnN0IEhPVkVSRUQgPSBcImhvdmVyZWRcIjtcblxuLyoqXG4gKiBLZXkgZG93biBzdGF0ZXMgKGtleUNvZGVzKVxuICovXG5leHBvcnQgY29uc3QgS0VZX1BSRVNTX1NUQVRFUyA9IHtcbiAgICBVUDogMzgsXG4gICAgRE9XTjogNDAsXG4gICAgRU5URVI6IDEzLFxufTtcblxuZXhwb3J0IGNvbnN0IE1pc3NpbmdJbnB1dEVsZW1lbnRJbklucHV0Q29tcG9uZW50RXhjZXB0aW9uTXNnID1cbiAgbmV3IEVycm9yKGBDdXN0b21pemVkIGlucHV0IHNob3VsZCBjb250YWluIGlucHV0IGVsZW1lbnQgPGlucHV0IC8+YCk7XG5cbmV4cG9ydCBjb25zdCBvcHRpb25zV3JhcHBlckV4Y2VwdGlvbk1zZyA9IG5ldyBFcnJvcihgQ291bGRuJ3QgZ2V0IHRoZSBvcHRpb25zIGJhc2UgZWxlbWVudC5gKTtcblxuZXhwb3J0IGNvbnN0IGlucHV0RWxlbWVudEV4Y2VwdGlvbk1zZyA9IG5ldyBFcnJvcihgQ291bGRuJ3QgZ2V0IHRoZSBpbnB1dCBlbGVtZW50LmApO1xuXG5leHBvcnQgY29uc3QgZGF0YVNvdXJjZU1pc3NpbmdFeGNlcHRpb25Nc2cgPSBuZXcgRXJyb3IgKGBZb3UgbXVzdCBwYXNzIGRhdGEgb3IgZ2V0RGF0YUZyb21BcGkgZnVuY3Rpb24gdmlhIGNvbmZpZ2ApO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hTaXplRXhjZXB0aW9uTXNnID0gbmV3IEVycm9yKGBmZXRjaFNpemUgbXVzdCBiZSBvdmVycmlkZW4gd2l0aCBjb3JyZWN0IG51bWVyaWMgdmFsdWVgKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Db25zdGFudHMvaW5kZXgudHMiLCJpbXBvcnQgeyBJbnB1dENvbXBvbmVudCBhcyBkZWZhdWx0SW5wdXRJbXBsIH0gZnJvbSBcIi4vSW5wdXRDb21wb25lbnRcIjtcbmltcG9ydCB7IE9wdGlvbnNDb21wb25lbnQgYXMgZGVmYXVsdE9wdGlvbnNJbXBsIH0gZnJvbSBcIi4vT3B0aW9uc0NvbXBvbmVudFwiO1xuaW1wb3J0IHsgSW5maW5pdGVBdXRvY29tcGxldGVDb25maWcgfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JbmZpbml0ZUF1dG9jb21wbGV0ZUNvbmZpZ1wiO1xuaW1wb3J0IHsgSUlucHV0Q29tcG9uZW50LCBJSW5wdXRDb21wb2VuZW50Q29uc3RydWN0b3IgfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JSW5wdXRDb21wb25lbnRcIjtcbmltcG9ydCB7IElPcHRpb25zQ29tcG9uZW50LCBJT3B0aW9uc0NvbXBvbmVudENvbnN0cnVjdG9yIH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSU9wdGlvbnNDb21wb25lbnRcIjtcbmltcG9ydCB7IElJbmZpbml0ZUF1dG9jb21wbGV0ZSB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lJbmZpbml0ZUF1dG9jb21wbGV0ZVwiO1xuaW1wb3J0IHsgSU9wdGlvbiB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lPcHRpb25cIjtcbmltcG9ydCB7XG4gIEhPVkVSRUQsXG4gIEtFWV9QUkVTU19TVEFURVMsXG4gIE1pc3NpbmdJbnB1dEVsZW1lbnRJbklucHV0Q29tcG9uZW50RXhjZXB0aW9uTXNnLFxuICBvcHRpb25zV3JhcHBlckV4Y2VwdGlvbk1zZyxcbiAgaW5wdXRFbGVtZW50RXhjZXB0aW9uTXNnLFxuICBkYXRhU291cmNlTWlzc2luZ0V4Y2VwdGlvbk1zZyxcbiAgZmV0Y2hTaXplRXhjZXB0aW9uTXNnLFxufSBmcm9tIFwiLi4vQ29uc3RhbnRzL2luZGV4XCI7XG5cbi8qKlxuICogRGVmYXVsdCBJbnB1dCBpbiBpbmZpbml0ZS1hdXRvY29tcGxldGUgY29tcG9uZW50XG4gKi9cbmV4cG9ydCBjb25zdCBJbnB1dENvbXBvbmVudCA9IGRlZmF1bHRJbnB1dEltcGw7XG5cbi8qKlxuICogRGVmYXVsdCBJbnB1dCBpbiBpbmZpbml0ZS1hdXRvY29tcGxldGUgY29tcG9uZW50XG4gKi9cbmV4cG9ydCBjb25zdCBPcHRpb25zQ29tcG9uZW50ID0gZGVmYXVsdE9wdGlvbnNJbXBsO1xuXG4vKipcbiAqIGluZmluaXRlLWF1dG9jb21wbGV0ZSBjb21wb25lbnQgaW1wbGVtZW50YXRpb25cbiAqIEBhdXRob3IgSXNsYW0gQXR0cmFzaFxuICovXG5leHBvcnQgY2xhc3MgSW5maW5pdGVBdXRvY29tcGxldGUgaW1wbGVtZW50cyBJSW5maW5pdGVBdXRvY29tcGxldGUge1xuXG4gIHByaXZhdGUgZWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gIHByaXZhdGUgaW5wdXRDb21wb25lbnQ6IElJbnB1dENvbXBvbmVudDtcbiAgcHJpdmF0ZSBvcHRpb25zQ29tcG9uZW50OiBJT3B0aW9uc0NvbXBvbmVudDtcbiAgcHJpdmF0ZSBwYWdlOiBudW1iZXIgPSAxO1xuICBwcml2YXRlIHNlYXJjaGVkVGV4dDogc3RyaW5nID0gXCJcIjtcbiAgcHJpdmF0ZSBpc0Rlc3Ryb3llZCA9IGZhbHNlO1xuICBwcml2YXRlIGNvbmZpZzogSW5maW5pdGVBdXRvY29tcGxldGVDb25maWc7XG4gIHByaXZhdGUgcHJldmVudE1vcmVSZXF1ZXN0czogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIGxvY2FsRmV0Y2hpbmdEYXRhOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIERlZmF1bHQgY29uZmlndXJhdGlvbiBvYmplY3RcbiAgICovXG4gIHByaXZhdGUgZGVmYXVsdENvbmZpZzogSW5maW5pdGVBdXRvY29tcGxldGVDb25maWcgPSB7XG4gICAgZmV0Y2hTaXplOiAxMCxcbiAgICBtYXhIZWlnaHQ6IFwiMTYwcHhcIixcbiAgfTtcblxuICAvKipcbiAgICogY29uc3RydWN0b3IgZm9yIEluZmluaXRlQXV0b2NvbXBsZXRlIGNsYXNzXG4gICAqIEVuYWJsaW5nIHBsdWdnYWJsZSBzeXN0ZW0gbGlua2VkIHdpdGggSW50ZXJmYWNlcyBvbmx5XG4gICAqIEBwYXJhbSBlbGVtZW50IC0gSFRNTEVsZW1lbnQgdG8gYXBwZW5kIHRoZSBpbmZpbml0ZS1hdXRvY29tcGxldGUgaW4gaXRcbiAgICogQHBhcmFtIGNvbmZpZyAtIEluZmluaXRlQXV0b2NvbXBsZXRlIGNvbmZpZyBvcHRpb25zXG4gICAqIEBwYXJhbSBvcHRpb25Db21wb25lbnQgLSBPcHRpb24gY29tcG9uZW50IGltcGxlbWVudGF0aW9uIHRvIGJlIGluamVjdGVkIChvciBkZWZhdWx0KVxuICAgKiBAcGFyYW0gaW5wdXRDb21wb25lbnQgLSBJbnB1dCBjb21wb25lbnQgaW1wbGVtZW50YXRpb24gdG8gYmUgaW5qZWN0ZWQgKG9yIGRlZmF1bHQpXG4gICAqIEBwYXJhbSBvcHRpb25zQ29tcG9uZW50IC0gT3B0aW9ucyBjb21wb25lbnQgaW1wbGVtZW50YXRpb24gdG8gYmUgaW5qZWN0ZWQgKG9yIGRlZmF1bHQpXG4gICAqL1xuICBjb25zdHJ1Y3RvcihlbGVtZW50OiBIVE1MRWxlbWVudCwgY29uZmlnPzogSW5maW5pdGVBdXRvY29tcGxldGVDb25maWcpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIHRoaXMuY29uZmlnID0geyAuLi50aGlzLmRlZmF1bHRDb25maWcsIC4uLmNvbmZpZyB9O1xuICAgIHRoaXMuaW5wdXRDb21wb25lbnQgPSB0aGlzLmdldEN1c3RvbWl6ZWRJbnB1dCgpO1xuICAgIHRoaXMub3B0aW9uc0NvbXBvbmVudCA9IHRoaXMuZ2V0Q3VzdG9taXplZE9wdGlvbnMoKTtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIGNvbmZpZyBvYmplY3Qgd2l0aCBleHRlbmRpbmdcbiAgICogQHBhcmFtIGNvbmZpZyAtIGluZmluaXRlLWF1dG9jb21wbGV0ZSBjb25maWd1cmF0aW9uIG9iamVjdFxuICAgKi9cbiAgcHVibGljIHNldENvbmZpZyA9IChjb25maWc6IEluZmluaXRlQXV0b2NvbXBsZXRlQ29uZmlnKSA9PiB7XG4gICAgdGhpcy5kZXN0cm95KCk7XG4gICAgdGhpcy5jb25maWcgPSB7IC4uLnRoaXMuY29uZmlnLCAuLi5jb25maWcgfTtcbiAgICB0aGlzLmlucHV0Q29tcG9uZW50ID0gdGhpcy5nZXRDdXN0b21pemVkSW5wdXQoKTtcbiAgICB0aGlzLm9wdGlvbnNDb21wb25lbnQgPSB0aGlzLmdldEN1c3RvbWl6ZWRPcHRpb25zKCk7XG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveSB0aGUgaW5maW5pdGUtYXV0b2NvbXBsZXRlIGFuZCB1bmJpbmQgYWxsIGV2ZW50c1xuICAgKi9cbiAgcHVibGljIGRlc3Ryb3kgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuaXNEZXN0cm95ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuaXNPcHRpb25zSGlkZGVuKCkpIHtcbiAgICAgIHRoaXMuY2xlYXJPcHRpb25zKCk7XG4gICAgfVxuXG4gICAgbGV0IG9wdGlvbnNMaXN0ID0gdGhpcy5nZXRPcHRpb25zQmFzZUVsZW1lbnQoKTtcbiAgICBvcHRpb25zTGlzdC5yZW1vdmVFdmVudExpc3RlbmVyKGBzY3JvbGxgLCB0aGlzLnNjcm9sbFJlYWNoZWRCb3R0b21IYW5kbGVyKTtcbiAgICBsZXQgaW5wdXRFbGUgPSB0aGlzLmdldElucHV0RWxlbWVudCgpO1xuICAgIGlucHV0RWxlLnJlbW92ZUV2ZW50TGlzdGVuZXIoYGlucHV0YCwgdGhpcy5vbklucHV0Q2hhbmdlKTtcbiAgICBpbnB1dEVsZS5yZW1vdmVFdmVudExpc3RlbmVyKGBjbGlja2AsIHRoaXMub25JbnB1dENoYW5nZSk7XG4gICAgaW5wdXRFbGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihga2V5ZG93bmAsIHRoaXMub25LZXlQcmVzc2VkKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGBjbGlja2AsIHRoaXMub25Eb2N1bWVudENsaWNrSGFuZGxlcik7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5vbkVzY2FwZUV2ZW50SGFuZGxlcik7XG4gICAgdGhpcy5lbGVtZW50LmlubmVySFRNTCA9IGBgO1xuICAgIHRoaXMuaXNEZXN0cm95ZWQgPSB0cnVlO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRDdXN0b21pemVkSW5wdXQgPSAoKSA9PlxuICAgIHRoaXMuY29uZmlnLmN1c3RvbWl6ZWRJbnB1dCA/IG5ldyB0aGlzLmNvbmZpZy5jdXN0b21pemVkSW5wdXQoKSA6IG5ldyBkZWZhdWx0SW5wdXRJbXBsKClcblxuICBwcml2YXRlIGdldEN1c3RvbWl6ZWRPcHRpb25zID0gKCkgPT5cbiAgICB0aGlzLmNvbmZpZy5jdXN0b21pemVkT3B0aW9ucyA/IG5ldyB0aGlzLmNvbmZpZy5jdXN0b21pemVkT3B0aW9ucygpIDogbmV3IGRlZmF1bHRPcHRpb25zSW1wbCgpXG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgaG9vayB0aGF0IGdldCBleGVjdXRlZCBpbW1lZGlhdGx5IGFmdGVyIHVzaW5nIHRoZSBpbmZpbml0ZS1hdXRvY29tcGxldGUgY29tcG9uZW50XG4gICAqL1xuICBwcml2YXRlIGluaXQgPSAoKSA9PiB7XG4gICAgdGhpcy5hcHBseVN0eWxlc1J1bGVzKCk7XG4gICAgdGhpcy5hcHBlbmRJbmZpbml0ZUF1dG9jb21wbGV0ZVdyYXBwZXJDbGFzcygpO1xuICAgIHRoaXMubGlua0lucHV0Q29tcG9uZW50KCk7XG4gICAgdGhpcy5saW5rT3B0aW9uc0NvbXBvbmVudCgpO1xuICAgIHRoaXMuYmluZFNjcm9sbFJlYWNoQm90dG9tRXZlbnQoKTtcbiAgICB0aGlzLmJpbmRFc2NhcGVFdmVudCgpO1xuICAgIHRoaXMuYmluZE91dFNpZGVDbGlja0V2ZW50KCk7XG4gICAgdGhpcy5pc0Rlc3Ryb3llZCA9IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqICgjMSkgQmluZHMgYSBjbGljayBoYW5kbGVyIHRvIGRldGVjdCB3aGVyZSB0aGUgdXNlciBjbGlja2VkXG4gICAqIElmIGNsaWNrIGlzIG91dCBzaWRlIHRoZSBtYWluIHdyYXBwZXIgYXJlYSB0aGVuIGNsb3NlIG9wdGlvbnNcbiAgICovXG4gIHByaXZhdGUgYmluZE91dFNpZGVDbGlja0V2ZW50ID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgdGhpcy5vbkRvY3VtZW50Q2xpY2tIYW5kbGVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBvbiBkb2N1bWVudCBjbGljayBoYW5kbGVyXG4gICAqIEBwYXJhbSBldmVudCAtIEV2ZW50XG4gICAqL1xuICBwcml2YXRlIG9uRG9jdW1lbnRDbGlja0hhbmRsZXIgPSAoZXZlbnQ6IEV2ZW50KSA9PiB7XG4gICAgaWYgKCF0aGlzLmlzT3B0aW9uc0hpZGRlbigpKSB7XG4gICAgICBsZXQgY2xpY2tlZE91dFNpZGUgPSB0aGlzLmNoZWNrSWZDbGlja2VkT3V0U2lkZVRoZUF1dG9jb21wbGV0ZUNvbXBvbmVudHMoZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50KTtcbiAgICAgIGlmIChjbGlja2VkT3V0U2lkZSkge1xuICAgICAgICAgIHRoaXMuY2xlYXJPcHRpb25zKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGNsaWNrIGlzIG91dHNpZGUgdGhlIHBsdWdpblxuICAgKiBAcGFyYW0gZWxlbWVudCAtIEhUTUxFbGVtZW50XG4gICAqL1xuICBwcml2YXRlIGNoZWNrSWZDbGlja2VkT3V0U2lkZVRoZUF1dG9jb21wbGV0ZUNvbXBvbmVudHMgPSAoZWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsKSA9PiB7XG4gICAgaWYgKGVsZW1lbnQgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIGlmIChlbGVtZW50ID09PSB0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoZWNrSWZDbGlja2VkT3V0U2lkZVRoZUF1dG9jb21wbGV0ZUNvbXBvbmVudHMoZWxlbWVudC5wYXJlbnRFbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogKCMxMSkgQmluZHMgZXNjYXBlIGV2ZW50IGhhbmRsZXIgdG8gY2xlYXIgdGhlIG9wdGlvbnMgd2hlbiBjbGlja2luZyBFc2NcbiAgICovXG4gIHByaXZhdGUgYmluZEVzY2FwZUV2ZW50ID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMub25Fc2NhcGVFdmVudEhhbmRsZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIEVzY2FwZSBldmVudCBoYW5kbGVyXG4gICAqIEBwYXJhbSBlIC0gS2V5Ym9hcmRFdmVudFxuICAgKi9cbiAgcHJpdmF0ZSBvbkVzY2FwZUV2ZW50SGFuZGxlciA9IGUgPT4ge1xuICAgIGlmIChlLmtleUNvZGUgPT09IDI3ICYmICF0aGlzLmlzT3B0aW9uc0hpZGRlbigpKSB7IC8vIEVzYyBrZXkgcHJlc3NlZFxuICAgICAgICB0aGlzLmNsZWFyT3B0aW9ucygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBcHBlbmQgaW5maW5pdGUgYXV0b2NvbXBsZXRlIG1haW4gd3JhcHBlciBjbGFzc05hbWVcbiAgICovXG4gIHByaXZhdGUgYXBwZW5kSW5maW5pdGVBdXRvY29tcGxldGVXcmFwcGVyQ2xhc3MgPSAoKSA9PiB7XG4gICAgaWYgKCF0aGlzLmVsZW1lbnQuY2xhc3NOYW1lIHx8IHRoaXMuZWxlbWVudC5jbGFzc05hbWUuaW5kZXhPZihgaW5maW5pdGUtYXV0b2NvbXBsZXRlLXdyYXBwZXJgKSA9PT0gLTEpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc05hbWUgPSB0aGlzLmVsZW1lbnRcbiAgICAgICAgLmNsYXNzTmFtZVxuICAgICAgICAuc3BsaXQoYCBgKVxuICAgICAgICAuY29uY2F0KFtgaW5maW5pdGUtYXV0b2NvbXBsZXRlLXdyYXBwZXJgXSlcbiAgICAgICAgLmZpbHRlcihjID0+IGMpXG4gICAgICAgIC5qb2luKGAgYCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0IGN1cnJlbnQgcGFnZVxuICAgKi9cbiAgcHJpdmF0ZSByZXNldEN1cnJlbnRQYWdlID0gKCkgPT4ge1xuICAgIHRoaXMucGFnZSA9IDE7XG4gIH1cblxuICAvKipcbiAgICogTGluayBpbnB1dCBjb21wb25lbnQgaW50byB0aGUgaW5wdXQgd3JhcHBlclxuICAgKi9cbiAgcHJpdmF0ZSBsaW5rSW5wdXRDb21wb25lbnQgPSAoKSA9PiB7XG4gICAgbGV0IGlucHV0V3JhcHBlckVsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGlucHV0V3JhcHBlckVsZS5jbGFzc05hbWUgPSBgaW5maW5pdGUtYXV0b2NvbXBsZXRlLWlucHV0LXdyYXBwZXJgO1xuICAgIGlucHV0V3JhcHBlckVsZS5pbm5lckhUTUwgPSB0aGlzLmlucHV0Q29tcG9uZW50LnJlbmRlcigpO1xuICAgIGxldCBpbnB1dEVsZSA9IGlucHV0V3JhcHBlckVsZS5xdWVyeVNlbGVjdG9yKGBpbnB1dGApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgaWYgKCFpbnB1dEVsZSkge1xuICAgICAgdGhyb3cgTWlzc2luZ0lucHV0RWxlbWVudEluSW5wdXRDb21wb25lbnRFeGNlcHRpb25Nc2c7XG4gICAgfVxuICAgIGlucHV0RWxlXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcihgaW5wdXRgLCB0aGlzLm9uSW5wdXRDaGFuZ2UpO1xuICAgIC8vICgjMikgU3RhcnQgdG8gc2hvdyBvcHRpb25zIHdoZW4gZm9jdXMgb24gdGhlIGlucHV0XG4gICAgaW5wdXRFbGVcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKGBjbGlja2AsIHRoaXMub25JbnB1dENoYW5nZSk7XG4gICAgaW5wdXRFbGVcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKGBrZXlkb3duYCwgdGhpcy5vbktleVByZXNzZWQpO1xuICAgIGlmICh0aGlzLmNvbmZpZy52YWx1ZSkge1xuICAgICAgaW5wdXRFbGUudmFsdWUgPSB0aGlzLmNvbmZpZy52YWx1ZTtcbiAgICB9XG5cbiAgICBsZXQgc3Bpbm5lckVsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIHNwaW5uZXJFbGUuY2xhc3NOYW1lID0gYGluZmluaXRlLWF1dG9jb21wbGV0ZS1zcGlubmVyYDtcbiAgICBpbnB1dFdyYXBwZXJFbGUuYXBwZW5kQ2hpbGQoc3Bpbm5lckVsZSk7XG5cbiAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoaW5wdXRXcmFwcGVyRWxlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPbiBrZXlkb3duIHByZXNzaW5nIGluIGlucHV0IGVsZW1lbnRcbiAgICogQHBhcmFtIGtleWRvd25FdmVudCAtIHByZXNzaW5nIGtleSBldmVudFxuICAgKi9cbiAgcHJpdmF0ZSBvbktleVByZXNzZWQgPSAoa2V5ZG93bkV2ZW50OiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgaWYgKCF0aGlzLmlzT3B0aW9uc0hpZGRlbigpKSB7XG4gICAgICBsZXQgY3VycmVudEhvdmVyZWQgPSB0aGlzLmdldE5hdmlnYXRpb25JbmRleCgpO1xuICAgICAgaWYgKGN1cnJlbnRIb3ZlcmVkID09PSAtMSkge1xuICAgICAgICBpZiAoa2V5ZG93bkV2ZW50LmtleUNvZGUgPT09IEtFWV9QUkVTU19TVEFURVMuRE9XTikge1xuICAgICAgICAgIHRoaXMudG9nZ2xlSG92ZXJlZFN0YXRlKDAsIGtleWRvd25FdmVudCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN3aXRjaCAoa2V5ZG93bkV2ZW50LmtleUNvZGUpIHtcbiAgICAgICAgICBjYXNlIEtFWV9QUkVTU19TVEFURVMuRE9XTjpcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlSG92ZXJlZFN0YXRlKGN1cnJlbnRIb3ZlcmVkICsgMSwga2V5ZG93bkV2ZW50KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgS0VZX1BSRVNTX1NUQVRFUy5VUDpcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlSG92ZXJlZFN0YXRlKGN1cnJlbnRIb3ZlcmVkIC0gMSwga2V5ZG93bkV2ZW50KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgS0VZX1BSRVNTX1NUQVRFUy5FTlRFUjpcbiAgICAgICAgICAgIHRoaXMuY2xpY2tPbkhvdmVyZWQoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDbGljayBvbiBob3ZlcmVkIGVsZW1lbnRcbiAgICovXG4gIHByaXZhdGUgY2xpY2tPbkhvdmVyZWQgPSAoKSA9PiB7XG4gICAgbGV0IG9wdGlvbnNMaXN0ID0gdGhpcy5nZXRPcHRpb25zQmFzZUVsZW1lbnQoKTtcbiAgICBsZXQgaG92ZXJlZEVsZW1lbnQgPSBvcHRpb25zTGlzdC5xdWVyeVNlbGVjdG9yKGAuJHtIT1ZFUkVEfWApIGFzIEhUTUxFbGVtZW50O1xuICAgIGlmIChob3ZlcmVkRWxlbWVudCkgeyBob3ZlcmVkRWxlbWVudC5jbGljaygpOyB9XG4gIH1cblxuICAvKipcbiAgICogU2ltdWxhdGUgU2Nyb2xsZWQgdG8gYm90dG9tXG4gICAqL1xuICBwcml2YXRlIHNpbXVsYXRlU2Nyb2xsVG9Cb3R0b20gPSAoKSA9PiB7XG4gICAgbGV0IG9wdGlvbnNMaXN0ID0gdGhpcy5nZXRPcHRpb25zQmFzZUVsZW1lbnQoKTtcbiAgICBsZXQgc2Nyb2xsRXZlbnQgPSBuZXcgRXZlbnQoXCJzY3JvbGxcIiwgeyBidWJibGVzOiB0cnVlIH0pO1xuICAgIG9wdGlvbnNMaXN0LnNjcm9sbFRvcCA9IDEwMDAwOyAvLyBTaW11bGF0ZSByZWFjaGVkIGJvdHRvbVxuICAgIG9wdGlvbnNMaXN0LmRpc3BhdGNoRXZlbnQoc2Nyb2xsRXZlbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZSBob3ZlcmVkIHN0YXRlIG9uIHNwZWNpZmljIGluZGV4IGluIG9wdGlvbnMgbGlzdFxuICAgKiBAcGFyYW0gaW5kZXggLSBUaGUgaW5kZXggdG8gYmUgYXBwbGllZCBhcyBob3ZlcmVkXG4gICAqL1xuICBwcml2YXRlIHRvZ2dsZUhvdmVyZWRTdGF0ZSA9IChpbmRleDogbnVtYmVyLCBrZXlkb3duRXZlbnQ6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICBsZXQgb3B0aW9uc0xpc3QgPSB0aGlzLmdldE9wdGlvbnNCYXNlRWxlbWVudCgpO1xuICAgIGlmIChpbmRleCA9PT0gb3B0aW9uc0xpc3QuY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICB0aGlzLnNpbXVsYXRlU2Nyb2xsVG9Cb3R0b20oKTtcbiAgICB9XG5cbiAgICBpZiAoaW5kZXggPj0gMCAmJiBpbmRleCA8IG9wdGlvbnNMaXN0LmNoaWxkcmVuLmxlbmd0aCkge1xuXG4gICAgICBsZXQgaG92ZXJlZEVsZW1lbnQgPSBvcHRpb25zTGlzdC5xdWVyeVNlbGVjdG9yKGAuJHtIT1ZFUkVEfWApO1xuICAgICAgaWYgKGhvdmVyZWRFbGVtZW50KSB7XG4gICAgICAgIGhvdmVyZWRFbGVtZW50LmNsYXNzTmFtZSA9IGhvdmVyZWRFbGVtZW50XG4gICAgICAgICAgLmNsYXNzTmFtZVxuICAgICAgICAgIC5zcGxpdChcIiBcIilcbiAgICAgICAgICAuZmlsdGVyKGUgPT4gZSAhPT0gSE9WRVJFRClcbiAgICAgICAgICAuam9pbihcIiBcIilcbiAgICAgICAgICAudHJpbSgpO1xuICAgICAgfVxuXG4gICAgICBsZXQgdGFyZ2V0RWxlbWVudCA9IG9wdGlvbnNMaXN0LmNoaWxkcmVuW2luZGV4XSBhcyBIVE1MRWxlbWVudDtcbiAgICAgIHRhcmdldEVsZW1lbnQuY2xhc3NOYW1lICs9IGAgJHtIT1ZFUkVEfWA7XG5cbiAgICAgIC8vIElmIGhvdmVyZWQgaXMgbm90IGluIHRoZSBzY3JvbGxhYmxlIHZpZXdcbiAgICAgIGlmICh0YXJnZXRFbGVtZW50Lm9mZnNldFRvcCA8IG9wdGlvbnNMaXN0LnNjcm9sbFRvcCB8fCAoXG4gICAgICAgICAgdGFyZ2V0RWxlbWVudC5vZmZzZXRUb3AgLSBvcHRpb25zTGlzdC5zY3JvbGxUb3AgPiBvcHRpb25zTGlzdC5jbGllbnRIZWlnaHQpKSB7XG4gICAgICAgIHN3aXRjaCAoa2V5ZG93bkV2ZW50LmtleUNvZGUpIHtcbiAgICAgICAgICBjYXNlIEtFWV9QUkVTU19TVEFURVMuVVA6XG4gICAgICAgICAgICB0YXJnZXRFbGVtZW50LnNjcm9sbEludG9WaWV3KHRydWUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBLRVlfUFJFU1NfU1RBVEVTLkRPV046XG4gICAgICAgICAgICB0YXJnZXRFbGVtZW50LnNjcm9sbEludG9WaWV3KGZhbHNlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdldCBuYXZpZ2F0aW9uIGluZGV4IGlmIG9wdGlvbnMgaXMgb3BlblxuICAgKiBAcmV0dXJucyBPcHRpb25zIGN1cnJlbnQgaW5kZXhcbiAgICovXG4gIHByaXZhdGUgZ2V0TmF2aWdhdGlvbkluZGV4ID0gKCkgPT4ge1xuICAgIGxldCBvcHRpb25zTGlzdCA9IHRoaXMuZ2V0T3B0aW9uc0Jhc2VFbGVtZW50KCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRpb25zTGlzdC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IG9wdGlvbiA9IG9wdGlvbnNMaXN0LmNoaWxkcmVuW2ldO1xuICAgICAgaWYgKG9wdGlvbi5jbGFzc05hbWUuaW5kZXhPZihIT1ZFUkVEKSAhPT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIGk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIC0xO1xuICB9XG5cbiAgLyoqXG4gICAqIElucHV0IGNvbXBvbmVudCBgY2hhbmdlYCBldmVudCBoYW5kbGVyXG4gICAqIEBwYXJhbSBpbnB1dENoYW5nZUV2ZW50IC0gSW5wdXQgY2hhbmdlIGV2ZW50IGhhbmRsZXJcbiAgICovXG4gIHByaXZhdGUgb25JbnB1dENoYW5nZSA9IGFzeW5jIChpbnB1dENoYW5nZUV2ZW50OiBFdmVudCkgPT4ge1xuICAgIGxldCB0YXJnZXQgPSBpbnB1dENoYW5nZUV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAvLyBJZiB1c2VyIHBhc3Mgc3BlY2lhbCBiZWhhdmlvciBmb3IgdHlwaW5nIHZpYSBjb25maWd1cmF0aW9uXG4gICAgaWYgKHRoaXMuaW5wdXRDb21wb25lbnQub25JbnB1dENoYW5nZSkge1xuICAgICAgdGhpcy5pbnB1dENvbXBvbmVudC5vbklucHV0Q2hhbmdlKHRhcmdldCwgdGFyZ2V0LnZhbHVlKTtcbiAgICB9XG4gICAgLy8gSWYgd2UgdHlwZSBhbHdheXMgZmV0Y2ggZGF0YSBhbmQgYnVpbGQgb3B0aW9uc1xuICAgIC8vIElmIHdlIGNsaWNrIG9uIGlucHV0IGFuZCB0aGUgb3B0aW9ucyBpcyBoaWRkZW4gYnVpbGQgdGhlIG9wdGlvbnNcbiAgICAvLyBJZiB3ZSBjbGljayBvbiBpbnB1dCBhbmQgdGhlIG9wdGlvbnMgaXMgYWxyZWFkeSBvcGVuZWQgZG9uJ3QgZG8gYW55dGhpbmdcbiAgICBpZiAoaW5wdXRDaGFuZ2VFdmVudC50eXBlID09PSBgaW5wdXRgIHx8XG4gICAgICAgICAgICAoaW5wdXRDaGFuZ2VFdmVudC50eXBlID09PSBgY2xpY2tgICYmIHRoaXMuaXNPcHRpb25zSGlkZGVuKCkpKSB7XG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCB0aGlzLmJ1aWxkT3B0aW9ucyh0YXJnZXQudmFsdWUsIHRydWUpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5vbkVycm9yKSB7XG4gICAgICAgICAgdGhpcy5jb25maWcub25FcnJvcihlcnJvcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTGluayBvcHRpb25zIGNvbXBvbmVudCBpbnRvIHRoZSBpbmZpbml0ZSBhdXRvY29tcGxldGUgY29tcG9uZW50XG4gICAqL1xuICBwcml2YXRlIGxpbmtPcHRpb25zQ29tcG9uZW50ID0gKCkgPT4ge1xuICAgIGxldCBvcHRpb25zV3JhcHBlckVsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIG9wdGlvbnNXcmFwcGVyRWxlLmNsYXNzTmFtZSA9IGBpbmZpbml0ZS1hdXRvY29tcGxldGUtb3B0aW9ucy13cmFwcGVyYDtcbiAgICBvcHRpb25zV3JhcHBlckVsZS5pbm5lckhUTUwgPSB0aGlzLm9wdGlvbnNDb21wb25lbnQucmVuZGVyKCk7XG4gICAgbGV0IG9wdGlvbnNFbGUgPSBvcHRpb25zV3JhcHBlckVsZS5xdWVyeVNlbGVjdG9yKHRoaXMub3B0aW9uc0NvbXBvbmVudC5saXN0RWxlbWVudFNlbGVjdG9yKSBhcyBIVE1MRWxlbWVudDtcbiAgICB0aGlzLnNldEVsZW1lbnRWaXNpYmxpdHkob3B0aW9uc1dyYXBwZXJFbGUsIGZhbHNlKTtcbiAgICBvcHRpb25zRWxlLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWigwKVwiO1xuICAgIG9wdGlvbnNFbGUuc3R5bGUud2Via2l0VHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVaKDApXCI7XG4gICAgb3B0aW9uc0VsZS5zdHlsZS5vdmVyZmxvdyA9IGBzY3JvbGxgO1xuICAgIG9wdGlvbnNFbGUuc3R5bGUub3ZlcmZsb3dYID0gYGhpZGRlbmA7XG4gICAgb3B0aW9uc0VsZS5zdHlsZS5ib3JkZXIgPSBgMXB4IHNvbGlkICNiY2JjYmNgO1xuICAgIG9wdGlvbnNFbGUuc3R5bGUucGFkZGluZ0JvdHRvbSA9IGA1cHhgO1xuICAgIG9wdGlvbnNFbGUuc3R5bGUubWF4SGVpZ2h0ID0gdGhpcy5jb25maWcubWF4SGVpZ2h0IHx8IG51bGw7XG4gICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKG9wdGlvbnNXcmFwcGVyRWxlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBvcHRpb25zIHdyYXBwZXIgaGlkZGVuIG9yIG5vdFxuICAgKiBAcmV0dXJucyB0cnVlIGlmIGhpZGRlbiwgb3IgZWxzZSBmYWxzZVxuICAgKi9cbiAgcHJpdmF0ZSBpc09wdGlvbnNIaWRkZW4gPSAoKTogYm9vbGVhbiA9PiB7XG4gICAgbGV0IG9wdGlvbnNXcmFwcGVyID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYC5pbmZpbml0ZS1hdXRvY29tcGxldGUtb3B0aW9ucy13cmFwcGVyYCkgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICByZXR1cm4gb3B0aW9uc1dyYXBwZXIuY2xhc3NOYW1lXG4gICAgICAuaW5kZXhPZihgaW5maW5pdGUtYXV0b2NvbXBsZXRlLWhpZGRlbi1lbGVtZW50YCkgPiAtMTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBcHBseSB0aGUgc3R5bGUgcnVsZXMgZm9yIHRoZSBpbmZpbml0ZSBhdXRvY29tcGxldGUgcGx1Z2luIGFuZCBpdCdzIGNvbXBvbmVudHNcbiAgICovXG4gIHByaXZhdGUgYXBwbHlTdHlsZXNSdWxlcyA9ICgpID0+IHtcblxuICAgIC8vIE1haW4gd3JhcHBlciBzdHlsZSBydWxlc1xuICAgIGxldCBpc01haW5XcmFwcGVyU3R5bGVBcHBsaWVkID0gZG9jdW1lbnQuaGVhZC5xdWVyeVNlbGVjdG9yKFwiI2luZmluaXRlLWF1dG9jb21wbGV0ZS13cmFwcGVyLXN0eWxlXCIpO1xuICAgIGlmICghaXNNYWluV3JhcHBlclN0eWxlQXBwbGllZCkge1xuICAgICAgbGV0IG1haW5XcmFwcGVyU3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gICAgICBtYWluV3JhcHBlclN0eWxlLmlkID0gXCJpbmZpbml0ZS1hdXRvY29tcGxldGUtd3JhcHBlci1zdHlsZVwiO1xuICAgICAgbWFpbldyYXBwZXJTdHlsZS5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgLmluZmluaXRlLWF1dG9jb21wbGV0ZS13cmFwcGVyIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIH1cbiAgICAgIGA7XG4gICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKG1haW5XcmFwcGVyU3R5bGUpO1xuICAgIH1cblxuICAgIC8vIEhpZGRlbiBlbGVtZW50IHN0eWxlIHJ1bGVzXG4gICAgbGV0IGlzSGlkZGVuU3R5bGVBcHBsaWVkID0gZG9jdW1lbnQuaGVhZC5xdWVyeVNlbGVjdG9yKFwiI2luZmluaXRlLWF1dG9jb21wbGV0ZS1oaWRkZW4tc3R5bGVcIik7XG4gICAgaWYgKCFpc0hpZGRlblN0eWxlQXBwbGllZCkge1xuICAgICAgbGV0IGhpZGRlblN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICAgICAgaGlkZGVuU3R5bGUuaWQgPSBcImluZmluaXRlLWF1dG9jb21wbGV0ZS1oaWRkZW4tc3R5bGVcIjtcbiAgICAgIGhpZGRlblN0eWxlLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAuaW5maW5pdGUtYXV0b2NvbXBsZXRlLWhpZGRlbi1lbGVtZW50IHtcbiAgICAgICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgICB9XG4gICAgICBgO1xuICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChoaWRkZW5TdHlsZSk7XG4gICAgfVxuXG4gICAgLy8gRGVmYXVsdHMgc3R5bGUgcnVsZXNcbiAgICBsZXQgaXNEZWZhdWx0c1N0eWxlQXBwbGllZCA9IGRvY3VtZW50LmhlYWQucXVlcnlTZWxlY3RvcihcIiNpbmZpbml0ZS1hdXRvY29tcGxldGUtZGVmYXVsdHMtc3R5bGVcIik7XG4gICAgaWYgKCFpc0RlZmF1bHRzU3R5bGVBcHBsaWVkKSB7XG4gICAgICBsZXQgZGVmYXVsdHNTdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgICAgIGRlZmF1bHRzU3R5bGUuaWQgPSBcImluZmluaXRlLWF1dG9jb21wbGV0ZS1kZWZhdWx0cy1zdHlsZVwiO1xuICAgICAgZGVmYXVsdHNTdHlsZS5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgLmluZmluaXRlLWF1dG9jb21wbGV0ZS1pbnB1dC13cmFwcGVyIC5pbmZpbml0ZS1hdXRvY29tcGxldGUtZGVmYXVsdC1pbnB1dCB7XG4gICAgICAgICAgICAgIGhlaWdodDogMjhweDtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDE1cHggLTRweCB0cmFuc3BhcmVudDtcbiAgICAgICAgICB9XG4gICAgICAgICAgIC5pbmZpbml0ZS1hdXRvY29tcGxldGUtaW5wdXQtd3JhcHBlciAuaW5maW5pdGUtYXV0b2NvbXBsZXRlLXNwaW5uZXIge1xuICAgICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICAgICAgICAgIHdpZHRoOiAzNXB4O1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMTVweCAtNHB4IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgdG9wOiAtM3B4O1xuICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyBjbGFzcz0nbGRzLXNwaW5uZXInIHdpZHRoPScyMDBweCcgaGVpZ2h0PScyMDBweCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgdmlld0JveD0nMCAwIDEwMCAxMDAnIHByZXNlcnZlQXNwZWN0UmF0aW89J3hNaWRZTWlkJyBzdHlsZT0nYmFja2dyb3VuZDogbm9uZTsnJTNFJTNDZyB0cmFuc2Zvcm09J3JvdGF0ZSgwIDUwIDUwKSclM0UlM0NyZWN0IHg9JzQ3JyB5PScyNCcgcng9JzkuNCcgcnk9JzQuOCcgd2lkdGg9JzYnIGhlaWdodD0nMTInIGZpbGw9JyUyMzFkMWIwYSclM0UlM0NhbmltYXRlIGF0dHJpYnV0ZU5hbWU9J29wYWNpdHknIHZhbHVlcz0nMTswJyBrZXlUaW1lcz0nMDsxJyBkdXI9JzFzJyBiZWdpbj0nLTAuOTE2NjY2NjY2NjY2NjY2NnMnIHJlcGVhdENvdW50PSdpbmRlZmluaXRlJyUzRSUzQy9hbmltYXRlJTNFJTNDL3JlY3QlM0UlM0MvZyUzRSUzQ2cgdHJhbnNmb3JtPSdyb3RhdGUoMzAgNTAgNTApJyUzRSUzQ3JlY3QgeD0nNDcnIHk9JzI0JyByeD0nOS40JyByeT0nNC44JyB3aWR0aD0nNicgaGVpZ2h0PScxMicgZmlsbD0nJTIzMWQxYjBhJyUzRSUzQ2FuaW1hdGUgYXR0cmlidXRlTmFtZT0nb3BhY2l0eScgdmFsdWVzPScxOzAnIGtleVRpbWVzPScwOzEnIGR1cj0nMXMnIGJlZ2luPSctMC44MzMzMzMzMzMzMzMzMzM0cycgcmVwZWF0Q291bnQ9J2luZGVmaW5pdGUnJTNFJTNDL2FuaW1hdGUlM0UlM0MvcmVjdCUzRSUzQy9nJTNFJTNDZyB0cmFuc2Zvcm09J3JvdGF0ZSg2MCA1MCA1MCknJTNFJTNDcmVjdCB4PSc0NycgeT0nMjQnIHJ4PSc5LjQnIHJ5PSc0LjgnIHdpZHRoPSc2JyBoZWlnaHQ9JzEyJyBmaWxsPSclMjMxZDFiMGEnJTNFJTNDYW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSdvcGFjaXR5JyB2YWx1ZXM9JzE7MCcga2V5VGltZXM9JzA7MScgZHVyPScxcycgYmVnaW49Jy0wLjc1cycgcmVwZWF0Q291bnQ9J2luZGVmaW5pdGUnJTNFJTNDL2FuaW1hdGUlM0UlM0MvcmVjdCUzRSUzQy9nJTNFJTNDZyB0cmFuc2Zvcm09J3JvdGF0ZSg5MCA1MCA1MCknJTNFJTNDcmVjdCB4PSc0NycgeT0nMjQnIHJ4PSc5LjQnIHJ5PSc0LjgnIHdpZHRoPSc2JyBoZWlnaHQ9JzEyJyBmaWxsPSclMjMxZDFiMGEnJTNFJTNDYW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSdvcGFjaXR5JyB2YWx1ZXM9JzE7MCcga2V5VGltZXM9JzA7MScgZHVyPScxcycgYmVnaW49Jy0wLjY2NjY2NjY2NjY2NjY2NjZzJyByZXBlYXRDb3VudD0naW5kZWZpbml0ZSclM0UlM0MvYW5pbWF0ZSUzRSUzQy9yZWN0JTNFJTNDL2clM0UlM0NnIHRyYW5zZm9ybT0ncm90YXRlKDEyMCA1MCA1MCknJTNFJTNDcmVjdCB4PSc0NycgeT0nMjQnIHJ4PSc5LjQnIHJ5PSc0LjgnIHdpZHRoPSc2JyBoZWlnaHQ9JzEyJyBmaWxsPSclMjMxZDFiMGEnJTNFJTNDYW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSdvcGFjaXR5JyB2YWx1ZXM9JzE7MCcga2V5VGltZXM9JzA7MScgZHVyPScxcycgYmVnaW49Jy0wLjU4MzMzMzMzMzMzMzMzMzRzJyByZXBlYXRDb3VudD0naW5kZWZpbml0ZSclM0UlM0MvYW5pbWF0ZSUzRSUzQy9yZWN0JTNFJTNDL2clM0UlM0NnIHRyYW5zZm9ybT0ncm90YXRlKDE1MCA1MCA1MCknJTNFJTNDcmVjdCB4PSc0NycgeT0nMjQnIHJ4PSc5LjQnIHJ5PSc0LjgnIHdpZHRoPSc2JyBoZWlnaHQ9JzEyJyBmaWxsPSclMjMxZDFiMGEnJTNFJTNDYW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSdvcGFjaXR5JyB2YWx1ZXM9JzE7MCcga2V5VGltZXM9JzA7MScgZHVyPScxcycgYmVnaW49Jy0wLjVzJyByZXBlYXRDb3VudD0naW5kZWZpbml0ZSclM0UlM0MvYW5pbWF0ZSUzRSUzQy9yZWN0JTNFJTNDL2clM0UlM0NnIHRyYW5zZm9ybT0ncm90YXRlKDE4MCA1MCA1MCknJTNFJTNDcmVjdCB4PSc0NycgeT0nMjQnIHJ4PSc5LjQnIHJ5PSc0LjgnIHdpZHRoPSc2JyBoZWlnaHQ9JzEyJyBmaWxsPSclMjMxZDFiMGEnJTNFJTNDYW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSdvcGFjaXR5JyB2YWx1ZXM9JzE7MCcga2V5VGltZXM9JzA7MScgZHVyPScxcycgYmVnaW49Jy0wLjQxNjY2NjY2NjY2NjY2NjdzJyByZXBlYXRDb3VudD0naW5kZWZpbml0ZSclM0UlM0MvYW5pbWF0ZSUzRSUzQy9yZWN0JTNFJTNDL2clM0UlM0NnIHRyYW5zZm9ybT0ncm90YXRlKDIxMCA1MCA1MCknJTNFJTNDcmVjdCB4PSc0NycgeT0nMjQnIHJ4PSc5LjQnIHJ5PSc0LjgnIHdpZHRoPSc2JyBoZWlnaHQ9JzEyJyBmaWxsPSclMjMxZDFiMGEnJTNFJTNDYW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSdvcGFjaXR5JyB2YWx1ZXM9JzE7MCcga2V5VGltZXM9JzA7MScgZHVyPScxcycgYmVnaW49Jy0wLjMzMzMzMzMzMzMzMzMzMzNzJyByZXBlYXRDb3VudD0naW5kZWZpbml0ZSclM0UlM0MvYW5pbWF0ZSUzRSUzQy9yZWN0JTNFJTNDL2clM0UlM0NnIHRyYW5zZm9ybT0ncm90YXRlKDI0MCA1MCA1MCknJTNFJTNDcmVjdCB4PSc0NycgeT0nMjQnIHJ4PSc5LjQnIHJ5PSc0LjgnIHdpZHRoPSc2JyBoZWlnaHQ9JzEyJyBmaWxsPSclMjMxZDFiMGEnJTNFJTNDYW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSdvcGFjaXR5JyB2YWx1ZXM9JzE7MCcga2V5VGltZXM9JzA7MScgZHVyPScxcycgYmVnaW49Jy0wLjI1cycgcmVwZWF0Q291bnQ9J2luZGVmaW5pdGUnJTNFJTNDL2FuaW1hdGUlM0UlM0MvcmVjdCUzRSUzQy9nJTNFJTNDZyB0cmFuc2Zvcm09J3JvdGF0ZSgyNzAgNTAgNTApJyUzRSUzQ3JlY3QgeD0nNDcnIHk9JzI0JyByeD0nOS40JyByeT0nNC44JyB3aWR0aD0nNicgaGVpZ2h0PScxMicgZmlsbD0nJTIzMWQxYjBhJyUzRSUzQ2FuaW1hdGUgYXR0cmlidXRlTmFtZT0nb3BhY2l0eScgdmFsdWVzPScxOzAnIGtleVRpbWVzPScwOzEnIGR1cj0nMXMnIGJlZ2luPSctMC4xNjY2NjY2NjY2NjY2NjY2NnMnIHJlcGVhdENvdW50PSdpbmRlZmluaXRlJyUzRSUzQy9hbmltYXRlJTNFJTNDL3JlY3QlM0UlM0MvZyUzRSUzQ2cgdHJhbnNmb3JtPSdyb3RhdGUoMzAwIDUwIDUwKSclM0UlM0NyZWN0IHg9JzQ3JyB5PScyNCcgcng9JzkuNCcgcnk9JzQuOCcgd2lkdGg9JzYnIGhlaWdodD0nMTInIGZpbGw9JyUyMzFkMWIwYSclM0UlM0NhbmltYXRlIGF0dHJpYnV0ZU5hbWU9J29wYWNpdHknIHZhbHVlcz0nMTswJyBrZXlUaW1lcz0nMDsxJyBkdXI9JzFzJyBiZWdpbj0nLTAuMDgzMzMzMzMzMzMzMzMzMzNzJyByZXBlYXRDb3VudD0naW5kZWZpbml0ZSclM0UlM0MvYW5pbWF0ZSUzRSUzQy9yZWN0JTNFJTNDL2clM0UlM0NnIHRyYW5zZm9ybT0ncm90YXRlKDMzMCA1MCA1MCknJTNFJTNDcmVjdCB4PSc0NycgeT0nMjQnIHJ4PSc5LjQnIHJ5PSc0LjgnIHdpZHRoPSc2JyBoZWlnaHQ9JzEyJyBmaWxsPSclMjMxZDFiMGEnJTNFJTNDYW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSdvcGFjaXR5JyB2YWx1ZXM9JzE7MCcga2V5VGltZXM9JzA7MScgZHVyPScxcycgYmVnaW49JzBzJyByZXBlYXRDb3VudD0naW5kZWZpbml0ZSclM0UlM0MvYW5pbWF0ZSUzRSUzQy9yZWN0JTNFJTNDL2clM0UlM0Mvc3ZnJTNFXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaW5maW5pdGUtYXV0b2NvbXBsZXRlLWlucHV0LXdyYXBwZXIgLmluZmluaXRlLWF1dG9jb21wbGV0ZS1zcGlubmVyLmxvYWRpbmcge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaW5maW5pdGUtYXV0b2NvbXBsZXRlLW9wdGlvbnMtd3JhcHBlciAuaW5maW5pdGUtYXV0b2NvbXBsZXRlLWRlZmF1bHQtb3B0aW9ucyB7XG4gICAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaW5maW5pdGUtYXV0b2NvbXBsZXRlLW9wdGlvbnMtd3JhcHBlciAuaW5maW5pdGUtYXV0b2NvbXBsZXRlLWRlZmF1bHQtb3B0aW9ucyBsaSB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4IDEwcHggMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmluZmluaXRlLWF1dG9jb21wbGV0ZS1vcHRpb25zLXdyYXBwZXIgLmluZmluaXRlLWF1dG9jb21wbGV0ZS1kZWZhdWx0LW9wdGlvbnMgbGkuaG92ZXJlZCB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNkNWViZmY7XG4gICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cbiAgICAgIGA7XG4gICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGRlZmF1bHRzU3R5bGUpO1xuICAgIH1cblxuICAgIC8vIElucHV0IHN0eWxlIHJ1bGVzXG4gICAgbGV0IGlzSW5wdXRTdHlsZUFwcGxpZWQgPSBkb2N1bWVudC5oZWFkLnF1ZXJ5U2VsZWN0b3IoXCIjaW5maW5pdGUtYXV0b2NvbXBsZXRlLWlucHV0LXN0eWxlXCIpO1xuICAgIGlmICghaXNJbnB1dFN0eWxlQXBwbGllZCkge1xuICAgICAgbGV0IGlucHV0U3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gICAgICBpbnB1dFN0eWxlLmlkID0gXCJpbmZpbml0ZS1hdXRvY29tcGxldGUtaW5wdXQtc3R5bGVcIjtcbiAgICAgIGlucHV0U3R5bGUuaW5uZXJIVE1MID0gYFxuICAgICAgICAgIC5pbmZpbml0ZS1hdXRvY29tcGxldGUtaW5wdXQtd3JhcHBlciBpbnB1dCB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgIGA7XG4gICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGlucHV0U3R5bGUpO1xuICAgIH1cblxuICAgIC8vIE9wdGlvbnMgc3R5bGUgcnVsZXNcbiAgICBsZXQgaXNPcHRpb25zU3R5bGVBcHBsaWVkID0gZG9jdW1lbnQuaGVhZC5xdWVyeVNlbGVjdG9yKFwiI2luZmluaXRlLWF1dG9jb21wbGV0ZS1vcHRpb25zLXN0eWxlXCIpO1xuICAgIGlmICghaXNPcHRpb25zU3R5bGVBcHBsaWVkKSB7XG4gICAgICBsZXQgb3B0aW9uc1N0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICAgICAgb3B0aW9uc1N0eWxlLmlkID0gYGluZmluaXRlLWF1dG9jb21wbGV0ZS1vcHRpb25zLXN0eWxlYDtcbiAgICAgIG9wdGlvbnNTdHlsZS5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgLmluZmluaXRlLWF1dG9jb21wbGV0ZS1vcHRpb25zLXdyYXBwZXIge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICB9XG4gICAgICBgO1xuICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChvcHRpb25zU3R5bGUpO1xuICAgIH1cblxuICAgIC8vIFNjcm9sbGJhciBzdHlsZSBydWxlc1xuICAgIGxldCBpc1Njcm9sbGJhclN0eWxlQXBwbGllZCA9IGRvY3VtZW50LmhlYWQucXVlcnlTZWxlY3RvcihcIiNpbmZpbml0ZS1hdXRvY29tcGxldGUtc2Nyb2xsYmFyLXN0eWxlXCIpO1xuICAgIGlmICghaXNTY3JvbGxiYXJTdHlsZUFwcGxpZWQpIHtcbiAgICAgIGxldCBzcGVjaWFsU2Nyb2xsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICAgICAgc3BlY2lhbFNjcm9sbC5pZCA9IFwiaW5maW5pdGUtYXV0b2NvbXBsZXRlLXNjcm9sbGJhci1zdHlsZVwiO1xuICAgICAgc3BlY2lhbFNjcm9sbC5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgLmluZmluaXRlLWF1dG9jb21wbGV0ZS13cmFwcGVyIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IDRweDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5pbmZpbml0ZS1hdXRvY29tcGxldGUtd3JhcHBlciA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsMCwwLDAuMyk7XG4gICAgICAgICAgICAgICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmluZmluaXRlLWF1dG9jb21wbGV0ZS13cmFwcGVyIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC44KTtcbiAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsMCwwLDAuNSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmluZmluaXRlLWF1dG9jb21wbGV0ZS13cmFwcGVyIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6d2luZG93LWluYWN0aXZlIHtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDAsMCwwLjQpO1xuICAgICAgICAgICAgICB9XG4gICAgICBgO1xuICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzcGVjaWFsU2Nyb2xsKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQmluZHMgYSBzY3JvbGwgZXZlbnQgaGFuZGxlciBvbiB0aGUgb3B0aW9uc1xuICAgKi9cbiAgcHJpdmF0ZSBiaW5kU2Nyb2xsUmVhY2hCb3R0b21FdmVudCA9ICgpID0+IHtcbiAgICBsZXQgb3B0aW9uc0VsZSA9IHRoaXMuZ2V0T3B0aW9uc0Jhc2VFbGVtZW50KCk7XG4gICAgb3B0aW9uc0VsZS5hZGRFdmVudExpc3RlbmVyKGBzY3JvbGxgLCB0aGlzLnNjcm9sbFJlYWNoZWRCb3R0b21IYW5kbGVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTY3JvbGwgcmVhY2hlZCBib3R0b20gaGFuZGxlclxuICAgKiBAcGFyYW0gZSAtIFNjcm9sbCBldmVudCBvYmplY3RcbiAgICovXG4gIHByaXZhdGUgc2Nyb2xsUmVhY2hlZEJvdHRvbUhhbmRsZXIgPSBhc3luYyAoZTogRXZlbnQpID0+IHtcbiAgICBsZXQgb3B0aW9uc0VsZSA9IGUuY3VycmVudFRhcmdldCBhcyBIVE1MRWxlbWVudDtcbiAgICBpZiAoIXRoaXMuZmV0Y2hpbmdEYXRhICYmICF0aGlzLnByZXZlbnRNb3JlUmVxdWVzdHMgJiYgIXRoaXMuaXNPcHRpb25zSGlkZGVuKCkpIHtcbiAgICAgIGlmIChvcHRpb25zRWxlLnNjcm9sbFRvcCArIG9wdGlvbnNFbGUuY2xpZW50SGVpZ2h0ID49IG9wdGlvbnNFbGUuc2Nyb2xsSGVpZ2h0KSB7XG4gICAgICAgIHRoaXMucGFnZSsrO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGF3YWl0IHRoaXMuYnVpbGRPcHRpb25zKFxuICAgICAgICAgICAgdGhpcy5nZXRJbnB1dEVsZW1lbnQoKS52YWx1ZSxcbiAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgaWYgKHRoaXMuY29uZmlnLm9uRXJyb3IpIHtcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLm9uRXJyb3IoZXJyb3IpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhcnMgdGhlIG9wdGlvbnMgbGlzdCB0YWcgd2l0aCByZW1vdmluZyB0aGUgY2xpY2sgZXZlbnQgaGFuZGxlcnNcbiAgICogdW5iaW5kIHRoZSBgc2Nyb2xsYCBldmVudCBmcm9tIHRoZSBvcHRpb25zXG4gICAqIChHYXJiYWdlIGNvbGxlY3RpbmcpXG4gICAqL1xuICBwcml2YXRlIGNsZWFyT3B0aW9ucyA9ICgpID0+IHtcbiAgICB0aGlzLmRldGFjaE9wdGlvbkV2ZW50SGFuZGxlcnMoXG4gICAgICB0aGlzLmdldE9wdGlvbnNCYXNlRWxlbWVudCgpXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKGBbaW5maW5pdGUtY2xpY2thYmxlXWApLFxuICAgICk7XG4gICAgdGhpcy5yZXNldEN1cnJlbnRQYWdlKCk7XG4gICAgdGhpcy5wcmV2ZW50TW9yZVJlcXVlc3RzID0gZmFsc2U7XG5cbiAgICBsZXQgb3B0aW9uTGlzdEVsZW1lbnQgPSB0aGlzLmdldE9wdGlvbnNCYXNlRWxlbWVudCgpO1xuXG4gICAgdGhpcy5zZXRFbGVtZW50VmlzaWJsaXR5KFxuICAgICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYC5pbmZpbml0ZS1hdXRvY29tcGxldGUtb3B0aW9ucy13cmFwcGVyYCkgYXMgSFRNTEVsZW1lbnQsXG4gICAgICBmYWxzZSxcbiAgICApO1xuICAgIG9wdGlvbkxpc3RFbGVtZW50LmlubmVySFRNTCA9IGBgO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGVsZW1lbnQgdmlzaWJsaXR5XG4gICAqIEBwYXJhbSBlbGVtZW50IC0gSFRNTEVsZW1lbnRcbiAgICogQHBhcmFtIHZpc2libGUgLSB2aXNpYmlsaXR5IHN0YXR1c1xuICAgKi9cbiAgcHJpdmF0ZSBzZXRFbGVtZW50VmlzaWJsaXR5KGVsZW1lbnQ6IEhUTUxFbGVtZW50LCB2aXNpYmxlOiBib29sZWFuKSB7XG4gICAgaWYgKHZpc2libGUpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gZWxlbWVudC5jbGFzc05hbWVcbiAgICAgICAgLnNwbGl0KFwiIFwiKVxuICAgICAgICAuZmlsdGVyKGUgPT4gZSAhPT0gYGluZmluaXRlLWF1dG9jb21wbGV0ZS1oaWRkZW4tZWxlbWVudGApXG4gICAgICAgIC5qb2luKFwiIFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGVsZW1lbnQuY2xhc3NOYW1lLmluZGV4T2YoYGluZmluaXRlLWF1dG9jb21wbGV0ZS1oaWRkZW4tZWxlbWVudGApID09PSAtMSkge1xuICAgICAgICBlbGVtZW50LmNsYXNzTmFtZSArPSBgIGluZmluaXRlLWF1dG9jb21wbGV0ZS1oaWRkZW4tZWxlbWVudGA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdldCBvcHRpb25zIGJhc2UgSFRNTEVsZW1lbnRcbiAgICogQHJldHVybnMgSFRNTEVsZW1lbnRcbiAgICovXG4gIHByaXZhdGUgZ2V0T3B0aW9uc0Jhc2VFbGVtZW50KCk6IEhUTUxFbGVtZW50IHtcbiAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICBsZXQgb3B0aW9uc1dyYXBwZXIgPSB0aGlzLmVsZW1lbnRcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoYC5pbmZpbml0ZS1hdXRvY29tcGxldGUtb3B0aW9ucy13cmFwcGVyYCk7XG4gICAgICBpZiAob3B0aW9uc1dyYXBwZXIpIHtcbiAgICAgICAgcmV0dXJuIG9wdGlvbnNXcmFwcGVyXG4gICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IodGhpcy5vcHRpb25zQ29tcG9uZW50Lmxpc3RFbGVtZW50U2VsZWN0b3IpIGFzIEhUTUxFbGVtZW50O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgb3B0aW9uc1dyYXBwZXJFeGNlcHRpb25Nc2c7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG9wdGlvbnNXcmFwcGVyRXhjZXB0aW9uTXNnO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRhY2hpbmcgdGhlIGV2ZW50IGhhbmRsZXJzIG92ZXIgdGhlIG9wdGlvbiBlbGVtZW50c1xuICAgKi9cbiAgcHJpdmF0ZSBkZXRhY2hPcHRpb25FdmVudEhhbmRsZXJzKGVsZW1lbnRzOiBOb2RlTGlzdE9mPEVsZW1lbnQ+KSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgZWxlbWVudHNbaV0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihgY2xpY2tgLCB0aGlzLm9uT3B0aW9uQ2xpY2tFdmVudCk7XG4gICAgICBlbGVtZW50c1tpXS5yZW1vdmVFdmVudExpc3RlbmVyKGBtb3VzZW92ZXJgLCB0aGlzLm9uT3B0aW9uSG92ZXJFdmVudCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE9wdGlvbiBjbGljayBldmVudCBoYW5kbGVyXG4gICAqIEBwYXJhbSBjbGlja0V2ZW50XG4gICAqL1xuICBwcml2YXRlIG9uT3B0aW9uQ2xpY2tFdmVudCA9IChjbGlja0V2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgaWYgKHRoaXMuY29uZmlnLm9uU2VsZWN0KSB7XG4gICAgICB0aGlzLmNvbmZpZy5vblNlbGVjdChjbGlja0V2ZW50LmN1cnJlbnRUYXJnZXQsIChjbGlja0V2ZW50LmN1cnJlbnRUYXJnZXQgYXMgYW55KS5kYXRhKTtcbiAgICB9XG4gICAgdGhpcy5jbGVhck9wdGlvbnMoKTtcbiAgICB0aGlzLnNldElucHV0KChjbGlja0V2ZW50LmN1cnJlbnRUYXJnZXQgYXMgYW55KS5kYXRhLnRleHQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBpbnB1dCBIVE1MIGVsZW1lbnQgYmVsb3cgaW5maW5pdGUtYXV0b2NvbXBsZXRlLWlucHV0LXdyYXBwZXJcbiAgICogQHJldHVybnMgSFRNTElucHV0RWxlbWVudFxuICAgKi9cbiAgcHJpdmF0ZSBnZXRJbnB1dEVsZW1lbnQoKTogSFRNTElucHV0RWxlbWVudCB7XG4gICAgaWYgKHRoaXMuZWxlbWVudCkge1xuICAgICAgbGV0IGlucHV0V3JhcHBlciA9IHRoaXMuZWxlbWVudFxuICAgICAgICAucXVlcnlTZWxlY3RvcihgLmluZmluaXRlLWF1dG9jb21wbGV0ZS1pbnB1dC13cmFwcGVyYCk7XG4gICAgICBpZiAoaW5wdXRXcmFwcGVyKSB7XG4gICAgICAgIHJldHVybiBpbnB1dFdyYXBwZXJcbiAgICAgICAgICAucXVlcnlTZWxlY3RvcihgaW5wdXRgKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgaW5wdXRFbGVtZW50RXhjZXB0aW9uTXNnO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBpbnB1dEVsZW1lbnRFeGNlcHRpb25Nc2c7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldCBpbnB1dCBzaG93biB0ZXh0XG4gICAqIEBwYXJhbSB0ZXh0XG4gICAqL1xuICBwcml2YXRlIHNldElucHV0KHRleHQ6IHN0cmluZykge1xuICAgIHRoaXMuZ2V0SW5wdXRFbGVtZW50KClcbiAgICAgIC52YWx1ZSA9IHRleHQ7XG4gIH1cblxuICBwcml2YXRlIGdldCBmZXRjaGluZ0RhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxGZXRjaGluZ0RhdGE7XG4gIH1cblxuICBwcml2YXRlIHNldCBmZXRjaGluZ0RhdGEobG9hZGluZ1N0YXRlKSB7XG4gICAgaWYgKHRoaXMuY29uZmlnLm9uTG9hZGluZ1N0YXRlQ2hhbmdlKSB7XG4gICAgICB0aGlzLmNvbmZpZy5vbkxvYWRpbmdTdGF0ZUNoYW5nZShsb2FkaW5nU3RhdGUpO1xuICAgIH1cbiAgICB0aGlzLmxvY2FsRmV0Y2hpbmdEYXRhID0gbG9hZGluZ1N0YXRlO1xuICAgIHRoaXMudG9nZ2xlTG9hZGluZ1N0YXRlKGxvYWRpbmdTdGF0ZSk7XG4gIH1cblxuICAgIHByaXZhdGUgdG9nZ2xlTG9hZGluZ1N0YXRlKGxvYWRpbmdTdGF0ZTogYm9vbGVhbikge1xuICAgICAgICBsZXQgZWxlbWVudCA9XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihgLmluZmluaXRlLWF1dG9jb21wbGV0ZS1zcGlubmVyYCkgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgIChsb2FkaW5nU3RhdGUpID9cbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImxvYWRpbmdcIikgOiBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJsb2FkaW5nXCIpO1xuICAgIH1cblxuICAvKipcbiAgICogR2V0IGRhdGEgYmFzZWQgb24gdGV4dCwgcGFnZSBhbmQgZmV0Y2hTaXplXG4gICAqIEBwYXJhbSB0ZXh0XG4gICAqIEBwYXJhbSBwYWdlXG4gICAqIEBwYXJhbSBmZXRjaFNpemVcbiAgICovXG4gIHByaXZhdGUgYXN5bmMgZ2V0RGF0YSh0ZXh0OiBzdHJpbmcsIHBhZ2U6IG51bWJlciwgZmV0Y2hTaXplOiBudW1iZXIpOiBQcm9taXNlPElPcHRpb25bXSB8IG51bGw+IHtcbiAgICB0aGlzLnNlYXJjaGVkVGV4dCA9IHRleHQ7XG4gICAgaWYgKHRoaXMuY29uZmlnLmRhdGEpIHtcbiAgICAgIHRoaXMuZmV0Y2hpbmdEYXRhID0gdHJ1ZTtcbiAgICAgIGxldCBmcm9tID0gKHBhZ2UgLSAxKSAqIGZldGNoU2l6ZTtcbiAgICAgIGxldCB0byA9IChmZXRjaFNpemUgKiAocGFnZSAtIDEpKSArIGZldGNoU2l6ZTtcbiAgICAgIGxldCBzdGF0aWNEYXRhID0gdGhpcy5jb25maWcuZGF0YVxuICAgICAgICAgIC5maWx0ZXIob3B0aW9uID0+IG9wdGlvbi50ZXh0LnRvTG93ZXJDYXNlKCkuaW5kZXhPZih0ZXh0LnRvTG93ZXJDYXNlKCkpICE9PSAtMSlcbiAgICAgICAgICAuc2xpY2UoZnJvbSwgdG8pO1xuICAgICAgdGhpcy5mZXRjaGluZ0RhdGEgPSBmYWxzZTtcblxuICAgICAgcmV0dXJuIHN0YXRpY0RhdGE7XG4gICAgfSBlbHNlIGlmICh0aGlzLmNvbmZpZy5nZXREYXRhRnJvbUFwaSkge1xuICAgICAgdGhpcy5mZXRjaGluZ0RhdGEgPSB0cnVlO1xuICAgICAgbGV0IGFwaURhdGEgPSBhd2FpdCB0aGlzLmNvbmZpZy5nZXREYXRhRnJvbUFwaSh0ZXh0LCBwYWdlLCBmZXRjaFNpemUpO1xuICAgICAgdGhpcy5mZXRjaGluZ0RhdGEgPSBmYWxzZTtcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5zZWFyY2hlZFRleHQgPT09IHRleHQgJiZcbiAgICAgICAgdGhpcy5wYWdlID09PSBwYWdlICYmXG4gICAgICAgIHRoaXMuY29uZmlnLmZldGNoU2l6ZSA9PT0gZmV0Y2hTaXplXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIGFwaURhdGE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgZGF0YVNvdXJjZU1pc3NpbmdFeGNlcHRpb25Nc2c7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE9uIGhvdmVyaW5nIG9uIG9wdGlvbiByb3dcbiAgICogQHBhcmFtIGV2ZW50IC0gSG92ZXIgTW91c2UgRXZlbnRcbiAgICovXG4gIHByaXZhdGUgb25PcHRpb25Ib3ZlckV2ZW50ID0gKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgbGV0IG9wdGlvbnNMaXN0ID0gdGhpcy5nZXRPcHRpb25zQmFzZUVsZW1lbnQoKTtcbiAgICBsZXQgaG92ZXJlZEVsZW1lbnQgPSBvcHRpb25zTGlzdC5xdWVyeVNlbGVjdG9yKGAuJHtIT1ZFUkVEfWApO1xuICAgIGlmIChob3ZlcmVkRWxlbWVudCkge1xuICAgICAgaG92ZXJlZEVsZW1lbnQuY2xhc3NOYW1lID0gaG92ZXJlZEVsZW1lbnRcbiAgICAgICAgLmNsYXNzTmFtZVxuICAgICAgICAuc3BsaXQoXCIgXCIpXG4gICAgICAgIC5maWx0ZXIoZSA9PiBlICE9PSBIT1ZFUkVEKVxuICAgICAgICAuam9pbihcIiBcIilcbiAgICAgICAgLnRyaW0oKTtcbiAgICB9XG4gICAgbGV0IHRhcmdldCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgdGFyZ2V0LmNsYXNzTmFtZSArPSBgICR7SE9WRVJFRH1gO1xuICB9XG5cbiAgLyoqXG4gICAqIEJ1aWxkIHRoZSBvcHRpb25zIGlubmVyIHRhZ3MgaW4gb3B0aW9ucyBsaXN0IHRhZyBiYXNlZCBvbiB0aGUgdGV4dCBwYXNzZWQgYW5kIHRoZSBkYXRhIGluIGNvbmZpZ1xuICAgKiBAcGFyYW0gdGV4dCAtIFRleHQgdG8gc2VhcmNoIG9uIGluIHRoZSBhdXRvY29tcGxldGVcbiAgICogQHBhcmFtIGNsZWFyUHJldmlvdXNEYXRhIC0gRmxhZyB0byBjbGVhciBwcmV2aW91cyBvcHRpb25zIGFuZCBvdmVycmlkZSB3aXRoIHRoZSBuZXcgb25lXG4gICAqL1xuICBwcml2YXRlIGFzeW5jIGJ1aWxkT3B0aW9ucyh0ZXh0OiBzdHJpbmcsIGNsZWFyUHJldmlvdXNEYXRhOiBib29sZWFuID0gdHJ1ZSk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCBvcHRpb25MaXN0RWxlbWVudCA9IHRoaXMuZ2V0T3B0aW9uc0Jhc2VFbGVtZW50KCk7XG4gICAgaWYgKGNsZWFyUHJldmlvdXNEYXRhKSB7XG4gICAgICAgIHRoaXMuY2xlYXJPcHRpb25zKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY29uZmlnLmZldGNoU2l6ZSAmJiAhaXNOYU4odGhpcy5jb25maWcuZmV0Y2hTaXplKSkge1xuICAgICAgbGV0IGZpbHRlcmVkT3B0aW9ucyA9IGF3YWl0IHRoaXMuZ2V0RGF0YSh0ZXh0LCB0aGlzLnBhZ2UsIHRoaXMuY29uZmlnLmZldGNoU2l6ZSk7XG5cbiAgICAgIGlmIChmaWx0ZXJlZE9wdGlvbnMgIT09IG51bGwpIHtcbiAgICAgICAgaWYgKGZpbHRlcmVkT3B0aW9ucy5sZW5ndGggPCB0aGlzLmNvbmZpZy5mZXRjaFNpemUpIHtcbiAgICAgICAgICAvLyBTdG9wIGZldGNoaW5nIG1vcmUgY2h1bmtzIHdoZW5ldmVyIHlvdSBnZXQgbGVzcyB0aGFuIHRoZSBjaHVuayBmZXRjaCBzaXplXG4gICAgICAgICAgdGhpcy5wcmV2ZW50TW9yZVJlcXVlc3RzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZpbHRlcmVkT3B0aW9uc1xuICAgICAgICAgIC5mb3JFYWNoKG9wdGlvbiA9PiB7XG4gICAgICAgICAgICBsZXQgb3B0aW9uRWxlbWVudFRlbXBsYXRlID0gdGhpcy5vcHRpb25zQ29tcG9uZW50LnJlbmRlck9wdGlvbihvcHRpb24pO1xuICAgICAgICAgICAgbGV0IHRlbXBFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgICAgICAgICB0ZW1wRWxlbWVudC5pbm5lckhUTUwgPSBvcHRpb25FbGVtZW50VGVtcGxhdGU7XG4gICAgICAgICAgICBsZXQgb3B0aW9uRWxlbWVudCA9IHRlbXBFbGVtZW50LmNoaWxkTm9kZXNbMF07XG4gICAgICAgICAgICAob3B0aW9uRWxlbWVudCBhcyBhbnkpLmRhdGEgPSB7IHRleHQ6IG9wdGlvbi50ZXh0LCB2YWx1ZTogb3B0aW9uLnZhbHVlIH07XG4gICAgICAgICAgICAob3B0aW9uRWxlbWVudCBhcyBIVE1MRWxlbWVudCkuc2V0QXR0cmlidXRlKFwiaW5maW5pdGUtY2xpY2thYmxlXCIsIFwiXCIpO1xuICAgICAgICAgICAgb3B0aW9uRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGBjbGlja2AsIHRoaXMub25PcHRpb25DbGlja0V2ZW50KTtcbiAgICAgICAgICAgIG9wdGlvbkVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihgbW91c2VvdmVyYCwgdGhpcy5vbk9wdGlvbkhvdmVyRXZlbnQpO1xuICAgICAgICAgICAgb3B0aW9uTGlzdEVsZW1lbnQuYXBwZW5kQ2hpbGQob3B0aW9uRWxlbWVudCk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGZpbHRlcmVkT3B0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgbGV0IGNodW5rQ2xpZW50SGVpZ2h0ID0gb3B0aW9uTGlzdEVsZW1lbnQuY2hpbGRyZW5bMF0uY2xpZW50SGVpZ2h0O1xuICAgICAgICAgIC8vIENoZWNrIGlmIG1heEhlaWdodCBpcyBmaXRzIHRoZSBjaHVuayBzaXplIGxpc3RcbiAgICAgICAgICBpZiAodGhpcy5jb25maWcubWF4SGVpZ2h0KSB7XG4gICAgICAgICAgICBsZXQgbWF4SGVpZ2h0TnVtYmVyID0gcGFyc2VJbnQodGhpcy5jb25maWcubWF4SGVpZ2h0LCAxMCk7XG4gICAgICAgICAgICBpZiAobWF4SGVpZ2h0TnVtYmVyID49IGNodW5rQ2xpZW50SGVpZ2h0ICogdGhpcy5jb25maWcuZmV0Y2hTaXplKSB7XG4gICAgICAgICAgICAgIHRoaXMuY29uZmlnLm1heEhlaWdodCA9IChjaHVua0NsaWVudEhlaWdodCAqIHRoaXMuY29uZmlnLmZldGNoU2l6ZSAtIDUpICsgXCJweFwiO1xuICAgICAgICAgICAgICBsZXQgb3B0aW9uc1dyYXBwZXJFbGUgPVxuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKGAuaW5maW5pdGUtYXV0b2NvbXBsZXRlLW9wdGlvbnMtd3JhcHBlcmApIGFzIEhUTUxFbGVtZW50O1xuICAgICAgICAgICAgICBsZXQgb3B0aW9uc0VsZSA9XG4gICAgICAgICAgICAgICAgb3B0aW9uc1dyYXBwZXJFbGUucXVlcnlTZWxlY3Rvcih0aGlzLm9wdGlvbnNDb21wb25lbnQubGlzdEVsZW1lbnRTZWxlY3RvcikgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgICAgICAgIG9wdGlvbnNFbGUuc3R5bGUubWF4SGVpZ2h0ID0gdGhpcy5jb25maWcubWF4SGVpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9uTGlzdEVsZW1lbnQuaW5uZXJIVE1MICE9PSBgYCkge1xuICAgICAgICB0aGlzLnNldEVsZW1lbnRWaXNpYmxpdHkoXG4gICAgICAgICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYC5pbmZpbml0ZS1hdXRvY29tcGxldGUtb3B0aW9ucy13cmFwcGVyYCkgYXMgSFRNTEVsZW1lbnQsXG4gICAgICAgICAgdHJ1ZSxcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0RWxlbWVudFZpc2libGl0eShcbiAgICAgICAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihgLmluZmluaXRlLWF1dG9jb21wbGV0ZS1vcHRpb25zLXdyYXBwZXJgKSBhcyBIVE1MRWxlbWVudCxcbiAgICAgICAgICBmYWxzZSxcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBmZXRjaFNpemVFeGNlcHRpb25Nc2c7XG4gICAgfVxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Db21wb25lbnRzL0luZmluaXRlQXV0b2NvbXBsZXRlLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==