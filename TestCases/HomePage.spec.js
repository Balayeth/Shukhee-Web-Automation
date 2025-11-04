const { test, expect } = require('@playwright/test');

test.describe.serial('Home Page Tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.shukhee.com/en');});

  //TC-001: Verify that top nav bar loads perfectly
  test('Verify that top nav bar loads perfectly', async ({ page }) => {
    await expect(page.locator("(//img[@alt='Shukhee Logo'])[1]")).toBeVisible();
    await expect(page.getByText("Home",{exact:true})).toBeVisible();
    await expect(page.getByText("Find Doctor")).toBeVisible();
    await expect(page.getByText("Service",{exact:true}).nth(0)).toBeVisible();
    await expect(page.getByText("Emergency Service",{exact:true})).toBeVisible();
    await expect(page.getByText("Become a Provider")).toBeVisible();
    await expect(page.getByText("Subscription")).toBeVisible();
    await expect(page.getByText("Log In")).toBeVisible();
    await expect(page.getByText("Sign up")).toBeVisible();
    console.log("Tc_001: Passed");
  });

  //TC-002 Verify that Service Overview section loads perfectly
  test('Verify that Service Overview section loads perfectly',async({page})=>{
    await expect(page.getByText("Your Complete")).toBeVisible();
    await expect (page.getByText("Healthcare",{exact:true})).toBeVisible();
    await expect(page.getByText("Solutions",{exact:true})).toBeVisible();
    await expect(page.getByText("Video Consult",{exact:true})).toBeVisible();
    await expect(page.getByText("Mental Wellness",{exact:true})).toBeVisible();
    await expect(page.getByText("Home Lab",{exact:true}).nth(0)).toBeVisible();
    await expect(page.getByText("Online Pharmacy",{exact:true}).nth(0)).toBeVisible();
    await expect(page.getByText("Health Mall",{exact:true}).nth(0)).toBeVisible();
  });

  //TC-003 Verify that slider images load and rotate properly
  test('Verify that slider images load and rotate properly', async ({ page }) => {
  const slider1stImg = page.locator("//div[@data-index='-1']");
  const slider2ndImg = page.locator("//div[@data-index='0']");

  await expect(slider1stImg).toBeVisible();
  await page.click("//button[@aria-label='next']");
  await page.waitForTimeout(3000);
  await expect(slider2ndImg).toBeVisible();
  await page.click("//button[@aria-label='prev']");
  await page.waitForTimeout(3000);
  await expect(slider1stImg).toBeVisible();
});
//TC-004 Verify that Consult with all of our doctors section loads perfectly
test('Verify that Consult with all of our doctors section loads perfectly',async({page})=>{
  await expect(page.getByText("Consult with top doctors according to your specific need")).toBeVisible();
  await expect(page.getByText("Consult with all of our doctors")).toBeVisible();
  await expect(page.getByText("Depression Issue")).toBeVisible();
  await expect(page.getByText("Allergies")).toBeVisible();
  await expect(page.getByText("Cough & Cold")).toBeVisible();
  await expect(page.getByText("Skin Problems")).toBeVisible();
  await expect(page.getByText("Stomach Issue")).toBeVisible();
});

//TC-005 Verify that Book an appointment for an in-clinic or in-house help section loads perfectly
test("Verify that 'Book an appointment for an in-clinic or in-house help' section loads perfectly",async({page}) =>{
  await expect(page.getByText("Book an appointment for an in-clinic or in-house help")).toBeVisible();
  await expect(page.getByText("Find professionals across all specialities")).toBeVisible();
  await expect(page.getByText("Gynaecologist / Obstetrician")).toBeVisible();
  await expect(page.getByAltText("Gynaecologist / Obstetrician")).toBeVisible(); 
  await expect(page.getByText("Explore for women’s health, pregnancy and infertility treatment.")).toBeVisible();

})
  
});