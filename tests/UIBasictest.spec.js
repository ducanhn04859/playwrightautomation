const { test, expect } = require('@playwright/test');

test.describe('Login page', () => {
  test('Browser Context PlayWRight Test', async ({ browser }) => {
    // Create a new incognito browser context.
    const context = await browser.newContext();
    // Create a new page in a pristine context.
    const page = await context.newPage();
    await page.goto(
      'https://playwright.dev/docs/inspector#open-playwright-inspector'
    );
    //   await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  });

  test('Page PlayWRight Test', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  });

  test('Verified title of page', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    console.log(await page.title());
    await expect(page).toHaveTitle('LoginPage Practise | Rahul Shetty Academy');
  });

  test('Login Page Automation', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    //css selector
    await page.locator('#username').type('Bob Nguyen');
    await page.locator("[type='password']").type('123456');
    await page.locator('#signInBtn').click();
  });

  test.only('Login Page Automation With Wrong username/password', async ({
    page,
  }) => {
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    //css selector
    await page.locator('#username').type('Bob Nguyen');
    await page.locator("[type='password']").type('123456');
    await page.locator('#signInBtn').click();
    //wait until this locator show up page
    console.log(await page.locator("[style*='block']").textContent()); //Incorrect username/password.
    const locator_alert = await page.locator("[style*='block']");
    await expect(locator_alert).toContainText('Incorrect');
  });

  test.only('Wrong username/password With variable ', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    //css selector
    const username = page.locator('#username');
    const passWord = page.locator("[type='password']");
    const signInBtn = page.locator('#signInBtn');

    await username.type('Bob Nguyen');
    await passWord.type('123456');
    await signInBtn.click();
    //wait until this locator show up page
    const locator_alert = await page.locator("[style*='block']");
    await expect(locator_alert).toContainText('Incorrect');
  });

  test.only('Wrong username/password With FILL function ', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    //css selector
    const useName = page.locator('#username');
    const passWord = page.locator("[type='password']");
    const signInBtn = page.locator('#signInBtn');

    await useName.type('Bob Nguyen');
    await passWord.type('123456');
    await signInBtn.click();
    //wait until this locator show up page
    const locator_alert = await page.locator("[style*='block']");
    await expect(locator_alert).toContainText('Incorrect');
    //type -fill
    await useName.fill(''); // to clear all content in text field
    await useName.fill('rahulshettyacademy'); // to fill content into field
    await passWord.fill('learning'); // to fill content into field
  });

  test.only('Login successfully ', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    //css selector
    const useName = page.locator('#username');
    const passWord = page.locator("[type='password']");
    const signInBtn = page.locator('#signInBtn');

    //fill
    await useName.fill('rahulshettyacademy'); // to fill content into field
    await passWord.fill('learning'); // to fill content into field
    await signInBtn.click();
    await expect(page).toHaveTitle('ProtoCommerce');
  });

  test('Select childElement in DOM ', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    //css selector
    const useName = page.locator('#username');
    const passWord = page.locator("[type='password']");
    const signInBtn = page.locator('#signInBtn');

    //fill
    await useName.fill('rahulshettyacademy'); // to fill content into field
    await passWord.fill('learning'); // to fill content into field
    await signInBtn.click();
    await expect(page).toHaveTitle('ProtoCommerce');
    //Get first child from parent
    // Method 1
    // const iphoneProduct = page.locator(".card-body a").nth(0)
    // Method 2
    const firstProduct = page.locator('.card-body a').first();
    await expect(firstProduct).toContainText('iphone X');

    const secondProduct = page.locator('.card-body a').nth(1);
    await expect(secondProduct).toContainText('Samsung');
    // Return all title of child
    const listTitle = await page.locator('.card-body a').allTextContents();
    console.log(listTitle);
  });

  test.only('UI Control with dropbox ', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    //css selector
    const useName = page.locator('#username');
    const passWord = page.locator("[type='password']");
    const signInBtn = page.locator('#signInBtn');
    const dropbox = page.locator('select.form-control');

    // fill form
    await useName.fill('bob@gmail.com');
    await passWord.fill('123@123aB');
    await dropbox.selectOption('consult');
    await signInBtn.click();
  });

  test.only('UI Control with checkbox ', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    //css selector
    const useName = page.locator('#username');
    const passWord = page.locator("[type='password']");
    const signInBtn = page.locator('#signInBtn');
    const checkbox = page.locator('.radiotextsty').nth(1);
    const okBtn = page.locator('#okayBtn');
    const term = page.locator('#terms');
    // fill form
    await useName.fill('bob@gmail.com');
    await passWord.fill('123@123aB');
    await checkbox.click();
    await okBtn.click();
    await expect(checkbox).toBeChecked();
    await term.click();
    await expect(term).toBeChecked();
    await term.uncheck();
    expect(await term.isChecked()).toBeFalsy();
  });

  test.only('UI Control with attribute ', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    //css selector
    const link = page.locator("[href*='documents-request']");
    await expect(link).toHaveAttribute('class', 'blinkingText');
  });

  test.only('Check child windown hadl ', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    //css selector
    const link = page.locator("[href*='documents-request']");
    await expect(link).toHaveAttribute('class', 'blinkingText');
  });
});
