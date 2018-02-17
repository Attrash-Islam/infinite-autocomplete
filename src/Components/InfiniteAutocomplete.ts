import { InputComponent as defaultInputImpl } from "./InputComponent";
import { OptionsComponent as defaultOptionsImpl } from "./OptionsComponent";
import { InfiniteAutocompleteConfig } from "../Interfaces/InfiniteAutocompleteConfig";
import { IInputComponent, IInputCompoenentConstructor } from "../Interfaces/IInputComponent";
import { IOptionsComponent, IOptionsComponentConstructor } from "../Interfaces/IOptionsComponent";
import { IInfiniteAutocomplete } from "../Interfaces/IInfiniteAutocomplete";
import { InfiniteAutocompleteConfigParams } from "../Interfaces/InfiniteAutocompleteConfigParams";
import { IOption } from "../Interfaces/IOption";
import { HOVERED, KEY_PRESS_STATES } from "../Constants/index";
import { Utils } from "../Utils/index";

/**
 * Default Input in infinite-autocomplete component
 */
export const InputComponent = defaultInputImpl;

/**
 * Default Input in infinite-autocomplete component
 */
export const OptionsComponent = defaultOptionsImpl;

/**
 * infinite-autocomplete component implementation
 * @author Islam Attrash
 */
export class InfiniteAutocomplete implements IInfiniteAutocomplete {

  private element: HTMLElement;
  private inputComponent: IInputComponent;
  private optionsComponent: IOptionsComponent;
  private page: number = 1;
  private searchedText: string = "";
  private config: InfiniteAutocompleteConfig;
  private preventMoreRequests: boolean = false;
  private fetchingData: boolean = false;

  /**
   * Default configuration object
   */
  private defaultConfig: InfiniteAutocompleteConfig = {
    fetchSize: 10,
    maxHeight: "160px",
    customizedInput: defaultInputImpl,
    customizedOptions: defaultOptionsImpl,
  };

  /**
   * constructor for InfiniteAutocomplete class
   * Enabling pluggable system linked with Interfaces only
   * @param element - HTMLElement to append the infinite-autocomplete in it
   * @param config - InfiniteAutocomplete config options
   * @param optionComponent - Option component implementation to be injected (or default)
   * @param inputComponent - Input component implementation to be injected (or default)
   * @param optionsComponent - Options component implementation to be injected (or default)
   */
  constructor(element: HTMLElement, config?: InfiniteAutocompleteConfigParams) {
    this.element = element;
    this.config = { ...this.defaultConfig, ...config };
    this.inputComponent = new this.config.customizedInput();
    this.optionsComponent = new this.config.customizedOptions();
    this.init();
  }

  /**
   * Set the config object with extending
   * @param config - infinite-autocomplete configuration object
   */
  public setConfig = (config: InfiniteAutocompleteConfigParams) => {
    this.destroy();
    this.config = { ...this.config, ...config };
    this.inputComponent = new this.config.customizedInput();
    this.optionsComponent = new this.config.customizedOptions();
    this.init();
  }

  /**
   * Destroy the infinite-autocomplete and unbind all events
   */
  public destroy = () => {
    if (!this.isOptionsHidden()) {
      this.clearOptions();
    }

    let optionsList = this.getOptionsBaseElement();
    optionsList.removeEventListener(`scroll`, this.scrollReachedBottomHandler);
    let inputEle = this.getInputElement();
    inputEle.removeEventListener(`input`, this.onInputChange);
    inputEle.removeEventListener(`click`, this.onInputChange);
    inputEle.removeEventListener(`keydown`, this.onKeyPressed);
    document.removeEventListener(`click`, this.onDocumentClickHandler);
    document.removeEventListener("keydown", this.onEscapeEventHandler);
    this.element.innerHTML = ``;
  }

  /**
   * Initialize hook that get executed immediatly after using the infinite-autocomplete component
   */
  private init = () => {
    this.applyStylesRules();
    this.appendInfiniteAutocompleteWrapperClass();
    this.linkInputComponent();
    this.linkOptionsComponent();
    this.bindScrollReachBottomEvent();
    this.bindEscapeEvent();
    this.bindOutSideClickEvent();
  }

