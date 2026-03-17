import { test, expect } from '@playwright/test'
test('Dynamic Handling', async ({ page }) => {
    await page.goto('https://www.amazon.in/')
})
