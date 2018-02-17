import { IOptionsComponent } from "../Interfaces/IOptionsComponent";
import { IOption } from "../Interfaces/IOption";

/**
 * Options component default implementation
 * @author Islam Attrash
 */
export class OptionsComponent implements IOptionsComponent {
  public listElementSelector: string = `ul`;

  public render() {
    return `<${this.listElementSelector} class="infinite-autocomplete-default-options"></${this.listElementSelector}>`;
  }

  public renderOption(option: IOption): string {
    return `<li>
                ${option.text}
            </li>`;
  }

}
