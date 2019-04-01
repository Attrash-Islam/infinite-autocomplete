import { isNil, curry, isNumber } from 'lodash/fp';
import { getDomElementAttr } from '../utils';

const onOptionClick = curry(({ getState, setState }, { target }) => {
    const optionIdGetter = getDomElementAttr('data-id');
    const optionId = optionIdGetter(target);

    if (isNil(optionId)) { return; }

    const text = target.innerText;
    setState({ value: text });

    const { onSelect } = getState();
    onSelect({
        id: isNumber(optionId) ? parseInt(optionId, 10) : optionId,
        text
    });

    setState({ options: [], dismissed: true });
});

export default onOptionClick;
