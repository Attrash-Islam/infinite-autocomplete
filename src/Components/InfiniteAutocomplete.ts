import {InputComponent as defaultInput} from './InputComponent';
import {ResultsComponent as defaultResults} from './ResultsComponent';
import { InfiniteAutocompleteOptions } from '../Interfaces/InfiniteAutocompleteOptions';
import { IInputComponent } from '../Interfaces/IInputComponent';
import { IResultsComponent } from '../Interfaces/IResultsComponent';

export class InfiniteAutocomplete {

    private element:HTMLElement;
    private inputComponent:IInputComponent;
    private resultsComponent:IResultsComponent;

    constructor(element:HTMLElement, 
                options:InfiniteAutocompleteOptions,
                inputComponent:IInputComponent = defaultInput,
                resultsComponent:IResultsComponent = defaultResults) {
        this.element = element;
        this.inputComponent = inputComponent;
        this.resultsComponent = resultsComponent;
    }

}
