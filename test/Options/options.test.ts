import { InfiniteAutocomplete } from '../../src/Components/InfiniteAutocomplete';

describe(`Options Default implementation`, function() {
    it(`should render an one 'ul' element to bind in the options while typing`, function() {
        var infinite = document.createElement('div');
        new InfiniteAutocomplete(infinite);
        expect(infinite.querySelectorAll('ul').length).toBe(1);
    });
});
