const url = require('../config/url.js')
const HomePage = require('../pages/homePage.js')
const {By} = require('selenium-webdriver')


describe('Check home page', function () {
    this.timeout(0)
    
    const testHomePage = new HomePage()

    // beforeEach('Refresh the browser', async () => {    
    // })

    after('Quit the browser', async () => {
        await testHomePage.quitTheBrowser()
    })

    it('TC001 access BTN Properti website', async () => {
        await testHomePage.navigateToBtnPropertiWeb()
        
        const actualTitle = await driver.getTitle()
        const expectedTitle = 'BTN Properti: Kemudahan Miliki Rumah Impian Dimulai Dari Sini'
        await testHomePage.verifyThat(actualTitle, expectedTitle)
        
        await testHomePage.scrollDown()
    })

    it('TC002 navigate to Hitung Harga page', async () => {
        await testHomePage.navigateToHitungHargaPage()
        await driver.sleep(3000)
        
        const actualUrl = await driver.getCurrentUrl()
        const expectedUrl = url.spesific_url.hitung_harga
        await testHomePage.verifyThat(actualUrl, expectedUrl)
        
        await testHomePage.backToPreviousPage()
    })

    it('TC003 navigate to Harga Pasar page', async () => {
        await testHomePage.navigateToHargaPasar()
        await driver.sleep(3000)

        const actualUrl = await driver.getCurrentUrl()
        const expectedUrl = url.spesific_url.harga_pasar
        await testHomePage.verifyThat(actualUrl, expectedUrl)

        await testHomePage.backToPreviousPage()
    })

    it('TC004 navigate to Simulasi KPR page', async () => {
        await testHomePage.navigateToSimulasiKpr()
        await driver.sleep(3000)

        const actualUrl = await driver.getCurrentUrl()
        const expectedUrl = url.spesific_url.simulasi_kpr
        await testHomePage.verifyThat(actualUrl, expectedUrl)
        
        await testHomePage.backToPreviousPage()
    })

    it('TC005 navigate to Komparasi Properti page', async () => {
        await testHomePage.navigateToKomparasiProperti()
        await driver.sleep(3000)

        const actualUrl = await driver.getCurrentUrl()
        const expectedUrl = url.spesific_url.komparasi_properti
        await testHomePage.verifyThat(actualUrl, expectedUrl)
        
        await testHomePage.backToPreviousPage()
    })

    it('TC006 navigate to Konsultasi page', async () => {
        await testHomePage.navigateToKonsultasi()
        await driver.sleep(3000)

        const actualUrl = await driver.getCurrentUrl()
        const expectedUrl = url.spesific_url.konsultasi
        await testHomePage.verifyThat(actualUrl, expectedUrl)

        await testHomePage.backToPreviousPage()
    })

    it('TC007 navigate to Developer page', async () => {
        await testHomePage.navigateToDeveloper()
        await driver.sleep(6000)

        const actualUrl = await driver.getCurrentUrl()
        const expectedUrl = url.spesific_url.developer
        await testHomePage.verifyThat(actualUrl, expectedUrl)

        await testHomePage.backToPreviousPage()
    })

    it('TC008 navigate to Agen Properti page', async () => {
        await testHomePage.navigateToAgenProperti()
        await driver.sleep(3000)

        const actualUrl = await driver.getCurrentUrl()
        const expectedUrl = url.spesific_url.agen_properti
        await testHomePage.verifyThat(actualUrl, expectedUrl)

        await testHomePage.backToPreviousPage()
    })

    it('TC009 navigate to Ajukan KPR page', async () => {
        await testHomePage.navigateToAjukanKpr()
        await driver.sleep(2000)
        
        const actualUrl = await driver.getCurrentUrl()
        const expectedUrl = url.spesific_url.ajukan_kpr
        await testHomePage.verifyThat(actualUrl, expectedUrl)
    })
})