  /**
   * (#1) Binds a click handler to detect where the user clicked
   * If click is out side the main wrapper area then close options
   */
  private bindOutSideClickEvent = () => {
    document.addEventListener(`click`, this.onDocumentClickHandler);
  }

  /**
   * on document click handler
   * @param event - Event
   */
  private onDocumentClickHandler = (event: Event) => {
    if (!this.isOptionsHidden()) {
      let clickedOutSide = this.checkIfClickedOutSideTheAutocompleteComponents(event.target as HTMLElement);
      if (clickedOutSide) {
          this.clearOptions();
      }
    }
  }

  /**
   * Check if click is outside the plugin
   * @param element - HTMLElement
   */
  private checkIfClickedOutSideTheAutocompleteComponents = (element: HTMLElement | null) => {
    if (element === null) {
        return true;
    } else if (element === this.element) {
        return false;
    } else {
        return this.checkIfClickedOutSideTheAutocompleteComponents(element.parentElement);
    }
  }

  /**
   * (#11) Binds escape event handler to clear the options when clicking Esc
   */
  private bindEscapeEvent = () => {
    document.addEventListener("keydown", this.onEscapeEventHandler);
  }

  /**
   * Escape event handler
   * @param e - KeyboardEvent
   */
  private onEscapeEventHandler = e => {
    if (e.keyCode === 27 && !this.isOptionsHidden()) { // Esc key pressed
        this.clearOptions();
    }
  }

  /**
   * Append infinite autocomplete main wrapper className
   */
  private appendInfiniteAutocompleteWrapperClass = () => {
    if (!this.element.className || this.element.className.indexOf(`infinite-autocomplete-wrapper`) === -1) {
      this.element.className = this.element
        .className
        .split(` `)
        .concat([`infinite-autocomplete-wrapper`])
        .filter(c => c)
        .join(` `);
    }
  }

  /**
   * Reset current page
   */
  private resetCurrentPage = () => {
    this.page = 1;
  }

  /**
   * Link input component into the input wrapper
   */
  private linkInputComponent = () => {
    const MissingInputElementInInputComponentExceptionMsg =
      new Error(`Customized input should contain input element <input />`);
    let inputWrapperEle = document.createElement(`div`);
    inputWrapperEle.className = `infinite-autocomplete-input-wrapper`;
    inputWrapperEle.innerHTML = this.inputComponent.render();
    let inputEle = inputWrapperEle.querySelector(`input`) as HTMLElement;
    if (!inputEle) {
      Utils.throwErrorInConsole(MissingInputElementInInputComponentExceptionMsg);
      throw MissingInputElementInInputComponentExceptionMsg;
    }
    inputEle
      .addEventListener(`input`, this.onInputChange);
    // (#2) Start to show options when focus on the input
    inputEle
      .addEventListener(`click`, this.onInputChange);
    inputEle
      .addEventListener(`keydown`, this.onKeyPressed);
    this.element.appendChild(inputWrapperEle);
  }

  /**
   * On keydown pressing in input element
   * @param keydownEvent - pressing key event
   */
  private onKeyPressed = (keydownEvent: KeyboardEvent) => {
    if (!this.isOptionsHidden()) {
      let currentHovered = this.getNavigationIndex();
      if (currentHovered === -1) {
        if (keydownEvent.keyCode === KEY_PRESS_STATES.DOWN) {
          this.toggleHoveredState(0, keydownEvent);
        }
      } else {
        switch (keydownEvent.keyCode) {
          case KEY_PRESS_STATES.DOWN:
            this.toggleHoveredState(currentHovered + 1, keydownEvent);
            break;
          case KEY_PRESS_STATES.UP:
            this.toggleHoveredState(currentHovered - 1, keydownEvent);
            break;
          case KEY_PRESS_STATES.ENTER:
            this.clickOnHovered();
            break;
          default:
            break;
        }
      }
    }
  }

  /**
   * Click on hovered element
   */
  private clickOnHovered = () => {
    let optionsList = this.getOptionsBaseElement();
    let hoveredElement = optionsList.querySelector(`.${HOVERED}`) as HTMLElement;
    if (hoveredElement) { hoveredElement.click(); }
  }

