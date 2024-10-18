const assert = require('assert')
const Chrome = require('selenium-webdriver/chrome')
const {until, Builder, Browser} = require('selenium-webdriver')
const options = new Chrome.Options()
let driver = new Builder()
    .forBrowser(Browser.CHROME)
    .setChromeOptions(options.setPageLoadStrategy('normal'))
    .build()

// driver.manage().window().maximize()

class BasePage {
    constructor() {
        global.driver = driver
    }

    async quitTheBrowser() {
        await driver.quit()
    }

    async goToWebUrl(url) {
        await driver.get(url)
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

    async waitElement(locator, timeout) {
        await driver.wait(until.elementLocated(locator), timeout)
    }

    async waitUrl(url, timeout) {
        await driver.wait(until.urlIs(url), timeout)
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
