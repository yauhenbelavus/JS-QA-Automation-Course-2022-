
export class Element {
  private readonly element;
   
  constructor (locator: string) {
      this.element = cy.get(locator);
  }

  public click() {
      this.element.click();
  }

  public waitForElementVisible() {
      this.element.should('be.visible');
  }

  public setValue(valueName: string) {
      this.element.type(valueName);
  }

  public waitForElementIsChecked() {
      this.element.not('[disabled]')
      .check().should('be.checked');
  }

  public checkForElementAttributeValue(text: string) {
      this.element.invoke('attr', 'aria-label')
      .should('eq', text)
  }

  public waitForElementExist() {
      this.element.should('exist');
  }

  public checkElementHasText(text: string) {
      this.element.should('have.text', text);
  }
}   