const DashboardPage = require('../pageobjects/DashboardPage');
const MyInfoPage = require('../pageobjects/MyInfoPage');
const {login, logout} = require('../../commands/customCommands');
const fs = require('fs');
const path = require("path");
const jsonDataPath = path.join(__dirname, "..", "..", "testdata", "loginCred.json");
const data = JSON.parse(fs.readFileSync(jsonDataPath));

describe("Check if Employee Get Details gets modified", () => {
    beforeEach(async () => {
        await login(data.login.username, data.login.password);
    });
    it("Edit Employee", async() => {
        await DashboardPage.clickOnMyInfo();
        await MyInfoPage.checkpersonalDetailsElement(data.editemployee.personaldetail);
        await MyInfoPage.editemployeedetails(data.editemployee.firstname, data.editemployee.lastname, data.editemployee.empID);
        await MyInfoPage.savedetials();
        await MyInfoPage.fetchname(data.editemployee.firstname+" "+data.editemployee.lastname);
    });
    afterEach(async () => {
        await logout(data.logout.url);
    });
});

