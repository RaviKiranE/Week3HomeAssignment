import { expect, test } from "@playwright/test";

test('learn AutoWait', async ({ page }) => {

    await page.goto('https://leafground.com/waits.xhtml')


      page.locator(`//button[contains(@class,"ui-button-secondary ")]`).click
    const visibleButton = page.locator(`//button/span[text()="I am here"]`)
    //await page.waitForTimeout(11000);
    await expect(visibleButton).toBeVisible();
    await visibleButton.click();

    await page.locator(`//button[contains(@class,"ui-button-success ")]`).click()
    
    const invisibleButton  =  page.locator('//button/span[text()="I am about to hide"]')
    //await page.waitForTimeout(11000);
    await expect(invisibleButton ).toBeHidden();

    
    await page.locator(`//button[contains(@class,"ui-button-warning")]`).click()
    
    const clickableButton =  page.locator('//button/span[text()="Click Second"]')

    await expect(clickableButton).toBeEnabled

    
    await page.locator(`//button[contains(@class,"ui-button-danger")]`).click()
    
    //await page.waitForTimeout(11000);
    const textButton =  page.locator('//button/span[text()="Did you notice?"]')

    await expect(textButton).toHaveText("Did you notice?")

    })