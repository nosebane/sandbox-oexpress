export class BasePage {
  visit() {
    cy.visit("/");
  }

  inputText(locator: Cypress.Chainable<JQuery<HTMLElement>>, text: string) {
    locator.clear({ force: true }).type(text);
  }

  validateAlertTextContain(locator: Cypress.Chainable<JQuery<HTMLElement>>, text: string) {
    locator.contains(text);
  }

  validateElmentDisabled(locator: Cypress.Chainable<JQuery<HTMLElement>>) {
    locator.should("be.disabled");
  }
}
