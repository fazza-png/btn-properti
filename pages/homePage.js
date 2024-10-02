const BasePage = require('../pages/basePage.js')
const LoginPage = require('../pages/loginPage.js')
const url = require('../config/url.js')
const {By, until} = require('selenium-webdriver')

const basePage = new BasePage()
const loginPage = new LoginPage()

class HomePage extends BasePage {
    constructor() {
        super()
        this.locators = {
            footerButtomDekstop : By.xpath('//div[@id="footer_bottom_dekstop"]'),
            sectionHero : By.xpath('//section[@id="hero"]'),
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
            avatarDropdown : By.xpath('//ul[@class="nav align-items-center nav-ipad-pt"]/li[6]/a'),
            profilMenu : By.xpath('//li[@class="nav-item dropdown dropdown-avatar"]/ul/li[1]'),
            pengajuanKprMenu : By.xpath('//li[@class="nav-item dropdown dropdown-avatar"]/ul/li[2]'),
            rewardMenu : By.xpath('//li[@class="nav-item dropdown dropdown-avatar"]/ul/li[3]'),
            pesanMenu : By.xpath('//li[@class="nav-item dropdown dropdown-avatar"]/ul/li[4]'),
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
        await driver.sleep(3000)
    }

    async navigateToHargaPasar() {
        await this.clickToolsDropdownButton(this.locators.hargaPasarMenu)
        await basePage.clickButton(this.locators.hargaPasarMenu)
        await driver.sleep(3000)
    }

    async navigateToSimulasiKpr() {
        await this.clickToolsDropdownButton(this.locators.simulasiKprMenu)
        await this.clickButton(this.locators.simulasiKprMenu)
        await driver.sleep(3000)
    }

    async navigateToKomparasiProperti() {
        await this.clickToolsDropdownButton(this.locators.komparasiPropertiMenu)
        await this.clickButton(this.locators.komparasiPropertiMenu)
        await driver.sleep(3000)
    }

    async navigateToKonsultasi() {
        await this.clickToolsDropdownButton(this.locators.konsultasiMenu)
        await this.clickButton(this.locators.konsultasiMenu)
        await driver.sleep(3000)
    }

    async navigateToDeveloper() {
        await basePage.clickButton(this.locators.listMitraDropdownButton)
        await basePage.waitElement(this.locators.developerMenu)
        await basePage.clickButton(this.locators.developerMenu)
        await driver.sleep(6000)
    }

    async navigateToAgenProperti() {
        await basePage.clickButton(this.locators.listMitraDropdownButton)
        await basePage.waitElement(this.locators.agenPropertiMenu)
        await basePage.clickButton(this.locators.agenPropertiMenu)
        await driver.sleep(3000)
    }

    async navigateToAjukanKpr() {
        await loginPage.login()
        await driver.sleep(3000)
        await basePage.clickButton(this.locators.ajukanKprMenu)     
    }
}

module.exports = HomePage
