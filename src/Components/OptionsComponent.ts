import { IResultsComponent } from '../Interfaces/IResultsComponent';

/**
 * Results component default implementation
 * @author Islam Attrash
 */
export class OptionsComponent implements IResultsComponent {
    
    listElementSelector:string = `ul`;

    constructor() {

    }


    render() {
        //You can inject template code before
        return `<${this.listElementSelector}></${this.listElementSelector}>`;
        //You can inject template code after
    }


    renderOption(option:any):string {
        return `<li>
                    ${option.text}
                </li>`;
    }
    
}
