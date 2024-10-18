const BasePage = require('../../basePage/basePage/basePage.js')
const {By, until} = require('selenium-webdriver')
const UserFactory = require('../../../factories/userFactory.js')
const locators = require('../locators/loginLocators.js')

const user = new UserFactory()
const basePage = new BasePage()

class LoginPage extends BasePage {
    constructor() {
        super()       
    }

    async goToBtnPropertiWeb(url) {
        await basePage.goToWebUrl(url)
    }

    async login(userName, password) {
        await basePage.clickButton(locators.daftarAtauMasukButton)
        await driver.wait(until.elementLocated(locators.emailInput), 3000)

        const emailField = await driver.findElement(locators.emailInput)
        const passwordField = await driver.findElement(locators.passwordInput)

        await emailField.sendKeys((await user.createStandardUser()).email)
        await basePage.waitForValue(emailField, 5000)
        
        await passwordField.sendKeys((await user.createStandardUser()).password)
        await basePage.waitForValue(passwordField, 5000)
        
        await basePage.clickButton(locators.loginButton)
        await driver.wait(until.elementLocated(locators.titleAccount), 0)
    }
}

module.exports = LoginPage
