import { InfiniteAutocomplete } from '../../src/Components/InfiniteAutocomplete';

describe(`Input Default implementation: `, function() {
    it(`One single input should be rendered`, function() {
        var infinite = document.createElement('div');
        new InfiniteAutocomplete(infinite);
        expect(infinite.querySelectorAll('input').length).toBe(1);
    });
});
