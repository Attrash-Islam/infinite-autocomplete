import { curry, filter, flow, get, lowerCase, eq } from 'lodash/fp';

const onInputChange = curry(({ getState, setState }, { target }) => {
    const { value: inputText } = target;
    setState({ page: 1 });
    
    const { page, fetchSize, data } = getState();

    const dataReturn = data(inputText, fetchSize, page);
    if (dataReturn instanceof Promise) {
        dataReturn.then((options) => {
            if (target.value === inputText) {
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
                eq(lowerCase(inputText))
            ]),
            dataReturn
        ).slice(from, to);

        setState({ options });
    }
});

export default onInputChange;
