import fetchData from '../fetchData';

// Debounced function
const onInputChange = ({ getState, setState }) => () => {
    setState({ page: 1, dismissed: false });
    fetchData({ setState, getState });
};

export default onInputChange;
