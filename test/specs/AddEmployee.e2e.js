const DashboardPage = require('../pageobjects/DashboardPage');
const PIMPage = require('../pageobjects/PIMPage');
const {login, logout} = require('../../commands/customCommands');
const fs = require('fs');
const path = require("path");
const jsonDataPath = path.join(__dirname, "..", "..", "testdata", "loginCred.json");
const data = JSON.parse(fs.readFileSync(jsonDataPath));

describe("Check if Employee Exist", () => {
    beforeEach(async () => {
        await login(data.login.username, data.login.password);
    });
    it("Add Employee", async() => {
        await DashboardPage.clickOnPIM();
        await PIMPage.checkPIMElement(data.addemployee.pim);
        await PIMPage.clickOnAddEmployee();
        await PIMPage.checkAddEmployeeElement(data.addemployee.addemp);
        await PIMPage.createEmployee(data.addemployee.firstName, data.addemployee.lastName, data.addemployee.lastfourdigitemployeeId);
        const retriveid = await PIMPage.fetchID();
        console.log("Fetched ID Value:", await retriveid);
        await PIMPage.save();
        await PIMPage.personaldetailsText(data.addemployee.personaldetail);
        await PIMPage.employeeListElement();
        await PIMPage.searchID(retriveid);
        await PIMPage.employeeSearch();
        await PIMPage.recordserachText(data.addemployee.recordfound);
    });
    afterEach(async () => {
        await logout(data.logout.url);
    });
});
