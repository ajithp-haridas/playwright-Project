import test from "@playwright/test"

exports.locatorCustom=test.extend({

commonLocators:async ({page},use)=>{ //use call back function,commonLocators- fixtures
  const locators={
    userName:page.locator('#user-name'),
    password:page.locator('#password'),
    loginButton:page.locator('#login-button')
  }
  await use(locators)
},
loginFunction:async ({page,commonLocators},use)=>{
    const loginAction=async(uname,pwd)=>{
        await page.goto('https://www.saucedemo.com/')
        await commonLocators.userName.fill('standard_user')
        await commonLocators.password.fill('secret_sauce')
        await commonLocators.loginButton.click()
    }
    await use(loginAction)
}

})