const {By} = require('selenium-webdriver')

module.exports = {
    // Navbar
    toolsDropdownButton : By.xpath('//ul[@class="nav align-items-center nav-ipad-pt"]/li/a'),
    listDropdownMenu : By.xpath('//ul[@class="dropdown-menu dropdown_tools res-nav show"]'),
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

    // Profile
    avatarDropdown : By.xpath('//ul[@class="nav align-items-center nav-ipad-pt"]/li[6]/a'),
    profilMenu : By.xpath('//li[@class="nav-item dropdown dropdown-avatar"]/ul/li[1]'),
    pengajuanKprMenu : By.xpath('//li[@class="nav-item dropdown dropdown-avatar"]/ul/li[2]'),
    rewardMenu : By.xpath('//li[@class="nav-item dropdown dropdown-avatar"]/ul/li[3]'),
    pesanMenu : By.xpath('//li[@class="nav-item dropdown dropdown-avatar"]/ul/li[4]'),

    // Home search: purchase
    lokasiInput : By.xpath('//input[@id="hero_lokasi"]'),
    tipeDropdownButton : By.xpath('//select[@id="hero_tipe"]'),
    listDropdownTipeRumah : By.xpath('//select[@class="form-select custom-select"]/option[2]'),
    budgetInput : By.xpath('//div[@class="col-md-3"]/input'),
    searchButton : By.xpath('//form[@id="form-hero"]/div/div[4]/button'),      

    // Home search: rent
    homeSearchSewaOptionButton : By.xpath('//div[@class="cursor-pointer text-white homeSearchOptionItem false"]'),
    tipeDropdownSewaButton : By.xpath('//select[@class="form-select custom-select"]'),

    // Home guidence
    itemPanduanBaca2Button : By.xpath('(//div[@class="item_panduan"])[1]'),
    itemPanduanPilih2Button : By.xpath('(//div[@class="item_panduan"])[2]'),
    itemPanduanBeli2Button : By.xpath('(//div[@class="item_panduan"])[3]'),

    // Footer
    footerButtomDekstop : By.xpath('//div[@id="footer_bottom_dekstop"]'),

    // Pengajuan kpr
    titleFormPengajuanKpr : By.xpath('//h2[@class="mb-5 mt-2 Credit_titleForm__1pR7v ps-3 ps-lg-0"]')
}