import { IInputComponent } from '../../../src/Interfaces/IInputComponent';

export class missingInput implements IInputComponent {
    
    constructor() {

    }

    render() {
        return `<div id='not-input'></div>`;
    }

    onInputChange(inputElement:HTMLInputElement, value:string) {
        
    }
}
