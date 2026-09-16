import test from "@playwright/test";

test('keyboardActions',async ({page})=>{

    await page.goto('https://selenium.qabible.in/simple-form-demo.php')

    const enterMessageInput=page.locator('#single-input-field')
    await enterMessageInput.focus() //focus or click
    await page.keyboard.type('good morning')

    await page.keyboard.press('Control+A')
    await page.keyboard.press('Control+C')

    const inputBox=page.locator('#value-a')
    await inputBox.click()
    await page.keyboard.press('Control+V')

    //hover
    const showMessageButton=page.locator('#button-one')
    await showMessageButton.hover()
    //right click
    await showMessageButton.click({button:'right'})
    await page.waitForTimeout(3000)

    //double click

    await showMessageButton.dblclick()

    //Triple click

    await showMessageButton.click({clickCount:3})
})