import { IOption } from '../../../src/Interfaces/IOption';
import { OptionsComponent } from '../../../src/Components/InfiniteAutocomplete';

export class template extends OptionsComponent {

    listElementSelector = `.myList`;

    constructor() {
        super();
    }

    render() {
        return `<div>Options:</div><div class='myList'></div>`;
    }

    renderOption(option:IOption) {
        return `<div style='font-weight:bold;'>"${option.text}</div>`;
    }

}
