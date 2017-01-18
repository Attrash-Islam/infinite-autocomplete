import { Promise as es6Promise } from 'es6-promise';

/**
 * infinite-autocomplete config interface
 * @author Islam Attrash
 */
export interface InfiniteAutocompleteConfig {
    /**
     * data static source
     */
    data?:Array<any>;
    /**
     * on-select event output handler when choosing an option
     */
    onSelect?:Function;
    /**
     * fetching x of data for every scroll bottom (or new input)
     */
    fetchSize?:number;
    /**
     * max height for the results options
     */
    maxHeight?:string;
    /**
     * data dynamic api source
     */
    getDataFromApi?(text:string, page:number, fetchSize:number):es6Promise<Array<any>>;
}
