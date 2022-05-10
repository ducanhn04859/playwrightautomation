const { test, expect } = require('@playwright/test');

test.describe('Web Ecommerce', () => {
  test('Login page', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/client');
    await page.locator('#userEmail').fill('bob@gmail.com');
    await page.locator('#userPassword').fill('123@123aB');
    await page.locator('#login').click();
    await expect(page).toHaveTitle("Let's Shop");
    await page.waitForLoadState('networkidle');
    const titles = await page.locator('.card-body b').allTextContents();
    console.log(titles);
  });

  test('Login page with waitForNavigation', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/client');
    await page.locator('#userEmail').fill('bob@gmail.com');
    await page.locator('#userPassword').fill('123@123aB');
    await Promise.all([
      page.waitForNavigation(),
      page.locator('#login').click(),
    ]);
    await expect(page).toHaveTitle("Let's Shop");
    // await page.waitForLoadState('networkidle');
    const titles = await page.locator('.card-body b').allTextContents();
    console.log(titles);
  });
});
