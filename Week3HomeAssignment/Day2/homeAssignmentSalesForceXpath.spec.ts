import { expect, test } from "@playwright/test";

test('SalesForce create lead', async ({ page }) => {
    
    await page.goto('https://login.salesforce.com/')
    await page.locator('//input[@name="identifier"]').fill("muthuravikiran@hotmail.com")
    await page.locator('//identitylogin-button/button').click()
    await page.locator('//input[@name="password"]').fill("*******")
    await page.locator('//identitylogin-button/button').click()
    await page.waitForTimeout(8000) // wait for filling OTP
    await page.locator('//button[contains(@class,"icon-waffle_container")]').click()
    await page.locator('//button[@aria-label="View All Applications"]').click()
    await page.locator('[data-name="Sales"] a').click()
    await page.locator('[data-id="Lead"] one-app-nav-bar-item-dropdown').click()
    await page.locator('[data-id="Lead"] one-app-nav-bar-item-dropdown .menuItemsWrapper a').click()
    
    await page.locator('//button[@aria-label="Salutation"]').click()
    await page.locator('//span[@title="Mr."]').click()

    await page.getByPlaceholder("Last Name").fill("Kiran")
    await page.getByRole('textbox',{name:'Company',exact:true}).fill("TestLeaf")

    await page.getByRole('button',{name:'Save',exact:true}).click()
    await page.locator('//span[contains(@class,"toastMessage")]').visible();

    expect.soft(await page.locator('//span[contains(@class,"toastMessage")]')).toBeVisible;

})


test('SalesForce Create Individuals', async ({ page }) => {

    await page.goto('https://login.salesforce.com/')
    await page.locator('//input[@name="identifier"]').fill("muthuravikiran@hotmail.com")
    await page.locator('//identitylogin-button/button').click()
    await page.locator('//input[@name="password"]').fill("*******")
    await page.locator('//identitylogin-button/button').click()
    await page.waitForTimeout(8000) // wait for filling OTP
    await page.locator('//button[contains(@class,"icon-waffle_container")]').click()
    await page.locator('//button[@aria-label="View All Applications"]').click()
    await page.waitForTimeout(3000)
    await page.locator('//input[@type="search" and @role="combobox"]').fill("Individuals")
    //await page.locator('//input[contains(@id,"input-")]').press("Enter")
    await page.locator('//a[@data-label="Individuals"]').click()
    await page.waitForLoadState('domcontentloaded')
    await page.locator('//one-app-nav-bar-item-root[contains(@data-id,"temp-")]//one-app-nav-bar-menu-button').click() 
    await page.locator('//one-app-nav-bar-item-root[contains(@data-id,"temp-")]//one-app-nav-bar-menu-button//div[@class="menuItemsWrapper"]//one-app-nav-bar-menu-item[1]/a').click()
    await page.getByPlaceholder('Last Name').fill("Ravi")
    await page.getByRole('button',{name:'Save',exact:true}).click()
    
    expect.soft(await page.locator('//span[contains(@class,"toastMessage")]')).toBeVisible;
    expect.soft(await page.locator('//span[contains(@class,"toastMessage")]')).toContainText("Ravi");
})

test('SalesForce edit individuals', async ({ page }) => {

    await page.goto('https://login.salesforce.com/')
    await page.locator('//input[@name="identifier"]').fill("muthuravikiran@hotmail.com")
    await page.locator('//identitylogin-button/button').click()
    await page.locator('//input[@name="password"]').fill("*******")
    await page.locator('//identitylogin-button/button').click()
    await page.waitForTimeout(8000) // wait for filling OTP
    await page.locator('//button[contains(@class,"icon-waffle_container")]').click()
    await page.locator('//button[@aria-label="View All Applications"]').click()
    await page.locator('//input[@type="search" and @role="combobox"]').fill("Accounts")
    //await page.locator('//input[contains(@id,"input-")]').press("Enter")
    await page.locator('//a[@data-label="Accounts"]').click()

    await page.waitForLoadState('domcontentloaded')
    await page.locator('//div[@title="New"]').click()

    await page.locator('//input[@name="Name"]').fill("Accounts")

    await page.locator('//button[@aria-label="Rating"]').click()
    await page.locator('//span[@title="Warm"]').click()

    await page.locator('//button[@aria-label="Type"]').click()
    await page.locator('//span[@title="Customer - Direct"]').click()

    await page.locator('//button[@aria-label="Ownership"]').click()
    await page.locator('//span[@title="Private"]').click()

    await page.locator('//button[@aria-label="Industry"]').click()
    await page.locator('//span[@title="Banking"]').click()

    await page.locator('//button[@name="SaveEdit"]').click()
    
})