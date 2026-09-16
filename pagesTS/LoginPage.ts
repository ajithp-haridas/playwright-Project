import { Locator, Page } from "@playwright/test"

export class LoginPage{

    userName:Locator
    password:Locator
    loginButton:Locator
    page:Page
    constructor(page:Page){
        this.page=page

        this.userName=page.locator('#user-name')

        this.password=page.locator('#password')

        this.loginButton=page.locator('#login-button')

    }
   async gotoPage(){

    await this.page.goto('https://www.saucedemo.com/')
   }

   async validateUser(uname:string,pass:string){

await this.userName.fill(uname)

await this.password.fill(pass)

await this.loginButton.click()
   }
}