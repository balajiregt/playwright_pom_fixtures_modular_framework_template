import { UpdateBookPageObjects } from './UpdateBooks_pageObjects'

export class UpdateBookActions {
 
private page: UpdateBookPageObjects ;
  constructor(page: UpdateBookPageObjects) {
    this.page = page;
  }

   async clickeditBook() {
    await this.page.editButton.click();
    await this.page.addBookPageObjects.titleInputField.fill("_editText");
    await this.page.addBookPageObjects.genreInputField.fill("_editText");
    await this.page.addBookPageObjects.summaryInputField.fill("_editText");
    await this.page.addBookPageObjects.submitButton.click();
  }

  async  clickdeleteBook() {
    await this.page.deleteButton.click();
  }

  async clickviewMore() {
    await this.page.viewMoreButton.click();
    await this.page.backArrow.click();
  }
  
}