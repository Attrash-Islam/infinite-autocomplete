import { InputComponent } from "../../../src/Components/InfiniteAutocomplete";

export class Template extends InputComponent {

    constructor() {
        super();
    }

    public render() {
        return `
            <div id="before-input">

            </div>
            <input id="input" style="background:red;"/>
            <div id="after-input">

            </div>
        `;
    }
}
