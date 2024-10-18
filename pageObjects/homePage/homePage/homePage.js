const BasePage = require('../../basePage/basePage/basePage.js')
const LoginPage = require('../../loginPage/loginPage/loginPage.js')
const {By, until, Key, Select} = require('selenium-webdriver')
const url = require('../../../config/url.js')
const locators = require('../locators/homeLocators.js')
const HomeHelper = require('../helper/homeHelper.js')

const basePage = new BasePage()
const loginPage = new LoginPage()
const helper = new HomeHelper() 

class HomePage extends BasePage {
    constructor() {
        super()       
    }

    async navigateToBtnPropertiWeb() {
        await driver.get(url.base_url.toString())
    }

    async scrollDown() {
        await basePage.scroll(locators.footerButtomDekstop)
    }

    async navigateToHitungHarga() {
        await helper.clickListDrodpdown(locators.toolsDropdownButton, locators.listDropdownMenu, locators.hitungHargaMenu)
        await basePage.waitUrl(url.spesific_url.hitung_harga, 20000)
    }

    async navigateToHargaPasar() {
        await helper.clickListDrodpdown(locators.toolsDropdownButton, locators.listDropdownMenu, locators.hargaPasarMenu)
        await basePage.waitUrl(url.spesific_url.harga_pasar, 20000)
    }

    async navigateToSimulasiKpr() {
        await helper.clickListDrodpdown(locators.toolsDropdownButton, locators.listDropdownMenu, locators.simulasiKprMenu)
        await basePage.waitUrl(url.spesific_url.simulasi_kpr, 20000)
    }

    async navigateToKomparasiProperti() {
        await helper.clickListDrodpdown(locators.toolsDropdownButton, locators.listDropdownMenu, locators.komparasiPropertiMenu)
        await basePage.waitUrl(url.spesific_url.komparasi_properti, 20000)
    }

    async navigateToKonsultasi() {
        await helper.clickListDrodpdown(locators.toolsDropdownButton, locators.listDropdownMenu, locators.konsultasiMenu)
        await basePage.waitUrl(url.spesific_url.konsultasi, 20000)
    }

    async navigateToDeveloper() {
        await helper.clickListDrodpdown(locators.listMitraDropdownButton, locators.listDropdownMenu, locators.developerMenu)
        await basePage.waitUrl(url.spesific_url.developer, 20000)
    }

    async navigateToAgenProperti() {
        await helper.clickListDrodpdown(locators.listMitraDropdownButton, locators.listDropdownMenu, locators.agenPropertiMenu)
        await basePage.waitUrl(url.spesific_url.agen_properti, 20000)
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