  /**
   * Simulate Scrolled to bottom
   */
  private simulateScrollToBottom = () => {
    let optionsList = this.getOptionsBaseElement();
    let scrollEvent = new Event("scroll", { bubbles: true });
    optionsList.scrollTop = 10000; // Simulate reached bottom
    optionsList.dispatchEvent(scrollEvent);
  }

  /**
   * Toggle hovered state on specific index in options list
   * @param index - The index to be applied as hovered
   */
  private toggleHoveredState = (index: number, keydownEvent: KeyboardEvent) => {
    let optionsList = this.getOptionsBaseElement();
    if (index === optionsList.children.length) {
      this.simulateScrollToBottom();
    }

    if (index >= 0 && index < optionsList.children.length) {

      let hoveredElement = optionsList.querySelector(`.${HOVERED}`);
      if (hoveredElement) {
        hoveredElement.className = hoveredElement
          .className
          .split(" ")
          .filter(e => e !== HOVERED)
          .join(" ")
          .trim();
      }

      let targetElement = optionsList.children[index] as HTMLElement;
      targetElement.className += ` ${HOVERED}`;

      // If hovered is not in the scrollable view
      if (targetElement.offsetTop < optionsList.scrollTop || (
          targetElement.offsetTop - optionsList.scrollTop > optionsList.clientHeight)) {
        switch (keydownEvent.keyCode) {
          case KEY_PRESS_STATES.UP:
            targetElement.scrollIntoView(true);
            break;
          case KEY_PRESS_STATES.DOWN:
            targetElement.scrollIntoView(false);
            break;
          default:
            break;
        }
      }

    }
  }

  /**
   * Get navigation index if options is open
   * @returns Options current index
   */
  private getNavigationIndex = () => {
    let optionsList = this.getOptionsBaseElement();
    for (let i = 0; i < optionsList.children.length; i++) {
      let option = optionsList.children[i];
      if (option.className.indexOf(HOVERED) !== -1) {
        return i;
      }
    }

    return -1;
  }

  /**
   * Input component `change` event handler
   * @param inputChangeEvent - Input change event handler
   */
  private onInputChange = (inputChangeEvent: Event) => {
    let target = inputChangeEvent.currentTarget as HTMLInputElement;
    // If user pass special behavior for typing via configuration
    if (this.inputComponent.onInputChange) {
      this.inputComponent.onInputChange(target, target.value);
    }
    // If we type always fetch data and build options
    // If we click on input and the options is hidden build the options
    // If we click on input and the options is already opened don't do anything
    if (inputChangeEvent.type === `input` ||
            (inputChangeEvent.type === `click` && this.isOptionsHidden())) {
      this.buildOptions(target.value, true);
    }
  }

  /**
   * Link options component into the infinite autocomplete component
   */
  private linkOptionsComponent = () => {
    let optionsWrapperEle = document.createElement(`div`);
    optionsWrapperEle.className = `infinite-autocomplete-options-wrapper`;
    optionsWrapperEle.innerHTML = this.optionsComponent.render();
    let optionsEle = optionsWrapperEle.querySelector(this.optionsComponent.listElementSelector) as HTMLElement;
    this.setElementVisiblity(optionsWrapperEle, false);
    optionsEle.style.overflow = `scroll`;
    optionsEle.style.overflowX = `hidden`;
    optionsEle.style.border = `1px solid #bcbcbc`;
    optionsEle.style.paddingBottom = `5px`;
    optionsEle.style.maxHeight = this.config.maxHeight || null;
    this.element.appendChild(optionsWrapperEle);
  }

  /**
   * Check if options wrapper hidden or not
   * @returns true if hidden, or else false
   */
  private isOptionsHidden = (): boolean => {
    let optionsWrapper = this.element.querySelector(`.infinite-autocomplete-options-wrapper`) as HTMLElement;

    return optionsWrapper.className
      .indexOf(`infinite-autocomplete-hidden-element`) > -1;
  }

