import { InfiniteAutocomplete } from '../../src/Components/InfiniteAutocomplete';
import { myTextValue } from './Customization/myTextValue';
import { TestUtils } from '../Utils/index';
import { Promise as es6Promise } from 'es6-promise';

describe(`Customized Option object implementation: `, function() {

    it(`should fetch text and value based on my IOptionObject implementation logic`, 
        async function(done):es6Promise<any> {
            var infinite = document.createElement('div');
            var iniElm = new InfiniteAutocomplete(infinite, undefined, myTextValue);
            iniElm.setConfig({data: [
                    { mySpecialText: 'first', mySpecialValue: 1},
                    { mySpecialText: 'second', mySpecialValue: 2},
                    { mySpecialText: 'theird', mySpecialValue: 3},
                    { mySpecialText: 'fourth', mySpecialValue: 4},
                    { mySpecialText: 'fivth', mySpecialValue: 5}
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

                var optionsList = <HTMLElement> infinite.querySelector(`ul`);
                expect(optionsList.style.display)
                    .toBe(``);

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
