
export class LoginPage{

    constructor(page){
        this.page=page

        this.userName=page.locator('#user-name')

        this.password=page.locator('#password')

        this.loginButton=page.locator('#login-button')

    }
   async gotoPage(){

    await this.page.goto('https://www.saucedemo.com/')
   }

   async validateUser(uname,pass){

await this.userName.fill(uname)

await this.password.fill(pass)

await this.loginButton.click()
   }
}