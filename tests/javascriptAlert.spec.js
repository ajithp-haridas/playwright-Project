import {test,expect} from "@playwright/test";

test('javascriptAlert',async ({page})=>{


await page.goto('https://selenium.qabible.in/index.php')

const alertAndModals=page.getByRole('link',{name:"Alerts and Modals"})
await alertAndModals.click()

const javascriptAlertMenu=page.getByRole('link',{name:"Javascript Alert"})
await javascriptAlertMenu.click()

const clickMe1=page.locator("//button[@class='btn btn-warning']")
//await clickMe1.click()

//Handling js alert
page.on('dialog',async(dialog)=>{
await page.waitForTimeout(5000)
    //await dialog.accept()
    await dialog.dismiss()
})
await clickMe1.click()
//await page.pause()

const cancelTextLocator=page.locator("//p[@id='confirm-demo']")
const cancelTextContent=await cancelTextLocator.textContent()

await expect(cancelTextContent).toContain('Cancel')



})

test.only('javascriptAlertPrompt',async ({page})=>{


await page.goto('https://selenium.qabible.in/index.php')

const alertAndModals=page.getByRole('link',{name:"Alerts and Modals"})
await alertAndModals.click()

const javascriptAlertMenu=page.getByRole('link',{name:"Javascript Alert"})
await javascriptAlertMenu.click()


const promptButton=page.locator('.btn.btn-danger')

page.on('dialog',async(dialog)=>{
await page.waitForTimeout(5000)

console.log(dialog.message())
await dialog.accept('welcome')//accept with message

})
await promptButton.click()


//assetion check contains welcome

const promptMessageLocator=page.locator("//p[@id='prompt-demo']")
const promptMessageText=await promptMessageLocator.textContent()
await console.log(promptMessageText)
await expect(promptMessageText).toContain('welcome')
})

