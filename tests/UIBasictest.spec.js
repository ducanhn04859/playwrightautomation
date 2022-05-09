const { test, expect } = require("@playwright/test");

test("Browser Context PlayWRight Test", async ({ browser }) => {
  // Create a new incognito browser context.
  const context = await browser.newContext();
  // Create a new page in a pristine context.
  const page = await context.newPage();
  await page.goto(
    "https://playwright.dev/docs/inspector#open-playwright-inspector"
  );
  //   await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
});

test("Page PlayWRight Test", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
});

test("Verified title of page", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  console.log(await page.title());
  await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");
});

test.only("Login Page Automation", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  page.locator;
});
