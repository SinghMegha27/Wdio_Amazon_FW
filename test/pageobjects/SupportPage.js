class SupportPage {
    get customercaretext(){
        return $("//p[text()='Customer Support']");
    }

    async checkCustomerCareText(element){
        await expect(this.customercaretext).toHaveText(element);
    }
}
module.exports = new SupportPage();