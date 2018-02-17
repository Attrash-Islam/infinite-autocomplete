import { InputComponent } from "../../../src/Components/InfiniteAutocomplete";

export class InputHandlers extends InputComponent {

    constructor() {
        super();
    }

    public render() {
        return `<input />`;
    }

    public onInputChange(inputElement: HTMLInputElement, value: string) {
      //
    }
}
