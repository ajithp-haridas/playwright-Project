//username and password empty (emptytest)
//username empty correct password
//password empty correct username
//incorrect username and valid password
//incorrect password valid username

//validate the error

import {test,expect} from "@playwright/test";

test('empty test',async ({page})=>{

await page.goto('https://www.saucedemo.com/')

const loginButton=page.locator('#login-button')
await loginButton.click()

const errorText=await page.locator("//div[@class='error-message-container error']").textContent()
await expect(errorText).toContain('Username is required')


})


test('empty username and correct password',async ({page})=>{

await page.goto('https://www.saucedemo.com/')


const password=page.locator('#password')
await password.fill('secret_sauce')

const loginButton=page.locator('#login-button')
await loginButton.click()

const errorText=await page.locator("//div[@class='error-message-container error']").textContent()
await expect(errorText).toContain('Username is required')


})


test('valid username and empty password',async ({page})=>{

await page.goto('https://www.saucedemo.com/')

const userName=page.locator('#user-name')
await userName.fill('standard_user')

const loginButton=page.locator('#login-button')
await loginButton.click()

const errorText=await page.locator("//div[@class='error-message-container error']").textContent()
await expect(errorText).toContain('Password is required')


})


test('Incorrect username and valid password',async ({page})=>{

await page.goto('https://www.saucedemo.com/')

const userName=page.locator('#user-name')
await userName.fill('abc')

const password=page.locator('#password')
await password.fill('secret_sauce')

const loginButton=page.locator('#login-button')
await loginButton.click()

const errorText=await page.locator("//div[@class='error-message-container error']").textContent()
await expect(errorText).toContain('Username and password do not match any user in this service')
})


test('Valid username and incorrect password',async ({page})=>{

await page.goto('https://www.saucedemo.com/')

const userName=page.locator('#user-name')
await userName.fill('standard_user')

const password=page.locator('#password')
await password.fill('abc')

const loginButton=page.locator('#login-button')
await loginButton.click()

const errorText=await page.locator("//div[@class='error-message-container error']").textContent()
await expect(errorText).toContain('Username and password do not match any user in this service')
})

