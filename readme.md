readme file
## Project Structure

The project is structured to ensure modularity and ease of maintenance. Key components include:

- **Playwright Configuration**: Located in `playwright.config.js`, this file contains configurations for running tests in parallel, retry mechanisms, and reporter settings among others.
- **Page Objects**: Found under the `pages` directory, page objects like `addBooks_pageObjects.ts` encapsulate the elements on the web pages and the actions that can be performed on them, promoting reusability and reducing code duplication.
- **E2E Tests**: The `tests/e2e` directory contains end-to-end test scripts such as `updateBooks.spec.js` that utilize the page objects to interact with the web application and verify its behavior.
- **.gitignore**: This file ensures that node modules and test results are not tracked by Git, keeping the repository clean.

### About Modularity

Modularity is a core principle in this project, allowing for separation of concerns and making the codebase easier to navigate and maintain. By dividing the project into logical units such as configurations, page objects, and tests, we enhance code reusability and simplify the testing process.

### API Calls

API calls are abstracted within the page objects and test actions to interact with the web application under test. This abstraction layer allows for changing the underlying API calls without affecting the test scripts, thereby promoting flexibility and maintainability.

### Fixtures

Fixtures in Playwright are used to provide a consistent test environment and reusable pieces of code. They can be configured in `playwright.config.js` to set up conditions that are common across tests, such as logging in to the application before tests run or setting up the browser environment.

By adhering to these principles and structures, the project aims to provide a robust and maintainable test suite for the web application.

Note: The AUT was https://github.com/ruiyigan/books-manager-react-app

