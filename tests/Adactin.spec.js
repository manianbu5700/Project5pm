import { test } from '@playwright/test'
import { LoginPage } from '../Pages/LoginPage'

test('Page Object MOdel', async ({ page }) => {
    const login = new LoginPage(page)
    await login.visitUrl()
    await login.enterUserName('akashv24698')
    await login.enterPassword('Akash@24')
    await login.clickButton()


    

})