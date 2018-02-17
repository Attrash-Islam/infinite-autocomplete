import { InputComponent } from "../../../src/Components/InfiniteAutocomplete";

export class MissingInput extends InputComponent {

    constructor() {
        super();
    }

    public render() {
        return `<div id='not-input'></div>`;
    }

    public onInputChange(inputElement: HTMLInputElement, value: string) {
      //
    }
}
