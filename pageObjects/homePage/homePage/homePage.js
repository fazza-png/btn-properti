const BasePage = require('../../basePage/basePage/basePage.js')
const LoginPage = require('../../loginPage/loginPage/loginPage.js')
const {By, until, Key, Select} = require('selenium-webdriver')
const url = require('../../../config/url.js')
const locators = require('../locators/locators.js')

const basePage = new BasePage()
const loginPage = new LoginPage()

class HomePage extends BasePage {
    constructor() {
        super()       
    }

    async navigateToBtnPropertiWeb() {
        await driver.get(url.base_url.toString())
    }

    async clickToolsDropdownButton(locatorListDropdown) {
        await basePage.clickButton(locators.toolsDropdownButton)
        await basePage.waitElement(locatorListDropdown)
    }

    async scrollDown() {
        await basePage.scroll(locators.footerButtomDekstop)
    }

    async scrollUp() {
        await basePage.scroll(locators.sectionHero)
    }

    async navigateToHitungHarga() {
        
    }
    async navigateToHitungHarga() {
        await this.clickToolsDropdownButton(locators.hitungHargaMenu)
        await basePage.clickButton(locators.hitungHargaMenu)
    }

    async navigateToHargaPasar() {
        await this.clickToolsDropdownButton(locators.hargaPasarMenu)
        await basePage.clickButton(locators.hargaPasarMenu)
    }

    async navigateToSimulasiKpr() {
        await this.clickToolsDropdownButton(locators.simulasiKprMenu)
        await basePage.clickButton(locators.simulasiKprMenu)
    }

    async navigateToKomparasiProperti() {
        await this.clickToolsDropdownButton(locators.komparasiPropertiMenu)
        await basePage.clickButton(locators.komparasiPropertiMenu)
    }

    async navigateToKonsultasi() {
        await this.clickToolsDropdownButton(locators.konsultasiMenu)
        await basePage.clickButton(locators.konsultasiMenu)
    }

    async navigateToDeveloper() {
        await basePage.clickButton(locators.listMitraDropdownButton)
        await basePage.waitElement(locators.developerMenu, 5000)
        await basePage.clickButton(locators.developerMenu)
    }

    async navigateToAgenProperti() {
        await basePage.clickButton(locators.listMitraDropdownButton)
        await basePage.waitElement(locators.agenPropertiMenu, 5000)
        await basePage.clickButton(locators.agenPropertiMenu)
    }

    async navigateToAjukanKpr() {
        await loginPage.login()
        await basePage.clickButton(locators.ajukanKprMenu)
        await basePage.waitElement(locators.titleFormPengajuanKpr, 10000)     
    }

    async searchPropertiBeli() {
        let locationInput = await driver.findElement(locators.lokasiInput)
        let tipeDropdownButton = await driver.findElement(locators.tipeDropdownButton)
        let listDropdownTipeRumah = await driver.findElement(locators.listDropdownTipeRumah)
        let budgetInput = await driver.findElement(locators.budgetInput)
        let searchButton = await driver.findElement(locators.searchButton)
        
        await locationInput.sendKeys('Jakarta')
        await basePage.waitForValue(locationInput, 5000)

        await tipeDropdownButton.click()
        await listDropdownTipeRumah.click()

        await budgetInput.sendKeys('200000000')
        await basePage.waitForValue(budgetInput, 5000)

        await searchButton.click()
        await driver.sleep(3000)
    }

    async searchPropertiRent() {
        let homeSearchSewaOptionButton = await driver.findElement(locators.homeSearchSewaOptionButton)
        let locationInput = await driver.findElement(locators.lokasiInput)
        let tipeDropdownButton = await driver.findElement(locators.tipeDropdownButton)
        let searchButton = await driver.findElement(locators.searchButton)

        await homeSearchSewaOptionButton.click()
        await driver.sleep(3000)
        
        await locationInput.sendKeys('Jakarta')
        await basePage.waitForValue(locationInput, 5000)

        const selectElement = tipeDropdownButton
        const select = new Select(selectElement) 
        await select.selectByValue('kamar')
        await driver.sleep(3000)

        await searchButton.click()
        await driver.sleep(3000)
    }
}

module.exports = HomePage
