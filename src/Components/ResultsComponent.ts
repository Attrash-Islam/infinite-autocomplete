import { IResultsComponent } from '../Interfaces/IResultsComponent';
import { IOptionObject } from '../Interfaces/IOption';

/**
 * Results component default implementation
 * @author Islam Attrash
 */
export class ResultsComponent implements IResultsComponent {
    
    listElementSelector:string = `ul`;

    constructor() {

    }


    render() {
        //You can inject template code before
        return `<${this.listElementSelector}></${this.listElementSelector}>`;
        //You can inject template code after
    }


    renderOption(option:IOptionObject):string {
        return `<li>
                    ${option.getText()}
                </li>`;
    }
    
}
