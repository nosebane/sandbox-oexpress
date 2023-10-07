import { defineConfig } from "cypress";
import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  reporter: "cypress-mochawesome-reporter",
  e2e: {
    specPattern: "cypress/tests/**/*.{spec,page,locator}.{js,jsx,ts,tsx}",
    pageLoadTimeout: 120000,
    baseUrl: "https://sandbox-app.oexpress.co.id",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("cypress-mochawesome-reporter/plugin")(on);
    },
  },
  env: {
    apiUrl: "https://sandbox.api.oexpress.co.id",
    registered_email: process.env.REGISTERED_EMAIL,
    registered_password: process.env.REGISTERED_PASSWORD,
    x_api_key: process.env.XAPIKEY,
  },
});
