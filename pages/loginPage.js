const BasePage = require('./basePage.js')
const url = require('../config/url.js')
const {By} = require('selenium-webdriver')
const UserFactory = require('../factories/userFactory.js')
const user = new UserFactory()
const basePage = new BasePage()

class LoginPage extends BasePage {
    constructor() {
        super()
        this.loginLocatores = {
            email : By.xpath('//form[@id="form-login"]/div/input[1]'),
            password : By.xpath('//form[@id="form-login"]/div/input[2]'),
            daftarAtauMasukButton : By.xpath('//ul[@class="nav align-items-center nav-ipad-pt"]/li[6]/a')
        }       
    }

    async login() {
        await basePage.clickButton(this.loginLocatores.daftarAtauMasukButton)
        await basePage.waitElement(this.loginLocatores.email)

        await driver.findElement(this.loginLocatores.email).sendKeys((await user.createStandardUser()).email)
        await driver.findElement(this.loginLocatores.password).sendKeys((await user.createStandardUser()).password)
        await basePage.clickButton(this.loginLocatores.daftarAtauMasukButton)
    }
}

module.exports = LoginPage
