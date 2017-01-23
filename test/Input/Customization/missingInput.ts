import { InputComponent } from '../../../src/Components/InfiniteAutocomplete';

export class missingInput extends InputComponent {
    
    constructor() {
        super();
    }

    render() {
        return `<div id='not-input'></div>`;
    }

    onInputChange(inputElement:HTMLInputElement, value:string) {
        
    }
}
