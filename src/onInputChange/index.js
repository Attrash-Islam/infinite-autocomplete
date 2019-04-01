import { curry, filter, flow, get, lowerCase, includes } from 'lodash/fp';

const onInputChange = curry(({ getState, setState }, { target }) => {
    const { value: inputText } = target;
    setState({ page: 1, dismissed: false });
    
    const { page, fetchSize, data } = getState();

    const dataReturn = data(inputText, page, fetchSize);
    if (dataReturn instanceof Promise) {
        dataReturn.then((options) => {
            const { dismissed } = getState();
            if (target.value === inputText && !dismissed) {
                setState({ options });
            }
        });
    } else {
        const from = (page - 1) * fetchSize;
        const to = (fetchSize * (page - 1)) + fetchSize;

        const options = filter(
            flow([
                get('text'),
                lowerCase,
                includes(lowerCase(inputText))
            ]),
            dataReturn
        ).slice(from, to);

        setState({ options });
    }
});

export default onInputChange;