  /**
   * Apply the style rules for the infinite autocomplete plugin and it's components
   */
  private applyStylesRules = () => {

    // Main wrapper style rules
    let isMainWrapperStyleApplied = document.head.querySelector("#infinite-autocomplete-wrapper-style");
    if (!isMainWrapperStyleApplied) {
      let mainWrapperStyle = document.createElement("style");
      mainWrapperStyle.id = "infinite-autocomplete-wrapper-style";
      mainWrapperStyle.innerHTML = `
          .infinite-autocomplete-wrapper {
              position: relative;
          }
      `;
      document.head.appendChild(mainWrapperStyle);
    }

    // Hidden element style rules
    let isHiddenStyleApplied = document.head.querySelector("#infinite-autocomplete-hidden-style");
    if (!isHiddenStyleApplied) {
      let hiddenStyle = document.createElement("style");
      hiddenStyle.id = "infinite-autocomplete-hidden-style";
      hiddenStyle.innerHTML = `
          .infinite-autocomplete-hidden-element {
              visibility: hidden;
              z-index: -1;
          }
      `;
      document.head.appendChild(hiddenStyle);
    }

    // Defaults style rules
    let isDefaultsStyleApplied = document.head.querySelector("#infinite-autocomplete-defaults-style");
    if (!isDefaultsStyleApplied) {
      let defaultsStyle = document.createElement("style");
      defaultsStyle.id = "infinite-autocomplete-defaults-style";
      defaultsStyle.innerHTML = `
          .infinite-autocomplete-input-wrapper .infinite-autocomplete-default-input {
              height: 28px;
              border-radius: 8px;
              box-shadow: inset 0px 0px 15px -4px transparent;
          }
          .infinite-autocomplete-options-wrapper .infinite-autocomplete-default-options {
              list-style-type: none;
              margin-top: 0;
              padding-left: 0;
          }
          .infinite-autocomplete-options-wrapper .infinite-autocomplete-default-options li {
              padding: 5px 10px 10px 10px;
          }
          .infinite-autocomplete-options-wrapper .infinite-autocomplete-default-options li.hovered {
              background: #d5ebff;
              color: black;
              cursor: pointer;
          }
      `;
      document.head.appendChild(defaultsStyle);
    }

    // Input style rules
    let isInputStyleApplied = document.head.querySelector("#infinite-autocomplete-input-style");
    if (!isInputStyleApplied) {
      let inputStyle = document.createElement("style");
      inputStyle.id = "infinite-autocomplete-input-style";
      inputStyle.innerHTML = `
          .infinite-autocomplete-input-wrapper input {
              width: 100%;
          }
      `;
      document.head.appendChild(inputStyle);
    }

    // Options style rules
    let isOptionsStyleApplied = document.head.querySelector("#infinite-autocomplete-options-style");
    if (!isOptionsStyleApplied) {
      let optionsStyle = document.createElement("style");
      optionsStyle.id = `infinite-autocomplete-options-style`;
      optionsStyle.innerHTML = `
          .infinite-autocomplete-options-wrapper {
              position: absolute;
              z-index: 10;
              background: white;
          }
      `;
      document.head.appendChild(optionsStyle);
    }

    // Scrollbar style rules
    let isScrollbarStyleApplied = document.head.querySelector("#infinite-autocomplete-scrollbar-style");
    if (!isScrollbarStyleApplied) {
      let specialScroll = document.createElement("style");
      specialScroll.id = "infinite-autocomplete-scrollbar-style";
      specialScroll.innerHTML = `
          .infinite-autocomplete-wrapper ::-webkit-scrollbar {
                  width: 4px;
              }

              .infinite-autocomplete-wrapper ::-webkit-scrollbar-track {
                  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
                  -webkit-border-radius: 10px;
                  border-radius: 10px;
              }

              .infinite-autocomplete-wrapper ::-webkit-scrollbar-thumb {
                  -webkit-border-radius: 10px;
                  border-radius: 10px;
                  background: rgba(128, 128, 128, 0.8);
                  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5);
              }
              .infinite-autocomplete-wrapper ::-webkit-scrollbar-thumb:window-inactive {
                  background: rgba(255,0,0,0.4);
              }
      `;
      document.head.appendChild(specialScroll);
    }
  }

  /**
   * Binds a scroll event handler on the options
   */
  private bindScrollReachBottomEvent = () => {
    let optionsEle = this.getOptionsBaseElement();
    optionsEle.addEventListener(`scroll`, this.scrollReachedBottomHandler);
  }

