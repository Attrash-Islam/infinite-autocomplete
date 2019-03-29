import { curry, flow, get, debounce } from 'lodash/fp';
import template from './template';
import './template/style.scss';
import { setInnerHTML, setInputValue, setInputChangeHandler, wrapValueInFn } from './utils';
import onInputChange from './onInputChange';
import { DEFAULT_FETCH_SIZE } from './constants';

const InfiniteAutocomplete = curry((options, containerEle) => {

    let state = {
        count: get('fetchSize', options) || DEFAULT_FETCH_SIZE,
        page: 1,
        data: wrapValueInFn(get('data', options))
    };

    const setState = (newStateSlice) => {
        state = {...state, ...newStateSlice};
    }

    const pipe = flow([
        template,
        setInnerHTML(containerEle),
        setInputValue(
            get('value', options)
        ),
        setInputChangeHandler(
            debounce(250, onInputChange({ state, setState}))
        )
    ]);

    pipe();
});

export default InfiniteAutocomplete;

InfiniteAutocomplete({
    value: 'test'
}, document.getElementById('app'));
