import { defineConfig } from "cypress";
import { baseUrl } from "./cypress/support/constans";
import { defaultWaitingTime } from "./cypress/support/constans";
import AllureWriter from "@shelex/cypress-allure-plugin/writer";
import { supportFolder } from "./cypress/support/constans";

export default defineConfig({
  e2e: {
    specPattern: "./hw-24/cypress/e2e/**/*.cy.ts",
    baseUrl,
    defaultCommandTimeout: defaultWaitingTime * 5,
    supportFile: `${supportFolder}index.ts`,
    videosFolder: `${supportFolder}assets`,
    screenshotsFolder: `${supportFolder}screenshots`,
    downloadsFolder: `${supportFolder}downloads`,
    setupNodeEvents(on, config) {
      AllureWriter(on, config);
      return config;
    },
    env: {
      allure: "true",
      allureResultsPath: `${supportFolder}assets/allure-results`
    },
  }
});