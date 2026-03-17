import { test, expect } from '@playwright/test'
test('Dropdown', async ({ page }) => {
    await page.goto('https://letcode.in/dropdowns')
    const fruits = await page.locator('//select[@id="fruits"]')
    await fruits.selectOption({ label: "Mango" })
    const single = await fruits.locator('option:checked').textContent()
    console.log(single)

    const superHeros = await page.locator('//select[@id="superheros"]')
    await superHeros.selectOption([{ label: "Batman" }, { value: "aq" }, { index: 6 }])
    const heros = await superHeros.locator('option:checked').allTextContents()
    console.log(heros)







})
//Handle the dropdown with text-------------->{label:"text"}
//Handle the dropdown with value------------->{value:"tq"}
//Handle the dropdown with index-------------->{index:1}