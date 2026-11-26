import { expect, test } from "@playwright/test";

test('SalesForce Edit Individuals', async ({ page }) => {

    await page.goto('https://login.salesforce.com/')
    await page.locator('//input[@name="identifier"]').fill("muthuravikiran@hotmail.com")
    await page.locator('//identitylogin-button/button').click()
    await page.locator('//input[@name="password"]').fill("*******")
    await page.locator('//identitylogin-button/button').click()
    await page.waitForTimeout(8000) // wait for filling OTP
    await page.waitForLoadState('domcontentloaded')
    await page.locator('//button[contains(@class,"icon-waffle_container")]').click()
    await page.locator('//button[@aria-label="View All Applications"]').click()
    await page.waitForLoadState('domcontentloaded')
    await page.locator('//input[@type="search" and @role="combobox"]').fill("Individuals")
    //await page.locator('//input[contains(@id,"input-")]').press("Enter")
    await page.locator('//a[@data-label="Individuals"]').click()
    await page.waitForLoadState('domcontentloaded')
    //await page.locator('//one-app-nav-bar-item-root[contains(@data-id,"temp-")]/a').click() 
    await page.getByRole('link',{name:'* Individuals',exact:true}).click()
    await page.getByRole('searchbox',{name:'Search this list...',exact:true}).fill("Ravi")

    await page.getByRole('button',{name:'Show Actions',exact:true}).click()

    await page.locator("//div[@class='branding-actions actionMenu']//li[1]//a").click()
    await page.locator("//div[contains(@class,'salutation')]").click()
    await page.locator('//div[@role="listbox"]//a[@title="Mr."]').click()
    await page.getByRole('textbox',{name:'First Name',exact:true}).click()
    await page.getByRole('button',{name:'Save',exact:true}).click()


})