  /**
   * Scroll reached bottom handler
   * @param e - Scroll event object
   */
  private scrollReachedBottomHandler = (e: Event) => {
    let optionsEle = e.currentTarget as HTMLElement;
    if (!this.fetchingData && !this.preventMoreRequests && !this.isOptionsHidden()) {
      if (optionsEle.scrollTop + optionsEle.clientHeight >= optionsEle.scrollHeight) {
        this.page++;
        this.buildOptions(
            this.getInputElement().value,
            false,
        );
      }
    }
  }

  /**
   * Clears the options list tag with removing the click event handlers
   * unbind the `scroll` event from the options
   * (Garbage collecting)
   */
  private clearOptions = () => {
    this.detachOptionEventHandlers(
      this.getOptionsBaseElement()
        .querySelectorAll(`[infinite-clickable]`),
    );
    this.resetCurrentPage();
    this.preventMoreRequests = false;

    let optionListElement = this.getOptionsBaseElement();

    this.setElementVisiblity(
      this.element.querySelector(`.infinite-autocomplete-options-wrapper`) as HTMLElement,
      false,
    );
    optionListElement.innerHTML = ``;
  }

  /**
   * Sets the element visiblity
   * @param element - HTMLElement
   * @param visible - visibility status
   */
  private setElementVisiblity(element: HTMLElement, visible: boolean) {
    if (visible) {
      element.className = element.className
        .split(" ")
        .filter(e => e !== `infinite-autocomplete-hidden-element`)
        .join(" ");
    } else {
      if (element.className.indexOf(`infinite-autocomplete-hidden-element`) === -1) {
        element.className += ` infinite-autocomplete-hidden-element`;
      }
    }
  }

  /**
   * Get options base HTMLElement
   * @returns HTMLElement
   */
  private getOptionsBaseElement(): HTMLElement {
    const optionsWrapperExceptionMsg = new Error(`Couldn't get the options base element.`);
    if (this.element) {
      let optionsWrapper = this.element
        .querySelector(`.infinite-autocomplete-options-wrapper`);
      if (optionsWrapper) {
        return optionsWrapper
          .querySelector(this.optionsComponent.listElementSelector) as HTMLElement;
      } else {
        Utils.throwErrorInConsole(optionsWrapperExceptionMsg);
        throw optionsWrapperExceptionMsg;
      }
    } else {
      Utils.throwErrorInConsole(optionsWrapperExceptionMsg);
      throw optionsWrapperExceptionMsg;
    }
  }

  /**
   * Detaching the event handlers over the option elements
   */
  private detachOptionEventHandlers(elements: NodeListOf<Element>) {
    for (let i = 0; i < elements.length; i++) {
      elements[i].removeEventListener(`click`, this.onOptionClickEvent);
      elements[i].removeEventListener(`mouseover`, this.onOptionHoverEvent);
    }
  }

  /**
   * Option click event handler
   * @param clickEvent
   */
  private onOptionClickEvent = (clickEvent: MouseEvent) => {
    if (this.config.onSelect) {
      this.config.onSelect(clickEvent.currentTarget, (clickEvent.currentTarget as any).data);
    }
    this.clearOptions();
    this.setInput((clickEvent.currentTarget as any).data.text);
  }

  /**
   * Get input HTML element below infinite-autocomplete-input-wrapper
   * @returns HTMLInputElement
   */
  private getInputElement(): HTMLInputElement {
    const inputElementExceptionMsg = new Error(`Couldn't get the input element.`);
    if (this.element) {
      let inputWrapper = this.element
        .querySelector(`.infinite-autocomplete-input-wrapper`);
      if (inputWrapper) {
        return inputWrapper
          .querySelector(`input`) as HTMLInputElement;
      } else {
        Utils.throwErrorInConsole(inputElementExceptionMsg);
        throw inputElementExceptionMsg;
      }
    } else {
      Utils.throwErrorInConsole(inputElementExceptionMsg);
      throw inputElementExceptionMsg;
    }
  }

  /**
   * Set input shown text
   * @param text
   */
  private setInput(text: string) {
    this.getInputElement()
      .value = text;
  }

