import { InputComponent } from '../../../src/Components/InfiniteAutocomplete';

export class template extends InputComponent {
    
    constructor() {
        super();
    }

    render() {
        return `
            <div id="before-input">

            </div>
            <input id="input" style="background:red;"/>
            <div id="after-input">

            </div>
        `;
    }
}
