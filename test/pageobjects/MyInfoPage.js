class MyInfoPage {
    get personalDetails(){
        return $("//h6[text()='Personal Details']");
    }
    get firstname(){
        return $("//input[@name='firstName']");
    }
    get middlename(){
        return $("//input[@name='middleName']");
    }
    get lastname(){
        return $("//input[@name='lastName']");
    }
    get id(){
        return $("//label[text()='Employee Id']//parent::div//following-sibling::div//input");
    }
    get save(){
        return $("//p[@class='oxd-text oxd-text--p orangehrm-form-hint']//following-sibling::button");
    }
    get fullname(){
        return $("//h6[@class='oxd-text oxd-text--h6 --strong']");
    }

    async checkpersonalDetailsElement(element){
        await expect(this.personalDetails).toHaveText(element);
    }
    async editemployeedetails(firstname, lastname, id){
        const firstNameField = await this.firstname;
        const middleNameField = await this.middlename;
        const lastNameField = await this.lastname;
        const idField = await this.id;
        await firstNameField.click();
        await browser.keys(['Control', 'a']);
        await browser.keys('Backspace');
        await firstNameField.setValue(firstname);
        await middleNameField.click();
        await browser.keys(['Control', 'a']);
        await browser.keys(['Backspace']);
        await lastNameField.click();
        await browser.keys(['Control', 'a']);
        await browser.keys('Backspace');
        await lastNameField.setValue(lastname);
        await idField.click();
        await browser.keys(['Control', 'a']);
        await browser.keys('Backspace');
        await idField.setValue(id);
        await browser.pause(3000);
    }
    async savedetials(){
        await this.save.click();
    }
    async fetchname(fullname){
        await browser.refresh();
        await expect(this.fullname).toHaveText(fullname);
    }
}
module.exports = new MyInfoPage();