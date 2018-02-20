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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBjYzAyNWQzZDQ3YjQyZDljMDc2OCIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9JbnB1dENvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9PcHRpb25zQ29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9Db25zdGFudHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvSW5maW5pdGVBdXRvY29tcGxldGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQzlEQTs7O0dBR0c7QUFDSDtJQUFBO0lBSUEsQ0FBQztJQUhRLCtCQUFNLEdBQWI7UUFDSSxNQUFNLENBQUMsdUVBQW1FLENBQUM7SUFDL0UsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQztBQUpZLHdDQUFjOzs7Ozs7Ozs7O0FDSDNCOzs7R0FHRztBQUNIO0lBQUE7UUFDUyx3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LENBQUMsYUFBYSxDQUFDLHdDQUF3QyxDQUFnQixDQUFDO3dDQUNsRixVQUFVLEdBQ1osaUJBQWlCLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBZ0IsQ0FBQzt3Q0FDNUYsVUFBVSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7b0NBQ3JELENBQUM7Z0NBQ0gsQ0FBQzs0QkFDSCxDQUFDO3dCQUNILENBQUM7d0JBRUQsRUFBRSxDQUFDLENBQUMsaUJBQWlCLENBQUMsU0FBUyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7NEJBQ3ZDLElBQUksQ0FBQyxtQkFBbUIsQ0FDdEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsd0NBQXdDLENBQWdCLEVBQ25GLElBQUksQ0FDTCxDQUFDO3dCQUNKLENBQUM7d0JBQUMsSUFBSSxDQUFDLENBQUM7NEJBQ04sSUFBSSxDQUFDLG1CQUFtQixDQUN0QixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyx3Q0FBd0MsQ0FBZ0IsRUFDbkYsS0FBSyxDQUNOLENBQUM7d0JBQ0osQ0FBQzs7NEJBR0QsTUFBTSw2QkFBcUIsQ0FBQzs7Ozs7S0FFL0I7SUFFSCwyQkFBQztBQUFELENBQUM7QUFydUJZLG9EQUFvQiIsImZpbGUiOiJpbmRleC5kZWJ1Zy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSBmYWN0b3J5KCk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBjYzAyNWQzZDQ3YjQyZDljMDc2OCIsImltcG9ydCB7IElJbnB1dENvbXBvbmVudCB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lJbnB1dENvbXBvbmVudFwiO1xuXG4vKipcbiAqIElucHV0IGNvbXBvbmVudCBkZWZhdWx0IGltcGxlbWVudGF0aW9uXG4gKiBAYXV0aG9yIElzbGFtIEF0dHJhc2hcbiAqL1xuZXhwb3J0IGNsYXNzIElucHV0Q29tcG9uZW50IGltcGxlbWVudHMgSUlucHV0Q29tcG9uZW50IHtcbiAgcHVibGljIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiBgPGlucHV0IGNsYXNzPVwiaW5maW5pdGUtYXV0b2NvbXBsZXRlLWRlZmF1bHQtaW5wdXRcIiB0eXBlPVwidGV4dFwiIC8+YDtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0NvbXBvbmVudHMvSW5wdXRDb21wb25lbnQudHMiLCJpbXBvcnQgeyBJT3B0aW9uc0NvbXBvbmVudCB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lPcHRpb25zQ29tcG9uZW50XCI7XG5pbXBvcnQgeyBJT3B0aW9uIH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSU9wdGlvblwiO1xuXG4vKipcbiAqIE9wdGlvbnMgY29tcG9uZW50IGRlZmF1bHQgaW1wbGVtZW50YXRpb25cbiAqIEBhdXRob3IgSXNsYW0gQXR0cmFzaFxuICovXG5leHBvcnQgY2xhc3MgT3B0aW9uc0NvbXBvbmVudCBpbXBsZW1lbnRzIElPcHRpb25zQ29tcG9uZW50IHtcbiAgcHVibGljIGxpc3RFbGVtZW50U2VsZWN0b3I6IHN0cmluZyA9IGB1bGA7XG5cbiAgcHVibGljIHJlbmRlcigpIHtcbiAgICByZXR1cm4gYDwke3RoaXMubGlzdEVsZW1lbnRTZWxlY3Rvcn0gY2xhc3M9XCJpbmZpbml0ZS1hdXRvY29tcGxldGUtZGVmYXVsdC1vcHRpb25zXCI+PC8ke3RoaXMubGlzdEVsZW1lbnRTZWxlY3Rvcn0+YDtcbiAgfVxuXG4gIHB1YmxpYyByZW5kZXJPcHRpb24ob3B0aW9uOiBJT3B0aW9uKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYDxsaT5cbiAgICAgICAgICAgICAgICAke29wdGlvbi50ZXh0fVxuICAgICAgICAgICAgPC9saT5gO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Db21wb25lbnRzL09wdGlvbnNDb21wb25lbnQudHMiLCJcbi8qKiBIb3ZlcmVkIHN0YXRlIHdoZW4gbmF2aWdhdGlvbiB0aHJvdWdoIHVwQXJyb3cvZG93bkFycm93IHdoaWxlIG9wdGlvbnMgaXMgb3BlbiAqL1xuZXhwb3J0IGNvbnN0IEhPVkVSRUQgPSBcImhvdmVyZWRcIjtcblxuLyoqXG4gKiBLZXkgZG93biBzdGF0ZXMgKGtleUNvZGVzKVxuICovXG5leHBvcnQgY29uc3QgS0VZX1BSRVNTX1NUQVRFUyA9IHtcbiAgICBVUDogMzgsXG4gICAgRE9XTjogNDAsXG4gICAgRU5URVI6IDEzLFxufTtcblxuZXhwb3J0IGNvbnN0IE1pc3NpbmdJbnB1dEVsZW1lbnRJbklucHV0Q29tcG9uZW50RXhjZXB0aW9uTXNnID1cbiAgbmV3IEVycm9yKGBDdXN0b21pemVkIGlucHV0IHNob3VsZCBjb250YWluIGlucHV0IGVsZW1lbnQgPGlucHV0IC8+YCk7XG5cbmV4cG9ydCBjb25zdCBvcHRpb25zV3JhcHBlckV4Y2VwdGlvbk1zZyA9IG5ldyBFcnJvcihgQ291bGRuJ3QgZ2V0IHRoZSBvcHRpb25zIGJhc2UgZWxlbWVudC5gKTtcblxuZXhwb3J0IGNvbnN0IGlucHV0RWxlbWVudEV4Y2VwdGlvbk1zZyA9IG5ldyBFcnJvcihgQ291bGRuJ3QgZ2V0IHRoZSBpbnB1dCBlbGVtZW50LmApO1xuXG5leHBvcnQgY29uc3QgZGF0YVNvdXJjZU1pc3NpbmdFeGNlcHRpb25Nc2cgPSBuZXcgRXJyb3IgKGBZb3UgbXVzdCBwYXNzIGRhdGEgb3IgZ2V0RGF0YUZyb21BcGkgZnVuY3Rpb24gdmlhIGNvbmZpZ2ApO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hTaXplRXhjZXB0aW9uTXNnID0gbmV3IEVycm9yKGBmZXRjaFNpemUgbXVzdCBiZSBvdmVycmlkZW4gd2l0aCBjb3JyZWN0IG51bWVyaWMgdmFsdWVgKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Db25zdGFudHMvaW5kZXgudHMiLCJpbXBvcnQgeyBJbnB1dENvbXBvbmVudCBhcyBkZWZhdWx0SW5wdXRJbXBsIH0gZnJvbSBcIi4vSW5wdXRDb21wb25lbnRcIjtcbmltcG9ydCB7IE9wdGlvbnNDb21wb25lbnQgYXMgZGVmYXVsdE9wdGlvbnNJbXBsIH0gZnJvbSBcIi4vT3B0aW9uc0NvbXBvbmVudFwiO1xuaW1wb3J0IHsgSW5maW5pdGVBdXRvY29tcGxldGVDb25maWcgfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JbmZpbml0ZUF1dG9jb21wbGV0ZUNvbmZpZ1wiO1xuaW1wb3J0IHsgSUlucHV0Q29tcG9uZW50LCBJSW5wdXRDb21wb2VuZW50Q29uc3RydWN0b3IgfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JSW5wdXRDb21wb25lbnRcIjtcbmltcG9ydCB7IElPcHRpb25zQ29tcG9uZW50LCBJT3B0aW9uc0NvbXBvbmVudENvbnN0cnVjdG9yIH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSU9wdGlvbnNDb21wb25lbnRcIjtcbmltcG9ydCB7IElJbmZpbml0ZUF1dG9jb21wbGV0ZSB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lJbmZpbml0ZUF1dG9jb21wbGV0ZVwiO1xuaW1wb3J0IHsgSU9wdGlvbiB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lPcHRpb25cIjtcbmltcG9ydCB7XG4gIEhPVkVSRUQsXG4gIEtFWV9QUkVTU19TVEFURVMsXG4gIE1pc3NpbmdJbnB1dEVsZW1lbnRJbklucHV0Q29tcG9uZW50RXhjZXB0aW9uTXNnLFxuICBvcHRpb25zV3JhcHBlckV4Y2VwdGlvbk1zZyxcbiAgaW5wdXRFbGVtZW50RXhjZXB0aW9uTXNnLFxuICBkYXRhU291cmNlTWlzc2luZ0V4Y2VwdGlvbk1zZyxcbiAgZmV0Y2hTaXplRXhjZXB0aW9uTXNnLFxufSBmcm9tIFwiLi4vQ29uc3RhbnRzL2luZGV4XCI7XG5cbi8qKlxuICogRGVmYXVsdCBJbnB1dCBpbiBpbmZpbml0ZS1hdXRvY29tcGxldGUgY29tcG9uZW50XG4gKi9cbmV4cG9ydCBjb25zdCBJbnB1dENvbXBvbmVudCA9IGRlZmF1bHRJbnB1dEltcGw7XG5cbi8qKlxuICogRGVmYXVsdCBJbnB1dCBpbiBpbmZpbml0ZS1hdXRvY29tcGxldGUgY29tcG9uZW50XG4gKi9cbmV4cG9ydCBjb25zdCBPcHRpb25zQ29tcG9uZW50ID0gZGVmYXVsdE9wdGlvbnNJbXBsO1xuXG4vKipcbiAqIGluZmluaXRlLWF1dG9jb21wbGV0ZSBjb21wb25lbnQgaW1wbGVtZW50YXRpb25cbiAqIEBhdXRob3IgSXNsYW0gQXR0cmFzaFxuICovXG5leHBvcnQgY2xhc3MgSW5maW5pdGVBdXRvY29tcGxldGUgaW1wbGVtZW50cyBJSW5maW5pdGVBdXRvY29tcGxldGUge1xuXG4gIHByaXZhdGUgZWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gIHByaXZhdGUgaW5wdXRDb21wb25lbnQ6IElJbnB1dENvbXBvbmVudDtcbiAgcHJpdmF0ZSBvcHRpb25zQ29tcG9uZW50OiBJT3B0aW9uc0NvbXBvbmVudDtcbiAgcHJpdmF0ZSBwYWdlOiBudW1iZXIgPSAxO1xuICBwcml2YXRlIHNlYXJjaGVkVGV4dDogc3RyaW5nID0gXCJcIjtcbiAgcHJpdmF0ZSBpc0Rlc3Ryb3llZCA9IGZhbHNlO1xuICBwcml2YXRlIGNvbmZpZzogSW5maW5pdGVBdXRvY29tcGxldGVDb25maWc7XG4gIHByaXZhdGUgcHJldmVudE1vcmVSZXF1ZXN0czogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIGxvY2FsRmV0Y2hpbmdEYXRhOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIERlZmF1bHQgY29uZmlndXJhdGlvbiBvYmplY3RcbiAgICovXG4gIHByaXZhdGUgZGVmYXVsdENvbmZpZzogSW5maW5pdGVBdXRvY29tcGxldGVDb25maWcgPSB7XG4gICAgZmV0Y2hTaXplOiAxMCxcbiAgICBtYXhIZWlnaHQ6IFwiMTYwcHhcIixcbiAgfTtcblxuICAvKipcbiAgICogY29uc3RydWN0b3IgZm9yIEluZmluaXRlQXV0b2NvbXBsZXRlIGNsYXNzXG4gICAqIEVuYWJsaW5nIHBsdWdnYWJsZSBzeXN0ZW0gbGlua2VkIHdpdGggSW50ZXJmYWNlcyBvbmx5XG4gICAqIEBwYXJhbSBlbGVtZW50IC0gSFRNTEVsZW1lbnQgdG8gYXBwZW5kIHRoZSBpbmZpbml0ZS1hdXRvY29tcGxldGUgaW4gaXRcbiAgICogQHBhcmFtIGNvbmZpZyAtIEluZmluaXRlQXV0b2NvbXBsZXRlIGNvbmZpZyBvcHRpb25zXG4gICAqIEBwYXJhbSBvcHRpb25Db21wb25lbnQgLSBPcHRpb24gY29tcG9uZW50IGltcGxlbWVudGF0aW9uIHRvIGJlIGluamVjdGVkIChvciBkZWZhdWx0KVxuICAgKiBAcGFyYW0gaW5wdXRDb21wb25lbnQgLSBJbnB1dCBjb21wb25lbnQgaW1wbGVtZW50YXRpb24gdG8gYmUgaW5qZWN0ZWQgKG9yIGRlZmF1bHQpXG4gICAqIEBwYXJhbSBvcHRpb25zQ29tcG9uZW50IC0gT3B0aW9ucyBjb21wb25lbnQgaW1wbGVtZW50YXRpb24gdG8gYmUgaW5qZWN0ZWQgKG9yIGRlZmF1bHQpXG4gICAqL1xuICBjb25zdHJ1Y3RvcihlbGVtZW50OiBIVE1MRWxlbWVudCwgY29uZmlnPzogSW5maW5pdGVBdXRvY29tcGxldGVDb25maWcpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIHRoaXMuY29uZmlnID0geyAuLi50aGlzLmRlZmF1bHRDb25maWcsIC4uLmNvbmZpZyB9O1xuICAgIHRoaXMuaW5wdXRDb21wb25lbnQgPSB0aGlzLmdldEN1c3RvbWl6ZWRJbnB1dCgpO1xuICAgIHRoaXMub3B0aW9uc0NvbXBvbmVudCA9IHRoaXMuZ2V0Q3VzdG9taXplZE9wdGlvbnMoKTtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIGNvbmZpZyBvYmplY3Qgd2l0aCBleHRlbmRpbmdcbiAgICogQHBhcmFtIGNvbmZpZyAtIGluZmluaXRlLWF1dG9jb21wbGV0ZSBjb25maWd1cmF0aW9uIG9iamVjdFxuICAgKi9cbiAgcHVibGljIHNldENvbmZpZyA9IChjb25maWc6IEluZmluaXRlQXV0b2NvbXBsZXRlQ29uZmlnKSA9PiB7XG4gICAgdGhpcy5kZXN0cm95KCk7XG4gICAgdGhpcy5jb25maWcgPSB7IC4uLnRoaXMuY29uZmlnLCAuLi5jb25maWcgfTtcbiAgICB0aGlzLmlucHV0Q29tcG9uZW50ID0gdGhpcy5nZXRDdXN0b21pemVkSW5wdXQoKTtcbiAgICB0aGlzLm9wdGlvbnNDb21wb25lbnQgPSB0aGlzLmdldEN1c3RvbWl6ZWRPcHRpb25zKCk7XG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveSB0aGUgaW5maW5pdGUtYXV0b2NvbXBsZXRlIGFuZCB1bmJpbmQgYWxsIGV2ZW50c1xuICAgKi9cbiAgcHVibGljIGRlc3Ryb3kgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuaXNEZXN0cm95ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuaXNPcHRpb25zSGlkZGVuKCkpIHtcbiAgICAgIHRoaXMuY2xlYXJPcHRpb25zKCk7XG4gICAgfVxuXG4gICAgbGV0IG9wdGlvbnNMaXN0ID0gdGhpcy5nZXRPcHRpb25zQmFzZUVsZW1lbnQoKTtcbiAgICBvcHRpb25zTGlzdC5yZW1vdmVFdmVudExpc3RlbmVyKGBzY3JvbGxgLCB0aGlzLnNjcm9sbFJlYWNoZWRCb3R0b21IYW5kbGVyKTtcbiAgICBsZXQgaW5wdXRFbGUgPSB0aGlzLmdldElucHV0RWxlbWVudCgpO1xuICAgIGlucHV0RWxlLnJlbW92ZUV2ZW50TGlzdGVuZXIoYGlucHV0YCwgdGhpcy5vbklucHV0Q2hhbmdlKTtcbiAgICBpbnB1dEVsZS5yZW1vdmVFdmVudExpc3RlbmVyKGBjbGlja2AsIHRoaXMub25JbnB1dENoYW5nZSk7XG4gICAgaW5wdXRFbGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihga2V5ZG93bmAsIHRoaXMub25LZXlQcmVzc2VkKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGBjbGlja2AsIHRoaXMub25Eb2N1bWVudENsaWNrSGFuZGxlcik7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5vbkVzY2FwZUV2ZW50SGFuZGxlcik7XG4gICAgdGhpcy5lbGVtZW50LmlubmVySFRNTCA9IGBgO1xuICAgIHRoaXMuaXNEZXN0cm95ZWQgPSB0cnVlO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRDdXN0b21pemVkSW5wdXQgPSAoKSA9PlxuICAgIHRoaXMuY29uZmlnLmN1c3RvbWl6ZWRJbnB1dCA/IG5ldyB0aGlzLmNvbmZpZy5jdXN0b21pemVkSW5wdXQoKSA6IG5ldyBkZWZhdWx0SW5wdXRJbXBsKClcblxuICBwcml2YXRlIGdldEN1c3RvbWl6ZWRPcHRpb25zID0gKCkgPT5cbiAgICB0aGlzLmNvbmZpZy5jdXN0b21pemVkT3B0aW9ucyA/IG5ldyB0aGlzLmNvbmZpZy5jdXN0b21pemVkT3B0aW9ucygpIDogbmV3IGRlZmF1bHRPcHRpb25zSW1wbCgpXG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgaG9vayB0aGF0IGdldCBleGVjdXRlZCBpbW1lZGlhdGx5IGFmdGVyIHVzaW5nIHRoZSBpbmZpbml0ZS1hdXRvY29tcGxldGUgY29tcG9uZW50XG4gICAqL1xuICBwcml2YXRlIGluaXQgPSAoKSA9PiB7XG4gICAgdGhpcy5hcHBseVN0eWxlc1J1bGVzKCk7XG4gICAgdGhpcy5hcHBlbmRJbmZpbml0ZUF1dG9jb21wbGV0ZVdyYXBwZXJDbGFzcygpO1xuICAgIHRoaXMubGlua0lucHV0Q29tcG9uZW50KCk7XG4gICAgdGhpcy5saW5rT3B0aW9uc0NvbXBvbmVudCgpO1xuICAgIHRoaXMuYmluZFNjcm9sbFJlYWNoQm90dG9tRXZlbnQoKTtcbiAgICB0aGlzLmJpbmRFc2NhcGVFdmVudCgpO1xuICAgIHRoaXMuYmluZE91dFNpZGVDbGlja0V2ZW50KCk7XG4gICAgdGhpcy5pc0Rlc3Ryb3llZCA9IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqICgjMSkgQmluZHMgYSBjbGljayBoYW5kbGVyIHRvIGRldGVjdCB3aGVyZSB0aGUgdXNlciBjbGlja2VkXG4gICAqIElmIGNsaWNrIGlzIG91dCBzaWRlIHRoZSBtYWluIHdyYXBwZXIgYXJlYSB0aGVuIGNsb3NlIG9wdGlvbnNcbiAgICovXG4gIHByaXZhdGUgYmluZE91dFNpZGVDbGlja0V2ZW50ID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgdGhpcy5vbkRvY3VtZW50Q2xpY2tIYW5kbGVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBvbiBkb2N1bWVudCBjbGljayBoYW5kbGVyXG4gICAqIEBwYXJhbSBldmVudCAtIEV2ZW50XG4gICAqL1xuICBwcml2YXRlIG9uRG9jdW1lbnRDbGlja0hhbmRsZXIgPSAoZXZlbnQ6IEV2ZW50KSA9PiB7XG4gICAgaWYgKCF0aGlzLmlzT3B0aW9uc0hpZGRlbigpKSB7XG4gICAgICBsZXQgY2xpY2tlZE91dFNpZGUgPSB0aGlzLmNoZWNrSWZDbGlja2VkT3V0U2lkZVRoZUF1dG9jb21wbGV0ZUNvbXBvbmVudHMoZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50KTtcbiAgICAgIGlmIChjbGlja2VkT3V0U2lkZSkge1xuICAgICAgICAgIHRoaXMuY2xlYXJPcHRpb25zKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGNsaWNrIGlzIG91dHNpZGUgdGhlIHBsdWdpblxuICAgKiBAcGFyYW0gZWxlbWVudCAtIEhUTUxFbGVtZW50XG4gICAqL1xuICBwcml2YXRlIGNoZWNrSWZDbGlja2VkT3V0U2lkZVRoZUF1dG9jb21wbGV0ZUNvbXBvbmVudHMgPSAoZWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsKSA9PiB7XG4gICAgaWYgKGVsZW1lbnQgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIGlmIChlbGVtZW50ID09PSB0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoZWNrSWZDbGlja2VkT3V0U2lkZVRoZUF1dG9jb21wbGV0ZUNvbXBvbmVudHMoZWxlbWVudC5wYXJlbnRFbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogKCMxMSkgQmluZHMgZXNjYXBlIGV2ZW50IGhhbmRsZXIgdG8gY2xlYXIgdGhlIG9wdGlvbnMgd2hlbiBjbGlja2luZyBFc2NcbiAgICovXG4gIHByaXZhdGUgYmluZEVzY2FwZUV2ZW50ID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMub25Fc2NhcGVFdmVudEhhbmRsZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIEVzY2FwZSBldmVudCBoYW5kbGVyXG4gICAqIEBwYXJhbSBlIC0gS2V5Ym9hcmRFdmVudFxuICAgKi9cbiAgcHJpdmF0ZSBvbkVzY2FwZUV2ZW50SGFuZGxlciA9IGUgPT4ge1xuICAgIGlmIChlLmtleUNvZGUgPT09IDI3ICYmICF0aGlzLmlzT3B0aW9uc0hpZGRlbigpKSB7IC8vIEVzYyBrZXkgcHJlc3NlZFxuICAgICAgICB0aGlzLmNsZWFyT3B0aW9ucygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBcHBlbmQgaW5maW5pdGUgYXV0b2NvbXBsZXRlIG1haW4gd3JhcHBlciBjbGFzc05hbWVcbiAgICovXG4gIHByaXZhdGUgYXBwZW5kSW5maW5pdGVBdXRvY29tcGxldGVXcmFwcGVyQ2xhc3MgPSAoKSA9PiB7XG4gICAgaWYgKCF0aGlzLmVsZW1lbnQuY2xhc3NOYW1lIHx8IHRoaXMuZWxlbWVudC5jbGFzc05hbWUuaW5kZXhPZihgaW5maW5pdGUtYXV0b2NvbXBsZXRlLXdyYXBwZXJgKSA9PT0gLTEpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc05hbWUgPSB0aGlzLmVsZW1lbnRcbiAgICAgICAgLmNsYXNzTmFtZVxuICAgICAgICAuc3BsaXQoYCBgKVxuICAgICAgICAuY29uY2F0KFtgaW5maW5pdGUtYXV0b2NvbXBsZXRlLXdyYXBwZXJgXSlcbiAgICAgICAgLmZpbHRlcihjID0+IGMpXG4gICAgICAgIC5qb2luKGAgYCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0IGN1cnJlbnQgcGFnZVxuICAgKi9cbiAgcHJpdmF0ZSByZXNldEN1cnJlbnRQYWdlID0gKCkgPT4ge1xuICAgIHRoaXMucGFnZSA9IDE7XG4gIH1cblxuICAvKipcbiAgICogTGluayBpbnB1dCBjb21wb25lbnQgaW50byB0aGUgaW5wdXQgd3JhcHBlclxuICAgKi9cbiAgcHJpdmF0ZSBsaW5rSW5wdXRDb21wb25lbnQgPSAoKSA9PiB7XG4gICAgbGV0IGlucHV0V3JhcHBlckVsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGlucHV0V3JhcHBlckVsZS5jbGFzc05hbWUgPSBgaW5maW5pdGUtYXV0b2NvbXBsZXRlLWlucHV0LXdyYXBwZXJgO1xuICAgIGlucHV0V3JhcHBlckVsZS5pbm5lckhUTUwgPSB0aGlzLmlucHV0Q29tcG9uZW50LnJlbmRlcigpO1xuICAgIGxldCBpbnB1dEVsZSA9IGlucHV0V3JhcHBlckVsZS5xdWVyeVNlbGVjdG9yKGBpbnB1dGApIGFzIEhUTUxFbGVtZW50O1xuICAgIGlmICghaW5wdXRFbGUpIHtcbiAgICAgIHRocm93IE1pc3NpbmdJbnB1dEVsZW1lbnRJbklucHV0Q29tcG9uZW50RXhjZXB0aW9uTXNnO1xuICAgIH1cbiAgICBpbnB1dEVsZVxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoYGlucHV0YCwgdGhpcy5vbklucHV0Q2hhbmdlKTtcbiAgICAvLyAoIzIpIFN0YXJ0IHRvIHNob3cgb3B0aW9ucyB3aGVuIGZvY3VzIG9uIHRoZSBpbnB1dFxuICAgIGlucHV0RWxlXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcihgY2xpY2tgLCB0aGlzLm9uSW5wdXRDaGFuZ2UpO1xuICAgIGlucHV0RWxlXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcihga2V5ZG93bmAsIHRoaXMub25LZXlQcmVzc2VkKTtcbiAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoaW5wdXRXcmFwcGVyRWxlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPbiBrZXlkb3duIHByZXNzaW5nIGluIGlucHV0IGVsZW1lbnRcbiAgICogQHBhcmFtIGtleWRvd25FdmVudCAtIHByZXNzaW5nIGtleSBldmVudFxuICAgKi9cbiAgcHJpdmF0ZSBvbktleVByZXNzZWQgPSAoa2V5ZG93bkV2ZW50OiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgaWYgKCF0aGlzLmlzT3B0aW9uc0hpZGRlbigpKSB7XG4gICAgICBsZXQgY3VycmVudEhvdmVyZWQgPSB0aGlzLmdldE5hdmlnYXRpb25JbmRleCgpO1xuICAgICAgaWYgKGN1cnJlbnRIb3ZlcmVkID09PSAtMSkge1xuICAgICAgICBpZiAoa2V5ZG93bkV2ZW50LmtleUNvZGUgPT09IEtFWV9QUkVTU19TVEFURVMuRE9XTikge1xuICAgICAgICAgIHRoaXMudG9nZ2xlSG92ZXJlZFN0YXRlKDAsIGtleWRvd25FdmVudCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN3aXRjaCAoa2V5ZG93bkV2ZW50LmtleUNvZGUpIHtcbiAgICAgICAgICBjYXNlIEtFWV9QUkVTU19TVEFURVMuRE9XTjpcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlSG92ZXJlZFN0YXRlKGN1cnJlbnRIb3ZlcmVkICsgMSwga2V5ZG93bkV2ZW50KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgS0VZX1BSRVNTX1NUQVRFUy5VUDpcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlSG92ZXJlZFN0YXRlKGN1cnJlbnRIb3ZlcmVkIC0gMSwga2V5ZG93bkV2ZW50KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgS0VZX1BSRVNTX1NUQVRFUy5FTlRFUjpcbiAgICAgICAgICAgIHRoaXMuY2xpY2tPbkhvdmVyZWQoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDbGljayBvbiBob3ZlcmVkIGVsZW1lbnRcbiAgICovXG4gIHByaXZhdGUgY2xpY2tPbkhvdmVyZWQgPSAoKSA9PiB7XG4gICAgbGV0IG9wdGlvbnNMaXN0ID0gdGhpcy5nZXRPcHRpb25zQmFzZUVsZW1lbnQoKTtcbiAgICBsZXQgaG92ZXJlZEVsZW1lbnQgPSBvcHRpb25zTGlzdC5xdWVyeVNlbGVjdG9yKGAuJHtIT1ZFUkVEfWApIGFzIEhUTUxFbGVtZW50O1xuICAgIGlmIChob3ZlcmVkRWxlbWVudCkgeyBob3ZlcmVkRWxlbWVudC5jbGljaygpOyB9XG4gIH1cblxuICAvKipcbiAgICogU2ltdWxhdGUgU2Nyb2xsZWQgdG8gYm90dG9tXG4gICAqL1xuICBwcml2YXRlIHNpbXVsYXRlU2Nyb2xsVG9Cb3R0b20gPSAoKSA9PiB7XG4gICAgbGV0IG9wdGlvbnNMaXN0ID0gdGhpcy5nZXRPcHRpb25zQmFzZUVsZW1lbnQoKTtcbiAgICBsZXQgc2Nyb2xsRXZlbnQgPSBuZXcgRXZlbnQoXCJzY3JvbGxcIiwgeyBidWJibGVzOiB0cnVlIH0pO1xuICAgIG9wdGlvbnNMaXN0LnNjcm9sbFRvcCA9IDEwMDAwOyAvLyBTaW11bGF0ZSByZWFjaGVkIGJvdHRvbVxuICAgIG9wdGlvbnNMaXN0LmRpc3BhdGNoRXZlbnQoc2Nyb2xsRXZlbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZSBob3ZlcmVkIHN0YXRlIG9uIHNwZWNpZmljIGluZGV4IGluIG9wdGlvbnMgbGlzdFxuICAgKiBAcGFyYW0gaW5kZXggLSBUaGUgaW5kZXggdG8gYmUgYXBwbGllZCBhcyBob3ZlcmVkXG4gICAqL1xuICBwcml2YXRlIHRvZ2dsZUhvdmVyZWRTdGF0ZSA9IChpbmRleDogbnVtYmVyLCBrZXlkb3duRXZlbnQ6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICBsZXQgb3B0aW9uc0xpc3QgPSB0aGlzLmdldE9wdGlvbnNCYXNlRWxlbWVudCgpO1xuICAgIGlmIChpbmRleCA9PT0gb3B0aW9uc0xpc3QuY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICB0aGlzLnNpbXVsYXRlU2Nyb2xsVG9Cb3R0b20oKTtcbiAgICB9XG5cbiAgICBpZiAoaW5kZXggPj0gMCAmJiBpbmRleCA8IG9wdGlvbnNMaXN0LmNoaWxkcmVuLmxlbmd0aCkge1xuXG4gICAgICBsZXQgaG92ZXJlZEVsZW1lbnQgPSBvcHRpb25zTGlzdC5xdWVyeVNlbGVjdG9yKGAuJHtIT1ZFUkVEfWApO1xuICAgICAgaWYgKGhvdmVyZWRFbGVtZW50KSB7XG4gICAgICAgIGhvdmVyZWRFbGVtZW50LmNsYXNzTmFtZSA9IGhvdmVyZWRFbGVtZW50XG4gICAgICAgICAgLmNsYXNzTmFtZVxuICAgICAgICAgIC5zcGxpdChcIiBcIilcbiAgICAgICAgICAuZmlsdGVyKGUgPT4gZSAhPT0gSE9WRVJFRClcbiAgICAgICAgICAuam9pbihcIiBcIilcbiAgICAgICAgICAudHJpbSgpO1xuICAgICAgfVxuXG4gICAgICBsZXQgdGFyZ2V0RWxlbWVudCA9IG9wdGlvbnNMaXN0LmNoaWxkcmVuW2luZGV4XSBhcyBIVE1MRWxlbWVudDtcbiAgICAgIHRhcmdldEVsZW1lbnQuY2xhc3NOYW1lICs9IGAgJHtIT1ZFUkVEfWA7XG5cbiAgICAgIC8vIElmIGhvdmVyZWQgaXMgbm90IGluIHRoZSBzY3JvbGxhYmxlIHZpZXdcbiAgICAgIGlmICh0YXJnZXRFbGVtZW50Lm9mZnNldFRvcCA8IG9wdGlvbnNMaXN0LnNjcm9sbFRvcCB8fCAoXG4gICAgICAgICAgdGFyZ2V0RWxlbWVudC5vZmZzZXRUb3AgLSBvcHRpb25zTGlzdC5zY3JvbGxUb3AgPiBvcHRpb25zTGlzdC5jbGllbnRIZWlnaHQpKSB7XG4gICAgICAgIHN3aXRjaCAoa2V5ZG93bkV2ZW50LmtleUNvZGUpIHtcbiAgICAgICAgICBjYXNlIEtFWV9QUkVTU19TVEFURVMuVVA6XG4gICAgICAgICAgICB0YXJnZXRFbGVtZW50LnNjcm9sbEludG9WaWV3KHRydWUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBLRVlfUFJFU1NfU1RBVEVTLkRPV046XG4gICAgICAgICAgICB0YXJnZXRFbGVtZW50LnNjcm9sbEludG9WaWV3KGZhbHNlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdldCBuYXZpZ2F0aW9uIGluZGV4IGlmIG9wdGlvbnMgaXMgb3BlblxuICAgKiBAcmV0dXJucyBPcHRpb25zIGN1cnJlbnQgaW5kZXhcbiAgICovXG4gIHByaXZhdGUgZ2V0TmF2aWdhdGlvbkluZGV4ID0gKCkgPT4ge1xuICAgIGxldCBvcHRpb25zTGlzdCA9IHRoaXMuZ2V0T3B0aW9uc0Jhc2VFbGVtZW50KCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRpb25zTGlzdC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IG9wdGlvbiA9IG9wdGlvbnNMaXN0LmNoaWxkcmVuW2ldO1xuICAgICAgaWYgKG9wdGlvbi5jbGFzc05hbWUuaW5kZXhPZihIT1ZFUkVEKSAhPT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIGk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIC0xO1xuICB9XG5cbiAgLyoqXG4gICAqIElucHV0IGNvbXBvbmVudCBgY2hhbmdlYCBldmVudCBoYW5kbGVyXG4gICAqIEBwYXJhbSBpbnB1dENoYW5nZUV2ZW50IC0gSW5wdXQgY2hhbmdlIGV2ZW50IGhhbmRsZXJcbiAgICovXG4gIHByaXZhdGUgb25JbnB1dENoYW5nZSA9IGFzeW5jIChpbnB1dENoYW5nZUV2ZW50OiBFdmVudCkgPT4ge1xuICAgIGxldCB0YXJnZXQgPSBpbnB1dENoYW5nZUV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAvLyBJZiB1c2VyIHBhc3Mgc3BlY2lhbCBiZWhhdmlvciBmb3IgdHlwaW5nIHZpYSBjb25maWd1cmF0aW9uXG4gICAgaWYgKHRoaXMuaW5wdXRDb21wb25lbnQub25JbnB1dENoYW5nZSkge1xuICAgICAgdGhpcy5pbnB1dENvbXBvbmVudC5vbklucHV0Q2hhbmdlKHRhcmdldCwgdGFyZ2V0LnZhbHVlKTtcbiAgICB9XG4gICAgLy8gSWYgd2UgdHlwZSBhbHdheXMgZmV0Y2ggZGF0YSBhbmQgYnVpbGQgb3B0aW9uc1xuICAgIC8vIElmIHdlIGNsaWNrIG9uIGlucHV0IGFuZCB0aGUgb3B0aW9ucyBpcyBoaWRkZW4gYnVpbGQgdGhlIG9wdGlvbnNcbiAgICAvLyBJZiB3ZSBjbGljayBvbiBpbnB1dCBhbmQgdGhlIG9wdGlvbnMgaXMgYWxyZWFkeSBvcGVuZWQgZG9uJ3QgZG8gYW55dGhpbmdcbiAgICBpZiAoaW5wdXRDaGFuZ2VFdmVudC50eXBlID09PSBgaW5wdXRgIHx8XG4gICAgICAgICAgICAoaW5wdXRDaGFuZ2VFdmVudC50eXBlID09PSBgY2xpY2tgICYmIHRoaXMuaXNPcHRpb25zSGlkZGVuKCkpKSB7XG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCB0aGlzLmJ1aWxkT3B0aW9ucyh0YXJnZXQudmFsdWUsIHRydWUpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5vbkVycm9yKSB7XG4gICAgICAgICAgdGhpcy5jb25maWcub25FcnJvcihlcnJvcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTGluayBvcHRpb25zIGNvbXBvbmVudCBpbnRvIHRoZSBpbmZpbml0ZSBhdXRvY29tcGxldGUgY29tcG9uZW50XG4gICAqL1xuICBwcml2YXRlIGxpbmtPcHRpb25zQ29tcG9uZW50ID0gKCkgPT4ge1xuICAgIGxldCBvcHRpb25zV3JhcHBlckVsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIG9wdGlvbnNXcmFwcGVyRWxlLmNsYXNzTmFtZSA9IGBpbmZpbml0ZS1hdXRvY29tcGxldGUtb3B0aW9ucy13cmFwcGVyYDtcbiAgICBvcHRpb25zV3JhcHBlckVsZS5pbm5lckhUTUwgPSB0aGlzLm9wdGlvbnNDb21wb25lbnQucmVuZGVyKCk7XG4gICAgbGV0IG9wdGlvbnNFbGUgPSBvcHRpb25zV3JhcHBlckVsZS5xdWVyeVNlbGVjdG9yKHRoaXMub3B0aW9uc0NvbXBvbmVudC5saXN0RWxlbWVudFNlbGVjdG9yKSBhcyBIVE1MRWxlbWVudDtcbiAgICB0aGlzLnNldEVsZW1lbnRWaXNpYmxpdHkob3B0aW9uc1dyYXBwZXJFbGUsIGZhbHNlKTtcbiAgICBvcHRpb25zRWxlLnN0eWxlLm92ZXJmbG93ID0gYHNjcm9sbGA7XG4gICAgb3B0aW9uc0VsZS5zdHlsZS5vdmVyZmxvd1ggPSBgaGlkZGVuYDtcbiAgICBvcHRpb25zRWxlLnN0eWxlLmJvcmRlciA9IGAxcHggc29saWQgI2JjYmNiY2A7XG4gICAgb3B0aW9uc0VsZS5zdHlsZS5wYWRkaW5nQm90dG9tID0gYDVweGA7XG4gICAgb3B0aW9uc0VsZS5zdHlsZS5tYXhIZWlnaHQgPSB0aGlzLmNvbmZpZy5tYXhIZWlnaHQgfHwgbnVsbDtcbiAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQob3B0aW9uc1dyYXBwZXJFbGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIG9wdGlvbnMgd3JhcHBlciBoaWRkZW4gb3Igbm90XG4gICAqIEByZXR1cm5zIHRydWUgaWYgaGlkZGVuLCBvciBlbHNlIGZhbHNlXG4gICAqL1xuICBwcml2YXRlIGlzT3B0aW9uc0hpZGRlbiA9ICgpOiBib29sZWFuID0+IHtcbiAgICBsZXQgb3B0aW9uc1dyYXBwZXIgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihgLmluZmluaXRlLWF1dG9jb21wbGV0ZS1vcHRpb25zLXdyYXBwZXJgKSBhcyBIVE1MRWxlbWVudDtcblxuICAgIHJldHVybiBvcHRpb25zV3JhcHBlci5jbGFzc05hbWVcbiAgICAgIC5pbmRleE9mKGBpbmZpbml0ZS1hdXRvY29tcGxldGUtaGlkZGVuLWVsZW1lbnRgKSA+IC0xO1xuICB9XG5cbiAgLyoqXG4gICAqIEFwcGx5IHRoZSBzdHlsZSBydWxlcyBmb3IgdGhlIGluZmluaXRlIGF1dG9jb21wbGV0ZSBwbHVnaW4gYW5kIGl0J3MgY29tcG9uZW50c1xuICAgKi9cbiAgcHJpdmF0ZSBhcHBseVN0eWxlc1J1bGVzID0gKCkgPT4ge1xuXG4gICAgLy8gTWFpbiB3cmFwcGVyIHN0eWxlIHJ1bGVzXG4gICAgbGV0IGlzTWFpbldyYXBwZXJTdHlsZUFwcGxpZWQgPSBkb2N1bWVudC5oZWFkLnF1ZXJ5U2VsZWN0b3IoXCIjaW5maW5pdGUtYXV0b2NvbXBsZXRlLXdyYXBwZXItc3R5bGVcIik7XG4gICAgaWYgKCFpc01haW5XcmFwcGVyU3R5bGVBcHBsaWVkKSB7XG4gICAgICBsZXQgbWFpbldyYXBwZXJTdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgICAgIG1haW5XcmFwcGVyU3R5bGUuaWQgPSBcImluZmluaXRlLWF1dG9jb21wbGV0ZS13cmFwcGVyLXN0eWxlXCI7XG4gICAgICBtYWluV3JhcHBlclN0eWxlLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAuaW5maW5pdGUtYXV0b2NvbXBsZXRlLXdyYXBwZXIge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgfVxuICAgICAgYDtcbiAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobWFpbldyYXBwZXJTdHlsZSk7XG4gICAgfVxuXG4gICAgLy8gSGlkZGVuIGVsZW1lbnQgc3R5bGUgcnVsZXNcbiAgICBsZXQgaXNIaWRkZW5TdHlsZUFwcGxpZWQgPSBkb2N1bWVudC5oZWFkLnF1ZXJ5U2VsZWN0b3IoXCIjaW5maW5pdGUtYXV0b2NvbXBsZXRlLWhpZGRlbi1zdHlsZVwiKTtcbiAgICBpZiAoIWlzSGlkZGVuU3R5bGVBcHBsaWVkKSB7XG4gICAgICBsZXQgaGlkZGVuU3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gICAgICBoaWRkZW5TdHlsZS5pZCA9IFwiaW5maW5pdGUtYXV0b2NvbXBsZXRlLWhpZGRlbi1zdHlsZVwiO1xuICAgICAgaGlkZGVuU3R5bGUuaW5uZXJIVE1MID0gYFxuICAgICAgICAgIC5pbmZpbml0ZS1hdXRvY29tcGxldGUtaGlkZGVuLWVsZW1lbnQge1xuICAgICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICAgIH1cbiAgICAgIGA7XG4gICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGhpZGRlblN0eWxlKTtcbiAgICB9XG5cbiAgICAvLyBEZWZhdWx0cyBzdHlsZSBydWxlc1xuICAgIGxldCBpc0RlZmF1bHRzU3R5bGVBcHBsaWVkID0gZG9jdW1lbnQuaGVhZC5xdWVyeVNlbGVjdG9yKFwiI2luZmluaXRlLWF1dG9jb21wbGV0ZS1kZWZhdWx0cy1zdHlsZVwiKTtcbiAgICBpZiAoIWlzRGVmYXVsdHNTdHlsZUFwcGxpZWQpIHtcbiAgICAgIGxldCBkZWZhdWx0c1N0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICAgICAgZGVmYXVsdHNTdHlsZS5pZCA9IFwiaW5maW5pdGUtYXV0b2NvbXBsZXRlLWRlZmF1bHRzLXN0eWxlXCI7XG4gICAgICBkZWZhdWx0c1N0eWxlLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAuaW5maW5pdGUtYXV0b2NvbXBsZXRlLWlucHV0LXdyYXBwZXIgLmluZmluaXRlLWF1dG9jb21wbGV0ZS1kZWZhdWx0LWlucHV0IHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAyOHB4O1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMTVweCAtNHB4IHRyYW5zcGFyZW50O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaW5maW5pdGUtYXV0b2NvbXBsZXRlLW9wdGlvbnMtd3JhcHBlciAuaW5maW5pdGUtYXV0b2NvbXBsZXRlLWRlZmF1bHQtb3B0aW9ucyB7XG4gICAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaW5maW5pdGUtYXV0b2NvbXBsZXRlLW9wdGlvbnMtd3JhcHBlciAuaW5maW5pdGUtYXV0b2NvbXBsZXRlLWRlZmF1bHQtb3B0aW9ucyBsaSB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4IDEwcHggMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmluZmluaXRlLWF1dG9jb21wbGV0ZS1vcHRpb25zLXdyYXBwZXIgLmluZmluaXRlLWF1dG9jb21wbGV0ZS1kZWZhdWx0LW9wdGlvbnMgbGkuaG92ZXJlZCB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNkNWViZmY7XG4gICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cbiAgICAgIGA7XG4gICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGRlZmF1bHRzU3R5bGUpO1xuICAgIH1cblxuICAgIC8vIElucHV0IHN0eWxlIHJ1bGVzXG4gICAgbGV0IGlzSW5wdXRTdHlsZUFwcGxpZWQgPSBkb2N1bWVudC5oZWFkLnF1ZXJ5U2VsZWN0b3IoXCIjaW5maW5pdGUtYXV0b2NvbXBsZXRlLWlucHV0LXN0eWxlXCIpO1xuICAgIGlmICghaXNJbnB1dFN0eWxlQXBwbGllZCkge1xuICAgICAgbGV0IGlucHV0U3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gICAgICBpbnB1dFN0eWxlLmlkID0gXCJpbmZpbml0ZS1hdXRvY29tcGxldGUtaW5wdXQtc3R5bGVcIjtcbiAgICAgIGlucHV0U3R5bGUuaW5uZXJIVE1MID0gYFxuICAgICAgICAgIC5pbmZpbml0ZS1hdXRvY29tcGxldGUtaW5wdXQtd3JhcHBlciBpbnB1dCB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgIGA7XG4gICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGlucHV0U3R5bGUpO1xuICAgIH1cblxuICAgIC8vIE9wdGlvbnMgc3R5bGUgcnVsZXNcbiAgICBsZXQgaXNPcHRpb25zU3R5bGVBcHBsaWVkID0gZG9jdW1lbnQuaGVhZC5xdWVyeVNlbGVjdG9yKFwiI2luZmluaXRlLWF1dG9jb21wbGV0ZS1vcHRpb25zLXN0eWxlXCIpO1xuICAgIGlmICghaXNPcHRpb25zU3R5bGVBcHBsaWVkKSB7XG4gICAgICBsZXQgb3B0aW9uc1N0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICAgICAgb3B0aW9uc1N0eWxlLmlkID0gYGluZmluaXRlLWF1dG9jb21wbGV0ZS1vcHRpb25zLXN0eWxlYDtcbiAgICAgIG9wdGlvbnNTdHlsZS5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgLmluZmluaXRlLWF1dG9jb21wbGV0ZS1vcHRpb25zLXdyYXBwZXIge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICB9XG4gICAgICBgO1xuICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChvcHRpb25zU3R5bGUpO1xuICAgIH1cblxuICAgIC8vIFNjcm9sbGJhciBzdHlsZSBydWxlc1xuICAgIGxldCBpc1Njcm9sbGJhclN0eWxlQXBwbGllZCA9IGRvY3VtZW50LmhlYWQucXVlcnlTZWxlY3RvcihcIiNpbmZpbml0ZS1hdXRvY29tcGxldGUtc2Nyb2xsYmFyLXN0eWxlXCIpO1xuICAgIGlmICghaXNTY3JvbGxiYXJTdHlsZUFwcGxpZWQpIHtcbiAgICAgIGxldCBzcGVjaWFsU2Nyb2xsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICAgICAgc3BlY2lhbFNjcm9sbC5pZCA9IFwiaW5maW5pdGUtYXV0b2NvbXBsZXRlLXNjcm9sbGJhci1zdHlsZVwiO1xuICAgICAgc3BlY2lhbFNjcm9sbC5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgLmluZmluaXRlLWF1dG9jb21wbGV0ZS13cmFwcGVyIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IDRweDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5pbmZpbml0ZS1hdXRvY29tcGxldGUtd3JhcHBlciA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsMCwwLDAuMyk7XG4gICAgICAgICAgICAgICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmluZmluaXRlLWF1dG9jb21wbGV0ZS13cmFwcGVyIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC44KTtcbiAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsMCwwLDAuNSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmluZmluaXRlLWF1dG9jb21wbGV0ZS13cmFwcGVyIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6d2luZG93LWluYWN0aXZlIHtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDAsMCwwLjQpO1xuICAgICAgICAgICAgICB9XG4gICAgICBgO1xuICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzcGVjaWFsU2Nyb2xsKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQmluZHMgYSBzY3JvbGwgZXZlbnQgaGFuZGxlciBvbiB0aGUgb3B0aW9uc1xuICAgKi9cbiAgcHJpdmF0ZSBiaW5kU2Nyb2xsUmVhY2hCb3R0b21FdmVudCA9ICgpID0+IHtcbiAgICBsZXQgb3B0aW9uc0VsZSA9IHRoaXMuZ2V0T3B0aW9uc0Jhc2VFbGVtZW50KCk7XG4gICAgb3B0aW9uc0VsZS5hZGRFdmVudExpc3RlbmVyKGBzY3JvbGxgLCB0aGlzLnNjcm9sbFJlYWNoZWRCb3R0b21IYW5kbGVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTY3JvbGwgcmVhY2hlZCBib3R0b20gaGFuZGxlclxuICAgKiBAcGFyYW0gZSAtIFNjcm9sbCBldmVudCBvYmplY3RcbiAgICovXG4gIHByaXZhdGUgc2Nyb2xsUmVhY2hlZEJvdHRvbUhhbmRsZXIgPSBhc3luYyAoZTogRXZlbnQpID0+IHtcbiAgICBsZXQgb3B0aW9uc0VsZSA9IGUuY3VycmVudFRhcmdldCBhcyBIVE1MRWxlbWVudDtcbiAgICBpZiAoIXRoaXMuZmV0Y2hpbmdEYXRhICYmICF0aGlzLnByZXZlbnRNb3JlUmVxdWVzdHMgJiYgIXRoaXMuaXNPcHRpb25zSGlkZGVuKCkpIHtcbiAgICAgIGlmIChvcHRpb25zRWxlLnNjcm9sbFRvcCArIG9wdGlvbnNFbGUuY2xpZW50SGVpZ2h0ID49IG9wdGlvbnNFbGUuc2Nyb2xsSGVpZ2h0KSB7XG4gICAgICAgIHRoaXMucGFnZSsrO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGF3YWl0IHRoaXMuYnVpbGRPcHRpb25zKFxuICAgICAgICAgICAgdGhpcy5nZXRJbnB1dEVsZW1lbnQoKS52YWx1ZSxcbiAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgaWYgKHRoaXMuY29uZmlnLm9uRXJyb3IpIHtcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLm9uRXJyb3IoZXJyb3IpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhcnMgdGhlIG9wdGlvbnMgbGlzdCB0YWcgd2l0aCByZW1vdmluZyB0aGUgY2xpY2sgZXZlbnQgaGFuZGxlcnNcbiAgICogdW5iaW5kIHRoZSBgc2Nyb2xsYCBldmVudCBmcm9tIHRoZSBvcHRpb25zXG4gICAqIChHYXJiYWdlIGNvbGxlY3RpbmcpXG4gICAqL1xuICBwcml2YXRlIGNsZWFyT3B0aW9ucyA9ICgpID0+IHtcbiAgICB0aGlzLmRldGFjaE9wdGlvbkV2ZW50SGFuZGxlcnMoXG4gICAgICB0aGlzLmdldE9wdGlvbnNCYXNlRWxlbWVudCgpXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKGBbaW5maW5pdGUtY2xpY2thYmxlXWApLFxuICAgICk7XG4gICAgdGhpcy5yZXNldEN1cnJlbnRQYWdlKCk7XG4gICAgdGhpcy5wcmV2ZW50TW9yZVJlcXVlc3RzID0gZmFsc2U7XG5cbiAgICBsZXQgb3B0aW9uTGlzdEVsZW1lbnQgPSB0aGlzLmdldE9wdGlvbnNCYXNlRWxlbWVudCgpO1xuXG4gICAgdGhpcy5zZXRFbGVtZW50VmlzaWJsaXR5KFxuICAgICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYC5pbmZpbml0ZS1hdXRvY29tcGxldGUtb3B0aW9ucy13cmFwcGVyYCkgYXMgSFRNTEVsZW1lbnQsXG4gICAgICBmYWxzZSxcbiAgICApO1xuICAgIG9wdGlvbkxpc3RFbGVtZW50LmlubmVySFRNTCA9IGBgO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGVsZW1lbnQgdmlzaWJsaXR5XG4gICAqIEBwYXJhbSBlbGVtZW50IC0gSFRNTEVsZW1lbnRcbiAgICogQHBhcmFtIHZpc2libGUgLSB2aXNpYmlsaXR5IHN0YXR1c1xuICAgKi9cbiAgcHJpdmF0ZSBzZXRFbGVtZW50VmlzaWJsaXR5KGVsZW1lbnQ6IEhUTUxFbGVtZW50LCB2aXNpYmxlOiBib29sZWFuKSB7XG4gICAgaWYgKHZpc2libGUpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gZWxlbWVudC5jbGFzc05hbWVcbiAgICAgICAgLnNwbGl0KFwiIFwiKVxuICAgICAgICAuZmlsdGVyKGUgPT4gZSAhPT0gYGluZmluaXRlLWF1dG9jb21wbGV0ZS1oaWRkZW4tZWxlbWVudGApXG4gICAgICAgIC5qb2luKFwiIFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGVsZW1lbnQuY2xhc3NOYW1lLmluZGV4T2YoYGluZmluaXRlLWF1dG9jb21wbGV0ZS1oaWRkZW4tZWxlbWVudGApID09PSAtMSkge1xuICAgICAgICBlbGVtZW50LmNsYXNzTmFtZSArPSBgIGluZmluaXRlLWF1dG9jb21wbGV0ZS1oaWRkZW4tZWxlbWVudGA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdldCBvcHRpb25zIGJhc2UgSFRNTEVsZW1lbnRcbiAgICogQHJldHVybnMgSFRNTEVsZW1lbnRcbiAgICovXG4gIHByaXZhdGUgZ2V0T3B0aW9uc0Jhc2VFbGVtZW50KCk6IEhUTUxFbGVtZW50IHtcbiAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICBsZXQgb3B0aW9uc1dyYXBwZXIgPSB0aGlzLmVsZW1lbnRcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoYC5pbmZpbml0ZS1hdXRvY29tcGxldGUtb3B0aW9ucy13cmFwcGVyYCk7XG4gICAgICBpZiAob3B0aW9uc1dyYXBwZXIpIHtcbiAgICAgICAgcmV0dXJuIG9wdGlvbnNXcmFwcGVyXG4gICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IodGhpcy5vcHRpb25zQ29tcG9uZW50Lmxpc3RFbGVtZW50U2VsZWN0b3IpIGFzIEhUTUxFbGVtZW50O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgb3B0aW9uc1dyYXBwZXJFeGNlcHRpb25Nc2c7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG9wdGlvbnNXcmFwcGVyRXhjZXB0aW9uTXNnO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRhY2hpbmcgdGhlIGV2ZW50IGhhbmRsZXJzIG92ZXIgdGhlIG9wdGlvbiBlbGVtZW50c1xuICAgKi9cbiAgcHJpdmF0ZSBkZXRhY2hPcHRpb25FdmVudEhhbmRsZXJzKGVsZW1lbnRzOiBOb2RlTGlzdE9mPEVsZW1lbnQ+KSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgZWxlbWVudHNbaV0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihgY2xpY2tgLCB0aGlzLm9uT3B0aW9uQ2xpY2tFdmVudCk7XG4gICAgICBlbGVtZW50c1tpXS5yZW1vdmVFdmVudExpc3RlbmVyKGBtb3VzZW92ZXJgLCB0aGlzLm9uT3B0aW9uSG92ZXJFdmVudCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE9wdGlvbiBjbGljayBldmVudCBoYW5kbGVyXG4gICAqIEBwYXJhbSBjbGlja0V2ZW50XG4gICAqL1xuICBwcml2YXRlIG9uT3B0aW9uQ2xpY2tFdmVudCA9IChjbGlja0V2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgaWYgKHRoaXMuY29uZmlnLm9uU2VsZWN0KSB7XG4gICAgICB0aGlzLmNvbmZpZy5vblNlbGVjdChjbGlja0V2ZW50LmN1cnJlbnRUYXJnZXQsIChjbGlja0V2ZW50LmN1cnJlbnRUYXJnZXQgYXMgYW55KS5kYXRhKTtcbiAgICB9XG4gICAgdGhpcy5jbGVhck9wdGlvbnMoKTtcbiAgICB0aGlzLnNldElucHV0KChjbGlja0V2ZW50LmN1cnJlbnRUYXJnZXQgYXMgYW55KS5kYXRhLnRleHQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBpbnB1dCBIVE1MIGVsZW1lbnQgYmVsb3cgaW5maW5pdGUtYXV0b2NvbXBsZXRlLWlucHV0LXdyYXBwZXJcbiAgICogQHJldHVybnMgSFRNTElucHV0RWxlbWVudFxuICAgKi9cbiAgcHJpdmF0ZSBnZXRJbnB1dEVsZW1lbnQoKTogSFRNTElucHV0RWxlbWVudCB7XG4gICAgaWYgKHRoaXMuZWxlbWVudCkge1xuICAgICAgbGV0IGlucHV0V3JhcHBlciA9IHRoaXMuZWxlbWVudFxuICAgICAgICAucXVlcnlTZWxlY3RvcihgLmluZmluaXRlLWF1dG9jb21wbGV0ZS1pbnB1dC13cmFwcGVyYCk7XG4gICAgICBpZiAoaW5wdXRXcmFwcGVyKSB7XG4gICAgICAgIHJldHVybiBpbnB1dFdyYXBwZXJcbiAgICAgICAgICAucXVlcnlTZWxlY3RvcihgaW5wdXRgKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgaW5wdXRFbGVtZW50RXhjZXB0aW9uTXNnO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBpbnB1dEVsZW1lbnRFeGNlcHRpb25Nc2c7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldCBpbnB1dCBzaG93biB0ZXh0XG4gICAqIEBwYXJhbSB0ZXh0XG4gICAqL1xuICBwcml2YXRlIHNldElucHV0KHRleHQ6IHN0cmluZykge1xuICAgIHRoaXMuZ2V0SW5wdXRFbGVtZW50KClcbiAgICAgIC52YWx1ZSA9IHRleHQ7XG4gIH1cblxuICBwcml2YXRlIGdldCBmZXRjaGluZ0RhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxGZXRjaGluZ0RhdGE7XG4gIH1cblxuICBwcml2YXRlIHNldCBmZXRjaGluZ0RhdGEobG9hZGluZ1N0YXRlKSB7XG4gICAgaWYgKHRoaXMuY29uZmlnLm9uTG9hZGluZ1N0YXRlQ2hhbmdlKSB7XG4gICAgICB0aGlzLmNvbmZpZy5vbkxvYWRpbmdTdGF0ZUNoYW5nZShsb2FkaW5nU3RhdGUpO1xuICAgIH1cbiAgICB0aGlzLmxvY2FsRmV0Y2hpbmdEYXRhID0gbG9hZGluZ1N0YXRlO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBkYXRhIGJhc2VkIG9uIHRleHQsIHBhZ2UgYW5kIGZldGNoU2l6ZVxuICAgKiBAcGFyYW0gdGV4dFxuICAgKiBAcGFyYW0gcGFnZVxuICAgKiBAcGFyYW0gZmV0Y2hTaXplXG4gICAqL1xuICBwcml2YXRlIGFzeW5jIGdldERhdGEodGV4dDogc3RyaW5nLCBwYWdlOiBudW1iZXIsIGZldGNoU2l6ZTogbnVtYmVyKTogUHJvbWlzZTxJT3B0aW9uW10gfCBudWxsPiB7XG4gICAgdGhpcy5zZWFyY2hlZFRleHQgPSB0ZXh0O1xuICAgIGlmICh0aGlzLmNvbmZpZy5kYXRhKSB7XG4gICAgICB0aGlzLmZldGNoaW5nRGF0YSA9IHRydWU7XG4gICAgICBsZXQgZnJvbSA9IChwYWdlIC0gMSkgKiBmZXRjaFNpemU7XG4gICAgICBsZXQgdG8gPSAoZmV0Y2hTaXplICogKHBhZ2UgLSAxKSkgKyBmZXRjaFNpemU7XG4gICAgICBsZXQgc3RhdGljRGF0YSA9IHRoaXMuY29uZmlnLmRhdGFcbiAgICAgICAgICAuZmlsdGVyKG9wdGlvbiA9PiBvcHRpb24udGV4dC50b0xvd2VyQ2FzZSgpLmluZGV4T2YodGV4dC50b0xvd2VyQ2FzZSgpKSAhPT0gLTEpXG4gICAgICAgICAgLnNsaWNlKGZyb20sIHRvKTtcbiAgICAgIHRoaXMuZmV0Y2hpbmdEYXRhID0gZmFsc2U7XG5cbiAgICAgIHJldHVybiBzdGF0aWNEYXRhO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jb25maWcuZ2V0RGF0YUZyb21BcGkpIHtcbiAgICAgIHRoaXMuZmV0Y2hpbmdEYXRhID0gdHJ1ZTtcbiAgICAgIGxldCBhcGlEYXRhID0gYXdhaXQgdGhpcy5jb25maWcuZ2V0RGF0YUZyb21BcGkodGV4dCwgcGFnZSwgZmV0Y2hTaXplKTtcbiAgICAgIHRoaXMuZmV0Y2hpbmdEYXRhID0gZmFsc2U7XG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuc2VhcmNoZWRUZXh0ID09PSB0ZXh0ICYmXG4gICAgICAgIHRoaXMucGFnZSA9PT0gcGFnZSAmJlxuICAgICAgICB0aGlzLmNvbmZpZy5mZXRjaFNpemUgPT09IGZldGNoU2l6ZVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiBhcGlEYXRhO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IGRhdGFTb3VyY2VNaXNzaW5nRXhjZXB0aW9uTXNnO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBPbiBob3ZlcmluZyBvbiBvcHRpb24gcm93XG4gICAqIEBwYXJhbSBldmVudCAtIEhvdmVyIE1vdXNlIEV2ZW50XG4gICAqL1xuICBwcml2YXRlIG9uT3B0aW9uSG92ZXJFdmVudCA9IChldmVudDogTW91c2VFdmVudCkgPT4ge1xuICAgIGxldCBvcHRpb25zTGlzdCA9IHRoaXMuZ2V0T3B0aW9uc0Jhc2VFbGVtZW50KCk7XG4gICAgbGV0IGhvdmVyZWRFbGVtZW50ID0gb3B0aW9uc0xpc3QucXVlcnlTZWxlY3RvcihgLiR7SE9WRVJFRH1gKTtcbiAgICBpZiAoaG92ZXJlZEVsZW1lbnQpIHtcbiAgICAgIGhvdmVyZWRFbGVtZW50LmNsYXNzTmFtZSA9IGhvdmVyZWRFbGVtZW50XG4gICAgICAgIC5jbGFzc05hbWVcbiAgICAgICAgLnNwbGl0KFwiIFwiKVxuICAgICAgICAuZmlsdGVyKGUgPT4gZSAhPT0gSE9WRVJFRClcbiAgICAgICAgLmpvaW4oXCIgXCIpXG4gICAgICAgIC50cmltKCk7XG4gICAgfVxuICAgIGxldCB0YXJnZXQgPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuICAgIHRhcmdldC5jbGFzc05hbWUgKz0gYCAke0hPVkVSRUR9YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBCdWlsZCB0aGUgb3B0aW9ucyBpbm5lciB0YWdzIGluIG9wdGlvbnMgbGlzdCB0YWcgYmFzZWQgb24gdGhlIHRleHQgcGFzc2VkIGFuZCB0aGUgZGF0YSBpbiBjb25maWdcbiAgICogQHBhcmFtIHRleHQgLSBUZXh0IHRvIHNlYXJjaCBvbiBpbiB0aGUgYXV0b2NvbXBsZXRlXG4gICAqIEBwYXJhbSBjbGVhclByZXZpb3VzRGF0YSAtIEZsYWcgdG8gY2xlYXIgcHJldmlvdXMgb3B0aW9ucyBhbmQgb3ZlcnJpZGUgd2l0aCB0aGUgbmV3IG9uZVxuICAgKi9cbiAgcHJpdmF0ZSBhc3luYyBidWlsZE9wdGlvbnModGV4dDogc3RyaW5nLCBjbGVhclByZXZpb3VzRGF0YTogYm9vbGVhbiA9IHRydWUpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgb3B0aW9uTGlzdEVsZW1lbnQgPSB0aGlzLmdldE9wdGlvbnNCYXNlRWxlbWVudCgpO1xuICAgIGlmIChjbGVhclByZXZpb3VzRGF0YSkge1xuICAgICAgICB0aGlzLmNsZWFyT3B0aW9ucygpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmNvbmZpZy5mZXRjaFNpemUgJiYgIWlzTmFOKHRoaXMuY29uZmlnLmZldGNoU2l6ZSkpIHtcbiAgICAgIGxldCBmaWx0ZXJlZE9wdGlvbnMgPSBhd2FpdCB0aGlzLmdldERhdGEodGV4dCwgdGhpcy5wYWdlLCB0aGlzLmNvbmZpZy5mZXRjaFNpemUpO1xuXG4gICAgICBpZiAoZmlsdGVyZWRPcHRpb25zICE9PSBudWxsKSB7XG4gICAgICAgIGlmIChmaWx0ZXJlZE9wdGlvbnMubGVuZ3RoIDwgdGhpcy5jb25maWcuZmV0Y2hTaXplKSB7XG4gICAgICAgICAgLy8gU3RvcCBmZXRjaGluZyBtb3JlIGNodW5rcyB3aGVuZXZlciB5b3UgZ2V0IGxlc3MgdGhhbiB0aGUgY2h1bmsgZmV0Y2ggc2l6ZVxuICAgICAgICAgIHRoaXMucHJldmVudE1vcmVSZXF1ZXN0cyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBmaWx0ZXJlZE9wdGlvbnNcbiAgICAgICAgICAuZm9yRWFjaChvcHRpb24gPT4ge1xuICAgICAgICAgICAgbGV0IG9wdGlvbkVsZW1lbnRUZW1wbGF0ZSA9IHRoaXMub3B0aW9uc0NvbXBvbmVudC5yZW5kZXJPcHRpb24ob3B0aW9uKTtcbiAgICAgICAgICAgIGxldCB0ZW1wRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgICAgICAgICAgdGVtcEVsZW1lbnQuaW5uZXJIVE1MID0gb3B0aW9uRWxlbWVudFRlbXBsYXRlO1xuICAgICAgICAgICAgbGV0IG9wdGlvbkVsZW1lbnQgPSB0ZW1wRWxlbWVudC5jaGlsZE5vZGVzWzBdO1xuICAgICAgICAgICAgKG9wdGlvbkVsZW1lbnQgYXMgYW55KS5kYXRhID0geyB0ZXh0OiBvcHRpb24udGV4dCwgdmFsdWU6IG9wdGlvbi52YWx1ZSB9O1xuICAgICAgICAgICAgKG9wdGlvbkVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLnNldEF0dHJpYnV0ZShcImluZmluaXRlLWNsaWNrYWJsZVwiLCBcIlwiKTtcbiAgICAgICAgICAgIG9wdGlvbkVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihgY2xpY2tgLCB0aGlzLm9uT3B0aW9uQ2xpY2tFdmVudCk7XG4gICAgICAgICAgICBvcHRpb25FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoYG1vdXNlb3ZlcmAsIHRoaXMub25PcHRpb25Ib3ZlckV2ZW50KTtcbiAgICAgICAgICAgIG9wdGlvbkxpc3RFbGVtZW50LmFwcGVuZENoaWxkKG9wdGlvbkVsZW1lbnQpO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChmaWx0ZXJlZE9wdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGxldCBjaHVua0NsaWVudEhlaWdodCA9IG9wdGlvbkxpc3RFbGVtZW50LmNoaWxkcmVuWzBdLmNsaWVudEhlaWdodDtcbiAgICAgICAgICAvLyBDaGVjayBpZiBtYXhIZWlnaHQgaXMgZml0cyB0aGUgY2h1bmsgc2l6ZSBsaXN0XG4gICAgICAgICAgaWYgKHRoaXMuY29uZmlnLm1heEhlaWdodCkge1xuICAgICAgICAgICAgbGV0IG1heEhlaWdodE51bWJlciA9IHBhcnNlSW50KHRoaXMuY29uZmlnLm1heEhlaWdodCwgMTApO1xuICAgICAgICAgICAgaWYgKG1heEhlaWdodE51bWJlciA+PSBjaHVua0NsaWVudEhlaWdodCAqIHRoaXMuY29uZmlnLmZldGNoU2l6ZSkge1xuICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5tYXhIZWlnaHQgPSAoY2h1bmtDbGllbnRIZWlnaHQgKiB0aGlzLmNvbmZpZy5mZXRjaFNpemUgLSA1KSArIFwicHhcIjtcbiAgICAgICAgICAgICAgbGV0IG9wdGlvbnNXcmFwcGVyRWxlID1cbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihgLmluZmluaXRlLWF1dG9jb21wbGV0ZS1vcHRpb25zLXdyYXBwZXJgKSBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgICAgICAgbGV0IG9wdGlvbnNFbGUgPVxuICAgICAgICAgICAgICAgIG9wdGlvbnNXcmFwcGVyRWxlLnF1ZXJ5U2VsZWN0b3IodGhpcy5vcHRpb25zQ29tcG9uZW50Lmxpc3RFbGVtZW50U2VsZWN0b3IpIGFzIEhUTUxFbGVtZW50O1xuICAgICAgICAgICAgICBvcHRpb25zRWxlLnN0eWxlLm1heEhlaWdodCA9IHRoaXMuY29uZmlnLm1heEhlaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbkxpc3RFbGVtZW50LmlubmVySFRNTCAhPT0gYGApIHtcbiAgICAgICAgdGhpcy5zZXRFbGVtZW50VmlzaWJsaXR5KFxuICAgICAgICAgIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKGAuaW5maW5pdGUtYXV0b2NvbXBsZXRlLW9wdGlvbnMtd3JhcHBlcmApIGFzIEhUTUxFbGVtZW50LFxuICAgICAgICAgIHRydWUsXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldEVsZW1lbnRWaXNpYmxpdHkoXG4gICAgICAgICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYC5pbmZpbml0ZS1hdXRvY29tcGxldGUtb3B0aW9ucy13cmFwcGVyYCkgYXMgSFRNTEVsZW1lbnQsXG4gICAgICAgICAgZmFsc2UsXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgZmV0Y2hTaXplRXhjZXB0aW9uTXNnO1xuICAgIH1cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQ29tcG9uZW50cy9JbmZpbml0ZUF1dG9jb21wbGV0ZS50cyJdLCJzb3VyY2VSb290IjoiIn0=