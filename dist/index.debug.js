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
                defaultsStyle.innerHTML = "\n          .infinite-autocomplete-input-wrapper .infinite-autocomplete-default-input {\n              height: 28px;\n              border-radius: 8px;\n              box-shadow: inset 0px 0px 15px -4px transparent;\n          }\n          .infinite-autocomplete-options-wrapper .infinite-autocomplete-default-options {\n              list-style-type: none;\n              margin-top: 0;\n              padding-left: 0;\n              margin-bottom: 0;\n          }\n          .infinite-autocomplete-options-wrapper .infinite-autocomplete-default-options li {\n              padding: 5px 10px 10px 10px;\n          }\n          .infinite-autocomplete-options-wrapper .infinite-autocomplete-default-options li.hovered {\n              background: #d5ebff;\n              color: black;\n              cursor: pointer;\n          }\n      ";
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
        },
        enumerable: true,
        configurable: true
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAxNDE2ODllZmI3OTk5YzI0YWVkMCIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9JbnB1dENvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9PcHRpb25zQ29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9Db25zdGFudHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvSW5maW5pdGVBdXRvY29tcGxldGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQzlEQTs7O0dBR0c7QUFDSDtJQUFBO0lBSUEsQ0FBQztJQUhRLCtCQUFNLEdBQWI7UUFDSSxNQUFNLENBQUMsdUVBQW1FLENBQUM7SUFDL0UsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQztBQUpZLHdDQUFjOzs7Ozs7Ozs7O0FDSDNCOzs7R0FHRztBQUNIO0lBQUE7UUFDUyx3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RUFBRSxDQUFDLENBQUMsZUFBZSxJQUFJLGlCQUFpQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQzt3Q0FDakUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7d0NBQzNFLGlCQUFpQixHQUNuQixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyx3Q0FBd0MsQ0FBZ0IsQ0FBQzt3Q0FDbEYsVUFBVSxHQUNaLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsbUJBQW1CLENBQWdCLENBQUM7d0NBQzVGLFVBQVUsQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO29DQUNyRCxDQUFDO2dDQUNILENBQUM7NEJBQ0gsQ0FBQzt3QkFDSCxDQUFDO3dCQUVELEVBQUUsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLFNBQVMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDOzRCQUN2QyxJQUFJLENBQUMsbUJBQW1CLENBQ3RCLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLHdDQUF3QyxDQUFnQixFQUNuRixJQUFJLENBQ0wsQ0FBQzt3QkFDSixDQUFDO3dCQUFDLElBQUksQ0FBQyxDQUFDOzRCQUNOLElBQUksQ0FBQyxtQkFBbUIsQ0FDdEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsd0NBQXdDLENBQWdCLEVBQ25GLEtBQUssQ0FDTixDQUFDO3dCQUNKLENBQUM7OzRCQUdELE1BQU0sNkJBQXFCLENBQUM7Ozs7O0tBRS9CO0lBRUgsMkJBQUM7QUFBRCxDQUFDO0FBM3VCWSxvREFBb0IiLCJmaWxlIjoiaW5kZXguZGVidWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gZmFjdG9yeSgpO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMTQxNjg5ZWZiNzk5OWMyNGFlZDAiLCJpbXBvcnQgeyBJSW5wdXRDb21wb25lbnQgfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JSW5wdXRDb21wb25lbnRcIjtcblxuLyoqXG4gKiBJbnB1dCBjb21wb25lbnQgZGVmYXVsdCBpbXBsZW1lbnRhdGlvblxuICogQGF1dGhvciBJc2xhbSBBdHRyYXNoXG4gKi9cbmV4cG9ydCBjbGFzcyBJbnB1dENvbXBvbmVudCBpbXBsZW1lbnRzIElJbnB1dENvbXBvbmVudCB7XG4gIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gYDxpbnB1dCBjbGFzcz1cImluZmluaXRlLWF1dG9jb21wbGV0ZS1kZWZhdWx0LWlucHV0XCIgdHlwZT1cInRleHRcIiAvPmA7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Db21wb25lbnRzL0lucHV0Q29tcG9uZW50LnRzIiwiaW1wb3J0IHsgSU9wdGlvbnNDb21wb25lbnQgfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JT3B0aW9uc0NvbXBvbmVudFwiO1xuaW1wb3J0IHsgSU9wdGlvbiB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lPcHRpb25cIjtcblxuLyoqXG4gKiBPcHRpb25zIGNvbXBvbmVudCBkZWZhdWx0IGltcGxlbWVudGF0aW9uXG4gKiBAYXV0aG9yIElzbGFtIEF0dHJhc2hcbiAqL1xuZXhwb3J0IGNsYXNzIE9wdGlvbnNDb21wb25lbnQgaW1wbGVtZW50cyBJT3B0aW9uc0NvbXBvbmVudCB7XG4gIHB1YmxpYyBsaXN0RWxlbWVudFNlbGVjdG9yOiBzdHJpbmcgPSBgdWxgO1xuXG4gIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGA8JHt0aGlzLmxpc3RFbGVtZW50U2VsZWN0b3J9IGNsYXNzPVwiaW5maW5pdGUtYXV0b2NvbXBsZXRlLWRlZmF1bHQtb3B0aW9uc1wiPjwvJHt0aGlzLmxpc3RFbGVtZW50U2VsZWN0b3J9PmA7XG4gIH1cblxuICBwdWJsaWMgcmVuZGVyT3B0aW9uKG9wdGlvbjogSU9wdGlvbik6IHN0cmluZyB7XG4gICAgcmV0dXJuIGA8bGk+XG4gICAgICAgICAgICAgICAgJHtvcHRpb24udGV4dH1cbiAgICAgICAgICAgIDwvbGk+YDtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQ29tcG9uZW50cy9PcHRpb25zQ29tcG9uZW50LnRzIiwiXG4vKiogSG92ZXJlZCBzdGF0ZSB3aGVuIG5hdmlnYXRpb24gdGhyb3VnaCB1cEFycm93L2Rvd25BcnJvdyB3aGlsZSBvcHRpb25zIGlzIG9wZW4gKi9cbmV4cG9ydCBjb25zdCBIT1ZFUkVEID0gXCJob3ZlcmVkXCI7XG5cbi8qKlxuICogS2V5IGRvd24gc3RhdGVzIChrZXlDb2RlcylcbiAqL1xuZXhwb3J0IGNvbnN0IEtFWV9QUkVTU19TVEFURVMgPSB7XG4gICAgVVA6IDM4LFxuICAgIERPV046IDQwLFxuICAgIEVOVEVSOiAxMyxcbn07XG5cbmV4cG9ydCBjb25zdCBNaXNzaW5nSW5wdXRFbGVtZW50SW5JbnB1dENvbXBvbmVudEV4Y2VwdGlvbk1zZyA9XG4gIG5ldyBFcnJvcihgQ3VzdG9taXplZCBpbnB1dCBzaG91bGQgY29udGFpbiBpbnB1dCBlbGVtZW50IDxpbnB1dCAvPmApO1xuXG5leHBvcnQgY29uc3Qgb3B0aW9uc1dyYXBwZXJFeGNlcHRpb25Nc2cgPSBuZXcgRXJyb3IoYENvdWxkbid0IGdldCB0aGUgb3B0aW9ucyBiYXNlIGVsZW1lbnQuYCk7XG5cbmV4cG9ydCBjb25zdCBpbnB1dEVsZW1lbnRFeGNlcHRpb25Nc2cgPSBuZXcgRXJyb3IoYENvdWxkbid0IGdldCB0aGUgaW5wdXQgZWxlbWVudC5gKTtcblxuZXhwb3J0IGNvbnN0IGRhdGFTb3VyY2VNaXNzaW5nRXhjZXB0aW9uTXNnID0gbmV3IEVycm9yIChgWW91IG11c3QgcGFzcyBkYXRhIG9yIGdldERhdGFGcm9tQXBpIGZ1bmN0aW9uIHZpYSBjb25maWdgKTtcblxuZXhwb3J0IGNvbnN0IGZldGNoU2l6ZUV4Y2VwdGlvbk1zZyA9IG5ldyBFcnJvcihgZmV0Y2hTaXplIG11c3QgYmUgb3ZlcnJpZGVuIHdpdGggY29ycmVjdCBudW1lcmljIHZhbHVlYCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQ29uc3RhbnRzL2luZGV4LnRzIiwiaW1wb3J0IHsgSW5wdXRDb21wb25lbnQgYXMgZGVmYXVsdElucHV0SW1wbCB9IGZyb20gXCIuL0lucHV0Q29tcG9uZW50XCI7XG5pbXBvcnQgeyBPcHRpb25zQ29tcG9uZW50IGFzIGRlZmF1bHRPcHRpb25zSW1wbCB9IGZyb20gXCIuL09wdGlvbnNDb21wb25lbnRcIjtcbmltcG9ydCB7IEluZmluaXRlQXV0b2NvbXBsZXRlQ29uZmlnIH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSW5maW5pdGVBdXRvY29tcGxldGVDb25maWdcIjtcbmltcG9ydCB7IElJbnB1dENvbXBvbmVudCwgSUlucHV0Q29tcG9lbmVudENvbnN0cnVjdG9yIH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSUlucHV0Q29tcG9uZW50XCI7XG5pbXBvcnQgeyBJT3B0aW9uc0NvbXBvbmVudCwgSU9wdGlvbnNDb21wb25lbnRDb25zdHJ1Y3RvciB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lPcHRpb25zQ29tcG9uZW50XCI7XG5pbXBvcnQgeyBJSW5maW5pdGVBdXRvY29tcGxldGUgfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JSW5maW5pdGVBdXRvY29tcGxldGVcIjtcbmltcG9ydCB7IElPcHRpb24gfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JT3B0aW9uXCI7XG5pbXBvcnQge1xuICBIT1ZFUkVELFxuICBLRVlfUFJFU1NfU1RBVEVTLFxuICBNaXNzaW5nSW5wdXRFbGVtZW50SW5JbnB1dENvbXBvbmVudEV4Y2VwdGlvbk1zZyxcbiAgb3B0aW9uc1dyYXBwZXJFeGNlcHRpb25Nc2csXG4gIGlucHV0RWxlbWVudEV4Y2VwdGlvbk1zZyxcbiAgZGF0YVNvdXJjZU1pc3NpbmdFeGNlcHRpb25Nc2csXG4gIGZldGNoU2l6ZUV4Y2VwdGlvbk1zZyxcbn0gZnJvbSBcIi4uL0NvbnN0YW50cy9pbmRleFwiO1xuXG4vKipcbiAqIERlZmF1bHQgSW5wdXQgaW4gaW5maW5pdGUtYXV0b2NvbXBsZXRlIGNvbXBvbmVudFxuICovXG5leHBvcnQgY29uc3QgSW5wdXRDb21wb25lbnQgPSBkZWZhdWx0SW5wdXRJbXBsO1xuXG4vKipcbiAqIERlZmF1bHQgSW5wdXQgaW4gaW5maW5pdGUtYXV0b2NvbXBsZXRlIGNvbXBvbmVudFxuICovXG5leHBvcnQgY29uc3QgT3B0aW9uc0NvbXBvbmVudCA9IGRlZmF1bHRPcHRpb25zSW1wbDtcblxuLyoqXG4gKiBpbmZpbml0ZS1hdXRvY29tcGxldGUgY29tcG9uZW50IGltcGxlbWVudGF0aW9uXG4gKiBAYXV0aG9yIElzbGFtIEF0dHJhc2hcbiAqL1xuZXhwb3J0IGNsYXNzIEluZmluaXRlQXV0b2NvbXBsZXRlIGltcGxlbWVudHMgSUluZmluaXRlQXV0b2NvbXBsZXRlIHtcblxuICBwcml2YXRlIGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICBwcml2YXRlIGlucHV0Q29tcG9uZW50OiBJSW5wdXRDb21wb25lbnQ7XG4gIHByaXZhdGUgb3B0aW9uc0NvbXBvbmVudDogSU9wdGlvbnNDb21wb25lbnQ7XG4gIHByaXZhdGUgcGFnZTogbnVtYmVyID0gMTtcbiAgcHJpdmF0ZSBzZWFyY2hlZFRleHQ6IHN0cmluZyA9IFwiXCI7XG4gIHByaXZhdGUgaXNEZXN0cm95ZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBjb25maWc6IEluZmluaXRlQXV0b2NvbXBsZXRlQ29uZmlnO1xuICBwcml2YXRlIHByZXZlbnRNb3JlUmVxdWVzdHM6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBsb2NhbEZldGNoaW5nRGF0YTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBEZWZhdWx0IGNvbmZpZ3VyYXRpb24gb2JqZWN0XG4gICAqL1xuICBwcml2YXRlIGRlZmF1bHRDb25maWc6IEluZmluaXRlQXV0b2NvbXBsZXRlQ29uZmlnID0ge1xuICAgIGZldGNoU2l6ZTogMTAsXG4gICAgbWF4SGVpZ2h0OiBcIjE2MHB4XCIsXG4gIH07XG5cbiAgLyoqXG4gICAqIGNvbnN0cnVjdG9yIGZvciBJbmZpbml0ZUF1dG9jb21wbGV0ZSBjbGFzc1xuICAgKiBFbmFibGluZyBwbHVnZ2FibGUgc3lzdGVtIGxpbmtlZCB3aXRoIEludGVyZmFjZXMgb25seVxuICAgKiBAcGFyYW0gZWxlbWVudCAtIEhUTUxFbGVtZW50IHRvIGFwcGVuZCB0aGUgaW5maW5pdGUtYXV0b2NvbXBsZXRlIGluIGl0XG4gICAqIEBwYXJhbSBjb25maWcgLSBJbmZpbml0ZUF1dG9jb21wbGV0ZSBjb25maWcgb3B0aW9uc1xuICAgKiBAcGFyYW0gb3B0aW9uQ29tcG9uZW50IC0gT3B0aW9uIGNvbXBvbmVudCBpbXBsZW1lbnRhdGlvbiB0byBiZSBpbmplY3RlZCAob3IgZGVmYXVsdClcbiAgICogQHBhcmFtIGlucHV0Q29tcG9uZW50IC0gSW5wdXQgY29tcG9uZW50IGltcGxlbWVudGF0aW9uIHRvIGJlIGluamVjdGVkIChvciBkZWZhdWx0KVxuICAgKiBAcGFyYW0gb3B0aW9uc0NvbXBvbmVudCAtIE9wdGlvbnMgY29tcG9uZW50IGltcGxlbWVudGF0aW9uIHRvIGJlIGluamVjdGVkIChvciBkZWZhdWx0KVxuICAgKi9cbiAgY29uc3RydWN0b3IoZWxlbWVudDogSFRNTEVsZW1lbnQsIGNvbmZpZz86IEluZmluaXRlQXV0b2NvbXBsZXRlQ29uZmlnKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLmNvbmZpZyA9IHsgLi4udGhpcy5kZWZhdWx0Q29uZmlnLCAuLi5jb25maWcgfTtcbiAgICB0aGlzLmlucHV0Q29tcG9uZW50ID0gdGhpcy5nZXRDdXN0b21pemVkSW5wdXQoKTtcbiAgICB0aGlzLm9wdGlvbnNDb21wb25lbnQgPSB0aGlzLmdldEN1c3RvbWl6ZWRPcHRpb25zKCk7XG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBjb25maWcgb2JqZWN0IHdpdGggZXh0ZW5kaW5nXG4gICAqIEBwYXJhbSBjb25maWcgLSBpbmZpbml0ZS1hdXRvY29tcGxldGUgY29uZmlndXJhdGlvbiBvYmplY3RcbiAgICovXG4gIHB1YmxpYyBzZXRDb25maWcgPSAoY29uZmlnOiBJbmZpbml0ZUF1dG9jb21wbGV0ZUNvbmZpZykgPT4ge1xuICAgIHRoaXMuZGVzdHJveSgpO1xuICAgIHRoaXMuY29uZmlnID0geyAuLi50aGlzLmNvbmZpZywgLi4uY29uZmlnIH07XG4gICAgdGhpcy5pbnB1dENvbXBvbmVudCA9IHRoaXMuZ2V0Q3VzdG9taXplZElucHV0KCk7XG4gICAgdGhpcy5vcHRpb25zQ29tcG9uZW50ID0gdGhpcy5nZXRDdXN0b21pemVkT3B0aW9ucygpO1xuICAgIHRoaXMuaW5pdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc3Ryb3kgdGhlIGluZmluaXRlLWF1dG9jb21wbGV0ZSBhbmQgdW5iaW5kIGFsbCBldmVudHNcbiAgICovXG4gIHB1YmxpYyBkZXN0cm95ID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLmlzRGVzdHJveWVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmlzT3B0aW9uc0hpZGRlbigpKSB7XG4gICAgICB0aGlzLmNsZWFyT3B0aW9ucygpO1xuICAgIH1cblxuICAgIGxldCBvcHRpb25zTGlzdCA9IHRoaXMuZ2V0T3B0aW9uc0Jhc2VFbGVtZW50KCk7XG4gICAgb3B0aW9uc0xpc3QucmVtb3ZlRXZlbnRMaXN0ZW5lcihgc2Nyb2xsYCwgdGhpcy5zY3JvbGxSZWFjaGVkQm90dG9tSGFuZGxlcik7XG4gICAgbGV0IGlucHV0RWxlID0gdGhpcy5nZXRJbnB1dEVsZW1lbnQoKTtcbiAgICBpbnB1dEVsZS5yZW1vdmVFdmVudExpc3RlbmVyKGBpbnB1dGAsIHRoaXMub25JbnB1dENoYW5nZSk7XG4gICAgaW5wdXRFbGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihgY2xpY2tgLCB0aGlzLm9uSW5wdXRDaGFuZ2UpO1xuICAgIGlucHV0RWxlLnJlbW92ZUV2ZW50TGlzdGVuZXIoYGtleWRvd25gLCB0aGlzLm9uS2V5UHJlc3NlZCk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihgY2xpY2tgLCB0aGlzLm9uRG9jdW1lbnRDbGlja0hhbmRsZXIpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMub25Fc2NhcGVFdmVudEhhbmRsZXIpO1xuICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSBgYDtcbiAgICB0aGlzLmlzRGVzdHJveWVkID0gdHJ1ZTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q3VzdG9taXplZElucHV0ID0gKCkgPT5cbiAgICB0aGlzLmNvbmZpZy5jdXN0b21pemVkSW5wdXQgPyBuZXcgdGhpcy5jb25maWcuY3VzdG9taXplZElucHV0KCkgOiBuZXcgZGVmYXVsdElucHV0SW1wbCgpXG5cbiAgcHJpdmF0ZSBnZXRDdXN0b21pemVkT3B0aW9ucyA9ICgpID0+XG4gICAgdGhpcy5jb25maWcuY3VzdG9taXplZE9wdGlvbnMgPyBuZXcgdGhpcy5jb25maWcuY3VzdG9taXplZE9wdGlvbnMoKSA6IG5ldyBkZWZhdWx0T3B0aW9uc0ltcGwoKVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGhvb2sgdGhhdCBnZXQgZXhlY3V0ZWQgaW1tZWRpYXRseSBhZnRlciB1c2luZyB0aGUgaW5maW5pdGUtYXV0b2NvbXBsZXRlIGNvbXBvbmVudFxuICAgKi9cbiAgcHJpdmF0ZSBpbml0ID0gKCkgPT4ge1xuICAgIHRoaXMuYXBwbHlTdHlsZXNSdWxlcygpO1xuICAgIHRoaXMuYXBwZW5kSW5maW5pdGVBdXRvY29tcGxldGVXcmFwcGVyQ2xhc3MoKTtcbiAgICB0aGlzLmxpbmtJbnB1dENvbXBvbmVudCgpO1xuICAgIHRoaXMubGlua09wdGlvbnNDb21wb25lbnQoKTtcbiAgICB0aGlzLmJpbmRTY3JvbGxSZWFjaEJvdHRvbUV2ZW50KCk7XG4gICAgdGhpcy5iaW5kRXNjYXBlRXZlbnQoKTtcbiAgICB0aGlzLmJpbmRPdXRTaWRlQ2xpY2tFdmVudCgpO1xuICAgIHRoaXMuaXNEZXN0cm95ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiAoIzEpIEJpbmRzIGEgY2xpY2sgaGFuZGxlciB0byBkZXRlY3Qgd2hlcmUgdGhlIHVzZXIgY2xpY2tlZFxuICAgKiBJZiBjbGljayBpcyBvdXQgc2lkZSB0aGUgbWFpbiB3cmFwcGVyIGFyZWEgdGhlbiBjbG9zZSBvcHRpb25zXG4gICAqL1xuICBwcml2YXRlIGJpbmRPdXRTaWRlQ2xpY2tFdmVudCA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKGBjbGlja2AsIHRoaXMub25Eb2N1bWVudENsaWNrSGFuZGxlcik7XG4gIH1cblxuICAvKipcbiAgICogb24gZG9jdW1lbnQgY2xpY2sgaGFuZGxlclxuICAgKiBAcGFyYW0gZXZlbnQgLSBFdmVudFxuICAgKi9cbiAgcHJpdmF0ZSBvbkRvY3VtZW50Q2xpY2tIYW5kbGVyID0gKGV2ZW50OiBFdmVudCkgPT4ge1xuICAgIGlmICghdGhpcy5pc09wdGlvbnNIaWRkZW4oKSkge1xuICAgICAgbGV0IGNsaWNrZWRPdXRTaWRlID0gdGhpcy5jaGVja0lmQ2xpY2tlZE91dFNpZGVUaGVBdXRvY29tcGxldGVDb21wb25lbnRzKGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudCk7XG4gICAgICBpZiAoY2xpY2tlZE91dFNpZGUpIHtcbiAgICAgICAgICB0aGlzLmNsZWFyT3B0aW9ucygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBjbGljayBpcyBvdXRzaWRlIHRoZSBwbHVnaW5cbiAgICogQHBhcmFtIGVsZW1lbnQgLSBIVE1MRWxlbWVudFxuICAgKi9cbiAgcHJpdmF0ZSBjaGVja0lmQ2xpY2tlZE91dFNpZGVUaGVBdXRvY29tcGxldGVDb21wb25lbnRzID0gKGVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCkgPT4ge1xuICAgIGlmIChlbGVtZW50ID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAoZWxlbWVudCA9PT0gdGhpcy5lbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGVja0lmQ2xpY2tlZE91dFNpZGVUaGVBdXRvY29tcGxldGVDb21wb25lbnRzKGVsZW1lbnQucGFyZW50RWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqICgjMTEpIEJpbmRzIGVzY2FwZSBldmVudCBoYW5kbGVyIHRvIGNsZWFyIHRoZSBvcHRpb25zIHdoZW4gY2xpY2tpbmcgRXNjXG4gICAqL1xuICBwcml2YXRlIGJpbmRFc2NhcGVFdmVudCA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLm9uRXNjYXBlRXZlbnRIYW5kbGVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFc2NhcGUgZXZlbnQgaGFuZGxlclxuICAgKiBAcGFyYW0gZSAtIEtleWJvYXJkRXZlbnRcbiAgICovXG4gIHByaXZhdGUgb25Fc2NhcGVFdmVudEhhbmRsZXIgPSBlID0+IHtcbiAgICBpZiAoZS5rZXlDb2RlID09PSAyNyAmJiAhdGhpcy5pc09wdGlvbnNIaWRkZW4oKSkgeyAvLyBFc2Mga2V5IHByZXNzZWRcbiAgICAgICAgdGhpcy5jbGVhck9wdGlvbnMoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQXBwZW5kIGluZmluaXRlIGF1dG9jb21wbGV0ZSBtYWluIHdyYXBwZXIgY2xhc3NOYW1lXG4gICAqL1xuICBwcml2YXRlIGFwcGVuZEluZmluaXRlQXV0b2NvbXBsZXRlV3JhcHBlckNsYXNzID0gKCkgPT4ge1xuICAgIGlmICghdGhpcy5lbGVtZW50LmNsYXNzTmFtZSB8fCB0aGlzLmVsZW1lbnQuY2xhc3NOYW1lLmluZGV4T2YoYGluZmluaXRlLWF1dG9jb21wbGV0ZS13cmFwcGVyYCkgPT09IC0xKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NOYW1lID0gdGhpcy5lbGVtZW50XG4gICAgICAgIC5jbGFzc05hbWVcbiAgICAgICAgLnNwbGl0KGAgYClcbiAgICAgICAgLmNvbmNhdChbYGluZmluaXRlLWF1dG9jb21wbGV0ZS13cmFwcGVyYF0pXG4gICAgICAgIC5maWx0ZXIoYyA9PiBjKVxuICAgICAgICAuam9pbihgIGApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldCBjdXJyZW50IHBhZ2VcbiAgICovXG4gIHByaXZhdGUgcmVzZXRDdXJyZW50UGFnZSA9ICgpID0+IHtcbiAgICB0aGlzLnBhZ2UgPSAxO1xuICB9XG5cbiAgLyoqXG4gICAqIExpbmsgaW5wdXQgY29tcG9uZW50IGludG8gdGhlIGlucHV0IHdyYXBwZXJcbiAgICovXG4gIHByaXZhdGUgbGlua0lucHV0Q29tcG9uZW50ID0gKCkgPT4ge1xuICAgIGxldCBpbnB1dFdyYXBwZXJFbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBpbnB1dFdyYXBwZXJFbGUuY2xhc3NOYW1lID0gYGluZmluaXRlLWF1dG9jb21wbGV0ZS1pbnB1dC13cmFwcGVyYDtcbiAgICBpbnB1dFdyYXBwZXJFbGUuaW5uZXJIVE1MID0gdGhpcy5pbnB1dENvbXBvbmVudC5yZW5kZXIoKTtcbiAgICBsZXQgaW5wdXRFbGUgPSBpbnB1dFdyYXBwZXJFbGUucXVlcnlTZWxlY3RvcihgaW5wdXRgKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIGlmICghaW5wdXRFbGUpIHtcbiAgICAgIHRocm93IE1pc3NpbmdJbnB1dEVsZW1lbnRJbklucHV0Q29tcG9uZW50RXhjZXB0aW9uTXNnO1xuICAgIH1cbiAgICBpbnB1dEVsZVxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoYGlucHV0YCwgdGhpcy5vbklucHV0Q2hhbmdlKTtcbiAgICAvLyAoIzIpIFN0YXJ0IHRvIHNob3cgb3B0aW9ucyB3aGVuIGZvY3VzIG9uIHRoZSBpbnB1dFxuICAgIGlucHV0RWxlXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcihgY2xpY2tgLCB0aGlzLm9uSW5wdXRDaGFuZ2UpO1xuICAgIGlucHV0RWxlXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcihga2V5ZG93bmAsIHRoaXMub25LZXlQcmVzc2VkKTtcbiAgICBpZiAodGhpcy5jb25maWcudmFsdWUpIHtcbiAgICAgIGlucHV0RWxlLnZhbHVlID0gdGhpcy5jb25maWcudmFsdWU7XG4gICAgfVxuXG4gICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKGlucHV0V3JhcHBlckVsZSk7XG4gIH1cblxuICAvKipcbiAgICogT24ga2V5ZG93biBwcmVzc2luZyBpbiBpbnB1dCBlbGVtZW50XG4gICAqIEBwYXJhbSBrZXlkb3duRXZlbnQgLSBwcmVzc2luZyBrZXkgZXZlbnRcbiAgICovXG4gIHByaXZhdGUgb25LZXlQcmVzc2VkID0gKGtleWRvd25FdmVudDogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgIGlmICghdGhpcy5pc09wdGlvbnNIaWRkZW4oKSkge1xuICAgICAgbGV0IGN1cnJlbnRIb3ZlcmVkID0gdGhpcy5nZXROYXZpZ2F0aW9uSW5kZXgoKTtcbiAgICAgIGlmIChjdXJyZW50SG92ZXJlZCA9PT0gLTEpIHtcbiAgICAgICAgaWYgKGtleWRvd25FdmVudC5rZXlDb2RlID09PSBLRVlfUFJFU1NfU1RBVEVTLkRPV04pIHtcbiAgICAgICAgICB0aGlzLnRvZ2dsZUhvdmVyZWRTdGF0ZSgwLCBrZXlkb3duRXZlbnQpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzd2l0Y2ggKGtleWRvd25FdmVudC5rZXlDb2RlKSB7XG4gICAgICAgICAgY2FzZSBLRVlfUFJFU1NfU1RBVEVTLkRPV046XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZUhvdmVyZWRTdGF0ZShjdXJyZW50SG92ZXJlZCArIDEsIGtleWRvd25FdmVudCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIEtFWV9QUkVTU19TVEFURVMuVVA6XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZUhvdmVyZWRTdGF0ZShjdXJyZW50SG92ZXJlZCAtIDEsIGtleWRvd25FdmVudCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIEtFWV9QUkVTU19TVEFURVMuRU5URVI6XG4gICAgICAgICAgICB0aGlzLmNsaWNrT25Ib3ZlcmVkKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2xpY2sgb24gaG92ZXJlZCBlbGVtZW50XG4gICAqL1xuICBwcml2YXRlIGNsaWNrT25Ib3ZlcmVkID0gKCkgPT4ge1xuICAgIGxldCBvcHRpb25zTGlzdCA9IHRoaXMuZ2V0T3B0aW9uc0Jhc2VFbGVtZW50KCk7XG4gICAgbGV0IGhvdmVyZWRFbGVtZW50ID0gb3B0aW9uc0xpc3QucXVlcnlTZWxlY3RvcihgLiR7SE9WRVJFRH1gKSBhcyBIVE1MRWxlbWVudDtcbiAgICBpZiAoaG92ZXJlZEVsZW1lbnQpIHsgaG92ZXJlZEVsZW1lbnQuY2xpY2soKTsgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNpbXVsYXRlIFNjcm9sbGVkIHRvIGJvdHRvbVxuICAgKi9cbiAgcHJpdmF0ZSBzaW11bGF0ZVNjcm9sbFRvQm90dG9tID0gKCkgPT4ge1xuICAgIGxldCBvcHRpb25zTGlzdCA9IHRoaXMuZ2V0T3B0aW9uc0Jhc2VFbGVtZW50KCk7XG4gICAgbGV0IHNjcm9sbEV2ZW50ID0gbmV3IEV2ZW50KFwic2Nyb2xsXCIsIHsgYnViYmxlczogdHJ1ZSB9KTtcbiAgICBvcHRpb25zTGlzdC5zY3JvbGxUb3AgPSAxMDAwMDsgLy8gU2ltdWxhdGUgcmVhY2hlZCBib3R0b21cbiAgICBvcHRpb25zTGlzdC5kaXNwYXRjaEV2ZW50KHNjcm9sbEV2ZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGUgaG92ZXJlZCBzdGF0ZSBvbiBzcGVjaWZpYyBpbmRleCBpbiBvcHRpb25zIGxpc3RcbiAgICogQHBhcmFtIGluZGV4IC0gVGhlIGluZGV4IHRvIGJlIGFwcGxpZWQgYXMgaG92ZXJlZFxuICAgKi9cbiAgcHJpdmF0ZSB0b2dnbGVIb3ZlcmVkU3RhdGUgPSAoaW5kZXg6IG51bWJlciwga2V5ZG93bkV2ZW50OiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgbGV0IG9wdGlvbnNMaXN0ID0gdGhpcy5nZXRPcHRpb25zQmFzZUVsZW1lbnQoKTtcbiAgICBpZiAoaW5kZXggPT09IG9wdGlvbnNMaXN0LmNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgdGhpcy5zaW11bGF0ZVNjcm9sbFRvQm90dG9tKCk7XG4gICAgfVxuXG4gICAgaWYgKGluZGV4ID49IDAgJiYgaW5kZXggPCBvcHRpb25zTGlzdC5jaGlsZHJlbi5sZW5ndGgpIHtcblxuICAgICAgbGV0IGhvdmVyZWRFbGVtZW50ID0gb3B0aW9uc0xpc3QucXVlcnlTZWxlY3RvcihgLiR7SE9WRVJFRH1gKTtcbiAgICAgIGlmIChob3ZlcmVkRWxlbWVudCkge1xuICAgICAgICBob3ZlcmVkRWxlbWVudC5jbGFzc05hbWUgPSBob3ZlcmVkRWxlbWVudFxuICAgICAgICAgIC5jbGFzc05hbWVcbiAgICAgICAgICAuc3BsaXQoXCIgXCIpXG4gICAgICAgICAgLmZpbHRlcihlID0+IGUgIT09IEhPVkVSRUQpXG4gICAgICAgICAgLmpvaW4oXCIgXCIpXG4gICAgICAgICAgLnRyaW0oKTtcbiAgICAgIH1cblxuICAgICAgbGV0IHRhcmdldEVsZW1lbnQgPSBvcHRpb25zTGlzdC5jaGlsZHJlbltpbmRleF0gYXMgSFRNTEVsZW1lbnQ7XG4gICAgICB0YXJnZXRFbGVtZW50LmNsYXNzTmFtZSArPSBgICR7SE9WRVJFRH1gO1xuXG4gICAgICAvLyBJZiBob3ZlcmVkIGlzIG5vdCBpbiB0aGUgc2Nyb2xsYWJsZSB2aWV3XG4gICAgICBpZiAodGFyZ2V0RWxlbWVudC5vZmZzZXRUb3AgPCBvcHRpb25zTGlzdC5zY3JvbGxUb3AgfHwgKFxuICAgICAgICAgIHRhcmdldEVsZW1lbnQub2Zmc2V0VG9wIC0gb3B0aW9uc0xpc3Quc2Nyb2xsVG9wID4gb3B0aW9uc0xpc3QuY2xpZW50SGVpZ2h0KSkge1xuICAgICAgICBzd2l0Y2ggKGtleWRvd25FdmVudC5rZXlDb2RlKSB7XG4gICAgICAgICAgY2FzZSBLRVlfUFJFU1NfU1RBVEVTLlVQOlxuICAgICAgICAgICAgdGFyZ2V0RWxlbWVudC5zY3JvbGxJbnRvVmlldyh0cnVlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgS0VZX1BSRVNTX1NUQVRFUy5ET1dOOlxuICAgICAgICAgICAgdGFyZ2V0RWxlbWVudC5zY3JvbGxJbnRvVmlldyhmYWxzZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgbmF2aWdhdGlvbiBpbmRleCBpZiBvcHRpb25zIGlzIG9wZW5cbiAgICogQHJldHVybnMgT3B0aW9ucyBjdXJyZW50IGluZGV4XG4gICAqL1xuICBwcml2YXRlIGdldE5hdmlnYXRpb25JbmRleCA9ICgpID0+IHtcbiAgICBsZXQgb3B0aW9uc0xpc3QgPSB0aGlzLmdldE9wdGlvbnNCYXNlRWxlbWVudCgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0aW9uc0xpc3QuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBvcHRpb24gPSBvcHRpb25zTGlzdC5jaGlsZHJlbltpXTtcbiAgICAgIGlmIChvcHRpb24uY2xhc3NOYW1lLmluZGV4T2YoSE9WRVJFRCkgIT09IC0xKSB7XG4gICAgICAgIHJldHVybiBpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAtMTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnB1dCBjb21wb25lbnQgYGNoYW5nZWAgZXZlbnQgaGFuZGxlclxuICAgKiBAcGFyYW0gaW5wdXRDaGFuZ2VFdmVudCAtIElucHV0IGNoYW5nZSBldmVudCBoYW5kbGVyXG4gICAqL1xuICBwcml2YXRlIG9uSW5wdXRDaGFuZ2UgPSBhc3luYyAoaW5wdXRDaGFuZ2VFdmVudDogRXZlbnQpID0+IHtcbiAgICBsZXQgdGFyZ2V0ID0gaW5wdXRDaGFuZ2VFdmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgLy8gSWYgdXNlciBwYXNzIHNwZWNpYWwgYmVoYXZpb3IgZm9yIHR5cGluZyB2aWEgY29uZmlndXJhdGlvblxuICAgIGlmICh0aGlzLmlucHV0Q29tcG9uZW50Lm9uSW5wdXRDaGFuZ2UpIHtcbiAgICAgIHRoaXMuaW5wdXRDb21wb25lbnQub25JbnB1dENoYW5nZSh0YXJnZXQsIHRhcmdldC52YWx1ZSk7XG4gICAgfVxuICAgIC8vIElmIHdlIHR5cGUgYWx3YXlzIGZldGNoIGRhdGEgYW5kIGJ1aWxkIG9wdGlvbnNcbiAgICAvLyBJZiB3ZSBjbGljayBvbiBpbnB1dCBhbmQgdGhlIG9wdGlvbnMgaXMgaGlkZGVuIGJ1aWxkIHRoZSBvcHRpb25zXG4gICAgLy8gSWYgd2UgY2xpY2sgb24gaW5wdXQgYW5kIHRoZSBvcHRpb25zIGlzIGFscmVhZHkgb3BlbmVkIGRvbid0IGRvIGFueXRoaW5nXG4gICAgaWYgKGlucHV0Q2hhbmdlRXZlbnQudHlwZSA9PT0gYGlucHV0YCB8fFxuICAgICAgICAgICAgKGlucHV0Q2hhbmdlRXZlbnQudHlwZSA9PT0gYGNsaWNrYCAmJiB0aGlzLmlzT3B0aW9uc0hpZGRlbigpKSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgdGhpcy5idWlsZE9wdGlvbnModGFyZ2V0LnZhbHVlLCB0cnVlKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICBpZiAodGhpcy5jb25maWcub25FcnJvcikge1xuICAgICAgICAgIHRoaXMuY29uZmlnLm9uRXJyb3IoZXJyb3IpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIExpbmsgb3B0aW9ucyBjb21wb25lbnQgaW50byB0aGUgaW5maW5pdGUgYXV0b2NvbXBsZXRlIGNvbXBvbmVudFxuICAgKi9cbiAgcHJpdmF0ZSBsaW5rT3B0aW9uc0NvbXBvbmVudCA9ICgpID0+IHtcbiAgICBsZXQgb3B0aW9uc1dyYXBwZXJFbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBvcHRpb25zV3JhcHBlckVsZS5jbGFzc05hbWUgPSBgaW5maW5pdGUtYXV0b2NvbXBsZXRlLW9wdGlvbnMtd3JhcHBlcmA7XG4gICAgb3B0aW9uc1dyYXBwZXJFbGUuaW5uZXJIVE1MID0gdGhpcy5vcHRpb25zQ29tcG9uZW50LnJlbmRlcigpO1xuICAgIGxldCBvcHRpb25zRWxlID0gb3B0aW9uc1dyYXBwZXJFbGUucXVlcnlTZWxlY3Rvcih0aGlzLm9wdGlvbnNDb21wb25lbnQubGlzdEVsZW1lbnRTZWxlY3RvcikgYXMgSFRNTEVsZW1lbnQ7XG4gICAgdGhpcy5zZXRFbGVtZW50VmlzaWJsaXR5KG9wdGlvbnNXcmFwcGVyRWxlLCBmYWxzZSk7XG4gICAgb3B0aW9uc0VsZS5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVooMClcIjtcbiAgICBvcHRpb25zRWxlLnN0eWxlLndlYmtpdFRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWigwKVwiO1xuICAgIG9wdGlvbnNFbGUuc3R5bGUub3ZlcmZsb3cgPSBgc2Nyb2xsYDtcbiAgICBvcHRpb25zRWxlLnN0eWxlLm92ZXJmbG93WCA9IGBoaWRkZW5gO1xuICAgIG9wdGlvbnNFbGUuc3R5bGUuYm9yZGVyID0gYDFweCBzb2xpZCAjYmNiY2JjYDtcbiAgICBvcHRpb25zRWxlLnN0eWxlLnBhZGRpbmdCb3R0b20gPSBgNXB4YDtcbiAgICBvcHRpb25zRWxlLnN0eWxlLm1heEhlaWdodCA9IHRoaXMuY29uZmlnLm1heEhlaWdodCB8fCBudWxsO1xuICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChvcHRpb25zV3JhcHBlckVsZSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgb3B0aW9ucyB3cmFwcGVyIGhpZGRlbiBvciBub3RcbiAgICogQHJldHVybnMgdHJ1ZSBpZiBoaWRkZW4sIG9yIGVsc2UgZmFsc2VcbiAgICovXG4gIHByaXZhdGUgaXNPcHRpb25zSGlkZGVuID0gKCk6IGJvb2xlYW4gPT4ge1xuICAgIGxldCBvcHRpb25zV3JhcHBlciA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKGAuaW5maW5pdGUtYXV0b2NvbXBsZXRlLW9wdGlvbnMtd3JhcHBlcmApIGFzIEhUTUxFbGVtZW50O1xuXG4gICAgcmV0dXJuIG9wdGlvbnNXcmFwcGVyLmNsYXNzTmFtZVxuICAgICAgLmluZGV4T2YoYGluZmluaXRlLWF1dG9jb21wbGV0ZS1oaWRkZW4tZWxlbWVudGApID4gLTE7XG4gIH1cblxuICAvKipcbiAgICogQXBwbHkgdGhlIHN0eWxlIHJ1bGVzIGZvciB0aGUgaW5maW5pdGUgYXV0b2NvbXBsZXRlIHBsdWdpbiBhbmQgaXQncyBjb21wb25lbnRzXG4gICAqL1xuICBwcml2YXRlIGFwcGx5U3R5bGVzUnVsZXMgPSAoKSA9PiB7XG5cbiAgICAvLyBNYWluIHdyYXBwZXIgc3R5bGUgcnVsZXNcbiAgICBsZXQgaXNNYWluV3JhcHBlclN0eWxlQXBwbGllZCA9IGRvY3VtZW50LmhlYWQucXVlcnlTZWxlY3RvcihcIiNpbmZpbml0ZS1hdXRvY29tcGxldGUtd3JhcHBlci1zdHlsZVwiKTtcbiAgICBpZiAoIWlzTWFpbldyYXBwZXJTdHlsZUFwcGxpZWQpIHtcbiAgICAgIGxldCBtYWluV3JhcHBlclN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICAgICAgbWFpbldyYXBwZXJTdHlsZS5pZCA9IFwiaW5maW5pdGUtYXV0b2NvbXBsZXRlLXdyYXBwZXItc3R5bGVcIjtcbiAgICAgIG1haW5XcmFwcGVyU3R5bGUuaW5uZXJIVE1MID0gYFxuICAgICAgICAgIC5pbmZpbml0ZS1hdXRvY29tcGxldGUtd3JhcHBlciB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB9XG4gICAgICBgO1xuICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChtYWluV3JhcHBlclN0eWxlKTtcbiAgICB9XG5cbiAgICAvLyBIaWRkZW4gZWxlbWVudCBzdHlsZSBydWxlc1xuICAgIGxldCBpc0hpZGRlblN0eWxlQXBwbGllZCA9IGRvY3VtZW50LmhlYWQucXVlcnlTZWxlY3RvcihcIiNpbmZpbml0ZS1hdXRvY29tcGxldGUtaGlkZGVuLXN0eWxlXCIpO1xuICAgIGlmICghaXNIaWRkZW5TdHlsZUFwcGxpZWQpIHtcbiAgICAgIGxldCBoaWRkZW5TdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgICAgIGhpZGRlblN0eWxlLmlkID0gXCJpbmZpbml0ZS1hdXRvY29tcGxldGUtaGlkZGVuLXN0eWxlXCI7XG4gICAgICBoaWRkZW5TdHlsZS5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgLmluZmluaXRlLWF1dG9jb21wbGV0ZS1oaWRkZW4tZWxlbWVudCB7XG4gICAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgICAgfVxuICAgICAgYDtcbiAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoaGlkZGVuU3R5bGUpO1xuICAgIH1cblxuICAgIC8vIERlZmF1bHRzIHN0eWxlIHJ1bGVzXG4gICAgbGV0IGlzRGVmYXVsdHNTdHlsZUFwcGxpZWQgPSBkb2N1bWVudC5oZWFkLnF1ZXJ5U2VsZWN0b3IoXCIjaW5maW5pdGUtYXV0b2NvbXBsZXRlLWRlZmF1bHRzLXN0eWxlXCIpO1xuICAgIGlmICghaXNEZWZhdWx0c1N0eWxlQXBwbGllZCkge1xuICAgICAgbGV0IGRlZmF1bHRzU3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gICAgICBkZWZhdWx0c1N0eWxlLmlkID0gXCJpbmZpbml0ZS1hdXRvY29tcGxldGUtZGVmYXVsdHMtc3R5bGVcIjtcbiAgICAgIGRlZmF1bHRzU3R5bGUuaW5uZXJIVE1MID0gYFxuICAgICAgICAgIC5pbmZpbml0ZS1hdXRvY29tcGxldGUtaW5wdXQtd3JhcHBlciAuaW5maW5pdGUtYXV0b2NvbXBsZXRlLWRlZmF1bHQtaW5wdXQge1xuICAgICAgICAgICAgICBoZWlnaHQ6IDI4cHg7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAxNXB4IC00cHggdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5pbmZpbml0ZS1hdXRvY29tcGxldGUtb3B0aW9ucy13cmFwcGVyIC5pbmZpbml0ZS1hdXRvY29tcGxldGUtZGVmYXVsdC1vcHRpb25zIHtcbiAgICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5pbmZpbml0ZS1hdXRvY29tcGxldGUtb3B0aW9ucy13cmFwcGVyIC5pbmZpbml0ZS1hdXRvY29tcGxldGUtZGVmYXVsdC1vcHRpb25zIGxpIHtcbiAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDEwcHggMTBweCAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaW5maW5pdGUtYXV0b2NvbXBsZXRlLW9wdGlvbnMtd3JhcHBlciAuaW5maW5pdGUtYXV0b2NvbXBsZXRlLWRlZmF1bHQtb3B0aW9ucyBsaS5ob3ZlcmVkIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2Q1ZWJmZjtcbiAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgYDtcbiAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoZGVmYXVsdHNTdHlsZSk7XG4gICAgfVxuXG4gICAgLy8gSW5wdXQgc3R5bGUgcnVsZXNcbiAgICBsZXQgaXNJbnB1dFN0eWxlQXBwbGllZCA9IGRvY3VtZW50LmhlYWQucXVlcnlTZWxlY3RvcihcIiNpbmZpbml0ZS1hdXRvY29tcGxldGUtaW5wdXQtc3R5bGVcIik7XG4gICAgaWYgKCFpc0lucHV0U3R5bGVBcHBsaWVkKSB7XG4gICAgICBsZXQgaW5wdXRTdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgICAgIGlucHV0U3R5bGUuaWQgPSBcImluZmluaXRlLWF1dG9jb21wbGV0ZS1pbnB1dC1zdHlsZVwiO1xuICAgICAgaW5wdXRTdHlsZS5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgLmluZmluaXRlLWF1dG9jb21wbGV0ZS1pbnB1dC13cmFwcGVyIGlucHV0IHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgYDtcbiAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoaW5wdXRTdHlsZSk7XG4gICAgfVxuXG4gICAgLy8gT3B0aW9ucyBzdHlsZSBydWxlc1xuICAgIGxldCBpc09wdGlvbnNTdHlsZUFwcGxpZWQgPSBkb2N1bWVudC5oZWFkLnF1ZXJ5U2VsZWN0b3IoXCIjaW5maW5pdGUtYXV0b2NvbXBsZXRlLW9wdGlvbnMtc3R5bGVcIik7XG4gICAgaWYgKCFpc09wdGlvbnNTdHlsZUFwcGxpZWQpIHtcbiAgICAgIGxldCBvcHRpb25zU3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gICAgICBvcHRpb25zU3R5bGUuaWQgPSBgaW5maW5pdGUtYXV0b2NvbXBsZXRlLW9wdGlvbnMtc3R5bGVgO1xuICAgICAgb3B0aW9uc1N0eWxlLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAuaW5maW5pdGUtYXV0b2NvbXBsZXRlLW9wdGlvbnMtd3JhcHBlciB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgIH1cbiAgICAgIGA7XG4gICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKG9wdGlvbnNTdHlsZSk7XG4gICAgfVxuXG4gICAgLy8gU2Nyb2xsYmFyIHN0eWxlIHJ1bGVzXG4gICAgbGV0IGlzU2Nyb2xsYmFyU3R5bGVBcHBsaWVkID0gZG9jdW1lbnQuaGVhZC5xdWVyeVNlbGVjdG9yKFwiI2luZmluaXRlLWF1dG9jb21wbGV0ZS1zY3JvbGxiYXItc3R5bGVcIik7XG4gICAgaWYgKCFpc1Njcm9sbGJhclN0eWxlQXBwbGllZCkge1xuICAgICAgbGV0IHNwZWNpYWxTY3JvbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gICAgICBzcGVjaWFsU2Nyb2xsLmlkID0gXCJpbmZpbml0ZS1hdXRvY29tcGxldGUtc2Nyb2xsYmFyLXN0eWxlXCI7XG4gICAgICBzcGVjaWFsU2Nyb2xsLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAuaW5maW5pdGUtYXV0b2NvbXBsZXRlLXdyYXBwZXIgOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogNHB4O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmluZmluaXRlLWF1dG9jb21wbGV0ZS13cmFwcGVyIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwwLDAsMC4zKTtcbiAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuaW5maW5pdGUtYXV0b2NvbXBsZXRlLXdyYXBwZXIgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICAgICAgICAgICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjgpO1xuICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwwLDAsMC41KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuaW5maW5pdGUtYXV0b2NvbXBsZXRlLXdyYXBwZXIgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjp3aW5kb3ctaW5hY3RpdmUge1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMCwwLDAuNCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgIGA7XG4gICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNwZWNpYWxTY3JvbGwpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBCaW5kcyBhIHNjcm9sbCBldmVudCBoYW5kbGVyIG9uIHRoZSBvcHRpb25zXG4gICAqL1xuICBwcml2YXRlIGJpbmRTY3JvbGxSZWFjaEJvdHRvbUV2ZW50ID0gKCkgPT4ge1xuICAgIGxldCBvcHRpb25zRWxlID0gdGhpcy5nZXRPcHRpb25zQmFzZUVsZW1lbnQoKTtcbiAgICBvcHRpb25zRWxlLmFkZEV2ZW50TGlzdGVuZXIoYHNjcm9sbGAsIHRoaXMuc2Nyb2xsUmVhY2hlZEJvdHRvbUhhbmRsZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNjcm9sbCByZWFjaGVkIGJvdHRvbSBoYW5kbGVyXG4gICAqIEBwYXJhbSBlIC0gU2Nyb2xsIGV2ZW50IG9iamVjdFxuICAgKi9cbiAgcHJpdmF0ZSBzY3JvbGxSZWFjaGVkQm90dG9tSGFuZGxlciA9IGFzeW5jIChlOiBFdmVudCkgPT4ge1xuICAgIGxldCBvcHRpb25zRWxlID0gZS5jdXJyZW50VGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuICAgIGlmICghdGhpcy5mZXRjaGluZ0RhdGEgJiYgIXRoaXMucHJldmVudE1vcmVSZXF1ZXN0cyAmJiAhdGhpcy5pc09wdGlvbnNIaWRkZW4oKSkge1xuICAgICAgaWYgKG9wdGlvbnNFbGUuc2Nyb2xsVG9wICsgb3B0aW9uc0VsZS5jbGllbnRIZWlnaHQgPj0gb3B0aW9uc0VsZS5zY3JvbGxIZWlnaHQpIHtcbiAgICAgICAgdGhpcy5wYWdlKys7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgYXdhaXQgdGhpcy5idWlsZE9wdGlvbnMoXG4gICAgICAgICAgICB0aGlzLmdldElucHV0RWxlbWVudCgpLnZhbHVlLFxuICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICBpZiAodGhpcy5jb25maWcub25FcnJvcikge1xuICAgICAgICAgICAgdGhpcy5jb25maWcub25FcnJvcihlcnJvcik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENsZWFycyB0aGUgb3B0aW9ucyBsaXN0IHRhZyB3aXRoIHJlbW92aW5nIHRoZSBjbGljayBldmVudCBoYW5kbGVyc1xuICAgKiB1bmJpbmQgdGhlIGBzY3JvbGxgIGV2ZW50IGZyb20gdGhlIG9wdGlvbnNcbiAgICogKEdhcmJhZ2UgY29sbGVjdGluZylcbiAgICovXG4gIHByaXZhdGUgY2xlYXJPcHRpb25zID0gKCkgPT4ge1xuICAgIHRoaXMuZGV0YWNoT3B0aW9uRXZlbnRIYW5kbGVycyhcbiAgICAgIHRoaXMuZ2V0T3B0aW9uc0Jhc2VFbGVtZW50KClcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoYFtpbmZpbml0ZS1jbGlja2FibGVdYCksXG4gICAgKTtcbiAgICB0aGlzLnJlc2V0Q3VycmVudFBhZ2UoKTtcbiAgICB0aGlzLnByZXZlbnRNb3JlUmVxdWVzdHMgPSBmYWxzZTtcblxuICAgIGxldCBvcHRpb25MaXN0RWxlbWVudCA9IHRoaXMuZ2V0T3B0aW9uc0Jhc2VFbGVtZW50KCk7XG5cbiAgICB0aGlzLnNldEVsZW1lbnRWaXNpYmxpdHkoXG4gICAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihgLmluZmluaXRlLWF1dG9jb21wbGV0ZS1vcHRpb25zLXdyYXBwZXJgKSBhcyBIVE1MRWxlbWVudCxcbiAgICAgIGZhbHNlLFxuICAgICk7XG4gICAgb3B0aW9uTGlzdEVsZW1lbnQuaW5uZXJIVE1MID0gYGA7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgZWxlbWVudCB2aXNpYmxpdHlcbiAgICogQHBhcmFtIGVsZW1lbnQgLSBIVE1MRWxlbWVudFxuICAgKiBAcGFyYW0gdmlzaWJsZSAtIHZpc2liaWxpdHkgc3RhdHVzXG4gICAqL1xuICBwcml2YXRlIHNldEVsZW1lbnRWaXNpYmxpdHkoZWxlbWVudDogSFRNTEVsZW1lbnQsIHZpc2libGU6IGJvb2xlYW4pIHtcbiAgICBpZiAodmlzaWJsZSkge1xuICAgICAgZWxlbWVudC5jbGFzc05hbWUgPSBlbGVtZW50LmNsYXNzTmFtZVxuICAgICAgICAuc3BsaXQoXCIgXCIpXG4gICAgICAgIC5maWx0ZXIoZSA9PiBlICE9PSBgaW5maW5pdGUtYXV0b2NvbXBsZXRlLWhpZGRlbi1lbGVtZW50YClcbiAgICAgICAgLmpvaW4oXCIgXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZWxlbWVudC5jbGFzc05hbWUuaW5kZXhPZihgaW5maW5pdGUtYXV0b2NvbXBsZXRlLWhpZGRlbi1lbGVtZW50YCkgPT09IC0xKSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9IGAgaW5maW5pdGUtYXV0b2NvbXBsZXRlLWhpZGRlbi1lbGVtZW50YDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0IG9wdGlvbnMgYmFzZSBIVE1MRWxlbWVudFxuICAgKiBAcmV0dXJucyBIVE1MRWxlbWVudFxuICAgKi9cbiAgcHJpdmF0ZSBnZXRPcHRpb25zQmFzZUVsZW1lbnQoKTogSFRNTEVsZW1lbnQge1xuICAgIGlmICh0aGlzLmVsZW1lbnQpIHtcbiAgICAgIGxldCBvcHRpb25zV3JhcHBlciA9IHRoaXMuZWxlbWVudFxuICAgICAgICAucXVlcnlTZWxlY3RvcihgLmluZmluaXRlLWF1dG9jb21wbGV0ZS1vcHRpb25zLXdyYXBwZXJgKTtcbiAgICAgIGlmIChvcHRpb25zV3JhcHBlcikge1xuICAgICAgICByZXR1cm4gb3B0aW9uc1dyYXBwZXJcbiAgICAgICAgICAucXVlcnlTZWxlY3Rvcih0aGlzLm9wdGlvbnNDb21wb25lbnQubGlzdEVsZW1lbnRTZWxlY3RvcikgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBvcHRpb25zV3JhcHBlckV4Y2VwdGlvbk1zZztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgb3B0aW9uc1dyYXBwZXJFeGNlcHRpb25Nc2c7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERldGFjaGluZyB0aGUgZXZlbnQgaGFuZGxlcnMgb3ZlciB0aGUgb3B0aW9uIGVsZW1lbnRzXG4gICAqL1xuICBwcml2YXRlIGRldGFjaE9wdGlvbkV2ZW50SGFuZGxlcnMoZWxlbWVudHM6IE5vZGVMaXN0T2Y8RWxlbWVudD4pIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBlbGVtZW50c1tpXS5yZW1vdmVFdmVudExpc3RlbmVyKGBjbGlja2AsIHRoaXMub25PcHRpb25DbGlja0V2ZW50KTtcbiAgICAgIGVsZW1lbnRzW2ldLnJlbW92ZUV2ZW50TGlzdGVuZXIoYG1vdXNlb3ZlcmAsIHRoaXMub25PcHRpb25Ib3ZlckV2ZW50KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogT3B0aW9uIGNsaWNrIGV2ZW50IGhhbmRsZXJcbiAgICogQHBhcmFtIGNsaWNrRXZlbnRcbiAgICovXG4gIHByaXZhdGUgb25PcHRpb25DbGlja0V2ZW50ID0gKGNsaWNrRXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcbiAgICBpZiAodGhpcy5jb25maWcub25TZWxlY3QpIHtcbiAgICAgIHRoaXMuY29uZmlnLm9uU2VsZWN0KGNsaWNrRXZlbnQuY3VycmVudFRhcmdldCwgKGNsaWNrRXZlbnQuY3VycmVudFRhcmdldCBhcyBhbnkpLmRhdGEpO1xuICAgIH1cbiAgICB0aGlzLmNsZWFyT3B0aW9ucygpO1xuICAgIHRoaXMuc2V0SW5wdXQoKGNsaWNrRXZlbnQuY3VycmVudFRhcmdldCBhcyBhbnkpLmRhdGEudGV4dCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGlucHV0IEhUTUwgZWxlbWVudCBiZWxvdyBpbmZpbml0ZS1hdXRvY29tcGxldGUtaW5wdXQtd3JhcHBlclxuICAgKiBAcmV0dXJucyBIVE1MSW5wdXRFbGVtZW50XG4gICAqL1xuICBwcml2YXRlIGdldElucHV0RWxlbWVudCgpOiBIVE1MSW5wdXRFbGVtZW50IHtcbiAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICBsZXQgaW5wdXRXcmFwcGVyID0gdGhpcy5lbGVtZW50XG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKGAuaW5maW5pdGUtYXV0b2NvbXBsZXRlLWlucHV0LXdyYXBwZXJgKTtcbiAgICAgIGlmIChpbnB1dFdyYXBwZXIpIHtcbiAgICAgICAgcmV0dXJuIGlucHV0V3JhcHBlclxuICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKGBpbnB1dGApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBpbnB1dEVsZW1lbnRFeGNlcHRpb25Nc2c7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IGlucHV0RWxlbWVudEV4Y2VwdGlvbk1zZztcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2V0IGlucHV0IHNob3duIHRleHRcbiAgICogQHBhcmFtIHRleHRcbiAgICovXG4gIHByaXZhdGUgc2V0SW5wdXQodGV4dDogc3RyaW5nKSB7XG4gICAgdGhpcy5nZXRJbnB1dEVsZW1lbnQoKVxuICAgICAgLnZhbHVlID0gdGV4dDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IGZldGNoaW5nRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbEZldGNoaW5nRGF0YTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0IGZldGNoaW5nRGF0YShsb2FkaW5nU3RhdGUpIHtcbiAgICBpZiAodGhpcy5jb25maWcub25Mb2FkaW5nU3RhdGVDaGFuZ2UpIHtcbiAgICAgIHRoaXMuY29uZmlnLm9uTG9hZGluZ1N0YXRlQ2hhbmdlKGxvYWRpbmdTdGF0ZSk7XG4gICAgfVxuICAgIHRoaXMubG9jYWxGZXRjaGluZ0RhdGEgPSBsb2FkaW5nU3RhdGU7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGRhdGEgYmFzZWQgb24gdGV4dCwgcGFnZSBhbmQgZmV0Y2hTaXplXG4gICAqIEBwYXJhbSB0ZXh0XG4gICAqIEBwYXJhbSBwYWdlXG4gICAqIEBwYXJhbSBmZXRjaFNpemVcbiAgICovXG4gIHByaXZhdGUgYXN5bmMgZ2V0RGF0YSh0ZXh0OiBzdHJpbmcsIHBhZ2U6IG51bWJlciwgZmV0Y2hTaXplOiBudW1iZXIpOiBQcm9taXNlPElPcHRpb25bXSB8IG51bGw+IHtcbiAgICB0aGlzLnNlYXJjaGVkVGV4dCA9IHRleHQ7XG4gICAgaWYgKHRoaXMuY29uZmlnLmRhdGEpIHtcbiAgICAgIHRoaXMuZmV0Y2hpbmdEYXRhID0gdHJ1ZTtcbiAgICAgIGxldCBmcm9tID0gKHBhZ2UgLSAxKSAqIGZldGNoU2l6ZTtcbiAgICAgIGxldCB0byA9IChmZXRjaFNpemUgKiAocGFnZSAtIDEpKSArIGZldGNoU2l6ZTtcbiAgICAgIGxldCBzdGF0aWNEYXRhID0gdGhpcy5jb25maWcuZGF0YVxuICAgICAgICAgIC5maWx0ZXIob3B0aW9uID0+IG9wdGlvbi50ZXh0LnRvTG93ZXJDYXNlKCkuaW5kZXhPZih0ZXh0LnRvTG93ZXJDYXNlKCkpICE9PSAtMSlcbiAgICAgICAgICAuc2xpY2UoZnJvbSwgdG8pO1xuICAgICAgdGhpcy5mZXRjaGluZ0RhdGEgPSBmYWxzZTtcblxuICAgICAgcmV0dXJuIHN0YXRpY0RhdGE7XG4gICAgfSBlbHNlIGlmICh0aGlzLmNvbmZpZy5nZXREYXRhRnJvbUFwaSkge1xuICAgICAgdGhpcy5mZXRjaGluZ0RhdGEgPSB0cnVlO1xuICAgICAgbGV0IGFwaURhdGEgPSBhd2FpdCB0aGlzLmNvbmZpZy5nZXREYXRhRnJvbUFwaSh0ZXh0LCBwYWdlLCBmZXRjaFNpemUpO1xuICAgICAgdGhpcy5mZXRjaGluZ0RhdGEgPSBmYWxzZTtcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5zZWFyY2hlZFRleHQgPT09IHRleHQgJiZcbiAgICAgICAgdGhpcy5wYWdlID09PSBwYWdlICYmXG4gICAgICAgIHRoaXMuY29uZmlnLmZldGNoU2l6ZSA9PT0gZmV0Y2hTaXplXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIGFwaURhdGE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgZGF0YVNvdXJjZU1pc3NpbmdFeGNlcHRpb25Nc2c7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE9uIGhvdmVyaW5nIG9uIG9wdGlvbiByb3dcbiAgICogQHBhcmFtIGV2ZW50IC0gSG92ZXIgTW91c2UgRXZlbnRcbiAgICovXG4gIHByaXZhdGUgb25PcHRpb25Ib3ZlckV2ZW50ID0gKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgbGV0IG9wdGlvbnNMaXN0ID0gdGhpcy5nZXRPcHRpb25zQmFzZUVsZW1lbnQoKTtcbiAgICBsZXQgaG92ZXJlZEVsZW1lbnQgPSBvcHRpb25zTGlzdC5xdWVyeVNlbGVjdG9yKGAuJHtIT1ZFUkVEfWApO1xuICAgIGlmIChob3ZlcmVkRWxlbWVudCkge1xuICAgICAgaG92ZXJlZEVsZW1lbnQuY2xhc3NOYW1lID0gaG92ZXJlZEVsZW1lbnRcbiAgICAgICAgLmNsYXNzTmFtZVxuICAgICAgICAuc3BsaXQoXCIgXCIpXG4gICAgICAgIC5maWx0ZXIoZSA9PiBlICE9PSBIT1ZFUkVEKVxuICAgICAgICAuam9pbihcIiBcIilcbiAgICAgICAgLnRyaW0oKTtcbiAgICB9XG4gICAgbGV0IHRhcmdldCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgdGFyZ2V0LmNsYXNzTmFtZSArPSBgICR7SE9WRVJFRH1gO1xuICB9XG5cbiAgLyoqXG4gICAqIEJ1aWxkIHRoZSBvcHRpb25zIGlubmVyIHRhZ3MgaW4gb3B0aW9ucyBsaXN0IHRhZyBiYXNlZCBvbiB0aGUgdGV4dCBwYXNzZWQgYW5kIHRoZSBkYXRhIGluIGNvbmZpZ1xuICAgKiBAcGFyYW0gdGV4dCAtIFRleHQgdG8gc2VhcmNoIG9uIGluIHRoZSBhdXRvY29tcGxldGVcbiAgICogQHBhcmFtIGNsZWFyUHJldmlvdXNEYXRhIC0gRmxhZyB0byBjbGVhciBwcmV2aW91cyBvcHRpb25zIGFuZCBvdmVycmlkZSB3aXRoIHRoZSBuZXcgb25lXG4gICAqL1xuICBwcml2YXRlIGFzeW5jIGJ1aWxkT3B0aW9ucyh0ZXh0OiBzdHJpbmcsIGNsZWFyUHJldmlvdXNEYXRhOiBib29sZWFuID0gdHJ1ZSk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCBvcHRpb25MaXN0RWxlbWVudCA9IHRoaXMuZ2V0T3B0aW9uc0Jhc2VFbGVtZW50KCk7XG4gICAgaWYgKGNsZWFyUHJldmlvdXNEYXRhKSB7XG4gICAgICAgIHRoaXMuY2xlYXJPcHRpb25zKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY29uZmlnLmZldGNoU2l6ZSAmJiAhaXNOYU4odGhpcy5jb25maWcuZmV0Y2hTaXplKSkge1xuICAgICAgbGV0IGZpbHRlcmVkT3B0aW9ucyA9IGF3YWl0IHRoaXMuZ2V0RGF0YSh0ZXh0LCB0aGlzLnBhZ2UsIHRoaXMuY29uZmlnLmZldGNoU2l6ZSk7XG5cbiAgICAgIGlmIChmaWx0ZXJlZE9wdGlvbnMgIT09IG51bGwpIHtcbiAgICAgICAgaWYgKGZpbHRlcmVkT3B0aW9ucy5sZW5ndGggPCB0aGlzLmNvbmZpZy5mZXRjaFNpemUpIHtcbiAgICAgICAgICAvLyBTdG9wIGZldGNoaW5nIG1vcmUgY2h1bmtzIHdoZW5ldmVyIHlvdSBnZXQgbGVzcyB0aGFuIHRoZSBjaHVuayBmZXRjaCBzaXplXG4gICAgICAgICAgdGhpcy5wcmV2ZW50TW9yZVJlcXVlc3RzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZpbHRlcmVkT3B0aW9uc1xuICAgICAgICAgIC5mb3JFYWNoKG9wdGlvbiA9PiB7XG4gICAgICAgICAgICBsZXQgb3B0aW9uRWxlbWVudFRlbXBsYXRlID0gdGhpcy5vcHRpb25zQ29tcG9uZW50LnJlbmRlck9wdGlvbihvcHRpb24pO1xuICAgICAgICAgICAgbGV0IHRlbXBFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgICAgICAgICB0ZW1wRWxlbWVudC5pbm5lckhUTUwgPSBvcHRpb25FbGVtZW50VGVtcGxhdGU7XG4gICAgICAgICAgICBsZXQgb3B0aW9uRWxlbWVudCA9IHRlbXBFbGVtZW50LmNoaWxkTm9kZXNbMF07XG4gICAgICAgICAgICAob3B0aW9uRWxlbWVudCBhcyBhbnkpLmRhdGEgPSB7IHRleHQ6IG9wdGlvbi50ZXh0LCB2YWx1ZTogb3B0aW9uLnZhbHVlIH07XG4gICAgICAgICAgICAob3B0aW9uRWxlbWVudCBhcyBIVE1MRWxlbWVudCkuc2V0QXR0cmlidXRlKFwiaW5maW5pdGUtY2xpY2thYmxlXCIsIFwiXCIpO1xuICAgICAgICAgICAgb3B0aW9uRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGBjbGlja2AsIHRoaXMub25PcHRpb25DbGlja0V2ZW50KTtcbiAgICAgICAgICAgIG9wdGlvbkVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihgbW91c2VvdmVyYCwgdGhpcy5vbk9wdGlvbkhvdmVyRXZlbnQpO1xuICAgICAgICAgICAgb3B0aW9uTGlzdEVsZW1lbnQuYXBwZW5kQ2hpbGQob3B0aW9uRWxlbWVudCk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGZpbHRlcmVkT3B0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgbGV0IGNodW5rQ2xpZW50SGVpZ2h0ID0gb3B0aW9uTGlzdEVsZW1lbnQuY2hpbGRyZW5bMF0uY2xpZW50SGVpZ2h0O1xuICAgICAgICAgIC8vIENoZWNrIGlmIG1heEhlaWdodCBpcyBmaXRzIHRoZSBjaHVuayBzaXplIGxpc3RcbiAgICAgICAgICBpZiAodGhpcy5jb25maWcubWF4SGVpZ2h0KSB7XG4gICAgICAgICAgICBsZXQgbWF4SGVpZ2h0TnVtYmVyID0gcGFyc2VJbnQodGhpcy5jb25maWcubWF4SGVpZ2h0LCAxMCk7XG4gICAgICAgICAgICBpZiAobWF4SGVpZ2h0TnVtYmVyID49IGNodW5rQ2xpZW50SGVpZ2h0ICogdGhpcy5jb25maWcuZmV0Y2hTaXplKSB7XG4gICAgICAgICAgICAgIHRoaXMuY29uZmlnLm1heEhlaWdodCA9IChjaHVua0NsaWVudEhlaWdodCAqIHRoaXMuY29uZmlnLmZldGNoU2l6ZSAtIDUpICsgXCJweFwiO1xuICAgICAgICAgICAgICBsZXQgb3B0aW9uc1dyYXBwZXJFbGUgPVxuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKGAuaW5maW5pdGUtYXV0b2NvbXBsZXRlLW9wdGlvbnMtd3JhcHBlcmApIGFzIEhUTUxFbGVtZW50O1xuICAgICAgICAgICAgICBsZXQgb3B0aW9uc0VsZSA9XG4gICAgICAgICAgICAgICAgb3B0aW9uc1dyYXBwZXJFbGUucXVlcnlTZWxlY3Rvcih0aGlzLm9wdGlvbnNDb21wb25lbnQubGlzdEVsZW1lbnRTZWxlY3RvcikgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgICAgICAgIG9wdGlvbnNFbGUuc3R5bGUubWF4SGVpZ2h0ID0gdGhpcy5jb25maWcubWF4SGVpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9uTGlzdEVsZW1lbnQuaW5uZXJIVE1MICE9PSBgYCkge1xuICAgICAgICB0aGlzLnNldEVsZW1lbnRWaXNpYmxpdHkoXG4gICAgICAgICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYC5pbmZpbml0ZS1hdXRvY29tcGxldGUtb3B0aW9ucy13cmFwcGVyYCkgYXMgSFRNTEVsZW1lbnQsXG4gICAgICAgICAgdHJ1ZSxcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0RWxlbWVudFZpc2libGl0eShcbiAgICAgICAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihgLmluZmluaXRlLWF1dG9jb21wbGV0ZS1vcHRpb25zLXdyYXBwZXJgKSBhcyBIVE1MRWxlbWVudCxcbiAgICAgICAgICBmYWxzZSxcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBmZXRjaFNpemVFeGNlcHRpb25Nc2c7XG4gICAgfVxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Db21wb25lbnRzL0luZmluaXRlQXV0b2NvbXBsZXRlLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==