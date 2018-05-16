import { IInputCompoenentConstructor } from "./IInputComponent";
import { IOptionsComponentConstructor } from "./IOptionsComponent";
import { IOption } from "./IOption";

/**
 * infinite-autocomplete config base interface
 * @author Islam Attrash
 */
export interface InfiniteAutocompleteConfig {
  /**
   * current value
   */
  value?: string;
  /**
   * data static source
   */
  data?: IOption[];
  /**
   * max height for the options
   */
  maxHeight?: string;
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
  /**
   * on-loading-state-change event output handler when choosing an option
   */
  onLoadingStateChange?(loadingState: boolean);
  /**
   * on-select event output handler when choosing an option
   */
  onSelect?(selectedElement: EventTarget | null, selectedData: IOption);
  /**
   * on-error event output handler when exception thrown
   */
  onError?(error: Error);
  /**
   * data dynamic api source
   */
  getDataFromApi?(text: string, page: number, fetchSize: number): Promise<any[]>;
}
