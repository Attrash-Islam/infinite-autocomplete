import { InfiniteAutocomplete } from '../../src/Components/InfiniteAutocomplete';

describe(`Input Default implementation`, function() {
    it(`should render an one single input element`, function() {
        var infinite = document.createElement('div');
        new InfiniteAutocomplete(infinite);
        expect(infinite.querySelectorAll('input').length).toBe(1);
    });
});
