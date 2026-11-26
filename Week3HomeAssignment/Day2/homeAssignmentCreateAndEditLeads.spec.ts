import { test } from "@playwright/test";

test('Create and edit leads', async ({ page }) => {

    await page.goto('https://leaftaps.com/opentaps/control/main')

    await page.locator('#username').fill('democsr')
    await page.locator('[name="PASSWORD"]').fill('crmsfa')

    await page.locator('.decorativeSubmit').click()

    await page.locator('text=CRM/SFA').click()

    await page.waitForLoadState('domcontentloaded')

    await page.locator('[href="/crmsfa/control/leadsMain"]').click()

    await page.waitForLoadState('domcontentloaded')

    await page.locator('[href="/crmsfa/control/createLeadForm"]').click()

    await page.waitForLoadState('domcontentloaded')

    await page.locator('#createLeadForm_companyName').fill('test')

    await page.locator('#createLeadForm_firstName').fill('Ravi')

    await page.locator('#createLeadForm_lastName').fill('Kiran')

    await page.locator('.smallSubmit').click()

    await page.waitForLoadState('domcontentloaded')

    await page.getByRole('link',{name:'Edit',exact:true}).click()

    await page.locator('#updateLeadForm_companyName').fill('TestLeaf')
    
    await page.getByRole('button',{name:'Update',exact:true}).click()

    await page.waitForLoadState('domcontentloaded')
    
})