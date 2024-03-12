// Import necessary modules from Playwright and your project files
import { test as baseTest } from '@playwright/test';
import { UpdateBookActions } from '../pages/UpdateBooks/UpdateBooks_actions';
import { UpdateBooksAssertions } from '../pages/UpdateBooks/UpdateBooks_assertions';
import { UpdateBookPageObjects } from '../pages/UpdateBooks/UpdateBooks_pageObjects';

// Extend the base test fixture with additional properties for UpdateBookActions and UpdateBooksAssertions
export const test = baseTest.extend({
    context: async ({ browser }, use) => {
        const context = await browser.newContext();
        await use(context);
    },

    page: async ({ context }, use) => {
        const page = await context.newPage();
        await use(page);
    },
    
    updateBookActions: async ({ page }, use) => {
        await use(new UpdateBookActions(new UpdateBookPageObjects(page)));
    },
    
    updateBookAssertions: async ({ page }, use) => {
        await use(new UpdateBooksAssertions(new UpdateBookPageObjects(page)));
    },
});

export default test;