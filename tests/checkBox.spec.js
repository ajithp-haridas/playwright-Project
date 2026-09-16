
import {expect,test} from "@playwright/test"
test('checkBox',async ({page})=>{

await page.goto('https://selenium.qabible.in/index.php')

const inputForm=page.getByRole('link',{name:"Input Form"})
await inputForm.click()

const checkBoxMenu=page.getByRole('link',{name:"Checkbox Demo"})
await checkBoxMenu.click()

const checkBoxText=page.getByLabel("Click on this check box")
await checkBoxText.click()

//check box checked or not assertion
const booleanVal=await checkBoxText.isChecked()
console.log(booleanVal)

//await checkBoxText.uncheck()
await expect(checkBoxText).toBeChecked()


}

)