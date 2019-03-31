import { isNil, curry } from 'lodash/fp';
import { getDomElementAttr } from '../utils';

const onOptionClick = curry(({ getState, setState }, { target }) => {
    const optionIdGetter = getDomElementAttr('data-option-id');
    const optionId = optionIdGetter(target);

    if (isNil(optionId)) { return; }

    const text = target.innerText;
    setState({ value: text });

    const { onSelect } = getState();
    onSelect({
        id: optionId,
        text
    });

    setState({ options: [] });
});

export default onOptionClick;
