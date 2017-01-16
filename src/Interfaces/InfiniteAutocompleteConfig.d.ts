import { IOptionObject } from './IOption';

/**
 * infinite-autocomplete config interface
 * @author Islam Attrash
 */
export interface InfiniteAutocompleteConfig {
    data?:Array<any>;
    onSelect?:Function;
    fetchSize?:number;
    maxHeight?:string;
    getDataFromApi?(text:string, page:number, fetchSize:number):Promise<Array<any>>;
}
