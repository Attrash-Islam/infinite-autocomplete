import { curry, isFunction, constant, get, flow, includes } from 'lodash/fp';
import optionsTemplate from '../templates/optionsTemplate';

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

export const buildOptions = (oldState, state, containerEle) => {
    const optionsGetter = get('options');
    if (optionsGetter(oldState) === optionsGetter(state)) { return; }

    const ulEle = containerEle.querySelector('ul');
    ulEle.innerHTML = flow([
        optionsGetter,
        optionsTemplate
    ])(state);

    ulEle.innerHTML ?
        ulEle.style.display = '' :
        ulEle.style.display = 'none';
}

export const log = (value) => {
    // eslint-disable-next-line no-console
    console.log(value);
    return value;
}
