import { IInputComponent } from '../../../src/Interfaces/IInputComponent';

export class inputHandlers implements IInputComponent {
    
    constructor() {

    }

    render() {
        return `<input />`;
    }

    onInputChange(inputElement:HTMLInputElement, value:string) {
        
    }
}
