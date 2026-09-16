import {CheckOutPage} from "./CheckOutPage"
import { LoginPage } from "./LoginPage"
import { CartPage } from "./CartPage"
import { ProductPage } from "./ProductPage"

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