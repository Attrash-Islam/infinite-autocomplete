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
        this.fetchingData = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBhNjIwODk4ODhjNmI2MGI0ZWU2OCIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9JbnB1dENvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9PcHRpb25zQ29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9Db25zdGFudHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvSW5maW5pdGVBdXRvY29tcGxldGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQzlEQTs7O0dBR0c7QUFDSDtJQUFBO0lBSUEsQ0FBQztJQUhRLCtCQUFNLEdBQWI7UUFDSSxNQUFNLENBQUMsdUVBQW1FLENBQUM7SUFDL0UsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQztBQUpZLHdDQUFjOzs7Ozs7Ozs7O0FDSDNCOzs7R0FHRztBQUNIO0lBQUE7UUFDUyx3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RSxDQUFDLENBQUMsQ0FBQzs0QkFDdkMsSUFBSSxDQUFDLG1CQUFtQixDQUN0QixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyx3Q0FBd0MsQ0FBZ0IsRUFDbkYsSUFBSSxDQUNMLENBQUM7d0JBQ0osQ0FBQzt3QkFBQyxJQUFJLENBQUMsQ0FBQzs0QkFDTixJQUFJLENBQUMsbUJBQW1CLENBQ3RCLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLHdDQUF3QyxDQUFnQixFQUNuRixLQUFLLENBQ04sQ0FBQzt3QkFDSixDQUFDOzs0QkFHRCxNQUFNLDZCQUFxQixDQUFDOzs7OztLQUUvQjtJQUVILDJCQUFDO0FBQUQsQ0FBQztBQTF0Qlksb0RBQW9CIiwiZmlsZSI6ImluZGV4LmRlYnVnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IGZhY3RvcnkoKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGE2MjA4OTg4OGM2YjYwYjRlZTY4IiwiaW1wb3J0IHsgSUlucHV0Q29tcG9uZW50IH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSUlucHV0Q29tcG9uZW50XCI7XG5cbi8qKlxuICogSW5wdXQgY29tcG9uZW50IGRlZmF1bHQgaW1wbGVtZW50YXRpb25cbiAqIEBhdXRob3IgSXNsYW0gQXR0cmFzaFxuICovXG5leHBvcnQgY2xhc3MgSW5wdXRDb21wb25lbnQgaW1wbGVtZW50cyBJSW5wdXRDb21wb25lbnQge1xuICBwdWJsaWMgcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIGA8aW5wdXQgY2xhc3M9XCJpbmZpbml0ZS1hdXRvY29tcGxldGUtZGVmYXVsdC1pbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgLz5gO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQ29tcG9uZW50cy9JbnB1dENvbXBvbmVudC50cyIsImltcG9ydCB7IElPcHRpb25zQ29tcG9uZW50IH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSU9wdGlvbnNDb21wb25lbnRcIjtcbmltcG9ydCB7IElPcHRpb24gfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JT3B0aW9uXCI7XG5cbi8qKlxuICogT3B0aW9ucyBjb21wb25lbnQgZGVmYXVsdCBpbXBsZW1lbnRhdGlvblxuICogQGF1dGhvciBJc2xhbSBBdHRyYXNoXG4gKi9cbmV4cG9ydCBjbGFzcyBPcHRpb25zQ29tcG9uZW50IGltcGxlbWVudHMgSU9wdGlvbnNDb21wb25lbnQge1xuICBwdWJsaWMgbGlzdEVsZW1lbnRTZWxlY3Rvcjogc3RyaW5nID0gYHVsYDtcblxuICBwdWJsaWMgcmVuZGVyKCkge1xuICAgIHJldHVybiBgPCR7dGhpcy5saXN0RWxlbWVudFNlbGVjdG9yfSBjbGFzcz1cImluZmluaXRlLWF1dG9jb21wbGV0ZS1kZWZhdWx0LW9wdGlvbnNcIj48LyR7dGhpcy5saXN0RWxlbWVudFNlbGVjdG9yfT5gO1xuICB9XG5cbiAgcHVibGljIHJlbmRlck9wdGlvbihvcHRpb246IElPcHRpb24pOiBzdHJpbmcge1xuICAgIHJldHVybiBgPGxpPlxuICAgICAgICAgICAgICAgICR7b3B0aW9uLnRleHR9XG4gICAgICAgICAgICA8L2xpPmA7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0NvbXBvbmVudHMvT3B0aW9uc0NvbXBvbmVudC50cyIsIlxuLyoqIEhvdmVyZWQgc3RhdGUgd2hlbiBuYXZpZ2F0aW9uIHRocm91Z2ggdXBBcnJvdy9kb3duQXJyb3cgd2hpbGUgb3B0aW9ucyBpcyBvcGVuICovXG5leHBvcnQgY29uc3QgSE9WRVJFRCA9IFwiaG92ZXJlZFwiO1xuXG4vKipcbiAqIEtleSBkb3duIHN0YXRlcyAoa2V5Q29kZXMpXG4gKi9cbmV4cG9ydCBjb25zdCBLRVlfUFJFU1NfU1RBVEVTID0ge1xuICAgIFVQOiAzOCxcbiAgICBET1dOOiA0MCxcbiAgICBFTlRFUjogMTMsXG59O1xuXG5leHBvcnQgY29uc3QgTWlzc2luZ0lucHV0RWxlbWVudEluSW5wdXRDb21wb25lbnRFeGNlcHRpb25Nc2cgPVxuICBuZXcgRXJyb3IoYEN1c3RvbWl6ZWQgaW5wdXQgc2hvdWxkIGNvbnRhaW4gaW5wdXQgZWxlbWVudCA8aW5wdXQgLz5gKTtcblxuZXhwb3J0IGNvbnN0IG9wdGlvbnNXcmFwcGVyRXhjZXB0aW9uTXNnID0gbmV3IEVycm9yKGBDb3VsZG4ndCBnZXQgdGhlIG9wdGlvbnMgYmFzZSBlbGVtZW50LmApO1xuXG5leHBvcnQgY29uc3QgaW5wdXRFbGVtZW50RXhjZXB0aW9uTXNnID0gbmV3IEVycm9yKGBDb3VsZG4ndCBnZXQgdGhlIGlucHV0IGVsZW1lbnQuYCk7XG5cbmV4cG9ydCBjb25zdCBkYXRhU291cmNlTWlzc2luZ0V4Y2VwdGlvbk1zZyA9IG5ldyBFcnJvciAoYFlvdSBtdXN0IHBhc3MgZGF0YSBvciBnZXREYXRhRnJvbUFwaSBmdW5jdGlvbiB2aWEgY29uZmlnYCk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaFNpemVFeGNlcHRpb25Nc2cgPSBuZXcgRXJyb3IoYGZldGNoU2l6ZSBtdXN0IGJlIG92ZXJyaWRlbiB3aXRoIGNvcnJlY3QgbnVtZXJpYyB2YWx1ZWApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0NvbnN0YW50cy9pbmRleC50cyIsImltcG9ydCB7IElucHV0Q29tcG9uZW50IGFzIGRlZmF1bHRJbnB1dEltcGwgfSBmcm9tIFwiLi9JbnB1dENvbXBvbmVudFwiO1xuaW1wb3J0IHsgT3B0aW9uc0NvbXBvbmVudCBhcyBkZWZhdWx0T3B0aW9uc0ltcGwgfSBmcm9tIFwiLi9PcHRpb25zQ29tcG9uZW50XCI7XG5pbXBvcnQgeyBJbmZpbml0ZUF1dG9jb21wbGV0ZUNvbmZpZyB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0luZmluaXRlQXV0b2NvbXBsZXRlQ29uZmlnXCI7XG5pbXBvcnQgeyBJSW5wdXRDb21wb25lbnQsIElJbnB1dENvbXBvZW5lbnRDb25zdHJ1Y3RvciB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lJbnB1dENvbXBvbmVudFwiO1xuaW1wb3J0IHsgSU9wdGlvbnNDb21wb25lbnQsIElPcHRpb25zQ29tcG9uZW50Q29uc3RydWN0b3IgfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JT3B0aW9uc0NvbXBvbmVudFwiO1xuaW1wb3J0IHsgSUluZmluaXRlQXV0b2NvbXBsZXRlIH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSUluZmluaXRlQXV0b2NvbXBsZXRlXCI7XG5pbXBvcnQgeyBJT3B0aW9uIH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSU9wdGlvblwiO1xuaW1wb3J0IHsgSE9WRVJFRCwgS0VZX1BSRVNTX1NUQVRFUywgTWlzc2luZ0lucHV0RWxlbWVudEluSW5wdXRDb21wb25lbnRFeGNlcHRpb25Nc2csIG9wdGlvbnNXcmFwcGVyRXhjZXB0aW9uTXNnLCBpbnB1dEVsZW1lbnRFeGNlcHRpb25Nc2csIGRhdGFTb3VyY2VNaXNzaW5nRXhjZXB0aW9uTXNnLCBmZXRjaFNpemVFeGNlcHRpb25Nc2cgfSBmcm9tIFwiLi4vQ29uc3RhbnRzL2luZGV4XCI7XG5cbi8qKlxuICogRGVmYXVsdCBJbnB1dCBpbiBpbmZpbml0ZS1hdXRvY29tcGxldGUgY29tcG9uZW50XG4gKi9cbmV4cG9ydCBjb25zdCBJbnB1dENvbXBvbmVudCA9IGRlZmF1bHRJbnB1dEltcGw7XG5cbi8qKlxuICogRGVmYXVsdCBJbnB1dCBpbiBpbmZpbml0ZS1hdXRvY29tcGxldGUgY29tcG9uZW50XG4gKi9cbmV4cG9ydCBjb25zdCBPcHRpb25zQ29tcG9uZW50ID0gZGVmYXVsdE9wdGlvbnNJbXBsO1xuXG4vKipcbiAqIGluZmluaXRlLWF1dG9jb21wbGV0ZSBjb21wb25lbnQgaW1wbGVtZW50YXRpb25cbiAqIEBhdXRob3IgSXNsYW0gQXR0cmFzaFxuICovXG5leHBvcnQgY2xhc3MgSW5maW5pdGVBdXRvY29tcGxldGUgaW1wbGVtZW50cyBJSW5maW5pdGVBdXRvY29tcGxldGUge1xuXG4gIHByaXZhdGUgZWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gIHByaXZhdGUgaW5wdXRDb21wb25lbnQ6IElJbnB1dENvbXBvbmVudDtcbiAgcHJpdmF0ZSBvcHRpb25zQ29tcG9uZW50OiBJT3B0aW9uc0NvbXBvbmVudDtcbiAgcHJpdmF0ZSBwYWdlOiBudW1iZXIgPSAxO1xuICBwcml2YXRlIHNlYXJjaGVkVGV4dDogc3RyaW5nID0gXCJcIjtcbiAgcHJpdmF0ZSBpc0Rlc3Ryb3llZCA9IGZhbHNlO1xuICBwcml2YXRlIGNvbmZpZzogSW5maW5pdGVBdXRvY29tcGxldGVDb25maWc7XG4gIHByaXZhdGUgcHJldmVudE1vcmVSZXF1ZXN0czogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIGZldGNoaW5nRGF0YTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBEZWZhdWx0IGNvbmZpZ3VyYXRpb24gb2JqZWN0XG4gICAqL1xuICBwcml2YXRlIGRlZmF1bHRDb25maWc6IEluZmluaXRlQXV0b2NvbXBsZXRlQ29uZmlnID0ge1xuICAgIGZldGNoU2l6ZTogMTAsXG4gICAgbWF4SGVpZ2h0OiBcIjE2MHB4XCIsXG4gIH07XG5cbiAgLyoqXG4gICAqIGNvbnN0cnVjdG9yIGZvciBJbmZpbml0ZUF1dG9jb21wbGV0ZSBjbGFzc1xuICAgKiBFbmFibGluZyBwbHVnZ2FibGUgc3lzdGVtIGxpbmtlZCB3aXRoIEludGVyZmFjZXMgb25seVxuICAgKiBAcGFyYW0gZWxlbWVudCAtIEhUTUxFbGVtZW50IHRvIGFwcGVuZCB0aGUgaW5maW5pdGUtYXV0b2NvbXBsZXRlIGluIGl0XG4gICAqIEBwYXJhbSBjb25maWcgLSBJbmZpbml0ZUF1dG9jb21wbGV0ZSBjb25maWcgb3B0aW9uc1xuICAgKiBAcGFyYW0gb3B0aW9uQ29tcG9uZW50IC0gT3B0aW9uIGNvbXBvbmVudCBpbXBsZW1lbnRhdGlvbiB0byBiZSBpbmplY3RlZCAob3IgZGVmYXVsdClcbiAgICogQHBhcmFtIGlucHV0Q29tcG9uZW50IC0gSW5wdXQgY29tcG9uZW50IGltcGxlbWVudGF0aW9uIHRvIGJlIGluamVjdGVkIChvciBkZWZhdWx0KVxuICAgKiBAcGFyYW0gb3B0aW9uc0NvbXBvbmVudCAtIE9wdGlvbnMgY29tcG9uZW50IGltcGxlbWVudGF0aW9uIHRvIGJlIGluamVjdGVkIChvciBkZWZhdWx0KVxuICAgKi9cbiAgY29uc3RydWN0b3IoZWxlbWVudDogSFRNTEVsZW1lbnQsIGNvbmZpZz86IEluZmluaXRlQXV0b2NvbXBsZXRlQ29uZmlnKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLmNvbmZpZyA9IHsgLi4udGhpcy5kZWZhdWx0Q29uZmlnLCAuLi5jb25maWcgfTtcbiAgICB0aGlzLmlucHV0Q29tcG9uZW50ID0gdGhpcy5nZXRDdXN0b21pemVkSW5wdXQoKTtcbiAgICB0aGlzLm9wdGlvbnNDb21wb25lbnQgPSB0aGlzLmdldEN1c3RvbWl6ZWRPcHRpb25zKCk7XG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBjb25maWcgb2JqZWN0IHdpdGggZXh0ZW5kaW5nXG4gICAqIEBwYXJhbSBjb25maWcgLSBpbmZpbml0ZS1hdXRvY29tcGxldGUgY29uZmlndXJhdGlvbiBvYmplY3RcbiAgICovXG4gIHB1YmxpYyBzZXRDb25maWcgPSAoY29uZmlnOiBJbmZpbml0ZUF1dG9jb21wbGV0ZUNvbmZpZykgPT4ge1xuICAgIHRoaXMuZGVzdHJveSgpO1xuICAgIHRoaXMuY29uZmlnID0geyAuLi50aGlzLmNvbmZpZywgLi4uY29uZmlnIH07XG4gICAgdGhpcy5pbnB1dENvbXBvbmVudCA9IHRoaXMuZ2V0Q3VzdG9taXplZElucHV0KCk7XG4gICAgdGhpcy5vcHRpb25zQ29tcG9uZW50ID0gdGhpcy5nZXRDdXN0b21pemVkT3B0aW9ucygpO1xuICAgIHRoaXMuaW5pdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc3Ryb3kgdGhlIGluZmluaXRlLWF1dG9jb21wbGV0ZSBhbmQgdW5iaW5kIGFsbCBldmVudHNcbiAgICovXG4gIHB1YmxpYyBkZXN0cm95ID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLmlzRGVzdHJveWVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmlzT3B0aW9uc0hpZGRlbigpKSB7XG4gICAgICB0aGlzLmNsZWFyT3B0aW9ucygpO1xuICAgIH1cblxuICAgIGxldCBvcHRpb25zTGlzdCA9IHRoaXMuZ2V0T3B0aW9uc0Jhc2VFbGVtZW50KCk7XG4gICAgb3B0aW9uc0xpc3QucmVtb3ZlRXZlbnRMaXN0ZW5lcihgc2Nyb2xsYCwgdGhpcy5zY3JvbGxSZWFjaGVkQm90dG9tSGFuZGxlcik7XG4gICAgbGV0IGlucHV0RWxlID0gdGhpcy5nZXRJbnB1dEVsZW1lbnQoKTtcbiAgICBpbnB1dEVsZS5yZW1vdmVFdmVudExpc3RlbmVyKGBpbnB1dGAsIHRoaXMub25JbnB1dENoYW5nZSk7XG4gICAgaW5wdXRFbGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihgY2xpY2tgLCB0aGlzLm9uSW5wdXRDaGFuZ2UpO1xuICAgIGlucHV0RWxlLnJlbW92ZUV2ZW50TGlzdGVuZXIoYGtleWRvd25gLCB0aGlzLm9uS2V5UHJlc3NlZCk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihgY2xpY2tgLCB0aGlzLm9uRG9jdW1lbnRDbGlja0hhbmRsZXIpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMub25Fc2NhcGVFdmVudEhhbmRsZXIpO1xuICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSBgYDtcbiAgICB0aGlzLmlzRGVzdHJveWVkID0gdHJ1ZTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q3VzdG9taXplZElucHV0ID0gKCkgPT5cbiAgICB0aGlzLmNvbmZpZy5jdXN0b21pemVkSW5wdXQgPyBuZXcgdGhpcy5jb25maWcuY3VzdG9taXplZElucHV0KCkgOiBuZXcgZGVmYXVsdElucHV0SW1wbCgpXG5cbiAgcHJpdmF0ZSBnZXRDdXN0b21pemVkT3B0aW9ucyA9ICgpID0+XG4gICAgdGhpcy5jb25maWcuY3VzdG9taXplZE9wdGlvbnMgPyBuZXcgdGhpcy5jb25maWcuY3VzdG9taXplZE9wdGlvbnMoKSA6IG5ldyBkZWZhdWx0T3B0aW9uc0ltcGwoKVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGhvb2sgdGhhdCBnZXQgZXhlY3V0ZWQgaW1tZWRpYXRseSBhZnRlciB1c2luZyB0aGUgaW5maW5pdGUtYXV0b2NvbXBsZXRlIGNvbXBvbmVudFxuICAgKi9cbiAgcHJpdmF0ZSBpbml0ID0gKCkgPT4ge1xuICAgIHRoaXMuYXBwbHlTdHlsZXNSdWxlcygpO1xuICAgIHRoaXMuYXBwZW5kSW5maW5pdGVBdXRvY29tcGxldGVXcmFwcGVyQ2xhc3MoKTtcbiAgICB0aGlzLmxpbmtJbnB1dENvbXBvbmVudCgpO1xuICAgIHRoaXMubGlua09wdGlvbnNDb21wb25lbnQoKTtcbiAgICB0aGlzLmJpbmRTY3JvbGxSZWFjaEJvdHRvbUV2ZW50KCk7XG4gICAgdGhpcy5iaW5kRXNjYXBlRXZlbnQoKTtcbiAgICB0aGlzLmJpbmRPdXRTaWRlQ2xpY2tFdmVudCgpO1xuICAgIHRoaXMuaXNEZXN0cm95ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiAoIzEpIEJpbmRzIGEgY2xpY2sgaGFuZGxlciB0byBkZXRlY3Qgd2hlcmUgdGhlIHVzZXIgY2xpY2tlZFxuICAgKiBJZiBjbGljayBpcyBvdXQgc2lkZSB0aGUgbWFpbiB3cmFwcGVyIGFyZWEgdGhlbiBjbG9zZSBvcHRpb25zXG4gICAqL1xuICBwcml2YXRlIGJpbmRPdXRTaWRlQ2xpY2tFdmVudCA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKGBjbGlja2AsIHRoaXMub25Eb2N1bWVudENsaWNrSGFuZGxlcik7XG4gIH1cblxuICAvKipcbiAgICogb24gZG9jdW1lbnQgY2xpY2sgaGFuZGxlclxuICAgKiBAcGFyYW0gZXZlbnQgLSBFdmVudFxuICAgKi9cbiAgcHJpdmF0ZSBvbkRvY3VtZW50Q2xpY2tIYW5kbGVyID0gKGV2ZW50OiBFdmVudCkgPT4ge1xuICAgIGlmICghdGhpcy5pc09wdGlvbnNIaWRkZW4oKSkge1xuICAgICAgbGV0IGNsaWNrZWRPdXRTaWRlID0gdGhpcy5jaGVja0lmQ2xpY2tlZE91dFNpZGVUaGVBdXRvY29tcGxldGVDb21wb25lbnRzKGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudCk7XG4gICAgICBpZiAoY2xpY2tlZE91dFNpZGUpIHtcbiAgICAgICAgICB0aGlzLmNsZWFyT3B0aW9ucygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBjbGljayBpcyBvdXRzaWRlIHRoZSBwbHVnaW5cbiAgICogQHBhcmFtIGVsZW1lbnQgLSBIVE1MRWxlbWVudFxuICAgKi9cbiAgcHJpdmF0ZSBjaGVja0lmQ2xpY2tlZE91dFNpZGVUaGVBdXRvY29tcGxldGVDb21wb25lbnRzID0gKGVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCkgPT4ge1xuICAgIGlmIChlbGVtZW50ID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAoZWxlbWVudCA9PT0gdGhpcy5lbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGVja0lmQ2xpY2tlZE91dFNpZGVUaGVBdXRvY29tcGxldGVDb21wb25lbnRzKGVsZW1lbnQucGFyZW50RWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqICgjMTEpIEJpbmRzIGVzY2FwZSBldmVudCBoYW5kbGVyIHRvIGNsZWFyIHRoZSBvcHRpb25zIHdoZW4gY2xpY2tpbmcgRXNjXG4gICAqL1xuICBwcml2YXRlIGJpbmRFc2NhcGVFdmVudCA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLm9uRXNjYXBlRXZlbnRIYW5kbGVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFc2NhcGUgZXZlbnQgaGFuZGxlclxuICAgKiBAcGFyYW0gZSAtIEtleWJvYXJkRXZlbnRcbiAgICovXG4gIHByaXZhdGUgb25Fc2NhcGVFdmVudEhhbmRsZXIgPSBlID0+IHtcbiAgICBpZiAoZS5rZXlDb2RlID09PSAyNyAmJiAhdGhpcy5pc09wdGlvbnNIaWRkZW4oKSkgeyAvLyBFc2Mga2V5IHByZXNzZWRcbiAgICAgICAgdGhpcy5jbGVhck9wdGlvbnMoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQXBwZW5kIGluZmluaXRlIGF1dG9jb21wbGV0ZSBtYWluIHdyYXBwZXIgY2xhc3NOYW1lXG4gICAqL1xuICBwcml2YXRlIGFwcGVuZEluZmluaXRlQXV0b2NvbXBsZXRlV3JhcHBlckNsYXNzID0gKCkgPT4ge1xuICAgIGlmICghdGhpcy5lbGVtZW50LmNsYXNzTmFtZSB8fCB0aGlzLmVsZW1lbnQuY2xhc3NOYW1lLmluZGV4T2YoYGluZmluaXRlLWF1dG9jb21wbGV0ZS13cmFwcGVyYCkgPT09IC0xKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NOYW1lID0gdGhpcy5lbGVtZW50XG4gICAgICAgIC5jbGFzc05hbWVcbiAgICAgICAgLnNwbGl0KGAgYClcbiAgICAgICAgLmNvbmNhdChbYGluZmluaXRlLWF1dG9jb21wbGV0ZS13cmFwcGVyYF0pXG4gICAgICAgIC5maWx0ZXIoYyA9PiBjKVxuICAgICAgICAuam9pbihgIGApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldCBjdXJyZW50IHBhZ2VcbiAgICovXG4gIHByaXZhdGUgcmVzZXRDdXJyZW50UGFnZSA9ICgpID0+IHtcbiAgICB0aGlzLnBhZ2UgPSAxO1xuICB9XG5cbiAgLyoqXG4gICAqIExpbmsgaW5wdXQgY29tcG9uZW50IGludG8gdGhlIGlucHV0IHdyYXBwZXJcbiAgICovXG4gIHByaXZhdGUgbGlua0lucHV0Q29tcG9uZW50ID0gKCkgPT4ge1xuICAgIGxldCBpbnB1dFdyYXBwZXJFbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBpbnB1dFdyYXBwZXJFbGUuY2xhc3NOYW1lID0gYGluZmluaXRlLWF1dG9jb21wbGV0ZS1pbnB1dC13cmFwcGVyYDtcbiAgICBpbnB1dFdyYXBwZXJFbGUuaW5uZXJIVE1MID0gdGhpcy5pbnB1dENvbXBvbmVudC5yZW5kZXIoKTtcbiAgICBsZXQgaW5wdXRFbGUgPSBpbnB1dFdyYXBwZXJFbGUucXVlcnlTZWxlY3RvcihgaW5wdXRgKSBhcyBIVE1MRWxlbWVudDtcbiAgICBpZiAoIWlucHV0RWxlKSB7XG4gICAgICB0aHJvdyBNaXNzaW5nSW5wdXRFbGVtZW50SW5JbnB1dENvbXBvbmVudEV4Y2VwdGlvbk1zZztcbiAgICB9XG4gICAgaW5wdXRFbGVcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKGBpbnB1dGAsIHRoaXMub25JbnB1dENoYW5nZSk7XG4gICAgLy8gKCMyKSBTdGFydCB0byBzaG93IG9wdGlvbnMgd2hlbiBmb2N1cyBvbiB0aGUgaW5wdXRcbiAgICBpbnB1dEVsZVxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgdGhpcy5vbklucHV0Q2hhbmdlKTtcbiAgICBpbnB1dEVsZVxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoYGtleWRvd25gLCB0aGlzLm9uS2V5UHJlc3NlZCk7XG4gICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKGlucHV0V3JhcHBlckVsZSk7XG4gIH1cblxuICAvKipcbiAgICogT24ga2V5ZG93biBwcmVzc2luZyBpbiBpbnB1dCBlbGVtZW50XG4gICAqIEBwYXJhbSBrZXlkb3duRXZlbnQgLSBwcmVzc2luZyBrZXkgZXZlbnRcbiAgICovXG4gIHByaXZhdGUgb25LZXlQcmVzc2VkID0gKGtleWRvd25FdmVudDogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgIGlmICghdGhpcy5pc09wdGlvbnNIaWRkZW4oKSkge1xuICAgICAgbGV0IGN1cnJlbnRIb3ZlcmVkID0gdGhpcy5nZXROYXZpZ2F0aW9uSW5kZXgoKTtcbiAgICAgIGlmIChjdXJyZW50SG92ZXJlZCA9PT0gLTEpIHtcbiAgICAgICAgaWYgKGtleWRvd25FdmVudC5rZXlDb2RlID09PSBLRVlfUFJFU1NfU1RBVEVTLkRPV04pIHtcbiAgICAgICAgICB0aGlzLnRvZ2dsZUhvdmVyZWRTdGF0ZSgwLCBrZXlkb3duRXZlbnQpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzd2l0Y2ggKGtleWRvd25FdmVudC5rZXlDb2RlKSB7XG4gICAgICAgICAgY2FzZSBLRVlfUFJFU1NfU1RBVEVTLkRPV046XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZUhvdmVyZWRTdGF0ZShjdXJyZW50SG92ZXJlZCArIDEsIGtleWRvd25FdmVudCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIEtFWV9QUkVTU19TVEFURVMuVVA6XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZUhvdmVyZWRTdGF0ZShjdXJyZW50SG92ZXJlZCAtIDEsIGtleWRvd25FdmVudCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIEtFWV9QUkVTU19TVEFURVMuRU5URVI6XG4gICAgICAgICAgICB0aGlzLmNsaWNrT25Ib3ZlcmVkKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2xpY2sgb24gaG92ZXJlZCBlbGVtZW50XG4gICAqL1xuICBwcml2YXRlIGNsaWNrT25Ib3ZlcmVkID0gKCkgPT4ge1xuICAgIGxldCBvcHRpb25zTGlzdCA9IHRoaXMuZ2V0T3B0aW9uc0Jhc2VFbGVtZW50KCk7XG4gICAgbGV0IGhvdmVyZWRFbGVtZW50ID0gb3B0aW9uc0xpc3QucXVlcnlTZWxlY3RvcihgLiR7SE9WRVJFRH1gKSBhcyBIVE1MRWxlbWVudDtcbiAgICBpZiAoaG92ZXJlZEVsZW1lbnQpIHsgaG92ZXJlZEVsZW1lbnQuY2xpY2soKTsgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNpbXVsYXRlIFNjcm9sbGVkIHRvIGJvdHRvbVxuICAgKi9cbiAgcHJpdmF0ZSBzaW11bGF0ZVNjcm9sbFRvQm90dG9tID0gKCkgPT4ge1xuICAgIGxldCBvcHRpb25zTGlzdCA9IHRoaXMuZ2V0T3B0aW9uc0Jhc2VFbGVtZW50KCk7XG4gICAgbGV0IHNjcm9sbEV2ZW50ID0gbmV3IEV2ZW50KFwic2Nyb2xsXCIsIHsgYnViYmxlczogdHJ1ZSB9KTtcbiAgICBvcHRpb25zTGlzdC5zY3JvbGxUb3AgPSAxMDAwMDsgLy8gU2ltdWxhdGUgcmVhY2hlZCBib3R0b21cbiAgICBvcHRpb25zTGlzdC5kaXNwYXRjaEV2ZW50KHNjcm9sbEV2ZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGUgaG92ZXJlZCBzdGF0ZSBvbiBzcGVjaWZpYyBpbmRleCBpbiBvcHRpb25zIGxpc3RcbiAgICogQHBhcmFtIGluZGV4IC0gVGhlIGluZGV4IHRvIGJlIGFwcGxpZWQgYXMgaG92ZXJlZFxuICAgKi9cbiAgcHJpdmF0ZSB0b2dnbGVIb3ZlcmVkU3RhdGUgPSAoaW5kZXg6IG51bWJlciwga2V5ZG93bkV2ZW50OiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgbGV0IG9wdGlvbnNMaXN0ID0gdGhpcy5nZXRPcHRpb25zQmFzZUVsZW1lbnQoKTtcbiAgICBpZiAoaW5kZXggPT09IG9wdGlvbnNMaXN0LmNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgdGhpcy5zaW11bGF0ZVNjcm9sbFRvQm90dG9tKCk7XG4gICAgfVxuXG4gICAgaWYgKGluZGV4ID49IDAgJiYgaW5kZXggPCBvcHRpb25zTGlzdC5jaGlsZHJlbi5sZW5ndGgpIHtcblxuICAgICAgbGV0IGhvdmVyZWRFbGVtZW50ID0gb3B0aW9uc0xpc3QucXVlcnlTZWxlY3RvcihgLiR7SE9WRVJFRH1gKTtcbiAgICAgIGlmIChob3ZlcmVkRWxlbWVudCkge1xuICAgICAgICBob3ZlcmVkRWxlbWVudC5jbGFzc05hbWUgPSBob3ZlcmVkRWxlbWVudFxuICAgICAgICAgIC5jbGFzc05hbWVcbiAgICAgICAgICAuc3BsaXQoXCIgXCIpXG4gICAgICAgICAgLmZpbHRlcihlID0+IGUgIT09IEhPVkVSRUQpXG4gICAgICAgICAgLmpvaW4oXCIgXCIpXG4gICAgICAgICAgLnRyaW0oKTtcbiAgICAgIH1cblxuICAgICAgbGV0IHRhcmdldEVsZW1lbnQgPSBvcHRpb25zTGlzdC5jaGlsZHJlbltpbmRleF0gYXMgSFRNTEVsZW1lbnQ7XG4gICAgICB0YXJnZXRFbGVtZW50LmNsYXNzTmFtZSArPSBgICR7SE9WRVJFRH1gO1xuXG4gICAgICAvLyBJZiBob3ZlcmVkIGlzIG5vdCBpbiB0aGUgc2Nyb2xsYWJsZSB2aWV3XG4gICAgICBpZiAodGFyZ2V0RWxlbWVudC5vZmZzZXRUb3AgPCBvcHRpb25zTGlzdC5zY3JvbGxUb3AgfHwgKFxuICAgICAgICAgIHRhcmdldEVsZW1lbnQub2Zmc2V0VG9wIC0gb3B0aW9uc0xpc3Quc2Nyb2xsVG9wID4gb3B0aW9uc0xpc3QuY2xpZW50SGVpZ2h0KSkge1xuICAgICAgICBzd2l0Y2ggKGtleWRvd25FdmVudC5rZXlDb2RlKSB7XG4gICAgICAgICAgY2FzZSBLRVlfUFJFU1NfU1RBVEVTLlVQOlxuICAgICAgICAgICAgdGFyZ2V0RWxlbWVudC5zY3JvbGxJbnRvVmlldyh0cnVlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgS0VZX1BSRVNTX1NUQVRFUy5ET1dOOlxuICAgICAgICAgICAgdGFyZ2V0RWxlbWVudC5zY3JvbGxJbnRvVmlldyhmYWxzZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgbmF2aWdhdGlvbiBpbmRleCBpZiBvcHRpb25zIGlzIG9wZW5cbiAgICogQHJldHVybnMgT3B0aW9ucyBjdXJyZW50IGluZGV4XG4gICAqL1xuICBwcml2YXRlIGdldE5hdmlnYXRpb25JbmRleCA9ICgpID0+IHtcbiAgICBsZXQgb3B0aW9uc0xpc3QgPSB0aGlzLmdldE9wdGlvbnNCYXNlRWxlbWVudCgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0aW9uc0xpc3QuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBvcHRpb24gPSBvcHRpb25zTGlzdC5jaGlsZHJlbltpXTtcbiAgICAgIGlmIChvcHRpb24uY2xhc3NOYW1lLmluZGV4T2YoSE9WRVJFRCkgIT09IC0xKSB7XG4gICAgICAgIHJldHVybiBpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAtMTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnB1dCBjb21wb25lbnQgYGNoYW5nZWAgZXZlbnQgaGFuZGxlclxuICAgKiBAcGFyYW0gaW5wdXRDaGFuZ2VFdmVudCAtIElucHV0IGNoYW5nZSBldmVudCBoYW5kbGVyXG4gICAqL1xuICBwcml2YXRlIG9uSW5wdXRDaGFuZ2UgPSBhc3luYyAoaW5wdXRDaGFuZ2VFdmVudDogRXZlbnQpID0+IHtcbiAgICBsZXQgdGFyZ2V0ID0gaW5wdXRDaGFuZ2VFdmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgLy8gSWYgdXNlciBwYXNzIHNwZWNpYWwgYmVoYXZpb3IgZm9yIHR5cGluZyB2aWEgY29uZmlndXJhdGlvblxuICAgIGlmICh0aGlzLmlucHV0Q29tcG9uZW50Lm9uSW5wdXRDaGFuZ2UpIHtcbiAgICAgIHRoaXMuaW5wdXRDb21wb25lbnQub25JbnB1dENoYW5nZSh0YXJnZXQsIHRhcmdldC52YWx1ZSk7XG4gICAgfVxuICAgIC8vIElmIHdlIHR5cGUgYWx3YXlzIGZldGNoIGRhdGEgYW5kIGJ1aWxkIG9wdGlvbnNcbiAgICAvLyBJZiB3ZSBjbGljayBvbiBpbnB1dCBhbmQgdGhlIG9wdGlvbnMgaXMgaGlkZGVuIGJ1aWxkIHRoZSBvcHRpb25zXG4gICAgLy8gSWYgd2UgY2xpY2sgb24gaW5wdXQgYW5kIHRoZSBvcHRpb25zIGlzIGFscmVhZHkgb3BlbmVkIGRvbid0IGRvIGFueXRoaW5nXG4gICAgaWYgKGlucHV0Q2hhbmdlRXZlbnQudHlwZSA9PT0gYGlucHV0YCB8fFxuICAgICAgICAgICAgKGlucHV0Q2hhbmdlRXZlbnQudHlwZSA9PT0gYGNsaWNrYCAmJiB0aGlzLmlzT3B0aW9uc0hpZGRlbigpKSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgdGhpcy5idWlsZE9wdGlvbnModGFyZ2V0LnZhbHVlLCB0cnVlKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICBpZiAodGhpcy5jb25maWcub25FcnJvcikge1xuICAgICAgICAgIHRoaXMuY29uZmlnLm9uRXJyb3IoZXJyb3IpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIExpbmsgb3B0aW9ucyBjb21wb25lbnQgaW50byB0aGUgaW5maW5pdGUgYXV0b2NvbXBsZXRlIGNvbXBvbmVudFxuICAgKi9cbiAgcHJpdmF0ZSBsaW5rT3B0aW9uc0NvbXBvbmVudCA9ICgpID0+IHtcbiAgICBsZXQgb3B0aW9uc1dyYXBwZXJFbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBvcHRpb25zV3JhcHBlckVsZS5jbGFzc05hbWUgPSBgaW5maW5pdGUtYXV0b2NvbXBsZXRlLW9wdGlvbnMtd3JhcHBlcmA7XG4gICAgb3B0aW9uc1dyYXBwZXJFbGUuaW5uZXJIVE1MID0gdGhpcy5vcHRpb25zQ29tcG9uZW50LnJlbmRlcigpO1xuICAgIGxldCBvcHRpb25zRWxlID0gb3B0aW9uc1dyYXBwZXJFbGUucXVlcnlTZWxlY3Rvcih0aGlzLm9wdGlvbnNDb21wb25lbnQubGlzdEVsZW1lbnRTZWxlY3RvcikgYXMgSFRNTEVsZW1lbnQ7XG4gICAgdGhpcy5zZXRFbGVtZW50VmlzaWJsaXR5KG9wdGlvbnNXcmFwcGVyRWxlLCBmYWxzZSk7XG4gICAgb3B0aW9uc0VsZS5zdHlsZS5vdmVyZmxvdyA9IGBzY3JvbGxgO1xuICAgIG9wdGlvbnNFbGUuc3R5bGUub3ZlcmZsb3dYID0gYGhpZGRlbmA7XG4gICAgb3B0aW9uc0VsZS5zdHlsZS5ib3JkZXIgPSBgMXB4IHNvbGlkICNiY2JjYmNgO1xuICAgIG9wdGlvbnNFbGUuc3R5bGUucGFkZGluZ0JvdHRvbSA9IGA1cHhgO1xuICAgIG9wdGlvbnNFbGUuc3R5bGUubWF4SGVpZ2h0ID0gdGhpcy5jb25maWcubWF4SGVpZ2h0IHx8IG51bGw7XG4gICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKG9wdGlvbnNXcmFwcGVyRWxlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBvcHRpb25zIHdyYXBwZXIgaGlkZGVuIG9yIG5vdFxuICAgKiBAcmV0dXJucyB0cnVlIGlmIGhpZGRlbiwgb3IgZWxzZSBmYWxzZVxuICAgKi9cbiAgcHJpdmF0ZSBpc09wdGlvbnNIaWRkZW4gPSAoKTogYm9vbGVhbiA9PiB7XG4gICAgbGV0IG9wdGlvbnNXcmFwcGVyID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYC5pbmZpbml0ZS1hdXRvY29tcGxldGUtb3B0aW9ucy13cmFwcGVyYCkgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICByZXR1cm4gb3B0aW9uc1dyYXBwZXIuY2xhc3NOYW1lXG4gICAgICAuaW5kZXhPZihgaW5maW5pdGUtYXV0b2NvbXBsZXRlLWhpZGRlbi1lbGVtZW50YCkgPiAtMTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBcHBseSB0aGUgc3R5bGUgcnVsZXMgZm9yIHRoZSBpbmZpbml0ZSBhdXRvY29tcGxldGUgcGx1Z2luIGFuZCBpdCdzIGNvbXBvbmVudHNcbiAgICovXG4gIHByaXZhdGUgYXBwbHlTdHlsZXNSdWxlcyA9ICgpID0+IHtcblxuICAgIC8vIE1haW4gd3JhcHBlciBzdHlsZSBydWxlc1xuICAgIGxldCBpc01haW5XcmFwcGVyU3R5bGVBcHBsaWVkID0gZG9jdW1lbnQuaGVhZC5xdWVyeVNlbGVjdG9yKFwiI2luZmluaXRlLWF1dG9jb21wbGV0ZS13cmFwcGVyLXN0eWxlXCIpO1xuICAgIGlmICghaXNNYWluV3JhcHBlclN0eWxlQXBwbGllZCkge1xuICAgICAgbGV0IG1haW5XcmFwcGVyU3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gICAgICBtYWluV3JhcHBlclN0eWxlLmlkID0gXCJpbmZpbml0ZS1hdXRvY29tcGxldGUtd3JhcHBlci1zdHlsZVwiO1xuICAgICAgbWFpbldyYXBwZXJTdHlsZS5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgLmluZmluaXRlLWF1dG9jb21wbGV0ZS13cmFwcGVyIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIH1cbiAgICAgIGA7XG4gICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKG1haW5XcmFwcGVyU3R5bGUpO1xuICAgIH1cblxuICAgIC8vIEhpZGRlbiBlbGVtZW50IHN0eWxlIHJ1bGVzXG4gICAgbGV0IGlzSGlkZGVuU3R5bGVBcHBsaWVkID0gZG9jdW1lbnQuaGVhZC5xdWVyeVNlbGVjdG9yKFwiI2luZmluaXRlLWF1dG9jb21wbGV0ZS1oaWRkZW4tc3R5bGVcIik7XG4gICAgaWYgKCFpc0hpZGRlblN0eWxlQXBwbGllZCkge1xuICAgICAgbGV0IGhpZGRlblN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICAgICAgaGlkZGVuU3R5bGUuaWQgPSBcImluZmluaXRlLWF1dG9jb21wbGV0ZS1oaWRkZW4tc3R5bGVcIjtcbiAgICAgIGhpZGRlblN0eWxlLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAuaW5maW5pdGUtYXV0b2NvbXBsZXRlLWhpZGRlbi1lbGVtZW50IHtcbiAgICAgICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgICB9XG4gICAgICBgO1xuICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChoaWRkZW5TdHlsZSk7XG4gICAgfVxuXG4gICAgLy8gRGVmYXVsdHMgc3R5bGUgcnVsZXNcbiAgICBsZXQgaXNEZWZhdWx0c1N0eWxlQXBwbGllZCA9IGRvY3VtZW50LmhlYWQucXVlcnlTZWxlY3RvcihcIiNpbmZpbml0ZS1hdXRvY29tcGxldGUtZGVmYXVsdHMtc3R5bGVcIik7XG4gICAgaWYgKCFpc0RlZmF1bHRzU3R5bGVBcHBsaWVkKSB7XG4gICAgICBsZXQgZGVmYXVsdHNTdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgICAgIGRlZmF1bHRzU3R5bGUuaWQgPSBcImluZmluaXRlLWF1dG9jb21wbGV0ZS1kZWZhdWx0cy1zdHlsZVwiO1xuICAgICAgZGVmYXVsdHNTdHlsZS5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgLmluZmluaXRlLWF1dG9jb21wbGV0ZS1pbnB1dC13cmFwcGVyIC5pbmZpbml0ZS1hdXRvY29tcGxldGUtZGVmYXVsdC1pbnB1dCB7XG4gICAgICAgICAgICAgIGhlaWdodDogMjhweDtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDE1cHggLTRweCB0cmFuc3BhcmVudDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmluZmluaXRlLWF1dG9jb21wbGV0ZS1vcHRpb25zLXdyYXBwZXIgLmluZmluaXRlLWF1dG9jb21wbGV0ZS1kZWZhdWx0LW9wdGlvbnMge1xuICAgICAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmluZmluaXRlLWF1dG9jb21wbGV0ZS1vcHRpb25zLXdyYXBwZXIgLmluZmluaXRlLWF1dG9jb21wbGV0ZS1kZWZhdWx0LW9wdGlvbnMgbGkge1xuICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweCAxMHB4IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5pbmZpbml0ZS1hdXRvY29tcGxldGUtb3B0aW9ucy13cmFwcGVyIC5pbmZpbml0ZS1hdXRvY29tcGxldGUtZGVmYXVsdC1vcHRpb25zIGxpLmhvdmVyZWQge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZDVlYmZmO1xuICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB9XG4gICAgICBgO1xuICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChkZWZhdWx0c1N0eWxlKTtcbiAgICB9XG5cbiAgICAvLyBJbnB1dCBzdHlsZSBydWxlc1xuICAgIGxldCBpc0lucHV0U3R5bGVBcHBsaWVkID0gZG9jdW1lbnQuaGVhZC5xdWVyeVNlbGVjdG9yKFwiI2luZmluaXRlLWF1dG9jb21wbGV0ZS1pbnB1dC1zdHlsZVwiKTtcbiAgICBpZiAoIWlzSW5wdXRTdHlsZUFwcGxpZWQpIHtcbiAgICAgIGxldCBpbnB1dFN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICAgICAgaW5wdXRTdHlsZS5pZCA9IFwiaW5maW5pdGUtYXV0b2NvbXBsZXRlLWlucHV0LXN0eWxlXCI7XG4gICAgICBpbnB1dFN0eWxlLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAuaW5maW5pdGUtYXV0b2NvbXBsZXRlLWlucHV0LXdyYXBwZXIgaW5wdXQge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICBgO1xuICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChpbnB1dFN0eWxlKTtcbiAgICB9XG5cbiAgICAvLyBPcHRpb25zIHN0eWxlIHJ1bGVzXG4gICAgbGV0IGlzT3B0aW9uc1N0eWxlQXBwbGllZCA9IGRvY3VtZW50LmhlYWQucXVlcnlTZWxlY3RvcihcIiNpbmZpbml0ZS1hdXRvY29tcGxldGUtb3B0aW9ucy1zdHlsZVwiKTtcbiAgICBpZiAoIWlzT3B0aW9uc1N0eWxlQXBwbGllZCkge1xuICAgICAgbGV0IG9wdGlvbnNTdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgICAgIG9wdGlvbnNTdHlsZS5pZCA9IGBpbmZpbml0ZS1hdXRvY29tcGxldGUtb3B0aW9ucy1zdHlsZWA7XG4gICAgICBvcHRpb25zU3R5bGUuaW5uZXJIVE1MID0gYFxuICAgICAgICAgIC5pbmZpbml0ZS1hdXRvY29tcGxldGUtb3B0aW9ucy13cmFwcGVyIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICB6LWluZGV4OiAxMDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgfVxuICAgICAgYDtcbiAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQob3B0aW9uc1N0eWxlKTtcbiAgICB9XG5cbiAgICAvLyBTY3JvbGxiYXIgc3R5bGUgcnVsZXNcbiAgICBsZXQgaXNTY3JvbGxiYXJTdHlsZUFwcGxpZWQgPSBkb2N1bWVudC5oZWFkLnF1ZXJ5U2VsZWN0b3IoXCIjaW5maW5pdGUtYXV0b2NvbXBsZXRlLXNjcm9sbGJhci1zdHlsZVwiKTtcbiAgICBpZiAoIWlzU2Nyb2xsYmFyU3R5bGVBcHBsaWVkKSB7XG4gICAgICBsZXQgc3BlY2lhbFNjcm9sbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgICAgIHNwZWNpYWxTY3JvbGwuaWQgPSBcImluZmluaXRlLWF1dG9jb21wbGV0ZS1zY3JvbGxiYXItc3R5bGVcIjtcbiAgICAgIHNwZWNpYWxTY3JvbGwuaW5uZXJIVE1MID0gYFxuICAgICAgICAgIC5pbmZpbml0ZS1hdXRvY29tcGxldGUtd3JhcHBlciA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiA0cHg7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuaW5maW5pdGUtYXV0b2NvbXBsZXRlLXdyYXBwZXIgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLDAsMCwwLjMpO1xuICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5pbmZpbml0ZS1hdXRvY29tcGxldGUtd3JhcHBlciA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuOCk7XG4gICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLDAsMCwwLjUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5pbmZpbml0ZS1hdXRvY29tcGxldGUtd3JhcHBlciA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOndpbmRvdy1pbmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwwLDAsMC40KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgYDtcbiAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3BlY2lhbFNjcm9sbCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEJpbmRzIGEgc2Nyb2xsIGV2ZW50IGhhbmRsZXIgb24gdGhlIG9wdGlvbnNcbiAgICovXG4gIHByaXZhdGUgYmluZFNjcm9sbFJlYWNoQm90dG9tRXZlbnQgPSAoKSA9PiB7XG4gICAgbGV0IG9wdGlvbnNFbGUgPSB0aGlzLmdldE9wdGlvbnNCYXNlRWxlbWVudCgpO1xuICAgIG9wdGlvbnNFbGUuYWRkRXZlbnRMaXN0ZW5lcihgc2Nyb2xsYCwgdGhpcy5zY3JvbGxSZWFjaGVkQm90dG9tSGFuZGxlcik7XG4gIH1cblxuICAvKipcbiAgICogU2Nyb2xsIHJlYWNoZWQgYm90dG9tIGhhbmRsZXJcbiAgICogQHBhcmFtIGUgLSBTY3JvbGwgZXZlbnQgb2JqZWN0XG4gICAqL1xuICBwcml2YXRlIHNjcm9sbFJlYWNoZWRCb3R0b21IYW5kbGVyID0gYXN5bmMgKGU6IEV2ZW50KSA9PiB7XG4gICAgbGV0IG9wdGlvbnNFbGUgPSBlLmN1cnJlbnRUYXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgaWYgKCF0aGlzLmZldGNoaW5nRGF0YSAmJiAhdGhpcy5wcmV2ZW50TW9yZVJlcXVlc3RzICYmICF0aGlzLmlzT3B0aW9uc0hpZGRlbigpKSB7XG4gICAgICBpZiAob3B0aW9uc0VsZS5zY3JvbGxUb3AgKyBvcHRpb25zRWxlLmNsaWVudEhlaWdodCA+PSBvcHRpb25zRWxlLnNjcm9sbEhlaWdodCkge1xuICAgICAgICB0aGlzLnBhZ2UrKztcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBhd2FpdCB0aGlzLmJ1aWxkT3B0aW9ucyhcbiAgICAgICAgICAgIHRoaXMuZ2V0SW5wdXRFbGVtZW50KCkudmFsdWUsXG4gICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICApO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgIGlmICh0aGlzLmNvbmZpZy5vbkVycm9yKSB7XG4gICAgICAgICAgICB0aGlzLmNvbmZpZy5vbkVycm9yKGVycm9yKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXJzIHRoZSBvcHRpb25zIGxpc3QgdGFnIHdpdGggcmVtb3ZpbmcgdGhlIGNsaWNrIGV2ZW50IGhhbmRsZXJzXG4gICAqIHVuYmluZCB0aGUgYHNjcm9sbGAgZXZlbnQgZnJvbSB0aGUgb3B0aW9uc1xuICAgKiAoR2FyYmFnZSBjb2xsZWN0aW5nKVxuICAgKi9cbiAgcHJpdmF0ZSBjbGVhck9wdGlvbnMgPSAoKSA9PiB7XG4gICAgdGhpcy5kZXRhY2hPcHRpb25FdmVudEhhbmRsZXJzKFxuICAgICAgdGhpcy5nZXRPcHRpb25zQmFzZUVsZW1lbnQoKVxuICAgICAgICAucXVlcnlTZWxlY3RvckFsbChgW2luZmluaXRlLWNsaWNrYWJsZV1gKSxcbiAgICApO1xuICAgIHRoaXMucmVzZXRDdXJyZW50UGFnZSgpO1xuICAgIHRoaXMucHJldmVudE1vcmVSZXF1ZXN0cyA9IGZhbHNlO1xuXG4gICAgbGV0IG9wdGlvbkxpc3RFbGVtZW50ID0gdGhpcy5nZXRPcHRpb25zQmFzZUVsZW1lbnQoKTtcblxuICAgIHRoaXMuc2V0RWxlbWVudFZpc2libGl0eShcbiAgICAgIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKGAuaW5maW5pdGUtYXV0b2NvbXBsZXRlLW9wdGlvbnMtd3JhcHBlcmApIGFzIEhUTUxFbGVtZW50LFxuICAgICAgZmFsc2UsXG4gICAgKTtcbiAgICBvcHRpb25MaXN0RWxlbWVudC5pbm5lckhUTUwgPSBgYDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBlbGVtZW50IHZpc2libGl0eVxuICAgKiBAcGFyYW0gZWxlbWVudCAtIEhUTUxFbGVtZW50XG4gICAqIEBwYXJhbSB2aXNpYmxlIC0gdmlzaWJpbGl0eSBzdGF0dXNcbiAgICovXG4gIHByaXZhdGUgc2V0RWxlbWVudFZpc2libGl0eShlbGVtZW50OiBIVE1MRWxlbWVudCwgdmlzaWJsZTogYm9vbGVhbikge1xuICAgIGlmICh2aXNpYmxlKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTmFtZSA9IGVsZW1lbnQuY2xhc3NOYW1lXG4gICAgICAgIC5zcGxpdChcIiBcIilcbiAgICAgICAgLmZpbHRlcihlID0+IGUgIT09IGBpbmZpbml0ZS1hdXRvY29tcGxldGUtaGlkZGVuLWVsZW1lbnRgKVxuICAgICAgICAuam9pbihcIiBcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChlbGVtZW50LmNsYXNzTmFtZS5pbmRleE9mKGBpbmZpbml0ZS1hdXRvY29tcGxldGUtaGlkZGVuLWVsZW1lbnRgKSA9PT0gLTEpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc05hbWUgKz0gYCBpbmZpbml0ZS1hdXRvY29tcGxldGUtaGlkZGVuLWVsZW1lbnRgO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgb3B0aW9ucyBiYXNlIEhUTUxFbGVtZW50XG4gICAqIEByZXR1cm5zIEhUTUxFbGVtZW50XG4gICAqL1xuICBwcml2YXRlIGdldE9wdGlvbnNCYXNlRWxlbWVudCgpOiBIVE1MRWxlbWVudCB7XG4gICAgaWYgKHRoaXMuZWxlbWVudCkge1xuICAgICAgbGV0IG9wdGlvbnNXcmFwcGVyID0gdGhpcy5lbGVtZW50XG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKGAuaW5maW5pdGUtYXV0b2NvbXBsZXRlLW9wdGlvbnMtd3JhcHBlcmApO1xuICAgICAgaWYgKG9wdGlvbnNXcmFwcGVyKSB7XG4gICAgICAgIHJldHVybiBvcHRpb25zV3JhcHBlclxuICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKHRoaXMub3B0aW9uc0NvbXBvbmVudC5saXN0RWxlbWVudFNlbGVjdG9yKSBhcyBIVE1MRWxlbWVudDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG9wdGlvbnNXcmFwcGVyRXhjZXB0aW9uTXNnO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBvcHRpb25zV3JhcHBlckV4Y2VwdGlvbk1zZztcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGV0YWNoaW5nIHRoZSBldmVudCBoYW5kbGVycyBvdmVyIHRoZSBvcHRpb24gZWxlbWVudHNcbiAgICovXG4gIHByaXZhdGUgZGV0YWNoT3B0aW9uRXZlbnRIYW5kbGVycyhlbGVtZW50czogTm9kZUxpc3RPZjxFbGVtZW50Pikge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGVsZW1lbnRzW2ldLnJlbW92ZUV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgdGhpcy5vbk9wdGlvbkNsaWNrRXZlbnQpO1xuICAgICAgZWxlbWVudHNbaV0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihgbW91c2VvdmVyYCwgdGhpcy5vbk9wdGlvbkhvdmVyRXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBPcHRpb24gY2xpY2sgZXZlbnQgaGFuZGxlclxuICAgKiBAcGFyYW0gY2xpY2tFdmVudFxuICAgKi9cbiAgcHJpdmF0ZSBvbk9wdGlvbkNsaWNrRXZlbnQgPSAoY2xpY2tFdmVudDogTW91c2VFdmVudCkgPT4ge1xuICAgIGlmICh0aGlzLmNvbmZpZy5vblNlbGVjdCkge1xuICAgICAgdGhpcy5jb25maWcub25TZWxlY3QoY2xpY2tFdmVudC5jdXJyZW50VGFyZ2V0LCAoY2xpY2tFdmVudC5jdXJyZW50VGFyZ2V0IGFzIGFueSkuZGF0YSk7XG4gICAgfVxuICAgIHRoaXMuY2xlYXJPcHRpb25zKCk7XG4gICAgdGhpcy5zZXRJbnB1dCgoY2xpY2tFdmVudC5jdXJyZW50VGFyZ2V0IGFzIGFueSkuZGF0YS50ZXh0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgaW5wdXQgSFRNTCBlbGVtZW50IGJlbG93IGluZmluaXRlLWF1dG9jb21wbGV0ZS1pbnB1dC13cmFwcGVyXG4gICAqIEByZXR1cm5zIEhUTUxJbnB1dEVsZW1lbnRcbiAgICovXG4gIHByaXZhdGUgZ2V0SW5wdXRFbGVtZW50KCk6IEhUTUxJbnB1dEVsZW1lbnQge1xuICAgIGlmICh0aGlzLmVsZW1lbnQpIHtcbiAgICAgIGxldCBpbnB1dFdyYXBwZXIgPSB0aGlzLmVsZW1lbnRcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoYC5pbmZpbml0ZS1hdXRvY29tcGxldGUtaW5wdXQtd3JhcHBlcmApO1xuICAgICAgaWYgKGlucHV0V3JhcHBlcikge1xuICAgICAgICByZXR1cm4gaW5wdXRXcmFwcGVyXG4gICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoYGlucHV0YCkgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IGlucHV0RWxlbWVudEV4Y2VwdGlvbk1zZztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgaW5wdXRFbGVtZW50RXhjZXB0aW9uTXNnO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgaW5wdXQgc2hvd24gdGV4dFxuICAgKiBAcGFyYW0gdGV4dFxuICAgKi9cbiAgcHJpdmF0ZSBzZXRJbnB1dCh0ZXh0OiBzdHJpbmcpIHtcbiAgICB0aGlzLmdldElucHV0RWxlbWVudCgpXG4gICAgICAudmFsdWUgPSB0ZXh0O1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBkYXRhIGJhc2VkIG9uIHRleHQsIHBhZ2UgYW5kIGZldGNoU2l6ZVxuICAgKiBAcGFyYW0gdGV4dFxuICAgKiBAcGFyYW0gcGFnZVxuICAgKiBAcGFyYW0gZmV0Y2hTaXplXG4gICAqL1xuICBwcml2YXRlIGFzeW5jIGdldERhdGEodGV4dDogc3RyaW5nLCBwYWdlOiBudW1iZXIsIGZldGNoU2l6ZTogbnVtYmVyKTogUHJvbWlzZTxJT3B0aW9uW10gfCBudWxsPiB7XG4gICAgdGhpcy5zZWFyY2hlZFRleHQgPSB0ZXh0O1xuICAgIGlmICh0aGlzLmNvbmZpZy5kYXRhKSB7XG4gICAgICB0aGlzLmZldGNoaW5nRGF0YSA9IHRydWU7XG4gICAgICBsZXQgZnJvbSA9IChwYWdlIC0gMSkgKiBmZXRjaFNpemU7XG4gICAgICBsZXQgdG8gPSAoZmV0Y2hTaXplICogKHBhZ2UgLSAxKSkgKyBmZXRjaFNpemU7XG4gICAgICBsZXQgc3RhdGljRGF0YSA9IHRoaXMuY29uZmlnLmRhdGFcbiAgICAgICAgICAuZmlsdGVyKG9wdGlvbiA9PiBvcHRpb24udGV4dC50b0xvd2VyQ2FzZSgpLmluZGV4T2YodGV4dC50b0xvd2VyQ2FzZSgpKSAhPT0gLTEpXG4gICAgICAgICAgLnNsaWNlKGZyb20sIHRvKTtcbiAgICAgIHRoaXMuZmV0Y2hpbmdEYXRhID0gZmFsc2U7XG5cbiAgICAgIHJldHVybiBzdGF0aWNEYXRhO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jb25maWcuZ2V0RGF0YUZyb21BcGkpIHtcbiAgICAgIHRoaXMuZmV0Y2hpbmdEYXRhID0gdHJ1ZTtcbiAgICAgIGxldCBhcGlEYXRhID0gYXdhaXQgdGhpcy5jb25maWcuZ2V0RGF0YUZyb21BcGkodGV4dCwgcGFnZSwgZmV0Y2hTaXplKTtcbiAgICAgIHRoaXMuZmV0Y2hpbmdEYXRhID0gZmFsc2U7XG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuc2VhcmNoZWRUZXh0ID09PSB0ZXh0ICYmXG4gICAgICAgIHRoaXMucGFnZSA9PT0gcGFnZSAmJlxuICAgICAgICB0aGlzLmNvbmZpZy5mZXRjaFNpemUgPT09IGZldGNoU2l6ZVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiBhcGlEYXRhO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IGRhdGFTb3VyY2VNaXNzaW5nRXhjZXB0aW9uTXNnO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBPbiBob3ZlcmluZyBvbiBvcHRpb24gcm93XG4gICAqIEBwYXJhbSBldmVudCAtIEhvdmVyIE1vdXNlIEV2ZW50XG4gICAqL1xuICBwcml2YXRlIG9uT3B0aW9uSG92ZXJFdmVudCA9IChldmVudDogTW91c2VFdmVudCkgPT4ge1xuICAgIGxldCBvcHRpb25zTGlzdCA9IHRoaXMuZ2V0T3B0aW9uc0Jhc2VFbGVtZW50KCk7XG4gICAgbGV0IGhvdmVyZWRFbGVtZW50ID0gb3B0aW9uc0xpc3QucXVlcnlTZWxlY3RvcihgLiR7SE9WRVJFRH1gKTtcbiAgICBpZiAoaG92ZXJlZEVsZW1lbnQpIHtcbiAgICAgIGhvdmVyZWRFbGVtZW50LmNsYXNzTmFtZSA9IGhvdmVyZWRFbGVtZW50XG4gICAgICAgIC5jbGFzc05hbWVcbiAgICAgICAgLnNwbGl0KFwiIFwiKVxuICAgICAgICAuZmlsdGVyKGUgPT4gZSAhPT0gSE9WRVJFRClcbiAgICAgICAgLmpvaW4oXCIgXCIpXG4gICAgICAgIC50cmltKCk7XG4gICAgfVxuICAgIGxldCB0YXJnZXQgPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuICAgIHRhcmdldC5jbGFzc05hbWUgKz0gYCAke0hPVkVSRUR9YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBCdWlsZCB0aGUgb3B0aW9ucyBpbm5lciB0YWdzIGluIG9wdGlvbnMgbGlzdCB0YWcgYmFzZWQgb24gdGhlIHRleHQgcGFzc2VkIGFuZCB0aGUgZGF0YSBpbiBjb25maWdcbiAgICogQHBhcmFtIHRleHQgLSBUZXh0IHRvIHNlYXJjaCBvbiBpbiB0aGUgYXV0b2NvbXBsZXRlXG4gICAqIEBwYXJhbSBjbGVhclByZXZpb3VzRGF0YSAtIEZsYWcgdG8gY2xlYXIgcHJldmlvdXMgb3B0aW9ucyBhbmQgb3ZlcnJpZGUgd2l0aCB0aGUgbmV3IG9uZVxuICAgKi9cbiAgcHJpdmF0ZSBhc3luYyBidWlsZE9wdGlvbnModGV4dDogc3RyaW5nLCBjbGVhclByZXZpb3VzRGF0YTogYm9vbGVhbiA9IHRydWUpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgb3B0aW9uTGlzdEVsZW1lbnQgPSB0aGlzLmdldE9wdGlvbnNCYXNlRWxlbWVudCgpO1xuICAgIGlmIChjbGVhclByZXZpb3VzRGF0YSkge1xuICAgICAgICB0aGlzLmNsZWFyT3B0aW9ucygpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmNvbmZpZy5mZXRjaFNpemUgJiYgIWlzTmFOKHRoaXMuY29uZmlnLmZldGNoU2l6ZSkpIHtcbiAgICAgIGxldCBmaWx0ZXJlZE9wdGlvbnMgPSBhd2FpdCB0aGlzLmdldERhdGEodGV4dCwgdGhpcy5wYWdlLCB0aGlzLmNvbmZpZy5mZXRjaFNpemUpO1xuXG4gICAgICBpZiAoZmlsdGVyZWRPcHRpb25zICE9PSBudWxsKSB7XG4gICAgICAgIGlmIChmaWx0ZXJlZE9wdGlvbnMubGVuZ3RoIDwgdGhpcy5jb25maWcuZmV0Y2hTaXplKSB7XG4gICAgICAgICAgLy8gU3RvcCBmZXRjaGluZyBtb3JlIGNodW5rcyB3aGVuZXZlciB5b3UgZ2V0IGxlc3MgdGhhbiB0aGUgY2h1bmsgZmV0Y2ggc2l6ZVxuICAgICAgICAgIHRoaXMucHJldmVudE1vcmVSZXF1ZXN0cyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBmaWx0ZXJlZE9wdGlvbnNcbiAgICAgICAgICAuZm9yRWFjaChvcHRpb24gPT4ge1xuICAgICAgICAgICAgbGV0IG9wdGlvbkVsZW1lbnRUZW1wbGF0ZSA9IHRoaXMub3B0aW9uc0NvbXBvbmVudC5yZW5kZXJPcHRpb24ob3B0aW9uKTtcbiAgICAgICAgICAgIGxldCB0ZW1wRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgICAgICAgICAgdGVtcEVsZW1lbnQuaW5uZXJIVE1MID0gb3B0aW9uRWxlbWVudFRlbXBsYXRlO1xuICAgICAgICAgICAgbGV0IG9wdGlvbkVsZW1lbnQgPSB0ZW1wRWxlbWVudC5jaGlsZE5vZGVzWzBdO1xuICAgICAgICAgICAgKG9wdGlvbkVsZW1lbnQgYXMgYW55KS5kYXRhID0geyB0ZXh0OiBvcHRpb24udGV4dCwgdmFsdWU6IG9wdGlvbi52YWx1ZSB9O1xuICAgICAgICAgICAgKG9wdGlvbkVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLnNldEF0dHJpYnV0ZShcImluZmluaXRlLWNsaWNrYWJsZVwiLCBcIlwiKTtcbiAgICAgICAgICAgIG9wdGlvbkVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihgY2xpY2tgLCB0aGlzLm9uT3B0aW9uQ2xpY2tFdmVudCk7XG4gICAgICAgICAgICBvcHRpb25FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoYG1vdXNlb3ZlcmAsIHRoaXMub25PcHRpb25Ib3ZlckV2ZW50KTtcbiAgICAgICAgICAgIG9wdGlvbkxpc3RFbGVtZW50LmFwcGVuZENoaWxkKG9wdGlvbkVsZW1lbnQpO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChmaWx0ZXJlZE9wdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGxldCBjaHVua0NsaWVudEhlaWdodCA9IG9wdGlvbkxpc3RFbGVtZW50LmNoaWxkcmVuWzBdLmNsaWVudEhlaWdodDtcbiAgICAgICAgICAvLyBDaGVjayBpZiBtYXhIZWlnaHQgaXMgZml0cyB0aGUgY2h1bmsgc2l6ZSBsaXN0XG4gICAgICAgICAgaWYgKHRoaXMuY29uZmlnLm1heEhlaWdodCkge1xuICAgICAgICAgICAgbGV0IG1heEhlaWdodE51bWJlciA9IHBhcnNlSW50KHRoaXMuY29uZmlnLm1heEhlaWdodCwgMTApO1xuICAgICAgICAgICAgaWYgKG1heEhlaWdodE51bWJlciA+PSBjaHVua0NsaWVudEhlaWdodCAqIHRoaXMuY29uZmlnLmZldGNoU2l6ZSkge1xuICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5tYXhIZWlnaHQgPSAoY2h1bmtDbGllbnRIZWlnaHQgKiB0aGlzLmNvbmZpZy5mZXRjaFNpemUgLSA1KSArIFwicHhcIjtcbiAgICAgICAgICAgICAgbGV0IG9wdGlvbnNXcmFwcGVyRWxlID1cbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihgLmluZmluaXRlLWF1dG9jb21wbGV0ZS1vcHRpb25zLXdyYXBwZXJgKSBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgICAgICAgbGV0IG9wdGlvbnNFbGUgPVxuICAgICAgICAgICAgICAgIG9wdGlvbnNXcmFwcGVyRWxlLnF1ZXJ5U2VsZWN0b3IodGhpcy5vcHRpb25zQ29tcG9uZW50Lmxpc3RFbGVtZW50U2VsZWN0b3IpIGFzIEhUTUxFbGVtZW50O1xuICAgICAgICAgICAgICBvcHRpb25zRWxlLnN0eWxlLm1heEhlaWdodCA9IHRoaXMuY29uZmlnLm1heEhlaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbkxpc3RFbGVtZW50LmlubmVySFRNTCAhPT0gYGApIHtcbiAgICAgICAgdGhpcy5zZXRFbGVtZW50VmlzaWJsaXR5KFxuICAgICAgICAgIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKGAuaW5maW5pdGUtYXV0b2NvbXBsZXRlLW9wdGlvbnMtd3JhcHBlcmApIGFzIEhUTUxFbGVtZW50LFxuICAgICAgICAgIHRydWUsXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldEVsZW1lbnRWaXNpYmxpdHkoXG4gICAgICAgICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYC5pbmZpbml0ZS1hdXRvY29tcGxldGUtb3B0aW9ucy13cmFwcGVyYCkgYXMgSFRNTEVsZW1lbnQsXG4gICAgICAgICAgZmFsc2UsXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgZmV0Y2hTaXplRXhjZXB0aW9uTXNnO1xuICAgIH1cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQ29tcG9uZW50cy9JbmZpbml0ZUF1dG9jb21wbGV0ZS50cyJdLCJzb3VyY2VSb290IjoiIn0=