import { Locator, Page } from "@playwright/test"

const{expect}=require('@playwright/test')
export class CheckOutPage{

    page:Page
    firstName:Locator
    lastName:Locator
    postalCode:Locator
    continueButton:Locator
    finish:Locator
    thankYouMessage:Locator

    constructor(page:Page){

        this.page=page
         
              this.firstName=page.locator('#first-name')
             this.lastName=page.locator('#last-name')
             this.postalCode=page.locator('#postal-code')
             this.continueButton=page.locator('#continue')
             this.finish=page.locator('#finish')
             this.thankYouMessage=page.locator('.complete-header')
    }

    async checkOut(fname:string,lname:string,zip:string){
   

    await this.firstName.fill(fname)

await this.lastName.fill(lname)

await this.postalCode.fill(zip)

await this.continueButton.click()

await this.finish.click()

 
}

async confirmOrder(){

    const thankYouMessageText=await this.thankYouMessage.textContent()
 
await expect(thankYouMessageText).toContain('Thank you')
}
}