export class BasePage {
  visit() {
    cy.visit("/");
  }

  inputText(locator: Cypress.Chainable<JQuery<HTMLElement>>, text: string) {
    locator.clear({ force: true }).type(text);
  }
}
