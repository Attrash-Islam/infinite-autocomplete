
/**
 * infinite-autocomplete option object interface
 * @author Islam Attrash
 */
export interface IOptionObject {
    option:any;
    getText():string;
    getValue():any;
}

/**
 * infinite-autocomplete option object constructor interface
 * @author Islam Attrash
 */
export interface IOptionObjectConstructor {
    new(option:any):IOptionObject
}
