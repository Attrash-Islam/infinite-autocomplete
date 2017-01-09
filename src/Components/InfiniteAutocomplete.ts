import { InputComponent as defaultInput } from './InputComponent';
import { ResultsComponent as defaultResults } from './ResultsComponent';
import { InfiniteAutocompleteConfig } from '../Interfaces/InfiniteAutocompleteConfig';
import { IInputComponent, IInputCompoenentConstructor } from '../Interfaces/IInputComponent';
import { IResultsComponent, IResultsComponentConstructor } from '../Interfaces/IResultsComponent';

/**
 * infinite-autocomplete component implementation
 * @author Islam Attrash
 */
export class InfiniteAutocomplete {

    private element:HTMLElement;
    private inputComponent:IInputComponent;
    private resultsComponent:IResultsComponent;
    private config:InfiniteAutocompleteConfig;

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
    }

    /**
     * Link input component into the input wrapper
     */
    linkInputComponent() {
        let inputEle = document.createElement(`div`);
        inputEle.className = `infinite-autocomplete-input-wrapper`;
        inputEle.innerHTML = this.inputComponent.render();
        this.element.appendChild(inputEle);
    }

}
