import { curry } from 'lodash/fp';

const checkIfClickedOutSideContainer = (containerEle, element) => {
    if (!element) {
        return true;
    } else if (element === containerEle) {
        return false;
    } else {
        return checkIfClickedOutSideContainer(containerEle, element.parentNode);
    }
}

const onDocumentClick = curry((containerEle, { getState, setState }, { target }) => {
    const { options } = getState();
    if (options.length && checkIfClickedOutSideContainer(containerEle, target)) {
        setState({ options: [] });
    }
});

export default onDocumentClick;
