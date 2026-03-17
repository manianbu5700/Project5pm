export class SearchHotel {
    constructor(page) {
        this.page = page
        this.location = page.locator('//select[@name="location"]')

    }
    async selectLocation() {
        await this.location.selectOption({ label: "Sydney" })

    }
}