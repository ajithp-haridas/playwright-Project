import {test,expect} from "@playwright/test";
import {customTest} from "../utils/customData.js"
import {myTest} from "../utils/sampleCustom.js"
import {locatorCustom} from "../utils/baseTest.js"

test.skip('DemoProject',async ({page})=>{

await page.goto('https://www.saucedemo.com/',{waitUntil:'networkidle'}) //race condition

const userName=page.locator('#user-name')
await userName.fill('standard_user')

const password=page.locator('#password')
await password.fill('secret_sauce')

const loginButton=page.locator('#login-button')
await loginButton.click()


const allProducts=await page.locator('.inventory_item_name').allTextContents()
console.log(allProducts)

const productCount=await page.locator('.inventory_item_name').count()
console.log(productCount)

const myProduct='Sauce Labs Fleece Jacket'
for(let i=0;i<productCount;i++){
    if(await page.locator('.inventory_item_description').nth(i).locator('.inventory_item_name').textContent()==myProduct){

        const cartButton=page.locator('.inventory_item_description').nth(i).getByText('Add to cart')
        await cartButton.click()

    
        
    }
}
const shoppingCartLink=page.locator('.shopping_cart_link')
await shoppingCartLink.click()

const shoppingCartProduct=await page.locator('.inventory_item_name').textContent()
await expect(myProduct).toBe(shoppingCartProduct)

const checkOutButton=page.locator('#checkout')
await checkOutButton.click()


const firstName=page.locator('#first-name')
await firstName.fill('abc')
const lastName=page.locator('#last-name')
await lastName.fill('test')
const postalCode=page.locator('#postal-code')
await postalCode.fill('113441')

const continueButton=page.locator('#continue')
await continueButton.click()

await page.locator('#finish').click()

const thankYouMessage=await page.locator('.complete-header').textContent()

await expect(thankYouMessage).toContain('Thank you')


})


customTest.skip("sample custom test",async ({page,loginData})=>{

    await page.goto('https://www.saucedemo.com/')

const userName=page.locator('#user-name')
await userName.fill(loginData.username)


const password=page.locator('#password')
await password.fill(loginData.password)


const loginButton=page.locator('#login-button')
await loginButton.click()
})


myTest.skip("my test",async ({page,userDetail})=>{
for(const user of userDetail){
    await page.goto('https://www.saucedemo.com/')

const userName=page.locator('#user-name')
await userName.fill(user.username)


const password=page.locator('#password')
await password.fill(user.password)


const loginButton=page.locator('#login-button')
await loginButton.click()
}
})

locatorCustom('base Test',async({page,loginFunction})=>{

    await loginFunction('standard_user','secret_sauce')


    
})