  /**
   * Get data based on text, page and fetchSize
   * @param text
   * @param page
   * @param fetchSize
   */
  private async getData(text: string, page: number, fetchSize: number): Promise<IOption[] | null> {
    this.searchedText = text;
    const dataSourceMissingExceptionMsg = new Error (`You must pass data or getDataFromApi function via config`);
    if (this.config.data) {
      this.fetchingData = true;
      let from = (page - 1) * fetchSize;
      let to = (fetchSize * (page - 1)) + fetchSize;
      let staticData = this.config.data
          .filter(option => option.text.toLowerCase().indexOf(text.toLowerCase()) !== -1)
          .slice(from, to);
      this.fetchingData = false;

      return staticData;
    } else if (this.config.getDataFromApi) {
      this.fetchingData = true;
      let apiData = await this.config.getDataFromApi(text, page, fetchSize);
      this.fetchingData = false;
      if (
        this.searchedText === text &&
        this.page === page &&
        this.config.fetchSize === fetchSize
      ) {
        return apiData;
      } else {
        return null;
      }
    } else {
      Utils.throwErrorInConsole(dataSourceMissingExceptionMsg);
      throw dataSourceMissingExceptionMsg;
    }
  }

  /**
   * On hovering on option row
   * @param event - Hover Mouse Event
   */
  private onOptionHoverEvent = (event: MouseEvent) => {
    let optionsList = this.getOptionsBaseElement();
    let hoveredElement = optionsList.querySelector(`.${HOVERED}`);
    if (hoveredElement) {
      hoveredElement.className = hoveredElement
        .className
        .split(" ")
        .filter(e => e !== HOVERED)
        .join(" ")
        .trim();
    }
    let target = event.currentTarget as HTMLElement;
    target.className += ` ${HOVERED}`;
  }

  /**
   * Build the options inner tags in options list tag based on the text passed and the data in config
   * @param text - Text to search on in the autocomplete
   * @param clearPreviousData - Flag to clear previous options and override with the new one
   */
  private async buildOptions(text: string, clearPreviousData: boolean = true): Promise<void> {
    const fetchSizeExceptionMsg = new Error(`fetchSize must be overriden with correct numeric value`);

    let optionListElement = this.getOptionsBaseElement();
    if (clearPreviousData) {
        this.clearOptions();
    }

    if (this.config.fetchSize) {
      let filteredOptions = await this.getData(text, this.page, this.config.fetchSize);

      if (filteredOptions !== null) {
        if (filteredOptions.length < this.config.fetchSize) {
          // Stop fetching more chunks whenever you get less than the chunk fetch size
          this.preventMoreRequests = true;
        }

        filteredOptions
          .forEach(option => {
            let optionElementTemplate = this.optionsComponent.renderOption(option);
            let tempElement = document.createElement(`div`);
            tempElement.innerHTML = optionElementTemplate;
            let optionElement = tempElement.childNodes[0];
            (optionElement as any).data = { text: option.text, value: option.value };
            (optionElement as HTMLElement).setAttribute("infinite-clickable", "");
            optionElement.addEventListener(`click`, this.onOptionClickEvent);
            optionElement.addEventListener(`mouseover`, this.onOptionHoverEvent);
            optionListElement.appendChild(optionElement);
          });
      }

      let chunkClientHeight = optionListElement.children[0].clientHeight;

      // Check if maxHeight is fits the chunk size list
      if (this.config.maxHeight) {
        let maxHeightNumber = parseInt(this.config.maxHeight, 10);
        if (maxHeightNumber >= chunkClientHeight * this.config.fetchSize) {
          this.config.maxHeight = (chunkClientHeight * this.config.fetchSize - 5) + "px";
          let optionsWrapperEle = this.element.querySelector(`.infinite-autocomplete-options-wrapper`) as HTMLElement;
          let optionsEle = optionsWrapperEle.querySelector(this.optionsComponent.listElementSelector) as HTMLElement;
          optionsEle.style.maxHeight = this.config.maxHeight;
        }
      }

      if (optionListElement.innerHTML !== ``) {
        this.setElementVisiblity(
          this.element.querySelector(`.infinite-autocomplete-options-wrapper`) as HTMLElement,
          true,
        );
      } else {
        this.setElementVisiblity(
          this.element.querySelector(`.infinite-autocomplete-options-wrapper`) as HTMLElement,
          false,
        );
      }

    } else {
      Utils.throwErrorInConsole(fetchSizeExceptionMsg);
    }
  }

}
