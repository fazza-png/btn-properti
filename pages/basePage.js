const {until, Builder} = require('selenium-webdriver')
const assert = require('assert')
let driver = new Builder().forBrowser('chrome').build()
// driver.manage().window().maximize()

class BasePage {
    constructor() {
        global.driver = driver
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
        await driver.wait(until.elementLocated(locator), 5000)
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

    async waitForValue(element, timeout) {
        await driver.wait(async () => {
            const value = await element.getAttribute('value');
            return value.length > 0;
        }, timeout);
    }
    
}

module.exports = BasePage
