import { IOptionsComponent } from '../../../src/Interfaces/IOptionsComponent';

export class template implements IOptionsComponent {

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
