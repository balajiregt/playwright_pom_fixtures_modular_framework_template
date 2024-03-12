import { test, expect } from '@playwright/test';

test('example test', async ({ page }) => {
  await page.goto('https://demo.applitools.com/');
  await expect(page).toHaveScreenshot({
    mask: ['.logo-w']
  });
});