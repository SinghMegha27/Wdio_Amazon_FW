class SiginInPage {
    get username(){
        return $('//input[@name="username"]');
    }
    get password(){
        return $('//input[@name="password"]');
    }
    get loginButton(){
        return $('//button[@type="submit"]');
    }

    async login(username, password){
        await this.username.setValue(username);
        await this.password.setValue(password);
        await this.loginButton.click();
    }
    async siginurl(expectedurl){
        await expect(browser).toHaveUrl(expectedurl);
    }
    
}
module.exports = new SiginInPage();