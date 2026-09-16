import { Locator, Page } from "@playwright/test"

const{expect}=require('@playwright/test')

export class CartPage{

page:Page
shoppingCartProduct:Locator
checkOutButton:Locator

constructor(page:Page){

    this.page=page
     this.shoppingCartProduct= page.locator('.inventory_item_name')
    this.checkOutButton=page.locator('#checkout')

}
async validateProduct(myProduct:any){
    const shoppingCartProductDetail=await this.shoppingCartProduct.textContent()
    await expect(myProduct).toBe(shoppingCartProductDetail)
}

async navigateCheckout(){
     await this.checkOutButton.click()
}

}