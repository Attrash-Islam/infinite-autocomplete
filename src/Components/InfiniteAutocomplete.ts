import { InputComponent as defaultInput } from './InputComponent';
import { OptionsComponent as defaultOptions } from './OptionsComponent';
import { InfiniteAutocompleteConfig } from '../Interfaces/InfiniteAutocompleteConfig';
import { IInputComponent, IInputCompoenentConstructor } from '../Interfaces/IInputComponent';
import { IOptionsComponent, IOptionsComponentConstructor } from '../Interfaces/IOptionsComponent';
import { IInfiniteAutocomplete } from '../Interfaces/IInfiniteAutocomplete';
import { Promise as es6Promise } from 'es6-promise';
import { Utils } from '../Utils/index';
import { InfiniteAutocompleteConfigParams } from '../Interfaces/InfiniteAutocompleteConfigParams';
import { IOption } from '../Interfaces/IOption';

/**
 * infinite-autocomplete component implementation
 * @author Islam Attrash
 */
export class InfiniteAutocomplete implements IInfiniteAutocomplete {

    private element:HTMLElement;
    private inputComponent:IInputComponent;
    private optionsComponent:IOptionsComponent;
    private page:number = 1;
    private config:InfiniteAutocompleteConfig;
    private preventMoreRequests:boolean = false;
    private fetchingData:boolean = false;
    private isOptionsHidden = true;

