import { IResultsComponent } from '../Interfaces/IResultsComponent';
import { InfiniteAutocompleteOption } from '../Interfaces/InfiniteAutocompleteOption';

/**
 * Results component default implementation
 * @author Islam Attrash
 */
export class ResultsComponent implements IResultsComponent {
    
    listElementTag:string = `ul`;

    constructor() {

    }


    render() {
        //You can inject code before
        return `<${this.listElementTag}></${this.listElementTag}>`;
        //You can inject code after
    }


    renderOption(option:InfiniteAutocompleteOption):HTMLElement {
        return document.createElement(`li`);
    }
    
}
