import {test} from "@playwright/test";
import { PomManager } from "../pagesTS/PageObjectManager"
import inputData from "../utils/inputData.json"
//const inputObject=JSON.parse(JSON.stringify(inputData)) //json converted into string using stringify.Then string converted into js object using parse
let currentDate=new Date().toLocaleDateString()
for(let inputObject of inputData){
//test(`DemoProject ${inputObject.myProduct} ${currentDate}`,async ({page})=>{

test('DemoProject'+inputObject.myProduct+','+ currentDate,async ({page})=>{

let pomObject=new PomManager(page)
let loginpage=pomObject.getLoginPage()
await loginpage.gotoPage()
await loginpage.validateUser(inputObject.username,inputObject.password)//data driven, the data passing from json


let productpage=pomObject.getProductPage()
await productpage.selectProduct(inputObject.myProduct)
await productpage.navigateShoppingCart()


let cartpage=pomObject.getCartPage()
await cartpage.validateProduct(inputObject.myProduct)
await cartpage.navigateCheckout()


let checkoutObject=pomObject.getCheckOutPage()
await checkoutObject.checkOut(inputObject.firstname,inputObject.lastname,inputObject.zipcode)
await checkoutObject.confirmOrder()





})

}