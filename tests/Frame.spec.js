import { test, expect } from '@playwright/test'
test('Frame', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Frames.html')
    const singleFrame = await page.frameLocator('//iframe[@id="singleframe"]')
    await singleFrame.locator('//input[@type="text"]').fill('Hii')

    await page.locator('(//a[@class="analystic"])[2]').click()

    const MultiFrames = await page.frameLocator('//iframe[@src="MultipleFrames.html"]')
    const frame = await MultiFrames.frameLocator('//iframe[@src="SingleFrame.html"]')
    await frame.locator('//input[@type="text"]').fill('Hello')
})