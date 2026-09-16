import {CheckOutPage} from "../pagesTS/CheckOutPage"
import { LoginPage } from "../pagesTS/LoginPage"
import { CartPage } from "../pagesTS/CartPage"
import { ProductPage } from "../pagesTS/ProductPage"
import { Page } from "@playwright/test"

export class PomManager{

loginpage:LoginPage  //type of object is its class name
productpage:ProductPage
cartpage:CartPage
checkoutObject:CheckOutPage
constructor(page:Page){

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