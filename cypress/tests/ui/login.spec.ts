import { LoginPage } from "../../pages/login.page";
import { HomePage } from "../../pages/home.page";
import { LoginLocator } from "../../locators/login.locator";

const loginPage = new LoginPage();
const homePage = new HomePage();
const loginLocator = new LoginLocator();

describe("Login Page", function () {
  beforeEach(function () {
    loginPage.visit();
  });

  it("have correct url", function () {
    loginPage.validateUrlContain("/login");
  });

  it("login can be success", function () {
    loginPage.login("ebizuone@gmail.com", "P@ssw0rd123");
    homePage.validateLoginSuccessByUserName("ebizu");
  });

  it("invalid email format have alert", function () {
    loginPage.inputText(loginLocator.emailField, "invalid.com");
    loginPage.validateElmentDisabled(loginLocator.masukButton);
    loginPage.validateAlertTextContain(loginLocator.emailAlert, "email harus valid");
  });

  it("password less than 6 character have alert", function () {
    loginPage.login("ebizuone@gmail.com", "12345");
    loginPage.validateAlertTextContain(
      loginLocator.loginAlert,
      "The password must be at least 6 characters"
    );
  });

  it("invalid login credential have alert", function () {
    loginPage.login("ebizuone@gmail.com", "123456");
    loginPage.validateAlertTextContain(
      loginLocator.loginAlert,
      "Kombinasi email dan password salah"
    );
  });
});
