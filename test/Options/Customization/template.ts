import { IOption } from "../../../src/Interfaces/IOption";
import { OptionsComponent } from "../../../src/Components/InfiniteAutocomplete";

export class Template extends OptionsComponent {

    public listElementSelector = `.myList`;

    constructor() {
        super();
    }

    public render() {
        return `<div>Options:</div><div class='myList'></div>`;
    }

    public renderOption(option: IOption) {
        return `<div style='font-weight:bold;'>"${option.text}</div>`;
    }

}
