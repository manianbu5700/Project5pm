import { test, expect } from '@playwright/test';

test('Visit amazon page', async ({ page }) => {
    await page.goto('https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox')
    // await page.pause()
    await page.locator('//span[text()="Next"]').click()
})
//locators
//x-path
//id-------------------> //input[@id="email"]
//name-----------------> //input[@name="email"]
//class----------------> //input[@class="inputtext _55r1 _6luy"]
//atrribute and value------------>//input[@type="text"]
//text---------------------->//button[text()="Log in"]