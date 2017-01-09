
/**
 * Input component interface
 * @author Islam Attrash
 */
export interface IInputComponent {
    render():string;
}

/**
 * Input component constructor interface
 * @author Islam Attrash
 */
export interface IInputCompoenentConstructor {
    new ():IInputComponent;
}
