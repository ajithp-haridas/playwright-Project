import {test,expect} from "@playwright/test";

test('selectInput',async ({page})=>{

page.goto("https://selenium.qabible.in/index.php")


const inputForm=page.getByRole('link',{name:"Input Form"})
await inputForm.click()

const selectInputMenu=page.getByRole('link',{name:"Select Input"})
await selectInputMenu.click()

const selectColor=page.locator('//select[@id="single-input-field"]')
await selectColor.selectOption('Green') //locate element from select menu

const selectedColor=page.locator('#message-one')
console.log(selectedColor)
const selectedColorContent=await selectedColor.textContent()

console.log(selectedColorContent)

//assertion

await expect(selectedColor).toHaveText(selectedColorContent) //entire text needed
await expect(selectedColorContent).toContain('Green')








})