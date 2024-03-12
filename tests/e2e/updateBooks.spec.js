import { test } from '../../fixtures/updateBooks_fixture.js'; 
import { UpdateBookActions } from '../../pages/UpdateBooks/UpdateBooks_actions.js';
import generateRandomBookData from '../../utils/generateRandomBookData.js'; 
import { addBookViaAPI } from '../../requests/addBooks.js'; 
test.describe.serial('viewmore, edit, delte functionality', () => {

    
    test.beforeAll(() => {
        // Generate bookdata using the requests/addBooks.js file
      addBookViaAPI(generateRandomBookData());
    });

    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:3000/books');
    });

    test('Verify-> viewMore functionality', async ({ page, updateBookActions }) => {
        await updateBookActions.clickviewMore();
    });

    test('Verify-> edit functionality', async ({ page, updateBookActions, updateBookAssertions }) => {
        await updateBookActions.clickeditBook();
        await updateBookAssertions.verifyUpdatedBookInTable('_editText')
    })

    test('verify-> delete functionality', async ({ page,updateBookActions, updateBookAssertions}) => {
        await updateBookActions.clickdeleteBook() //delete the book added in this test
        await updateBookAssertions.verifyBookNotIntable('_editText')
        await updateBookActions.clickdeleteBook() //delete the remaining one more book
        await updateBookAssertions.nodataValidationisPresent()
    });

})