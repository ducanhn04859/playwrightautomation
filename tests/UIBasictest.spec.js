const { test } = require("@playwright/test");

test("Browser Context PlayWRight Test", async ({ browser }) => {
  // Create a new incognito browser context.
  const context = await browser.newContext();
  // Create a new page in a pristine context.
  const page = await context.newPage();
  //   await page.goto("https://example.com");
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
});

test("Page PlayWRight Test", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
});
