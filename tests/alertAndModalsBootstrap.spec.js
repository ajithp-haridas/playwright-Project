import {test,expect} from "@playwright/test";

test('bootstrapModal',async ({page})=>{


await page.goto('https://selenium.qabible.in/index.php')

const alertAndModals=page.getByRole('link',{name:"Alerts and Modals"})
await alertAndModals.click()

const bootStrapModal=page.getByRole('link',{name:"Bootstrap Modal"})
await bootStrapModal.click()

const singleLaunchModal=page.getByRole('button',{name:"Launch modal"}).nth(0)
await singleLaunchModal.click()

const modalWindow=page.getByRole('document') //child window
const saveChange=modalWindow.getByRole('button',{name:"Save changes"})

await saveChange.click()

const close=modalWindow.locator('//button[@class="btn btn-secondary"]').first()
await close.click()



//multiple modal

const multipleLaunchModal=page.getByRole('button',{name:"Launch modal"}).nth(1)
await multipleLaunchModal.click()

const childModalWindow=page.getByRole('document') //child window
const launchAnotherModal=childModalWindow.getByRole('button',{name:"Launch another modal"})
    await launchAnotherModal.click()

const secondChildModal=page.locator("//div[@id='exampleModalCenter2']//div[@class='modal-content']")
const secondModalSave=secondChildModal.getByRole('button',{name:"Save changes"})
    await secondModalSave.click()

const secondModalClose=secondChildModal.locator("(//button[@type='button'][normalize-space()='Close'])[3]")
    await secondModalClose.click()

const firstChildModalSave=childModalWindow.locator("//div[@class='modal-dialog modal-dialog-centered modal-lg']//button[@type='button'][normalize-space()='Save changes']")
    await firstChildModalSave.click()

const firstChildModalClose=childModalWindow.locator("(//button[@type='button'][normalize-space()='Close'])[2]")
    await firstChildModalClose.click()

})