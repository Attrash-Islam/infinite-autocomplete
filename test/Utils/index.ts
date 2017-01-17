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
     */
    static typeLetter(input:HTMLInputElement, letter:string) {
        input.value += letter;
        var typingEvent = new Event('input');
        input.dispatchEvent(typingEvent);
    }

    
    static sleep(ms:number):es6Promise<any> {
        return new es6Promise(resolve => setTimeout(resolve, ms));
    }
}