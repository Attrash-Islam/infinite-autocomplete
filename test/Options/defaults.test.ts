import { InfiniteAutocomplete } from '../../src/Components/InfiniteAutocomplete';
import { TestUtils } from '../Utils/index';
import { Promise as es6Promise } from 'es6-promise';

describe(`Options Default implementation: `, function() {

    it(`One single option list should be rendered`, function() {
        var infinite = document.createElement('div');
        new InfiniteAutocomplete(infinite);
        expect(infinite.querySelectorAll('ul').length).toBe(1);
    });


    it(`The options list should be initialized as hidden`, function() {
        var infinite = document.createElement('div');
        new InfiniteAutocomplete(infinite);
        var optionsList = infinite.querySelector('ul');
        if(optionsList) {
            expect(optionsList.style.display)
                .toBe(`none`);
        } else {
            throw `Can't find the options list HTMLElement`;
        }
    });

    
    describe(`Options based on dynamic data`, function() {

        it(`should show the items received from the backend mock`, 
            async function (done):es6Promise<any> {
                var infinite = document.createElement('div');
                var iniElm = new InfiniteAutocomplete(infinite);
                iniElm.setConfig({
                    getDataFromApi: function(text, page, fetchSize) {
                        return new es6Promise(function(resolve, reject) {
                            setTimeout(() => {
                                if(text.indexOf(`f`) != -1) {
                                    resolve([
                                        { text: 'f1', value: 'f1' },
                                        { text: 'f2', value: 'f2' },
                                        { text: 'f3', value: 'f3' }
                                    ]);
                                } else if(text.indexOf(`x`) != -1) {
                                    resolve([
                                        { text: 'x1', value: 'x1' },
                                        { text: 'x2', value: 'x2' },
                                        { text: 'x3', value: 'x3' }
                                    ]);
                                } else {
                                    resolve([]);
                                }
                            }, 0);
                        });
                    }
                });
                var input = <HTMLInputElement> infinite.querySelector(`input`);

                //Type `f` letter
                TestUtils.typeLetter(input, 'f');
                await TestUtils.sleep(0);
                var options = <NodeListOf<HTMLElement>> infinite.querySelectorAll(`li`);
                if(options.length === 0) {
                    throw `options shouldn't be empty!`;
                }
                expect((options[0] as any).data)
                    .toEqual({ text: 'f1', value: 'f1' });
                expect((options[1] as any).data)
                    .toEqual({ text: 'f2', value: 'f2' });
                expect((options[2] as any).data)
                    .toEqual({ text: 'f3', value: 'f3' });

                //Clear input and type `x` letter
                TestUtils.typeLetter(input, 'x', true);
                await TestUtils.sleep(0);
                var options2 = <NodeListOf<HTMLElement>> infinite.querySelectorAll(`li`);
                if(options2.length === 0) {
                    throw `options2 shouldn't be empty!`;
                }
                expect((options2[0] as any).data)
                    .toEqual({ text: 'x1', value: 'x1' });
                expect((options2[1] as any).data)
                    .toEqual({ text: 'x2', value: 'x2' });
                expect((options2[2] as any).data)
                    .toEqual({ text: 'x3', value: 'x3' });
                
                //Clear input and type `q` letter - Which resolve empty set from the backend mock
                TestUtils.typeLetter(input, 'q', true);
                await TestUtils.sleep(0);
                var options3 = <NodeListOf<HTMLElement>> infinite.querySelectorAll(`li`);
                expect(options3.length).toBe(0);
                done();
            });


            it(`should show the items received from the backend mock based on page and scrolling event`, 
                async function (done):es6Promise<any> {
                    var infinite = document.createElement('div');
                    var iniElm = new InfiniteAutocomplete(infinite);
                    var conf = {
                        getDataFromApi: function() {
                            return new es6Promise((resolve) => {
                                resolve([
                                    { text: 'one', value: 1 },
                                    { text: 'two', value: 2 }
                                ]);
                            });
                        }
                    };
                    spyOn(conf, 'getDataFromApi');
                    
                    iniElm.setConfig({
                        getDataFromApi: conf.getDataFromApi,
                        fetchSize: 2
                    });
                    
                    var input = <HTMLInputElement> infinite.querySelector(`input`);
                    var optionsList = <HTMLElement> infinite.querySelector(`ul`);
                    TestUtils.typeLetter(input, `t`);
                    await TestUtils.sleep(0);

                    //Get data from text `t` with page 1 (first chunk) with size of 2 per chunk
                    expect(conf.getDataFromApi)
                        .toHaveBeenCalledWith(`t`, 1, 2);

                    //Scroll to bottom
                    TestUtils.scrollToBottom(optionsList);
                    await TestUtils.sleep(0);

                    //Get data from text `t` with page 2 (second chunk) with size of 2 per chunk
                    expect(conf.getDataFromApi)
                        .toHaveBeenCalledWith(`t`, 2, 2);

                    done();
                }
        );
    });


    describe(`Options based on static data`, function() {

        it(`should not show the items when they don't match the search`, 
            async function (done):es6Promise<void> {
                var infinite = document.createElement('div');
                var iniElm = new InfiniteAutocomplete(infinite);

                iniElm.setConfig({data: [
                    { text: 'first', value: 1},
                    { text: 'second', value: 2},
                    { text: 'theird', value: 3},
                    { text: 'fourth', value: 4},
                    { text: 'fivth', value: 5}
                ]});

                var input = <HTMLInputElement> infinite.querySelector(`input`);
                TestUtils.typeLetter(input, 'x');
                await TestUtils.sleep(0);
                var options = <NodeListOf<HTMLElement>> infinite.querySelectorAll(`li`);
                expect(options.length).toBe(0);
                var optionsList = <HTMLElement> infinite.querySelector(`ul`);
                expect(optionsList.style.display)
                    .toBe(`none`);
                done();
        });


        it(`should bind the value of options into the DOM node element as 'data'`, 
            async function (done):es6Promise<any> {
                var infinite = document.createElement('div');
                var iniElm = new InfiniteAutocomplete(infinite);

                iniElm.setConfig({data: [
                    { text: 'first', value: 1},
                    { text: 'second', value: 2},
                    { text: 'theird', value: 3},
                    { text: 'fourth', value: '4'},
                    { text: 'fivth', value: {a: 1, b: 2}}
                ]});

                var input = <HTMLInputElement> infinite.querySelector(`input`);
                TestUtils.typeLetter(input, 'f');
                await TestUtils.sleep(0);
                var options = <NodeListOf<HTMLElement>> infinite.querySelectorAll(`li`);
                if(options.length === 0) {
                    throw `options shouldn't be empty!`;
                }
                expect((options[0] as any).data.value)
                    .toBe(1);
                expect((options[1] as any).data.value)
                    .toBe('4');
                expect((options[2] as any).data.value)
                    .toEqual({a:1, b: 2});
                done();
        });


        it(`should show the items when clicking on the input even if the input is empty`, 
            async function(done):es6Promise<void> {
                var infinite = document.createElement('div');
                var iniElm = new InfiniteAutocomplete(infinite, {
                    fetchSize: 2
                });

                iniElm.setConfig({data: [
                    { text: 'first', value: 1},
                    { text: 'second', value: 2},
                    { text: 'theird', value: 3},
                    { text: 'fourth', value: 4},
                    { text: 'fivth', value: 5}
                ]});

                var input = <HTMLInputElement> infinite.querySelector(`input`);
                TestUtils.clickOnElement(input);
                await TestUtils.sleep(0);
                var options = <NodeListOf<HTMLElement>> infinite.querySelectorAll(`li`);
                expect(options.length).toBe(2);
                expect(options[0].innerText)
                        .toContain('first');
                expect(options[1].innerText)
                        .toContain('second');
                done();
        });


        it(`should show more items when scrolling to bottom if data fits, and updates current page number`, 
            async function(done):es6Promise<void> {
                var infinite = document.createElement('div');
                var iniElm = new InfiniteAutocomplete(infinite, {
                    fetchSize: 3
                });

                iniElm.setConfig({data: [
                    { text: 'first', value: 1},
                    { text: 'second', value: 2},
                    { text: 'theird', value: 3},
                    { text: 'fourth', value: 4},
                    { text: 'fivth', value: 5},
                    { text: 'fivth', value: 6},
                    { text: 'fivth', value: 7},
                    { text: 'fivth', value: 8}
                ]});

                var optionsBase = <HTMLElement> infinite.querySelector(`ul`);

                var input = <HTMLInputElement> infinite.querySelector(`input`);
                TestUtils.clickOnElement(input);
                await TestUtils.sleep(0);
                var options = <NodeListOf<HTMLElement>> infinite.querySelectorAll(`li`);
                expect(options.length).toBe(3); //First data chunk
                expect((iniElm as any).page).toBe(1);

                //Scroll to bottom
                TestUtils.scrollToBottom(optionsBase);
                await TestUtils.sleep(0);

                var optionsAfterScrolling = <NodeListOf<HTMLElement>> infinite.querySelectorAll(`li`);
                expect(optionsAfterScrolling.length).toBe(6); //two chunks
                expect((iniElm as any).page).toBe(2);

                //Scroll to bottom
                TestUtils.scrollToBottom(optionsBase);
                await TestUtils.sleep(0);

                var optionsAfterScrolling = <NodeListOf<HTMLElement>> infinite.querySelectorAll(`li`);
                expect(optionsAfterScrolling.length).toBe(8); //three chunks (last two items - smaller than chunk)
                expect((iniElm as any).page).toBe(3);

                done();
        });


        it(`should hide the options when pressing Esc if they exist (opened)`, 
            async function(done):es6Promise<void> {
                var infinite = document.createElement('div');
                var iniElm = new InfiniteAutocomplete(infinite, {
                    fetchSize: 2
                });

                iniElm.setConfig({data: [
                    { text: 'first', value: 1},
                    { text: 'second', value: 2},
                    { text: 'theird', value: 3},
                    { text: 'fourth', value: 4},
                    { text: 'fivth', value: 5}
                ]});

                var input = <HTMLInputElement> infinite.querySelector(`input`);
                TestUtils.clickOnElement(input);
                await TestUtils.sleep(0);
                var options = <NodeListOf<HTMLElement>> infinite.querySelectorAll(`li`);
                expect(options.length).toBe(2);
                
                TestUtils.clickEsc();
                var optionsAfterEsc = <NodeListOf<HTMLElement>> infinite.querySelectorAll(`li`);
                expect(optionsAfterEsc.length).toBe(0);
                done();
        });



        it(`should show the items when they match the search`, async function(done):es6Promise<void> {
            var infinite = document.createElement('div');
            var iniElm = new InfiniteAutocomplete(infinite);

            iniElm.setConfig({data: [
                { text: 'first', value: 1},
                { text: 'second', value: 2},
                { text: 'theird', value: 3},
                { text: 'fourth', value: 4},
                { text: 'fivth', value: 5}
            ]});

            var input = <HTMLInputElement> infinite.querySelector(`input`);
            TestUtils.typeLetter(input, 'f');
            await TestUtils.sleep(0);
            var options = <NodeListOf<HTMLElement>> infinite.querySelectorAll(`li`);
            if(options.length === 0) {
                throw `options shouldn't be empty!`;
            }
            for( var i = 0; i < options.length; i++) {
                expect(options[i].innerText)
                    .toContain('f');
            }

            var optionsList = <HTMLElement> infinite.querySelector(`ul`);
            expect(optionsList.style.display)
                .toBe(``);

            TestUtils.typeLetter(input, 'i');
            await TestUtils.sleep(0);
            var options = <NodeListOf<HTMLElement>> infinite.querySelectorAll(`li`);
            if(options.length === 0) {
                throw `options shouldn't be empty!`;
            }
            for( var i = 0; i < options.length; i++) {
                expect(options[i].innerText)
                    .toContain('fi');
            }

            var optionsList = <HTMLElement> infinite.querySelector(`ul`);
            expect(optionsList.style.display)
                .toBe(``);

            done();
        });

        describe(`Selecting an option: `, function() {

            it(`should update the input value with the clicked one`, 
                async function (done):es6Promise<any> {
                    var infinite = document.createElement('div');
                    var iniElm = new InfiniteAutocomplete(infinite);

                    iniElm.setConfig({data: [
                        { text: 'first', value: 1},
                        { text: 'second', value: 2},
                        { text: 'theird', value: 3},
                        { text: 'fourth', value: 4},
                        { text: 'fivth', value: 5}
                    ]});

                    var input = <HTMLInputElement> infinite.querySelector(`input`);
                    TestUtils.typeLetter(input, 'd');
                    await TestUtils.sleep(0);
                    var secondOption = <HTMLElement> infinite.querySelectorAll(`li`)[0];
                    TestUtils.clickOnElement(secondOption);
                    expect(input.value)
                        .toBe(`second`);
                    done();
            });
        });

        describe(`onSelect function in configuration: `, function() {

            it(`Passed onSelect function in configuration should be executed when selecting option, 
                    and will receive as arguments the selected DOM element and it's text and value`, 
                async function (done):es6Promise<any> {
                    var infinite = document.createElement('div');
                    var iniElm = new InfiniteAutocomplete(infinite);
                    var object = {
                        spiedFunction: function() {}
                    };

                    spyOn(object, 'spiedFunction');

                    iniElm.setConfig({data: [
                        { text: 'first', value: 1},
                        { text: 'second', value: 2},
                        { text: 'theird', value: 3},
                        { text: 'fourth', value: 4},
                        { text: 'fivth', value: 5}
                    ], onSelect: object.spiedFunction});

                    var input = <HTMLInputElement> infinite.querySelector(`input`);
                    TestUtils.typeLetter(input, 'r');
                    await TestUtils.sleep(0);
                    var fourthOption = <HTMLElement> infinite.querySelectorAll(`li`)[2];
                    TestUtils.clickOnElement(fourthOption);
                    expect(object.spiedFunction)
                        .toHaveBeenCalledWith(fourthOption, {text: 'fourth', value: 4});
                    done();
            });
        });
    });
});
