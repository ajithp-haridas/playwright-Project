import {test,expect} from "@playwright/test"

test('@Login radioButtonDemo',async ({page})=>{

await page.goto('https://selenium.qabible.in/index.php')

const inputForm=page.getByRole('link',{name:"Input Form"})
await inputForm.click()

const radioButtonMenu=page.getByRole('link',{name:"Radio Buttons Demo"})
await radioButtonMenu.click()

const genderOption=page.locator('//label[@for="inlineRadio1"]')
await genderOption.click()

const showSelectedValue=page.getByRole('button',{name:'Show Selected Value'})
await showSelectedValue.click()

const textLocator=page.locator('#message-one')
const actualText=await textLocator.textContent()
console.log(actualText)

await expect(actualText).toContain('Male')

const patientGender=page.locator('//label[@for="inlineRadio11"]')
await patientGender.click()


const patientAge=page.locator('//label[@for="inlineRadio22"]')
await patientAge.click()

const getResults=page.locator('#button-two')
await getResults.click()

const resultTextLocator=page.locator('#message-two')
const resultsTextContent=await resultTextLocator.textContent()

console.log(resultsTextContent)

await expect(resultsTextContent).toContain('1 to 18')







})