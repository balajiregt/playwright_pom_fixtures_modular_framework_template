import { test as baseTest } from '@playwright/test';
import { AddBookActions } from '../pages/addBooks/addBooks_actions';
import { AddBooksAssertions } from '../pages/addBooks/addBooks_assertions'; // 
import { AddBookPageObjects } from '../pages/addBooks/addBooks_pageObjects';

export const test = baseTest.extend ({
    context: async({browser}, use) => {
        const context = await browser.newContext();
        await use(context);
    },

    page: async ({context}, use) => {
        const page = await context.newPage();
        await use(page);
    },
    
    addBookActions: async ({ page }, use) => {
        await use(new AddBookActions(new AddBookPageObjects(page)));
    },
    addBookAssertions: async ({ page }, use) => { 
       await use(new AddBooksAssertions(new AddBookPageObjects(page)));
    }

});

export default test;