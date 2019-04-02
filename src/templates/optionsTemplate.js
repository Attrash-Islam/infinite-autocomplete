import { map, flow, join } from 'lodash/fp';

const optionsTemplate = flow([
    map(({ id, text }) => `
        <li data-id="${id}">${text}</li>
    `),
    join('')
]);

export default optionsTemplate;
