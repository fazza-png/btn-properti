const url = require('../config/url.js')
const BasePage = require('../pages/basePage.js')
const {By} = require('selenium-webdriver')


describe('Check home page', function () {
    this.timeout(0)
    
    const testLoginPage = new BasePage()

    // beforeEach('Refresh the browser', async () => {    
    // })

    after('Quit the browser', async () => {
        await testLoginPage.quitTheBrowser()
    })

    it('TC001 access BTN Properti website', async () => {
    })
})
