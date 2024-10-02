const BasePage = require('./basePage.js')
const {By, until} = require('selenium-webdriver')
const UserFactory = require('../factories/userFactory.js')
const user = new UserFactory()
const basePage = new BasePage()

class LoginPage extends BasePage {
    constructor() {
        super()
        this.loginLocatores = {
            daftarAtauMasukButton : By.xpath('//ul[@class="nav align-items-center nav-ipad-pt"]/li[6]/a'),
            email : By.xpath('//form[@id="form-login"]/div/input[1]'),
            password : By.xpath('//form[@id="form-login"]/div[2]/input'),
            loginButton : By.xpath('//form[@id="form-login"]/div[4]/button'),
            titleAccount : By.xpath('//h5[@class="title_akun"]')
        }       
    }

    async login() {
        await basePage.clickButton(this.loginLocatores.daftarAtauMasukButton)
        await driver.wait(until.elementLocated(this.loginLocatores.email), 0)

        const emailField = await driver.findElement(this.loginLocatores.email)
        const passwordField = await driver.findElement(this.loginLocatores.password)

        await emailField.sendKeys((await user.createStandardUser()).email)
        
        await driver.wait(async function() {
            const emailValue = await emailField.getAttribute('value');
            return emailValue.length > 0;
        }, 5000)
        
        await passwordField.sendKeys((await user.createStandardUser()).password)
        
        await driver.sleep(2000)
        await basePage.clickButton(this.loginLocatores.loginButton)

        await driver.wait(until.elementLocated(this.loginLocatores.titleAccount), 0)
    }
}

module.exports = LoginPage
