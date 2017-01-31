import { Promise as es6Promise } from 'es6-promise';

/**
 * Test Utils Class
 * @author Islam Attrash
 */
export class TestUtils {
    
    constructor() {

    }

    /**
     * Simulate typing letter in input
     * @param input - HTMLInputElement
     * @param letter
     * @param clear - If true clear the input and then append @letter
     */
    static typeLetter(input:HTMLInputElement, letter:string, clear:boolean = false) {
        if(clear) {
            input.value = letter;
        } else {
            input.value += letter;
        }
        var typingEvent = new Event('input');
        input.dispatchEvent(typingEvent);
    }


    /**
     * Simulate click event on element
     * @param element - HTMLElement
     */
    static clickOnElement(element:HTMLElement) {
        var clickEvent = new Event('click', { bubbles: true });
        element.dispatchEvent(clickEvent);
    }
    
    
    /**
     * Simulate scroll to bottom event on element
     * @param element - HTMLElement
     */
    static scrollToBottom(element:HTMLElement) {
        var scrollEvent = new Event('scroll', { bubbles: true });
        element.scrollTop = 10000; //Jump to bottom
        element.dispatchEvent(scrollEvent);
    }


    /**
     * Simulate Escape press event on document
     */
    static clickEsc() {
        var escapeClick = new Event('keydown');
        (escapeClick as any).keyCode = 27;
        document.dispatchEvent(escapeClick);
    }

    /**
     * Simulate upArrow press event on document
     */
    static pressUpArrow(element:HTMLElement) {
        var upArrow = new Event('keydown');
        (upArrow as any).keyCode = 38;
        element.dispatchEvent(upArrow);
    }


    /**
     * Simulate downArrow press event on document
     */
    static pressDownArrow(element:HTMLElement) {
        var downArrow = new Event('keydown');
        (downArrow as any).keyCode = 40;
        element.dispatchEvent(downArrow);
    }


    /**
     * Simulate Enter press event on document
     */
    static pressEnter(element:HTMLElement) {
        var enter = new Event('keydown');
        (enter as any).keyCode = 13;
        element.dispatchEvent(enter);
    }

    /**
     * Block code until async finished
     * @param ms - Time in milliseconds
     * @returns Promise<any>
     */
    static sleep(ms:number):es6Promise<any> {
        return new es6Promise(resolve => setTimeout(resolve, ms));
    }

}