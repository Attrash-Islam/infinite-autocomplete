import { IInputCompoenentConstructor } from "./IInputComponent";
import { IOptionsComponentConstructor } from "./IOptionsComponent";
import { IOption } from "./IOption";

/**
 * infinite-autocomplete config base interface
 * @author Islam Attrash
 */
export interface InfiniteAutocompleteConfig {
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
   * on-select event output handler when choosing an option
   */
  onSelect?(selectedElement: EventTarget, selectedData: IOption);
  /**
   * on-error event output handler when exception thrown
   */
  onError?(error: Error);
  /**
   * data dynamic api source
   */
  getDataFromApi?(text: string, page: number, fetchSize: number): Promise<any[]>;
}
