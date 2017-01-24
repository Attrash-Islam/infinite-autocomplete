import { Promise as es6Promise } from 'es6-promise';
export { InfiniteAutocomplete };
export { InputComponent, OptionsComponent };

///////////////////////////////////////////////////////////////////////////////
// infAutocomplete module (infinite-autocomplete)
///////////////////////////////////////////////////////////////////////////////

/**
 * InfiniteAutocomplete interface
 * @author Islam Attrash
 */
declare class InfiniteAutocomplete {
    /**
     * constructor for InfiniteAutocomplete class
     * Enabling pluggable system linked with Interfaces only
     * @param element - HTMLElement to append the infinite-autocomplete in it
     * @param config - InfiniteAutocomplete config options
     * @param optionComponent - Option component implementation to be injected (or default)
     * @param inputComponent - Input component implementation to be injected (or default)
     * @param optionsComponent - Options component implementation to be injected (or default)
     */
    constructor(element:HTMLElement, config?:InfiniteAutocompleteConfigParams);
    /**
     * Update configuration on runtime
     * @param config - New infinite autocomplete configuration
     */
    setConfig(config:InfiniteAutocompleteConfigParams);
}


/**
 * infinite-autocomplete config interface
 * @author Islam Attrash
 */
interface InfiniteAutocompleteConfig extends InfiniteAutocompleteConfigBase {
    /**
     * Chunk fetch size
     */
    fetchSize:number;
    /**
     * Customized input class to override the default input
     */
    customizedInput:IInputCompoenentConstructor;
    /**
     * Customized options class to override the default input
     */
    customizedOptions:IOptionsComponentConstructor;
}

/**
 * Input component constructor interface
 * @author Islam Attrash
 */
interface IInputCompoenentConstructor {
    new():IInputComponent;
}

/**
 * Input component interface
 * @author Islam Attrash
 */
interface IInputComponent {
    /**
     * Input component template string
     * @default `<input />`
     */
    render():string;
    /**
     * onInputChange event handler
     * @param inputElement - HTMLInputElement
     * @param value - input text value
     */
    onInputChange?(inputElement:HTMLInputElement, value:string);
}

/**
 * Default input component implementation
 */
declare class InputComponent implements IInputComponent {
    render():string;
}


/**
 * Options component constructor interface
 * @author Islam Attrash
 */
interface IOptionsComponentConstructor {
    new():IOptionsComponent;
}


/**
 * infinite-autocomplete config base interface
 * @author Islam Attrash
 */
interface InfiniteAutocompleteConfigBase {
    /**
     * data static source
     */
    data?:Array<IOption>;
    /**
     * on-select event output handler when choosing an option
     */
    onSelect?(selectedElement:EventTarget, selectedData:IOption);
    /**
     * max height for the options
     */
    maxHeight?:string;
    /**
     * data dynamic api source
     */
    getDataFromApi?(text:string, page:number, fetchSize:number):es6Promise<Array<any>>;
}

/**
 * infinite-autocomplete config params interface
 * @author Islam Attrash
 */
interface InfiniteAutocompleteConfigParams extends InfiniteAutocompleteConfigBase {
    /**
     * Chunk fetch size
     */
    fetchSize?:number,
    /**
     * Customized input class to override the default input
     */
    customizedInput?:IInputCompoenentConstructor;
    /**
     * Customized options class to override the default input
     */
    customizedOptions?:IOptionsComponentConstructor;
}

interface IInputComponent {
    /**
     * Input component template string
     * @default `<input />`
     */
    render():string;
    /**
     * onInputChange event handler
     * @param inputElement - HTMLInputElement
     * @param value - input text value
     */
    onInputChange?(inputElement:HTMLInputElement, value:string);
}


/**
 * Option model interface
 * @author Islam Attrash
 */
interface IOption {
    /**
     * Text for the option
     */
    text: string;
    /**
     * The option value
     */
    value: any;
    /**
     * Any other OPTIONAL dynamic user properties
     */
    [key: string]: any;
}

/**
 * Options component interface
 * @author Islam Attrash
 */
interface IOptionsComponent {
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
 * Default options component
 */
declare class OptionsComponent implements IOptionsComponent {
    listElementSelector:string;
    render():string;
    renderOption(option:IOption):string;
}
