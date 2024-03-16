readme file
## Project Structure

The project is structured to ensure modularity and ease of maintenance. Key components include:

- **Playwright Configuration**: Located in `playwright.config.js`, this file contains configurations for running tests in parallel, retry mechanisms, and reporter settings among others.
- **Page Objects, actions, assertions: Found under the `pages` directory, page objects like `addBooks_pageObjects.ts` encapsulate the elements on the web pages and the actions that can be performed on them, promoting reusability and reducing code duplication. Similarly actions, assertions encapsulate the respective tasks in a modular way for respective pages.
- **E2E Tests**: The `tests/e2e` directory contains end-to-end test scripts such as `updateBooks.spec.js` that utilize the page objects to interact with the web application and verify its behavior.
- **.gitignore**: This file ensures that node modules and test results are not tracked by Git, keeping the repository clean.

### About Modularity

Modularity is a core principle in this project, allowing for separation of concerns and making the codebase easier to navigate and maintain. By dividing the project into logical units such as configurations, page objects, and tests, we enhance code reusability and simplify the testing process.

### API Calls, DateGeneration

API calls & DateGeneration functions can be invoked in the before hooks, so that the pre-requisite actions can be done and the tests are ready in the desired state to start.

### Fixtures

Fixtures in Playwright are used to provide a consistent test environment and reusable pieces of code.

By adhering to these principles and structures, the project aims to provide a robust and maintainable test suite for the web application.

Note: The AUT was https://github.com/ruiyigan/books-manager-react-app: 

Step1: npm run server
Step2: npm start
Step3: npx playwright test [Playwright test runner can be started]

