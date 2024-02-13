const DashboardPage = require('../pageobjects/DashboardPage');
const {login, logout} = require('../../commands/customCommands');
const fs = require('fs');
const path = require("path");
const jsonDataPath = path.join(__dirname, "..", "..", "testdata", "loginCred.json");
const data = JSON.parse(fs.readFileSync(jsonDataPath));

describe("Check if OrangeHRM Official Page is opening", () => {
    beforeEach(async () => {
        await login(data.login.username, data.login.password);
    });
    it("Open Official Page", async() => {
        await DashboardPage.clickonorangehrmofficiallink();
        const newtitle = await DashboardPage.storewindows();
        console.log("Current title after swicthing:", newtitle);
        const maintitle = await DashboardPage.switchBackToMainWindow();
        console.log("Main Window title:", maintitle);
    });
    afterEach(async () => {
        await logout(data.logout.url);
    });
});
