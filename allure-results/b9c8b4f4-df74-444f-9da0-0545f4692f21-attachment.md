# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: javascriptAlert.spec.js >> javascriptAlertPrompt
- Location: tests\javascriptAlert.spec.js:35:6

# Error details

```
Test timeout of 50000ms exceeded.
```

```
Error: locator.click: Test timeout of 50000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'Alerts and Modals' })

```

# Test source

```ts
  1  | import {test,expect} from "@playwright/test";
  2  | 
  3  | test('javascriptAlert',async ({page})=>{
  4  | 
  5  | 
  6  | await page.goto('https://selenium.qabible.in/index.php')
  7  | 
  8  | const alertAndModals=page.getByRole('link',{name:"Alerts and Modals"})
  9  | await alertAndModals.click()
  10 | 
  11 | const javascriptAlertMenu=page.getByRole('link',{name:"Javascript Alert"})
  12 | await javascriptAlertMenu.click()
  13 | 
  14 | const clickMe1=page.locator("//button[@class='btn btn-warning']")
  15 | //await clickMe1.click()
  16 | 
  17 | //Handling js alert
  18 | page.on('dialog',async(dialog)=>{
  19 | await page.waitForTimeout(5000)
  20 |     //await dialog.accept()
  21 |     await dialog.dismiss()
  22 | })
  23 | await clickMe1.click()
  24 | //await page.pause()
  25 | 
  26 | const cancelTextLocator=page.locator("//p[@id='confirm-demo']")
  27 | const cancelTextContent=await cancelTextLocator.textContent()
  28 | 
  29 | await expect(cancelTextContent).toContain('Cancel')
  30 | 
  31 | 
  32 | 
  33 | })
  34 | 
  35 | test.only('javascriptAlertPrompt',async ({page})=>{
  36 | 
  37 | 
  38 | //await page.goto('https://selenium.qabible.in/index.php')
  39 | 
  40 | const alertAndModals=page.getByRole('link',{name:"Alerts and Modals"})
> 41 | await alertAndModals.click()
     |                      ^ Error: locator.click: Test timeout of 50000ms exceeded.
  42 | 
  43 | const javascriptAlertMenu=page.getByRole('link',{name:"Javascript Alert"})
  44 | await javascriptAlertMenu.click()
  45 | 
  46 | 
  47 | const promptButton=page.locator('.btn.btn-danger')
  48 | 
  49 | page.on('dialog',async(dialog)=>{
  50 | await page.waitForTimeout(5000)
  51 | 
  52 | console.log(dialog.message())
  53 | await dialog.accept('welcome')//accept with message
  54 | 
  55 | })
  56 | await promptButton.click()
  57 | 
  58 | 
  59 | //assetion check contains welcome
  60 | 
  61 | const promptMessageLocator=page.locator("//p[@id='prompt-demo']")
  62 | const promptMessageText=await promptMessageLocator.textContent()
  63 | await console.log(promptMessageText)
  64 | await expect(promptMessageText).toContain('welcome')
  65 | })
  66 | 
  67 | 
```