import { test, expect } from '@playwright/test'
test('WebTable', async ({ page }) => {
    await page.goto('https://qavbox.github.io/demo/webtable/')
    const TableData = await page.locator('//table[@id="table02"]//tbody//tr//td').allTextContents()
    console.log(TableData)
    expect(TableData).toContain('Tiger Nixon')

    const RowData = await page.locator('//table[@id="table02"]//tbody//tr[1]//td').allTextContents()
    console.log(RowData)
    expect(RowData).toEqual([
        'Tiger Nixon',
        'System Architect',
        'Edinburgh',
        '61',
        '2011/04/25',
        '$320,800'
    ])
    const ColumnData = await page.locator('//table[@id="table02"]//tbody/tr//td[1]').allTextContents()
    console.log(ColumnData)
    expect(ColumnData).toContain('Rhona Davidson')

    const Data = await page.locator('//table[@id="table02"]//tbody//tr[3]//td[3]').textContent()
    console.log(Data)
    expect(Data).toEqual('San Francisco')
})