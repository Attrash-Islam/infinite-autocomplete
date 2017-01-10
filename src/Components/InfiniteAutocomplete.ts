import { InputComponent as defaultInput } from './InputComponent';
import { ResultsComponent as defaultResults } from './ResultsComponent';
import { OptionComponent as defaultOption } from './OptionComponent';
import { InfiniteAutocompleteConfig } from '../Interfaces/InfiniteAutocompleteConfig';
import { IInputComponent, IInputCompoenentConstructor } from '../Interfaces/IInputComponent';
import { IResultsComponent, IResultsComponentConstructor } from '../Interfaces/IResultsComponent';
import { IOptionObjectConstructor, IOptionObject } from '../Interfaces/IOption';

/**
 * infinite-autocomplete component implementation
 * @author Islam Attrash
 */
export class InfiniteAutocomplete {

    private element:HTMLElement;
    private inputComponent:IInputComponent;
    private resultsComponent:IResultsComponent;
    private optionComponent:IOptionObjectConstructor;
    private config:InfiniteAutocompleteConfig = {
        data: [],
        fetchSize: 10
    };

    /**
     * constructor for InfiniteAutocomplete class
     * Enabling pluggable system linked with Interfaces only
     * @param element - HTMLElement to append the infinite-autocomplete in it
     * @param config - InfiniteAutocomplete config options
     * @param inputComponent - Input component implementation to be injected (or default)
     * @param resultsComponent - Results component implementation to be injected (or default)
     */
    constructor(element:HTMLElement, 
                config:InfiniteAutocompleteConfig,
                optionComponent:IOptionObjectConstructor = defaultOption,
                inputComponent:IInputCompoenentConstructor = defaultInput,
                resultsComponent:IResultsComponentConstructor = defaultResults) {
        this.element = element;
        this.config = config;
        this.optionComponent = optionComponent;
        this.inputComponent = new inputComponent();
        this.resultsComponent = new resultsComponent();
        this.init();
    }

    /**
     * Initialize hook that get executed immediatly after using the infinite-autocomplete component
     */
    init() {
        this.linkInputComponent();
        this.linkResultsComponent();
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
        this.element.appendChild(inputWrapperEle);
    }
    

    /**
     * Input component `change` event handler
     */
    onInputChange(inputChangeEvent:Event) {
        let target = <HTMLInputElement> inputChangeEvent.currentTarget;
        if(this.inputComponent.onInputChange) {
            this.inputComponent.onInputChange(target, target.value);
        }
        if(!target.value) {
            this.clearResultsOptions();
        } else {
            this.buildResultsOptions(target.value);
        }
    }

    /**
     * Set the config data array
     * @param data - infinite-autocomplete result options list
     */
    setConfigData(data:Array<IOptionObject>) {
        this.config.data = data;
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
        this.element.appendChild(resultsWrapperEle);
    }

    /**
     * Clears the options list tag
     */
    clearResultsOptions() {
        let optionListElement = <HTMLElement> this.element
            .querySelector(`.infinite-autocomplete-results-wrapper`)
            .querySelector(this.resultsComponent.listElementSelector);
        
        optionListElement.style.display = `none`;
        optionListElement.innerHTML = ``;
    }


    /**
     * Build the options inner tags in options list tag based on the text passed and the data in config
     * @param text - Text to search on in the autocomplete
     */
    buildResultsOptions(text:string) {
        let optionListElement = <HTMLElement> this.element
            .querySelector(`.infinite-autocomplete-results-wrapper`)
            .querySelector(this.resultsComponent.listElementSelector);

        optionListElement.innerHTML = ``;

        this.config.data
            .map(option => new this.optionComponent(option))
            .filter(option => option.getText().toLowerCase().indexOf(text.toLowerCase()) !== -1)
            .forEach((option) => {
                let optionElementTemplate = this.resultsComponent.renderOption(option);
                let tempElement = document.createElement(`div`);
                tempElement.innerHTML = optionElementTemplate;
                let optionElement = tempElement.childNodes[0];
                (optionElement as any).data = option.getValue();
                optionListElement.appendChild(optionElement);
        });
        
        if(optionListElement.innerHTML !== ``) {
            optionListElement.style.display = ``;
        } else {
            optionListElement.style.display = `none`;
        }

    }

}
