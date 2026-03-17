import { test, expect } from '@playwright/test';
test('Window Handling', async ({ browser }) => {
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto('https://www.amazon.in/')
    await page.locator('//input[@id="twotabsearchtextbox"]').fill('iphone 17 pro')
    await page.locator('//input[@type="submit"]').click()
    await page.waitForTimeout(3000)

    const [newpage] = await Promise.all([
        context.waitForEvent("page"),
        page.click('//h2[text()="Results"]//ancestor::div[@data-cel-widget="search_result_1"]//following-sibling::div[@data-asin="B0FQFBHQMJ"]//descendant::h2[contains(@aria-label,"iPhone 17 Pro 1 TB: 15.93 cm (6.3″)")]')   //const arr=[10,20,30,40] //const [a,b]=arr

    ])
    await newpage.waitForLoadState()
    const title = await newpage.title()
    console.log(title)
})


//Dynamic X-path

//ancestor
//parent
//child----------------------->
//following-sibling
//preceding-sibling
//descendant

////h2[text()="Results"]//ancestor::div[contains(@class,"a-section a-spacing-none s-result-item s-flex-full-width")]//following-sibling::div[@data-asin="B0FQFBHQMJ"]//descendant::h2[contains(@aria-label,"iPhone 17 Pro 1 TB: 15.93 cm (6.3″)")]