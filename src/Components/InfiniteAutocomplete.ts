import { InputComponent as defaultInput } from './InputComponent';
import { ResultsComponent as defaultResults } from './ResultsComponent';
import { OptionComponent as defaultOption } from './OptionComponent';
import { InfiniteAutocompleteConfig } from '../Interfaces/InfiniteAutocompleteConfig';
import { IInputComponent, IInputCompoenentConstructor } from '../Interfaces/IInputComponent';
import { IResultsComponent, IResultsComponentConstructor } from '../Interfaces/IResultsComponent';
import { IOptionObjectConstructor, IOptionObject } from '../Interfaces/IOption';
import { IInfiniteAutocomplete } from '../Interfaces/IInfiniteAutocomplete';

/**
 * infinite-autocomplete component implementation
 * @author Islam Attrash
 */
export class InfiniteAutocomplete implements IInfiniteAutocomplete {

    private element:HTMLElement;
    private inputComponent:IInputComponent;
    private resultsComponent:IResultsComponent;
    private optionComponent:IOptionObjectConstructor;
    private page:number = 1;
    private config:InfiniteAutocompleteConfig;
    private preventMoreRequests:boolean = false;
    private fetchingData:boolean = false;
    private defaultConfig:InfiniteAutocompleteConfig = {
        data: [],
        fetchSize: 10,
        maxHeight: '160px'
    };

    /**
     * constructor for InfiniteAutocomplete class
     * Enabling pluggable system linked with Interfaces only
     * @param element - HTMLElement to append the infinite-autocomplete in it
     * @param config - InfiniteAutocomplete config options
     * @param optionComponent - Option component implementation to be injected (or default)
     * @param inputComponent - Input component implementation to be injected (or default)
     * @param resultsComponent - Results component implementation to be injected (or default)
     */
    constructor(element:HTMLElement, 
                config:InfiniteAutocompleteConfig,
                optionComponent:IOptionObjectConstructor = defaultOption,
                inputComponent:IInputCompoenentConstructor = defaultInput,
                resultsComponent:IResultsComponentConstructor = defaultResults) {
        this.element = element;
        this.config = { ...this.defaultConfig , ...config };
        this.optionComponent = optionComponent;
        this.inputComponent = new inputComponent();
        this.resultsComponent = new resultsComponent();
        this.init();
    }

    /**
     * Initialize hook that get executed immediatly after using the infinite-autocomplete component
     */
    init() {
        this.appendInfiniteAutocompleteWrapperClass();
        this.linkInputComponent();
        this.linkResultsComponent();
        this.bindScrollReachBottomEvent();
    }


