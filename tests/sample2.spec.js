import { test, expect } from '@playwright/test';

test('Visit flipkart page', async ({ page }) => {
    await page.goto('https://www.amazon.com/')
})
test('Suggested application', async ({ page }) => {
    await page.goto('https://www.mynthra.com/')
})
