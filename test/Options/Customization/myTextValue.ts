import { IOptionObject } from '../../../src/Interfaces/IOption';

export class myTextValue implements IOptionObject {

    option;
    constructor(option) {
        this.option = option;
    }

    getText():string {
        return this.option.mySpecialText;
    }

    getValue():string {
        return this.option.mySpecialValue;
    }

}
