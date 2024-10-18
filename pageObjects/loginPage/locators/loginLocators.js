const {By} = require('selenium-webdriver')

module.exports = {
    daftarAtauMasukButton : By.xpath('//ul[@class="nav align-items-center nav-ipad-pt"]/li[6]/a'),
    poupLogin : By.xpath('//div[@id="loginpopup"]'),
    emailInput : By.xpath('//form[@id="form-login"]/div/input[1]'),
    passwordInput : By.xpath('//form[@id="form-login"]/div[2]/input'),
    loginButton : By.xpath('//form[@id="form-login"]/div[4]/button'),
    titleAccount : By.xpath('//h5[@class="title_akun"]')
}