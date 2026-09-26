import { Given,When,Then } from "@cucumber/cucumber";
import {PomManager} from "../../pages/PageObjectManager.js"
import { chromium } from "@playwright/test";
/*import { createRequire } from "module";
const require=createRequire(import.meta.url)
const {Given,When,Then}=require("@cucumber/cucumber")
const {PomManager}=require("../../pages/PageObjectManager")
const {chromium}=require("@playwright/test") */

let pomObject
let browser
let context
let page
Given('navigate to the URL and login the application with {string} and {string}', async function (uname, password) {
  browser=await chromium.launch({headless:false}) //browser launch
  context=await browser.newContext()
  page=await context.newPage()

    pomObject=new PomManager(page)
    let loginpage=pomObject.getLoginPage()
    await loginpage.gotoPage()
    await loginpage.validateUser(uname,password)
    
});

When('select the {string} and add to the cart',async function (product) {
  

let productpage=pomObject.getProductPage()
await productpage.selectProduct(product)
await productpage.navigateShoppingCart()

});

Then('validate the {string} and displayed in the cart',async function (product) {
  


let cartpage=pomObject.getCartPage()
await cartpage.validateProduct(product)
await cartpage.navigateCheckout()
});

When('enter the valid details {string} and {string} and {string}',async function (fname, lname, zip) {


let checkoutObject=pomObject.getCheckOutPage()
await checkoutObject.checkOut(fname,lname,zip)

});

Then('place the order',async function () {


let checkoutObject=pomObject.getCheckOutPage()
await checkoutObject.confirmOrder()

});