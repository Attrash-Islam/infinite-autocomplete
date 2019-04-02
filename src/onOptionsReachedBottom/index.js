import { curry } from 'lodash/fp';
import fetchData from '../fetchData';

const onOptionsReachedBottom = curry(({ getState, setState }, { target }) => {
    const { isLoading, page } = getState();
    if (!isLoading && target.scrollTop + target.clientHeight >= target.scrollHeight - 5) {
        setState({ page: page + 1 });
        fetchData({ setState, getState });
    }
});

export default onOptionsReachedBottom;
