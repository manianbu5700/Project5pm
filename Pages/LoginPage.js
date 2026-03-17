export class LoginPage {
    constructor(page) {
        this.page = page
        this.uname = page.locator('//input[@id="username"]')
        this.upass = page.locator('//input[@name="password"]')
        this.button = page.locator('//input[@type="Submit"]')

    }
    async visitUrl() {
        await this.page.goto('https://adactinhotelapp.com/index.php')
    }
    async enterUserName(username) {
        await this.uname.fill(username)
    }
    async enterPassword(password) {
        await this.upass.fill(password)
    }
    async clickButton() {
        await this.button.click()
    }


}