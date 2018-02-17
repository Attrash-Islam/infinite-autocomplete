import { InfiniteAutocomplete } from "../../src/Components/InfiniteAutocomplete";
import { TestUtils } from "../Utils/index";
import { Template } from "./Customization/template";

describe(`Customized options template: `, () => {

    it(`The rendered options template must be replaced
            with the customized one`, () => {
        let infinite = document.createElement("div");
        let iniElm = new InfiniteAutocomplete(infinite, {
            customizedOptions: Template,
        });
        let optionsWrapper = infinite.querySelector(`.infinite-autocomplete-options-wrapper`) as HTMLElement;
        let titleBeforeList = optionsWrapper.querySelectorAll(`div`)[0] as HTMLElement;
        expect(titleBeforeList.innerText)
            .toBe(`Options:`);
        let myList = optionsWrapper.querySelectorAll(`div`)[1];
        expect(myList.className)
            .toBe(`myList`);
    });

    it(`The rendered option row template must be replaced
            with the customized one`, async (done): Promise<any> => {
        let infinite = document.createElement("div");
        let iniElm = new InfiniteAutocomplete(infinite, {
            data: [
                { text: "first", value: 1 },
                { text: "second", value: 2 },
                { text: "theird", value: 3 },
                { text: "fourth", value: 4 },
                { text: "fivth", value: 5 },
            ],
            customizedOptions: Template,
        });
        let optionsWrapper = infinite.querySelector(`.infinite-autocomplete-options-wrapper`) as HTMLElement;
        let myList = optionsWrapper.querySelectorAll(`div`)[1];
        TestUtils.typeLetter(infinite.querySelector(`input`) as HTMLInputElement, "i");
        await TestUtils.sleep(0);
        let rows = myList.querySelectorAll(`div`) as NodeListOf<HTMLElement>;
        expect(rows.length)
            .toBe(3);
        for (let i = 0; i < rows.length; i++) {
            expect(rows[i].style.fontWeight)
                .toBe(`bold`);
            expect(rows[i].innerText)
                .toContain("i");
        }
        done();
    });

});
