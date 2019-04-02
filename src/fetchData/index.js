import { filter, flow, get, lowerCase, includes, pick, matches, concat } from 'lodash/fp';

const propsSnapshot = ['page', 'fetchSize', 'value', 'dismissed'];

const fetchData = ({ getState, setState }) => {
    const { page, fetchSize, data, value: inputText } = getState();
    const preStateSnapshot = pick(propsSnapshot, getState());

    setState({ isLoading: true });
    const dataReturn = data(inputText, page, fetchSize);

    if (dataReturn instanceof Promise) {
        dataReturn.then((options) => {
            setState({ isLoading: false });
            const postStateSnapshot = pick(propsSnapshot, getState());
            const { options: currentOptions, page } = getState();
            if (matches(postStateSnapshot, preStateSnapshot)) {
                page === 1 ?
                    setState({ options }) :
                    setState({ options: concat(currentOptions, options)});
            }
        })
        .catch(() => setState({ isLoading: false }));
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

export default fetchData;
