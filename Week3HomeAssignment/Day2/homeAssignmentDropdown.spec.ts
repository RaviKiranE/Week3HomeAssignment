import { expect, test } from "@playwright/test";

test('learn AutoWait', async ({ page }) => {

    await page.goto('https://leafground.com/select.xhtml')

    await page.locator(`//select[@class='ui-selectonemenu']`).selectOption({index:2})
    
    let coursedd  = await page.locator(`select.ui-selectonemenu>option`)

    let courseddCount = await coursedd.count();

    console.log("Print all Automation tools");

    for(let i=0; i< courseddCount; i++){
        console.log(await coursedd.nth(i).innerText());
    }

    //await page.locator(`//select[contains(@id,"country_input")]`).selectOption({label:"Germany"})
    await page.locator('//div[contains(@id,"country") and @role="combobox"]').click()
    await page.locator('[data-label="Brazil"]').click()

   
    await page.locator('//div[contains(@id,"city") and @role="combobox"]').click()
    await page.locator('[data-label="Sao Paulo"]').click()
 
    await page.locator('[aria-label="Show Options"]').click()
    await page.locator('[data-item-label="Appium"]').click()

    await page.locator('[aria-label="Show Options"]').click()
    await page.locator('[data-item-label="Playwright"]').click()

    await page.locator('[aria-label="Show Options"]').click()
    await page.locator('[data-item-label="RestAssured"]').click()

    await page.locator('[id$="lang"]').click();
    await page.locator('[data-label="Tamil"]').click()

    let lang= await page.locator(`ul[id$=lang_items] li`)

    let langCount= await lang.count();

    console.log("Print all languages");

    for(let i=0; i< langCount; i++){
        console.log(await lang.nth(i).innerText());
    }
    await page.locator('//div[contains(@id,"value") and @role="combobox"]').click()
    await page.locator('[data-label="இரண்டு"]').click()
    
    
})