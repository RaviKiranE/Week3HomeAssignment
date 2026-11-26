import { expect, test } from "@playwright/test";

test('learn CheckBox', async ({ page }) => {
await page.goto('https://leafground.com/checkbox.xhtml')


    await page.locator('//h5[text()="Basic Checkbox"]/following-sibling::div//div[contains(@class,"chkbox-box")]').click()
    await page.locator('//h5[text()="Notification"]/following-sibling::div//div[contains(@class,"chkbox-box")]').click()

    await page.waitForTimeout(1000)

    expect.soft(await page.locator('.ui-growl-item .ui-growl-title')).toBeVisible;

    expect.soft(await page.locator('.ui-growl-item .ui-growl-title')).toHaveText("Checked")

    await page.locator('(//h5[text()="Choose your favorite language(s)"]/following-sibling::div//div[contains(@class,"chkbox-box")])[1]').click()

    await page.locator('(//h5[text()="Tri State Checkbox"]/following-sibling::div//div[contains(@class,"chkbox-box")])[1]').click()
    
    await page.locator('//div[@class="ui-growl-message"]//span[contains(text(),"State has been changed.")]').isVisible()

    expect.soft(await page.locator('.ui-growl-item .ui-growl-title')).toBeVisible;

    await page.locator('//h5[text()="Toggle Switch"]/following-sibling::div//div[contains(@class,"toggleswitch")]').click()

    await page.waitForTimeout(1000)

    expect.soft(await page.locator('.ui-growl-item .ui-growl-title')).toBeVisible;

    expect.soft(await page.locator('//h5[text()="Verify if check box is disabled"]/following-sibling::div//div[contains(@class,"chkbox-box")]')).toBeDisabled;

    await page.locator('//div[contains(@id,"multiple") and @role="combobox"]').click()
   
    await page.locator('[data-item-value="Paris"]').click()
    
    await page.locator('[data-item-value="Barcelona"]').click()
    
    await page.locator('[data-item-value="Rome"]').click()
    
    page.close
}) 