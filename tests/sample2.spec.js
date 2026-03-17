import { test, expect } from '@playwright/test';

test('Visit flipkart page', async ({ page }) => {
    await page.goto('https://www.meesho.com/')
})