    /**
     * Append infinite autocomplete main wrapper className
     */
    appendInfiniteAutocompleteWrapperClass() {
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
    resetCurrentPage() {
        this.page = 1;
    }

    /**
     * Link input component into the input wrapper
     */
    linkInputComponent() {
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
    onInputChange(inputChangeEvent:Event) {
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
    setConfig(config:InfiniteAutocompleteConfig) {
        this.config = {...this.config, ...config};
    }


    /**
     * Link results component into the results component
     */
    linkResultsComponent() {
        let resultsWrapperEle = document.createElement(`div`);
        resultsWrapperEle.className = `infinite-autocomplete-results-wrapper`;
        resultsWrapperEle.innerHTML = this.resultsComponent.render();
        let resultsEle = <HTMLElement> resultsWrapperEle.querySelector(this.resultsComponent.listElementSelector);
        resultsEle.style.display = `none`;
        resultsEle.style.overflow = `scroll`;
        resultsEle.style.maxHeight = this.config.maxHeight || null;
        this.element.appendChild(resultsWrapperEle);
    }


    /**
     * Binds a scroll event handler on the results options
     */
    bindScrollReachBottomEvent() {
        let resultsEle = this.getResultsOptionsBaseElement();
        resultsEle.addEventListener(`scroll`, (e) => {
            if(!this.fetchingData && !this.preventMoreRequests) {
                if(resultsEle.scrollTop + resultsEle.clientHeight >= resultsEle.scrollHeight) {
                    this.page++;
                    this.buildResultsOptions(
                        this.getInputElement().value, 
                        false
                    );
                }
            }
        });
    }


    /**
     * Clears the options list tag with removing the click event handlers (Garbage collecting)
     */
    clearResultsOptions() {
        this.detachClickEventHandlers(
            this.getResultsOptionsBaseElement()
                .querySelectorAll(`[infinite-clickable]`)
        );
        this.resetCurrentPage();

        let optionListElement = this.getResultsOptionsBaseElement();
        
        optionListElement.style.display = `none`;
        optionListElement.innerHTML = ``;
    }

    /**
     * Get results options base HTMLElement
     * @returns HTMLElement
     */
    getResultsOptionsBaseElement():HTMLElement {
        const resultsWrapperErrorMsg = `Couldn't get the results options base element. Issue a bug @ https://github.com/Attrash-Islam/infinite-autocomplete`;
        if(this.element) {
            let resultsWrapper = this.element
                .querySelector(`.infinite-autocomplete-results-wrapper`);
            if(resultsWrapper) {
                    return <HTMLElement> resultsWrapper
                         .querySelector(this.resultsComponent.listElementSelector);
                } else {
                    throw resultsWrapperErrorMsg;
                }
        } else {
            throw resultsWrapperErrorMsg;
        }
        
    }


    /**
     * Detaching the event handler over the option elements
     */
    detachClickEventHandlers(elements:NodeListOf<Element>) {
        for( let i = 0; i < elements.length; i++) {
            elements[i].removeEventListener(`click`, (event:MouseEvent) => this.onOptionClickEvent(event));
        }
    }

    /**
     * Option click event handler
     * @param clickEvent
     */
    onOptionClickEvent(clickEvent:MouseEvent) {
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
    getInputElement():HTMLInputElement {
        const inputElementErrorMsg = `Couldn't get the input element. Issue a bug @ https://github.com/Attrash-Islam/infinite-autocomplete`;
        if(this.element) {
            let inputWrapper = this.element
                .querySelector(`.infinite-autocomplete-input-wrapper`);
            if(inputWrapper) {
                return <HTMLInputElement> inputWrapper
                    .querySelector(`input`);
            } else {
                throw inputElementErrorMsg;
            }
        } else {
            throw inputElementErrorMsg;
        }
    }


    /**
     * Set input shown text
     * @param text
     */
    setInput(text:string) {
        this.getInputElement()
            .value = text;
    }

    /**
     * Get data based on text, page and fetchSize
     * @param text
     * @param page
     * @param fetchSize
     */
    async getData(text:string, page:number, fetchSize:number):Promise<IOptionObject[]> {
        this.fetchingData = true;
        const dataSourceMissingException = `You must pass data or getDataFromApi function via config`;
        if(this.config.data) {
            let from = (page - 1) * fetchSize;
            let to = (fetchSize * (page - 1)) + fetchSize;

            this.fetchingData = false;

            return this.config.data
                .map(option => new this.optionComponent(option))
                .filter(option => option.getText().toLowerCase().indexOf(text.toLowerCase()) !== -1)
                .slice(from, to);
        } else if(this.config.getDataFromApi) {
            let apiData = await this.config.getDataFromApi(text, page, fetchSize);
            this.fetchingData = false;
            return apiData.map(option => new this.optionComponent(option));
        } else {
            this.fetchingData = false;
            throw dataSourceMissingException;
        }
    }


    /**
     * Build the options inner tags in options list tag based on the text passed and the data in config
     * @param text - Text to search on in the autocomplete
     * @param clearPreviousData - Flag to clear previous results and override with the new one
     */
    async buildResultsOptions(text:string, clearPreviousData:boolean = true) {
        console.log(`called build with${clearPreviousData ? '' : 'out'} clearing, with text: ${text}, and page: ${this.page}`);
        const fetchSizeException:string = `fetchSize must be overriden with correct numeric value`;

        let optionListElement = this.getResultsOptionsBaseElement();
        if(clearPreviousData) {
            this.clearResultsOptions();
        }


        if(this.config.fetchSize) {

            let filteredResults = await this.getData(text, this.page, this.config.fetchSize);

            if(filteredResults.length < this.config.fetchSize) {
                //Stop fetching whenever you get less than the chunk fetch size
                this.preventMoreRequests = true;
            }

            filteredResults
                .forEach((option) => {
                        let optionElementTemplate = this.resultsComponent.renderOption(option);
                        let tempElement = document.createElement(`div`);
                        tempElement.innerHTML = optionElementTemplate;
                        let optionElement = tempElement.childNodes[0];
                        (optionElement as any).data = { text: option.getText(), value: option.getValue() };
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
            throw fetchSizeException;
        }
    }

}
