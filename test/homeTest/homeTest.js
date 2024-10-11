const url = require('../../config/url.js')
const HomePage = require('../../pageObjects/homePage/homePage/homePage.js')
const {By, until} = require('selenium-webdriver')


describe('Check home page', function () {
    this.timeout(0)
    
    const homeTest = new HomePage()

    beforeEach( async () => {
        await homeTest.navigateToBtnPropertiWeb()    
    })

    after('Quit the browser', async () => {
        await homeTest.quitTheBrowser()
    })

    it('TC001 access BTN Properti website', async () => {
        const actualTitle = await driver.getTitle()
        const expectedTitle = 'BTN Properti: Kemudahan Miliki Rumah Impian Dimulai Dari Sini'
        await homeTest.verifyThat(actualTitle, expectedTitle)
        
        await homeTest.scrollDown()
    })

    it('TC002 navigate to Hitung Harga page', async () => {
        await homeTest.navigateToHitungHarga()
        
        const actualUrl = await driver.getCurrentUrl()
        const expectedUrl = url.spesific_url.hitung_harga
        await homeTest.verifyThat(actualUrl, expectedUrl)
    })

    it('TC003 navigate to Harga Pasar page', async () => {
        await homeTest.navigateToHargaPasar()

        const actualUrl = await driver.getCurrentUrl()
        const expectedUrl = url.spesific_url.harga_pasar
        await homeTest.verifyThat(actualUrl, expectedUrl)
    })

    it('TC004 navigate to Simulasi KPR page', async () => {
        await homeTest.navigateToSimulasiKpr()

        const actualUrl = await driver.getCurrentUrl()
        const expectedUrl = url.spesific_url.simulasi_kpr
        await homeTest.verifyThat(actualUrl, expectedUrl)
    })

    it('TC005 navigate to Komparasi Properti page', async () => {
        await homeTest.navigateToKomparasiProperti()

        const actualUrl = await driver.getCurrentUrl()
        const expectedUrl = url.spesific_url.komparasi_properti
        await homeTest.verifyThat(actualUrl, expectedUrl)
    })

    it('TC006 navigate to Konsultasi page', async () => {
        await homeTest.navigateToKonsultasi()

        const actualUrl = await driver.getCurrentUrl()
        const expectedUrl = url.spesific_url.konsultasi
        await homeTest.verifyThat(actualUrl, expectedUrl)
    })

    it('TC007 navigate to Developer page', async () => {
        await homeTest.navigateToDeveloper()

        const actualUrl = await driver.getCurrentUrl()
        const expectedUrl = url.spesific_url.developer
        await homeTest.verifyThat(actualUrl, expectedUrl)
    })

    it('TC008 navigate to Agen Properti page', async () => {
        await homeTest.navigateToAgenProperti()

        const actualUrl = await driver.getCurrentUrl()
        const expectedUrl = url.spesific_url.agen_properti
        await homeTest.verifyThat(actualUrl, expectedUrl)
    })

    it('TC009 navigate to Ajukan KPR page', async () => {
        await homeTest.navigateToAjukanKpr()
        await driver.sleep(3000)
        
        const actualUrl = await driver.getCurrentUrl()
        const expectedUrl = url.spesific_url.ajukan_kpr
        await homeTest.verifyThat(actualUrl, expectedUrl)
    })

    it('TC010 search to buy property', async () => {
        await homeTest.searchPropertiBeli()

        const actualUrl = await driver.getCurrentUrl()
        const expectedUrl = url.spesific_url.list_properti_buy
        await homeTest.verifyThat(actualUrl, expectedUrl)
    })

    it('TC010 search to rent property', async () => {
        await homeTest.searchPropertiRent()

        const actualUrl = await driver.getCurrentUrl()
        const expectedUrl = url.spesific_url.list_properti_rent
        await homeTest.verifyThat(actualUrl, expectedUrl)
    })
})
