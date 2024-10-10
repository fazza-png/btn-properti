const BasePage = require('./basePage.js')
const {By, until} = require('selenium-webdriver')
const UserFactory = require('../factories/userFactory.js')
const user = new UserFactory()
const basePage = new BasePage()

class LoginPage extends BasePage {
    constructor() {
        super()
        this.locators = {
            daftarAtauMasukButton : By.xpath('//ul[@class="nav align-items-center nav-ipad-pt"]/li[6]/a'),
            emailInput : By.xpath('//form[@id="form-login"]/div/input[1]'),
            passwordInput : By.xpath('//form[@id="form-login"]/div[2]/input'),
            loginButton : By.xpath('//form[@id="form-login"]/div[4]/button'),
            titleAccount : By.xpath('//h5[@class="title_akun"]')
        }       
    }

    async login() {
        await basePage.clickButton(this.locators.daftarAtauMasukButton)
        await driver.wait(until.elementLocated(this.locators.emailInput), 0)

        const emailField = await driver.findElement(this.locators.emailInput)
        const passwordField = await driver.findElement(this.locators.passwordInput)

        await emailField.sendKeys((await user.createStandardUser()).email)
        await basePage.waitForValue(emailField, 5000)
        
        await passwordField.sendKeys((await user.createStandardUser()).password)
        await basePage.waitForValue(passwordField, 5000)
        
        await basePage.clickButton(this.locators.loginButton)
        await driver.wait(until.elementLocated(this.locators.titleAccount), 0)
    }
}

module.exports = LoginPage
