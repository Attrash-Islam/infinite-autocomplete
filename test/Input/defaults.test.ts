import { InfiniteAutocomplete } from '../../src/Components/InfiniteAutocomplete';
import { TestUtils } from '../Utils/index';
import { Promise as es6Promise } from 'es6-promise';

describe(`Input Default implementation: `, function() {
    it(`One single input should be rendered`, function() {
        var infinite = document.createElement('div');
        new InfiniteAutocomplete(infinite);
        expect(infinite.querySelectorAll('input').length).toBe(1);
    });

    describe(`Current page: `, function() {
        it(`should send page as 1 when typings`, function() {
            var infinite = document.createElement('div');
            var iniEle = new InfiniteAutocomplete(infinite, {
                data: [{ text: 'text', value: 'value '}]
            });
            TestUtils.typeLetter(<HTMLInputElement> infinite.querySelector(`input`), `t`);
            expect((iniEle as any).page).toBe(1);
        });
        
        it(`should reset page as 1 when typings`, function() {
            var infinite = document.createElement('div');
            var iniEle = new InfiniteAutocomplete(infinite, {
                data: [{ text: 'text', value: 'value '}]
            });
            //We scrolled so many times after typing something
            (iniEle as any).page = 5;
            //Decided to press a key
            TestUtils.typeLetter(<HTMLInputElement> infinite.querySelector(`input`), `t`);
            expect((iniEle as any).page).toBe(1);
        });
    });


    describe(`Up/Down keypress in input: `, function() {

        it(`should append 'hovered' class for the first option in the first press`, 
            async function(done):es6Promise<any> {
                var infinite = document.createElement('div');
                var iniEle = new InfiniteAutocomplete(infinite, {
                    data: [
                        { text: 'text', value: 'value'}, 
                        { text: 'text2', value: 'value2'}
                    ]
                });
                var inputEle = <HTMLElement> infinite.querySelector(`input`);
                if(inputEle) {
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
            async function(done):es6Promise<any> {
                var infinite = document.createElement('div');
                var iniEle = new InfiniteAutocomplete(infinite, {
                    data: [
                        { text: 'text', value: 'value'}, 
                        { text: 'text2', value: 'value2'}
                    ]
                });
                var inputEle = <HTMLElement> infinite.querySelector(`input`);
                if(inputEle) {
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
            async function(done):es6Promise<any> {
                var infinite = document.createElement('div');
                var iniEle = new InfiniteAutocomplete(infinite, {
                    data: [
                        { text: 'text', value: 'value'}, 
                        { text: 'text2', value: 'value2'}
                    ]
                });
                var inputEle = <HTMLElement> infinite.querySelector(`input`);
                if(inputEle) {
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


        it(`should select the 'hovered' class when pressing enter`, 
            async function(done):es6Promise<any> {
                var infinite = document.createElement('div');
                var object = {
                    spiedFunction: function() {}
                };
                spyOn(object, 'spiedFunction').and.returnValue('');
                
                var iniEle = new InfiniteAutocomplete(infinite, {
                    data: [
                        { text: 'text', value: 'value'}, 
                        { text: 'text2', value: 'value2'}
                    ],
                    onSelect: object.spiedFunction
                });
                var inputEle = <HTMLElement> infinite.querySelector(`input`);
                if(inputEle) {
                    inputEle.click();
                    await TestUtils.sleep(0);
                    var secondOption = infinite.querySelectorAll(`li`)[1];
                    TestUtils.pressDownArrow(inputEle);
                    TestUtils.pressDownArrow(inputEle);
                    TestUtils.pressEnter(inputEle);
                    expect(object.spiedFunction)
                        .toHaveBeenCalledWith(secondOption, {
                            text: 'text2',
                            value: 'value2'
                        })
                    done();
                }
            });

    });

});
