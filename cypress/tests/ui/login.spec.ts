import { LoginPage } from "../../pages/login.page";
import { HomePage } from "../../pages/home.page";

const loginPage = new LoginPage();
const homePage = new HomePage();

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
});
