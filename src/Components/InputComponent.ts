import { IInputComponent } from '../Interfaces/IInputComponent';

/**
 * Input component default implementation
 * @author Islam Attrash
 */
export class InputComponent implements IInputComponent {
    
    constructor() {

    }

    render() {
        return `<input type="text" class="infinite-autocomplete-input" />`;
    }

}
