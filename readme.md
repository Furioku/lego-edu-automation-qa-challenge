# Playwright (TS binding) + Cucumber (BDD)

This repository represent automation tests framework, github Actions configuration file and documentation for the technical chalange by lego, performed by Philipp Salata.
Automated tests framework combines two tools: 
1.Cucumber - behavior-driven development (BDD) tool. 
2.Playwright - an open-source automation framework that is used for testing web application, adding TypeScript binding, making it easier to catch errors before runtime.

By combining these technologies, we can create more reliable and maintainable tests.

## Features

1. Execute tests on multiple environments 
2. Posibility of parallel execution
3. Rerun only failed features
4. Retry failed tests on CI
5. Github Actions integrated with downloadable report
6. Page object model

## Project structure

- .github -> yml file to execute the tests in GitHub Actions
- src -> Contains all the features & Typescript code
- test-results -> Contains report related file

## Get Started

### Setup:

1. Clone or download the project
2. Extract and open in the VS-Code
3. `npm i` to install the dependencies
4. `npx playwright install` to install the browsers
5. `npm run test` to execute the tests
6. To run a particular test change in cucumber.js
```
  paths: [
            "src/test/features/featurename.feature"
         ] 
```
7. Use tags to run a specific or collection of specs
```
npm run test --TAGS="@smoke or @login"
```

### Folder structure
0. `src/pages` -> All the page (UI screen)
1. `src/test/features` -> write your features here
2. `src/test/steps` -> Your step definitions goes here
3. `src/hooks/hooks.ts` -> Browser setup and teardown logic
4. `src/hooks/pageFixture.ts` -> Simple way to share the page objects to steps
5. `src/helper/env` -> Multiple environments are handled
6. `src/helper/browsers` -> Multiple browsers are handled
7. `src/helper/test-data` -> Contains data used in tests
8. `src/helper/helperFunctions.ts` -> Contains declarations of offten used functions
9. `src/helper/types` -> To get environment code suggestions
10. `tsconfig.json` -> Configuration file
11. `cucumber.js` -> TypeScript binding configuration file
12. `package.json` -> Contains all the dependencies
13. `ManualTestCases.pdf` -> Contains Manual test cases in Cucumber
14. `TestStrategy.pdf` -> Contains Test Strategy for the Sauce Labs Demo website
15. `PWAHandling.pdf` -> Contains answer to the question "How wouldyouhandle Progressive Web Apps in your automation framework?"