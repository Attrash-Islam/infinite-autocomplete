import { InfiniteAutocomplete } from "../../src/Components/InfiniteAutocomplete";
import { TestUtils } from "../Utils/index";

describe(`Options Default implementation: `, () => {

    it(`One single option list should be rendered`, () => {
        let infinite = document.createElement("div");
        new InfiniteAutocomplete(infinite);
        expect(infinite.querySelectorAll("ul").length).toBe(1);
    });

    it(`The options list should be initialized as hidden`, () => {
        let infinite = document.createElement("div");
        new InfiniteAutocomplete(infinite);
        let optionsListWrapper = infinite.querySelector(".infinite-autocomplete-options-wrapper");
        if (optionsListWrapper) {
            expect(optionsListWrapper.className)
                .toContain(`infinite-autocomplete-hidden-element`);
        } else {
            throw new Error(`Can't find the options list HTMLElement`);
        }
    });

    describe(`Options based on dynamic data`, () => {

        it(`should show the items received from the backend mock`,
            async (done): Promise<any> => {
                let infinite = document.createElement("div");
                let iniElm = new InfiniteAutocomplete(infinite);
                iniElm.setConfig({
                    getDataFromApi(text, page, fetchSize) {
                        return new Promise((resolve, reject) => {
                            setTimeout(() => {
                                if (text.indexOf(`f`) !== -1) {
                                    resolve([
                                        { text: "f1", value: "f1" },
                                        { text: "f2", value: "f2" },
                                        { text: "f3", value: "f3" },
                                    ]);
                                } else if (text.indexOf(`x`) !== -1) {
                                    resolve([
                                        { text: "x1", value: "x1" },
                                        { text: "x2", value: "x2" },
                                        { text: "x3", value: "x3" },
                                    ]);
                                } else {
                                    resolve([]);
                                }
                            }, 0);
                        });
                    },
                });
                let input = infinite.querySelector(`input`) as HTMLInputElement;

                // Type `f` letter
                TestUtils.typeLetter(input, "f");
                await TestUtils.sleep(0);
                let options = infinite.querySelectorAll(`li`) as NodeListOf<HTMLElement>;
                if (options.length === 0) {
                    throw new Error(`options shouldn't be empty!`);
                }
                expect((options[0] as any).data)
                    .toEqual({ text: "f1", value: "f1" });
                expect((options[1] as any).data)
                    .toEqual({ text: "f2", value: "f2" });
                expect((options[2] as any).data)
                    .toEqual({ text: "f3", value: "f3" });

                // Clear input and type `x` letter
                TestUtils.typeLetter(input, "x", true);
                await TestUtils.sleep(0);
                let options2 = infinite.querySelectorAll(`li`) as NodeListOf<HTMLElement>;
                if (options2.length === 0) {
                    throw new Error(`options2 shouldn't be empty!`);
                }
                expect((options2[0] as any).data)
                    .toEqual({ text: "x1", value: "x1" });
                expect((options2[1] as any).data)
                    .toEqual({ text: "x2", value: "x2" });
                expect((options2[2] as any).data)
                    .toEqual({ text: "x3", value: "x3" });

                // Clear input and type `q` letter - Which resolve empty set from the backend mock
                TestUtils.typeLetter(input, "q", true);
                await TestUtils.sleep(0);
                let options3 = infinite.querySelectorAll(`li`) as NodeListOf<HTMLElement>;
                expect(options3.length).toBe(0);
                done();
            });

        it(`should show the items received from the backend mock based on page and scrolling event`,
                async (done): Promise<any> => {
                    let infinite = document.createElement("div");
                    let iniElm = new InfiniteAutocomplete(infinite);
                    let conf = {
                        getDataFromApi: (): Promise<any[]> =>
                            new Promise(resolve => {
                                resolve([
                                    { text: "one", value: 1 },
                                    { text: "two", value: 2 },
                                ]);
                            }),
                    };
                    spyOn(conf, "getDataFromApi").and.callThrough();

                    iniElm.setConfig({
                        getDataFromApi: conf.getDataFromApi,
                        fetchSize: 2,
                    });

                    let input = infinite.querySelector(`input`) as HTMLInputElement;
                    let optionsList = infinite.querySelector(`ul`) as HTMLElement;
                    TestUtils.typeLetter(input, `t`);
                    await TestUtils.sleep(0);

                    // Get data from text `t` with page 1 (first chunk) with size of 2 per chunk
                    expect(conf.getDataFromApi)
                        .toHaveBeenCalledWith(`t`, 1, 2);

                    // Scroll to bottom
                    TestUtils.scrollToBottom(optionsList);
                    await TestUtils.sleep(0);

                    // Get data from text `t` with page 2 (second chunk) with size of 2 per chunk
                    expect(conf.getDataFromApi)
                        .toHaveBeenCalledWith(`t`, 2, 2);

                    done();
                },
        );

        it(`should stop fetching items from the backend mock when returned data is smaller than chunk size`,
                async (done): Promise<any> => {
                    let infinite = document.createElement("div");
                    let iniElm = new InfiniteAutocomplete(infinite);
                    let conf = {
                        getDataFromApi: (text, page, size): Promise<any[]> =>
                            new Promise(resolve => {
                                setTimeout(() => {
                                    if (page === 1) {
                                        resolve([
                                            { text: "one", value: 1 },
                                            { text: "two", value: 2 },
                                        ]);
                                    } else {
                                        resolve([
                                            { text: "three", value: 3 },
                                        ]);
                                    }
                                }, 0);
                            }),
                    };
                    spyOn(conf, "getDataFromApi").and.callThrough();

                    iniElm.setConfig({
                        getDataFromApi: conf.getDataFromApi,
                        fetchSize: 2,
                    });

                    let input = infinite.querySelector(`input`) as HTMLInputElement;
                    let optionsList = infinite.querySelector(`ul`) as HTMLElement;
                    TestUtils.typeLetter(input, `t`);
                    await TestUtils.sleep(0);

                    // Get data from text `t` with page 1 (first chunk) with size of 2 per chunk
                    expect(conf.getDataFromApi)
                        .toHaveBeenCalledWith(`t`, 1, 2);

                    // Scroll to bottom
                    TestUtils.scrollToBottom(optionsList);
                    await TestUtils.sleep(0);

                    // Get data from text `t` with page 2 (second chunk) with size of 2 per chunk
                    expect(conf.getDataFromApi)
                        .toHaveBeenCalledWith(`t`, 2, 2);

                    // Scroll to bottom
                    TestUtils.scrollToBottom(optionsList);
                    await TestUtils.sleep(0);

                    // Prevent getting data since second chunk returned with a smaller data size than the chunk size
                    expect(conf.getDataFromApi)
                        .not.toHaveBeenCalledWith(`t`, 3, 2);

                    done();
                },
        );

    });

    describe(`Options based on static data`, () => {

        it(`should not show the items when they don't match the search`,
            async (done): Promise<void> => {
                let infinite = document.createElement("div");
                let iniElm = new InfiniteAutocomplete(infinite);

                iniElm.setConfig({data: [
                    { text: "first", value: 1},
                    { text: "second", value: 2},
                    { text: "theird", value: 3},
                    { text: "fourth", value: 4},
                    { text: "fivth", value: 5},
                ]});

                let input = infinite.querySelector(`input`) as HTMLInputElement;
                TestUtils.typeLetter(input, "x");
                await TestUtils.sleep(0);
                let options = infinite.querySelectorAll(`li`) as NodeListOf<HTMLElement>;
                expect(options.length).toBe(0);
                let optionsList = infinite.querySelector(`.infinite-autocomplete-options-wrapper`) as HTMLElement;
                expect(optionsList.className)
                    .toContain(`infinite-autocomplete-hidden-element`);
                done();
        });

        it(`should bind the value of options into the DOM node element as 'data'`,
            async (done): Promise<any> => {
                let infinite = document.createElement("div");
                let iniElm = new InfiniteAutocomplete(infinite);

                iniElm.setConfig({data: [
                    { text: "first", value: 1},
                    { text: "second", value: 2},
                    { text: "theird", value: 3},
                    { text: "fourth", value: "4"},
                    { text: "fivth", value: {a: 1, b: 2}},
                ]});

                let input = infinite.querySelector(`input`) as HTMLInputElement;
                TestUtils.typeLetter(input, "f");
                await TestUtils.sleep(0);
                let options = infinite.querySelectorAll(`li`) as NodeListOf<HTMLElement>;
                if (options.length === 0) {
                    throw new Error(`options shouldn't be empty!`);
                }
                expect((options[0] as any).data.value)
                    .toBe(1);
                expect((options[1] as any).data.value)
                    .toBe("4");
                expect((options[2] as any).data.value)
                    .toEqual({a: 1, b: 2});
                done();
        });

        it(`should show the items when clicking on the input even if the input is empty`,
            async (done): Promise<void> => {
                let infinite = document.createElement("div");
                let iniElm = new InfiniteAutocomplete(infinite, {
                    fetchSize: 2,
                });

                iniElm.setConfig({data: [
                    { text: "first", value: 1},
                    { text: "second", value: 2},
                    { text: "theird", value: 3},
                    { text: "fourth", value: 4},
                    { text: "fivth", value: 5},
                ]});

                let input = infinite.querySelector(`input`) as HTMLInputElement;
                TestUtils.clickOnElement(input);
                await TestUtils.sleep(0);
                let options = infinite.querySelectorAll(`li`) as NodeListOf<HTMLElement>;
                expect(options.length).toBe(2);
                expect(options[0].innerText)
                        .toContain("first");
                expect(options[1].innerText)
                        .toContain("second");
                done();
        });

        it(`should show more items when scrolling to bottom if data fits, and updates current page number`,
            async (done): Promise<void> => {
                let infinite = document.createElement("div");
                let iniElm = new InfiniteAutocomplete(infinite, {
                    fetchSize: 3,
                });

                iniElm.setConfig({data: [
                    { text: "first", value: 1},
                    { text: "second", value: 2},
                    { text: "theird", value: 3},
                    { text: "fourth", value: 4},
                    { text: "fivth", value: 5},
                    { text: "fivth", value: 6},
                    { text: "fivth", value: 7},
                    { text: "fivth", value: 8},
                ]});

                let optionsBase = infinite.querySelector(`ul`) as HTMLElement;

                let input = infinite.querySelector(`input`) as HTMLInputElement;
                TestUtils.clickOnElement(input);
                await TestUtils.sleep(0);
                let options = infinite.querySelectorAll(`li`) as NodeListOf<HTMLElement>;
                expect(options.length).toBe(3); // First data chunk
                expect((iniElm as any).page).toBe(1);

                // Scroll to bottom
                TestUtils.scrollToBottom(optionsBase);
                await TestUtils.sleep(0);

                let optionsAfterScrolling = infinite.querySelectorAll(`li`) as NodeListOf<HTMLElement>;
                expect(optionsAfterScrolling.length).toBe(6); // two chunks
                expect((iniElm as any).page).toBe(2);

                // Scroll to bottom
                TestUtils.scrollToBottom(optionsBase);
                await TestUtils.sleep(0);

                optionsAfterScrolling = infinite.querySelectorAll(`li`) as NodeListOf<HTMLElement>;
                expect(optionsAfterScrolling.length).toBe(8); // three chunks (last two items - smaller than chunk)
                expect((iniElm as any).page).toBe(3);

                done();
        });

        it(`should hide the options when pressing Esc if they exist (opened)`,
            async (done): Promise<void> => {
                let infinite = document.createElement("div");
                let iniElm = new InfiniteAutocomplete(infinite, {
                    fetchSize: 2,
                });

                iniElm.setConfig({data: [
                    { text: "first", value: 1},
                    { text: "second", value: 2},
                    { text: "theird", value: 3},
                    { text: "fourth", value: 4},
                    { text: "fivth", value: 5},
                ]});

                let input = infinite.querySelector(`input`) as HTMLInputElement;
                TestUtils.clickOnElement(input);
                await TestUtils.sleep(0);
                let options = infinite.querySelectorAll(`li`) as NodeListOf<HTMLElement>;
                expect(options.length).toBe(2);

                TestUtils.clickEsc();
                let optionsAfterEsc = infinite.querySelectorAll(`li`) as NodeListOf<HTMLElement>;
                expect(optionsAfterEsc.length).toBe(0);
                done();
        });

        it(`should show the items when they match the search`, async (done): Promise<void> => {
            let infinite = document.createElement("div");
            let iniElm = new InfiniteAutocomplete(infinite);

            iniElm.setConfig({data: [
                { text: "first", value: 1},
                { text: "second", value: 2},
                { text: "theird", value: 3},
                { text: "fourth", value: 4},
                { text: "fivth", value: 5},
            ]});

            let input = infinite.querySelector(`input`) as HTMLInputElement;
            TestUtils.typeLetter(input, "f");
            await TestUtils.sleep(0);
            let options = infinite.querySelectorAll(`li`) as NodeListOf<HTMLElement>;
            if (options.length === 0) {
                throw new Error(`options shouldn't be empty!`);
            }
            for ( let i = 0; i < options.length; i++) {
                expect(options[i].innerText)
                    .toContain("f");
            }

            let optionsList = infinite.querySelector(`ul`) as HTMLElement;
            expect(optionsList.style.display)
                .toBe(``);

            TestUtils.typeLetter(input, "i");
            await TestUtils.sleep(0);
            options = infinite.querySelectorAll(`li`) as NodeListOf<HTMLElement>;
            if (options.length === 0) {
                throw new Error(`options shouldn't be empty!`);
            }
            for ( let i = 0; i < options.length; i++) {
                expect(options[i].innerText)
                    .toContain("fi");
            }

            optionsList = infinite.querySelector(`ul`) as HTMLElement;
            expect(optionsList.style.display)
                .toBe(``);

            done();
        });

        describe(`Selecting an option: `, () => {

            it(`should update the input value with the clicked one`,
                async (done): Promise<any> => {
                    let infinite = document.createElement("div");
                    let iniElm = new InfiniteAutocomplete(infinite);

                    iniElm.setConfig({data: [
                        { text: "first", value: 1},
                        { text: "second", value: 2},
                        { text: "theird", value: 3},
                        { text: "fourth", value: 4},
                        { text: "fivth", value: 5},
                    ]});

                    let input = infinite.querySelector(`input`) as HTMLInputElement;
                    TestUtils.typeLetter(input, "d");
                    await TestUtils.sleep(0);
                    let secondOption = infinite.querySelectorAll(`li`)[0] as HTMLElement;
                    TestUtils.clickOnElement(secondOption);
                    expect(input.value)
                        .toBe(`second`);
                    done();
            });
        });

        describe(`onSelect function in configuration: `, () => {

            it(`Passed onSelect function in configuration should be executed when selecting option,
                    and will receive as arguments the selected DOM element and it's text and value`,
                async (done): Promise<any> => {
                    let infinite = document.createElement("div");
                    let iniElm = new InfiniteAutocomplete(infinite);
                    let object = {
                        spiedFunction: () => {
                          //
                        },
                    };

                    spyOn(object, "spiedFunction");

                    iniElm.setConfig({data: [
                        { text: "first", value: 1},
                        { text: "second", value: 2},
                        { text: "theird", value: 3},
                        { text: "fourth", value: 4},
                        { text: "fivth", value: 5},
                    ], onSelect: object.spiedFunction});

                    let input = infinite.querySelector(`input`) as HTMLInputElement;
                    TestUtils.typeLetter(input, "r");
                    await TestUtils.sleep(0);
                    let fourthOption = infinite.querySelectorAll(`li`)[2] as HTMLElement;
                    TestUtils.clickOnElement(fourthOption);
                    expect(object.spiedFunction)
                        .toHaveBeenCalledWith(fourthOption, {text: "fourth", value: 4});
                    done();
            });
        });

        describe(`Up/Down keypress in input: `, () => {

                it(`should append 'hovered' class for the first option in the first press`,
                    async (done): Promise<any> => {
                        let infinite = document.createElement("div");
                        let iniEle = new InfiniteAutocomplete(infinite, {
                            data: [
                                { text: "text", value: "value"},
                                { text: "text2", value: "value2"},
                            ],
                        });
                        let inputEle = infinite.querySelector(`input`) as HTMLElement;
                        if (inputEle) {
                            inputEle.click();
                            await TestUtils.sleep(0);
                            TestUtils.pressDownArrow(inputEle);
                            expect(infinite.querySelectorAll(`li`)[0].className)
                                .toContain(`hovered`);
                            expect(infinite.querySelectorAll(`li`)[1].className)
                                .not.toContain(`hovered`);
                            done();
                        }
                    });

                it(`should append 'hovered' class for the second option when pressing twice`,
                    async (done): Promise<any> => {
                        let infinite = document.createElement("div");
                        let iniEle = new InfiniteAutocomplete(infinite, {
                            data: [
                                { text: "text", value: "value"},
                                { text: "text2", value: "value2"},
                            ],
                        });
                        let inputEle = infinite.querySelector(`input`) as HTMLElement;
                        if (inputEle) {
                            inputEle.click();
                            await TestUtils.sleep(0);
                            TestUtils.pressDownArrow(inputEle);
                            TestUtils.pressDownArrow(inputEle);
                            expect(infinite.querySelectorAll(`li`)[1].className)
                                .toContain(`hovered`);
                            expect(infinite.querySelectorAll(`li`)[0].className)
                                .not.toContain(`hovered`);
                            done();
                        }
                    });

                it(`should append 'hovered' class for the first option when pressing down twice and up again`,
                    async (done): Promise<any> => {
                        let infinite = document.createElement("div");
                        let iniEle = new InfiniteAutocomplete(infinite, {
                            data: [
                                { text: "text", value: "value"},
                                { text: "text2", value: "value2"},
                            ],
                        });
                        let inputEle = infinite.querySelector(`input`) as HTMLElement;
                        if (inputEle) {
                            inputEle.click();
                            await TestUtils.sleep(0);
                            TestUtils.pressDownArrow(inputEle);
                            TestUtils.pressDownArrow(inputEle);
                            TestUtils.pressUpArrow(inputEle);
                            expect(infinite.querySelectorAll(`li`)[0].className)
                                .toContain(`hovered`);
                            expect(infinite.querySelectorAll(`li`)[1].className)
                                .not.toContain(`hovered`);
                            done();
                        }
                    });

                it(`it should append 'hovered' in a way that is not circlular.
                        Pressing Up in the first element won't go to bottom`,
                    async (done): Promise<any> => {
                        let infinite = document.createElement("div");
                        let iniEle = new InfiniteAutocomplete(infinite, {
                            data: [
                                { text: "text", value: "value"},
                                { text: "text2", value: "value2"},
                            ],
                        });
                        let inputEle = infinite.querySelector(`input`) as HTMLElement;
                        if (inputEle) {
                            inputEle.click();
                            await TestUtils.sleep(0);
                            TestUtils.pressDownArrow(inputEle);
                            TestUtils.pressUpArrow(inputEle);
                            TestUtils.pressUpArrow(inputEle);
                            TestUtils.pressUpArrow(inputEle);
                            expect(infinite.querySelectorAll(`li`)[0].className)
                                .toContain(`hovered`);
                            expect(infinite.querySelectorAll(`li`)[1].className)
                                .not.toContain(`hovered`);
                            done();
                        }
                    });

                it(`it should append 'hovered' in a way that is not circlular.
                        Pressing Down in the last element won't go to the top`,
                    async (done): Promise<any> => {
                        let infinite = document.createElement("div");
                        let iniEle = new InfiniteAutocomplete(infinite, {
                            data: [
                                { text: "text", value: "value"},
                                { text: "text2", value: "value2"},
                            ],
                        });
                        let inputEle = infinite.querySelector(`input`) as HTMLElement;
                        if (inputEle) {
                            inputEle.click();
                            await TestUtils.sleep(0);
                            TestUtils.pressDownArrow(inputEle);
                            TestUtils.pressDownArrow(inputEle);
                            TestUtils.pressDownArrow(inputEle);
                            TestUtils.pressDownArrow(inputEle);
                            expect(infinite.querySelectorAll(`li`)[0].className)
                                .not.toContain(`hovered`);
                            expect(infinite.querySelectorAll(`li`)[1].className)
                                .toContain(`hovered`);
                            done();
                        }
                    });

                it(`should select the 'hovered' class when pressing enter`,
                    async (done): Promise<any> => {
                        let infinite = document.createElement("div");
                        let object = {
                            spiedFunction: () => {
                              //
                            },
                        };
                        spyOn(object, "spiedFunction").and.returnValue("");

                        let iniEle = new InfiniteAutocomplete(infinite, {
                            data: [
                                { text: "text", value: "value"},
                                { text: "text2", value: "value2"},
                            ],
                            onSelect: object.spiedFunction,
                        });
                        let inputEle = infinite.querySelector(`input`) as HTMLElement;
                        if (inputEle) {
                            inputEle.click();
                            await TestUtils.sleep(0);
                            let secondOption = infinite.querySelectorAll(`li`)[1];
                            TestUtils.pressDownArrow(inputEle);
                            TestUtils.pressDownArrow(inputEle);
                            TestUtils.pressEnter(inputEle);
                            expect(object.spiedFunction)
                                .toHaveBeenCalledWith(secondOption, {
                                    text: "text2",
                                    value: "value2",
                                });
                            done();
                        }
                    });

            });

        describe(`Hovering state`, () => {

                it(`should append hovered when hovering on elements`,
                    async (done): Promise<any> => {

                        let infinite = document.createElement("div");

                        let iniEle = new InfiniteAutocomplete(infinite, {
                            data: [
                                { text: "text", value: "value"},
                                { text: "text2", value: "value2"},
                            ],
                        });

                        let inputEle = infinite.querySelector(`input`) as HTMLElement;

                        if (inputEle) {
                            inputEle.click();
                            await TestUtils.sleep(0);
                            let ele1 = infinite.querySelectorAll(`li`)[0] as HTMLElement;
                            let ele2 = infinite.querySelectorAll(`li`)[1] as HTMLElement;
                            TestUtils.hoverOnElement(ele1);
                            expect(ele1.className)
                                .toContain(`hovered`);
                            TestUtils.hoverOnElement(ele2);
                            expect(ele1.className)
                                .not.toContain(`hovered`);
                            expect(ele2.className)
                                .toContain(`hovered`);
                            done();
                        }
                });

            });

        describe(`Pressing down in bottom fetchs the next chunk of data - As Scrolling to bottom`,
                () => {

                    it(`should fetch the next chunks`, async (done): Promise<any> => {
                        let infinite = document.createElement("div");
                        let iniElm = new InfiniteAutocomplete(infinite, {
                            fetchSize: 3,
                        });

                        iniElm.setConfig({data: [
                            { text: "first", value: 1},
                            { text: "second", value: 2},
                            { text: "theird", value: 3},
                            { text: "fourth", value: 4},
                            { text: "fivth", value: 5},
                            { text: "fivth", value: 6},
                            { text: "fivth", value: 7},
                            { text: "fivth", value: 8},
                        ]});

                        let optionsBase = infinite.querySelector(`ul`) as HTMLElement;

                        let input = infinite.querySelector(`input`) as HTMLInputElement;
                        TestUtils.clickOnElement(input);
                        await TestUtils.sleep(0);
                        let options = infinite.querySelectorAll(`li`) as NodeListOf<HTMLElement>;
                        expect(options.length).toBe(3); // First data chunk
                        expect((iniElm as any).page).toBe(1);

                        // Scroll to bottom via navigation keys
                        TestUtils.pressDownArrow(input);
                        TestUtils.pressDownArrow(input);
                        TestUtils.pressDownArrow(input);
                        TestUtils.pressDownArrow(input);
                        await TestUtils.sleep(0);

                        let optionsAfterScrolling = infinite.querySelectorAll(`li`) as NodeListOf<HTMLElement>;
                        expect(optionsAfterScrolling.length).toBe(6); // two chunks
                        expect((iniElm as any).page).toBe(2);

                        // Scroll to bottom via navigation keys
                        TestUtils.pressDownArrow(input);
                        TestUtils.pressDownArrow(input);
                        TestUtils.pressDownArrow(input);
                        TestUtils.pressDownArrow(input);
                        await TestUtils.sleep(0);

                        optionsAfterScrolling = infinite.querySelectorAll(`li`) as NodeListOf<HTMLElement>;
                        // three chunks (last two items - smaller than chunk)
                        expect(optionsAfterScrolling.length).toBe(8);
                        expect((iniElm as any).page).toBe(3);

                        done();
                    });

            });

    });
});
