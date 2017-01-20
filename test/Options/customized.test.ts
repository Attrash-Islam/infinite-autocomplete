import { InfiniteAutocomplete } from '../../src/Components/InfiniteAutocomplete';
import { TestUtils } from '../Utils/index';
import { Promise as es6Promise } from 'es6-promise';
import { template } from './Customization/template';

describe(`Customized options template: `, function() {

    it(`The rendered options template must be replaced 
            with the customized one`, function() {
        var infinite = document.createElement('div');
        var iniElm = new InfiniteAutocomplete(infinite, {
            customizedOptions: template
        });
        var optionsWrapper = <HTMLElement> infinite.querySelector(`.infinite-autocomplete-options-wrapper`);
        var titleBeforeList = <HTMLElement> optionsWrapper.querySelectorAll(`div`)[0];
        expect(titleBeforeList.innerText)
            .toBe(`Options:`);
        var myList = optionsWrapper.querySelectorAll(`div`)[1];
        expect(myList.className)
            .toBe(`myList`);
    });

    it(`The rendered option row template must be replaced 
            with the customized one`, async function(done):es6Promise<any> {
        var infinite = document.createElement('div');
        var iniElm = new InfiniteAutocomplete(infinite, {
            data: [
                { text: 'first', value: 1 },
                { text: 'second', value: 2 },
                { text: 'theird', value: 3 },
                { text: 'fourth', value: 4 },
                { text: 'fivth', value: 5 }
            ],
            customizedOptions: template
        });
        var optionsWrapper = <HTMLElement> infinite.querySelector(`.infinite-autocomplete-options-wrapper`);
        var myList = optionsWrapper.querySelectorAll(`div`)[1];
        TestUtils.typeLetter(<HTMLInputElement> infinite.querySelector(`input`), 'i');
        await TestUtils.sleep(0);
        var rows = <NodeListOf<HTMLElement>> myList.querySelectorAll(`div`);
        expect(rows.length)
            .toBe(3);
        for(var i = 0; i < rows.length; i++) {
            expect(rows[i].style.fontWeight)
                .toBe(`bold`);
            expect(rows[i].innerText)
                .toContain('i');
        }
        done();
    });

});
