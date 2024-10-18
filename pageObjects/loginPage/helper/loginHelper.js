const {By, until} = require('selenium-webdriver')
const BasePage = require('../../basePage/basePage/basePage')

const basePage = new BasePage()


class LoginHelper extends BasePage {
    constructor() {
        super()
    }

    async clickListDrodpdown(dropdownButtonElement , listDropdownElement, itemElement) {
        await basePage.clickButton(dropdownButtonElement)

        const listDropdown = driver.findElement(listDropdownElement)
        await driver.wait(until.elementIsVisible(listDropdown), 10000)
        await basePage.clickButton(itemElement)
    }
}

module.exports = LoginHelper
