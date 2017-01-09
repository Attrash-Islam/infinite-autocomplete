import { InfiniteAutocompleteOption } from './InfiniteAutocompleteOption';

/**
 * infinite-autocomplete config interface
 * @author Islam Attrash
 */
export interface InfiniteAutocompleteConfig {
    data?:Array<InfiniteAutocompleteOption>;
    onSelect?:Function;
    onInputChange?:Function;
    fetchSize?:number;
}
