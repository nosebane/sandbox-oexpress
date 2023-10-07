/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject = any> {
    loginByApi(username?: string, password?: string): Chainable<Response<any>>;
  }
}
