
/// <reference types="cypress" />

import './commands';
import '@shelex/cypress-allure-plugin';

declare global {
    namespace Cypress {
        interface Chainable {
            setCredentials(emailInput: string, passwordInput: string, emailValue: string, passwordValue: string): Cypress.Chainable<JQuery<HTMLElement>>
        }
    }
}