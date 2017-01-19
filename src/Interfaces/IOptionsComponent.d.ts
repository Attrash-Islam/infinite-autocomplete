import { IOption } from './IOption';

/**
 * Options component interface
 * @author Islam Attrash
 */
export interface IOptionsComponent {
    /**
     * The list element tag selector
     * This value can be a tag string `ul` `div` `ol` that indicates tag name,
     * or it can be a class selector (or id selector) `.myClass`/`#myId` which is 
     * returned in @render method template
     * @default `ul`
     */
    listElementSelector:string;
    /**
     * Options component template string
     * @default `<ul></ul>` base list tag
     */
    render():string;
    /**
     * Option row template string in Options component
     * @param option
     * @default `<li> ${value} </li>`
     * @requires one base HTML Element
     */
    renderOption(option:IOption):string;
}


/**
 * Options component constructor interface
 * @author Islam Attrash
 */
export interface IOptionsComponentConstructor {
    new():IOptionsComponent;
}
