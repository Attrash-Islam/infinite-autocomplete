import { InfiniteAutocomplete } from '../../src/Components/InfiniteAutocomplete';

describe(`Options Default implementation: `, function() {
    it(`One single option list should be rendered`, function() {
        var infinite = document.createElement('div');
        new InfiniteAutocomplete(infinite);
        expect(infinite.querySelectorAll('ul').length).toBe(1);
    });

    it(`The options list should be initialized as hidden`, function() {
        var infinite = document.createElement('div');
        new InfiniteAutocomplete(infinite);
        var optionsList = infinite.querySelector('ul');
        if(optionsList) {
            expect(optionsList.style.display)
                .toBe(`none`);
        } else {
            throw `Can't find the options list HTMLElement`;
        }
    });
});
