
/**
 * Test Utils Class
 * @author Islam Attrash
 */
export class TestUtils {

  /**
   * Simulate typing letter in input
   * @param input - HTMLInputElement
   * @param letter
   * @param clear - If true clear the input and then append @letter
   */
  public static typeLetter(input: HTMLInputElement, letter: string, clear: boolean = false) {
    if (clear) {
        input.value = letter;
    } else {
        input.value += letter;
    }
    let typingEvent = new Event("input");
    input.dispatchEvent(typingEvent);
  }

  /**
   * Simulate click event on element
   * @param element - HTMLElement
   */
  public static clickOnElement(element: HTMLElement) {
    let clickEvent = new Event("click", { bubbles: true });
    element.dispatchEvent(clickEvent);
  }

  /**
   * Simulate scroll to bottom event on element
   * @param element - HTMLElement
   */
  public static scrollToBottom(element: HTMLElement) {
    let scrollEvent = new Event("scroll", { bubbles: true });
    element.scrollTop = 10000; // Jump to bottom
    element.dispatchEvent(scrollEvent);
  }

  /**
   * Simulate Escape press event on document
   */
  public static clickEsc() {
    let escapeClick = new Event("keydown");
    (escapeClick as any).keyCode = 27;
    document.dispatchEvent(escapeClick);
  }

  /**
   * Simulate upArrow press event on element
   * @param element
   */
  public static pressUpArrow(element: HTMLElement) {
    let upArrow = new Event("keydown");
    (upArrow as any).keyCode = 38;
    element.dispatchEvent(upArrow);
  }

  /**
   * Simulate downArrow press event on element
   * @param element
   */
  public static pressDownArrow(element: HTMLElement) {
    let downArrow = new Event("keydown");
    (downArrow as any).keyCode = 40;
    element.dispatchEvent(downArrow);
  }

  /**
   * Simulate Enter press event on element
   * @param element
   */
  public static pressEnter(element: HTMLElement) {
    let enter = new Event("keydown");
    (enter as any).keyCode = 13;
    element.dispatchEvent(enter);
  }

  /**
   * Simulate mouseover (hover) event on element
   * @param element
   */
  public static hoverOnElement(element: HTMLElement) {
    let hover = new Event("mouseover");
    element.dispatchEvent(hover);
  }

  /**
   * Block code until async finished
   * @param ms - Time in milliseconds
   * @returns Promise<any>
   */
  public static sleep(ms: number): Promise<any> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

}
