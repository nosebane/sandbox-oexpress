const apiMe = `${Cypress.env("apiUrl")}/auth/member/me`;

describe("Auth Login API", function () {
  let apiToken = "";

  before(function () {
    cy.loginByApi().then((response) => {
      return (apiToken = response.body.data.access_token);
    });
  });

  context("GET /auth/member/me", function () {
    it("user have information detail", function () {
      cy.request({
        method: "GET",
        url: `${apiMe}`,
        headers: {
          "x-api-key": Cypress.env("x_api_key"),
          Authorization: "Bearer " + apiToken,
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.error_code).to.equal(0);
        expect(response.body.data).to.not.be.empty;
      });
    });
  });
});
