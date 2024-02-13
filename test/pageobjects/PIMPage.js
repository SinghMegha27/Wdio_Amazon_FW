class PIMPage {
    get pimText(){
        return $("//h6[text()='PIM']");
    }
    get addEmployee(){
        return $("//a[text()='Add Employee']");
    }
    get addEmployeeText(){
        return $("//h6[text()='Add Employee']");
    }
    get firstname(){
        return $("//input[@name='firstName']");
    }
    get lastname(){
        return $("//input[@name='lastName']");
    }
    get id(){
        return $("//div[@class='oxd-input-group__label-wrapper']//following-sibling::div//input[@class='oxd-input oxd-input--active']");
    }
    get idvalue(){
        return $("/html/body/div/div[1]/div[2]/div[2]/div/div/form/div[1]/div[2]/div[1]/div[2]/div/div/div[2]/input");
    }
    get submit(){
        return $("//button[@type='submit']");
    }
    get personaldetailselement(){
        return $("//h6[text()='Personal Details']");
    }
    get employeeList(){
        return $("//a[text()='Employee List']");
    }
    get serachButton(){
        return $("//button[@type='submit']");
    }
    get recordsearch(){
        return $("//span[text()='(1) Record Found']");
    }
    get firstempId(){
        return $('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[2]/div[3]/div/div[2]/div[1]/div/div[2]/div');
    }
    get empID(){
        return $("//label[text()='Employee Id']//parent::div//following-sibling::div//input");
    }
    get searchEmpID(){
        return $("//button[@type='submit']");
    }
    get delete(){
        return $('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[2]/div[3]/div/div[2]/div/div/div[9]/div/button[1]/i');
    }
    get yesdelete(){
        return $("//button[@class='oxd-button oxd-button--medium oxd-button--label-danger orangehrm-button-margin']");
    }
    async checkPIMElement(element){
        await expect(this.pimText).toHaveText(element);
    }
    async clickOnAddEmployee(){
        await this.addEmployee.click();
    }
    async checkAddEmployeeElement(element){
        await expect(this.addEmployeeText).toHaveText(element);
    }
    async createEmployee(firstname, lastname, id){
        await this.firstname.setValue(firstname);
        await this.lastname.setValue(lastname);
        const idField = await this.id;
        await idField.click();
        await browser.keys(['Control', 'a']);
        await browser.keys('Backspace');
        await idField.setValue(id);
    }
    async fetchID(){
        return await this.idvalue.getValue();
    }
    async save(){
        await this.submit.click();
    }
    async personaldetailsText(element){
        await this.personaldetailselement.waitForDisplayed();
        await expect(this.personaldetailselement).toHaveText(element);
    }
    async employeeListElement(){
        await this.employeeList.click();
    }
    async searchID(id){
        await this.id.setValue(id);
        await browser.pause(2000);
    }
    async employeeSearch(){
        await this.serachButton.click();
    }
    async recordserachText(element){
        await this.recordsearch.waitForDisplayed();
        await expect(this.recordsearch).toHaveText(element);
    }
    async getEmp(){
        await this.firstempId.waitForExist({ timeout: 5000 });
        return await this.firstempId.getText();
    }
    async typeEmpId(empID){
        await this.empID.setValue(empID);
    }
    async clickSearch(){
        await this.searchEmpID.click();
    }
    async deleteemp(){
        await this.delete.click();
    }
    async confirmdelete(){
        await this.yesdelete.click();
        await browser.pause(5000);
    }
}
module.exports = new PIMPage();