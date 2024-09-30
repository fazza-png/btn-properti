const BasePage = require('../pages/basePage.js')
const LoginPage = require('../pages/loginPage.js')
const url = require('../config/url.js')
const {By} = require('selenium-webdriver')

const basePage = new BasePage()
const loginPage = new LoginPage()

class HomePage extends BasePage {
    constructor() {
        super()
        this.homePageLocators = {
            footerButtomDekstop : By.xpath('//div[@id="footer_bottom_dekstop"]'),
            sectionHero : By.xpath('//section[@id="hero"]'),
            toolsDropdownButton : By.xpath('//ul[@class="nav align-items-center nav-ipad-pt"]/li/a'),
            listMitraDropdownButton : By.xpath('//ul[@class="nav align-items-center nav-ipad-pt"]/li[4]/a'),
            hitungHargaMenu : By.xpath('//ul[@class="dropdown-menu dropdown_tools res-nav show"]/li[1]'),
            hargaPasarMenu : By.xpath('//ul[@class="dropdown-menu dropdown_tools res-nav show"]/li[2]'),
            simulasiKprMenu : By.xpath('//ul[@class="dropdown-menu dropdown_tools res-nav show"]/li[3]'),
            komparasiProperti : By.xpath('//ul[@class="dropdown-menu dropdown_tools res-nav show"]/li[4]'),
            konsultasi : By.xpath('//ul[@class="dropdown-menu dropdown_tools res-nav show"]/li[5]'),
            developer : By.xpath('//ul[@class="dropdown-menu dropdown_tools res-nav show"]/li[1]/a'),
            agen_properti : By.xpath('//ul[@class="dropdown-menu dropdown_tools res-nav show"]/li[2]/a'),
            ajukan_kpr : By.xpath('//ul[@class="nav align-items-center nav-ipad-pt"]/li[5]/a')
        }       
    }

    async navigateToBtnPropertiWeb() {
        await driver.get(url.base_url.toString())
    }

    async clickToolsDropdownButton(locatorList) {
        await basePage.clickButton(this.homePageLocators.toolsDropdownButton)
        await basePage.waitElement(locatorList)
    }

    async scrollDown() {
        await basePage.scroll(this.homePageLocators.footerButtomDekstop)
    }

    async scrollUp() {
        await basePage.scroll(this.homePageLocators.sectionHeroElement)
    }

    async navigateToHitungHargaPage() {
        await this.clickToolsDropdownButton(this.homePageLocators.hitungHargaMenu)
        await basePage.clickButton(this.homePageLocators.hitungHargaMenu)
    }

    async navigateToHargaPasar() {
        await this.clickToolsDropdownButton(this.homePageLocators.hargaPasarMenu)
        await basePage.clickButton(this.homePageLocators.hargaPasarMenu)
    }

    async navigateToSimulasiKpr() {
        await this.clickToolsDropdownButton(this.homePageLocators.simulasiKprMenu)
        await this.clickButton(this.homePageLocators.simulasiKprMenu)
    }

    async navigateToKomparasiProperti() {
        await this.clickToolsDropdownButton(this.homePageLocators.komparasiProperti)
        await this.clickButton(this.homePageLocators.komparasiProperti)
    }

    async navigateToKonsultasi() {
        await this.clickToolsDropdownButton(this.homePageLocators.konsultasi)
        await this.clickButton(this.homePageLocators.konsultasi)
    }

    async navigateToDeveloper() {
        await basePage.clickButton(this.homePageLocators.listMitraDropdownButton)
        await basePage.waitElement(this.homePageLocators.developer)
        await basePage.clickButton(this.homePageLocators.developer)
    }

    async navigateToAgenProperti() {
        await basePage.clickButton(this.homePageLocators.listMitraDropdownButton)
        await basePage.waitElement(this.homePageLocators.agen_properti)
        await basePage.clickButton(this.homePageLocators.agen_properti)
    }

    async navigateToAjukanKpr() {
        await loginPage.login()
        await loginPage.backToPreviousPage()
        await basePage.clickButton(this.homePageLocators.ajukan_kpr)     
    }
}

module.exports = HomePage
