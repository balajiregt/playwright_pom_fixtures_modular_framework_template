import { expect } from '@playwright/test';
import { UpdateBookPageObjects } from './UpdateBooks_pageObjects';

export class UpdateBooksAssertions {
  private page: UpdateBookPageObjects;
  constructor(page: UpdateBookPageObjects) {
    this.page = page;
  }
  async verifyUpdatedBookInTable(title: string) {
    await expect(this.page.tablebody).toContainText(title);
  }

  async verifyBookNotIntable(title: string) {
    await expect(this.page.tablebody).not.toContainText(title);
  }

  async nodataValidationisPresent() {
    await this.page.addBookPageObjects.nodata.waitFor({timeout: 5000});
    await expect(this.page.addBookPageObjects.nodata).toBeVisible()
  }

  }