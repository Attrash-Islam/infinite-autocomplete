import { curry, flow, get, debounce } from 'lodash/fp';
import mainTemplate from './templates/mainTemplate';
import './templates/style.scss';
import {
    setInnerHTML,
    setInputChangeHandler,
    wrapValueInFn,
    buildOptions,
    setOptionClickHandler,
    updateInputText
} from './utils';
import onInputChange from './onInputChange';
import { DEFAULT_FETCH_SIZE, DEFAULT_DATA, noop } from './constants';
import onOptionClick from './onOptionClick';

const InfiniteAutocomplete = curry((options, containerEle) => {

    let state = {};

    const getState = () => state;

    const setState = (newStateSlice) => {
        const oldState = state;
        state = { ...state, ...newStateSlice };
        buildOptions(oldState, state, containerEle);
        updateInputText(oldState, state, containerEle);
    }

    const inputChangeHandler = debounce(200, onInputChange({ getState, setState }));
    const optionClickHandler = onOptionClick({ getState, setState });

    const pipe = flow([
        mainTemplate,
        setInnerHTML(containerEle),
        setInputChangeHandler(inputChangeHandler),
        setOptionClickHandler.bind(null, optionClickHandler, containerEle)
    ]);

    pipe();

    // set initial state
    setState({
        value: get('value', options),
        fetchSize: get('fetchSize', options) || DEFAULT_FETCH_SIZE,
        onSelect: get('onSelect', options) || noop,
        page: 1,
        data: wrapValueInFn(get('data', options) || DEFAULT_DATA)
    });

    const destory = () => {
        containerEle.querySelector('input')
            .removeEventListener('input', inputChangeHandler);
        containerEle.querySelector('ul')
            .removeEventListener('click', onOptionClick);
    };

    return {
        destory
    };
});

export default InfiniteAutocomplete;

InfiniteAutocomplete({
    value: 'test',
    data: [
        { text: 'Islam Attrash', id: 1},
        { text: 'Shai Reznik', id: 2},
        { text: 'Uri Shaked', id: 3},
        { text: 'Salsabel Eawissat', id: 4},
        { text: 'test', id: 5}
    ]
}, document.getElementById('app'));
