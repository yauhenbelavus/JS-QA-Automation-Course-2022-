/// <reference types="cypress" />

Cypress.Commands.add('setCredentials', (emailInput: string, passwordInput: string, emailValue: string, passwordValue: string) => {
    cy.get(emailInput).type(emailValue);
    cy.get(passwordInput).type(passwordValue);
})