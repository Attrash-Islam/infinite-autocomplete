import { IInputComponent } from "../Interfaces/IInputComponent";

/**
 * Input component default implementation
 * @author Islam Attrash
 */
export class InputComponent implements IInputComponent {
  public render() {
      return `<input class="infinite-autocomplete-default-input" type="text" />`;
  }
}
