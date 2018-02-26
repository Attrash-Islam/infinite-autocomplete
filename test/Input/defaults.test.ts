import { InfiniteAutocomplete } from "../../src/Components/InfiniteAutocomplete";
import { TestUtils } from "../Utils/index";

describe(`Input Default implementation: `, () => {
    it(`One single input should be rendered`, () => {
        let infinite = document.createElement("div");
        new InfiniteAutocomplete(infinite);
        expect(infinite.querySelectorAll("input").length).toBe(1);
    });

    it(`input value should be set if configured via "value" config`, () => {
      let infinite = document.createElement("div");
      new InfiniteAutocomplete(infinite, {
        value: "current value",
      });
      const infiniteInput = infinite.querySelector("input") as HTMLInputElement;
      if (infiniteInput) {
        expect(infiniteInput.value).toBe("current value");
      } else {
        expect(true).toBe(false, "Input doesn't exist");
      }
    });

    describe(`Current page: `, () => {
        it(`should send page as 1 when typings`, () => {
            let infinite = document.createElement("div");
            let iniEle = new InfiniteAutocomplete(infinite, {
                data: [{ text: "text", value: "value "}],
            });
            TestUtils.typeLetter(infinite.querySelector(`input`) as HTMLInputElement, `t`);
            expect((iniEle as any).page).toBe(1);
        });

        it(`should reset page as 1 when typings`, () => {
            let infinite = document.createElement("div");
            let iniEle = new InfiniteAutocomplete(infinite, {
                data: [{ text: "text", value: "value "}],
            });
            // We scrolled so many times after typing something
            (iniEle as any).page = 5;
            // Decided to press a key
            TestUtils.typeLetter(infinite.querySelector(`input`) as HTMLInputElement, `t`);
            expect((iniEle as any).page).toBe(1);
        });
    });

});
