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

});
