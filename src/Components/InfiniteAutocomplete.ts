import { InputComponent as defaultInput } from './InputComponent';
import { ResultsComponent as defaultResults } from './ResultsComponent';
import { InfiniteAutocompleteConfig } from '../Interfaces/InfiniteAutocompleteConfig';
import { IInputComponent, IInputCompoenentConstructor } from '../Interfaces/IInputComponent';
import { IResultsComponent, IResultsComponentConstructor } from '../Interfaces/IResultsComponent';
import { InfiniteAutocompleteOption } from '../Interfaces/InfiniteAutocompleteOption';

/**
 * infinite-autocomplete component implementation
 * @author Islam Attrash
 */
export class InfiniteAutocomplete {

    private element:HTMLElement;
    private inputComponent:IInputComponent;
    private resultsComponent:IResultsComponent;
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
                inputComponent:IInputCompoenentConstructor = defaultInput,
                resultsComponent:IResultsComponentConstructor = defaultResults) {
        this.element = element;
        this.config = config;
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
        let targetValue = target.value;
        if(this.config.onInputChange) {
            this.config.onInputChange(targetValue);
        }
        if(!targetValue) {
            this.clearResultsOptions();
        } else {
            this.buildResultsOptions(targetValue);
        }
    }

    /**
     * Set the config data array
     * @param data - infinite-autocomplete result options list
     */
    setConfigData(data:Array<InfiniteAutocompleteOption>) {
        this.config.data = data;
    }


    /**
     * Link results component into the results component
     */
    linkResultsComponent() {
        let resultsWrapperEle = document.createElement(`div`);
        resultsWrapperEle.className = `infinite-autocomplete-results-wrapper`;
        resultsWrapperEle.innerHTML = this.resultsComponent.render();
        let resultsEle = <HTMLElement> resultsWrapperEle.querySelector(this.resultsComponent.listElementTag);
        resultsEle.style.display = `none`;
        this.element.appendChild(resultsWrapperEle);
    }

    /**
     * Clears the options list tag
     */
    clearResultsOptions() {
        let ulEle = <HTMLElement> this.element
            .querySelector(`.infinite-autocomplete-results-wrapper`)
            .querySelector(this.resultsComponent.listElementTag);

        ulEle.innerHTML = ``;
        ulEle.style.display = `none`;
    }


    /**
     * Build the options inner tags in options list tag based on the text passed and the data in config
     * @param text - Text to search on in the autocomplete
     */
    buildResultsOptions(text:string) {
        let optionRowElements:Array<HTMLElement> = [];
        this.config.data
            .filter(option => option.text.toLowerCase().indexOf(text.toLowerCase()) !== -1)
            .forEach((option) => {
                let li = this.resultsComponent.renderOption(option);
                (li as any).data = option.value;
                optionRowElements.push(li);
        });
    }

}
