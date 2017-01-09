import { InfiniteAutocompleteOption } from './InfiniteAutocompleteOption';

/**
 * Results component interface
 * @author Islam Attrash
 */
export interface IResultsComponent {
    /**
     * The list element tag
     * @default `ul`
     */
    listElementTag:string;
    /**
     * Results component template string
     * @default `<ul></ul>` base list tag
     */
    render():string;
    /**
     * Option row template string in results component
     * @default `<li> ${value} </li>`
     */
    renderOption(option:InfiniteAutocompleteOption):HTMLElement;
}


/**
 * Results component constructor interface
 * @author Islam Attrash
 */
export interface IResultsComponentConstructor {
    new():IResultsComponent;
}
