// addBooks_assertions.ts
import { expect } from '@playwright/test';
import { AddBookPageObjects } from './addBooks_pageObjects';

export class AddBooksAssertions {
  private page: AddBookPageObjects;

  constructor(page: AddBookPageObjects) {
    this.page = page;
  }

  async nodataValidationisPresent() {
    await expect(this.page.nodata).toBeVisible()
  }

  async nodataValidationisNotPresent() {
    await expect(this.page.nodata).not.toBeVisible()
  }

  async verifyBookInTable(title: string) {
    await expect(this.page.tablebody).toContainText(title);
  }

}
