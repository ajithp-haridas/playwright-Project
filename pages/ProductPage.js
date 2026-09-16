export class ProductPage{

constructor(page){
    this.page=page
this.itemLocator=page.locator('.inventory_item_name')
 this.shoppingCartLink=page.locator('.shopping_cart_link')
this.itemDescription=page.locator('.inventory_item_description')

    

}

async selectProduct(myProduct){
const allProducts=await this.itemLocator.allTextContents()

const productCount=await this.itemLocator.count()

for(let i=0;i<productCount;i++){
    if(await this.itemDescription.nth(i).locator('.inventory_item_name').textContent()==myProduct){
    
        const cartButton=this.itemDescription.nth(i).getByText('Add to cart')
        await cartButton.click()

    
        
    }

}
}
async navigateShoppingCart(){
await this.shoppingCartLink.click()
}

}