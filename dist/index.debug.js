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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBiODk5NGU3NGQzNmFiNTJlNGU2NyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9JbnB1dENvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9PcHRpb25zQ29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9Db25zdGFudHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvSW5maW5pdGVBdXRvY29tcGxldGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQzlEQTs7O0dBR0c7QUFDSDtJQUFBO0lBSUEsQ0FBQztJQUhRLCtCQUFNLEdBQWI7UUFDSSxNQUFNLENBQUMsdUVBQW1FLENBQUM7SUFDL0UsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQztBQUpZLHdDQUFjOzs7Ozs7Ozs7O0FDSDNCOzs7R0FHRztBQUNIO0lBQUE7UUFDUyx3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QyxNQUFNLENBQUMsU0FBUyxHQUFHLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO3dDQUMzRSxpQkFBaUIsR0FDbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsd0NBQXdDLENBQWdCLENBQUM7d0NBQ2xGLFVBQVUsR0FDWixpQkFBaUIsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLG1CQUFtQixDQUFnQixDQUFDO3dDQUM1RixVQUFVLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQztvQ0FDckQsQ0FBQztnQ0FDSCxDQUFDOzRCQUNILENBQUM7d0JBQ0gsQ0FBQzt3QkFFRCxFQUFFLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQzs0QkFDdkMsSUFBSSxDQUFDLG1CQUFtQixDQUN0QixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyx3Q0FBd0MsQ0FBZ0IsRUFDbkYsSUFBSSxDQUNMLENBQUM7d0JBQ0osQ0FBQzt3QkFBQyxJQUFJLENBQUMsQ0FBQzs0QkFDTixJQUFJLENBQUMsbUJBQW1CLENBQ3RCLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLHdDQUF3QyxDQUFnQixFQUNuRixLQUFLLENBQ04sQ0FBQzt3QkFDSixDQUFDOzs0QkFHRCxNQUFNLDZCQUFxQixDQUFDOzs7OztLQUUvQjtJQUVILDJCQUFDO0FBQUQsQ0FBQztBQXp1Qlksb0RBQW9CIiwiZmlsZSI6ImluZGV4LmRlYnVnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IGZhY3RvcnkoKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGI4OTk0ZTc0ZDM2YWI1MmU0ZTY3IiwiaW1wb3J0IHsgSUlucHV0Q29tcG9uZW50IH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSUlucHV0Q29tcG9uZW50XCI7XG5cbi8qKlxuICogSW5wdXQgY29tcG9uZW50IGRlZmF1bHQgaW1wbGVtZW50YXRpb25cbiAqIEBhdXRob3IgSXNsYW0gQXR0cmFzaFxuICovXG5leHBvcnQgY2xhc3MgSW5wdXRDb21wb25lbnQgaW1wbGVtZW50cyBJSW5wdXRDb21wb25lbnQge1xuICBwdWJsaWMgcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIGA8aW5wdXQgY2xhc3M9XCJpbmZpbml0ZS1hdXRvY29tcGxldGUtZGVmYXVsdC1pbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgLz5gO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQ29tcG9uZW50cy9JbnB1dENvbXBvbmVudC50cyIsImltcG9ydCB7IElPcHRpb25zQ29tcG9uZW50IH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSU9wdGlvbnNDb21wb25lbnRcIjtcbmltcG9ydCB7IElPcHRpb24gfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JT3B0aW9uXCI7XG5cbi8qKlxuICogT3B0aW9ucyBjb21wb25lbnQgZGVmYXVsdCBpbXBsZW1lbnRhdGlvblxuICogQGF1dGhvciBJc2xhbSBBdHRyYXNoXG4gKi9cbmV4cG9ydCBjbGFzcyBPcHRpb25zQ29tcG9uZW50IGltcGxlbWVudHMgSU9wdGlvbnNDb21wb25lbnQge1xuICBwdWJsaWMgbGlzdEVsZW1lbnRTZWxlY3Rvcjogc3RyaW5nID0gYHVsYDtcblxuICBwdWJsaWMgcmVuZGVyKCkge1xuICAgIHJldHVybiBgPCR7dGhpcy5saXN0RWxlbWVudFNlbGVjdG9yfSBjbGFzcz1cImluZmluaXRlLWF1dG9jb21wbGV0ZS1kZWZhdWx0LW9wdGlvbnNcIj48LyR7dGhpcy5saXN0RWxlbWVudFNlbGVjdG9yfT5gO1xuICB9XG5cbiAgcHVibGljIHJlbmRlck9wdGlvbihvcHRpb246IElPcHRpb24pOiBzdHJpbmcge1xuICAgIHJldHVybiBgPGxpPlxuICAgICAgICAgICAgICAgICR7b3B0aW9uLnRleHR9XG4gICAgICAgICAgICA8L2xpPmA7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0NvbXBvbmVudHMvT3B0aW9uc0NvbXBvbmVudC50cyIsIlxuLyoqIEhvdmVyZWQgc3RhdGUgd2hlbiBuYXZpZ2F0aW9uIHRocm91Z2ggdXBBcnJvdy9kb3duQXJyb3cgd2hpbGUgb3B0aW9ucyBpcyBvcGVuICovXG5leHBvcnQgY29uc3QgSE9WRVJFRCA9IFwiaG92ZXJlZFwiO1xuXG4vKipcbiAqIEtleSBkb3duIHN0YXRlcyAoa2V5Q29kZXMpXG4gKi9cbmV4cG9ydCBjb25zdCBLRVlfUFJFU1NfU1RBVEVTID0ge1xuICAgIFVQOiAzOCxcbiAgICBET1dOOiA0MCxcbiAgICBFTlRFUjogMTMsXG59O1xuXG5leHBvcnQgY29uc3QgTWlzc2luZ0lucHV0RWxlbWVudEluSW5wdXRDb21wb25lbnRFeGNlcHRpb25Nc2cgPVxuICBuZXcgRXJyb3IoYEN1c3RvbWl6ZWQgaW5wdXQgc2hvdWxkIGNvbnRhaW4gaW5wdXQgZWxlbWVudCA8aW5wdXQgLz5gKTtcblxuZXhwb3J0IGNvbnN0IG9wdGlvbnNXcmFwcGVyRXhjZXB0aW9uTXNnID0gbmV3IEVycm9yKGBDb3VsZG4ndCBnZXQgdGhlIG9wdGlvbnMgYmFzZSBlbGVtZW50LmApO1xuXG5leHBvcnQgY29uc3QgaW5wdXRFbGVtZW50RXhjZXB0aW9uTXNnID0gbmV3IEVycm9yKGBDb3VsZG4ndCBnZXQgdGhlIGlucHV0IGVsZW1lbnQuYCk7XG5cbmV4cG9ydCBjb25zdCBkYXRhU291cmNlTWlzc2luZ0V4Y2VwdGlvbk1zZyA9IG5ldyBFcnJvciAoYFlvdSBtdXN0IHBhc3MgZGF0YSBvciBnZXREYXRhRnJvbUFwaSBmdW5jdGlvbiB2aWEgY29uZmlnYCk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaFNpemVFeGNlcHRpb25Nc2cgPSBuZXcgRXJyb3IoYGZldGNoU2l6ZSBtdXN0IGJlIG92ZXJyaWRlbiB3aXRoIGNvcnJlY3QgbnVtZXJpYyB2YWx1ZWApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0NvbnN0YW50cy9pbmRleC50cyIsImltcG9ydCB7IElucHV0Q29tcG9uZW50IGFzIGRlZmF1bHRJbnB1dEltcGwgfSBmcm9tIFwiLi9JbnB1dENvbXBvbmVudFwiO1xuaW1wb3J0IHsgT3B0aW9uc0NvbXBvbmVudCBhcyBkZWZhdWx0T3B0aW9uc0ltcGwgfSBmcm9tIFwiLi9PcHRpb25zQ29tcG9uZW50XCI7XG5pbXBvcnQgeyBJbmZpbml0ZUF1dG9jb21wbGV0ZUNvbmZpZyB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0luZmluaXRlQXV0b2NvbXBsZXRlQ29uZmlnXCI7XG5pbXBvcnQgeyBJSW5wdXRDb21wb25lbnQsIElJbnB1dENvbXBvZW5lbnRDb25zdHJ1Y3RvciB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lJbnB1dENvbXBvbmVudFwiO1xuaW1wb3J0IHsgSU9wdGlvbnNDb21wb25lbnQsIElPcHRpb25zQ29tcG9uZW50Q29uc3RydWN0b3IgfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JT3B0aW9uc0NvbXBvbmVudFwiO1xuaW1wb3J0IHsgSUluZmluaXRlQXV0b2NvbXBsZXRlIH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSUluZmluaXRlQXV0b2NvbXBsZXRlXCI7XG5pbXBvcnQgeyBJT3B0aW9uIH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSU9wdGlvblwiO1xuaW1wb3J0IHtcbiAgSE9WRVJFRCxcbiAgS0VZX1BSRVNTX1NUQVRFUyxcbiAgTWlzc2luZ0lucHV0RWxlbWVudEluSW5wdXRDb21wb25lbnRFeGNlcHRpb25Nc2csXG4gIG9wdGlvbnNXcmFwcGVyRXhjZXB0aW9uTXNnLFxuICBpbnB1dEVsZW1lbnRFeGNlcHRpb25Nc2csXG4gIGRhdGFTb3VyY2VNaXNzaW5nRXhjZXB0aW9uTXNnLFxuICBmZXRjaFNpemVFeGNlcHRpb25Nc2csXG59IGZyb20gXCIuLi9Db25zdGFudHMvaW5kZXhcIjtcblxuLyoqXG4gKiBEZWZhdWx0IElucHV0IGluIGluZmluaXRlLWF1dG9jb21wbGV0ZSBjb21wb25lbnRcbiAqL1xuZXhwb3J0IGNvbnN0IElucHV0Q29tcG9uZW50ID0gZGVmYXVsdElucHV0SW1wbDtcblxuLyoqXG4gKiBEZWZhdWx0IElucHV0IGluIGluZmluaXRlLWF1dG9jb21wbGV0ZSBjb21wb25lbnRcbiAqL1xuZXhwb3J0IGNvbnN0IE9wdGlvbnNDb21wb25lbnQgPSBkZWZhdWx0T3B0aW9uc0ltcGw7XG5cbi8qKlxuICogaW5maW5pdGUtYXV0b2NvbXBsZXRlIGNvbXBvbmVudCBpbXBsZW1lbnRhdGlvblxuICogQGF1dGhvciBJc2xhbSBBdHRyYXNoXG4gKi9cbmV4cG9ydCBjbGFzcyBJbmZpbml0ZUF1dG9jb21wbGV0ZSBpbXBsZW1lbnRzIElJbmZpbml0ZUF1dG9jb21wbGV0ZSB7XG5cbiAgcHJpdmF0ZSBlbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgcHJpdmF0ZSBpbnB1dENvbXBvbmVudDogSUlucHV0Q29tcG9uZW50O1xuICBwcml2YXRlIG9wdGlvbnNDb21wb25lbnQ6IElPcHRpb25zQ29tcG9uZW50O1xuICBwcml2YXRlIHBhZ2U6IG51bWJlciA9IDE7XG4gIHByaXZhdGUgc2VhcmNoZWRUZXh0OiBzdHJpbmcgPSBcIlwiO1xuICBwcml2YXRlIGlzRGVzdHJveWVkID0gZmFsc2U7XG4gIHByaXZhdGUgY29uZmlnOiBJbmZpbml0ZUF1dG9jb21wbGV0ZUNvbmZpZztcbiAgcHJpdmF0ZSBwcmV2ZW50TW9yZVJlcXVlc3RzOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgbG9jYWxGZXRjaGluZ0RhdGE6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogRGVmYXVsdCBjb25maWd1cmF0aW9uIG9iamVjdFxuICAgKi9cbiAgcHJpdmF0ZSBkZWZhdWx0Q29uZmlnOiBJbmZpbml0ZUF1dG9jb21wbGV0ZUNvbmZpZyA9IHtcbiAgICBmZXRjaFNpemU6IDEwLFxuICAgIG1heEhlaWdodDogXCIxNjBweFwiLFxuICB9O1xuXG4gIC8qKlxuICAgKiBjb25zdHJ1Y3RvciBmb3IgSW5maW5pdGVBdXRvY29tcGxldGUgY2xhc3NcbiAgICogRW5hYmxpbmcgcGx1Z2dhYmxlIHN5c3RlbSBsaW5rZWQgd2l0aCBJbnRlcmZhY2VzIG9ubHlcbiAgICogQHBhcmFtIGVsZW1lbnQgLSBIVE1MRWxlbWVudCB0byBhcHBlbmQgdGhlIGluZmluaXRlLWF1dG9jb21wbGV0ZSBpbiBpdFxuICAgKiBAcGFyYW0gY29uZmlnIC0gSW5maW5pdGVBdXRvY29tcGxldGUgY29uZmlnIG9wdGlvbnNcbiAgICogQHBhcmFtIG9wdGlvbkNvbXBvbmVudCAtIE9wdGlvbiBjb21wb25lbnQgaW1wbGVtZW50YXRpb24gdG8gYmUgaW5qZWN0ZWQgKG9yIGRlZmF1bHQpXG4gICAqIEBwYXJhbSBpbnB1dENvbXBvbmVudCAtIElucHV0IGNvbXBvbmVudCBpbXBsZW1lbnRhdGlvbiB0byBiZSBpbmplY3RlZCAob3IgZGVmYXVsdClcbiAgICogQHBhcmFtIG9wdGlvbnNDb21wb25lbnQgLSBPcHRpb25zIGNvbXBvbmVudCBpbXBsZW1lbnRhdGlvbiB0byBiZSBpbmplY3RlZCAob3IgZGVmYXVsdClcbiAgICovXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBjb25maWc/OiBJbmZpbml0ZUF1dG9jb21wbGV0ZUNvbmZpZykge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5jb25maWcgPSB7IC4uLnRoaXMuZGVmYXVsdENvbmZpZywgLi4uY29uZmlnIH07XG4gICAgdGhpcy5pbnB1dENvbXBvbmVudCA9IHRoaXMuZ2V0Q3VzdG9taXplZElucHV0KCk7XG4gICAgdGhpcy5vcHRpb25zQ29tcG9uZW50ID0gdGhpcy5nZXRDdXN0b21pemVkT3B0aW9ucygpO1xuICAgIHRoaXMuaW5pdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgY29uZmlnIG9iamVjdCB3aXRoIGV4dGVuZGluZ1xuICAgKiBAcGFyYW0gY29uZmlnIC0gaW5maW5pdGUtYXV0b2NvbXBsZXRlIGNvbmZpZ3VyYXRpb24gb2JqZWN0XG4gICAqL1xuICBwdWJsaWMgc2V0Q29uZmlnID0gKGNvbmZpZzogSW5maW5pdGVBdXRvY29tcGxldGVDb25maWcpID0+IHtcbiAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICB0aGlzLmNvbmZpZyA9IHsgLi4udGhpcy5jb25maWcsIC4uLmNvbmZpZyB9O1xuICAgIHRoaXMuaW5wdXRDb21wb25lbnQgPSB0aGlzLmdldEN1c3RvbWl6ZWRJbnB1dCgpO1xuICAgIHRoaXMub3B0aW9uc0NvbXBvbmVudCA9IHRoaXMuZ2V0Q3VzdG9taXplZE9wdGlvbnMoKTtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95IHRoZSBpbmZpbml0ZS1hdXRvY29tcGxldGUgYW5kIHVuYmluZCBhbGwgZXZlbnRzXG4gICAqL1xuICBwdWJsaWMgZGVzdHJveSA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5pc0Rlc3Ryb3llZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5pc09wdGlvbnNIaWRkZW4oKSkge1xuICAgICAgdGhpcy5jbGVhck9wdGlvbnMoKTtcbiAgICB9XG5cbiAgICBsZXQgb3B0aW9uc0xpc3QgPSB0aGlzLmdldE9wdGlvbnNCYXNlRWxlbWVudCgpO1xuICAgIG9wdGlvbnNMaXN0LnJlbW92ZUV2ZW50TGlzdGVuZXIoYHNjcm9sbGAsIHRoaXMuc2Nyb2xsUmVhY2hlZEJvdHRvbUhhbmRsZXIpO1xuICAgIGxldCBpbnB1dEVsZSA9IHRoaXMuZ2V0SW5wdXRFbGVtZW50KCk7XG4gICAgaW5wdXRFbGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihgaW5wdXRgLCB0aGlzLm9uSW5wdXRDaGFuZ2UpO1xuICAgIGlucHV0RWxlLnJlbW92ZUV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgdGhpcy5vbklucHV0Q2hhbmdlKTtcbiAgICBpbnB1dEVsZS5yZW1vdmVFdmVudExpc3RlbmVyKGBrZXlkb3duYCwgdGhpcy5vbktleVByZXNzZWQpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgdGhpcy5vbkRvY3VtZW50Q2xpY2tIYW5kbGVyKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLm9uRXNjYXBlRXZlbnRIYW5kbGVyKTtcbiAgICB0aGlzLmVsZW1lbnQuaW5uZXJIVE1MID0gYGA7XG4gICAgdGhpcy5pc0Rlc3Ryb3llZCA9IHRydWU7XG4gIH1cblxuICBwcml2YXRlIGdldEN1c3RvbWl6ZWRJbnB1dCA9ICgpID0+XG4gICAgdGhpcy5jb25maWcuY3VzdG9taXplZElucHV0ID8gbmV3IHRoaXMuY29uZmlnLmN1c3RvbWl6ZWRJbnB1dCgpIDogbmV3IGRlZmF1bHRJbnB1dEltcGwoKVxuXG4gIHByaXZhdGUgZ2V0Q3VzdG9taXplZE9wdGlvbnMgPSAoKSA9PlxuICAgIHRoaXMuY29uZmlnLmN1c3RvbWl6ZWRPcHRpb25zID8gbmV3IHRoaXMuY29uZmlnLmN1c3RvbWl6ZWRPcHRpb25zKCkgOiBuZXcgZGVmYXVsdE9wdGlvbnNJbXBsKClcblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBob29rIHRoYXQgZ2V0IGV4ZWN1dGVkIGltbWVkaWF0bHkgYWZ0ZXIgdXNpbmcgdGhlIGluZmluaXRlLWF1dG9jb21wbGV0ZSBjb21wb25lbnRcbiAgICovXG4gIHByaXZhdGUgaW5pdCA9ICgpID0+IHtcbiAgICB0aGlzLmFwcGx5U3R5bGVzUnVsZXMoKTtcbiAgICB0aGlzLmFwcGVuZEluZmluaXRlQXV0b2NvbXBsZXRlV3JhcHBlckNsYXNzKCk7XG4gICAgdGhpcy5saW5rSW5wdXRDb21wb25lbnQoKTtcbiAgICB0aGlzLmxpbmtPcHRpb25zQ29tcG9uZW50KCk7XG4gICAgdGhpcy5iaW5kU2Nyb2xsUmVhY2hCb3R0b21FdmVudCgpO1xuICAgIHRoaXMuYmluZEVzY2FwZUV2ZW50KCk7XG4gICAgdGhpcy5iaW5kT3V0U2lkZUNsaWNrRXZlbnQoKTtcbiAgICB0aGlzLmlzRGVzdHJveWVkID0gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogKCMxKSBCaW5kcyBhIGNsaWNrIGhhbmRsZXIgdG8gZGV0ZWN0IHdoZXJlIHRoZSB1c2VyIGNsaWNrZWRcbiAgICogSWYgY2xpY2sgaXMgb3V0IHNpZGUgdGhlIG1haW4gd3JhcHBlciBhcmVhIHRoZW4gY2xvc2Ugb3B0aW9uc1xuICAgKi9cbiAgcHJpdmF0ZSBiaW5kT3V0U2lkZUNsaWNrRXZlbnQgPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihgY2xpY2tgLCB0aGlzLm9uRG9jdW1lbnRDbGlja0hhbmRsZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIG9uIGRvY3VtZW50IGNsaWNrIGhhbmRsZXJcbiAgICogQHBhcmFtIGV2ZW50IC0gRXZlbnRcbiAgICovXG4gIHByaXZhdGUgb25Eb2N1bWVudENsaWNrSGFuZGxlciA9IChldmVudDogRXZlbnQpID0+IHtcbiAgICBpZiAoIXRoaXMuaXNPcHRpb25zSGlkZGVuKCkpIHtcbiAgICAgIGxldCBjbGlja2VkT3V0U2lkZSA9IHRoaXMuY2hlY2tJZkNsaWNrZWRPdXRTaWRlVGhlQXV0b2NvbXBsZXRlQ29tcG9uZW50cyhldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQpO1xuICAgICAgaWYgKGNsaWNrZWRPdXRTaWRlKSB7XG4gICAgICAgICAgdGhpcy5jbGVhck9wdGlvbnMoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgY2xpY2sgaXMgb3V0c2lkZSB0aGUgcGx1Z2luXG4gICAqIEBwYXJhbSBlbGVtZW50IC0gSFRNTEVsZW1lbnRcbiAgICovXG4gIHByaXZhdGUgY2hlY2tJZkNsaWNrZWRPdXRTaWRlVGhlQXV0b2NvbXBsZXRlQ29tcG9uZW50cyA9IChlbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGwpID0+IHtcbiAgICBpZiAoZWxlbWVudCA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKGVsZW1lbnQgPT09IHRoaXMuZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hlY2tJZkNsaWNrZWRPdXRTaWRlVGhlQXV0b2NvbXBsZXRlQ29tcG9uZW50cyhlbGVtZW50LnBhcmVudEVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiAoIzExKSBCaW5kcyBlc2NhcGUgZXZlbnQgaGFuZGxlciB0byBjbGVhciB0aGUgb3B0aW9ucyB3aGVuIGNsaWNraW5nIEVzY1xuICAgKi9cbiAgcHJpdmF0ZSBiaW5kRXNjYXBlRXZlbnQgPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5vbkVzY2FwZUV2ZW50SGFuZGxlcik7XG4gIH1cblxuICAvKipcbiAgICogRXNjYXBlIGV2ZW50IGhhbmRsZXJcbiAgICogQHBhcmFtIGUgLSBLZXlib2FyZEV2ZW50XG4gICAqL1xuICBwcml2YXRlIG9uRXNjYXBlRXZlbnRIYW5kbGVyID0gZSA9PiB7XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMjcgJiYgIXRoaXMuaXNPcHRpb25zSGlkZGVuKCkpIHsgLy8gRXNjIGtleSBwcmVzc2VkXG4gICAgICAgIHRoaXMuY2xlYXJPcHRpb25zKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFwcGVuZCBpbmZpbml0ZSBhdXRvY29tcGxldGUgbWFpbiB3cmFwcGVyIGNsYXNzTmFtZVxuICAgKi9cbiAgcHJpdmF0ZSBhcHBlbmRJbmZpbml0ZUF1dG9jb21wbGV0ZVdyYXBwZXJDbGFzcyA9ICgpID0+IHtcbiAgICBpZiAoIXRoaXMuZWxlbWVudC5jbGFzc05hbWUgfHwgdGhpcy5lbGVtZW50LmNsYXNzTmFtZS5pbmRleE9mKGBpbmZpbml0ZS1hdXRvY29tcGxldGUtd3JhcHBlcmApID09PSAtMSkge1xuICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTmFtZSA9IHRoaXMuZWxlbWVudFxuICAgICAgICAuY2xhc3NOYW1lXG4gICAgICAgIC5zcGxpdChgIGApXG4gICAgICAgIC5jb25jYXQoW2BpbmZpbml0ZS1hdXRvY29tcGxldGUtd3JhcHBlcmBdKVxuICAgICAgICAuZmlsdGVyKGMgPT4gYylcbiAgICAgICAgLmpvaW4oYCBgKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVzZXQgY3VycmVudCBwYWdlXG4gICAqL1xuICBwcml2YXRlIHJlc2V0Q3VycmVudFBhZ2UgPSAoKSA9PiB7XG4gICAgdGhpcy5wYWdlID0gMTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMaW5rIGlucHV0IGNvbXBvbmVudCBpbnRvIHRoZSBpbnB1dCB3cmFwcGVyXG4gICAqL1xuICBwcml2YXRlIGxpbmtJbnB1dENvbXBvbmVudCA9ICgpID0+IHtcbiAgICBsZXQgaW5wdXRXcmFwcGVyRWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgaW5wdXRXcmFwcGVyRWxlLmNsYXNzTmFtZSA9IGBpbmZpbml0ZS1hdXRvY29tcGxldGUtaW5wdXQtd3JhcHBlcmA7XG4gICAgaW5wdXRXcmFwcGVyRWxlLmlubmVySFRNTCA9IHRoaXMuaW5wdXRDb21wb25lbnQucmVuZGVyKCk7XG4gICAgbGV0IGlucHV0RWxlID0gaW5wdXRXcmFwcGVyRWxlLnF1ZXJ5U2VsZWN0b3IoYGlucHV0YCkgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICBpZiAoIWlucHV0RWxlKSB7XG4gICAgICB0aHJvdyBNaXNzaW5nSW5wdXRFbGVtZW50SW5JbnB1dENvbXBvbmVudEV4Y2VwdGlvbk1zZztcbiAgICB9XG4gICAgaW5wdXRFbGVcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKGBpbnB1dGAsIHRoaXMub25JbnB1dENoYW5nZSk7XG4gICAgLy8gKCMyKSBTdGFydCB0byBzaG93IG9wdGlvbnMgd2hlbiBmb2N1cyBvbiB0aGUgaW5wdXRcbiAgICBpbnB1dEVsZVxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgdGhpcy5vbklucHV0Q2hhbmdlKTtcbiAgICBpbnB1dEVsZVxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoYGtleWRvd25gLCB0aGlzLm9uS2V5UHJlc3NlZCk7XG4gICAgaWYgKHRoaXMuY29uZmlnLnZhbHVlKSB7XG4gICAgICBpbnB1dEVsZS52YWx1ZSA9IHRoaXMuY29uZmlnLnZhbHVlO1xuICAgIH1cblxuICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChpbnB1dFdyYXBwZXJFbGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIE9uIGtleWRvd24gcHJlc3NpbmcgaW4gaW5wdXQgZWxlbWVudFxuICAgKiBAcGFyYW0ga2V5ZG93bkV2ZW50IC0gcHJlc3Npbmcga2V5IGV2ZW50XG4gICAqL1xuICBwcml2YXRlIG9uS2V5UHJlc3NlZCA9IChrZXlkb3duRXZlbnQ6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICBpZiAoIXRoaXMuaXNPcHRpb25zSGlkZGVuKCkpIHtcbiAgICAgIGxldCBjdXJyZW50SG92ZXJlZCA9IHRoaXMuZ2V0TmF2aWdhdGlvbkluZGV4KCk7XG4gICAgICBpZiAoY3VycmVudEhvdmVyZWQgPT09IC0xKSB7XG4gICAgICAgIGlmIChrZXlkb3duRXZlbnQua2V5Q29kZSA9PT0gS0VZX1BSRVNTX1NUQVRFUy5ET1dOKSB7XG4gICAgICAgICAgdGhpcy50b2dnbGVIb3ZlcmVkU3RhdGUoMCwga2V5ZG93bkV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3dpdGNoIChrZXlkb3duRXZlbnQua2V5Q29kZSkge1xuICAgICAgICAgIGNhc2UgS0VZX1BSRVNTX1NUQVRFUy5ET1dOOlxuICAgICAgICAgICAgdGhpcy50b2dnbGVIb3ZlcmVkU3RhdGUoY3VycmVudEhvdmVyZWQgKyAxLCBrZXlkb3duRXZlbnQpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBLRVlfUFJFU1NfU1RBVEVTLlVQOlxuICAgICAgICAgICAgdGhpcy50b2dnbGVIb3ZlcmVkU3RhdGUoY3VycmVudEhvdmVyZWQgLSAxLCBrZXlkb3duRXZlbnQpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBLRVlfUFJFU1NfU1RBVEVTLkVOVEVSOlxuICAgICAgICAgICAgdGhpcy5jbGlja09uSG92ZXJlZCgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENsaWNrIG9uIGhvdmVyZWQgZWxlbWVudFxuICAgKi9cbiAgcHJpdmF0ZSBjbGlja09uSG92ZXJlZCA9ICgpID0+IHtcbiAgICBsZXQgb3B0aW9uc0xpc3QgPSB0aGlzLmdldE9wdGlvbnNCYXNlRWxlbWVudCgpO1xuICAgIGxldCBob3ZlcmVkRWxlbWVudCA9IG9wdGlvbnNMaXN0LnF1ZXJ5U2VsZWN0b3IoYC4ke0hPVkVSRUR9YCkgYXMgSFRNTEVsZW1lbnQ7XG4gICAgaWYgKGhvdmVyZWRFbGVtZW50KSB7IGhvdmVyZWRFbGVtZW50LmNsaWNrKCk7IH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTaW11bGF0ZSBTY3JvbGxlZCB0byBib3R0b21cbiAgICovXG4gIHByaXZhdGUgc2ltdWxhdGVTY3JvbGxUb0JvdHRvbSA9ICgpID0+IHtcbiAgICBsZXQgb3B0aW9uc0xpc3QgPSB0aGlzLmdldE9wdGlvbnNCYXNlRWxlbWVudCgpO1xuICAgIGxldCBzY3JvbGxFdmVudCA9IG5ldyBFdmVudChcInNjcm9sbFwiLCB7IGJ1YmJsZXM6IHRydWUgfSk7XG4gICAgb3B0aW9uc0xpc3Quc2Nyb2xsVG9wID0gMTAwMDA7IC8vIFNpbXVsYXRlIHJlYWNoZWQgYm90dG9tXG4gICAgb3B0aW9uc0xpc3QuZGlzcGF0Y2hFdmVudChzY3JvbGxFdmVudCk7XG4gIH1cblxuICAvKipcbiAgICogVG9nZ2xlIGhvdmVyZWQgc3RhdGUgb24gc3BlY2lmaWMgaW5kZXggaW4gb3B0aW9ucyBsaXN0XG4gICAqIEBwYXJhbSBpbmRleCAtIFRoZSBpbmRleCB0byBiZSBhcHBsaWVkIGFzIGhvdmVyZWRcbiAgICovXG4gIHByaXZhdGUgdG9nZ2xlSG92ZXJlZFN0YXRlID0gKGluZGV4OiBudW1iZXIsIGtleWRvd25FdmVudDogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgIGxldCBvcHRpb25zTGlzdCA9IHRoaXMuZ2V0T3B0aW9uc0Jhc2VFbGVtZW50KCk7XG4gICAgaWYgKGluZGV4ID09PSBvcHRpb25zTGlzdC5jaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgIHRoaXMuc2ltdWxhdGVTY3JvbGxUb0JvdHRvbSgpO1xuICAgIH1cblxuICAgIGlmIChpbmRleCA+PSAwICYmIGluZGV4IDwgb3B0aW9uc0xpc3QuY2hpbGRyZW4ubGVuZ3RoKSB7XG5cbiAgICAgIGxldCBob3ZlcmVkRWxlbWVudCA9IG9wdGlvbnNMaXN0LnF1ZXJ5U2VsZWN0b3IoYC4ke0hPVkVSRUR9YCk7XG4gICAgICBpZiAoaG92ZXJlZEVsZW1lbnQpIHtcbiAgICAgICAgaG92ZXJlZEVsZW1lbnQuY2xhc3NOYW1lID0gaG92ZXJlZEVsZW1lbnRcbiAgICAgICAgICAuY2xhc3NOYW1lXG4gICAgICAgICAgLnNwbGl0KFwiIFwiKVxuICAgICAgICAgIC5maWx0ZXIoZSA9PiBlICE9PSBIT1ZFUkVEKVxuICAgICAgICAgIC5qb2luKFwiIFwiKVxuICAgICAgICAgIC50cmltKCk7XG4gICAgICB9XG5cbiAgICAgIGxldCB0YXJnZXRFbGVtZW50ID0gb3B0aW9uc0xpc3QuY2hpbGRyZW5baW5kZXhdIGFzIEhUTUxFbGVtZW50O1xuICAgICAgdGFyZ2V0RWxlbWVudC5jbGFzc05hbWUgKz0gYCAke0hPVkVSRUR9YDtcblxuICAgICAgLy8gSWYgaG92ZXJlZCBpcyBub3QgaW4gdGhlIHNjcm9sbGFibGUgdmlld1xuICAgICAgaWYgKHRhcmdldEVsZW1lbnQub2Zmc2V0VG9wIDwgb3B0aW9uc0xpc3Quc2Nyb2xsVG9wIHx8IChcbiAgICAgICAgICB0YXJnZXRFbGVtZW50Lm9mZnNldFRvcCAtIG9wdGlvbnNMaXN0LnNjcm9sbFRvcCA+IG9wdGlvbnNMaXN0LmNsaWVudEhlaWdodCkpIHtcbiAgICAgICAgc3dpdGNoIChrZXlkb3duRXZlbnQua2V5Q29kZSkge1xuICAgICAgICAgIGNhc2UgS0VZX1BSRVNTX1NUQVRFUy5VUDpcbiAgICAgICAgICAgIHRhcmdldEVsZW1lbnQuc2Nyb2xsSW50b1ZpZXcodHJ1ZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIEtFWV9QUkVTU19TVEFURVMuRE9XTjpcbiAgICAgICAgICAgIHRhcmdldEVsZW1lbnQuc2Nyb2xsSW50b1ZpZXcoZmFsc2UpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0IG5hdmlnYXRpb24gaW5kZXggaWYgb3B0aW9ucyBpcyBvcGVuXG4gICAqIEByZXR1cm5zIE9wdGlvbnMgY3VycmVudCBpbmRleFxuICAgKi9cbiAgcHJpdmF0ZSBnZXROYXZpZ2F0aW9uSW5kZXggPSAoKSA9PiB7XG4gICAgbGV0IG9wdGlvbnNMaXN0ID0gdGhpcy5nZXRPcHRpb25zQmFzZUVsZW1lbnQoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9wdGlvbnNMaXN0LmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgb3B0aW9uID0gb3B0aW9uc0xpc3QuY2hpbGRyZW5baV07XG4gICAgICBpZiAob3B0aW9uLmNsYXNzTmFtZS5pbmRleE9mKEhPVkVSRUQpICE9PSAtMSkge1xuICAgICAgICByZXR1cm4gaTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gLTE7XG4gIH1cblxuICAvKipcbiAgICogSW5wdXQgY29tcG9uZW50IGBjaGFuZ2VgIGV2ZW50IGhhbmRsZXJcbiAgICogQHBhcmFtIGlucHV0Q2hhbmdlRXZlbnQgLSBJbnB1dCBjaGFuZ2UgZXZlbnQgaGFuZGxlclxuICAgKi9cbiAgcHJpdmF0ZSBvbklucHV0Q2hhbmdlID0gYXN5bmMgKGlucHV0Q2hhbmdlRXZlbnQ6IEV2ZW50KSA9PiB7XG4gICAgbGV0IHRhcmdldCA9IGlucHV0Q2hhbmdlRXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIC8vIElmIHVzZXIgcGFzcyBzcGVjaWFsIGJlaGF2aW9yIGZvciB0eXBpbmcgdmlhIGNvbmZpZ3VyYXRpb25cbiAgICBpZiAodGhpcy5pbnB1dENvbXBvbmVudC5vbklucHV0Q2hhbmdlKSB7XG4gICAgICB0aGlzLmlucHV0Q29tcG9uZW50Lm9uSW5wdXRDaGFuZ2UodGFyZ2V0LCB0YXJnZXQudmFsdWUpO1xuICAgIH1cbiAgICAvLyBJZiB3ZSB0eXBlIGFsd2F5cyBmZXRjaCBkYXRhIGFuZCBidWlsZCBvcHRpb25zXG4gICAgLy8gSWYgd2UgY2xpY2sgb24gaW5wdXQgYW5kIHRoZSBvcHRpb25zIGlzIGhpZGRlbiBidWlsZCB0aGUgb3B0aW9uc1xuICAgIC8vIElmIHdlIGNsaWNrIG9uIGlucHV0IGFuZCB0aGUgb3B0aW9ucyBpcyBhbHJlYWR5IG9wZW5lZCBkb24ndCBkbyBhbnl0aGluZ1xuICAgIGlmIChpbnB1dENoYW5nZUV2ZW50LnR5cGUgPT09IGBpbnB1dGAgfHxcbiAgICAgICAgICAgIChpbnB1dENoYW5nZUV2ZW50LnR5cGUgPT09IGBjbGlja2AgJiYgdGhpcy5pc09wdGlvbnNIaWRkZW4oKSkpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IHRoaXMuYnVpbGRPcHRpb25zKHRhcmdldC52YWx1ZSwgdHJ1ZSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLm9uRXJyb3IpIHtcbiAgICAgICAgICB0aGlzLmNvbmZpZy5vbkVycm9yKGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBMaW5rIG9wdGlvbnMgY29tcG9uZW50IGludG8gdGhlIGluZmluaXRlIGF1dG9jb21wbGV0ZSBjb21wb25lbnRcbiAgICovXG4gIHByaXZhdGUgbGlua09wdGlvbnNDb21wb25lbnQgPSAoKSA9PiB7XG4gICAgbGV0IG9wdGlvbnNXcmFwcGVyRWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgb3B0aW9uc1dyYXBwZXJFbGUuY2xhc3NOYW1lID0gYGluZmluaXRlLWF1dG9jb21wbGV0ZS1vcHRpb25zLXdyYXBwZXJgO1xuICAgIG9wdGlvbnNXcmFwcGVyRWxlLmlubmVySFRNTCA9IHRoaXMub3B0aW9uc0NvbXBvbmVudC5yZW5kZXIoKTtcbiAgICBsZXQgb3B0aW9uc0VsZSA9IG9wdGlvbnNXcmFwcGVyRWxlLnF1ZXJ5U2VsZWN0b3IodGhpcy5vcHRpb25zQ29tcG9uZW50Lmxpc3RFbGVtZW50U2VsZWN0b3IpIGFzIEhUTUxFbGVtZW50O1xuICAgIHRoaXMuc2V0RWxlbWVudFZpc2libGl0eShvcHRpb25zV3JhcHBlckVsZSwgZmFsc2UpO1xuICAgIG9wdGlvbnNFbGUuc3R5bGUub3ZlcmZsb3cgPSBgc2Nyb2xsYDtcbiAgICBvcHRpb25zRWxlLnN0eWxlLm92ZXJmbG93WCA9IGBoaWRkZW5gO1xuICAgIG9wdGlvbnNFbGUuc3R5bGUuYm9yZGVyID0gYDFweCBzb2xpZCAjYmNiY2JjYDtcbiAgICBvcHRpb25zRWxlLnN0eWxlLnBhZGRpbmdCb3R0b20gPSBgNXB4YDtcbiAgICBvcHRpb25zRWxlLnN0eWxlLm1heEhlaWdodCA9IHRoaXMuY29uZmlnLm1heEhlaWdodCB8fCBudWxsO1xuICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChvcHRpb25zV3JhcHBlckVsZSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgb3B0aW9ucyB3cmFwcGVyIGhpZGRlbiBvciBub3RcbiAgICogQHJldHVybnMgdHJ1ZSBpZiBoaWRkZW4sIG9yIGVsc2UgZmFsc2VcbiAgICovXG4gIHByaXZhdGUgaXNPcHRpb25zSGlkZGVuID0gKCk6IGJvb2xlYW4gPT4ge1xuICAgIGxldCBvcHRpb25zV3JhcHBlciA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKGAuaW5maW5pdGUtYXV0b2NvbXBsZXRlLW9wdGlvbnMtd3JhcHBlcmApIGFzIEhUTUxFbGVtZW50O1xuXG4gICAgcmV0dXJuIG9wdGlvbnNXcmFwcGVyLmNsYXNzTmFtZVxuICAgICAgLmluZGV4T2YoYGluZmluaXRlLWF1dG9jb21wbGV0ZS1oaWRkZW4tZWxlbWVudGApID4gLTE7XG4gIH1cblxuICAvKipcbiAgICogQXBwbHkgdGhlIHN0eWxlIHJ1bGVzIGZvciB0aGUgaW5maW5pdGUgYXV0b2NvbXBsZXRlIHBsdWdpbiBhbmQgaXQncyBjb21wb25lbnRzXG4gICAqL1xuICBwcml2YXRlIGFwcGx5U3R5bGVzUnVsZXMgPSAoKSA9PiB7XG5cbiAgICAvLyBNYWluIHdyYXBwZXIgc3R5bGUgcnVsZXNcbiAgICBsZXQgaXNNYWluV3JhcHBlclN0eWxlQXBwbGllZCA9IGRvY3VtZW50LmhlYWQucXVlcnlTZWxlY3RvcihcIiNpbmZpbml0ZS1hdXRvY29tcGxldGUtd3JhcHBlci1zdHlsZVwiKTtcbiAgICBpZiAoIWlzTWFpbldyYXBwZXJTdHlsZUFwcGxpZWQpIHtcbiAgICAgIGxldCBtYWluV3JhcHBlclN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICAgICAgbWFpbldyYXBwZXJTdHlsZS5pZCA9IFwiaW5maW5pdGUtYXV0b2NvbXBsZXRlLXdyYXBwZXItc3R5bGVcIjtcbiAgICAgIG1haW5XcmFwcGVyU3R5bGUuaW5uZXJIVE1MID0gYFxuICAgICAgICAgIC5pbmZpbml0ZS1hdXRvY29tcGxldGUtd3JhcHBlciB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB9XG4gICAgICBgO1xuICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChtYWluV3JhcHBlclN0eWxlKTtcbiAgICB9XG5cbiAgICAvLyBIaWRkZW4gZWxlbWVudCBzdHlsZSBydWxlc1xuICAgIGxldCBpc0hpZGRlblN0eWxlQXBwbGllZCA9IGRvY3VtZW50LmhlYWQucXVlcnlTZWxlY3RvcihcIiNpbmZpbml0ZS1hdXRvY29tcGxldGUtaGlkZGVuLXN0eWxlXCIpO1xuICAgIGlmICghaXNIaWRkZW5TdHlsZUFwcGxpZWQpIHtcbiAgICAgIGxldCBoaWRkZW5TdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgICAgIGhpZGRlblN0eWxlLmlkID0gXCJpbmZpbml0ZS1hdXRvY29tcGxldGUtaGlkZGVuLXN0eWxlXCI7XG4gICAgICBoaWRkZW5TdHlsZS5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgLmluZmluaXRlLWF1dG9jb21wbGV0ZS1oaWRkZW4tZWxlbWVudCB7XG4gICAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgICAgfVxuICAgICAgYDtcbiAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoaGlkZGVuU3R5bGUpO1xuICAgIH1cblxuICAgIC8vIERlZmF1bHRzIHN0eWxlIHJ1bGVzXG4gICAgbGV0IGlzRGVmYXVsdHNTdHlsZUFwcGxpZWQgPSBkb2N1bWVudC5oZWFkLnF1ZXJ5U2VsZWN0b3IoXCIjaW5maW5pdGUtYXV0b2NvbXBsZXRlLWRlZmF1bHRzLXN0eWxlXCIpO1xuICAgIGlmICghaXNEZWZhdWx0c1N0eWxlQXBwbGllZCkge1xuICAgICAgbGV0IGRlZmF1bHRzU3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gICAgICBkZWZhdWx0c1N0eWxlLmlkID0gXCJpbmZpbml0ZS1hdXRvY29tcGxldGUtZGVmYXVsdHMtc3R5bGVcIjtcbiAgICAgIGRlZmF1bHRzU3R5bGUuaW5uZXJIVE1MID0gYFxuICAgICAgICAgIC5pbmZpbml0ZS1hdXRvY29tcGxldGUtaW5wdXQtd3JhcHBlciAuaW5maW5pdGUtYXV0b2NvbXBsZXRlLWRlZmF1bHQtaW5wdXQge1xuICAgICAgICAgICAgICBoZWlnaHQ6IDI4cHg7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAxNXB4IC00cHggdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5pbmZpbml0ZS1hdXRvY29tcGxldGUtb3B0aW9ucy13cmFwcGVyIC5pbmZpbml0ZS1hdXRvY29tcGxldGUtZGVmYXVsdC1vcHRpb25zIHtcbiAgICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5pbmZpbml0ZS1hdXRvY29tcGxldGUtb3B0aW9ucy13cmFwcGVyIC5pbmZpbml0ZS1hdXRvY29tcGxldGUtZGVmYXVsdC1vcHRpb25zIGxpIHtcbiAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDEwcHggMTBweCAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaW5maW5pdGUtYXV0b2NvbXBsZXRlLW9wdGlvbnMtd3JhcHBlciAuaW5maW5pdGUtYXV0b2NvbXBsZXRlLWRlZmF1bHQtb3B0aW9ucyBsaS5ob3ZlcmVkIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2Q1ZWJmZjtcbiAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgYDtcbiAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoZGVmYXVsdHNTdHlsZSk7XG4gICAgfVxuXG4gICAgLy8gSW5wdXQgc3R5bGUgcnVsZXNcbiAgICBsZXQgaXNJbnB1dFN0eWxlQXBwbGllZCA9IGRvY3VtZW50LmhlYWQucXVlcnlTZWxlY3RvcihcIiNpbmZpbml0ZS1hdXRvY29tcGxldGUtaW5wdXQtc3R5bGVcIik7XG4gICAgaWYgKCFpc0lucHV0U3R5bGVBcHBsaWVkKSB7XG4gICAgICBsZXQgaW5wdXRTdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgICAgIGlucHV0U3R5bGUuaWQgPSBcImluZmluaXRlLWF1dG9jb21wbGV0ZS1pbnB1dC1zdHlsZVwiO1xuICAgICAgaW5wdXRTdHlsZS5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgLmluZmluaXRlLWF1dG9jb21wbGV0ZS1pbnB1dC13cmFwcGVyIGlucHV0IHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgYDtcbiAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoaW5wdXRTdHlsZSk7XG4gICAgfVxuXG4gICAgLy8gT3B0aW9ucyBzdHlsZSBydWxlc1xuICAgIGxldCBpc09wdGlvbnNTdHlsZUFwcGxpZWQgPSBkb2N1bWVudC5oZWFkLnF1ZXJ5U2VsZWN0b3IoXCIjaW5maW5pdGUtYXV0b2NvbXBsZXRlLW9wdGlvbnMtc3R5bGVcIik7XG4gICAgaWYgKCFpc09wdGlvbnNTdHlsZUFwcGxpZWQpIHtcbiAgICAgIGxldCBvcHRpb25zU3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gICAgICBvcHRpb25zU3R5bGUuaWQgPSBgaW5maW5pdGUtYXV0b2NvbXBsZXRlLW9wdGlvbnMtc3R5bGVgO1xuICAgICAgb3B0aW9uc1N0eWxlLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAuaW5maW5pdGUtYXV0b2NvbXBsZXRlLW9wdGlvbnMtd3JhcHBlciB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgIH1cbiAgICAgIGA7XG4gICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKG9wdGlvbnNTdHlsZSk7XG4gICAgfVxuXG4gICAgLy8gU2Nyb2xsYmFyIHN0eWxlIHJ1bGVzXG4gICAgbGV0IGlzU2Nyb2xsYmFyU3R5bGVBcHBsaWVkID0gZG9jdW1lbnQuaGVhZC5xdWVyeVNlbGVjdG9yKFwiI2luZmluaXRlLWF1dG9jb21wbGV0ZS1zY3JvbGxiYXItc3R5bGVcIik7XG4gICAgaWYgKCFpc1Njcm9sbGJhclN0eWxlQXBwbGllZCkge1xuICAgICAgbGV0IHNwZWNpYWxTY3JvbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gICAgICBzcGVjaWFsU2Nyb2xsLmlkID0gXCJpbmZpbml0ZS1hdXRvY29tcGxldGUtc2Nyb2xsYmFyLXN0eWxlXCI7XG4gICAgICBzcGVjaWFsU2Nyb2xsLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAuaW5maW5pdGUtYXV0b2NvbXBsZXRlLXdyYXBwZXIgOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogNHB4O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmluZmluaXRlLWF1dG9jb21wbGV0ZS13cmFwcGVyIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwwLDAsMC4zKTtcbiAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuaW5maW5pdGUtYXV0b2NvbXBsZXRlLXdyYXBwZXIgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICAgICAgICAgICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjgpO1xuICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwwLDAsMC41KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuaW5maW5pdGUtYXV0b2NvbXBsZXRlLXdyYXBwZXIgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjp3aW5kb3ctaW5hY3RpdmUge1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMCwwLDAuNCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgIGA7XG4gICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNwZWNpYWxTY3JvbGwpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBCaW5kcyBhIHNjcm9sbCBldmVudCBoYW5kbGVyIG9uIHRoZSBvcHRpb25zXG4gICAqL1xuICBwcml2YXRlIGJpbmRTY3JvbGxSZWFjaEJvdHRvbUV2ZW50ID0gKCkgPT4ge1xuICAgIGxldCBvcHRpb25zRWxlID0gdGhpcy5nZXRPcHRpb25zQmFzZUVsZW1lbnQoKTtcbiAgICBvcHRpb25zRWxlLmFkZEV2ZW50TGlzdGVuZXIoYHNjcm9sbGAsIHRoaXMuc2Nyb2xsUmVhY2hlZEJvdHRvbUhhbmRsZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNjcm9sbCByZWFjaGVkIGJvdHRvbSBoYW5kbGVyXG4gICAqIEBwYXJhbSBlIC0gU2Nyb2xsIGV2ZW50IG9iamVjdFxuICAgKi9cbiAgcHJpdmF0ZSBzY3JvbGxSZWFjaGVkQm90dG9tSGFuZGxlciA9IGFzeW5jIChlOiBFdmVudCkgPT4ge1xuICAgIGxldCBvcHRpb25zRWxlID0gZS5jdXJyZW50VGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuICAgIGlmICghdGhpcy5mZXRjaGluZ0RhdGEgJiYgIXRoaXMucHJldmVudE1vcmVSZXF1ZXN0cyAmJiAhdGhpcy5pc09wdGlvbnNIaWRkZW4oKSkge1xuICAgICAgaWYgKG9wdGlvbnNFbGUuc2Nyb2xsVG9wICsgb3B0aW9uc0VsZS5jbGllbnRIZWlnaHQgPj0gb3B0aW9uc0VsZS5zY3JvbGxIZWlnaHQpIHtcbiAgICAgICAgdGhpcy5wYWdlKys7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgYXdhaXQgdGhpcy5idWlsZE9wdGlvbnMoXG4gICAgICAgICAgICB0aGlzLmdldElucHV0RWxlbWVudCgpLnZhbHVlLFxuICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICBpZiAodGhpcy5jb25maWcub25FcnJvcikge1xuICAgICAgICAgICAgdGhpcy5jb25maWcub25FcnJvcihlcnJvcik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENsZWFycyB0aGUgb3B0aW9ucyBsaXN0IHRhZyB3aXRoIHJlbW92aW5nIHRoZSBjbGljayBldmVudCBoYW5kbGVyc1xuICAgKiB1bmJpbmQgdGhlIGBzY3JvbGxgIGV2ZW50IGZyb20gdGhlIG9wdGlvbnNcbiAgICogKEdhcmJhZ2UgY29sbGVjdGluZylcbiAgICovXG4gIHByaXZhdGUgY2xlYXJPcHRpb25zID0gKCkgPT4ge1xuICAgIHRoaXMuZGV0YWNoT3B0aW9uRXZlbnRIYW5kbGVycyhcbiAgICAgIHRoaXMuZ2V0T3B0aW9uc0Jhc2VFbGVtZW50KClcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoYFtpbmZpbml0ZS1jbGlja2FibGVdYCksXG4gICAgKTtcbiAgICB0aGlzLnJlc2V0Q3VycmVudFBhZ2UoKTtcbiAgICB0aGlzLnByZXZlbnRNb3JlUmVxdWVzdHMgPSBmYWxzZTtcblxuICAgIGxldCBvcHRpb25MaXN0RWxlbWVudCA9IHRoaXMuZ2V0T3B0aW9uc0Jhc2VFbGVtZW50KCk7XG5cbiAgICB0aGlzLnNldEVsZW1lbnRWaXNpYmxpdHkoXG4gICAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihgLmluZmluaXRlLWF1dG9jb21wbGV0ZS1vcHRpb25zLXdyYXBwZXJgKSBhcyBIVE1MRWxlbWVudCxcbiAgICAgIGZhbHNlLFxuICAgICk7XG4gICAgb3B0aW9uTGlzdEVsZW1lbnQuaW5uZXJIVE1MID0gYGA7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgZWxlbWVudCB2aXNpYmxpdHlcbiAgICogQHBhcmFtIGVsZW1lbnQgLSBIVE1MRWxlbWVudFxuICAgKiBAcGFyYW0gdmlzaWJsZSAtIHZpc2liaWxpdHkgc3RhdHVzXG4gICAqL1xuICBwcml2YXRlIHNldEVsZW1lbnRWaXNpYmxpdHkoZWxlbWVudDogSFRNTEVsZW1lbnQsIHZpc2libGU6IGJvb2xlYW4pIHtcbiAgICBpZiAodmlzaWJsZSkge1xuICAgICAgZWxlbWVudC5jbGFzc05hbWUgPSBlbGVtZW50LmNsYXNzTmFtZVxuICAgICAgICAuc3BsaXQoXCIgXCIpXG4gICAgICAgIC5maWx0ZXIoZSA9PiBlICE9PSBgaW5maW5pdGUtYXV0b2NvbXBsZXRlLWhpZGRlbi1lbGVtZW50YClcbiAgICAgICAgLmpvaW4oXCIgXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZWxlbWVudC5jbGFzc05hbWUuaW5kZXhPZihgaW5maW5pdGUtYXV0b2NvbXBsZXRlLWhpZGRlbi1lbGVtZW50YCkgPT09IC0xKSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9IGAgaW5maW5pdGUtYXV0b2NvbXBsZXRlLWhpZGRlbi1lbGVtZW50YDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0IG9wdGlvbnMgYmFzZSBIVE1MRWxlbWVudFxuICAgKiBAcmV0dXJucyBIVE1MRWxlbWVudFxuICAgKi9cbiAgcHJpdmF0ZSBnZXRPcHRpb25zQmFzZUVsZW1lbnQoKTogSFRNTEVsZW1lbnQge1xuICAgIGlmICh0aGlzLmVsZW1lbnQpIHtcbiAgICAgIGxldCBvcHRpb25zV3JhcHBlciA9IHRoaXMuZWxlbWVudFxuICAgICAgICAucXVlcnlTZWxlY3RvcihgLmluZmluaXRlLWF1dG9jb21wbGV0ZS1vcHRpb25zLXdyYXBwZXJgKTtcbiAgICAgIGlmIChvcHRpb25zV3JhcHBlcikge1xuICAgICAgICByZXR1cm4gb3B0aW9uc1dyYXBwZXJcbiAgICAgICAgICAucXVlcnlTZWxlY3Rvcih0aGlzLm9wdGlvbnNDb21wb25lbnQubGlzdEVsZW1lbnRTZWxlY3RvcikgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBvcHRpb25zV3JhcHBlckV4Y2VwdGlvbk1zZztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgb3B0aW9uc1dyYXBwZXJFeGNlcHRpb25Nc2c7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERldGFjaGluZyB0aGUgZXZlbnQgaGFuZGxlcnMgb3ZlciB0aGUgb3B0aW9uIGVsZW1lbnRzXG4gICAqL1xuICBwcml2YXRlIGRldGFjaE9wdGlvbkV2ZW50SGFuZGxlcnMoZWxlbWVudHM6IE5vZGVMaXN0T2Y8RWxlbWVudD4pIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBlbGVtZW50c1tpXS5yZW1vdmVFdmVudExpc3RlbmVyKGBjbGlja2AsIHRoaXMub25PcHRpb25DbGlja0V2ZW50KTtcbiAgICAgIGVsZW1lbnRzW2ldLnJlbW92ZUV2ZW50TGlzdGVuZXIoYG1vdXNlb3ZlcmAsIHRoaXMub25PcHRpb25Ib3ZlckV2ZW50KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogT3B0aW9uIGNsaWNrIGV2ZW50IGhhbmRsZXJcbiAgICogQHBhcmFtIGNsaWNrRXZlbnRcbiAgICovXG4gIHByaXZhdGUgb25PcHRpb25DbGlja0V2ZW50ID0gKGNsaWNrRXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcbiAgICBpZiAodGhpcy5jb25maWcub25TZWxlY3QpIHtcbiAgICAgIHRoaXMuY29uZmlnLm9uU2VsZWN0KGNsaWNrRXZlbnQuY3VycmVudFRhcmdldCwgKGNsaWNrRXZlbnQuY3VycmVudFRhcmdldCBhcyBhbnkpLmRhdGEpO1xuICAgIH1cbiAgICB0aGlzLmNsZWFyT3B0aW9ucygpO1xuICAgIHRoaXMuc2V0SW5wdXQoKGNsaWNrRXZlbnQuY3VycmVudFRhcmdldCBhcyBhbnkpLmRhdGEudGV4dCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGlucHV0IEhUTUwgZWxlbWVudCBiZWxvdyBpbmZpbml0ZS1hdXRvY29tcGxldGUtaW5wdXQtd3JhcHBlclxuICAgKiBAcmV0dXJucyBIVE1MSW5wdXRFbGVtZW50XG4gICAqL1xuICBwcml2YXRlIGdldElucHV0RWxlbWVudCgpOiBIVE1MSW5wdXRFbGVtZW50IHtcbiAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICBsZXQgaW5wdXRXcmFwcGVyID0gdGhpcy5lbGVtZW50XG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKGAuaW5maW5pdGUtYXV0b2NvbXBsZXRlLWlucHV0LXdyYXBwZXJgKTtcbiAgICAgIGlmIChpbnB1dFdyYXBwZXIpIHtcbiAgICAgICAgcmV0dXJuIGlucHV0V3JhcHBlclxuICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKGBpbnB1dGApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBpbnB1dEVsZW1lbnRFeGNlcHRpb25Nc2c7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IGlucHV0RWxlbWVudEV4Y2VwdGlvbk1zZztcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2V0IGlucHV0IHNob3duIHRleHRcbiAgICogQHBhcmFtIHRleHRcbiAgICovXG4gIHByaXZhdGUgc2V0SW5wdXQodGV4dDogc3RyaW5nKSB7XG4gICAgdGhpcy5nZXRJbnB1dEVsZW1lbnQoKVxuICAgICAgLnZhbHVlID0gdGV4dDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IGZldGNoaW5nRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbEZldGNoaW5nRGF0YTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0IGZldGNoaW5nRGF0YShsb2FkaW5nU3RhdGUpIHtcbiAgICBpZiAodGhpcy5jb25maWcub25Mb2FkaW5nU3RhdGVDaGFuZ2UpIHtcbiAgICAgIHRoaXMuY29uZmlnLm9uTG9hZGluZ1N0YXRlQ2hhbmdlKGxvYWRpbmdTdGF0ZSk7XG4gICAgfVxuICAgIHRoaXMubG9jYWxGZXRjaGluZ0RhdGEgPSBsb2FkaW5nU3RhdGU7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGRhdGEgYmFzZWQgb24gdGV4dCwgcGFnZSBhbmQgZmV0Y2hTaXplXG4gICAqIEBwYXJhbSB0ZXh0XG4gICAqIEBwYXJhbSBwYWdlXG4gICAqIEBwYXJhbSBmZXRjaFNpemVcbiAgICovXG4gIHByaXZhdGUgYXN5bmMgZ2V0RGF0YSh0ZXh0OiBzdHJpbmcsIHBhZ2U6IG51bWJlciwgZmV0Y2hTaXplOiBudW1iZXIpOiBQcm9taXNlPElPcHRpb25bXSB8IG51bGw+IHtcbiAgICB0aGlzLnNlYXJjaGVkVGV4dCA9IHRleHQ7XG4gICAgaWYgKHRoaXMuY29uZmlnLmRhdGEpIHtcbiAgICAgIHRoaXMuZmV0Y2hpbmdEYXRhID0gdHJ1ZTtcbiAgICAgIGxldCBmcm9tID0gKHBhZ2UgLSAxKSAqIGZldGNoU2l6ZTtcbiAgICAgIGxldCB0byA9IChmZXRjaFNpemUgKiAocGFnZSAtIDEpKSArIGZldGNoU2l6ZTtcbiAgICAgIGxldCBzdGF0aWNEYXRhID0gdGhpcy5jb25maWcuZGF0YVxuICAgICAgICAgIC5maWx0ZXIob3B0aW9uID0+IG9wdGlvbi50ZXh0LnRvTG93ZXJDYXNlKCkuaW5kZXhPZih0ZXh0LnRvTG93ZXJDYXNlKCkpICE9PSAtMSlcbiAgICAgICAgICAuc2xpY2UoZnJvbSwgdG8pO1xuICAgICAgdGhpcy5mZXRjaGluZ0RhdGEgPSBmYWxzZTtcblxuICAgICAgcmV0dXJuIHN0YXRpY0RhdGE7XG4gICAgfSBlbHNlIGlmICh0aGlzLmNvbmZpZy5nZXREYXRhRnJvbUFwaSkge1xuICAgICAgdGhpcy5mZXRjaGluZ0RhdGEgPSB0cnVlO1xuICAgICAgbGV0IGFwaURhdGEgPSBhd2FpdCB0aGlzLmNvbmZpZy5nZXREYXRhRnJvbUFwaSh0ZXh0LCBwYWdlLCBmZXRjaFNpemUpO1xuICAgICAgdGhpcy5mZXRjaGluZ0RhdGEgPSBmYWxzZTtcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5zZWFyY2hlZFRleHQgPT09IHRleHQgJiZcbiAgICAgICAgdGhpcy5wYWdlID09PSBwYWdlICYmXG4gICAgICAgIHRoaXMuY29uZmlnLmZldGNoU2l6ZSA9PT0gZmV0Y2hTaXplXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIGFwaURhdGE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgZGF0YVNvdXJjZU1pc3NpbmdFeGNlcHRpb25Nc2c7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE9uIGhvdmVyaW5nIG9uIG9wdGlvbiByb3dcbiAgICogQHBhcmFtIGV2ZW50IC0gSG92ZXIgTW91c2UgRXZlbnRcbiAgICovXG4gIHByaXZhdGUgb25PcHRpb25Ib3ZlckV2ZW50ID0gKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgbGV0IG9wdGlvbnNMaXN0ID0gdGhpcy5nZXRPcHRpb25zQmFzZUVsZW1lbnQoKTtcbiAgICBsZXQgaG92ZXJlZEVsZW1lbnQgPSBvcHRpb25zTGlzdC5xdWVyeVNlbGVjdG9yKGAuJHtIT1ZFUkVEfWApO1xuICAgIGlmIChob3ZlcmVkRWxlbWVudCkge1xuICAgICAgaG92ZXJlZEVsZW1lbnQuY2xhc3NOYW1lID0gaG92ZXJlZEVsZW1lbnRcbiAgICAgICAgLmNsYXNzTmFtZVxuICAgICAgICAuc3BsaXQoXCIgXCIpXG4gICAgICAgIC5maWx0ZXIoZSA9PiBlICE9PSBIT1ZFUkVEKVxuICAgICAgICAuam9pbihcIiBcIilcbiAgICAgICAgLnRyaW0oKTtcbiAgICB9XG4gICAgbGV0IHRhcmdldCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgdGFyZ2V0LmNsYXNzTmFtZSArPSBgICR7SE9WRVJFRH1gO1xuICB9XG5cbiAgLyoqXG4gICAqIEJ1aWxkIHRoZSBvcHRpb25zIGlubmVyIHRhZ3MgaW4gb3B0aW9ucyBsaXN0IHRhZyBiYXNlZCBvbiB0aGUgdGV4dCBwYXNzZWQgYW5kIHRoZSBkYXRhIGluIGNvbmZpZ1xuICAgKiBAcGFyYW0gdGV4dCAtIFRleHQgdG8gc2VhcmNoIG9uIGluIHRoZSBhdXRvY29tcGxldGVcbiAgICogQHBhcmFtIGNsZWFyUHJldmlvdXNEYXRhIC0gRmxhZyB0byBjbGVhciBwcmV2aW91cyBvcHRpb25zIGFuZCBvdmVycmlkZSB3aXRoIHRoZSBuZXcgb25lXG4gICAqL1xuICBwcml2YXRlIGFzeW5jIGJ1aWxkT3B0aW9ucyh0ZXh0OiBzdHJpbmcsIGNsZWFyUHJldmlvdXNEYXRhOiBib29sZWFuID0gdHJ1ZSk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCBvcHRpb25MaXN0RWxlbWVudCA9IHRoaXMuZ2V0T3B0aW9uc0Jhc2VFbGVtZW50KCk7XG4gICAgaWYgKGNsZWFyUHJldmlvdXNEYXRhKSB7XG4gICAgICAgIHRoaXMuY2xlYXJPcHRpb25zKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY29uZmlnLmZldGNoU2l6ZSAmJiAhaXNOYU4odGhpcy5jb25maWcuZmV0Y2hTaXplKSkge1xuICAgICAgbGV0IGZpbHRlcmVkT3B0aW9ucyA9IGF3YWl0IHRoaXMuZ2V0RGF0YSh0ZXh0LCB0aGlzLnBhZ2UsIHRoaXMuY29uZmlnLmZldGNoU2l6ZSk7XG5cbiAgICAgIGlmIChmaWx0ZXJlZE9wdGlvbnMgIT09IG51bGwpIHtcbiAgICAgICAgaWYgKGZpbHRlcmVkT3B0aW9ucy5sZW5ndGggPCB0aGlzLmNvbmZpZy5mZXRjaFNpemUpIHtcbiAgICAgICAgICAvLyBTdG9wIGZldGNoaW5nIG1vcmUgY2h1bmtzIHdoZW5ldmVyIHlvdSBnZXQgbGVzcyB0aGFuIHRoZSBjaHVuayBmZXRjaCBzaXplXG4gICAgICAgICAgdGhpcy5wcmV2ZW50TW9yZVJlcXVlc3RzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZpbHRlcmVkT3B0aW9uc1xuICAgICAgICAgIC5mb3JFYWNoKG9wdGlvbiA9PiB7XG4gICAgICAgICAgICBsZXQgb3B0aW9uRWxlbWVudFRlbXBsYXRlID0gdGhpcy5vcHRpb25zQ29tcG9uZW50LnJlbmRlck9wdGlvbihvcHRpb24pO1xuICAgICAgICAgICAgbGV0IHRlbXBFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgICAgICAgICB0ZW1wRWxlbWVudC5pbm5lckhUTUwgPSBvcHRpb25FbGVtZW50VGVtcGxhdGU7XG4gICAgICAgICAgICBsZXQgb3B0aW9uRWxlbWVudCA9IHRlbXBFbGVtZW50LmNoaWxkTm9kZXNbMF07XG4gICAgICAgICAgICAob3B0aW9uRWxlbWVudCBhcyBhbnkpLmRhdGEgPSB7IHRleHQ6IG9wdGlvbi50ZXh0LCB2YWx1ZTogb3B0aW9uLnZhbHVlIH07XG4gICAgICAgICAgICAob3B0aW9uRWxlbWVudCBhcyBIVE1MRWxlbWVudCkuc2V0QXR0cmlidXRlKFwiaW5maW5pdGUtY2xpY2thYmxlXCIsIFwiXCIpO1xuICAgICAgICAgICAgb3B0aW9uRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGBjbGlja2AsIHRoaXMub25PcHRpb25DbGlja0V2ZW50KTtcbiAgICAgICAgICAgIG9wdGlvbkVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihgbW91c2VvdmVyYCwgdGhpcy5vbk9wdGlvbkhvdmVyRXZlbnQpO1xuICAgICAgICAgICAgb3B0aW9uTGlzdEVsZW1lbnQuYXBwZW5kQ2hpbGQob3B0aW9uRWxlbWVudCk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGZpbHRlcmVkT3B0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgbGV0IGNodW5rQ2xpZW50SGVpZ2h0ID0gb3B0aW9uTGlzdEVsZW1lbnQuY2hpbGRyZW5bMF0uY2xpZW50SGVpZ2h0O1xuICAgICAgICAgIC8vIENoZWNrIGlmIG1heEhlaWdodCBpcyBmaXRzIHRoZSBjaHVuayBzaXplIGxpc3RcbiAgICAgICAgICBpZiAodGhpcy5jb25maWcubWF4SGVpZ2h0KSB7XG4gICAgICAgICAgICBsZXQgbWF4SGVpZ2h0TnVtYmVyID0gcGFyc2VJbnQodGhpcy5jb25maWcubWF4SGVpZ2h0LCAxMCk7XG4gICAgICAgICAgICBpZiAobWF4SGVpZ2h0TnVtYmVyID49IGNodW5rQ2xpZW50SGVpZ2h0ICogdGhpcy5jb25maWcuZmV0Y2hTaXplKSB7XG4gICAgICAgICAgICAgIHRoaXMuY29uZmlnLm1heEhlaWdodCA9IChjaHVua0NsaWVudEhlaWdodCAqIHRoaXMuY29uZmlnLmZldGNoU2l6ZSAtIDUpICsgXCJweFwiO1xuICAgICAgICAgICAgICBsZXQgb3B0aW9uc1dyYXBwZXJFbGUgPVxuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKGAuaW5maW5pdGUtYXV0b2NvbXBsZXRlLW9wdGlvbnMtd3JhcHBlcmApIGFzIEhUTUxFbGVtZW50O1xuICAgICAgICAgICAgICBsZXQgb3B0aW9uc0VsZSA9XG4gICAgICAgICAgICAgICAgb3B0aW9uc1dyYXBwZXJFbGUucXVlcnlTZWxlY3Rvcih0aGlzLm9wdGlvbnNDb21wb25lbnQubGlzdEVsZW1lbnRTZWxlY3RvcikgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgICAgICAgIG9wdGlvbnNFbGUuc3R5bGUubWF4SGVpZ2h0ID0gdGhpcy5jb25maWcubWF4SGVpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9uTGlzdEVsZW1lbnQuaW5uZXJIVE1MICE9PSBgYCkge1xuICAgICAgICB0aGlzLnNldEVsZW1lbnRWaXNpYmxpdHkoXG4gICAgICAgICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYC5pbmZpbml0ZS1hdXRvY29tcGxldGUtb3B0aW9ucy13cmFwcGVyYCkgYXMgSFRNTEVsZW1lbnQsXG4gICAgICAgICAgdHJ1ZSxcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0RWxlbWVudFZpc2libGl0eShcbiAgICAgICAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihgLmluZmluaXRlLWF1dG9jb21wbGV0ZS1vcHRpb25zLXdyYXBwZXJgKSBhcyBIVE1MRWxlbWVudCxcbiAgICAgICAgICBmYWxzZSxcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBmZXRjaFNpemVFeGNlcHRpb25Nc2c7XG4gICAgfVxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Db21wb25lbnRzL0luZmluaXRlQXV0b2NvbXBsZXRlLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==