import { curry, isFunction, constant, get, flow } from 'lodash/fp';
import optionsTemplate from '../templates/optionsTemplate';
import { STYLES_ID } from '../constants';

export const setInnerHTML = curry((containerEle, htmlTemplate) => {
    containerEle.innerHTML = htmlTemplate;
});

export const setInputValue = curry((value, inputEle) => {
    if (inputEle.value !== value) {
        inputEle.value = value;
    }

    return inputEle;
});

export const applyStyles = (styles) => {
    const isMainWrapperStyleApplied = document.head.querySelector(`#${STYLES_ID}`);
    if (!isMainWrapperStyleApplied) {
      const mainWrapperStyle = document.createElement('style');
      mainWrapperStyle.id = STYLES_ID;
      mainWrapperStyle.innerHTML = styles;
      document.head.appendChild(mainWrapperStyle);
    }
};

export const setInputChangeHandler = (handler, inputEle) => () => {
    inputEle.addEventListener('input', handler);

    return () => {
        inputEle.removeEventListener('input', handler);
    }
};

const setOptionEventHandler = curry((event, handler, ulEle) => () => {
    ulEle.addEventListener(event, handler);

    return () => {
        ulEle.removeEventListener(event, handler);
    }
});

export const setOptionClickHandler = setOptionEventHandler('click');

export const setOptionsScrollHandler = setOptionEventHandler('scroll');

export const setDocumentClickHandler = (handler) => () => {
    document.addEventListener('click', handler);

    return () => {
        document.removeEventListener('click', handler);
    }
};

export const pushToHandlers = curry((handlers, handler) => {
    handlers.push(handler);
});

export const wrapValueInFn = (value) => {
    if (!isFunction(value)) {
        return constant(value);
    }

    return value;
}

export const getDomElementAttr = curry((attr, ele) => ele.getAttribute(attr));

export const updateInputText = (oldState, state, inputEle) => {
    const valueGetter = get('value');
    if (valueGetter(oldState) === valueGetter(state)) { return; }
    setInputValue(valueGetter(state), inputEle);
};

export const buildOptions = (oldState, state, ulEle) => {
    const optionsGetter = get('options');
    if (optionsGetter(oldState) === optionsGetter(state)) { return; }

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
