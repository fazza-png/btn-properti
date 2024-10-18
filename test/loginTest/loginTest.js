const url = require('../../config/url.js')
const LoginPage = require('../../pageObjects/loginPage/loginPage/loginPage.js')

const loginTest = new LoginPage()


describe('Check home page', function () {
    this.timeout(0)
    
    const loginTest = new LoginPage()

    beforeEach(async () => {
        await loginTest.goToBtnPropertiWeb(url.base_url.toString())  
    })

    after('Quit the browser', async () => {
        await loginTest.quitTheBrowser()
    })

    it('TC001 login with valid credential', async () => {
        await loginTest.login()
    })
})
