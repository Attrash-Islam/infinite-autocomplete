import { filter, flow, get, lowerCase, includes, pick, matches } from 'lodash/fp';

const propsSnapshot = ['page', 'fetchSize', 'value', 'dismissed'];

// Debounced function
const onInputChange = ({ getState, setState }) => () => {
    setState({ page: 1, dismissed: false });
    const { page, fetchSize, data, value: inputText } = getState();
    const preStateSnapshot = pick(propsSnapshot, getState());

    const dataReturn = data(inputText, page, fetchSize);

    if (dataReturn instanceof Promise) {
        dataReturn.then((options) => {
            const postStateSnapshot = pick(propsSnapshot, getState());
            if (matches(postStateSnapshot, preStateSnapshot)) {
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
};

export default onInputChange;
