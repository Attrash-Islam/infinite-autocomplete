import { InfiniteAutocompleteConfig } from './InfiniteAutocompleteConfig';

/**
 * InfiniteAutocomplete interface
 * @author Islam Attrash
 */
export interface IInfiniteAutocomplete {
    /**
     * Update configuration on runtime
     * @param config - New infinite autocomplete configuration
     */
    setConfig(config:InfiniteAutocompleteConfig);
    /**
     * Destory the plugin and unbind all the DOM events
     */
    destroy();
}
