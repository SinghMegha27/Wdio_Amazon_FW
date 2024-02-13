const DashboardPage = require('../pageobjects/DashboardPage');
const PIMPage = require('../pageobjects/PIMPage');
const {login, logout} = require('../../commands/customCommands');
const fs = require('fs');
const path = require("path");
const jsonDataPath = path.join(__dirname, "..", "..", "testdata", "loginCred.json");
const data = JSON.parse(fs.readFileSync(jsonDataPath));

describe("Check if Employee Exist After Deletion", () => {
    beforeEach(async () => {
        await login(data.login.username, data.login.password);
    });
    it("Delete Employee", async() => {
        await DashboardPage.clickOnPIM();
        await PIMPage.checkPIMElement(data.addemployee.pim);
        const empIDoffirstrecord = await PIMPage.getEmp();
        console.log("First record emp id:", empIDoffirstrecord);
        await PIMPage.typeEmpId(empIDoffirstrecord);
        await PIMPage.clickSearch();
        await PIMPage.deleteemp();
        await PIMPage.confirmdelete();
    });
    afterEach(async () => {
        await logout(data.logout.url);
    });
});
