// addBooks_pageObjects.ts
import { type Page, type Locator } from '@playwright/test';

export class AddBookPageObjects {
  readonly page: Page;
  readonly AddnewButton: Locator
  readonly titleInputField: Locator
  readonly genreInputField: Locator
  readonly isbnInputField: Locator
  readonly summaryInputField: Locator
  readonly submitButton: Locator
  readonly tablebody:Locator
  readonly nodata:Locator

  constructor(page: Page) {
    this.page = page;
    this.AddnewButton= page.getByRole('button', { name: 'Add New' })
    this.titleInputField = page.locator('#Title')
    this.genreInputField=page.locator('#Genre')
    this.isbnInputField=page.locator('#ISBN')
    this.summaryInputField=page.locator('#Summary')
    this.submitButton = page.locator('button[type="submit"]')
    this.tablebody=page.locator('tbody.ant-table-tbody')
    this.nodata=page.locator('text=No Data')
  }
}