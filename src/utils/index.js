import { curry, isFunction, constant, get, flow } from 'lodash/fp';
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
    // inputEle.addEventListener('click', handler);
    return inputEle;
});

export const setOptionClickHandler = (handler, containerEle) => {
    const ulEle = containerEle.querySelector('ul');
    ulEle.addEventListener('click', handler);
};

export const wrapValueInFn = (value) => {
    if (!isFunction(value)) {
        return constant(value);
    }

    return value;
}

export const getDomElementAttr = curry((attr, ele) => ele.getAttribute(attr));

export const updateInputText = (oldState, state, containerEle) => {
    const valueGetter = get('value');
    if (valueGetter(oldState) === valueGetter(state)) { return; }
    setInputValue(valueGetter(state), containerEle);
};

export const buildOptions = (oldState, state, containerEle) => {
    const optionsGetter = get('options');
    if (optionsGetter(oldState) === optionsGetter(state)) { return; }

    const ulEle = containerEle.querySelector('ul');
    ulEle.innerHTML = flow([
        optionsGetter,
        optionsTemplate
    ])(state);

    ulEle.innerHTML ?
        ulEle.classList.remove('hidden') :
        ulEle.classList.add('hidden');
}

export const log = (value) => {
    // eslint-disable-next-line no-console
    console.log(value);
    return value;
}
