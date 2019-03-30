import { curry, flow, get, debounce } from 'lodash/fp';
import mainTemplate from './templates/mainTemplate';
import './templates/style.scss';
import { setInnerHTML, setInputValue, setInputChangeHandler, wrapValueInFn, buildOptions } from './utils';
import onInputChange from './onInputChange';
import { DEFAULT_FETCH_SIZE, DEFAULT_DATA } from './constants';

const InfiniteAutocomplete = curry((options, containerEle) => {

    let state = {
        fetchSize: get('fetchSize', options) || DEFAULT_FETCH_SIZE,
        page: 1,
        data: wrapValueInFn(get('data', options) || DEFAULT_DATA)
    };

    const getState = () => state;

    const setState = (newStateSlice) => {
        const oldState = state;
        state = { ...state, ...newStateSlice };
        buildOptions(oldState, state, containerEle);
    }

    const pipe = flow([
        mainTemplate,
        setInnerHTML(containerEle),
        setInputValue(
            get('value', options)
        ),
        setInputChangeHandler(
            debounce(250, onInputChange({ getState, setState}))
        )
    ]);

    pipe();
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
