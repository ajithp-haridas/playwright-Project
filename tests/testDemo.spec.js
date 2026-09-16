import test, { expect } from "@playwright/test";

test('locator',async ({page})=>{

    await page.goto('https://selenium.qabible.in/form-submit.php')

        const firstName=page.locator('#validationCustom01') //id
        await firstName.fill('abc')

        //await page.pause()

    //class
        const lastName=page.locator('.form-control').nth(1)
        await lastName.fill('test')
        //await page.pause()

        //attribute=value
        const userName=page.locator('input[placeholder="Username"]')
        await userName.fill('testdemo')

       //xpath
        const city=page.locator('//input[@id="validationCustom03"]')
        await city.fill('Kochi')

        //getBy

        const state=page.getByPlaceholder('State')

       await state.fill('kerala')

       const checkBox=page.getByLabel('Agree to terms and conditions')
        await checkBox.click()


        //zip locate

        /*const zip=page.locator('//input[@id="validationCustom05"]')
        await zip.fill('hhkds')*/

        const zip=page.getByPlaceholder('Zip')
        await zip.fill('test')



        //getByRole

    const button=page.getByRole('button',{name:"Submit form"})
    await button.click()

    const successMsg=page.locator('//div[@id="message-one"]')
    
    await expect(successMsg).toBeVisible() //assertion

    //await expect(successMsg).not.toBeVisible() //assertion for button not visible
    
const booleanValue=await successMsg.isVisible()
console.log(booleanValue)

await expect(booleanValue).toBeTruthy() //Hard assertion, pass only value is true

    const messageText=await successMsg.textContent() //textContent is fetching the text

    console.log(messageText)

//assertion
    await expect(messageText).toContain('successfully!') //toContain checking the substring from a string
   


})