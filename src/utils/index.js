import { curry, isFunction, constant } from 'lodash/fp';

export const setInnerHTML = curry((containerEle, htmlTemplate) => {
    containerEle.innerHTML = htmlTemplate;
    return containerEle;
});

export const setInputValue = curry((value, containerEle) => {
    const inputEle = containerEle.querySelector('input');
    inputEle.value = value;
    return inputEle;
});

export const setInputChangeHandler = curry((handler, inputEle) => {
    inputEle.addEventListener('input', handler);
    inputEle.addEventListener('click', handler);
    return inputEle;
});

export const wrapValueInFn = (value) => {
    if (!isFunction(value)) {
        return constant(value);
    }

    return value;
}

export const log = (value) => {
    // eslint-disable-next-line no-console
    console.log(value);
    return value;
}
