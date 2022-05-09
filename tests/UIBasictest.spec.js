const { test, expect } = require("@playwright/test")

test.describe("Login page", () => {
  test("Browser Context PlayWRight Test", async ({ browser }) => {
    // Create a new incognito browser context.
    const context = await browser.newContext()
    // Create a new page in a pristine context.
    const page = await context.newPage()
    await page.goto(
      "https://playwright.dev/docs/inspector#open-playwright-inspector"
    )
    //   await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  })

  test("Page PlayWRight Test", async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
  })

  test("Verified title of page", async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    console.log(await page.title())
    await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy")
  })

  test("Login Page Automation", async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    //css selector
    await page.locator("#username").type("Bob Nguyen")
    await page.locator("[type='password']").type("123456")
    await page.locator("#signInBtn").click()
  })

  test.only("Login Page Automation With Wrong username/password", async ({
    page,
  }) => {
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    //css selector
    await page.locator("#username").type("Bob Nguyen")
    await page.locator("[type='password']").type("123456")
    await page.locator("#signInBtn").click()
    //wait until this locator show up page
    console.log(await page.locator("[style*='block']").textContent()) //Incorrect username/password.
    const locator_alert = await page.locator("[style*='block']").textContent()
    await expect(locator_alert).toContainText("Incorrect")
  })
})
