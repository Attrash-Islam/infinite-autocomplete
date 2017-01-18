import { InfiniteAutocomplete } from '../../src/Components/InfiniteAutocomplete';
import { TestUtils } from '../Utils/index';
import { Promise as es6Promise } from 'es6-promise';

describe(`Initialization: `, function() {

    it(`should throw exception when trying to type without any static data source
            nor dynamic API`, async function(done):es6Promise<any> {
        spyOn(console, 'error');
        var infinite = document.createElement('div');
        new InfiniteAutocomplete(infinite);
        var input = <HTMLInputElement> infinite.querySelector(`input`);
        TestUtils.typeLetter(input, `a`);
        await TestUtils.sleep(0);
        expect(console.error)
            .toHaveBeenCalledWith(
                new Error(`You must pass data or getDataFromApi function via config`)
            );
        done();
    });

    it(`should append 'infinite-autocomplete-wrapper' to the base element className
          without overriding the past classes`, function() {
        var infinite = document.createElement('div');
        infinite.className = 'my-own-class';
        new InfiniteAutocomplete(infinite);
        expect(infinite.className)
            .toBe(`my-own-class infinite-autocomplete-wrapper`);
    });

    it(`should set page to 1 at the initialization`, function() {
        var infinite = document.createElement('div');
        var iniEle = new InfiniteAutocomplete(infinite, {
            data: [{ text: 'text', value: 'value '}]
        });
        expect((iniEle as any).page).toBe(1);
        TestUtils.typeLetter(<HTMLInputElement> infinite.querySelector(`input`), `t`);
        expect((iniEle as any).page).toBe(1);
    });

});
