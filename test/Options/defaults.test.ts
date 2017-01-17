import { InfiniteAutocomplete } from '../../src/Components/InfiniteAutocomplete';
import { TestUtils } from '../Utils/index';
import { Promise as es6Promise } from 'es6-promise';

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

    
    describe(`Options results based on static data`, function() {

        beforeEach(function() {
            //Default jasmine timeout
            jasmine.DEFAULT_TIMEOUT_INTERVAL = 5000;
        });
        
        it(`should show the items in the search`, async function(done):es6Promise<void> {
            var infinite = document.createElement('div');
            var iniElm = new InfiniteAutocomplete(infinite);

            iniElm.setConfig({data: [
                { text: 'first', value: 1},
                { text: 'second', value: 2},
                { text: 'theird', value: 3},
                { text: 'fourth', value: 4},
                { text: 'fivth', value: 5}
            ]});

            var input = <HTMLInputElement> infinite.querySelector(`input`);
            TestUtils.typeLetter(input, 'f');
            await TestUtils.sleep(0);
            var options = <NodeListOf<HTMLElement>> infinite.querySelectorAll(`li`);
            if(options.length === 0) {
                throw `options shouldn't be empty!`;
            }
            for( var i = 0; i < options.length; i++) {
                expect(options[i].innerText)
                    .toContain('f');
            }
            TestUtils.typeLetter(input, 'i');
            await TestUtils.sleep(0);
            var options = <NodeListOf<HTMLElement>> infinite.querySelectorAll(`li`);
            if(options.length === 0) {
                throw `options shouldn't be empty!`;
            }
            for( var i = 0; i < options.length; i++) {
                expect(options[i].innerText)
                    .toContain('fi');
            }

            done();
        });
    });
});
