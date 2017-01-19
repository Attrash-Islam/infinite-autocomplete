/**
 * Option model interface
 * @author Islam Attrash
 */
export interface IOption {
    /**
     * Text for the option
     */
    text: string;
    /**
     * The option value
     */
    value: any;
    /**
     * Any other OPTIONAL dynamic user properties
     */
    [key: string]: any;
}
