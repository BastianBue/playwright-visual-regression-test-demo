import { test, expect } from '@playwright/test';

test('should have a screenshot', async({page})=> {
  await page.goto('/');
  await expect(page).toHaveScreenshot({fullPage: true});
})

test('should submit a form', async ({ page }) => {
  await page.goto('/');
});
