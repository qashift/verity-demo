import { test, expect } from '@playwright/test';

test('Skip to Content Link', async ({ page }) => {
  await test.step('Navigate to the login page', async () => {
    await page.goto('https://practicetestautomation.com/practice-test-login/');
    await expect(page).toHaveTitle('Test Login | Practice Test Automation');
  });

  await test.step('Focus on the "Press \"Enter\" to skip to content" link', async () => {
    const skipLink = page.getByRole('link', { name: 'Press "Enter" to skip to content' });
    await skipLink.focus();
  });

  await test.step('Press the "Enter" key', async () => {
    await page.keyboard.press('Enter');
  });

  await test.step('Verify that the page scrolls to the main content section', async () => {
    // Assuming the main content section is identifiable by a heading or similar element
    const mainContentHeading = page.getByRole('heading', { name: 'Test login' });
    const boundingBox = await mainContentHeading.boundingBox();
    expect(boundingBox).not.toBeNull();
    expect(boundingBox!.y).toBeLessThanOrEqual(0);
  });
});