    /**
     * Default configuration object
     */
    private defaultConfig:InfiniteAutocompleteConfig = {
        fetchSize: 10,
        maxHeight: '160px',
        customizedInput: defaultInput,
        customizedOptions: defaultOptions
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
    constructor(element:HTMLElement, config?:InfiniteAutocompleteConfigParams) {
        this.element = element;
        this.config = { ...this.defaultConfig, ...config };
        this.inputComponent = new this.config.customizedInput();
        this.optionsComponent = new this.config.customizedOptions();
        this.init();
    }


    /**
     * Initialize hook that get executed immediatly after using the infinite-autocomplete component
     */
    private init() {
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
    private bindOutSideClickEvent() {
        document.addEventListener(`click`, (event:Event) => {
            if(!this.isOptionsHidden) {
                let clickedOutSide = this.checkIfClickedOutSideTheAutocompleteComponents(<HTMLElement> event.target);
                if(clickedOutSide) {
                    this.clearOptions();
                }
            }
        });
    }


    /**
     * Check if click is outside the plugin
     * @param element - HTMLElement
     */
    private checkIfClickedOutSideTheAutocompleteComponents(element: HTMLElement | null) {
        if(element === null) {
            return true;
        } else if(element === this.element) {
            return false;
        } else {
            return this.checkIfClickedOutSideTheAutocompleteComponents(element.parentElement)
        }
    }


    /**
     * (#11) Binds escape event handler to clear the options when clicking Esc
     */
    private bindEscapeEvent() {
        document.addEventListener('keydown', (e) => {
            if(e.keyCode === 27 && !this.isOptionsHidden) { //Esc key pressed
                this.clearOptions();
            }
        });
    }


    /**
     * Append infinite autocomplete main wrapper className
     */
    private appendInfiniteAutocompleteWrapperClass() {
        this.element.className = this.element
            .className
            .split(` `)
            .concat([`infinite-autocomplete-wrapper`])
            .filter(c => c)
            .join(` `);
    }


    /**
     * Reset current page
     */
    private resetCurrentPage() {
        this.page = 1;
    }

    /**
     * Link input component into the input wrapper
     */
    private linkInputComponent() {
        const MissingInputElementInInputComponentExceptionMsg = 
            new Error(`Customized input should contain input element <input />`);
        let inputWrapperEle = document.createElement(`div`);
        inputWrapperEle.className = `infinite-autocomplete-input-wrapper`;
        inputWrapperEle.innerHTML = this.inputComponent.render();
        let inputEle = <HTMLElement> inputWrapperEle.querySelector(`input`);
        if(!inputEle) {
            Utils.throwErrorInConsole(
                MissingInputElementInInputComponentExceptionMsg
            );
            throw MissingInputElementInInputComponentExceptionMsg;
        }
        inputEle
            .addEventListener(`input`, (inputChangeEvent) => this.onInputChange(inputChangeEvent));
        //(#2) Start to show options when focus on the input
        inputEle
            .addEventListener(`click`, (inputChangeEvent) => this.onInputChange(inputChangeEvent));
        this.element.appendChild(inputWrapperEle);
    }
    

    /**
     * Input component `change` event handler
     * @param inputChangeEvent - Input change event handler
     */
    private onInputChange(inputChangeEvent:Event) {
        let target = <HTMLInputElement> inputChangeEvent.currentTarget;
        //If user pass special behavior for typing via configuration
        if(this.inputComponent.onInputChange) {
            this.inputComponent.onInputChange(target, target.value);
        }
        //If we type always fetch data and build options
        //If we click on input and the options is hidden build the options
        //If we click on input and the options is already opened don't do anything
        if(inputChangeEvent.type === `input` || 
                (inputChangeEvent.type === `click` && this.isOptionsHidden)) {
            this.buildOptions(target.value, true);
        }
    }


    /**
     * Set the config object with extending
     * @param config - infinite-autocomplete configuration object
     */
    public setConfig(config:InfiniteAutocompleteConfigParams) {
        this.config = {...this.config, ...config};
    }


    /**
     * Link options component into the infinite autocomplete component
     */
    private linkOptionsComponent() {
        let optionsWrapperEle = document.createElement(`div`);
        optionsWrapperEle.className = `infinite-autocomplete-options-wrapper`;
        optionsWrapperEle.innerHTML = this.optionsComponent.render();
        let optionsEle = <HTMLElement> optionsWrapperEle.querySelector(this.optionsComponent.listElementSelector);
        optionsEle.style.display = `none`;
        this.isOptionsHidden = true;
        optionsEle.style.overflow = `scroll`;
        optionsEle.style.overflowX = `hidden`;
        optionsEle.style.border = `1px solid #bcbcbc`;
        optionsEle.style.paddingBottom = `5px`;
        optionsEle.style.maxHeight = this.config.maxHeight || null;
        this.element.appendChild(optionsWrapperEle);
    }

    
    /**
     * Apply the style rules for the infinite autocomplete plugin and it's components
     */
    private applyStylesRules() {
        
        //Main wrapper style rules
        let isMainWrapperStyleApplied = document.head.querySelector('#infinite-autocomplete-wrapper-style');
        if(!isMainWrapperStyleApplied) {
            let mainWrapperStyle = document.createElement('style');
            mainWrapperStyle.id = 'infinite-autocomplete-wrapper-style';
            mainWrapperStyle.innerHTML = `
                .infinite-autocomplete-wrapper {
                    position: relative;
                }
            `;
            document.head.appendChild(mainWrapperStyle);
        }

        
        //Input style rules
        let isInputStyleApplied = document.head.querySelector('#infinite-autocomplete-input-style');
        if(!isInputStyleApplied) {
            let inputStyle = document.createElement('style');
            inputStyle.id = 'infinite-autocomplete-input-style';
            inputStyle.innerHTML = `
                .infinite-autocomplete-input-wrapper input {
                    width: 100%;
                }
            `;
            document.head.appendChild(inputStyle);
        }


        //Options style rules
        let isOptionsStyleApplied = document.head.querySelector('#infinite-autocomplete-options-style');
        if(!isOptionsStyleApplied) {
            let optionsStyle = document.createElement('style');
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

        //Scrollbar style rules
        let isScrollbarStyleApplied = document.head.querySelector('#infinite-autocomplete-scrollbar-style');
        if(!isScrollbarStyleApplied) {
            let specialScroll = document.createElement('style');
            specialScroll.id = 'infinite-autocomplete-scrollbar-style';
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
    private bindScrollReachBottomEvent() {
        let optionsEle = this.getOptionsBaseElement();
        optionsEle.addEventListener(`scroll`, this.scrollReachedBottomHandler.bind(this));
    }


    /**
     * Scroll reached bottom handler
     * @param e - Scroll event object
     */
    private scrollReachedBottomHandler(e:Event) {
        let optionsEle = <HTMLElement> e.currentTarget;
        if(!this.fetchingData && !this.preventMoreRequests) {
            if(optionsEle.scrollTop + optionsEle.clientHeight >= optionsEle.scrollHeight) {
                this.page++;
                this.buildOptions(
                    this.getInputElement().value, 
                    false
                );
            }
        }
    }


    /**
     * Clears the options list tag with removing the click event handlers 
     * unbind the `scroll` event from the options
     * (Garbage collecting)
     */
    private clearOptions() {
        this.detachClickEventHandlers(
            this.getOptionsBaseElement()
                .querySelectorAll(`[infinite-clickable]`)
        );
        this.resetCurrentPage();
        this.preventMoreRequests = false;

        let optionListElement = this.getOptionsBaseElement();
        
        optionListElement.style.display = `none`;
        this.isOptionsHidden = true;
        optionListElement.innerHTML = ``;
    }

    /**
     * Get options base HTMLElement
     * @returns HTMLElement
     */
    private getOptionsBaseElement():HTMLElement {
        const optionsWrapperExceptionMsg = new Error(`Couldn't get the options base element.`);
        if(this.element) {
            let optionsWrapper = this.element
                .querySelector(`.infinite-autocomplete-options-wrapper`);
            if(optionsWrapper) {
                    return <HTMLElement> optionsWrapper
                         .querySelector(this.optionsComponent.listElementSelector);
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
     * Detaching the event handler over the option elements
     */
    private detachClickEventHandlers(elements:NodeListOf<Element>) {
        for( let i = 0; i < elements.length; i++) {
            elements[i].removeEventListener(`click`, (event:MouseEvent) => this.onOptionClickEvent(event));
        }
    }

    /**
     * Option click event handler
     * @param clickEvent
     */
    private onOptionClickEvent(clickEvent:MouseEvent) {
        if(this.config.onSelect) {
            this.config.onSelect(clickEvent.currentTarget, (clickEvent.currentTarget as any).data);
        }
        this.clearOptions();
        this.setInput((clickEvent.currentTarget as any).data.text);
    }

    /**
     * Get input HTML element below infinite-autocomplete-input-wrapper
     * @returns HTMLInputElement
     */
    private getInputElement():HTMLInputElement {
        const inputElementExceptionMsg = new Error(`Couldn't get the input element.`);
        if(this.element) {
            let inputWrapper = this.element
                .querySelector(`.infinite-autocomplete-input-wrapper`);
            if(inputWrapper) {
                return <HTMLInputElement> inputWrapper
                    .querySelector(`input`);
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
    private setInput(text:string) {
        this.getInputElement()
            .value = text;
    }

    /**
     * Get data based on text, page and fetchSize
     * @param text
     * @param page
     * @param fetchSize
     */
    private async getData(text:string):es6Promise<IOption[]> {
        const dataSourceMissingExceptionMsg = new Error (`You must pass data or getDataFromApi function via config`);
        if(this.config.data) {
            this.fetchingData = true;
            let from = (this.page - 1) * this.config.fetchSize;
            let to = (this.config.fetchSize * (this.page - 1)) + this.config.fetchSize;
            this.fetchingData = false;

            return this.config.data
                .filter(option => option.text.toLowerCase().indexOf(text.toLowerCase()) !== -1)
                .slice(from, to);
        } else if(this.config.getDataFromApi) {
            this.fetchingData = true;
            let apiData = await this.config.getDataFromApi(text, this.page, this.config.fetchSize);
            this.fetchingData = false;
            return apiData;
        } else {
            Utils.throwErrorInConsole(dataSourceMissingExceptionMsg);
            throw dataSourceMissingExceptionMsg;
        }
    }


    /**
     * Build the options inner tags in options list tag based on the text passed and the data in config
     * @param text - Text to search on in the autocomplete
     * @param clearPreviousData - Flag to clear previous options and override with the new one
     */
    private async buildOptions(text:string, clearPreviousData:boolean = true):es6Promise<void> {
        const fetchSizeExceptionMsg = new Error(`fetchSize must be overriden with correct numeric value`);

        let optionListElement = this.getOptionsBaseElement();
        if(clearPreviousData) {
            this.clearOptions();
        }

        if(this.config.fetchSize) {
            let filteredOptions = await this.getData(text);

            if(filteredOptions.length < this.config.fetchSize) {
                //Stop fetching more chunks whenever you get less than the chunk fetch size
                this.preventMoreRequests = true;
            }

            filteredOptions
                .forEach((option) => {
                        let optionElementTemplate = this.optionsComponent.renderOption(option);
                        let tempElement = document.createElement(`div`);
                        tempElement.innerHTML = optionElementTemplate;
                        let optionElement = tempElement.childNodes[0];
                        (optionElement as any).data = { text: option.text, value: option.value };
                        (<HTMLElement> optionElement).setAttribute('infinite-clickable', '');
                        optionElement.addEventListener(`click`, (event:MouseEvent) => this.onOptionClickEvent(event));
                        optionListElement.appendChild(optionElement);
                });

            if(optionListElement.innerHTML !== ``) {
                optionListElement.style.display = ``;
                this.isOptionsHidden = false;
            } else {
                optionListElement.style.display = `none`;
                this.isOptionsHidden = true;
            }

        } else {
            Utils.throwErrorInConsole(fetchSizeExceptionMsg);
            throw fetchSizeExceptionMsg;
        }
    }

}
