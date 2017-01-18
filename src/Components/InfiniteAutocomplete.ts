import { InputComponent as defaultInput } from './InputComponent';
import { OptionsComponent as defaultOptions } from './OptionsComponent';
import { InfiniteAutocompleteConfig } from '../Interfaces/InfiniteAutocompleteConfig';
import { IInputComponent, IInputCompoenentConstructor } from '../Interfaces/IInputComponent';
import { IResultsComponent, IResultsComponentConstructor } from '../Interfaces/IResultsComponent';
import { IInfiniteAutocomplete } from '../Interfaces/IInfiniteAutocomplete';
import { Promise as es6Promise } from 'es6-promise';
import { Utils } from '../Utils/index';
import { InfiniteAutocompleteConfigParams } from '../Interfaces/InfiniteAutocompleteConfigParams';

/**
 * infinite-autocomplete component implementation
 * @author Islam Attrash
 */
export class InfiniteAutocomplete implements IInfiniteAutocomplete {

    private element:HTMLElement;
    private inputComponent:IInputComponent;
    private optionsComponent:IResultsComponent;
    private page:number = 1;
    private config:InfiniteAutocompleteConfig;
    private preventMoreRequests:boolean = false;
    private fetchingData:boolean = false;

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
     * @param optionsComponent - Results component implementation to be injected (or default)
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
        this.appendInfiniteAutocompleteWrapperClass();
        this.linkInputComponent();
        this.linkResultsComponent();
        this.bindScrollReachBottomEvent();
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
        let inputWrapperEle = document.createElement(`div`);
        inputWrapperEle.className = `infinite-autocomplete-input-wrapper`;
        inputWrapperEle.innerHTML = this.inputComponent.render();
        let inputEle = <HTMLElement> inputWrapperEle.querySelector(`input`);
        inputEle
            .addEventListener(`input`, (inputChangeEvent) => this.onInputChange(inputChangeEvent));
        inputEle.style.width = '100%';
        this.element.appendChild(inputWrapperEle);
    }
    

    /**
     * Input component `change` event handler
     * @param inputChangeEvent - Input change event handler
     */
    private onInputChange(inputChangeEvent:Event) {
        let target = <HTMLInputElement> inputChangeEvent.currentTarget;
        if(this.inputComponent.onInputChange) {
            this.inputComponent.onInputChange(target, target.value);
        }
        this.clearResultsOptions();
        if(target.value) {
            this.buildResultsOptions(target.value);
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
     * Link results component into the results component
     */
    private linkResultsComponent() {
        let resultsWrapperEle = document.createElement(`div`);
        resultsWrapperEle.className = `infinite-autocomplete-results-wrapper`;
        resultsWrapperEle.innerHTML = this.optionsComponent.render();
        let resultsEle = <HTMLElement> resultsWrapperEle.querySelector(this.optionsComponent.listElementSelector);
        resultsEle.style.display = `none`;
        resultsEle.style.overflow = `scroll`;
        resultsEle.style.maxHeight = this.config.maxHeight || null;
        this.element.appendChild(resultsWrapperEle);
    }

    
    /**
     * Binds a scroll event handler on the results options
     */
    private bindScrollReachBottomEvent() {
        let resultsEle = this.getResultsOptionsBaseElement();
        resultsEle.addEventListener(`scroll`, this.scrollReachedBottomHandler.bind(this));
    }


    /**
     * Scroll reached bottom handler
     * @param e - Scroll event object
     */
    private scrollReachedBottomHandler(e:Event) {
        let resultsEle = <HTMLElement> e.currentTarget;
        if(!this.fetchingData && !this.preventMoreRequests) {
            if(resultsEle.scrollTop + resultsEle.clientHeight >= resultsEle.scrollHeight) {
                this.page++;
                this.buildResultsOptions(
                    this.getInputElement().value, 
                    false
                );
            }
        }
    }


    /**
     * Clears the options list tag with removing the click event handlers 
     * unbind the `scroll` event from the results options
     * (Garbage collecting)
     */
    private clearResultsOptions() {
        this.detachClickEventHandlers(
            this.getResultsOptionsBaseElement()
                .querySelectorAll(`[infinite-clickable]`)
        );
        this.resetCurrentPage();
        this.preventMoreRequests = false;

        let optionListElement = this.getResultsOptionsBaseElement();
        
        optionListElement.style.display = `none`;
        optionListElement.innerHTML = ``;
    }

    /**
     * Get results options base HTMLElement
     * @returns HTMLElement
     */
    private getResultsOptionsBaseElement():HTMLElement {
        const resultsWrapperExceptionMsg = new Error(`Couldn't get the results options base element.`);
        if(this.element) {
            let resultsWrapper = this.element
                .querySelector(`.infinite-autocomplete-results-wrapper`);
            if(resultsWrapper) {
                    return <HTMLElement> resultsWrapper
                         .querySelector(this.optionsComponent.listElementSelector);
                } else {
                    Utils.throwErrorInConsole(resultsWrapperExceptionMsg);
                    throw resultsWrapperExceptionMsg;
                }
        } else {
            Utils.throwErrorInConsole(resultsWrapperExceptionMsg);
            throw resultsWrapperExceptionMsg;
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
        this.clearResultsOptions();
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
    private async getData(text:string):es6Promise<any[]> {
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
     * @param clearPreviousData - Flag to clear previous results and override with the new one
     */
    private async buildResultsOptions(text:string, clearPreviousData:boolean = true):es6Promise<void> {
        const fetchSizeExceptionMsg = new Error(`fetchSize must be overriden with correct numeric value`);

        let optionListElement = this.getResultsOptionsBaseElement();
        if(clearPreviousData) {
            this.clearResultsOptions();
        }

        if(this.config.fetchSize) {
            let filteredResults = await this.getData(text);

            if(filteredResults.length < this.config.fetchSize) {
                //Stop fetching more chunks whenever you get less than the chunk fetch size
                this.preventMoreRequests = true;
            }

            filteredResults
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
            } else {
                optionListElement.style.display = `none`;
            }

        } else {
            Utils.throwErrorInConsole(fetchSizeExceptionMsg);
            throw fetchSizeExceptionMsg;
        }
    }

}
