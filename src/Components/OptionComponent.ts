import { IOptionObject } from '../Interfaces/IOption';

/**
 * Default option component implementation
 * @default `text` for key, `value` for value
 * @author Islam Attrash
 */
export class OptionComponent implements IOptionObject {
    
    option:Object;
    private text:string;
    private value:any;

    constructor(option:Object) {
        this.option = option;
    }

    getText():string {
        return (this.option as any).text;
    }

    getValue():any {
        return (this.option as any).value;
    }

}
