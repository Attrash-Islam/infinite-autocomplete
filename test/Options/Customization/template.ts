import { IOptionsComponent } from '../../../src/Interfaces/IOptionsComponent';
import { IOption } from '../../../src/Interfaces/IOption';

export class template implements IOptionsComponent {

    listElementSelector = `.myList`;

    constructor() {

    }

    render() {
        return `<div>Options:</div><div class='myList'></div>`;
    }

    renderOption(option:IOption) {
        return `<div style='font-weight:bold;'>"${option.text}</div>`;
    }

}
