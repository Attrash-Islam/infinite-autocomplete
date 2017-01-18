
/**
 * Results component interface
 * @author Islam Attrash
 */
export interface IResultsComponent {
    /**
     * The list element tag selector
     * This value can be a tag string `ul` `div` `ol` that indicates tag name,
     * or it can be a class selector (or id selector) `.myClass`/`#myClass` which is 
     * returned in @render method template
     * @default `ul`
     */
    listElementSelector:string;
    /**
     * Results component template string
     * @default `<ul></ul>` base list tag
     */
    render():string;
    /**
     * Option row template string in results component
     * @param option
     * @default `<li> ${value} </li>`
     * @requires one base HTML Element
     */
    renderOption(option:any):string;
}


/**
 * Results component constructor interface
 * @author Islam Attrash
 */
export interface IResultsComponentConstructor {
    new():IResultsComponent;
}
