import { InfiniteAutocomplete } from '../../src/Components/InfiniteAutocomplete';
import { TestUtils } from '../Utils/index';
import { Promise as es6Promise } from 'es6-promise';

describe(`Input Default implementation: `, function() {
    it(`One single input should be rendered`, function() {
        var infinite = document.createElement('div');
        new InfiniteAutocomplete(infinite);
        expect(infinite.querySelectorAll('input').length).toBe(1);
    });

    describe(`Current page: `, function() {
        it(`should send page as 1 when typings`, function() {
            var infinite = document.createElement('div');
            var iniEle = new InfiniteAutocomplete(infinite, {
                data: [{ text: 'text', value: 'value '}]
            });
            TestUtils.typeLetter(<HTMLInputElement> infinite.querySelector(`input`), `t`);
            expect((iniEle as any).page).toBe(1);
        });
        
        it(`should reset page as 1 when typings`, function() {
            var infinite = document.createElement('div');
            var iniEle = new InfiniteAutocomplete(infinite, {
                data: [{ text: 'text', value: 'value '}]
            });
            //We scrolled so many times after typing something
            (iniEle as any).page = 5;
            //Decided to press a key
            TestUtils.typeLetter(<HTMLInputElement> infinite.querySelector(`input`), `t`);
            expect((iniEle as any).page).toBe(1);
        });
    });

});
