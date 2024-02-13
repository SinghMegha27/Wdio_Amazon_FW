const DashboardPage = require('../pageobjects/DashboardPage');
const SupportPage = require('../pageobjects/SupportPage');
const {login, logout} = require('../../commands/customCommands');
const fs = require('fs');
const path = require("path");
const jsonDataPath = path.join(__dirname, "..", "..", "testdata", "loginCred.json");
const data = JSON.parse(fs.readFileSync(jsonDataPath));

describe("Check if OrangeHRM Support is opening", () => {
    beforeEach(async () => {
        await login(data.login.username, data.login.password);
    });
    it("Support customer care details", async() => {
        await DashboardPage.clickusername();
        await DashboardPage.clickonsupportButton();
        await SupportPage.checkCustomerCareText(data.support.customercare);
    });
    afterEach(async () => {
        await logout(data.logout.url);
    });
})

