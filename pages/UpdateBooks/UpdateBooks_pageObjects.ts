/*import { type Page, type Locator } from '@playwright/test';

export class UpdateBookPageObjects {
  readonly page: Page;
  readonly viewMoreButton: Locator;
  readonly deleteButton: Locator;
  readonly editButton: Locator;
  readonly tablebody:Locator;
  readonly titleInputField: Locator
  readonly genreInputField: Locator
  readonly isbnInputField: Locator
  readonly summaryInputField: Locator
  readonly submitButton: Locator
  readonly nodata:Locator
  constructor(page: Page) {
    this.page = page;
    this.viewMoreButton= page.locator('button:has-text("View More")')
    this.deleteButton = page.locator('button:has-text("Delete")')
    this.editButton= page.locator('button:has-text("Edit")')
    this.tablebody=page.locator('tbody.ant-table-tbody')
    this.titleInputField = page.locator('#Title')
    this.genreInputField=page.locator('#Genre')
    this.isbnInputField=page.locator('#ISBN')
    this.summaryInputField=page.locator('#Summary')
    this.submitButton = page.locator('button[type="submit"]')
    this.tablebody=page.locator('tbody.ant-table-tbody')
    this.nodata=page.locator('text=No Data')
  }
}
*/
import { type Page, type Locator } from '@playwright/test';
import { AddBookPageObjects } from '../addBooks/addBooks_pageObjects';

export class UpdateBookPageObjects {
  readonly page: Page;
  readonly addBookPageObjects: AddBookPageObjects;
  readonly viewMoreButton: Locator;
  readonly deleteButton: Locator;
  readonly editButton: Locator;
  readonly tablebody:Locator
  readonly backArrow:Locator
  readonly titleInputFieldNoteditable: Locator
  readonly genreInputFieldNoteditable: Locator
  readonly summaryInputFieldNoteditable: Locator
  readonly isbnInputFieldNoteditable: Locator

  constructor(page: Page) {
    this.page = page;
    this.addBookPageObjects = new AddBookPageObjects(page);
    this.viewMoreButton = page.locator('button:has-text("View More")').last();
    this.deleteButton = page.locator('button:has-text("Delete")').last();
    this.editButton = page.getByRole('button', { name: 'Edit' }).last()
    this.tablebody=page.locator('tbody.ant-table-tbody')
    this.backArrow=page.locator('[data-icon="arrow-left"]')
    this.titleInputFieldNoteditable=page.locator('.ant-descriptions-item-content').first()
    this.genreInputFieldNoteditable=page.locator('.ant-descriptions-item-content').nth(1)
    this.summaryInputFieldNoteditable=page.locator('.ant-descriptions-item-content').nth(3)
    this.isbnInputFieldNoteditable=page.locator('.ant-descriptions-item-content').nth(2)
    this.summaryInputFieldNoteditable=page.locator('#Summary').first()
    this.isbnInputFieldNoteditable=page.locator('#ISBN').first()
  }
}