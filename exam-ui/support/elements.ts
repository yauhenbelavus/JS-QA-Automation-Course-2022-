
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

public waitForElementEnable() {
     this.element.should('be.enabled');
  }

public setValue(valueName: string) {
     this.element.type(valueName);
  }

public waitForElementIsChecked() {
     this.element.not('[disabled]')
     .check().should('be.checked');
  }

public checkForElementAttributeValue(attributeValue: number | string, attributeName: string) {
     this.element.invoke('attr', attributeName)
     .should('equal', attributeValue);
  }

public waitForElementExist() {
     this.element.should('exist');
  }

public checkElementHasText(text: string) {
     this.element.should('have.text', text);
  }

public checkElementHasAttribute(attributeName: string) {
     this.element.should('have.attr', attributeName);
  }

public waitForTime(time: number) {
     this.element.wait(time);
  }
}   