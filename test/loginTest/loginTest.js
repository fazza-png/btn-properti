const url = require('../../config/url.js')
const LoginPage = require('../../pageObjects/loginPage/loginPage/loginPage.js')
const {By} = require('selenium-webdriver')


describe('Check home page', function () {
    this.timeout(0)
    
    const loginTest = new LoginPage()

    // beforeEach('Refresh the browser', async () => {    
    // })

    after('Quit the browser', async () => {
        await loginTest.quitTheBrowser()
    })

    it('TC001 access BTN Properti website', async () => {
    })
})
