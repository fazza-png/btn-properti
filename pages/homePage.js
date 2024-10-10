const BasePage = require('../pages/basePage.js')
const LoginPage = require('../pages/loginPage.js')
const url = require('../config/url.js')
const {By, until, Key, Select} = require('selenium-webdriver')

const basePage = new BasePage()
const loginPage = new LoginPage()

class HomePage extends BasePage {
    constructor() {
        super()
        this.locators = {
            // Navbar
            toolsDropdownButton : By.xpath('//ul[@class="nav align-items-center nav-ipad-pt"]/li/a'),
            listMitraDropdownButton : By.xpath('//ul[@class="nav align-items-center nav-ipad-pt"]/li[4]/a'),
            hitungHargaMenu : By.xpath('//ul[@class="dropdown-menu dropdown_tools res-nav show"]/li[1]'),
            hargaPasarMenu : By.xpath('//ul[@class="dropdown-menu dropdown_tools res-nav show"]/li[2]'),
            simulasiKprMenu : By.xpath('//ul[@class="dropdown-menu dropdown_tools res-nav show"]/li[3]'),
            komparasiPropertiMenu : By.xpath('//ul[@class="dropdown-menu dropdown_tools res-nav show"]/li[4]'),
            konsultasiMenu : By.xpath('//ul[@class="dropdown-menu dropdown_tools res-nav show"]/li[5]'),
            developerMenu : By.xpath('//ul[@class="dropdown-menu dropdown_tools res-nav show"]/li[1]/a'),
            agenPropertiMenu : By.xpath('//ul[@class="dropdown-menu dropdown_tools res-nav show"]/li[2]/a'),
            ajukanKprMenu : By.xpath('//ul[@class="nav align-items-center nav-ipad-pt"]/li[5]/a'),

            // Hero
            sectionHero : By.xpath('//section[@id="hero"]'),

            // Profil
            avatarDropdown : By.xpath('//ul[@class="nav align-items-center nav-ipad-pt"]/li[6]/a'),
            profilMenu : By.xpath('//li[@class="nav-item dropdown dropdown-avatar"]/ul/li[1]'),
            pengajuanKprMenu : By.xpath('//li[@class="nav-item dropdown dropdown-avatar"]/ul/li[2]'),
            rewardMenu : By.xpath('//li[@class="nav-item dropdown dropdown-avatar"]/ul/li[3]'),
            pesanMenu : By.xpath('//li[@class="nav-item dropdown dropdown-avatar"]/ul/li[4]'),

            // Home search beli
            lokasiInput : By.xpath('//input[@id="hero_lokasi"]'),
            tipeDropdownButton : By.xpath('//select[@id="hero_tipe"]'),
            listDropdownTipeRumah : By.xpath('//select[@class="form-select custom-select"]/option[2]'),
            budgetInput : By.xpath('//div[@class="col-md-3"]/input'),
            searchButton : By.xpath('//form[@id="form-hero"]/div/div[4]/button'),      

            // Home search sewa
            homeSearchSewaOption : By.xpath('//div[@class="cursor-pointer text-white homeSearchOptionItem false"]'),
            tipeDropdownSewaButton : By.xpath('//select[@class="form-select custom-select"]'),

            // Home panduan
            itemPanduanBaca2Button : By.xpath('(//div[@class="item_panduan"])[1]'),
            itemPanduanPilih2Button : By.xpath('(//div[@class="item_panduan"])[2]'),
            itemPanduanBeli2Button : By.xpath('(//div[@class="item_panduan"])[3]'),

            // Footer
            footerButtomDekstop : By.xpath('//div[@id="footer_bottom_dekstop"]'),
        }       
    }

    async navigateToBtnPropertiWeb() {
        await driver.get(url.base_url.toString())
    }

    async clickToolsDropdownButton(locatorList) {
        await basePage.clickButton(this.locators.toolsDropdownButton)
        await basePage.waitElement(locatorList)
    }

    async scrollDown() {
        await basePage.scroll(this.locators.footerButtomDekstop)
    }

    async scrollUp() {
        await basePage.scroll(this.locators.sectionHeroElement)
    }

    async navigateToHitungHargaPage() {
        await this.clickToolsDropdownButton(this.locators.hitungHargaMenu)
        await basePage.clickButton(this.locators.hitungHargaMenu)
    }

    async navigateToHargaPasar() {
        await this.clickToolsDropdownButton(this.locators.hargaPasarMenu)
        await basePage.clickButton(this.locators.hargaPasarMenu)
    }

    async navigateToSimulasiKpr() {
        await this.clickToolsDropdownButton(this.locators.simulasiKprMenu)
        await this.clickButton(this.locators.simulasiKprMenu)
    }

    async navigateToKomparasiProperti() {
        await this.clickToolsDropdownButton(this.locators.komparasiPropertiMenu)
        await this.clickButton(this.locators.komparasiPropertiMenu)
    }

    async navigateToKonsultasi() {
        await this.clickToolsDropdownButton(this.locators.konsultasiMenu)
        await this.clickButton(this.locators.konsultasiMenu)
    }

    async navigateToDeveloper() {
        await basePage.clickButton(this.locators.listMitraDropdownButton)
        await basePage.waitElement(this.locators.developerMenu)
        await basePage.clickButton(this.locators.developerMenu)
    }

    async navigateToAgenProperti() {
        await basePage.clickButton(this.locators.listMitraDropdownButton)
        await basePage.waitElement(this.locators.agenPropertiMenu)
        await basePage.clickButton(this.locators.agenPropertiMenu)
    }

    async navigateToAjukanKpr() {
        await loginPage.login()
        await basePage.clickButton(this.locators.ajukanKprMenu)     
    }

    async searchPropertiBeli() {
        let locationInput = await driver.findElement(this.locators.lokasiInput)
        let tipeDropdownButton = await driver.findElement(this.locators.tipeDropdownButton)
        let listDropdownTipeRumah = await driver.findElement(this.locators.listDropdownTipeRumah)
        let budgetInput = await driver.findElement(this.locators.budgetInput)
        let searchButton = await driver.findElement(this.locators.searchButton)
        
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
        let homeSearchSewaOption = driver.findElement(this.locators.homeSearchSewaOption)
        let locationInput = await driver.findElement(this.locators.lokasiInput)
        let tipeDropdownButton = await driver.findElement(this.locators.tipeDropdownSewaButton)
        let searchButton = await driver.findElement(this.locators.searchButton)

        await homeSearchSewaOption.click()
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
