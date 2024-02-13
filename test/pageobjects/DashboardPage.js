const assert = require('assert');

class DashboardPage {
    get loginText(){
        return $('//h6[text()="Dashboard"]');
    }
    get pim(){
        return $("//a[contains(@href,'viewPimModule')]");
    }
    get myinfo(){
        return $("//a[contains(@href,'viewMyDetails')]");
    }
    get orangehrmofficiallink(){
        return $("//p//a[contains(@href,'orangehrm')]");
    }
    get usernamedropdown(){
        return $("//span[@class='oxd-userdropdown-tab']");
    }
    get logoutButton(){
        return $("//a[text()='Logout']");
    }
    get supportButton(){
        return $("//a[text()='Support']");
    }

    async checkLoginElement(element){
        await expect(this.loginText).toHaveText(element);
    }
    async clickOnPIM(){
        await this.pim.click();
    }
    async clickOnMyInfo(){
        await this.myinfo.click();
    }
    async clickonorangehrmofficiallink(){
        await this.orangehrmofficiallink.click();
    }
    async storewindows(){
        const windows = await browser.getWindowHandles();
        const current_window = await browser.getWindowHandle();
        const current_title = await browser.getTitle();
        for(let handle of windows){
            if(handle!=current_window){
                await browser.switchToWindow(handle);
                const title = await browser.getTitle();
                await assert.notStrictEqual(title, current_title);
                return title;
            }
        }
    }
    async switchBackToMainWindow(){
        const windows = await browser.getWindowHandles();
        const current_window = await browser.getWindowHandle();
        const current_title = await browser.getTitle();
        for(let handle of windows){
            if(handle!=current_window){
                await browser.switchToWindow(handle);
                const newtitle = await browser.getTitle();
                await assert.notStrictEqual(newtitle, current_title);
                return newtitle;
            }
        }
    }
    async clickusername(){
        await this.usernamedropdown.click();
    }
    async clicklogoutButton(){
        await this.logoutButton.waitForClickable();
        await this.logoutButton.click();
    }
    async clickonsupportButton(){
        await this.supportButton.waitForClickable();
        await this.supportButton.click();
    }
}
module.exports = new DashboardPage();