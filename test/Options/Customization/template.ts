import { IResultsComponent } from '../../../src/Interfaces/IResultsComponent';
import { IOptionObject } from '../../../src/Interfaces/IOption';

export class template implements IResultsComponent {

    listElementSelector = `.myList`;

    constructor() {

    }

    render() {
        return `<div>Options:</div><div class='myList'></div>`;
    }

    renderOption(option:IOptionObject) {
        return `<div style='font-weight:bold;'>"${option.getText()}</div>`;
    }

}
