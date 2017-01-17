import { InfiniteAutocomplete } from '../../src/Components/InfiniteAutocomplete';
import { template } from './Customization/template';
import { inputHandlers } from './Customization/inputHandlers';

describe(`Customized Input implementation: `, function() {

    describe(`template Customization :`, function() {
        it(`The rendered input should be replaced with the custom red input`, function() {
            var infinite = document.createElement('div');
            new InfiniteAutocomplete(infinite, undefined, undefined, template);
            var redInput = <HTMLElement> infinite.querySelector(`input`);
            if(redInput) {
                expect(redInput.style.background)
                    .toBe(`red`);
            } else {
                throw `Input doesn't exist`;
            }
        });

        it(`The rendered input should and 'before-input' and 'after-input' elements`, function() {
            var infinite = document.createElement('div');
            new InfiniteAutocomplete(infinite, undefined, undefined, template);
            var inputWrapper = <HTMLElement> infinite.querySelector(`.infinite-autocomplete-input-wrapper`);
            if(inputWrapper) {
                expect(inputWrapper.children[0].id)
                    .toBe('before-input');
                expect(inputWrapper.children[1].id)
                    .toBe('input');
                expect(inputWrapper.children[2].id)
                    .toBe('after-input');
            } else {
                throw `Input wrapper doesn't exist`;
            }
        });
    });

    describe(`Events custom handlers`, function() {
        it(`onInputChange method should be executed in customized input if supplied`, function() {
            var infinite = document.createElement('div');
            spyOn(inputHandlers.prototype, 'onInputChange').and.returnValue('');
            new InfiniteAutocomplete(infinite, undefined, undefined, inputHandlers);
            var input = <HTMLInputElement> infinite.querySelector(`input`);

            //Simulate typing into the input element
            input.value = 'T';
            var typingT = new Event('input');
            input.dispatchEvent(typingT);
            expect(inputHandlers.prototype.onInputChange)
                .toHaveBeenCalledWith(input, 'T');

            input.value = 'Tf';
            var typingF = new Event('input');
            input.dispatchEvent(typingF);
            expect(inputHandlers.prototype.onInputChange)
                .toHaveBeenCalledWith(input, 'Tf');
        });
    });
    
});
