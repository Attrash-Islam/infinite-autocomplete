import { IInputCompoenentConstructor } from "./IInputComponent";
import { IOptionsComponentConstructor } from "./IOptionsComponent";
import { InfiniteAutocompleteConfigBase } from "./InfiniteAutocompleteConfigBase";

/**
 * infinite-autocomplete config params interface
 * @author Islam Attrash
 */
export interface InfiniteAutocompleteConfigParams extends InfiniteAutocompleteConfigBase {
    /**
     * Chunk fetch size
     */
    fetchSize?: number;
    /**
     * Customized input class to override the default input
     */
    customizedInput?: IInputCompoenentConstructor;
    /**
     * Customized options class to override the default input
     */
    customizedOptions?: IOptionsComponentConstructor;
}
