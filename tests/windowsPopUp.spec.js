import {test,expect} from "@playwright/test";
test('windowPopup',async ({page})=>{

await page.goto('https://selenium.qabible.in/index.php')

const alertAndModals=page.getByRole('link',{name:"Alerts and Modals"})
await alertAndModals.click()

const windowPopupOption=page.getByRole('link',{name:'Window Popup'})
await windowPopupOption.click()

const faceBookLinkButton=page.getByRole('link',{name:'Like us On Facebook'})
console.log(await page.title())
//await page.pause()

const [newPage]=await Promise.all([
    page.waitForEvent('popup'), //wait for new page
    faceBookLinkButton.click() //click button for new page
])
await page.waitForLoadState() //race condition for new page to load
console.log(await newPage.title())

await newPage.getByLabel('Email address or phone number').fill("abcd");

await newPage.close()
})