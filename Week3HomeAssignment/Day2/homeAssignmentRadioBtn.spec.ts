import { expect, test } from "@playwright/test";

test('learn Radio button', async ({ page }) => {

    await page.goto('https://leafground.com/radio.xhtml')

    let defaultRdoBtn = page.locator(`//h5[text()="Find the default select radio button"]/following-sibling::div//td[3]`)
    
    expect(defaultRdoBtn).toContainText("Safari")
    expect(defaultRdoBtn).toBeChecked

    let favoritetRdoBtn = page.locator(`//h5[text()="Your most favorite browser"]/following-sibling::div//td[1]`)
    expect(favoritetRdoBtn).toBeEnabled;
    favoritetRdoBtn.click();

    let cityRdoBtn = page.locator(`(//h5[text()="UnSelectable"]/following-sibling::div//div[contains(@class,"radiobutton ui-widget")][1])[1]`)
    await cityRdoBtn.click();

    let ageDefaultRdoBtn = page.locator(`//h5[text()="Select the age group (only if not selected)"]/following-sibling::div//input[@checked="checked"]`)
    expect(ageDefaultRdoBtn).toBeChecked

   //  let correctAgeRdoBtn = page.locator(`//h5[text()="Select the age group (only if not selected)"]/following-sibling::div//input[@value="1-20 Years"]`);
   // correctAgeRdoBtn.check();
   let ageRdoBtn = page.locator(`(//h5[text()="Select the age group (only if not selected)"]/following-sibling::div//div[contains(@class,"radiobutton ui-widget")][1])[1]`);

   await ageRdoBtn.click();
}) 