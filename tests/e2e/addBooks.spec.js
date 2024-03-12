import { test } from '../../fixtures/addBooks_fixture.js'; // Adjust the path as necess
import generateRandomBookData from '../../utils/generateRandomBookData.js'; // Adjust the path as necessary

test.describe.serial('Adding Books functionality', () => {
    let title, isbn, genre, summary; // Declare variables to hold book data

    test.beforeAll(() => {
        // Generate book data once before all tests
        const bookData = generateRandomBookData();
        ({ title, isbn, genre, summary } = bookData); // Destructure and assign to the scoped variables
    });

    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:3000/books');
        
    })

    test('Verify-> new book added', async ({ addBookActions, addBookAssertions }) => {
        // Use the generated book data in your test
        await addBookAssertions.nodataValidationisPresent()
        await addBookActions.clickaddBook(title, genre, isbn, summary);
        await addBookAssertions.verifyBookInTable(title)
        await addBookAssertions.nodataValidationisNotPresent()
    });
});