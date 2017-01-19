import { Promise as es6Promise } from 'es6-promise';
import { IInputCompoenentConstructor } from './IInputComponent';
import { IResultsComponentConstructor } from './IOptionsComponent';
import { InfiniteAutocompleteConfigBase } from './InfiniteAutocompleteConfigBase';

/**
 * infinite-autocomplete config interface
 * @author Islam Attrash
 */
export interface InfiniteAutocompleteConfig extends InfiniteAutocompleteConfigBase {
    /**
     * Chunk fetch size
     */
    fetchSize:number;
    /**
     * Customized input class to override the default input
     */
    customizedInput:IInputCompoenentConstructor;
    /**
     * Customized options (results) class to override the default input
     */
    customizedOptions:IResultsComponentConstructor;
}
