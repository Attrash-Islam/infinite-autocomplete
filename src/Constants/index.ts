
/** Hovered state when navigation through upArrow/downArrow while options is open */
export const HOVERED = "hovered";

/**
 * Key down states (keyCodes)
 */
export const KEY_PRESS_STATES = {
    UP: 38,
    DOWN: 40,
    ENTER: 13,
};

export const MissingInputElementInInputComponentExceptionMsg =
  new Error(`Customized input should contain input element <input />`);

export const optionsWrapperExceptionMsg = new Error(`Couldn't get the options base element.`);

export const inputElementExceptionMsg = new Error(`Couldn't get the input element.`);

export const dataSourceMissingExceptionMsg = new Error (`You must pass data or getDataFromApi function via config`);

export const fetchSizeExceptionMsg = new Error(`fetchSize must be overriden with correct numeric value`);
