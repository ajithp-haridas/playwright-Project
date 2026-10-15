import { test, expect } from '@playwright/test';
test('screenshot',async ({page})=>{

await page.goto('https://www.saucedemo.com/')

//page level screenshot
await page.screenshot({path:'screenshot/screenshot.png',fullPage:true})

//element level screenshot
const loginButton=page.locator('#login-button')
await loginButton.screenshot({path:'screenshot/loginButton.png'})

})


//visual comparison

test.only('visual comparison',async ({page})=>{

await page.goto('https://www.saucedemo.com/')

await expect(page).toHaveScreenshot('screenshot/screenshot2.png')


})