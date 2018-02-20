import { InfiniteAutocomplete } from "../../src/Components/InfiniteAutocomplete";
import { Template } from "./Customization/template";
import { InputHandlers } from "./Customization/inputHandlers";
import { TestUtils } from "../Utils/index";
import { MissingInput } from "./Customization/missingInput";
import { ParitalCustomInput } from "./Customization/paritalCustomInput";
import { MissingInputElementInInputComponentExceptionMsg } from "../../src/Constants/index";

describe(`Customized Input implementation: `, () => {

    describe(`template Customization :`, () => {

        it(`should throw exception when template not contain input tag`, () => {
          let infinite = document.createElement("div");
          try {
              new InfiniteAutocomplete(infinite, {
                  customizedInput: MissingInput,
              });
              expect(true).toBe(false, "Should throw an exception");
          } catch (e) {
            expect(e)
              .toEqual(
                MissingInputElementInInputComponentExceptionMsg,
              );
          }
      });

        it(`The rendered input should be replaced with the custom red input`, () => {
            let infinite = document.createElement("div");
            new InfiniteAutocomplete(infinite, {
                customizedInput: Template,
            });
            let redInput = infinite.querySelector(`input`) as HTMLElement;
            if (redInput) {
                expect(redInput.style.background)
                    .toBe(`red`);
            } else {
                expect(true).toBe(false, `Input doesn't exist`);
            }
        });

        it(`The rendered input should and 'before-input' and 'after-input' elements`, () => {
            let infinite = document.createElement("div");
            new InfiniteAutocomplete(infinite, {
                customizedInput: Template,
            });
            let inputWrapper = infinite.querySelector(`.infinite-autocomplete-input-wrapper`) as HTMLElement;
            if (inputWrapper) {
                expect(inputWrapper.children[0].id)
                    .toBe("before-input");
                expect(inputWrapper.children[1].id)
                    .toBe("input");
                expect(inputWrapper.children[2].id)
                    .toBe("after-input");
            } else {
              expect(true).toBe(false, "Input wrapper doesn't exist");
            }
        });
    });

    describe(`Events custom handlers`, () => {
        it(`onInputChange method should be executed in customized input if supplied`, () => {
            let infinite = document.createElement("div");
            spyOn(InputHandlers.prototype, "onInputChange").and.returnValue("");
            new InfiniteAutocomplete(infinite, { customizedInput: InputHandlers });
            let input = infinite.querySelector(`input`) as HTMLInputElement;

            // Simulate typing into the input element
            TestUtils.typeLetter(input, "T");
            expect(InputHandlers.prototype.onInputChange)
                .toHaveBeenCalledWith(input, "T");

            TestUtils.typeLetter(input, "f");
            expect(InputHandlers.prototype.onInputChange)
                .toHaveBeenCalledWith(input, "Tf");
        });
    });

    describe(`Custom partial input`, () => {
        it(`should extend the default and contain all it's functions`, () => {
            let infinite = document.createElement("div");
            let iniEle = new InfiniteAutocomplete(infinite, { customizedInput: ParitalCustomInput });
            expect((iniEle as any).inputComponent.render).toBeDefined();
        });
    });

});
