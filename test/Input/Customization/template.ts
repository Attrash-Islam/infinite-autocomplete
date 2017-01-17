import { IInputComponent } from '../../../src/Interfaces/IInputComponent';

export class template implements IInputComponent {
    
    constructor() {

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
