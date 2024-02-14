// customCommands.js
const SiginInPage = require('../test/pageobjects/SiginInPage');
const DashboardPage = require('../test/pageobjects/DashboardPage');

async function login(username, password) {
    await browser.url("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await browser.maximizeWindow();
    await SiginInPage.login(username, password);
    await DashboardPage.checkLoginElement("Dashboard");
}

async function logout(url){
    await DashboardPage.clickusername();
    await DashboardPage.clicklogoutButton();
    await SiginInPage.siginurl(url);
    await browser.pause(2000);
}

module.exports = { login , logout};
