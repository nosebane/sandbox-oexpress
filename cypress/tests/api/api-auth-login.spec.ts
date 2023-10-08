describe("Auth Login API", function () {
  context("POST /auth/member/login", function () {
    it("user login success", function () {
      cy.loginByApi().then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.message).to.equal("Login success");
        expect(response.body.error_code).to.equal(0);
        expect(response.body.data.access_token).to.not.be.empty;
      });
    });
  });
});
