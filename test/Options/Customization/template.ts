import { IResultsComponent } from '../../../src/Interfaces/IResultsComponent';

export class template implements IResultsComponent {

    listElementSelector = `.myList`;

    constructor() {

    }

    render() {
        return `<div>Options:</div><div class='myList'></div>`;
    }

    renderOption(option:any) {
        return `<div style='font-weight:bold;'>"${option.text}</div>`;
    }

}
