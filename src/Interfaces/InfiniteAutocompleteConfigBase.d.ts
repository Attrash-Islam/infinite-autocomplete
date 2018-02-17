import { IInputCompoenentConstructor } from "./IInputComponent";
import { IOptionsComponentConstructor } from "./IOptionsComponent";
import { IOption } from "./IOption";

/**
 * infinite-autocomplete config base interface
 * @author Islam Attrash
 */
export interface InfiniteAutocompleteConfigBase {
  /**
   * data static source
   */
  data?: IOption[];
  /**
   * max height for the options
   */
  maxHeight?: string;
  /**
   * on-select event output handler when choosing an option
   */
  onSelect?(selectedElement: EventTarget, selectedData: IOption);
  /**
   * data dynamic api source
   */
  getDataFromApi?(text: string, page: number, fetchSize: number): Promise<any[]>;
}
