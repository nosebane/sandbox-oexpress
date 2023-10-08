/* eslint-disable @typescript-eslint/no-explicit-any */
/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    loginByApi(username?: string, password?: string): Chainable<Response<any>>;
  }
}
