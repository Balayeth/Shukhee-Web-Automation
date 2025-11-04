const {test, expect} = require('@playwright/test');

test.describe.serial('Registration', () => {
  test.beforeEach(async ({page}) => {
    await page.goto('https://tex-bazar-dev.vercel.app/auth?type=phone');
  });

  const existemail="buy@yopmail.com";
  const newemail="hello123@yopmail.com";
  const existNumber="1512345670";
  const newNumber="1512345000";
  const otpcode="123456";
  //TC_001: Verify that registered user is unable to register again with the same phone number/email
  test("Verify that registered user is unable to register again with the same email",async({page}) =>{
    await page.getByText('Email Address').click();
    await page.fill('input[placeholder="Type your email address"]',existemail);
    await page.click("//button[@role='checkbox']");
    await page.click('button[type="submit"]');
    await expect(page.getByText('This email already exists, Please login')).toBeVisible();

});

  // TC_002: Verify that user is unable to complete registration without filling all required fields in the full registration form
  test("Verify that user is unable to complete registration without filling all required fields in the full registration form", async({page})=>{
    await page.getByText('Send OTP').click();
    await expect(page.getByText(/Please Enter the correct phone number.|Too many requests/)).toBeVisible();
    await page.getByText('Email Address').click();
    await page.getByText('Send OTP').click();
    await expect(page.getByText('Invalid email')).toBeVisible();
    await page.fill('input[placeholder="Type your email address"]',newemail);
    await page.getByText('Send OTP').click();
    await expect(page.getByText('Please agree to the terms and conditions.')).toBeVisible();
    await page.click("//button[@role='checkbox']");
    await page.click('button[type="submit"]');
    await page.click('button[type="submit"]');
    await expect(page.getByText('Your one-time password must be 6 characters.')).toBeVisible();
    await page.fill('input[autocomplete="one-time-code"]',otpcode);
    await page.click('button[type="submit"]');

  });
});