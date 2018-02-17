import { InfiniteAutocomplete } from "../../src/Components/InfiniteAutocomplete";
import { TestUtils } from "../Utils/index";
import { InputComponent as defaultInput } from "../../src/Components/InputComponent";
import { OptionsComponent as defaultOptions } from "../../src/Components/OptionsComponent";
import {Template} from "../Input/Customization/template";

describe(`Initialization: `, () => {

    it(`should throw exception when trying to type without any static data source
      nor dynamic API`, async (done): Promise<any> => {
        spyOn(console, "error").and.returnValue("");
        let infinite = document.createElement("div");
        new InfiniteAutocomplete(infinite);
        let input = infinite.querySelector("input") as HTMLInputElement;
        TestUtils.typeLetter(input, `a`);
        await TestUtils.sleep(0);
        expect(console.error)
          .toHaveBeenCalledWith(
              new Error(`You must pass data or getDataFromApi function via config`),
          );
        done();
    });

    it(`should append 'infinite-autocomplete-wrapper' to the base element className
          without overriding the past classes`, () => {
        let infinite = document.createElement("div");
        infinite.className = "my-own-class";
        new InfiniteAutocomplete(infinite);
        expect(infinite.className)
            .toBe(`my-own-class infinite-autocomplete-wrapper`);
    });

    it(`should set page to 1 at the initialization`, () => {
        let infinite = document.createElement("div");
        let iniEle = new InfiniteAutocomplete(infinite, {
            data: [{ text: "text", value: "value "}],
        });
        expect((iniEle as any).page).toBe(1);
    });

    it(`passing only data configuration should extend the defaults not override them`, () => {
        let infinite = document.createElement("div");
        let iniEle = new InfiniteAutocomplete(infinite, {
            data: [{ text: "text", value: "value "}],
        });
        // Passing config shouldn't override the fetchSize default configuration
        expect((iniEle as any).config).toEqual(jasmine.objectContaining({
            fetchSize: 10,
        }));
        // Passing config shouldn't empty the default input configuration
        expect((iniEle as any).config.customizedInput)
            .toEqual(defaultInput);
        // Passing config shouldn't empty the default options configuration
        expect((iniEle as any).config.customizedOptions)
            .toEqual(defaultOptions);
    });

    it(`passing customized input should override the default input implementation`, () => {
        let infinite = document.createElement("div");

        let iniEle = new InfiniteAutocomplete(infinite, {
            customizedInput: Template,
        });

        // Passing custom input implementation should override the default input configuration
        expect((iniEle as any).config.customizedInput)
            .not.toEqual(defaultInput);

        expect((iniEle as any).config.customizedInput)
            .toEqual(Template);
    });

    // (#1) Clicking outside while autocomplete is open
    it(`should close the options when clicking outside the inifinite component
            in the base document body element`,
        async (done): Promise<any> => {
            let infinite = document.createElement("div");

            let iniEle = new InfiniteAutocomplete(infinite, {
                data: [{ text: "text", value: "value" }],
            });

            document.body.appendChild(infinite);

            let input = infinite.querySelector("input") as HTMLInputElement;

            // Type `t` letter
            TestUtils.typeLetter(input, "t");
            await TestUtils.sleep(0);
            let options = infinite.querySelectorAll("li");
            expect(options.length).toBe(1);

            // Click on the input shouldn't close the options
            TestUtils.clickOnElement(input);

            // options shouldn't be closed yet
            let optionsAfterInputClick = infinite.querySelectorAll("li");
            expect(optionsAfterInputClick.length).toBe(1);

            // Click outside the plugin should close the options
            TestUtils.clickOnElement(document as any);

            // options should be closed
            let optionsAfterDocumentClick = infinite.querySelectorAll("li");
            expect(optionsAfterDocumentClick.length).toBe(0);

            done();
    });

    // (#1) Clicking outside while autocomplete is open
    it(`should close the options when clicking outside the inifinite component
            in the sibling element`,
        async (done): Promise<any> => {
            let infinite = document.createElement("div");

            let iniEle = new InfiniteAutocomplete(infinite, {
                data: [{ text: "text", value: "value" }],
            });

            document.body.appendChild(infinite);

            // appending sibling element
            let siblingDiv = document.createElement("div");
            document.body.appendChild(siblingDiv);

            let input = infinite.querySelector("input") as HTMLInputElement;

            // Type `t` letter
            TestUtils.typeLetter(input, "t");
            await TestUtils.sleep(0);
            let options = infinite.querySelectorAll("li");
            expect(options.length).toBe(1);

            // Click outside the plugin (on sibling) should close the options
            TestUtils.clickOnElement(siblingDiv);

            // options should be closed
            let optionsAfterSiblingClick = infinite.querySelectorAll("li");
            expect(optionsAfterSiblingClick.length).toBe(0);

            done();
    });

    it(`should destroy and reinitialize the plugin whenever setConfig is called`,
        async (done): Promise<any> => {

            let infinite = document.createElement("div");

            let iniEle = new InfiniteAutocomplete(infinite, {
                data: [{ text: "text", value: "value" }],
            });

            expect(infinite.querySelector(`#before-input`))
                .toBe(null);

            let inputEle = infinite.querySelector(`input`) as HTMLInputElement;
            TestUtils.typeLetter(inputEle, `te`);
            await TestUtils.sleep(0);

            let optionsRow = infinite.querySelectorAll(`li`);
            expect(optionsRow.length)
                .toBe(1);

            iniEle.setConfig({
                customizedInput: Template,
            });

            let optionsRowAfterConfigChange = infinite.querySelectorAll(`li`);
            expect(optionsRowAfterConfigChange.length)
                .toBe(0);

            let inputAfterChanges = infinite.querySelector(`input`) as HTMLInputElement;

            TestUtils.typeLetter(inputAfterChanges, `te`);
            await TestUtils.sleep(0);

            expect(infinite.querySelector(`#before-input`))
                .not.toBe(null);

            done();
        });

});
