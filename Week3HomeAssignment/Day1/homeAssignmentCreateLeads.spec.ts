import { test } from "@playwright/test";

test('Create new leads', async ({ page }) => {

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

    await page.locator('#createLeadForm_companyName').fill('TestLeaf')

    await page.locator('#createLeadForm_firstName').fill('Ravi')

    await page.locator('#createLeadForm_lastName').fill('Kiran')

    await page.locator('#createLeadForm_personalTitle').fill('Mr')

    await page.locator('#createLeadForm_generalProfTitle').fill('RaviKiran')

    await page.locator('#createLeadForm_annualRevenue').fill('20000')

    await page.locator('#createLeadForm_departmentName').fill('IT')
    
    await page.locator('[name=dataSourceId]').click()
    
    await page.waitForTimeout(500)

    let sourceDDValues = await page.locator('[name=dataSourceId]>option')

    let sourceDDCount = await page.locator('[name=dataSourceId]>option').count()

    console.log('Total dropdown count - ' +sourceDDCount)

    for(let i=0;i<sourceDDCount;i++){
        console.log(sourceDDValues.nth(i).innerText)
    }
    
    await page.locator('#createLeadForm_primaryPhoneNumber').fill('654987321')

    await page.locator('.smallSubmit').click()

    await page.waitForLoadState('domcontentloaded')
    
})