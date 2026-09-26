//const{expect}=require('@playwright/test')
import {expect} from '@playwright/test'
export class CheckOutPage{

    constructor(page){

        this.page=page
         
              this.firstName=page.locator('#first-name')
             this.lastName=page.locator('#last-name')
             this.postalCode=page.locator('#postal-code')
             this.continueButton=page.locator('#continue')
             this.finish=page.locator('#finish')
             this.thankYouMessage=page.locator('.complete-header')
    }

    async checkOut(fname,lname,zip){
   

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