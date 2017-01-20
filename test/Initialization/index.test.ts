import { InfiniteAutocomplete } from '../../src/Components/InfiniteAutocomplete';
import { TestUtils } from '../Utils/index';
import { Promise as es6Promise } from 'es6-promise';
import { InputComponent as defaultInput } from '../../src/Components/InputComponent';
import { OptionsComponent as defaultOptions } from '../../src/Components/OptionsComponent';
import {template} from '../Input/Customization/template';

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
    });


    it(`passing only data configuration should extend the defaults not override them`, function() {
        var infinite = document.createElement('div');
        var iniEle = new InfiniteAutocomplete(infinite, {
            data: [{ text: 'text', value: 'value '}]
        });
        //Passing config shouldn't override the fetchSize default configuration
        expect((iniEle as any).config).toEqual(jasmine.objectContaining({
            fetchSize: 10
        }));
        //Passing config shouldn't empty the default input configuration
        expect((iniEle as any).config.customizedInput)
            .toEqual(defaultInput);
        //Passing config shouldn't empty the default options configuration
        expect((iniEle as any).config.customizedOptions)
            .toEqual(defaultOptions);
    });

    it(`passing customized input should override the default input implementation`, function() {
        var infinite = document.createElement('div');
        
        var iniEle = new InfiniteAutocomplete(infinite, {
            customizedInput: template
        });
        
        //Passing custom input implementation should override the default input configuration
        expect((iniEle as any).config.customizedInput)
            .not.toEqual(defaultInput);

        expect((iniEle as any).config.customizedInput)
            .toEqual(template);
    });

    //(#1) Clicking outside while autocomplete is open
    it(`should close the options when clicking outside the inifinite component
            in the base document body element`,
        async function(done):es6Promise<any> {
            var infinite = document.createElement('div');
            
            var iniEle = new InfiniteAutocomplete(infinite, {
                data: [{ text: 'text', value: 'value' }]
            });

            document.body.appendChild(infinite);

            var input = <HTMLInputElement> infinite.querySelector('input');

            //Type `t` letter
            TestUtils.typeLetter(input, 't');
            await TestUtils.sleep(0);
            var options = infinite.querySelectorAll('li');
            expect(options.length).toBe(1);

            //Click on the input shouldn't close the options
            TestUtils.clickOnElement(input);

            //options shouldn't be closed yet
            var optionsAfterInputClick = infinite.querySelectorAll('li');
            expect(optionsAfterInputClick.length).toBe(1);

            //Click outside the plugin should close the options
            TestUtils.clickOnElement(<any> document);

            //options should be closed
            var optionsAfterDocumentClick = infinite.querySelectorAll('li');
            expect(optionsAfterDocumentClick.length).toBe(0);
            
            done();
    });


    //(#1) Clicking outside while autocomplete is open
    it(`should close the options when clicking outside the inifinite component
            in the sibling element`,
        async function(done):es6Promise<any> {
            var infinite = document.createElement('div');
            
            var iniEle = new InfiniteAutocomplete(infinite, {
                data: [{ text: 'text', value: 'value' }]
            });

            document.body.appendChild(infinite);

            //appending sibling element
            var siblingDiv = document.createElement('div');
            document.body.appendChild(siblingDiv);

            var input = <HTMLInputElement> infinite.querySelector('input');

            //Type `t` letter
            TestUtils.typeLetter(input, 't');
            await TestUtils.sleep(0);
            var options = infinite.querySelectorAll('li');
            expect(options.length).toBe(1);

            //Click outside the plugin (on sibling) should close the options
            TestUtils.clickOnElement(siblingDiv);

            //options should be closed
            var optionsAfterSiblingClick = infinite.querySelectorAll('li');
            expect(optionsAfterSiblingClick.length).toBe(0);
            
            done();
    });

});
