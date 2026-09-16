const{expect}=require('@playwright/test')

export class CartPage{

constructor(page){

    this.page=page
     this.shoppingCartProduct= page.locator('.inventory_item_name')
    this.checkOutButton=page.locator('#checkout')

}
async validateProduct(myProduct){
    const shoppingCartProductDetail=await this.shoppingCartProduct.textContent()
    await expect(myProduct).toBe(shoppingCartProductDetail)
}

async navigateCheckout(){
     await this.checkOutButton.click()
}

}