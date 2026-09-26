import {CheckOutPage} from "./CheckOutPage.js"
import { LoginPage } from "./LoginPage.js"
import { CartPage } from "./CartPage.js"
import { ProductPage } from "./ProductPage.js"

export class PomManager{

constructor(page){

this.loginpage=new LoginPage(page) //loginpage class object and passing page object to the LoginPage class

this.productpage=new ProductPage(page)

this.cartpage=new CartPage(page)

this.checkoutObject=new CheckOutPage(page)
    
}

getLoginPage(){
    return this.loginpage
}

getProductPage(){
    return this.productpage
}

getCartPage(){
    return this.cartpage
}

getCheckOutPage(){
    return this.checkoutObject
}

}