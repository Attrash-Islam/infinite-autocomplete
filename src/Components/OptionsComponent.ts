import { IOptionsComponent } from '../Interfaces/IOptionsComponent';
import { IOption } from '../Interfaces/IOption';

/**
 * Options component default implementation
 * @author Islam Attrash
 */
export class OptionsComponent implements IOptionsComponent {
    
    listElementSelector:string = `ul`;

    constructor() {

    }


    render() {
        //You can inject template code before
        return `<${this.listElementSelector}></${this.listElementSelector}>`;
        //You can inject template code after
    }


    renderOption(option:IOption):string {
        return `<li>
                    ${option.text}
                </li>`;
    }
    
}
