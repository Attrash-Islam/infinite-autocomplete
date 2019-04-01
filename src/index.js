import { curry, flow, get, debounce, each, throttle } from 'lodash/fp';
import mainTemplate from './templates/mainTemplate';
import './templates/style.scss';
import {
    setInnerHTML,
    setInputChangeHandler,
    wrapValueInFn,
    buildOptions,
    setOptionClickHandler,
    updateInputText,
    setDocumentClickHandler,
    pushToHandlers,
    setOptionsScrollHandler
} from './utils';
import onInputChange from './onInputChange';
import { DEFAULT_FETCH_SIZE, DEFAULT_DATA, noop } from './constants';
import onOptionClick from './onOptionClick';
import onDocumentClick from './onDocumentClick';
import onOptionsReachedBottom from './onOptionsReachedBottom';

const InfiniteAutocomplete = curry((options, containerEle) => {
    let state = {};
    let handlers = [];

    const getState = () => state;

    const templateCreationPipeline = flow([
        mainTemplate,
        setInnerHTML(containerEle),
    ]);

    templateCreationPipeline();

    const inputEle = containerEle.querySelector('input');
    const ulEle = containerEle.querySelector('ul');

    const setState = (newStateSlice) => {
        const oldState = state;
        state = { ...state, ...newStateSlice };
        buildOptions(oldState, state, ulEle);
        updateInputText(oldState, state, inputEle);
    }

    const debouncedInputChangeHandler = debounce(200, onInputChange({ getState, setState }));
    const inputChangeHandler = ({ target }) => setState({ value: target.value });
    const optionClickHandler = onOptionClick({ getState, setState });
    const optionsScrollHandler = throttle(200, onOptionsReachedBottom({ getState, setState }));
    const onDocumentClickHandler = onDocumentClick(containerEle, { getState, setState });

    const eventsPipeline = flow([
        setInputChangeHandler(inputChangeHandler, inputEle),
        pushToHandlers(handlers),
        setInputChangeHandler(debouncedInputChangeHandler, inputEle),
        pushToHandlers(handlers),
        setOptionClickHandler(optionClickHandler, ulEle),
        pushToHandlers(handlers),
        setDocumentClickHandler(onDocumentClickHandler),
        pushToHandlers(handlers),
        setOptionsScrollHandler(optionsScrollHandler, ulEle),
        pushToHandlers(handlers)
    ]);

    eventsPipeline();

    // set initial state
    setState({
        value: get('value', options),
        fetchSize: get('fetchSize', options) || DEFAULT_FETCH_SIZE,
        onSelect: get('onSelect', options) || noop,
        page: 1,
        data: wrapValueInFn(get('data', options) || DEFAULT_DATA),
        options: []
    });

    const destory = () => {
        each((h) => h(), handlers);
        containerEle.innerHTML = '';
    };

    return {
        destory
    };
});

export default InfiniteAutocomplete;
