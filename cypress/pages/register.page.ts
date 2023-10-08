import { RegisterLocator } from "../locators/register.locator";
import { BasePage } from "../pages/base.page";

const registerLocator = new RegisterLocator();
const basePage = new BasePage();
const uniqueName = basePage.generateNameTimestamp("user");

export class RegisterPage extends BasePage {
  register() {
    this.inputText(registerLocator.nameField, uniqueName);
    this.inputText(registerLocator.emailField, `${uniqueName}@gmail.com`);
    this.inputText(registerLocator.passwordField, Cypress.env("registered_password"));
    this.inputText(registerLocator.noHpField, "081312345678");
    registerLocator.daftarButton.should("be.enabled");
    registerLocator.daftarButton.click();
    cy.log("regis: " + uniqueName);
  }

  validateEmailVerification(message: string) {
    cy.log("validate: " + uniqueName);
    registerLocator.emailVerificationSentMessage.contains(message);
    registerLocator.emailVerificationSentToMessage.contains(`${uniqueName}@gmail.com`);
  }
}
