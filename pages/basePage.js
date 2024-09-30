let webdriver = require('selenium-webdriver')
const assert = require('assert')
let driver = new webdriver.Builder().forBrowser('chrome').build()
// driver.manage().window().maximize()

class BasePage {
    constructor() {
        global.driver = driver
    }

    async navigateTo(buttonLocator, url) {
        if(buttonLocator) {
            await driver.findElement(buttonLocator).click()
        }
        if(url) {
            await driver.get(url)
        }
    }

    async quitTheBrowser() {
        await driver.quit()
    }

    async scroll(elementLocator) {
        const element = await driver.findElement(elementLocator)
        await driver.actions()
            .scroll(0, 0, 0, 0, element)
            .perform()
    }

    async verifyThat(actualResult, expectedResult) {
        assert.strictEqual(actualResult, expectedResult)
    }

    async getText(locator) {
        await driver.findElement(locator).getText()
    }

    async waitElement(locator) {
        await driver.wait(webdriver.until.elementLocated(locator), 3000)
    }
    
    async refreshTheBrowser() {
        await driver.navigate().refresh()
    }

    async clickButton(buttonLocator) {
        await driver.findElement(buttonLocator).click()
    }

    async backToPreviousPage() {
        await driver.navigate().back()
    }
}

module.exports = BasePage
