import { AddBookPageObjects } from './addBooks_pageObjects';

export class AddBookActions {
 
private page: AddBookPageObjects;
  constructor(page: AddBookPageObjects) {
    this.page = page;
  }

   async clickaddBook(title, genre, isbn, summary) {
    await this.page.AddnewButton.click()
    await this.page.titleInputField.fill(title);
    await this.page.genreInputField.fill(genre);
    await this.page.isbnInputField.fill(isbn);
    await this.page.summaryInputField.fill(summary);
    await this.page.submitButton.click();
  }
  
}
